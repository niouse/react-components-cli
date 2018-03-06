
module.exports = function (name, lowerName){

var component = `

export default ${lowerName}_Styles_Default = {
	container: {
		//width: "100%",
		height : "50px",
		display : "flex",
		justifyContent : "space-around",
		alignItems : "center",
		margin : "30px"
		
	},
	input : {
		width : "130px",
		margin : "0px 20px",
		attr : {
			floatingLabelStyle : {
				color : "black"
			}
		}
	},
	menu : {
		width : "130px",
		margin : "0px 20px",
		attr : {
			floatingLabelStyle : {
				color : "black"
			}
		}
	},
	button : {
		alignSelf : "flex-end",
		margin : "0px 20px"
	}
}

	`
	return component
}
