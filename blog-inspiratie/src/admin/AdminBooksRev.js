import React, { useState, useEffect } from "react";
import { db } from "../firebase.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { CheckCircle, XCircle } from "lucide-react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


function AdminReview() {
    const [slug, setSlug] = useState("");
    const [bookReviews, setBookReviews] = useState(null);
    const [rating, setRating] = useState(0);
    const [introduction, setIntroduction] = useState("");
    const [parerea, setParerea] = useState("");
    const [pros, setPros] = useState("");
    const [cons, setCons] = useState("");
    const [conclusion, setConclusion] = useState("");
    const [message, setMessage] = useState({ text: "", type: "" });
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const parseTaggedReview = (text) => {
        const sections = {
            introduction: "",
            parerea: "",
            pros: "",
            cons: "",
            conclusion: "",
        };

        const regex = /#(introduction|parerea|pros|cons|conclusion)\s*([^#]*)/gi;
        let match;

        while ((match = regex.exec(text)) !== null) {
            const key = match[1].toLowerCase();
            const value = match[2].trim();
            sections[key] = value;
        }

        setIntroduction(sections.introduction);
        setParerea(sections.parerea);
        setPros(sections.pros);
        setCons(sections.cons);
        setConclusion(sections.conclusion);
    };

    const handleEditorChange = (state) => {
        setEditorState(state);
        const plainText = state.getCurrentContent().getPlainText("\n");
        parseTaggedReview(plainText);
    };

    useEffect(() => {
        const fetchBookReviews = async () => {
            if (!slug) return;
            try {
                const docRef = doc(db, "books", slug);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setBookReviews(docSnap.data());
                } else {
                    setBookReviews(null);
                }
            } catch (error) {
                console.error("Eroare la căutarea cărții:", error);
                setBookReviews(null);
            }
        };

        fetchBookReviews();
    }, [slug]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!bookReviews) {
            setMessage({ text: "Cartea nu a fost găsită!", type: "error" });
            return;
        }

        const newReview = {
            slug,
            rating: parseInt(rating),
            author: bookReviews.details?.author || "",
            category: bookReviews.category || bookReviews.categories?.[0] || "",
            image: bookReviews.image || "",
            details: {
                ...bookReviews.details,
                published: bookReviews.details?.publicationDate || "",
            },
            review: {
                introduction: introduction.split(";"),
                parerea: parerea.split(";"),
                pros: pros.split(";"),
                cons: cons.split(";"),
                conclusion: conclusion.split(";"),
            },
        };


        try {
            await setDoc(doc(db, "bookReviews", slug), newReview);
            setMessage({ text: "Recenzia a fost adăugată!", type: "success" });

            setSlug("");
            setRating(0);
            setIntroduction("");
            setParerea("");
            setPros("");
            setCons("");
            setConclusion("");
            setBookReviews(null);
            setEditorState(EditorState.createEmpty());
            
        } catch (error) {
            console.error("Eroare la adăugare:", error);
            setMessage({ text: "Eroare la adăugarea recenziei!", type: "error" });
        }

        setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    };

    return (
        <div>
           <div className='denum'>Adaugă Recenzie Carte</div>
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
                    <input type="text" placeholder="Slug carte" value={slug} onChange={(e) => setSlug(e.target.value)} required />
                    <input type="number" min="0" max="5" placeholder="(0-5)" value={rating} onChange={(e) => setRating(e.target.value)} required />
                    </div>
                    {bookReviews ? (
                        <div className="book-preview-mini">
                            <img src={bookReviews.image} alt={bookReviews.title} />
                            <div className="text-info">
                                <p><strong>Autor:</strong> {bookReviews.details?.author || "Autor necunoscut"}</p>
                                <p><strong>Titlu:</strong> {bookReviews.title}</p>
                            </div>
                        </div>
                    ) : slug ? (
                        <p style={{ color: "red" }}>Cartea nu a fost găsită.</p>
                    ) : null}

                    <div className="editor-container">
                    <div className="editor-background-message">
                    (#introduction, #parerea, #pros, #cons, #conclusion) - prin (;)
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
                <button type="submit">Adaugă Recenzia</button>
            </div>
        </div>
    );
}

export default AdminReview;
