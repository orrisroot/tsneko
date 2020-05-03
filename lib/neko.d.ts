export interface NekoConfig {
    speed: number;
    radius: number;
    ticksBeforeItch: () => number;
    ticksBeforeScratch: () => number;
    ticksBeforeYawn: () => number;
    scratchDirection: () => 's' | 'w' | 'e' | 'n';
}
export declare const defaultConfig: NekoConfig;
export declare class Neko {
    state: {
        name: string;
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
    private makeStep;
    private cursorClose;
    private chooseRunDirection;
}
export declare const defaultNeko: () => Neko;
