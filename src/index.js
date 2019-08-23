import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './Comment';
import ApproveReject from './ApproveReject';
import Season from './SeasonDisplay';
import Spinner from './Spinner';
import './seasonDisplay.css';

class App extends React.Component {
    state = {latitude: null, errorMessage: null }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude: position.coords.latitude}),
            error => this.setState({errorMessage: error.message})
        )
    }
    render() {
        return (
            <div className={`ui container`}>{this.renderAllProject()}</div>
        );
    }
    renderAllProject(){
        return (
            <div id="all-projects" className="ui container">
                {this.renderSeasonProject()}
                {this.renderCommentProject()}
            </div>
        );
    }
    renderSeasonProject(){
        return (
            <div id="season-project" className="seasons">
                <h1 className="hide project-heading">Weather Season App</h1>
                {((this.state.errorMessage && !this.state.latitude) ?
                    <div className="season-fullwidth"><p><b>Error: </b>{this.state.errorMessage}</p></div> : '')}
                {((!this.state.errorMessage && this.state.latitude) ?
                    <Season errorMessage={this.state.errorMessage} latitude={this.state.latitude}/> : '')}
                {((!this.state.errorMessage && !this.state.latitude) ?
                    <Spinner message="waiting for location request..."/> : '')}
            </div>
        );
    }
    renderCommentProject(){
        return (
            <div id="comment-project" className="hide">
                <h1 className="project-heading">Comments App</h1>
                <div className="ui comments">
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
        );
    }
    /* Lifecycle of react js
    * 1 - constructor
    * 2 - render
    * 3 - componentDidMount
    * 4 - componentDidUpdate
    * 5 - componentWillUnmount
    * 6 - shouldComponentUpdate
    * 7 - getDerivedStateFromProps
    * 8 - getSnapshotBeforeUpdate
    * */
}
ReactDOM.render(<App />, document.getElementById('root'));