;!( function( g ) {

	'use strict';

	var gulp = require( 'gulp' ),
		stylus = require( 'gulp-stylus' ),

		watch = require( 'gulp-watch' ),

		plumber = require( 'gulp-plumber' ),

        uglify = require( 'gulp-uglify' ),

		stylusPath = 'src/stylus',
		cssPath = 'build/css',

        jsPath = 'src/js',
        minifiedJsPath = 'build/js',

        COMPRESS = true;

	gulp.task( 'default', function() {

		gulp.src( stylusPath + '/*.styl' ).pipe( plumber() ).pipe( watch( stylusPath + '/*.styl' ) ).pipe( stylus({

			compress: COMPRESS

		}) ).pipe( gulp.dest( cssPath ) );

        gulp.src( jsPath + '/*.js' ).pipe( uglify() ).pipe( gulp.dest( minifiedJsPath ) );

	});

})( this );
