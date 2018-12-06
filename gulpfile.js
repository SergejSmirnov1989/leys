let gulp = require('gulp');
let less = require('gulp-less');
let prefix = require('gulp-autoprefixer');
let clean = require('gulp-clean-css');
let sGrid = require('smart-grid');
let group = require('gulp-group-css-media-queries');

const config = {
	root: './',
	css: {
		watch: 'src/css/**/*.less',
		src: 'src/css/style.less',
		dest: 'public/css'
	},
	smartgrid: {
		src: './smartgrid.js',
		dest: 'src/css'
	}
};

function style() {
	return gulp.src(config.root + config.css.src)
		.pipe(less())
		.pipe(prefix({
			browsers: ['>0.2%']
		}))
		.pipe(clean({
			level: 2
		}))
		.pipe(group())
		.pipe(gulp.dest(config.root + config.css.dest))
};

function watch (){
	gulp.watch('./src/css/**/*.less', style);
}

function grid() {
	delete require.cache[require.resolve(config.smartgrid.src)];
	let options = require(config.smartgrid.src);
	sGrid(config.smartgrid.dest, options);

}

gulp.task('grid', grid);
gulp.task('style', style);
gulp.task('watch', watch);