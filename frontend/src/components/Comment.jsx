import React from "react";
import "../styles/Note.css"

function Comment({ comment }) {
    const formattedDate = new Date(comment.created_at).toLocaleDateString("en-US")

    return (
        <div className="note-container">
          
            <p className="note-title">Title: {comment.title}</p>
            <p className="note-content">Content: {comment.content}</p>
            <p className="note-date">Date: {formattedDate}</p>
            <p className="note-author">Author: {comment.author}</p>
           
        </div>
    );
}

export default Comment