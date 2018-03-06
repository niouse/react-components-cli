function getTemplateTest(name, lowerName){
    
var component = `
import { Meteor } from 'meteor/meteor';
import React from 'react';
import chai  from 'chai';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Template from "./../template/${lowerName}.template.jsx";
import defaultStyles from "./../styles/${lowerName}.styles.default.js";
import createMockItems from "./${lowerName}.mocks.js";

if (Meteor.isClient) {

    describe('@Template (${lowerName}.template.jsx)', function() {
		
        before(function() {
			class RaisedButton extends React.Component{
				render(){
					return( 
						<button
							id={this.props.id}
							type={this.props.type}
							style={this.props.style}
							onClick={this.props.onClick}
						/>
					)
				}
			}
			
            ${name} = Template(RaisedButton)()
			containerStyle = Object.assign({}, defaultStyles.container, {color : "testColor"})	
			styles = Object.assign({}, defaultStyles, {container : containerStyle})	
			items = createMockItems(4)
        });

       describe('Return expected DOM tree', function(){
	  before(function () {
			wrapper = mount(<${name} items={items} styles={{container:{}}}/>); 
	  });	
		
	  it('Class name of root div tag is "container"', function(){
		  expect(wrapper.first().hasClass('container')).to.be.true;
	  });
	  it('The number of buttons equals the length of props.items', function(){
		  expect(wrapper.find('button')).to.have.length(4);
	  });
	  it('Tags Ids are correctly set', function(){
		  var elementsWithId = wrapper.find('[id]').nodes
		  for (var i=0; i < elementsWithId.length;  i++){
			  expect(elementsWithId[i].id.split('-')[0]).to.be.equal('${lowerName.split('-')[0]}');
		  }
	  });
	});
		  
	describe("Styles are correctly set", function(){
		
		before(function () {
			wrapper = mount(<${name} styles={styles} items={items}/>); 
		  });
		
		it('Default styles match with keysDOM elements ids', function(){  			
			for (let nodeName in defaultStyles){
				var el = wrapper.find('#${lowerName}-'+nodeName)			
				expect(el.exists()).to.be.true;				
				for (var key in defaultStyles[nodeName]){
					expect(el.props().style[key]).to.deep.equal(defaultStyles[nodeName][key])
				}
			} 
		  });
			
	 	 it('Styles provided via props.styles are correctly applied', function(){  
			 expect(wrapper.find('#${lowerName}-container').props().style.color).to.equal("testColor");
		  });
	});
	
/*	describe("Texts are correctly set", function(){
	
		before(function(){
			wrapper = mount(<${name} text={${name}_Text['en']} />); 
		})
			
		it('Text keys match with DOM elements ids', function(){  			
			for (let nodeName in ${name}_Text['en']){
				var el = wrapper.find('#${lowerName}-'+nodeName)
				expect(el.exists()).to.be.true;
			} 
		  });
			
		it('Text is consistent in several languages', function(){  
			let baseText = ${name}Text['en']
			for (var key1 in ${name}_Text){
				for (var key2 in baseText){
					expect(${name}_Text[key1][key2]).to.not.be.undefined;
				}
			}
		});
			
		it('Texts provided via props.text are correctly applied', function(){  
			expect(wrapper.find('#${lowerName}-title').get(0).innerHTML).to.equal(${name}Text['en'].title);
		});
	});*/

    });

}
    
    
    
     
    `
    
    return component
}


module.exports = getTemplateTest


