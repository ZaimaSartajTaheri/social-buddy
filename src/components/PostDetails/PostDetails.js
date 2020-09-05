import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import images from '../../fakeData';
import Comments from '../Comments/Comments';
import { makeStyles } from '@material-ui/core/styles';

const PostDetails = () => {

    const postStyles = makeStyles({
        root: {
          background: '#F0F0F0',
          border: 0,
          borderRadius: 3,
          padding: '30px',
        },
      });
    const commentsStyles = makeStyles({
        root: {
          background: '#F0F0F0',
          border: 0,
          borderRadius: 10,
          padding: '30px',
          margin:'20px',
        },
      });
    const postDiv = postStyles();
    const commentsDiv = commentsStyles();

    const {id}=useParams();
    const [postDetails,setPostDetails]=useState({});
    const [comments,setComments]=useState([]);
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(data=>setPostDetails(data))

    },[]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res=>res.json())
        .then(data=>setComments(data))

    },[]);

    const {title,body}=postDetails;
    const commentsCount=comments.length;
    const photos=images.slice(0,commentsCount);
    
    return (
        <div>
            <div className={postDiv.root}>
               <h2>Post ID: {postDetails.id}</h2>
               <h3>Title: {title}</h3>
               <h5>{body}</h5>
            </div>
            <div className={commentsDiv.root}>
              <h2 style={{textAlign:"center",color:"purple"}}>Comments</h2>
              {  
                comments.map(comment=><Comments key={comment.id} photo={photos.pop()} comment={comment}></Comments>)
              }
            </div>
        </div>
    );
};

export default PostDetails;