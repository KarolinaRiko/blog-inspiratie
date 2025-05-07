import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebase.js";
import { doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";
import { CheckCircle, XCircle } from "lucide-react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function AdminRecipesDet() {
    const [slug, setSlug] = useState("");
    const [recipesDetail, setRecipesDetail] = useState(null);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState([]);
    const [message, setMessage] = useState({ text: "", type: "" });
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const isMounted = useRef(true);

    const parseTaggedSections = (text) => {
        const sections = {
            ingredients: "",
            steps: [],
        };
   
        const regex = /#(ingredients|steps)\s*([^#]*)/gi;
        let match;
   
        while ((match = regex.exec(text)) !== null) {
            const key = match[1].toLowerCase();
            const value = match[2].trim(); 
            if (key === "steps") {
                sections[key] = value.split(";").map((item) => item.trim()).filter(Boolean);
            } else {
                sections[key] = value;
            }
        }
   
        setIngredients(sections.ingredients.split(";").map((b) => b.trim()).filter(Boolean));
        setSteps(sections.steps.map((step, index) => {
            const isImage = step.startsWith("http") && (step.endsWith(".jpg") || step.endsWith(".jpeg") || step.endsWith(".png") || step.endsWith(".webp"));
        
            if (isImage) {
                return { image: step }; 
            } else if (step.includes("http") && (step.includes(".jpg") || step.includes(".png") || step.includes(".jpeg") || step.includes(".webp"))) {
                const parts = step.split("http");
                const text = parts[0].trim();
                const imageUrl = "http" + parts[1].trim();
                return { text, image: imageUrl }; 
            } else {
                return { text: step }; 
            }
        }));              
    };   

    const handleEditorChange = (state) => {
        if (!isMounted.current) return;
        setEditorState(state);
        const plainText = state.getCurrentContent().getPlainText("\n");
        parseTaggedSections(plainText);
    };    

    useEffect(() => {
        isMounted.current = true;

        const fetchRecipe = async () => {
            if (!slug) return;
            try {
                const docRef = doc(db, "recipes", slug);
                const docSnap = await getDoc(docRef);
    
                if (docSnap.exists() && isMounted.current) {
                    const data = docSnap.data();
                    setRecipesDetail(data);
                    setCategory(data.category || "");
                    setTitle(data.title || "");
                    setDescription(data.description || "");
                    setImage(data.image || "");
                    setIngredients(data.ingredients || []);
    
                    const stepsRef = collection(docRef, "steps");
                    const stepsSnap = await getDocs(stepsRef);
                    const sortedSteps = [];
                    stepsSnap.forEach((doc) => {
                        sortedSteps.push({ id: doc.id, ...doc.data() });
                    });
    
                    sortedSteps.sort((a, b) => parseInt(a.id) - parseInt(b.id));
                    setSteps(sortedSteps);
                } else if (isMounted.current) {
                    setRecipesDetail(null);
                    setSteps([]);
                }
            } catch (error) {
                console.error("Eroare la preluarea rețetei:", error);
                if (isMounted.current) {
                    setRecipesDetail(null);
                    setSteps([]);
                }
            }
        };
    
        fetchRecipe();
    
        return () => {
            isMounted.current = false;
        };
    }, [slug]);
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newRecipe = {
            slug,
            category,
            description,
            image,
            title,
            ingredients,
            steps,
        };

        try {
            await setDoc(doc(db, "recipesDetail", slug), newRecipe);
            setMessage({ text: "Rețeta a fost salvată!", type: "success" });

            setSlug("");
            setCategory("");
            setDescription("");
            setImage("");
            setTitle("");
            setIngredients([]);
            setSteps([]);
            setRecipesDetail(null);
            setEditorState(EditorState.createEmpty());

        } catch (error) {
            console.error("Eroare la salvare:", error);
            setMessage({ text: "Eroare la salvarea rețetei!", type: "error" });
        }

        setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    };

    return (
        <div>
            <div className="denum">Adaugă Detalii Rețetă</div>
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
                    <input
                        type="text"
                        placeholder="Slug rețetă"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        required
                    />
                </div>

                {recipesDetail ? (
                    <div className="book-preview-mini">
                        <img src={image} alt={title} />
                        <div className="text-info">
                            <p><strong>Titlu:</strong> {title}</p>
                            <p><strong>Categorie:</strong> {category}</p>
                        </div>
                    </div>
                ) : slug ? (
                    <p style={{ color: "red" }}>Rețeta nu a fost găsită.</p>
                ) : null}

                <div className="editor-container">
                    <div className="editor-background-message">
                        (#ingredients, #steps (text +- imagine)) - prin (;)
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
                    <button type="submit">Salvează Detalii</button>
                </div>
        </div>
    );
}

export default AdminRecipesDet;
