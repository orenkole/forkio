const { series, parallel } = require("gulp");
const { scripts } = require("./gulp-tasks/scripts");
const { styles } = require("./gulp-tasks/styles");
const { images } = require("./gulp-tasks/images")
const { serv } = require("./gulp-tasks/serv");
const { watch } = require("./gulp-tasks/watch");
const { del } = require("./gulp-tasks/del");
const { fileinclude } = require("./gulp-tasks/htmls");

exports.build = series(
  del,
  fileinclude,
  parallel(scripts, styles, images),
);

exports.dev = series(
  del,
  fileinclude,
  parallel(scripts, styles, images),
  parallel(watch, serv)
);
