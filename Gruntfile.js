module.exports = function(grunt) {
	grunt.initConfig({
		// ------------------------------------------------------------
		// check all js files for errors
		// ------------------------------------------------------------
		jshint: {
			all: ['public/src/js/**/*.js'] 
		},

		// ------------------------------------------------------------
		// minify all js files into into app.min.js
		// ------------------------------------------------------------
		uglify: {
			build: {
				files: {
					'public/dist/js/app.min.js': ['public/src/js/**/*.js', 'public/src/js/*.js']
				}
			}
		},

		// ------------------------------------------------------------
		// process and compile all sass files to style.css
		// ------------------------------------------------------------
		compass: {
			dist: {
				options: {
					sassDir: 'public/src/sass',
					cssDir: 'public/src/css'
				}
			}
		},

		// ------------------------------------------------------------
		// minify style.css
		// ------------------------------------------------------------
		cssmin: {
			minify: {
				expand: true,
				cwd: 'public/src/css',
				src: ['*.css'],
				dest: 'public/dist/css',
				ext: '.min.css'
			}
		},

		// ------------------------------------------------------------
		// watch css and js files and process the above tasks
		// ------------------------------------------------------------
		watch: {
		  	css: {
		    	files: ['public/src/sass/**/*.scss'],
		    	tasks: ['compass', 'cssmin']
		  	},
		  	js: {
		    	files: ['public/src/js/**/*.js'],
		    	tasks: ['jshint', 'uglify']
		  	}
		},

		// ------------------------------------------------------------
		// watch our node server for changes
		// ------------------------------------------------------------
		nodemon: {
		  	dev: {
		    	script: 'server.js'
		  	}
		},

		// ------------------------------------------------------------
		// run watch and nodemon at the same time
		// ------------------------------------------------------------
		concurrent: {
		  	options: {
		    	logConcurrentOutput: true
		  	},
		  	tasks: ['nodemon', 'watch']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');

	grunt.registerTask('default', ['compass', 'cssmin', 'jshint', 'uglify', 'concurrent']);
};
