/**
 * @fileoverview Ant class - Represents an autonomous agent in the simulation.
 * Similar to an entity/object in C++ that maintains its own state.
 * 
 * @class Ant
 */
import { update as blueAlgo } from '../algorithms/BlueAlgorithm.js';
import { update as redAlgo } from '../algorithms/RedAlgorithm.js';

export class Ant {
  /**
   * Creates a new Ant instance.
   * 
   * @param {number} x - Initial x coordinate
   * @param {number} y - Initial y coordinate
   * @param {number} id - Unique identifier for this ant
   * @param {number} teamId - Team identifier (0 = Blue, 1 = Red)
   */
  constructor(x, y, id, teamId) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.teamId = teamId;
    // TODO: Initialize other ant properties (health, state, etc.)
  }

  /**
   * Updates the ant's state based on its local view and decision logic.
   * This is called once per game tick.
   * 
   * @param {Object} view - The local surroundings visible to this ant
   * @param {Grid} grid - Reference to the game grid (for pheromone reading)
   * @returns {Object|null} The action to perform, or null if no action
   */
  update(view, grid) {
    // TODO: Delegate logic to the appropriate algorithm based on teamId
    
    // TODO: Apply the resulting action to change x,y coordinates
    
    return null;
  }

  /**
   * Gets the current x coordinate.
   * 
   * @returns {number} The x coordinate
   */
  getX() {
    return this.x;
  }

  /**
   * Gets the current y coordinate.
   * 
   * @returns {number} The y coordinate
   */
  getY() {
    return this.y;
  }

  /**
   * Gets the unique identifier of this ant.
   * 
   * @returns {number} The ant's ID
   */
  getId() {
    return this.id;
  }

  /**
   * Gets the team identifier.
   * 
   * @returns {number} The team ID (0 = Blue, 1 = Red)
   */
  getTeamId() {
    return this.teamId;
  }

  /**
   * Moves the ant to a new position.
   * 
   * @param {number} newX - The new x coordinate
   * @param {number} newY - The new y coordinate
   */
  moveTo(newX, newY) {
    this.x = newX;
    this.y = newY;
  }

  /**
   * Checks if the ant is alive.
   * 
   * @returns {boolean} True if the ant is alive, false otherwise
   */
  isAlive() {
    // TODO: Return alive status
  }

  /**
   * Marks the ant as dead.
   */
  kill() {
    // TODO: Set ant to dead state
  }
}
