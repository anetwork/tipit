# tipIt

an Easy-to-use tooltip system that has a nice interface for both users and developers!

## How it works?

### 1. Import two files to your project:

on any workflow you're working, you may have access to load some files into it.
so include **css** and **js** of *tipIt* ( you've included jQuery already ). but there's just one point:

> If you want to use automatic tooltip making, you should put the script tag before closing `</body>`

sample:

```

    <head>

        <!-- .... -->

        <link rel="stylesheet" href="css/tipit.css" />

        <!-- .... -->

    </head>

    <body>

        <!-- .... -->

        <script src="js/tipit.js"></script>

    </body>

```

### 2. Add some config:

assume you want to add tooltip on a `<div>` element; so:

```

<div data-tipit-content="Hey there!"></div>

```

it'll work like a charm! and by default, placement of tooltip is left-side of element. if you're planning to change that, don't worry:

```

<div data-tipit-content="Hey there!" data-tipit-placement="right">

```

and it'll work like another charm :)).

### 3. Make tooltips manually:

if you wanna make tooltips on your own timing ( like, after some ajax loaded and blah blah blah ), you could use:

```

$( 'div' ).tipit();
// You have to write configs as mentioned [here](#2-add-some-config)

```

## API

automatically or manually, tooltips got made. now you've access to two methods:

```

$( 'div' )[ 0 ].showTipit();
$( 'div' )[ 0 ].hideTipit();

```

to force visibility of a tooltip.
