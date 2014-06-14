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