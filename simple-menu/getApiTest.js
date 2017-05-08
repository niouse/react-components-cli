function getApiTest(name, lowerName){
    
var component = `
import { Meteor } from 'meteor/meteor';
import React from 'react';
import chai  from 'chai';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Api from "./../api/${lowerName}.api.jsx";

if (Meteor.isServer) {

    describe('@Api (${lowerName}.api.jsx)', function() {
        beforeEach(function() {
            class _MockComponent extends React.Component {
                render() {
                    return (<div>Fake Component</div>);
                }
            };
            MockComponent = _MockComponent
            WrapperComponent = Api()(MockComponent);
            wrapper = shallow(<WrapperComponent />);
        });

        describe('Return object with expected methods', function() {
            it('Has a "testMethod" method', function() {
                expect(WrapperComponent.prototype.testMethod).to.not.be.undefined;
                expect(WrapperComponent.prototype.testMethod).to.be.a('function');
            });
            it('Has a "testMethod" method', function() {
                expect(WrapperComponent.prototype.testMethod).to.not.be.undefined;
                expect(WrapperComponent.prototype.testMethod).to.be.a('function');
            });
        });

        describe('testMethod:(any)=>any', function() {
            before(function() {
                funcToTest = (items, nb) => WrapperComponent.prototype.testMethod(items, nb)
                testItems = funcToTest('test')
            })

            it('Return whatever it receives', function() {
                expect(testItems).to.equal('test');
            });
        });

    });

}
    
    `
    
    return component
}


module.exports = getApiTest


