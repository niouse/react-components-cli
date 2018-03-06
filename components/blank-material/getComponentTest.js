function getComponentTest(name, lowerName){
    
var component = `
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import chai  from 'chai';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
//import ReactTestUtils from 'react-dom/test-utils'; 
//import {createRenderer} from 'react-addons-test-utils';

import Component from "./../${lowerName}.component.jsx";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import {${name}_Styles_Service} from "./../services/${lowerName}.styles.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./../styles/${lowerName}.styles.default.js";
import stylesOptions from "./../styles/${lowerName}.styles-options.default.js";
import texts from "./../text/${lowerName}.text.js";

if (Meteor.isClient) {

    describe('Component (${lowerName}.component.jsx)', function() {
		
        before(function() {
            let testDiv = document.createElement("div");
            document.body.appendChild(testDiv)
            testDiv.setAttribute("id", "test-div");
            //testDiv.setAttribute("style", "visible : none");

            render(<MuiThemeProvider><Component /></MuiThemeProvider>, document.getElementById('test-div'));
        })
			
        after(function() {
            let div = document.getElementById('test-div')
            div.parentNode.removeChild(div)
        });

        describe('Render expected component', function() {
            it('Component contains a h1 div with expected text', function() {
                var title = document.getElementById("${lowerName}-title")
                expect(title.innerHTML).to.equal(texts.en.title)
            });
            it('Component tag with ids are styleed correctly', function() {
                for (var key in stylesDefault) {
                    var el = document.getElementById("${lowerName}-" + key)
                    for (var key2 in stylesDefault[key]) {
                        expect(el.style[key2]).to.deep.equal(stylesDefault[key][key2])
                    }
                }
            });
        });

        /*describe('Component has expected stand-alone behavior', function(){	
        	before(function () {		  
            });
        })*/
    });
}
`
    return component
}

module.exports = getComponentTest