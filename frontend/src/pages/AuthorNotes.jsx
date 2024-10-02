import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";  // API çağrıları için
import Navbar from "../components/navbar";
import Note from "../components/Note";  // Note bileşenini tekrar kullanabiliriz

const AuthorNotes = () => {
    const { username } = useParams();  // URL'den yazarın kullanıcı adını alıyoruz
    const [notes, setNotes] = useState([]);

useEffect(() => {
    getNotes();
}, [username]);  // Username değiştiğinde notları yeniden getir

const getNotes = () => {
    api
        .get(`/api/notes/author/${username}/`)  // username parametresini API çağrısına ekliyoruz
        .then((res) => res.data)
        .then((data) => {
            setNotes(data);
            console.log(data);
        })
        .catch((err) => alert(err));
};
    
    return (
        <div>
            
            <Navbar />
            <h2>Blogs by {username}</h2> {/* Yazarın adı burada gösteriliyor */}
            {notes.length > 0 ? (
                <ul>
                    {notes.map((note) => (
                        <Note key={note.id} note={note} showDeleteButton={false} />
                    ))}
                </ul>
            ) : (
                <p>No notes available for this author.</p>
            )}
        </div>
    );
};

export default AuthorNotes;
