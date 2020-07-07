import React from 'react';
import './Hello.css';

function MediaCard({title,body,imageUrl}) {
return <div>
            <h2>{title}</h2>
            <p className="myname">{body}</p>
            <img alt="Image Url" src={imageUrl}/>
       </div>
}

export default MediaCard;
