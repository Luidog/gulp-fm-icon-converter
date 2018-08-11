'use strict';

/**
 * shapeTypes are the type of elements whose attributes we will clear and append our filemaker class.
 * @type {Array}
 */

const shapes = ['path', 'rect', 'ellipse', 'polygon', 'circle'];

const unusedAttributes = ['title', 'desc', 'defs'];

module.exports = { shapes, unusedAttributes };
