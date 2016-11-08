# Visual Chefs Gulp Build Process
This repo contains the example directory structure of a project and Gulp tasks that can be implemented in a project. These tasks do a variety of things, but mainly: 

* Compile Sass
* Concat and minify Javascript
* Separate development and production files
* Versioning/cache busting

Sample directory structure and file explanation: 

```
.
├── gulp                            # <-- Custom gulp tasks can be defined here
├── dev                             # <-- Generated, pre-production app assets
│   ├── app.css                    # <-- Compiled, concatenated sass files
│   ├── vendor.css                  # <-- Compiled, concatenated vendor styles
│   ├── main.js                     # <-- Concatenated js files with source maps
├── dist                            # <-- Generated, production-ready app assets
│   ├── main-min.css                # <-- Minified css
│   ├── main-min.js                 # <-- Minified js
│   assets                           # <-- Where you edit files
│   ├── scss
│   │   ├── mixins                  # <-- Folders for sass partials - add to gulp.options.js
│   │   └── main.scss
│   └── js                          # <-- Edit js files and add more to subfolders
├── images                          # <-- Image assets, relative to `/`
├── fonts                           # <-- Font assets, relative to `/`
├── static                          # <-- pdfs, etc. Files that need to be relative to `/`
├── vendor                          # <-- Third-party assets
│   ├── bower_components            # <-- Specify path in .bowerrc
│   ├── css                         # <-- other vendor css not in Bower
│   └── js                          # <-- other vendor js not in Bower
└── public/site/../templates        # <-- Wherever your templates are
    └── index.html                  # <-- Where your stylesheets and js are included from
```

## Getting Started
Copy these files into your project to get started:

* gulpfile.js
* gulp/
* .bowerrc
* bower.json
* package.json

Then run these commands:
```
bower install
npm install
```

And edit the options in gulp/gulp.options.js to match your projects directory structure.

## Tasks

### Development
Watch js and scss files and refresh browser with [Browsersync](https://www.browsersync.io/)

```
gulp watch --proxy example.dev
```

The proxy flag is optional. There is a default option in gulp.options.js to set the local url. If your local differs, then add the proxy flag. 

Create a development version of the assets

```
gulp dev
```

Creates files with source maps in dev/ dir.

### Production
Create a production version of the assets

```
gulp dist
```

Creates files in dist folder. In index.html, add references for main-min.js, main-min.css, vendor-min.css and modernizr-min.js. When this task is run, the file reference in index.html will be replace with a hash for the version. For example, main-min-9a26907288.css.