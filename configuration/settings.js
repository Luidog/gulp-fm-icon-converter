'use strict'

/**
 * directories are the directories to use as a source and destination for modified icons. The directories are assumed to be local.
 * @type {Object}
 */

const directories = {
  filemaker: 'fm-icons',
  standard: 'standard-icons'
}

/**
 * folders are the destination and source folders to be used by gulp. This is set in the directories constant above.
 * @type {Object}
 * @property {string} [source] [The folder where gulp will watch for icons.]
 * @property {string} [destination] [The folder where gulp will save the modified icon.]
 */

module.exports.folders = {
  destination: `${directories.filemaker}/`,
  source: `${directories.standard}/`
}

/**
 * shapeTypes are the type of elements whose attributes we will clear and append our filemaker class.
 * @type {Array}
 */

module.exports.shapeTypes = [
  'path',
  'rect',
  'ellipse',
  'polygon',
  'circle'
]
/**
 * Files are the path to the file gulp will use to modify the standard icon
 * @type {string}
 */

module.exports.files = `${directories.standard}/*.svg`
