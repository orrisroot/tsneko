import { NekoEnvironment } from '../src/environment';

export class testEnv implements NekoEnvironment {
  x: number = 0;
  y: number = 0;

  constructor() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.cursors.push({ x: i, y: j });
        this.cursors.push({ x: 1, y: 1 });
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
