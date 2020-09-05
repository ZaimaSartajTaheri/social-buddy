import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Post.css';

const Post = (props) => {
    
    const {id,title,body}=props.post;

    return (
        <div className="post">
            <h2>Post ID: {id}</h2>
            <h3>Title: {title}</h3>
            <h5>{body}</h5>
            <Link className="link" to={`/post/${id}`}><Button variant="contained" color="primary">See More</Button></Link>
        </div>
    );
};

export default Post;