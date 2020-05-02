export interface NekoConfig {
  speed: number;
  radius: number;
  ticksBeforeItch: number;
}

export const defaultConfig: NekoConfig = {
  speed: 2,
  radius: 1,
  ticksBeforeItch: 5,
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
  } = { name: 'still', x: 0, y: 0, ticksBeforeItch: 5 };

  get img(): string {
    return `${this.state.direction ? this.state.direction : ''}${
      this.state.name
    }${this.state.tick ? this.state.tick : ''}`;
  }

  config: NekoConfig;

  constructor(config: NekoConfig) {
    this.config = { ...config };
    this.state.ticksBeforeItch = config.ticksBeforeItch;
  }

  // updates the state
  update = (x: number, y: number) => {
    if (this.state.name == 'still') {
      if (!this.cursorClose(x, y)) {
        this.state.name = 'alert';
        this.state.tick = null;
      }

      // todo make random
      if (this.state.ticksBeforeItch === 0) {
        this.state.name = 'itch';
        this.state.framesItch = 4;
        this.state.tick = 1;
        return;
      }

      this.state.ticksBeforeItch -= 1;
    } else if (this.state.name == 'itch') {
      if (!this.cursorClose(x, y)) {
        this.state.name = 'alert';
        this.state.tick = null;
        this.state.framesItch = null;
        this.state.ticksBeforeItch = this.config.ticksBeforeItch;
        return;
      }

      // done itching
      if (this.state.framesItch - 1 == 0) {
        this.state.name = 'still';
        this.state.tick = null;
        this.state.framesItch = null;
        this.state.ticksBeforeItch = this.config.ticksBeforeItch;
        return;
      }

      this.state.framesItch -= 1;
      this.state.tick = this.state.tick === 1 ? 2 : 1;
    } else if (this.state.name == 'alert') {
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
    } else if (this.state.name == 'run') {
      if (this.cursorClose(x, y)) {
        this.state.name = 'still';
        this.state.tick = null;
        this.state.direction = null;
        return;
      }

      this.state.direction = this.chooseRunDirection(x, y);
      this.state.tick = this.state.tick === 1 ? 2 : 1;
      this.makeStep(x, y);
    }
  };

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
