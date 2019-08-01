import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './Comment';
import ApproveReject from './ApproveReject';
import Season from './SeasonDisplay';
import './seasonDisplay.css';

class App extends React.Component {

    /*    constructor(props) {
     super(props)
     this.state = {latitude: null, errorMessage: null }
     }*/
    state = {latitude: null, errorMessage: null }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude: position.coords.latitude}),
            error => this.setState({errorMessage: error.message})
        )
    }

    render() {

        /*
         * another to write that conditional code is
         if(this.state.errorMessage && !this.state.latitude)
         return (<p><b>Error: </b>{this.state.errorMessage}</p>)
         else if(!this.state.errorMessage && this.state.latitude)
         return (<p><b>Latitude: </b>{this.state.latitude}</p>)
         else
         return (<p><b>Loading... </b></p>)
         * */

        return (
            <div id="all-projects" className="ui container">
                <div id="season-project" className="ui container comments">
                    {((this.state.errorMessage && !this.state.latitude)?<p><b>Error: </b>{this.state.errorMessage}</p>:'')}
                    {((!this.state.errorMessage && this.state.latitude)?<Season errorMessage={this.state.errorMessage} latitude={this.state.latitude}/>:'')}
                    {((!this.state.errorMessage && !this.state.latitude)?<p><b>Loading... </b></p>:'')}
                </div>
                <Season errorMessage={this.state.errorMessage} latitude={this.state.latitude}/>
                <div id="comment-project" className="comments">
                    <ApproveReject>
                        <div>
                            <h5>Are you sure ?</h5>
                        </div>
                    </ApproveReject>
                    <ApproveReject>
                        <Comment
                            authorName="Sam"
                            timeAgo="Today at 04:45PM"
                            comment="Oh yes"
                            avatar={faker.image.avatar()}
                        />
                    </ApproveReject>
                    <ApproveReject>
                        <Comment
                            authorName="Bill"
                            timeAgo="Today at 01:10AM"
                            comment="Oh no"
                            avatar={faker.image.avatar()}
                        />
                    </ApproveReject>
                    <ApproveReject>
                        <Comment
                            authorName="Joe"
                            timeAgo="Yesterday at 05:00AM"
                            comment="Bubye"
                            avatar={faker.image.avatar()}
                        />
                    </ApproveReject>
                </div>
            </div>
        )
    };
}
ReactDOM.render(<App />, document.getElementById('root'));