
module.exports = function (name, lowerName){

var component = `
module.exports = { 
		button : {
			default : "SHOW"
		},
		menu : {
			default : "Select from list",
		},
		input : {
			default : "Search from text"
		},
}

	`
	return component
}
