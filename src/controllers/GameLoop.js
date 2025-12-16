/**
 * @fileoverview GameLoop class - Manages the main game loop using requestAnimationFrame.
 * Decouples Update() (Logic) from Draw() (Rendering), similar to game loops in C++.
 * 
 * @class GameLoop
 */
export class GameLoop {
  /**
   * Creates a new GameLoop instance.
   * 
   * @param {Function} updateCallback - Function called each frame to update game state
   * @param {Function} renderCallback - Function called each frame to render the scene
   */
  constructor(updateCallback, renderCallback) {
    this.updateCallback = updateCallback;
    this.renderCallback = renderCallback;
    this.isRunning = false;
    this.animationFrameId = null;
    this.lastTime = 0;
  }

  /**
   * Starts the game loop.
   * Uses requestAnimationFrame for smooth 60 FPS rendering.
   */
  start() {
    if (this.isRunning) {
      return;
    }
    
    this.isRunning = true;
    this.lastTime = performance.now();
    this._loop(performance.now());
  }

  /**
   * Stops the game loop.
   */
  stop() {
    if (!this.isRunning) {
      return;
    }
    
    this.isRunning = false;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  /**
   * Checks if the game loop is currently running.
   * 
   * @returns {boolean} True if the loop is running, false otherwise
   */
  getRunning() {
    return this.isRunning;
  }

  /**
   * The main loop function called by requestAnimationFrame.
   * This decouples Update() from Draw() to maintain 60 FPS.
   * Similar to a game loop in C++: `while (running) { update(); render(); }`
   * 
   * @param {number} timestamp - The current timestamp from requestAnimationFrame
   * @private
   */
  _loop(timestamp) {
    if (!this.isRunning) {
      return;
    }
    
    // Calculate delta time (time since last frame)
    // Similar to calculating deltaTime in C++: `deltaTime = currentTime - lastTime`
    const deltaTime = timestamp - this.lastTime;
    this.lastTime = timestamp;
    
    // Call update callback for game logic
    // Similar to calling update() in C++: `gameState.update(deltaTime)`
    this.updateCallback();
    
    // Call render callback for rendering
    // Similar to calling render() in C++: `renderer.render(gameState)`
    this.renderCallback();
    
    // Schedule next frame with requestAnimationFrame
    // Similar to continuing the loop in C++: `continue;` (but non-blocking in JS)
    this.animationFrameId = requestAnimationFrame((ts) => this._loop(ts));
  }
}
