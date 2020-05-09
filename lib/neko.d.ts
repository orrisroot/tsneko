/**
 * This module provides {@link Neko} class which encapsulates neko logic
 *
 * Most users would want to use {@link defaultNeko}
 * @packageDocumentation
 */
/**
 * Represents the interface for configs<br>
 * Defines the behaviour of neko
 *
 * @export
 * @interface NekoConfig
 */
export interface NekoConfig {
    /** Used to update neko's position */
    speed: number;
    /**
     * Range where neko would not react to cursor<br>
     * i.e. when the cursor in the circle with the given radius
     */
    radius: number;
    /**
     * Returns the number of ticks before Itching<br>
     * Used after itching
     */
    ticksBeforeItch: () => number;
    /**
     * Returns the number of ticks before Scratching<br>
     * Used after scratching
     */
    ticksBeforeScratch: () => number;
    /**
     * Returns the number of ticks before Yawning<br>
     * Used after yawning
     */
    ticksBeforeYawn: () => number;
    /**
     * Returns the direction for the current scratch
     */
    scratchDirection: () => 's' | 'w' | 'e' | 'n';
}
/**
 * The default config for {@link Neko}
 *
 * Ticks and scratch direction are randomly generated
 */
export declare const defaultConfig: NekoConfig;
/**
 * Represents what Neko should implement so that it can be drawn on the screen
 *
 * Used in helper functions
 * See {@link "web"} module
 *
 * @export
 * @interface NekoInterface
 */
export interface NekoInterface {
    state: {
        x: number;
        y: number;
    };
    /** Updates the neko's state */
    update: (cursorX: number, cursorY: number) => void;
    img: string;
}
/**
 * Creates a {@link Neko} with {@link defaultConfig}
 */
export declare function defaultNeko(): NekoInterface;
/**
 * An implementation of neko
 *
 * @export
 * @class Neko
 * @implements {@link NekoInterface}
 */
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
    private checkState;
}
