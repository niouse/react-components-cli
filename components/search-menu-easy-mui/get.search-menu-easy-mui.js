
module.exports = function (name, lowerName){

var component = `

// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/search-menu-easy-mui.template.jsx";
import Api from "./api/search-menu-easy-mui.api.jsx";
import Styles from "./services/search-menu-easy-mui.styles.service.jsx";
import Texts from "./services/search-menu-easy-mui.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/search-menu-easy-mui.styles.default.js";
import stylesOptions from "./styles/search-menu-easy-mui.styles-options.default.js";
import computeStyles from "./styles/search-menu-easy-mui.compute-styles.js";
import texts from "./text/search-menu-easy-mui.text.js";

export default function ${lowerName}(RaisedButton, TextField, MenuItem, SelectField){
	return ()=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template(RaisedButton, TextField, MenuItem, SelectField)
		class ${lowerName}_Component {}
		return ${lowerName}_Component
	}
}  

	`
	return component
}
