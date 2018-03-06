function getApi(name, lowerName){
    
	var component = `
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function ${name}_Api(_optional) {
    return (WrappedComponent) => {
        class $${name}_Api extends Component {

            constructor(props) {
                super(props);
                this.state = {
                    items: props.items
                }
            }

            componentDidMount() {}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            setActive(nb) {
                if (this.state.items[nb].active === true) {
                    return
                }
                let newItems = this.setActiveLink(this.state.items, nb)
                this.setState({
                    items: newItems
                })
                this.props.setActive(this.state.items[nb].link)
            }

            setActiveLink(items, nb) {
                if (typeof(nb) !== "number" || nb > items.length) {
                    throw new Error("Function setActiveLink need an integer of correct size as second argument")
                }
                let result = items.map((x, index) => {
                    let res = Object.assign({}, x)
                    if (index === nb) {
                        res.active = true
                    } else {
                        res.active = false
                    }
                    return res
                })
                return result
            }

            render() {
                return <WrappedComponent
				{...this.props}
				setActive={(nb)=>this.setActive(nb)}
				items={this.state.items}
				/>
            }

        }
        $${name}_Api.propTypes = {
            styles: PropTypes.object.isRequired,
			setActive: PropTypes.func.isRequired,
			items : PropTypes.arrayOf(PropTypes.shape({
				name : PropTypes.string.isRequired,
				link : PropTypes.string.isRequired,
				active : PropTypes.bool.isRequired,
			})).isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $${name}_Api
    }
}
    `
    
    return component
}


module.exports = getApi


