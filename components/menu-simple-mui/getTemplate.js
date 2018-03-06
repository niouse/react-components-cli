function getStylesService(name, lowerName){
    
var component = `
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function ${name}_Template(RaisedButton) {
    return (wrappedComponent) => {
        const $${name}_Template = (props) => {
			let styles = props.styles
			let text = props.text
			return  (
				<div 
					id="${lowerName}-container" 
					className="container"
					style={styles.container}
					>
					{props.items.map((item, index)=>{
						//let buttonStyles = item.active ? styles.container.button : Object.assign({}, styles.container.button, styles.container.active)
						return(
							<RaisedButton 
								key={index}
								className="${lowerName}-button"
								style={styles.button}
								label={item.name}
								primary = {item.active}
								onClick={()=>props.setActive(index)}
								/>
								
							
						)
					})}
				</div>
			);
		}	
        $${name}_Template.propTypes = {
			items : PropTypes.arrayOf(PropTypes.shape({
				name : PropTypes.string.isRequired,
				active : PropTypes.bool.isRequired,
			})).isRequired,
			styles : PropTypes.shape({
				container: PropTypes.object.isRequired,
			}).isRequired,
			text : PropTypes.object,
			setActive : PropTypes.func,
		};
        return $${name}_Template
    }
}
        `
    
    return component
}


module.exports = getStylesService


