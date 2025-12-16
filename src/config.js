/**
 * @fileoverview Configuration constants for the Hive Mind simulation.
 * 
 * This file acts like a C++ header file (`config.h`) with `#define` or `constexpr` constants.
 * In C++, you would write:
 * ```cpp
 * #define WORLD_SIZE 100
 * constexpr int ANT_COUNT = 50;
 * ```
 * 
 * In JavaScript, we use `const` declarations which are similar to `constexpr` in C++:
 * - They are compile-time constants (known at module load time)
 * - They cannot be reassigned (similar to `constexpr` immutability)
 * - They are block-scoped (similar to C++ namespace scope)
 * 
 * Using a centralized config file eliminates "Magic Numbers" scattered throughout the codebase,
 * making the code more maintainable and easier to tune. This is a best practice in both C++ and JS.
 * 
 * @module config
 */

/**
 * The size of the world grid (width and height in cells).
 * Similar to `#define WORLD_SIZE 100` or `constexpr int WORLD_SIZE = 100;` in C++.
 * 
 * @type {number}
 * @constant
 */
export const WORLD_SIZE = 100;

/**
 * The initial number of ants to spawn in the simulation.
 * Similar to `constexpr int ANT_COUNT = 50;` in C++.
 * 
 * @type {number}
 * @constant
 */
export const ANT_COUNT = 50;

/**
 * The decay rate for pheromones per game tick (0.0 to 1.0).
 * Pheromones are multiplied by this value each frame, causing them to fade over time.
 * Similar to `constexpr double PHEROMONE_DECAY = 0.98;` in C++.
 * 
 * @type {number}
 * @constant
 */
export const PHEROMONE_DECAY = 0.98;

/**
 * The maximum pheromone intensity value (0-255 range, similar to RGB color channels).
 * Pheromones are clamped to this maximum value to prevent overflow.
 * Similar to `constexpr int MAX_PHEROMONE = 255;` in C++.
 * 
 * @type {number}
 * @constant
 */
export const MAX_PHEROMONE = 255;

