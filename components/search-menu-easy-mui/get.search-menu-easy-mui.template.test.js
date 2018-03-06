
module.exports = function (name, lowerName){

var component = `



import { Meteor } from 'meteor/meteor';
import React from 'react';
import chai  from 'chai';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Template from "./../template/search-menu-easy-mui.template.jsx";
import defaultStyles from "./../styles/search-menu-easy-mui.styles.default.js";
import texts from "./../text/search-menu-easy-mui.text.js";

import itemsListMocks from "./search-menu-easy-mui.mocks.js"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

/*import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();*/

if (Meteor.isClient) {

    describe('@Template (search-menu-easy-mui.template.jsx)', function() {

        before(function() {
			containerStyle = Object.assign({}, defaultStyles.container, {color : "testColor"})	
			styles = Object.assign({}, defaultStyles, {container : containerStyle})	
            ${lowerName} = Template(RaisedButton, TextField, MenuItem, SelectField)()
            wrapper = mount(
                <MuiThemeProvider>
					  <${lowerName}  
							styles={styles}
							text = {texts}
							itemsList = {itemsListMocks}
							handleMenuChange = {()=>{}}
							getOneItem = {()=>{}}
						/>
			  </MuiThemeProvider>
            );
        });

        describe("Styles are correctly set", function(){
             it('Class name of root div tag is "container"', function(){
				  expect(wrapper.first().hasClass('container')).to.be.true;
			  });
			  it('Has two button tag', function(){
				  expect(wrapper.find('button')).to.have.length(2);
			  });
			  it('Has one input tags', function(){
				  expect(wrapper.find('input')).to.have.length(1);
			  });
        });

        describe("text and styles are set correctly", function() {

            /*it('Default styles match with keysDOM elements ids', function(){  			
			for (let nodeName in styles){
				var el = wrapper.find('#search-menu-easy-mui-'+nodeName)
				expect(el.exists()).to.be.true;
				for (var key in styles[nodeName]){
					expect(el.props().style[key]).to.deep.equal(styles[nodeName][key])
				}
			} 
		  });*/
			
	 	 it('Styles provided via props.styles are correctly applied', function(){  
			 expect(wrapper.find('#search-menu-easy-mui-container').props().style.color).to.equal("testColor");
		  });
        });
		
		describe("Texts are correctly set", function(){
			
		it('Text keys match with DOM elements ids', function(){  			
			for (let nodeName in texts['en']){
				var el = wrapper.find('#search-menu-easy-mui-'+nodeName)
				expect(el.exists()).to.be.true;
			} 
		  });
			
		it('Text is consistent in several languages', function(){  
			let baseText = texts['en']
			for (var key1 in texts){
				for (var key2 in baseText){
					expect(texts[key1][key2]).to.not.be.undefined;
				}
			}
		});
			
		/*it('Texts provided via props.text are correctly applied', function(){  
			expect(wrapper.find('#search-menu-easy-mui-title').get(0).innerHTML).to.equal(texts['en'].title);
		});*/
	});

    });

}
    
    
    
    
	`
	return component
}
