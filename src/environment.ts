// used to update the environment of neko
// use the default one for the browser
export interface NekoEnvironment {
  x: number;
  y: number;
  update: () => void;
}

export class browserEnvironment implements NekoEnvironment {
  x: number = 0;
  y: number = 0;
  update() {
    // TODO get cursorX, cursorY
  }
}
