function getStylesService(name, lowerName){
    
var component = `
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function ${name}_Template() {
    return (wrappedComponent) => {
        const $${name}_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="${lowerName}-container" className="container" style={styles.container}>
					<h1  id="${lowerName}-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $${name}_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $${name}_Template
    }
}
    `
    
    return component
}


module.exports = getStylesService


