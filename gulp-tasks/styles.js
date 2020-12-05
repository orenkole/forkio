const { src, dest } = require("gulp");
const { browsersync } = require("./serv");
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps');
const purgecss = require('gulp-purgecss');
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");

const styles = () =>
	src("./src/styles/**/*.scss")
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
		.pipe(concat('styles.min.css'))
		.pipe(purgecss({ content: ['./*.html', './src/js/*.js'] }))
		.pipe(autoprefixer({overrideBrowserslist: ['last 3 versions']}))
		.pipe(cleanCSS({level: 2}))
		.pipe(sourcemaps.write(""))
		.pipe(dest("./dist/css/"))
		.pipe(browsersync.reload({ stream: true })
	);

exports.styles = styles;
