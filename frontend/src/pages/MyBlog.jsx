import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note"
import "../styles/MyBlog.css"
import Navbar from "../components/navbar";

function MyBlog() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) alert("Note created!");
                else alert("Failed to make note.");
                getNotes();
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <Navbar/>
            <div>
                <h2>My Blog</h2>
                {notes.map((note) => (
                    <Note showDeleteButton={true} note={note} onDelete={deleteNote} key={note.id} />
                ))}
                
            </div>
            <h2>Create a Blog Content</h2>
            <form onSubmit={createNote}>
                <label htmlFor="title">Title:</label>
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
                <label htmlFor="media">Image:</label>
                <br />
                <input
                    type="file"
                    id="media"
                    name="media"
                    onChange={(e) => setImage(e.target.files[0])}
                   
                />
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default MyBlog;