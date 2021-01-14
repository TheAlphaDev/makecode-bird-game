
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Birdgame blocks and utilities.
 */
//% weight=100 color=#0fbc11 icon=""
namespace birdgame {
    /**
     * Test fibonacci function.
     * @param value Test variable.
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
    /**
     * Pauses for a time. B to the R to the U to the H
     * @param Pauses for this value.
     */
    //% block
    export function bruh(value: number): number {
        basic.pause(value);
        return value;
    }
    /**
     * Creates the bird
     */
    //% block
    export function newBird() {
        let bird: game.LedSprite = null
        return bird;
    }
}
