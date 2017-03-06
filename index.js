#!/usr/bin/env node

var fs = require("fs");
var program = require('commander');
var getComponent = require('./simpleComponent');


createComponent = function(name){
    
    console.log('Creating directory...');
    fs.mkdirSync(process.cwd()+`/${name}`);
    console.log('Creating component file...');
    fs.writeFileSync(process.cwd()+`/${name}/${name}.jsx`, getComponent('component', name, collection, material));
    console.log('Creating component container...');
    fs.writeFileSync(process.cwd()+`/${name}/${name}.container.jsx`, getComponent('container', name, collection, material))
    console.log('Creating component styles...');
    fs.writeFileSync(process.cwd()+`/${name}/${name}.styles.js`, getComponent('styles', name, collection, material))
    console.log('Creating component tests file...');
    fs.writeFileSync(process.cwd()+`/${name}/${name}.tests.js`, getComponent('tests', name, collection, material))
}

program
    .arguments('<componentName>')
    .option('-t, --tracker, <tracker>', 'The creation must be partial')
    .option('-m, --material', 'The creation must be partial')
    .action (function(componentName){
    name = componentName
});

program.parse(process.argv)

var collection = false
var material = false

if(typeof(name)==='undefined'){
    var err = new Error
    err.message='The component must have a name'
    throw err
    process.exit(1)
}

if (name[0] !== name[0].toUpperCase()){
        console.warn("WARNING !!! The component name should be Camel case !")
    }

if (program.tracker){
        console.log('container will be create with the Tracker-component package')
        console.log('A collection named '+ program.tracker)
        collection=program.tracker
}
    
if (program.material){
    console.log('container will be create with Material-ui implemented')
    material=true
}

console.log('the component will be named', name)

createComponent(name, collection, material)