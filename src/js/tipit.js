/**
 * ##### 110110011000011011011000101101011101100010110001001000001101100110000101110110011000011000100000110110001010011111011001100001001101100110000100110110011000011100100000110110011000100000100000110110011000000111011000101010101101100010101101001000001101100110000010110110001011000111011011100011001101100010101000
 *
 * @name tipIt
 * @description Easy-to-use tooltip system
 *
 * @author Reiha Hosseini ( @mrReiha )
 * @version v0.1.5
 * @since 2015/01
 *
 * @dependency jQuery
 *
 * @license GPL
 */
;!( function( w, d ) {

	// :D
	'use strict';

	var makeTipit = function( target ) {

			var showTipit = function( e ) {

					var placementIndex = placements.indexOf( $target.attr( 'data-tipit-placement' ) ),
						placement = placementIndex >= 0 ? placements[ placementIndex ] : placements[ 0 ],

						// 'tipit' LM now has the same content as value of 'data-tipit-content' attribute then fill the variable **content** with it
						content = $tipit.html( $target.attr( 'data-tipit-content' ) ) && $tipit.html(),

						extraClassName = $target.attr( 'data-tipit-class' ),

						offset = $target.offset(),

						width = $target.outerWidth( false ),
						height = $target.outerHeight( false ),

						tipitWidth = $tipit.outerWidth( false ),
						tipitHeight = $tipit.outerHeight( false ),

						horiz = [ 'left', 'right' ].indexOf( placement ) >= 0,
						far = [ 'right', 'bottom' ].indexOf( placement ) >= 0,

						pos = {

							left: horiz ?
									( far ? offset.left + width + BORDER_WIDTH : offset.left - tipitWidth - BORDER_WIDTH ) :
									( offset.left + ( width / 2 ) - ( tipitWidth / 2 ) ),

							top: horiz ?
									( offset.top + ( height / 2 ) - ( tipitHeight / 2 ) ) :
									( far ? offset.top + height + BORDER_WIDTH : offset.top - tipitHeight - BORDER_WIDTH  )

						};

					if ( $tipit.data( 'timeout.id' ) )
						clearTimeout( $tipit.data( 'timeout.id' ) );

					if ( !content )
						return false;

					$tipit.addClass( 'fx ' + placement + ( extraClassName ? ' ' + extraClassName : '' ) );

					$tipit.css({

						left: pos.left.toFixed( 2 ) + 'px',
						top: pos.top.toFixed( 2 ) + 'px'

					});

				},

				hideTipit = function( e ) {

					$tipit.removeClass( 'fx' );

				},

				hideTipitFn = function( e ) {

					var id = setTimeout( hideTipit, 150 );

					$tipit.data( 'timeout.id', id );

				},

				// We should append it as soon as we can, to make getting 'tipit's width possible
				tipit = $( 'body' )[ 0 ].appendChild( d.createElement( 'div' ) ),

				// Also we need to apply styles on it to returns the correct width
				$tipit = $( tipit ).addClass( 'tipit' ),

				$target = $( target );

			$( [ target, tipit ] ).on( 'mouseout', hideTipitFn ).on( 'mouseover', showTipit );

			target.showTipit = showTipit;
			target.hideTipit = hideTipit;

		},

		placements = [ 'left', 'right', 'top', 'bottom' ],

		// @Const Value of our border's pixels needed
		BORDER_WIDTH = 15;

	$( d ).ready( function() {

		var tipits = $( '[data-tipit-content]' ),
			tipitsLength = tipits.length,

			i = 0;

		for ( ; i < tipitsLength; i++ )
			makeTipit( tipits[ i ] );

		$.fn.tipit = function() {

			this.each( function() {

				makeTipit( this );

			});

		}

	});

})( this, document );
