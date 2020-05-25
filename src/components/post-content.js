import React from 'react';
import { Link } from 'react-router';

const PostContent = ({postToDisplay}) => {
    //console.log(postToDisplay);
    return (
        <div>
            <h3>{postToDisplay.title}</h3>
            <p>{postToDisplay.content}</p>
            <p>Auteur : {postToDisplay.author}</p>
            <Link to={'/'} className='button_space'><button className='btn btn-danger'>Retour</button></Link>
        </div>
    )
}

export default PostContent;