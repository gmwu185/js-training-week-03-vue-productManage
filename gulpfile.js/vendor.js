var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var { options } = require('./options');

var vendorJs = function(cd){
  gulp
    .src([
      './node_modules/jquery/dist/jquery.js'
      ,
      './node_modules/vue/dist/vue.js'
      ,
      // './node_modules/axios/dist/axios.js'
      // ,
      './node_modules/bootstrap/dist/js/bootstrap.bundle.js'
    ])
    .pipe($.order([
      'vue.js', 
      // 'axios.js', 
      'jquery.js',
    ]))
    .pipe($.concat('allVendors.js'))
    .pipe($.if(options.env === 'production', $.uglify()))
    .pipe(gulp.dest('./output/assets/js'));
  cd();
};

// 注意：這是 Node.js 的 module.exports
// 並非 ES6 的方法
// exports.bowerTask = bowerTask;
exports.vendorJs = vendorJs;