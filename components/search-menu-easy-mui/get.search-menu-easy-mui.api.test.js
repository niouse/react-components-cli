
module.exports = function (name, lowerName){

var component = `

import { Meteor } from 'meteor/meteor';
import React from 'react';
import chai  from 'chai';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Api from "./../api/search-menu-easy-mui.api.jsx";
import itemsListMocks from "./search-menu-easy-mui.mocks.js"

if (Meteor.isServer) {

    describe('@Api (search-menu-easy-mui.api.jsx)', function() {
        beforeEach(function() {
            class _MockComponent extends React.Component {
                render() {
                    return (<div>Fake Component</div>);
                }
            };
            MockComponent = _MockComponent
            WrapperComponent = Api()(MockComponent);
            wrapper = shallow(<WrapperComponent itemsList={itemsListMocks}/>);
        });

        describe('Return object with expected methods', function() {
              it('Has a "handleMenuChange" props as function', function(){
				expect(WrapperComponent.prototype.handleMenuChange).to.not.be.undefined;
				expect(WrapperComponent.prototype.handleMenuChange).to.be.a('function');
				expect(wrapper.props().handleMenuChange).to.not.be.undefined;
				expect(wrapper.props().handleMenuChange).to.be.a('function');
			  });

			   it('Has a "showItemDetails" props as function', function(){ 
				expect(WrapperComponent.prototype.showItemDetails).to.not.be.undefined;
				expect(WrapperComponent.prototype.showItemDetails).to.be.a('function');
				expect(wrapper.props().showItemDetails).to.not.be.undefined;
				expect(wrapper.props().showItemDetails).to.be.a('function');
			  });
			  it('Has a "filterList" private method', function(){  
				expect(WrapperComponent.prototype.filterList).to.not.be.undefined;
				expect(WrapperComponent.prototype.filterList).to.be.a('function');
			  });
        });

       describe('filterList: (array)=>(array)', function(){
		before(function(){
			mockEvent = {target : {value : itemsListMocks[0].name}}
			//charTest="e"
			funcToTest = (items, charTest)=>WrapperComponent.prototype.filterList(items, charTest)
		})
		
	   it('Return an array of size inferor or equal', function(){  
			expect(funcToTest(itemsListMocks, "e")).to.not.be.undefined;
			expect(funcToTest(itemsListMocks, "e")).to.be.an('array');
			expect(funcToTest(itemsListMocks, "e")).to.have.length.within(0, itemsListMocks.length); 
	   });
	  it('Return values match regEx passed in argument', function(){ 
		expect(itemsListMocks).to.have.length(3);	  
		expect(funcToTest(itemsListMocks, "y")).to.have.length(0);
		expect(funcToTest(itemsListMocks, "Item")).to.have.length(3);
		expect(funcToTest(itemsListMocks, itemsListMocks[0].name)).to.have.length(1)
	  });

	});
					
	describe('Component has expected stand-alone behaviour', function(){
	  it('Filter state.itemsList when handleChange is called with a string', function(){ 
		  wrapper.setState({itemsList : itemsListMocks})
		  expect(wrapper.state().itemsList).to.have.length(3);
		  wrapper.props().handleChange(mockEvent) 
		  expect(wrapper.state().itemsList).to.have.length(1);
	  });
	  it('Re-render component when handleChange is called', function(){ 
		  spy = sinon.spy(WrapperComponent.prototype, "setState");
		  wrapper.props().handleChange(mockEvent)
		  expect(spy.calledOnce).to.be.true;
		  wrapper.props().handleChange(mockEvent)
		  expect(spy.calledTwice).to.be.true;
	  });
	  
	 /* it('Do not re-render component when setActive is called but already set', function(){  
		  spy = sinon.spy(WrapperComponent.prototype, "setState");
		  wrapper.props().setActive(2)
		  expect(spy.calledOnce).to.be.true;
		  wrapper.props().setActive(2)
		  expect(spy.calledTwice).to.be.false;
	  });
	  it('Child receive new props when setActive is triggered', function(){  
		  var prop1=wrapper.props().items
		  wrapper.props().setActive(1)
		  var prop2=wrapper.props().items
		  console.log(prop1)
		  console.log(prop2)
		  expect(prop1).to.not.deep.equal(prop2);
	  });*/
	});

    });

}
    
    
	`
	return component
}
