/**
 * @fileoverview State class - Central state object that holds the "World Truth".
 * Similar to a global state structure in C++ that maintains all game data.
 * 
 * @class State
 */
import { Grid } from './Grid.js';
import { Ant } from '../entities/Ant.js';
import { WORLD_SIZE, ANT_COUNT } from '../config.js';

export class State {
  /**
   * Creates a new State instance.
   */
  constructor() {
    this.grid = new Grid(WORLD_SIZE, WORLD_SIZE);
    this.ants = [];
    // TODO: Initialize other state properties (game status, scores, etc.)
  }

  /**
   * Initializes the game state (spawns ants, generates level).
   * Similar to an initialization function in C++: `void init()`
   */
  init() {
    // Generate the level
    this.grid.generateLevel();
    
    // TODO: Spawn initial ants
  }

  /**
   * Updates the game state for one game tick.
   * Similar to an update function in C++: `void update()`
   */
  update() {
    // TODO: Process pheromone decay
    
    // TODO: Update all ants
    
    // TODO: Remove dead ants
  }

  /**
   * Gets the game grid.
   * 
   * @returns {Grid} The game grid
   */
  getGrid() {
    return this.grid;
  }

  /**
   * Gets all ants in the simulation.
   * 
   * @returns {Ant[]} Array of all ants
   */
  getAnts() {
    return this.ants;
  }

  /**
   * Adds an ant to the simulation.
   * 
   * @param {Ant} ant - The ant to add
   */
  addAnt(ant) {
    this.ants.push(ant);
  }

  /**
   * Removes an ant from the simulation.
   * 
   * @param {number} antId - The ID of the ant to remove
   */
  removeAnt(antId) {
    this.ants = this.ants.filter(ant => ant.getId() !== antId);
  }

  /**
   * Saves the current state to localStorage.
   * 
   * @returns {boolean} True if save was successful, false otherwise
   */
  save() {
    // TODO: Serialize state and save to localStorage
    return false;
  }

  /**
   * Loads state from localStorage.
   * 
   * @returns {boolean} True if load was successful, false otherwise
   */
  load() {
    // TODO: Deserialize state from localStorage
    return false;
  }

  /**
   * Resets the state to initial values.
   */
  reset() {
    this.ants = [];
    this.grid.clear();
    this.init();
  }
}
