interface NekoConfig {
  speed: number;
}

// used to update the environment of neko
// use the default one for the browser
interface NekoEnvironment {
  cursorX: number;
  cursorY: number;
  updateEnvironment: () => {};
}

// holds the current state of neko to draw it
interface NekoState {
  x: number;
  y: number;

  img: string;
  next: (env: NekoEnvironment) => NekoState;
}

class Neko {
  config: NekoConfig;
  state: NekoState;

  constructor(config: NekoConfig, env: NekoEnvironment) {}

  // updates the state
  next = () => {};
}
