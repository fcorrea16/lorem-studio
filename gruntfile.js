
module.exports = function(grunt) {
  grunt.initConfig ({
    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css' : 'sass/style.scss'
        }
      }
    },
    watch: {
      source: {
        files: ['sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true, // needed to run LiveReload
        }
      }
    }

}); // init config
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.registerTask('default', ['watch']);
} // module exports