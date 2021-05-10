//import { PromiseProvider } from 'mongoose';
import React from 'react';

function Post (props) {

    return (
        <div key={props.index} className="postsGeneral">
            <span>
                <img src={props.img} alt={props.alt}></img>
            </span>
            <span className="postIntro">
                <h2>{props.title}</h2>
                <h4>{props.metaDescription}</h4>
            </span>
            <span className="postDetails">
            <h5>{props.writer}</h5>
            <h6>{props.createdAt}</h6>
            </span>
            <br></br>
            <span>
                <p className="postBody">{props.body}</p>
            </span>
            <br></br>
            <br></br>
        </div>
    )
 }

export default Post