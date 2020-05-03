export interface NekoConfig {
  speed: number;
  radius: number;
  ticksBeforeItch: () => number;
  ticksBeforeScratch: () => number;
  ticksBeforeYawn: () => number;

  //generates scratch direction at each call
  scratchDirection: () => 's' | 'w' | 'e' | 'n';
}

const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const defaultConfig: NekoConfig = {
  speed: 10,
  radius: 10,
  ticksBeforeItch: () => {
    let min = 7;
    let max = 14;
    return randInt(min, max);
  },
  ticksBeforeScratch: () => {
    let min = 7;
    let max = 14;
    return randInt(min, max);
  },
  ticksBeforeYawn: () => {
    let min = 20;
    let max = 40;
    return randInt(min, max);
  },
  scratchDirection: () => {
    const directions = {
      1: 's',
      2: 'w',
      3: 'e',
      4: 'n',
    };
    const rnd = Math.floor(Math.random() * (5 - 1)) + 1;
    // @ts-ignore
    return directions[rnd];
  },
};

export class Neko {
  state: {
    name: string;
    x: number;
    y: number;
    tick?: number;
    direction?: string;
    ticksBeforeItch: number;
    framesItch?: number;
    ticksBeforeScratch: number;
    framesScratch?: number;
    ticksBeforeYawn: number;
    framesYawn?: number;
  } = {
    name: 'still',
    x: 0,
    y: 0,
    ticksBeforeItch: 5,
    ticksBeforeScratch: 5,
    ticksBeforeYawn: 10,
  };

  get img(): string {
    return `${this.state.direction ? this.state.direction : ''}${
      this.state.name
    }${this.state.tick ? this.state.tick : ''}`;
  }

  config: NekoConfig;

  constructor(config: NekoConfig) {
    this.config = { ...config };
    this.state.ticksBeforeItch = config.ticksBeforeItch();
    this.state.ticksBeforeScratch = config.ticksBeforeScratch();
    this.state.ticksBeforeYawn = config.ticksBeforeYawn();
  }

  // updates the state
  update = (x: number, y: number) => {
    if (this.state.name == 'still') {
      this.updateStill(x, y);
    } else if (this.state.name == 'itch') {
      this.updateItch(x, y);
    } else if (this.state.name == 'alert') {
      this.updateAlert(x, y);
    } else if (this.state.name == 'run') {
      this.updateRun(x, y);
    } else if (this.state.name == 'scratch') {
      this.updateScratch(x, y);
    } else if (this.state.name == 'yawn') {
      this.updateYawn(x, y);
    } else if (this.state.name == 'sleep') {
      this.updateSleep(x, y);
    }
  };

  updateSleep(x: number, y: number) {
    // reset ticks
    if (!this.cursorClose(x, y)) {
      this.state.name = 'alert';
      this.state.tick = null;
      this.state.ticksBeforeItch = this.config.ticksBeforeItch();
      this.state.ticksBeforeScratch = this.config.ticksBeforeScratch();
      return;
    }

    this.state.tick = this.state.tick === 1 ? 2 : 1;
  }

  updateYawn(x: number, y: number) {
    // reset ticks
    if (!this.cursorClose(x, y)) {
      this.state.name = 'alert';
      this.state.framesYawn = null;
      return;
    }

    if (this.state.framesYawn - 1 == 0) {
      this.state.name = 'sleep';
      this.state.tick = 1;
      this.state.framesYawn = null;
      this.state.ticksBeforeYawn = this.config.ticksBeforeYawn();
    }

    this.state.framesYawn -= 1;
  }

  updateScratch(x: number, y: number) {
    if (!this.cursorClose(x, y)) {
      this.state.name = 'alert';
      this.state.tick = null;
      this.state.framesScratch = null;
      this.state.ticksBeforeScratch = this.config.ticksBeforeScratch();
      this.state.direction = null;
      return;
    }

    // done scratching
    if (this.state.framesScratch - 1 == 0) {
      this.state.name = 'still';
      this.state.tick = null;
      this.state.framesScratch = null;
      this.state.ticksBeforeScratch = this.config.ticksBeforeScratch();
      this.state.direction = null;
      return;
    }

    this.state.framesScratch -= 1;
    this.state.tick = this.state.tick === 1 ? 2 : 1;
  }

  updateStill(x: number, y: number) {
    if (!this.cursorClose(x, y)) {
      this.state.name = 'alert';
      this.state.tick = null;
    }

    // todo make random
    if (this.state.ticksBeforeYawn === 0) {
      this.state.name = 'yawn';
      this.state.framesYawn = 2;
      return;
    }

    // todo make random
    if (this.state.ticksBeforeItch === 0) {
      this.state.name = 'itch';
      this.state.framesItch = 4;
      this.state.tick = 1;
      return;
    }

    // todo make random
    if (this.state.ticksBeforeScratch === 0) {
      this.state.name = 'scratch';
      this.state.framesScratch = 4;
      this.state.tick = 1;
      this.state.direction = this.config.scratchDirection();
      return;
    }

    this.state.ticksBeforeItch -= 1;
    this.state.ticksBeforeScratch -= 1;
  }
  updateItch(x: number, y: number) {
    if (!this.cursorClose(x, y)) {
      this.state.name = 'alert';
      this.state.tick = null;
      this.state.framesItch = null;
      this.state.ticksBeforeItch = this.config.ticksBeforeItch();
      return;
    }

    // done itching
    if (this.state.framesItch - 1 == 0) {
      this.state.name = 'still';
      this.state.tick = null;
      this.state.framesItch = null;
      this.state.ticksBeforeItch = this.config.ticksBeforeItch();
      return;
    }

    this.state.framesItch -= 1;
    this.state.tick = this.state.tick === 1 ? 2 : 1;
  }

  updateAlert(x: number, y: number) {
    if (this.cursorClose(x, y)) {
      this.state.name = 'still';
      this.state.tick = null;
      this.state.direction = null;
      return;
    }

    this.state.tick = 1;
    this.state.name = 'run';
    this.state.direction = this.chooseRunDirection(x, y);
    this.makeStep(x, y);
  }

  updateRun(x: number, y: number) {
    if (this.cursorClose(x, y)) {
      this.state.name = 'still';
      this.state.tick = null;
      this.state.direction = null;
      return;
    }

    this.state.ticksBeforeYawn = Math.max(this.state.ticksBeforeYawn - 1, 0);
    this.state.direction = this.chooseRunDirection(x, y);
    this.state.tick = this.state.tick === 1 ? 2 : 1;
    this.makeStep(x, y);
  }

  private makeStep(x: number, y: number) {
    // x=0 y=-10
    const dx = x - this.state.x;
    const dy = y - this.state.y;
    let phi = Math.atan2(dy, dx);

    this.state.x += this.config.speed * Math.cos(phi);
    this.state.y += this.config.speed * Math.sin(phi);
  }

  private cursorClose(x: number, y: number) {
    // TODO remove magic number
    return Math.hypot(this.state.x - x, this.state.y - y) < this.config.radius;
  }

  private chooseRunDirection(x: number, y: number): string {
    const dx = x - this.state.x;
    const dy = y - this.state.y;
    const diag = Math.hypot(dx, dy);
    let phi = calcAngleDegrees(dx, dy);

    // todo use math.pi
    switch (true) {
      case -22.5 < phi && phi <= 22.5:
        return 'e';
      case -67.5 < phi && phi <= -22.5:
        return 'ne';
      case -112.5 < phi && phi <= -67.5:
        return 'n';
      case -157.5 < phi && phi <= -112.5:
        return 'nw';
      case (-180 <= phi && phi <= -157.5) || (157.5 < phi && phi <= 180):
        return 'w';
      case 112.5 < phi && phi <= 157.5:
        return 'sw';
      case 67.5 < phi && phi <= 112.5:
        return 's';
      case 22.5 < phi && phi <= 67.5:
        return 'se';

      default:
        throw Error(`error in finding path direction ${diag} ${phi}`);
    }
  }
}

function calcAngleDegrees(x: any, y: any) {
  return (Math.atan2(y, x) * 180) / Math.PI;
}

export const defaultNeko = () => {
  return new Neko(defaultConfig);
};
