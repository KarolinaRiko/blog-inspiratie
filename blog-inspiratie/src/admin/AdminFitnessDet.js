import React, { useState, useEffect } from "react";
import { db } from "../firebase.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { CheckCircle, XCircle } from "lucide-react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function AdminFitnessDet() {
    const [slug, setSlug] = useState("");
    const [fitnessDetail, setFitnessDetail] = useState(null);
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [gif, setGif] = useState("");
    const [musclesImage, setMusclesImage] = useState("");
    const [benefits, setBenefits] = useState([]);
    const [mistakes, setMistakes] = useState([]);
    const [motivation, setMotivation] = useState("");
    const [muscles, setMuscles] = useState([]);
    const [steps, setSteps] = useState([]);
    const [recommendations, setRecommendations] = useState({
        beginner: { reps: "", sets: "" },
        intermediate: { reps: "", sets: "" },
        advanced: { reps: "", sets: "" },
    });
    const [message, setMessage] = useState({ text: "", type: "" });
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const parseTaggedSections = (text) => {
        const sections = {
            description: "",
            motivation: "",
            benefits: "",
            mistakes: "",
            muscles: "",
            steps: "",
            beginner: { reps: "", sets: "" },
            intermediate: { reps: "", sets: "" },
            advanced: { reps: "", sets: "" },
        };

        const regex = /#(description|motivation|benefits|mistakes|muscles|steps|beginner|intermediate|advanced)\s*([^#]*)/gi;
        let match;

        while ((match = regex.exec(text)) !== null) {
            const key = match[1].toLowerCase();
            const value = match[2].trim();
            if (["beginner", "intermediate", "advanced"].includes(key)) {
                const [reps, sets] = value.split(";").map((v) => v.trim());
                sections[key] = { reps: reps || "", sets: sets || "" };
            } else {
                sections[key] = value;
            }
        }

        setDescription(sections.description);
        setMotivation(sections.motivation);
        setBenefits(sections.benefits.split(";").map((b) => b.trim()).filter(Boolean));
        setMistakes(sections.mistakes.split(";").map((m) => m.trim()).filter(Boolean));
        setMuscles(sections.muscles.split(";").map((m) => m.trim()).filter(Boolean));
        setSteps(sections.steps.split(";").map((s) => s.trim()).filter(Boolean));
        setRecommendations({
            beginner: sections.beginner,
            intermediate: sections.intermediate,
            advanced: sections.advanced,
        });
    };

    const handleEditorChange = (state) => {
        setEditorState(state);
        const plainText = state.getCurrentContent().getPlainText("\n");
        parseTaggedSections(plainText);
    };

    useEffect(() => {
        const fetchFitnessData = async () => {
            if (!slug) return;
            try {
                const docRef = doc(db, "fitness", slug);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setFitnessDetail(data);
                    setCategory(data.category || "");
                    setTitle(data.title || "");
                    setGif(data.gif || "");
                    setMusclesImage(data.musclesImage || "");
                    setDescription(data.description || "");
                    setMotivation(data.motivation || "");
                    setBenefits(data.benefits || []);
                    setMistakes(data.mistakes || []);
                    setMuscles(data.muscles || []);
                    setSteps(data.steps || []);
                    setRecommendations(data.recommendations || {
                        beginner: { reps: "", sets: "" },
                        intermediate: { reps: "", sets: "" },
                        advanced: { reps: "", sets: "" },
                    });
                } else {
                    setFitnessDetail(null);
                }
            } catch (error) {
                console.error("Eroare la căutarea exercițiului:", error);
                setFitnessDetail(null);
            }
        };

        fetchFitnessData();
    }, [slug]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newFitnessDetail = {
            slug,
            category,
            title,
            gif,
            musclesImage,
            description,
            motivation,
            benefits,
            mistakes,
            muscles,
            steps,
            recommendations,
        };

        try {
            await setDoc(doc(db, "fitnessDetail", slug), newFitnessDetail);
            setMessage({ text: "Detaliile exercițiului au fost salvate!", type: "success" });

            setSlug("");
            setCategory("");
            setTitle("");
            setGif("");
            setMusclesImage("");
            setDescription("");
            setMotivation("");
            setBenefits([]);
            setMistakes([]);
            setMuscles([]);
            setSteps([]);
            setRecommendations({
                beginner: { reps: "", sets: "" },
                intermediate: { reps: "", sets: "" },
                advanced: { reps: "", sets: "" },
            });
            setFitnessDetail(null);
            setEditorState(EditorState.createEmpty());

        } catch (error) {
            console.error("Eroare la salvarea detaliilor:", error);
            setMessage({ text: "Eroare la salvarea detaliilor!", type: "error" });
        }

        setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    };

    return (
        <div>
            <div className="denum">Adaugă Detalii Exercițiu</div>
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
                <input type="text" placeholder="Slug exercițiu" value={slug} onChange={(e) => setSlug(e.target.value)} required />
                <input type="text" placeholder="URL GIF" value={gif} onChange={(e) => setGif(e.target.value)} />
                <input type="text" placeholder="URL Imagine Mușchi" value={musclesImage} onChange={(e) => setMusclesImage(e.target.value)} />

                {fitnessDetail ? (
                    <div className="book-preview-mini">
                        <div className="text-info">
                            <p><strong>Titlu:</strong> {fitnessDetail.title}</p>
                            <p><strong>Categorie:</strong> {fitnessDetail.category}</p>
                        </div>
                    </div>
                ) : slug ? (
                    <p style={{ color: "red" }}>Exercițiul nu a fost găsit.</p>
                ) : null}

                <div className="editor-container">
                    <div className="editor-background-message">
                        #description, #motivation, (#benefits, #mistakes, #muscles, #steps, #beginner, #intermediate, #advanced) - prin (;)
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

export default AdminFitnessDet;
