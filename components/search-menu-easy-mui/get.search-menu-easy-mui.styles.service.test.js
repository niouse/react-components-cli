
module.exports = function (name, lowerName){

var component = `

import { Meteor } from 'meteor/meteor';
import React from 'react';
import chai  from 'chai';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

// SERVICES
import Styles from "./../services/search-menu-easy-mui.styles.service.jsx";

// STYLES
import stylesDefault from "./../styles/search-menu-easy-mui.styles.default.js";
import stylesOptions from "./../styles/search-menu-easy-mui.styles-options.default.js";
import computeStyles from "./../styles/search-menu-easy-mui.compute-styles.js";

if (Meteor.isServer) {

    describe('@Styles (search-menu-easy-mui.styles.service.jsx)', function() {
        before(function() {
            class _MockComponent extends React.Component {
                render() {
                    return (<div>Fake Component</div>);
                }
            };
            MockComponent = _MockComponent
            WrapperComponent = Styles(computeStyles, stylesDefault, stylesOptions)(MockComponent);
            wrapper = shallow(<WrapperComponent />);
        });

        describe('Return expected object', function() {

            it("Return object with props.styles object, with at least a \"container\" key", function() {
                expect(wrapper.props().styles).to.not.be.undefined;
                expect(wrapper.props().styles.container).to.not.be.undefined;
            });

            it('Overwrite stylesDefault with user provided custom styles', function() {
                wrapper = shallow(
                    <WrapperComponent 
			  		containerStyle={{color : "testColor"}}
			  		titleStyle={{color : "testColor"}}
			  />
                );
                expect(wrapper.props().styles.container.color).to.equal("testColor");
                expect(wrapper.props().styles.title.color).to.equal("testColor");
            });
        });

    });

}
    
	`
	return component
}
