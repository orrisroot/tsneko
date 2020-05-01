import { NekoState, Still } from './state';
import { NekoEnvironment } from './environment';

export interface NekoConfig {
  speed: number;
}

export const defaultConfig: NekoConfig = {
  speed: 3,
};

class browserEnvironment implements NekoEnvironment {
  cursorX: number = 0;
  cursorY: number = 0;
  updateEnvironment() {
    // TODO get cursorX, cursorY
  }
}

class Neko {
  config: NekoConfig;
  state: NekoState;
  env: NekoEnvironment;

  constructor(config: NekoConfig, env: NekoEnvironment) {
    this.config = config;
    this.env = env;
    this.state = new Still();
  }

  // updates the state
  next = () => {
    this.env.updateEnvironment();
    this.state = this.state.next(this.env);
  };
}

export { Neko };

export let defaultNeko = () => {
  return new Neko(defaultConfig, new browserEnvironment());
};
