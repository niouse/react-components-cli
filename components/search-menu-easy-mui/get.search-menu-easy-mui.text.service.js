
module.exports = function (name, lowerName){

var component = `
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function ${lowerName}_Text_Service(_text) {
    return (WrappedComponent) => {
        let languageSub
        class $${lowerName}_Text_Service extends Component {
            constructor(props) {
                super(props)
				this.textVersion = props.textVersion || "default"
				this.text = Object.assign({}, _text)
				for (var key in this.text){
					this.text[key]=this.setVersion(this.text[key], this.version)
				}
                this.state = {
                    text: this.text.en
                }
            }
            componentDidMount() {
                if (this.props.languageObs) {
                    languageSub = this.props.languageObs.subscribe((x) => {
                        this.setState({
                            text: this.text[x]
                        })
                    })
                }
            }
            componentWillUnmount() {
                if (languageSub !== undefined) {
                    languageSub.unsubscribe()
                }
            }
            setLanguage(lng) {
                this.setState({
                    text: this.text[lng]
                })
            }
			
			setVersion(obj, version){
				let newObj = Object.assign({}, obj)
				for (var key in newObj){
					newObj[key]=newObj[key].default
				}
				return newObj
			}

            render() {
                return <WrappedComponent
					{...this.props}
					text={this.state.text}
					setLanguage={(lng)=>this.setLanguage(lng)}
				/>
            }
        }
        $${lowerName}_Text_Service.propTypes = {
            languageObs: PropTypes.object,
            languageNext: PropTypes.func,
			textVersion : PropTypes.func,
        };
        return $${lowerName}_Text_Service
    }
}    
	`
	return component
}
