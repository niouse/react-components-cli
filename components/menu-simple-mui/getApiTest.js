function getApiTest(name, lowerName){
    
var component = `

import { Meteor } from 'meteor/meteor';
import React from 'react';
import chai  from 'chai';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Api from "./../api/${lowerName}.api.jsx";
import createMockItems from "./${lowerName}.mocks.js";

if (Meteor.isServer) {
	var spy
    describe('@Api (${lowerName}.api.jsx)', function() {
		items = createMockItems(4)
        beforeEach(function() {
            class _MockComponent extends React.Component {
                render() {
                    return (<div>Fake Component</div>);
                }
            };
            MockComponent = _MockComponent
            WrapperComponent = Api()(MockComponent);
            wrapper = shallow(<WrapperComponent items={items} setActive={()=>{return}}/>);
        });

        describe('Return object with expected methods', function(){
		
	 it('Has a "setActive" private method', function(){  
		  expect(WrapperComponent.prototype.setActive).to.not.be.undefined;
		  expect(WrapperComponent.prototype.setActive).to.be.a('function');
	  });
	  it('Has a "setActiveLink" private method', function(){  
		  expect(WrapperComponent.prototype.setActiveLink).to.not.be.undefined;
		  expect(WrapperComponent.prototype.setActiveLink).to.be.a('function');
	  });
	  it('Has an items array as props', function(){  
		  expect(wrapper.props().items).to.not.be.undefined;
		  expect(wrapper.props().items).to.be.an('array');
	  });
	  it('Has a items array as state', function(){  
		  expect(wrapper.state().items).to.not.be.undefined;
		  expect(wrapper.state().items).to.be.an('array');
	  });
	});
				
				
	describe('setActiveLink:(array, index)=>array', function(){
	 
		before(function(){
			funcToTest = (items, nb)=>WrapperComponent.prototype.setActiveLink(items, nb)
			testItems = funcToTest(items, 1)
		})

		 it('Return an array of same size', function(){
			  expect(testItems).to.not.be.undefined;
			  expect(testItems).to.be.an("array");
			  expect(testItems.length).to.equal(items.length);
		  });
		  it('Throw an error when second argument is not an integer of excpected range', function(){  
			  expect(()=>funcToTest(items)).to.throw(Error);
			  expect(()=>funcToTest(items, "foo")).to.throw(Error);
			  expect(()=>funcToTest(items, 8)).to.throw(Error);
		  });
		  it('Set all \"active keys\" to false except the corresponding index provided with second argument', function(){  
			  expect(testItems[0].active).to.be.false;
			  expect(testItems[1].active).to.be.true;
			  expect(testItems[2].active).to.be.false;
			  expect(testItems[3].active).to.be.false;
			  testItems = funcToTest(items, 2)
			  expect(testItems[0].active).to.be.false;
			  expect(testItems[1].active).to.be.false;
			  expect(testItems[2].active).to.be.true;
			  expect(testItems[3].active).to.be.false;

		  });
	});
	
	describe('Component has expected stand-alone behaviour', function(){

	  it('Re-render component when setActive is called', function(){  
		  spy = sinon.spy(WrapperComponent.prototype, "setState");
		  wrapper.props().setActive(2)
		  expect(spy.calledOnce).to.be.true;
		  wrapper.props().setActive(3)
		  expect(spy.calledTwice).to.be.true;
	  });
	  it('Do not re-render component when setActive is called but already set', function(){  
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
		  expect(prop1).to.not.deep.equal(prop2);
	  });
	});

    });

}
    
    
    `
    
    return component
}


module.exports = getApiTest


