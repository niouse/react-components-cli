#!/usr/bin/env node

var fs = require("fs");
var program = require('commander');
var convertToLowerCase = require('./convertToLowerCase.js')
var checkName = require("./checkName.js")
//var tranform = require('transform.js')

var createComponentBlankMaterial = require('./components/blank-material/index.js')
var createComponentMenuSimpleMui = require('./components/menu-simple-mui/index.js')
var createSearchMenuEasyMui = require('./components/search-menu-easy-mui/index.js')


program
    .arguments('<componentName>', '<dirName>')
	.option('-c, --clone', 'Clone existing component')
	.option('-t, --transfrom', 'Transform component to clonable')
	.option('-d, --dir-name [type]', 'Folder name of clonabe component')
    .option('--blank-material', 'Create a blank component')
	.option('--search-menu-easy-mui', 'Create an easy search menu with material ui')
	.option('--menu-simple-mui', 'Create a simple menu with material ui')
    .action (function(componentName, dirName){
    name = componentName
	dirName=dirName
});

program.parse(process.argv)
console.log('check name')
checkName(name)
console.log('name ok')
var lowerName = convertToLowerCase(name)
console.log('lowerName')

if(program.clone){
	console.log('cloning element')
	if (program.blankMaterial ){
		console.log('Create a blank component')
		createComponentBlankMaterial(name, lowerName)
	}

	else if (program.menuSimpleMui){
		console.log('Create a simple menu with material ui')
		createComponentMenuSimpleMui(name, lowerName)
	}
	
	
	else if  (program.searchMenuEasyMui){
		console.log('Create a simple search menu with material ui')
		createSearchMenuEasyMui(name, lowerName)
	}
	else {
		throw new Error('You must specifiy one the type of compoenent you want to create. See list of options with --help')
	}
}

else if (program.transfrom){
	var dirName = program.dirName
	
	fs.mkdirSync('./getFiles')
	
	var textReg = new RegExp(name,"g");
	replaceInFiles('./'+dirName+'/', textReg, '${name}')
	
	var textReg2 = new RegExp(lowerName,"g");
	replaceInFiles('./'+dirName+'/', textReg, '${lowerName}')
}

else {
	throw new Error('You must specifiy one of those two options: -t for transfrom component or -c for cloning component')
}


function replaceInFiles(path, word, newWord){
	var list = fs.readdir(path, function(err, files){
		
		if(err){
		throw err
		}
		
		for (var i=0; i< files.length; i++){

			if(fs.lstatSync(path+files[i]).isDirectory()){

				replaceInFiles(path+files[i]+'/', word, newWord)
			}
			else {
				var text = fs.readFileSync(path+files[i], 'utf8');
				var newText = `
module.exports = function (name, lowerName){

var component = \`
${text.replace(word, newWord)}
	\`
	return component
}
`					
				fs.writeFileSync('./getFiles'+'/get.'+files[i].replace('jsx', 'js'), newText, 'utf8')	
				
			}
			
		}
	})
}



