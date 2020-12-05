const { src, dest } = require("gulp");
const fileinclude = require("gulp-file-include");
const { browsersync } = require("./serv");


const fileincludeTask = () =>
  src(['./src/html/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('./'))
    .pipe(browsersync.reload({ stream: true }))

exports.fileinclude = fileincludeTask;
