
module.exports = function (name, lowerName){

var component = `

export default ${lowerName}_StylesOptions_Default = {
    theme: {
        colors: {
            primary: "black"
        }
    },
    screenHeight: "100%",
    screenWidth: "100%",
    device: "pc"
}

	`
	return component
}
