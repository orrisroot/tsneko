import { NekoEnvironment, browserEnvironment } from './environment';
import { NekoDrawer, browserDrawer } from './drawer';

export interface NekoConfig {
  speed: number;
}

export const defaultConfig: NekoConfig = {
  speed: 1,
};

export class Neko {
  state: {
    name: string;
    x: number;
    y: number;
    tick?: number;
  } = { name: 'still', x: 0, y: 0 };

  get img(): string {
    return `${name}${this.state.tick ? this.state.tick : ''}`;
  }

  config: NekoConfig;
  env: NekoEnvironment;
  drawer: NekoDrawer;

  constructor(config: NekoConfig, env: NekoEnvironment, drawer: NekoDrawer) {
    this.config = config;
    this.env = env;
    this.drawer = drawer;
  }

  // updates the state
  update = () => {
    this.env.update();

    if (this.state.name == 'still') {
      if (!this.cursorClose()) {
        this.state.name = 'alert';
        this.state.tick = null;
      }
    } else if (this.state.name == 'alert') {
      if (this.cursorClose()) {
        this.state.name = 'still';
        this.state.tick = null;
        return;
      }

      // choose run direction
      // choose tick
      this.state.name = this.chooseRunDirection();
      if (this.state.tick) {
        this.state.tick = ((this.state.tick + 1) % 2) + 1;
      } else {
        this.state.tick = 1;
      }
    }
    this.drawer.draw(this);
  };

  private cursorClose() {
    // TODO remove magic number
    return (
      Math.hypot(this.state.x - this.env.x, this.state.y - this.env.y) < 10
    );
  }
  private chooseRunDirection(): string {
    const dx = this.env.x - this.state.x;
    const dy = this.env.y - this.state.y;
    const diag = Math.hypot(dx, dy);
    let phi = calcAngleDegrees(dx, dy);

    switch (true) {
      case -22.5 < phi && phi <= 22.5:
        return 'erun';
      case -67.5 < phi && phi <= -22.5:
        return 'nerun';
      case -112.5 < phi && phi <= -67.5:
        return 'nrun';
      case -157.5 < phi && phi <= -112.5:
        return 'nwrun';
      case (-180 <= phi && phi <= -157.5) || (157.5 < phi && phi <= 180):
        return 'wrun';
      case 112.5 < phi && phi <= 157.5:
        return 'swrun';
      case 67.5 < phi && phi <= 112.5:
        return 'srun';
      case 22.5 < phi && phi <= 67.5:
        return 'serun';

      default:
        throw Error(`error in finding path direction ${diag} ${phi}`);
    }
  }
}

function calcAngleDegrees(x: any, y: any) {
  return (Math.atan2(y, x) * 180) / Math.PI;
}

export const defaultNeko = () => {
  return new Neko(defaultConfig, new browserEnvironment(), new browserDrawer());
};
