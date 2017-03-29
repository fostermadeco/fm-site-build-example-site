# Foster Made Example Site - FM Site Build

Example site for FM Site Build implementation with npm package:
[https://github.com/fostermadeco/fm-site-build](https://github.com/fostermadeco/fm-site-build)

[npm package](https://www.npmjs.com/package/fm-site-build)

## New Site Setup

* Clone this repo or copy files to main roote of site.
* Edit fm-site-build.options.js to fit site specific needs.
* Run 'bower install' and 'npm install'

Run gulp tasks:

```
gulp dev

gulp watch

gulp dist
```

## Sample directory structure sample site usage

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