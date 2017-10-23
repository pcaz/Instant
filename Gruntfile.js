module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
	target: {	
	files: [{
            expand: true,
            cwd: 'web/js',
            src: '**/*.js',
            dest: 'web/js',
	    ext: '.min.js'
      }]
	}
    },
    cssmin: {
      options: {
          mergeIntoShorthands: false,
          roundingPrecision: -1
          },
       target: {
    files: [{
      expand: true,
      cwd: 'web/css',
      src: ['*.css', '!*.min.css'],
      dest: 'web/css',
      ext: '.min.css'
    }]
       }
       },
	jshint: {
	    all: ['Gruntfile.js', 'web/js/**/*.js', '!web/js/**/*.min.js']
  
	},
       watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });
  

  // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');    
    //grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
    grunt.registerTask('default',['cssmin','jshint','uglify']);
};
