import { Neko } from './index';

// draws the neko to the screen
export interface NekoDrawer {
  draw: (n: Neko) => void;
}

export class browserDrawer {
  draw() {
    // TODO draw
    console.log('i do nothing');
  }
}
