/**
 * @fileoverview Main entry point for the Hive Mind simulation.
 * Similar to main() function in C++ that initializes and starts the application.
 */

import { Grid } from './models/Grid.js';
import { State } from './models/State.js';
import { Renderer } from './views/Renderer.js';
import { GameLoop } from './controllers/GameLoop.js';
import { WORLD_SIZE } from './config.js';

/**
 * Initializes and starts the simulation.
 * Similar to the main() function in C++ programs.
 */
function init() {
  // Get canvas element from DOM
  const canvas = document.getElementById('gameCanvas');
  if (!canvas) {
    console.error('Canvas element not found!');
    return;
  }

  // Initialize Grid with dimensions
  // Initialize State (which contains Grid)
  const state = new State();
  
  // Initialize Renderer with canvas
  const cellSize = 8; // Pixels per grid cell
  const renderer = new Renderer(canvas, cellSize);
  
  // Initialize game state
  state.init();
  
  // Set up GameLoop with update and render callbacks
  const gameLoop = new GameLoop(
    () => {
      // Update callback - called each frame
      state.update();
    },
    () => {
      // Render callback - called each frame
      renderer.render(state.getGrid(), state.getAnts());
    }
  );
  
  // Start the game loop
  gameLoop.start();
}

// Start the application when DOM is ready
// Similar to calling main() in C++
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
