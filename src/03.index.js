import React from 'react';
import ReactDom from 'react-dom';
//import faker from 'faker';
import CommentDetail from './03.CommentDetail';
import ApprovalCard from './03.ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="Nice blog post" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 2:00PM" content="Nice blog post2" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" content="Nice blog post3" />
            </ApprovalCard>
        </div >
    );
};

ReactDom.render(
    <App />,
    document.querySelector('#root')
);