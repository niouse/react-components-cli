#!/usr/bin/env node

var fs = require("fs");
var program = require('commander');
var convertToLowerCase = require('./convertToLowerCase.js')
var checkName = require("./checkName.js")

var createComponentBlankMaterial = require('./blank-material/index.js')

program
    .arguments('<componentName>')
    .option('-b, --blank-material', 'Create a blank component')
    .action (function(componentName){
    name = componentName
});

program.parse(process.argv)

checkName(name)
var lowerName = convertToLowerCase(name)
if (program.blankMaterial ){
	console.log('Create a blank component')
	createComponentBlankMaterial(name, lowerName)
}

