const imagemin = require("gulp-imagemin");
const { src, dest } = require("gulp");
const { browsersync } = require("./serv");

const images = () =>
	src("./src/img/**")
		.pipe(imagemin({progressive: true}))
		.pipe(dest("./dist/img/"))
		.pipe(browsersync.reload({ stream: true }));

exports.images = images;
