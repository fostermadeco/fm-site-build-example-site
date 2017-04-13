module.exports = function() {
    // root dir for assets, other paths based off this, including the template
    var assetsDir = './';
    // dir that contains raw, editable js and scss files
    var srcDir =  assetsDir + 'assets/';
    // vendor dir for bower and other js, css
    var vendorDir = srcDir + 'vendor/';

    // other configurable directories based on the above configs
    var options = {
        // dir for index.html
        templatesDir: assetsDir,
        // name of file(s) that have references to css and js compiled files, include dir
        // e.g.: index.html or can be array: ['_html/default.html', 'index.html']
        indexFiles: [
            '_html/inc/header.php',
            '_html/inc/footer.php'
        ],
        // dir for main sass file and partials
        srcSass: srcDir + 'scss/',
        // dir for js files
        srcJs: srcDir + 'js/',
        // bower dir
        bowerDir: vendorDir + 'bower_components/',
        // dir for compiled assets during development
        devDir: srcDir + 'dev/',
        // dir for production assets
        distDir: srcDir + 'dist/',
        // Don't edit below
        assetsDir: assetsDir,
        srcDir: srcDir,
        vendorDir: vendorDir
    };

    // used as proxy for browser sync
    options.localUrl = 'test-build.dev';

    // First run 'bower install awesomepackage', then add files or dirs here.
    // Relative to the bower directory set in config.
    options.bowerFiles = {            
        js: [
            'jquery/dist/jquery.js'
        ],          
        css: [
            'font-awesome/css/font-awesome.css'
        ],
        fonts: [
            'font-awesome/fonts/'
        ],
        images: [
        ]
    };

    // css imports need to come before any styles
    options.cssUrlImports = [
        ''
    ];
    
    // Configurables for modernizr, see more https://modernizr.com/download
    options.modernizr = {
        options: [
            'setClasses',
            'html5shiv',
            'html5printshiv'
        ],
        tests: ['touchevents']
    };

    return options;
};