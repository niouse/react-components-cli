
    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';
    import PureRenderMixin from 'react-addons-pure-render-mixin';
    import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, Redirect } from 'react-router';
    
    // EXTERNAL LIBS
    import Tracker from 'tracker-component';

    // APPS COMPONENTS
    import Events from "./Events.jsx";
    import Loading from "./../comon/loading/Loading.container.jsx";

    // STYLES
    import styles from "./Events.styles.js";

    // MONGO APIS
    import { eventsMongo } from './../api/events/events.js';


    export default class  EventsContainer extends Component {

    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        this.state = {
            canTest : false,
        }

         this.autorun(()=>{          
            Meteor.subscribe('events');
            var events = eventsMongo.find({})
            
            this.setState({
                events : events.fetch()
            })

        })

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
            return  (
                <div style={styles.container}>
                    {this.state.events ? 
                        <Events 
                            {...this.props}
                            events = {this.state.events}
                            styles={styles}
                        />:
                        <Loading />
                    }
                </div>
            );
        }
    }
    