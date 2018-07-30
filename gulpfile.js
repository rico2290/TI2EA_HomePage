var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'])
    .pipe(sass()) //Isso converte o Sass em CSS
    .pipe(gulp.dest('src/css'));
});

//watch flag tells Sass to watch your source files for changes, 
//and re-compile CSS each time you save your Sass
gulp.task('watch', function(){
    gulp.watch(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'], ['sass'])
});

//apenas escrever 'gulp' no terminal para recompilar e ver as mudanças
gulp.task('default', ['sass', 'watch']);