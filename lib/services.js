'use strict';

const fs = require('fs');
const cheerio = require('gulp-cheerio');
const { shapes, unusedAttributes } = require('./configuration');

/**
 * fixElement removes any element attributes of a shape then adds the fm_fill class
 * and sets the fill attribute to Filemaker's grey color.
 * @param  {$} $ The cheerio selector used to traverse our document.
 * @param  {icon} icon The icon to modify
 */
const fixElement = ($, icon) => {
  for (let attribute of unusedAttributes) {
    removeAttribute($, attribute);
  }
  for (let shape of shapes) {
    let element = $(shape);
    element.attribs = {};
    element.addClass('fm_fill').attr('fill', '#000');
  }
};

/**
 * removeAttributes removes unused html tags of the icon.
 * @param  {[type]} attribute The attribute that should be removed.
 * @return {function}         removes the attribute
 */
const removeAttribute = ($, attribute) => $(attribute).remove();

const convert = () => cheerio({ run: ($, icon) => fixElement($, icon) });

const files = source => `${source}/*.svg`;

const ensureDirectories = (source, destination) => {
  if (!source) Error('You must provide a destination');
  if (!destination) Error('You must provide a destination');
  if (!fs.existsSync(source)) fs.mkdirSync(source);
  if (!fs.existsSync(destination)) fs.mkdirSync(destination);
};

module.exports = { convert, ensureDirectories, files };
