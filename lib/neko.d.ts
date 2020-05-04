export interface NekoConfig {
    speed: number;
    radius: number;
    ticksBeforeItch: () => number;
    ticksBeforeScratch: () => number;
    ticksBeforeYawn: () => number;
    scratchDirection: () => 's' | 'w' | 'e' | 'n';
}
export declare const defaultConfig: NekoConfig;
export interface NekoInterface {
    state: {
        x: number;
        y: number;
    };
    update: (x: number, y: number) => void;
    img: string;
}
export declare const defaultNeko: () => NekoInterface;
export declare class Neko implements NekoInterface {
    state: {
        name: 'still' | 'itch' | 'alert' | 'run' | 'scratch' | 'yawn' | 'sleep';
        x: number;
        y: number;
        tick?: number;
        direction?: string;
        ticksBeforeItch: number;
        framesItch?: number;
        ticksBeforeScratch: number;
        framesScratch?: number;
        ticksBeforeYawn: number;
        framesYawn?: number;
    };
    get img(): string;
    config: NekoConfig;
    constructor(config: NekoConfig);
    update: (x: number, y: number) => void;
    updateSleep(x: number, y: number): void;
    updateYawn(x: number, y: number): void;
    updateScratch(x: number, y: number): void;
    updateStill(x: number, y: number): void;
    updateItch(x: number, y: number): void;
    updateAlert(x: number, y: number): void;
    updateRun(x: number, y: number): void;
    makeStep(x: number, y: number): void;
    cursorClose(x: number, y: number): boolean;
    chooseRunDirection(x: number, y: number): string;
}
