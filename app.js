//jshint esversion:6

const express = require( "express" );
const bodyParser = require( "body-parser" );

const app = express();

app.get( "/", function ( req, res ) {

    let today = new Date();
    let currentDay = today.getDay();

    if ( currentDay === 6 || currentDay === 0 ) {
        res.write( "<h1>Weekend!</h1>" );
    } else {
        res.sendFile( __dirname + "/index.html" );
    }
} );

app.listen( 3000, function () {
    console.log( "Server running" );
} );