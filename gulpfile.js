const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// Sass Task
function scssTask(){
  return src('assets/sass/style.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('assets/css', { sourcemaps: '.' }));
}

// Browsersync Tasks
function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: './'
    }
  });
  cb();
}

function browsersyncReload(cb){
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask(){
  watch('**/*', browsersyncReload);
  watch(['assets/sass/**/*.scss'], series(scssTask, browsersyncReload));
  watch(['assets/img/**/*.png', 'assets/img/**/*.jpg'], series(images));
}

// Image optimized
const webp = require('gulp-webp');
const imageminWebp = require('imagemin-webp');
const clone = require('gulp-clone');
const clonesink = clone.sink();

function images() {
    return src('./assets/img/**/*') // optimize images before converting
        .pipe(clonesink) // start stream
        .pipe(webp()) // convert images to webp and save a copy of the original format
        .pipe(clonesink.tap()) // close stream and send both formats to dist
        .pipe(dest('assets/image'));
};


// Default Gulp task
exports.default = series(
  scssTask,
  browsersyncServe,
  watchTask,
  images,
);
