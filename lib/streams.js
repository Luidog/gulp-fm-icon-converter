'use strict';

const { obj } = require('through2');
const cheerio = require('cheerio');

const manipulate = ops =>
  obj((file, encoding, done) => {
    if (file.isNull()) return done(null, file);
    if (file.isStream()) return done(Error('Streaming not supported.'));
    let run = typeof ops === 'function' ? ops : ops.run;
    if (run) {
      const $ = (file.cheerio =
        file.cheerio ||
        cheerio.load(file.contents.toString(), ops.parserOptions));
      if (run.length > 2) {
        run($, file, next);
      } else {
        run($, file);
        next();
      }
    } else {
      done(null, file);
    }
    function next(error) {
      file.contents = new Buffer(
        ops.parserOptions && ops.parserOptions.xmlMode ? $.xml() : $.html()
      );
      done(error, file);
    }
  });

const stream = (ops = {}) => manipulate(ops);

module.exports = { stream };
