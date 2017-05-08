function getText(name, lowerName, opt){

var optValues = ['en', 'fr', 'index']

if (optValues.indexOf(opt) === -1){
	throw new Error('Bad parameter for creating text files, allowed parameters are \"en\", \"fr\" and \"index\".')
}
	
var text = {};
	
text.en = `
module.exports = { 
	title : "${name.toUpperCase()} COMPONENT",
}
`
text.fr = `
module.exports = { 
	title : "COMPOSANT ${name.toUpperCase()}",
}
`

text.index = `
import textEn from "./${lowerName}.text.en.js"
import textFr from "./${lowerName}.text.fr.js"

export default ${name}_Text = {
	en : textEn,
	fr : textFr,
}
`
    return text[opt]
}


module.exports = getText


