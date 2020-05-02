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
    // plan the api
    return this;
  }
}

export class Run implements NekoState {
  img: string;
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0, img: string = 'nrun') {
    this.x = x;
    this.y = y;
    this.img = img;
  }

  // coordinate plane is upside down
  next(env: NekoEnvironment) {
    return this;
  }
}

function chooseRunPath(nx: number, ny: number, x: number, y: number): string {
  const dx = nx - x;
  const dy = ny - y;
  const diag = Math.hypot(dx, dy);
  let phi = calcAngleDegrees(dx, dy);

  //update this.x, this.y
  switch (true) {
    case -22.5 < phi && phi <= 22.5:
      return 'erun';
    case -67.5 < phi && phi <= -22.5:
      return 'nerun';
    case -112.5 < phi && phi <= -67.5:
      return 'nrun';
    case -157.5 < phi && phi <= -112.5:
      return 'nerun';

    default:
      break;
  }
  return this;
}

function calcAngleDegrees(x: any, y: any) {
  return (Math.atan2(y, x) * 180) / Math.PI;
}
