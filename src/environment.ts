// used to update the environment of neko
// use the default one for the browser
export interface NekoEnvironment {
  cursorX: number;
  cursorY: number;
  updateEnvironment: () => void;
}
