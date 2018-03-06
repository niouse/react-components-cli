
module.exports = function (name, lowerName){

var component = `

import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import chai  from 'chai';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
//import ReactTestUtils from 'react-dom/test-utils'; 
//import {createRenderer} from 'react-addons-test-utils';

import Component from "./../search-menu-easy-mui.component.jsx";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import itemsListMocks from "./search-menu-easy-mui.mocks.js"

// COMPONENT STATIC DATA
import stylesDefault from "./../styles/search-menu-easy-mui.styles.default.js";
import stylesOptions from "./../styles/search-menu-easy-mui.styles-options.default.js";
import texts from "./../text/search-menu-easy-mui.text.js";



if (Meteor.isClient) {

    describe('Component (search-menu-easy-mui.component.jsx)', function() {
		
        before(function() {
            let testDiv = document.createElement("div");
            document.body.appendChild(testDiv)
            testDiv.setAttribute("id", "test-div");
            //testDiv.setAttribute("style", "visible : none");

            render(<MuiThemeProvider>
				   <Component 
				   		itemsList = {itemsListMocks}
						getOneItem = {()=>{}}
				   />
				   </MuiThemeProvider>, document.getElementById('test-div'));
        })
			
        after(function() {
            let div = document.getElementById('test-div')
            div.parentNode.removeChild(div)
        });

        describe('Render expected component', function() {

            /*it('Component tag with ids are styleed correctly', function() {
                for (var key in stylesDefault) {
                    var el = document.getElementById("search-menu-easy-mui-" + key)
                    for (var key2 in stylesDefault[key]) {
                        expect(el.style[key2]).to.deep.equal(stylesDefault[key][key2])
                    }
                }
            });*/
			  it('Component contains a container', function(){  
				  var title = document.getElementById("tsearch-menu-easy-mui-container")
			  });

			  it('Component contains one input tag', function(){  
				  var inputs = document.getElementsByTagName("input")
				  expect(inputs.length).to.equal(1);
			  });

			  it('Component contains two button tags', function(){  
				 var buttons = document.getElementsByTagName("button")
				 expect(buttons.length).to.equal(2);
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
