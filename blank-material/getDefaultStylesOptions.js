function getDefaultStylesOptions(name, lowerName){
    
var component = `
export default ${name}_StylesOptions_Default = {
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

module.exports = getDefaultStylesOptions


