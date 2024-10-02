import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";  // API çağrıları için
import Navbar from "../components/navbar";
import Comment from "../components/Comment";  // Note bileşenini tekrar kullanabiliriz


const NoteComment = () => {
    const { noteid } = useParams();  // URL'den yazarın kullanıcı adını alıyoruz
    const [comments, setComments] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [noteTitle, setNoteTitle] = useState("");
    const [note, setNote] = useState("");

useEffect(() => {
    getComments();
    getNote();
}, [noteid]);  

const getComments = () => {
    api
        .get(`/api/notes/comment/${noteid}/`)  // username parametresini API çağrısına ekliyoruz
        .then((res) => res.data)
        .then((data) => {
            setComments(data);
           
        })
        .catch((err) => alert(err));
};

const getNote = () => {
    api.get(`/api/notes/${noteid}/`)
        .then((res) => res.data)
        .then((data) => {
            setNote(data);  // Gelen veriyi note state'ine kaydediyoruz
        })
        .catch((err) => alert("Error loading note"));
};


const createComment = (e) => {
    e.preventDefault();
    api
        .post(`/api/notes/comment/${noteid}/`, { content, title })
        .then((res) => {
            if (res.status === 201) alert("Comment created!");
            else alert("Failed to make note.");
            getComments();
        })
        .catch((err) => alert(err));
};


    
    return (
        <div>
            
            <Navbar />
            <h2>Blog: {note.title}</h2> 
            <h3>Comments</h3> 
            {noteid.length > 0 ? (
                <ul>
                    {comments.map((comment) => (
                        <Comment comment={comment}/>
                        
                    ))}
                </ul>
                
            ) : (
                <p>No comment available for this note.</p>
            )}
        

            <h2>Create a Comment Content</h2>
            <form onSubmit={createComment}>
                <label htmlFor="title">Comment Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
               
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
};

export default NoteComment;
