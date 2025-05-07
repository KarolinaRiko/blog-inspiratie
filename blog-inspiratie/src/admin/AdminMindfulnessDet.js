import React, { useState, useEffect } from "react";
import { db } from "../firebase.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { CheckCircle, XCircle } from "lucide-react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


function AdminReview() {
    const [slug, setSlug] = useState("");
    const [mindfulnessDetail, setMindfulnessDetail] = useState(null);
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState({ text: "", type: "" });
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const parseTaggedReview = (text) => {
        const sections = {
            description: "",
        };

        const regex = /#(description)\s*([^#]*)/gi;
        let match;

        while ((match = regex.exec(text)) !== null) {
            const key = match[1].toLowerCase();
            const value = match[2].trim();
            sections[key] = value;
        }

        setMindfulnessDetail(sections.mindfulness);
    };

    const handleEditorChange = (state) => {
        setEditorState(state);
        const plainText = state.getCurrentContent().getPlainText("\n");
        parseTaggedReview(plainText);
    };

    useEffect(() => {
        const fetchMinfulnessDetail = async () => {
            if (!slug) return;
            try {
                const docRef = doc(db, "mindfulness", slug);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setMindfulnessDetail(docSnap.data());
                } else {
                    setMindfulnessDetail(null);
                }
            } catch (error) {
                console.error("Eroare la căutarea cărții:", error);
                setMindfulnessDetail(null);
            }
        };

        fetchMinfulnessDetail();
    }, [slug]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!mindfulnessDetail) {
            setMessage({ text: "Cartea nu a fost găsită!", type: "error" });
            return;
        }

        const newReview = {
            slug,
            description,
        };


        try {
            await setDoc(doc(db, "mindfulnessDetail", slug), newReview);
            setMessage({ text: "Recenzia a fost adăugată!", type: "success" });

            setSlug("");
            setDescription("");
            setMindfulnessDetail(null);
            setEditorState(EditorState.createEmpty());

        } catch (error) {
            console.error("Eroare la adăugare:", error);
            setMessage({ text: "Eroare la adăugarea recenziei!", type: "error" });
        }

        setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    };

    return (
        <div>
            <div className='denum'>Adaugă Mindfulness</div>
            {message.text && (
                <div className={`message ${message.type}`}>
                    {message.type === "success" ? (
                        <CheckCircle color="green" size={20} />
                    ) : (
                        <XCircle color="red" size={20} />
                    )}
                    {message.text}
                </div>
            )}
            <form onSubmit={handleSubmit} className="admin-form">
                <div className="slug-rating-container">
                    <input type="text" placeholder="Slug" value={slug} onChange={(e) => setSlug(e.target.value)} required />
                </div>
                {mindfulnessDetail ? (
                    <div className="book-preview-mini">
                        <img src={mindfulnessDetail.image} alt={mindfulnessDetail.title} />
                        <div className="text-info">
                            <p><strong>Titlu:</strong> {mindfulnessDetail.title}</p>
                        </div>
                    </div>
                ) : slug ? (
                    <p style={{ color: "red" }}>Cartea nu a fost găsită.</p>
                ) : null}

                <div className="editor-container">
                    <div className="editor-background-message">
                        (#discription) - prin (;)
                    </div>
                    <Editor
                        editorState={editorState}
                        onEditorStateChange={handleEditorChange}
                        wrapperClassName="editor-wrapper"
                        editorClassName="editor-content"
                        toolbar={{
                            options: ["inline", "blockType", "list", "textAlign", "link", "emoji"],
                        }}
                    />
                </div>
            </form>
            <div className="button-container">
                <button type="submit">Salvează Detaliile</button>
            </div>
        </div>
    );
}

export default AdminReview;
