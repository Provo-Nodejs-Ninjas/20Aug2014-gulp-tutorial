#Gulp Tutorial

##Install
 
    $ npm install gulp -g

> Gulp requires to be installed globally so that it can be called from the command line.


##Gulp plugins

    npm install -D gulp gulp-minify-css

**package.json**

    {
      "devDependencies": {
        "gulp-minify-css": "~0.3.4",
        "gulp": "~3.8.0"
      }
    }
    
> Gulp plugins are node modules that expect a stream object as input, and output a stream object.

> By taking advantage of node pipes, you can pass the output of one stream as input to another stream.


##Create gulpfile.js

**gulpfile.js**

    var gulp = require('gulp'),
        minify = require('gulp-minify-css');

    gulp.task('css', function() {

      gulp.src('css/style.css')
        .pipe(minify())
        .pipe(gulp.dest('min'));

    });

###gulp.task(name[, deps], fn)
> You can create a task with any `name` you want.

> The task can be individually called from command line.

    $ gulp css


###gulp.src(globs[, options])
> Takes a glob and represents a file structure. Can be piped to plugins.

**css/style.css**

    body {
      margin: 0;
    }


###gulp.dest(path)
> Can be piped to and it will write files. Re-emits all data passed to it so you can pipe to multiple folders. Folders that don't exist will be created.

**min/style.css**

    body{margin:0}
    
##Combine plugins
> One of the best things about Gulp is that you can combine plugins to make more complicated tasks.

    $ npm install -D gulp-less
    
**gulpfile.js**

    var gulp = require('gulp'),
        minify = require('gulp-minify-css'),
        less = require('gulp-less');

    gulp.task('less', function() {

      gulp.src('less/style.less')
        .pipe(less())
        .pipe(minify())
        .pipe(gulp.dest('min'));

    });

**less/style.less**

    .mixin {
      margin: 0;
      background-color: lighten(yellow, 20%);
    }

    body {
      .mixin();
    }

**min/style.css**

    .mixin,body{margin:0;background-color:#ff6}
    
##Watch tasks

    gulp.task('watch', function() {
      gulp.watch('less/style.less', ['less']);
    });

> You can also create a watch task by providing the paths to the files you want to watch and either a callback or array of `Strings` reperesenting the tasks you want to run when those files are changed.

##Error handling
> When a module throws an error, it will emit an `error` event, which is caught by `pipe` and will stop the process.

> This is rather annoying, especially when you have a watch task running, and will end up having to restart the task every time you have an error.

**gulpfile.js**

    ...
    .pipe(less())
      .on('error', function(error) {
        // Handle the error
      })
    ...