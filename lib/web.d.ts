/**
 * This module provides helper functions to use neko in the web
 *
 * Most users would want to use {@link runDefault}
 * @packageDocumentation
 */
import * as Neko from './index';
/**
 * Runs neko on the document
 *
 * @param {string} assetsDir
 * Directory with assets used for neko <br>
 * Images should be in _assetsDir/"img_name".gif_ format. See example directory
 *
 * @export
 * @returns used to remove neko from the document
 */
export declare function runDefault(assetsDir?: string): () => void;
/**
 * Runs neko on the document
 *
 * @export
 * @param {Neko.NekoInterface} n
 * A neko that satisfies the {@link NekoInterface}<br>
 * Most users would want to use the default implementation by supplying {@link defaultNeko}
 * @param {string} assetsDir
 * Directory with assets used for neko <br>
 * Images should be in _assetsDir/"img_name".gif_ format. See example directory
 * @returns used to remove neko from the document
 */
export declare function run(n: Neko.NekoInterface, assetsDir: string): () => void;
