var fs = require('fs')

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
function getApiTest(name, lowerName){

var component = \`
${text.replace(word, newWord)}
	\`
	return component
}
module.exports = getApiTest
			`	
				
				fs.writeFileSync('./getComponent/get.'+files[i], newText, 'utf8')
				
			}
			
		}
	})
}

var text = "component"
var textReg = new RegExp(text,"g");
replaceInFiles('./test/', textReg, 'ttt')