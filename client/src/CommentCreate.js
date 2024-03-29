import React, { useState } from 'react';
import axios from 'axios';

export default ({postId}) => {
    const [content, setContent] = useState('');

    console.log('postId', postId);

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post(`http://posts.com/posts/${postId}/comments`,{
            content
        }).catch((error) => {console.log(error)}); 

        setContent('');
    };

    return <div>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label>New Comment</label>
                <input 
                    className='form-control'
                    onChange={e => setContent(e.target.value)}
                    value={content}
                /> 
            </div>
            <button className='btn btn-primary'>Submit</button>
        </form>
    </div>;
}