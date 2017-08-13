var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
 

 
gulp.task('sass', function () {
    gulp.src('./sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./'))
        .pipe(livereload());
});
// gulp.task('reload', function() {
// 	gulp.src('./*.php')
// 		.pipe(livereload());
// });


gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('./sass/**/*.scss', ['sass']);
	// gulp.watch('./*.php');
});

gulp.task('dev', ['sass', 'watch']);