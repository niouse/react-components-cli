
    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';
    import PureRenderMixin from 'react-addons-pure-render-mixin';
    import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, Redirect } from 'react-router';

    // EXTERNAL LIBS
    import moment from 'moment';
    import Radium from 'radium';


    //MATERIAL COMPNENTS
    import RaisedButton from 'material-ui/RaisedButton';
    import FontIcon from 'material-ui/FontIcon';
    import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';
    import TextField from 'material-ui/TextField';
    import Divider from 'material-ui/Divider';
    import Paper from 'material-ui/Paper';

    //MATERIAL ICONS
    import PlayArrow from 'material-ui/svg-icons/av/play-arrow.js';
    import Stop from 'material-ui/svg-icons/av/stop.js';
    import Pause from 'material-ui/svg-icons/av/pause.js';
    import FiberManualRecord from 'material-ui/svg-icons/av/fiber-manual-record.js';
    import Refresh from 'material-ui/svg-icons/navigation/refresh.js';
    import ImportExport from 'material-ui/svg-icons/communication/import-export.js';
    import Settings from 'material-ui/svg-icons/action/settings.js';
    import Save from 'material-ui/svg-icons/content/save.js';
    import SnackBar from 'material-ui/SnackBar';



    export default class  Events extends Component {

        constructor(props){
            super(props);
            this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

            this.state = {
                canTest : false,
                message : ""
            }

        }

    /*_______________________________________________________________________________________________________________
    _________________________________________________________________________________________________________________  
    _____________________________________________COMPONENT LIFE TIME_________________________________________________
    _________________________________________________________________________________________________________________*/


        componentWillMount() { 

        }

        componentDidMount(){

        }

        componentWillReceiveProps(newProps) {

        }

        shouldComponentUpdate(){

        }

        componentDidUpdate(){

        }

        componentWillUnmount(){

        }	


    /*_______________________________________________________________________________________________________________
    _________________________________________________________________________________________________________________  
    _____________________________________________COMPONENT METHODS___________________________________________________
    _________________________________________________________________________________________________________________*/

        toggleStateBool(key){
            this.setState({
                [key] : !this.state[key]
            })
        }

        showMessage(message){
            this.setState({
                message : message,
                showMessage : true
            })
        }

        test(){

        }


    /*_________________________________________________________________________________________________________________
    ___________________________________________________________________________________________________________________ 
    _____________________________________________COMPONENT VIEWS_______________________________________________________
    _________________________________________________________________________________________________________________*/



    /*_________________________________________________________________________________________________________________
    ___________________________________________________________________________________________________________________  
    _____________________________________________COMPONENT TEMPLATE____________________________________________________
    _________________________________________________________________________________________________________________*/

        render() {
            const styles = this.props.styles
            return  (
                <div className="container" style={styles.container}>
                    <h1>Events Component</h1>
                </div>
            );
        }
    }
    