const { watch } = require("gulp");
const { scripts } = require("./scripts");
const { styles } = require("./styles");
const { images } = require("./images")
const { fileinclude } = require("./htmls")
const { browsersync } = require("./serv");

const watchTask = () => {
	watch("./index.html", (cb) => {
		browsersync.reload();
		cb();
	});
	watch("./src/styles/*.scss", styles);
	watch("./src/js/*.js", scripts);
	watch("./src/img/**", images);
	watch("./src/html/**", fileinclude)
};

exports.watch = watchTask;
