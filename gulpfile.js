const gulp 		= require('gulp'),
	  sass		= require('gulp-sass'),
	  minifyCSS	= require('gulp-minify-css'),
	  watch		= require('gulp-watch');

gulp.task('sass', () => {
	gulp.src('src/Components/style/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/Components/style/Css'))
})

gulp.task('minCSS', () => {
	gulp.src('src/Components/style/Css/main.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('src/Components/style/Minify'))
})

gulp.task('watch', () => {
	gulp.watch('src/Components/style/main.scss', ['sass'])
	gulp.watch('src/Components/style/Css/main.css', ['minCSS'])
})