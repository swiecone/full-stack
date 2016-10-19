'use strict';

module.exports = function(grunt) {
  // Define the configuration for all the tasks
  grunt.initConfigP({
    //Time how long taks take.  Can help when optimizing build items
    require('time-grunt')(grunt);

    //Automatically load required Grunt tasks
    require('jit-grunt')(grunt);

    //Define the configuration for all the tasks
    grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      //Make sure code syles are up to par and there are no obvious mistakes
        jshint: {
          options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish')
          },
          all: {
            src: [
              'Gruntfile.js',
              'app/scripts/{,*/}*.js'
            ]

          }
        }
    });
  });
}
