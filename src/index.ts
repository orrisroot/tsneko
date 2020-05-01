import { NekoState, StateStill } from './state';
interface NekoConfig {
  speed: number;
}

const defaultConfig: NekoConfig = {
  speed: 3,
};

class browserEnvironment implements NekoEnvironment {
  cursorX: 0;
  cursorY: 0;
  updateEnvironment() {
    this.cursorX += 1;
    this.cursorY += 1;
  }
}

class Neko {
  x: number;
  y: number;

  config: NekoConfig;
  state: NekoState;
  env: NekoEnvironment;

  constructor(config: NekoConfig, env: NekoEnvironment) {
    this.config = config;
    this.env = env;
    this.state = new StateStill();

    this.x = 0;
    this.y = 0;
  }

  // updates the state
  next = () => {
    this.env.updateEnvironment();
    this.state = this.state.next(this.x, this.y, this.env);
  };
}

export { Neko };

export let defaultNeko = () => {
  return new Neko(defaultConfig, new browserEnvironment());
};
