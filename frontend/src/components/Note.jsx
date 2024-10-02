import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Note.css";

function Note({ note, onDelete, showDeleteButton, showCommentButton }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");
    const navigate = useNavigate();

    // Yönlendirme fonksiyonu (username kullanarak)
    const handleNoteClick = () => {
        navigate(`/author/${note.author}`);  // Yazarın kullanıcı adı ile yönlendirme yapıyoruz
    };
    const handleCommentClick = () => {
        navigate(`/comment/${note.id}`);  // note.id ile yönlendirme yapıyoruz
    };

    return (
        <div className="note-container" onClick={handleNoteClick}> {/* Tıklanabilir hale getiriyoruz */}
            <p className="note-title">Title: {note.title}</p>
            <p className="note-content">Content: {note.content}</p>
            <p className="note-date">Publish Date: {formattedDate}</p>
            <p className="note-author">Author: {note.author}</p> {/* author.username kullanılıyor */}

            {showCommentButton && (
            <button
                    className="comment-button"
                    onClick={(e) => {
                        e.stopPropagation(); 
                        handleCommentClick();
                    }}
                >
                    Comment
                </button>
 )}
            {/* Delete butonunun gösterilmesini prop ile kontrol ediyoruz */}
            {showDeleteButton && (
                <button
                    className="delete-button"
                    onClick={(e) => {
                        e.stopPropagation(); // Silme işlemi yaparken yönlendirmeyi durdur
                        onDelete(note.id);
                    }}
                >
                    Delete
                </button>
            )}
        </div>
    );
}

export default Note;
