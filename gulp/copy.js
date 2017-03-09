var gulp = require('gulp');
var config = require('./config');
var del = require('del');

gulp.task('cleanBuild', function(cb){
	return del([config.dist.app], cb);
})
gulp.task('copy', function(){
	gulp.src(config.src.lib)
	 .pipe(gulp.dest(config.dist.app));


	 //gulp.src(config.src.bower+'/**/*')
	 //.pipe(gulp.dest(config.dist.app+'/bower_components'));
});