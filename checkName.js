module.exports = function(name){
	if(typeof(name)==='undefined'){
		var err = new Error
		err.message='The component must have a name'
		throw err
		process.exit(1)
	}
	if(!/^[A-Z]/.test(name)){
		throw new Error('First letter should be capital')
	}

	if(!/(?!^.*[A-Z]{2,}.*$)^[A-Za-z]*$/.test(name)){
		throw new Error('Name should be only letters and camel case')
	}
	else console.log('The new component will be named :'+ name)
}