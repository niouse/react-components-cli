
module.exports = function (name, lowerName){

var component = `

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function ${lowerName}_Template(RaisedButton, TextField, MenuItem, SelectField) {
    return (wrappedComponent) => {
        const $${lowerName}_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="search-menu-easy-mui-container" className="container" style={styles.container}>
					  <TextField 
						id="search-menu-easy-mui-input"
						style={styles.input}
						onChange={(e)=>props.handleChange(e)}
						floatingLabelText={text.input}
						{...styles.menu.attr}
						/>
					 <SelectField 
						 id="search-menu-easy-mui-menu"
						 style={styles.menu}
						 autoWidth = {false}
						 value={props.searchMenuValue} 
						 onChange={(event, index, newValue, key)=>props.handleMenuChange(event, index, newValue, "searchMenuValue")}
						 floatingLabelText={text.menu}
						 {...styles.menu.attr}
						 >
						 {props.itemsList.map((x, index)=>{
							return <MenuItem key={index} value={index} primaryText={x.name} /> 
						})}
					</SelectField>
				
				<RaisedButton 
					id="search-menu-easy-mui-button"
					style={styles.button}
					label={text.button} 
					primary={true} 
					onClick={()=>{props.showItemDetails()}}
					disabled={props.canShowDetails}
				/>
				</div>
            );
        }
        $${lowerName}_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
			handleMenuChange : PropTypes.func.isRequired,
			showItemDetails : PropTypes.func,
			canShowDetails : PropTypes.bool,
        };
        return $${lowerName}_Template
    }
}
    
	`
	return component
}
