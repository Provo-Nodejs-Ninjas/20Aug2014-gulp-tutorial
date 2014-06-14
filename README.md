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
