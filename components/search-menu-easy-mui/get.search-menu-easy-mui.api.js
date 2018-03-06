
module.exports = function (name, lowerName){

var component = `

import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function ${lowerName}_Api(_optional) {
    return (WrappedComponent) => {
        class $${lowerName}_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
					searchMenuValue : 1,
					itemsList : props.itemsList,
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

            handleMenuChange(event, index, newValue, key){
			  this.setState({[key]: newValue});
			  if(key==="searchMenuValue"){
				 this.props.getOneItem(this.state.itemsList[newValue]._id)
			  }
			}

			handleChange(e){	
				this.setState({
					itemsList: this.filterList(this.props.itemsList, e.target.value),
					searchMenuValue : 0,
				});
			}


			showItemDetails(id){
				this.props.getOneItem(this.state.itemsList[0]._id)
			}


			filterList(list, charFliter){
				var updatedList = []
				updatedList = list.filter(function(item){
				  return item.name.toLowerCase().search(
					charFliter.toLowerCase()) !== -1;
				});
				return updatedList
			}

            render() {
				let canShowDetails = this.state.itemsList[0] ? false : true
                return <WrappedComponent
				{...this.props}
				handleMenuChange = {(event, index, newValue, key)=>this.handleMenuChange(event, index, newValue, key)}
				searchMenuValue = {this.state.searchMenuValue}
			    handleChange = {(e)=>this.handleChange(e)}
			    itemsList={this.state.itemsList || this.props.itemsList}
			    showItemDetails={()=>this.showItemDetails()}
				canShowDetails={canShowDetails}
				/>
            }
        }
        $${lowerName}_Api.propTypes = {
			itemsList : PropTypes.array.isRequired,
			getOneItem : PropTypes.func.isRequired,
        };
        return $${lowerName}_Api
    }
}
    
	`
	return component
}
