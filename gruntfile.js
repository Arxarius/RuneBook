module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {         
          'styles/css/light.css': 'styles/scss/compile/rb.compile-light.scss',
          'styles/css/dark.css': 'styles/scss/compile/rb.compile-dark.scss'
        }
      }
    }
  });


  // Default task(s).
 
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    grunt.registerTask('default', ['sass']);

};