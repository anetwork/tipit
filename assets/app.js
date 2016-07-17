;!( function( w, d ) {

    'use strict';

    var get = function( s ) { return d.querySelector( s ); },
        getAll = function( s ) { return d.querySelectorAll( s ); },

        changeTipIt = function( e ) {

            this.placeholder = 'If left this blank, tipit won\'t show anything';

            liveTipLM.setAttribute( 'data-tipit-content', inputLM.value );

            liveTipLM.innerHTML = 'Hover me Again!'

        },

        resetTipLM = function( e ) {

            liveTipLM.innerHTML = 'Hover me';

        },

        handleTipIt = function( e ) {

            if ( this.className.indexOf( 'show' ) >= 0 )
                manTipLM.showTipit();
            else
                manTipLM.hideTipit();

        },

        liveTipLM = get( '.live .ex span' ),
        inputLM = get( '.live input' ),

        manTipLM = get( '.man .ex span' ),

        buttons = getAll( 'button' ),
        buttonsLen = buttons.length,

        len;

    inputLM.oninput = changeTipIt;
    liveTipLM.onmouseout = resetTipLM;

    len = buttonsLen;

    while ( len-- )
        buttons[ len ].onclick = handleTipIt;

})( this, document );
