convertToLowerCase = function Case(name){

	var result = name.replace(/^[A-Z]/, function(x){
		return x.toLowerCase()
	})
	.replace(/[A-Z]/g, function(y){
		var z = '-'+y.toLowerCase()
		return z
	})
	return result
} 

module.exports = convertToLowerCase
