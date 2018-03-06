
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

// INTERNAL COPPONENTS
// EXTERNAL COPPONENTS - APP

// EXTERNAL COPPONENTS - MATERIAL UI
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

@Styles(computeStyles, stylesDefault, stylesOptions)
@Api()
@Texts(texts)
@Template(RaisedButton, TextField, MenuItem, SelectField)
class ${lowerName}_Component {}

export default ${lowerName}_Component


	`
	return component
}
