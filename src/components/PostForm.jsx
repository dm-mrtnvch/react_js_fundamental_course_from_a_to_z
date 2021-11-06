import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: "", body: ""})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
    }

    return (
        <form action="text">
            {/*Управляемый компонент*/}
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value })}
                type="text"
                placeholder="post name"
            />
            {/*Неуправляемый компонент*/}
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="post description"
            />
            {/*<input ref={bodyInputRef} type="text"/>*/}
            <MyButton onClick={addNewPost}>create post</MyButton>
        </form>
    );
};

export default PostForm;