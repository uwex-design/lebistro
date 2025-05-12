const { src, watch, dest, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglifycss = require("gulp-uglifycss");
const rename = require("gulp-rename");
const terser = require("gulp-terser");
const concat = require("gulp-concat");

// Compilar SCSS para CSS
const scssToCss = () => {
	return src("./scss/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(
			uglifycss({
				uglyComments: true,
			})
		)
		.pipe(rename("style.min.css"))
		.pipe(dest("./dist/css"));
};

// Minificar JS comum
const minifyCommonJs = () => {
	return src("./js/common/*.js").pipe(concat("common.js")).pipe(terser()).pipe(rename("common.min.js")).pipe(dest("./dist/js"));
};

// Minificar JS das páginas
const minifyPagesJs = () => {
	return src("./js/pages/*.js")
		.pipe(terser())
		.pipe(
			rename(function (path) {
				path.basename = path.basename + ".min";
			})
		)
		.pipe(dest("./dist/js/pages"));
};

// Watch files
const watchFiles = () => {
	watch("./scss/*.scss", scssToCss);
	watch("./js/common/*.js", minifyCommonJs);
	watch("./js/pages/*.js", minifyPagesJs);
};

exports.default = series(scssToCss, minifyCommonJs, minifyPagesJs, watchFiles);
exports.build = series(scssToCss, minifyCommonJs, minifyPagesJs);
