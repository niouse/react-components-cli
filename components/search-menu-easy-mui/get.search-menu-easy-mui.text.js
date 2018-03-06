
module.exports = function (name, lowerName){

var component = `

import textEn from "./search-menu-easy-mui.text.en.js"
import textFr from "./search-menu-easy-mui.text.fr.js"

export default ${lowerName}_Text = {
	en : textEn,
	fr : textFr,
}

	`
	return component
}
