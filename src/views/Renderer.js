/**
 * @fileoverview Renderer class - Handles all canvas rendering operations.
 * Similar to a graphics renderer in C++ that translates game state to pixels.
 * 
 * @class Renderer
 */
import { WORLD_SIZE } from '../config.js';

export class Renderer {
  /**
   * Creates a new Renderer instance.
   * 
   * @param {HTMLCanvasElement} canvas - The canvas element to render to
   * @param {number} cellSize - The size of each grid cell in pixels
   */
  constructor(canvas, cellSize) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.cellSize = cellSize;
    
    // Set canvas size to match grid dimensions
    this.canvas.width = WORLD_SIZE * cellSize;
    this.canvas.height = WORLD_SIZE * cellSize;
  }

  /**
   * Draws the toolbar UI with game information.
   * This method is kept fully implemented as UI coding is tedious.
   * Similar to drawing a HUD in C++: `void drawHUD()`
   */
  drawToolbar() {
    const toolbarHeight = 60;
    const toolbarY = this.canvas.height - toolbarHeight;
    
    // Draw toolbar background
    this.ctx.fillStyle = '#2a2a2a';
    this.ctx.fillRect(0, toolbarY, this.canvas.width, toolbarHeight);
    
    // Draw border
    this.ctx.strokeStyle = '#444';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(0, toolbarY, this.canvas.width, toolbarHeight);
    
    // Draw text
    this.ctx.fillStyle = '#fff';
    this.ctx.font = '14px monospace';
    this.ctx.textAlign = 'left';
    this.ctx.textBaseline = 'middle';
    
    // TODO: Add dynamic game stats (ant counts, scores, etc.)
    this.ctx.fillText('Hive Mind Simulation', 10, toolbarY + toolbarHeight / 2);
  }

  /**
   * Renders the entire game state to the canvas.
   * This is called once per frame in the game loop.
   * 
   * @param {Grid} grid - The game grid to render
   * @param {Ant[]} ants - Array of all ants to render
   */
  render(grid, ants) {
    // Get ImageData for pixel manipulation (high performance)
    // Similar to getting a pixel buffer in C++: `SDL_LockTexture(texture, ...)`
    const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const data = imageData.data;
    
    // TODO: Render grid (Walls, Food, Pheromones)
    // Remove the inner loops that manipulate pixels - students will implement this
    // Example structure:
    // for (let y = 0; y < grid.getHeight(); y++) {
    //   for (let x = 0; x < grid.getWidth(); x++) {
    //     const cellValue = grid.get(x, y);
    //     const pheromone = grid.getPheromone(x, y);
    //     // Calculate pixel color based on cellValue and pheromone
    //     // Set pixel in data array: data[index] = r, data[index+1] = g, etc.
    //   }
    // }
    
    // Put ImageData back to canvas
    this.ctx.putImageData(imageData, 0, 0);
    
    // TODO: Render ants
    // Remove ant rendering loops - students will implement this
    // Example structure:
    // for (const ant of ants) {
    //   if (ant.isAlive()) {
    //     const x = ant.getX() * this.cellSize;
    //     const y = ant.getY() * this.cellSize;
    //     // Draw ant sprite/shape
    //   }
    // }
    
    // Draw toolbar on top
    this.drawToolbar();
  }

  /**
   * Clears the entire canvas.
   * 
   * @param {string} color - The background color (default: '#000000')
   */
  clear(color = '#000000') {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /**
   * Renders a single grid cell (legacy method, not used in main render loop).
   * 
   * @param {number} x - The x coordinate of the cell
   * @param {number} y - The y coordinate of the cell
   * @param {number} value - The cell value (determines color/appearance)
   */
  renderCell(x, y, value) {
    // TODO: Draw a single cell based on its value
    // Similar to drawing a rectangle in C++: `SDL_RenderFillRect(renderer, &rect)`
  }

  /**
   * Renders an ant at its current position (legacy method, not used in main render loop).
   * 
   * @param {Ant} ant - The ant to render
   */
  renderAnt(ant) {
    // TODO: Draw an ant sprite/shape at its position
    // Similar to drawing a sprite in C++: `SDL_RenderCopy(renderer, texture, ...)`
  }

  /**
   * Sets the canvas size to match the grid dimensions.
   * 
   * @param {number} width - The grid width in cells
   * @param {number} height - The grid height in cells
   */
  resize(width, height) {
    this.canvas.width = width * this.cellSize;
    this.canvas.height = height * this.cellSize;
  }

  /**
   * Gets the 2D rendering context.
   * 
   * @returns {CanvasRenderingContext2D} The canvas 2D context
   */
  getContext() {
    return this.ctx;
  }
}
