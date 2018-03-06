function getDefaultStyles(name, lowerName){
    
var component = `
export default ${name}_Styles_Default = {
    container: {
		width: "100%",
		height : "100%",
		display: "flex",
		justifyContent : "space-around",
		alignItems : "center",
		button : {
			backgroundColor : "red",
			cursor : "pointer",
		},
		active : {
			backgroundColor : "blue",
		}
	},
}
`
    return component
}

module.exports = getDefaultStyles


