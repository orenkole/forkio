const { src, dest } = require("gulp");
const concat = require("gulp-concat");
const { browsersync } = require("./serv");
const uglify = require("gulp-uglify-es").default;

const scripts = () =>
	src("./src/js/*.js")
		.pipe(concat('scripts.min.js'))
		.pipe(uglify({toplevel: true}))
		.pipe(dest("./dist/js/"))
		.pipe(browsersync.reload({ stream: true }));

exports.scripts = scripts;
