"use strict";

// Import Modules
// import Something from './res/file.js';

/**
 * Blank
 * @class
 * @property {string} property - Class Property
 * @author Dean Wagner <info@deanwagner.net>
 */
class Blank {

    // Class Properties
    property = '';

    /**
     * Constructor
     * @constructor
     * @param {string} parameter - Class Parameter
     */
    constructor(parameter) {
        this.property = parameter;
    }

    /**
     * Get Class Property
     * @returns {string} - Class Property
     */
    get property() {
        return this.property;
    }

    /**
     * Set Class Property
     * @param {string} parameter - Method Parameter
     */
    set property(parameter) {
        this.property = parameter;
    }
}

export default Blank;