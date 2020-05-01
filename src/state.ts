import { NekoEnvironment } from './environment';

// holds the current state of neko to draw it
export interface NekoState {
  img: string;
  x: number;
  y: number;
  next: (env: NekoEnvironment) => NekoState;
}

export class Still implements NekoState {
  img: string;
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
    this.img = 'still';
  }

  next(env: NekoEnvironment) {
    return this;
  }
}

export class Run implements NekoState {
  img: string;
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
    this.img = 'still';
  }

  // coordinate plane is upside down
  next(env: NekoEnvironment) {
    return this;
  }
}
