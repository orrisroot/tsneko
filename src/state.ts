// holds the current state of neko to draw it
export interface NekoState {
  img: string;
  next: (x: number, y: number, env: NekoEnvironment) => NekoState;
}

export class StateStill implements NekoState {
  img: string;

  constructor() {
    this.img = 'still';
  }

  next(x: number, y: number, env: NekoEnvironment) {
    return this;
  }
}
