function getTextServiceTest(name, lowerName){
    
var component = `
export default function(nb){
	let result = [];
	for (var i=0; i<nb; i++){
		result.push({
			name : "button"+i,
			link : "link"+i,
			active : false
		})
	}
	return result
}
`
    
    return component
}


module.exports = getTextServiceTest


