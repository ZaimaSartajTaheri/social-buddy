import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Comments.css';

const Comments = (props) => {
    
    const commentStyles = makeStyles({
        root: {
            border:'3px solid blue',
            borderRadius:10,
            padding:30,
            marginBottom:20,
            display:'flex',
        },
      });
    const comment = commentStyles();
    
    const {name,email,body}=props.comment;
    const photo=props.photo.image;
    
    return (
        <div className={comment.root}>
            <img src={photo}/>
            <div className="details">
                <h3>{name}</h3>
                <p>Email: {email}</p>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Comments;