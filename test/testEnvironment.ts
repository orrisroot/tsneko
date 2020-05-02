import { NekoEnvironment } from '../src/environment';

export class Env implements NekoEnvironment {
  x: number = 0;
  y: number = 0;

  constructor() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.cursors.push({ x: i * 10, y: j * 10 });
        this.cursors.push({ x: 10, y: 10 });
      }
    }
  }

  private i: number = -1;
  private cursors: { x: number; y: number }[] = [];

  update() {
    this.i++;
    this.x = this.cursors[this.i].x;
    this.y = this.cursors[this.i].y;
  }
}

export class StillEnv implements NekoEnvironment {
  x: number = 0;
  y: number = 0;

  private i: number = -1;
  private cursors: { x: number; y: number }[] = [
    { x: 10, y: 10 },
    { x: 0, y: 0 },
  ];

  update() {
    this.i++;
    this.x = this.cursors[this.i].x;
    this.y = this.cursors[this.i].y;
  }
}
