# Foster Made Example Site - FM Site Build

Example site for [FM Site Build](https://github.com/fostermadeco/fm-site-build) implementation with [npm package](https://www.npmjs.com/package/fm-site-build).

## New Site Setup

* Clone this repo or copy files to main roote of site.
* Edit fm-site-build.options.js to fit site specific needs.
* Run 'bower install' and 'npm install'

## Usage

Run gulp tasks:

```
gulp dev

gulp watch

gulp dist
```

## File explanation

```
.
├── _html                         # <- Static html
├── assets                        # <- All site assets
│   ├── dev                       # <- Compiled files for dev
│   ├── dist                      # <- Compiled files for production
│   ├── js                        # <- Source javascript files
│   ├── scss                      # <- Source sass files
│   └── vendor                    # <- Third-party assets
│       ├── bower_components      # <- bower packages
│       ├── css                   # <- Misc vendor css not available in bower
│       ├── js                    # <- Misc vendor js not available in bower
└── node_modules                  # <- npm packages
    .bowerrc                       # <- Bower config
    .gitignore                     
    bower.json                     # <- Bower manifest
    fm-site-build.options.js       # <- Config for fm site build package
    gulpfile.js                    # <- Shell gulp file for fm site build
    index.html                     # <- Sample index template
    package.json                   # <- npm manifest
```