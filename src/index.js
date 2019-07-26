import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './Comment';
import ApproveReject from './ApproveReject';
const App = () => {
    return (
        <div className="ui container comments">
            <ApproveReject>
                <div>
                    <h5>Are you sure ?</h5>
                </div>
            </ApproveReject><ApproveReject>
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
    )
}
ReactDOM.render(<App />, document.getElementById('root'));