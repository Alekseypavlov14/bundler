/*
    This file is entry point to your application.
    Here we import all files with styles (css, scss or sass) 
    and scripts written on javascript
*/

// styles 
const styles = require.context('./styles', true, /\.(sc|sa|c)ss$/)
styles.keys().map(styles)

// scripts
const scripts = require.context('./scripts', true, /\.js$/)
scripts.keys().map(scripts)