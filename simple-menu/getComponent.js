function getComponent(name, lowerName){
    
var component = `
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/${lowerName}.template.jsx";
import Api from "./api/${lowerName}.api.jsx";
import Styles from "./services/${lowerName}.styles.service.jsx";
import Texts from "./services/${lowerName}.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/${lowerName}.styles.default.js";
import stylesOptions from "./styles/${lowerName}.styles-options.default.js";
import computeStyles from "./styles/${lowerName}.compute-styles.js";
import texts from "./text/${lowerName}.text.js";


@Styles(computeStyles, stylesDefault, stylesOptions)
@Api()
@Texts(texts)
@Template()
class ${name}_Component {}

export default ${name}_Component

`   
    return component
}

module.exports = getComponent


