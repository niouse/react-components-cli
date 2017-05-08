function getDefaultStyles(name, lowerName){
    
var component = `
export default ${name}_Styles_Default = {
    container: {
        width: "100%",
        height: "100%",
    },
    title: {
        color: "black"
    }
}
`
    return component
}

module.exports = getDefaultStyles


