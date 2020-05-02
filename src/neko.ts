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
    img: string;
    x: number;
    y: number;
  } = { img: 'still', x: 0, y: 0 };

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

    if (this.state.img == 'still') {
      if (
        Math.hypot(this.state.x - this.env.x, this.state.y - this.env.y) < 10
      ) {
        this.state.img = 'alert';
      }
    }
    this.drawer.draw(this);
  };
}

export const defaultNeko = () => {
  return new Neko(defaultConfig, new browserEnvironment(), new browserDrawer());
};
