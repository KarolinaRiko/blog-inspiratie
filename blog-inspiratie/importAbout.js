import { db } from "./src/firebase.js";
import { doc, setDoc } from "firebase/firestore";

const aromaterapieData = {
    slug: "about",
    denumire: "About",
    titlu: "Salut prietene!",
    descriere1: "Inspiratie - un blog, pe care imi arat pasiunile mele. Impartasesc viata mea mai echilibrata, mai sanatoasa si mai implinita, in care fiecare pas conteaza.",
    descriere2: "Nu am un plan perfect, dar invat din fiecare experienta si să ma bucur din toata inima de ceea ce fac. Sper ca si tu, citind acest blog, iti doresti sa evoluezi pas cu pas. Imi place foarte mult sa cred ca fiecare dintre noi poate face mici schimbari care, pe termen lung, duc la o viata mai implinita.",
    descriere2: "Iti doresc succes la vizionarea blogului meu si o viata mai implinita.",
    image: "https://sun9-45.userapi.com/impg/eJbTp_cK9Sgry9bekNt9loaJAq46cPlAD9sQrw/H-jA_BwObV8.jpg?size=1440x1440&quality=95&sign=cbf7dbda0bd6389e92ba9831db69eef1&type=album",
    recomandari: [
        "Recomandari de carti",
        "Idei pentru antrenamente interesante",
        "Retete sanatoase si delicioase",
        "Cunoasterea partii de spiritualitate"
    ],
    titlu1: "Ce vei gasi aici?",
    titlu2: "Conecteaza-te cu Inspiratie",
    Eu: "Ma numesc Karolina. Si sunt pasionata de dezvoltarea personala, sunt pe cale de a evolua cat mai mult. Momentan sunt studenta la informatica, dar sunt deschisa sa explor si alte directii ale vietii mele. De asemenea ador sa gatesc mancare cat gustoasa atat si sanatoasa, iubesc mult sa citesc carti, ador sportul si de asemenea recent am inceput sa ma interesez de partea spirituala. Sunt deschisa sa evoluez cat mai mult, si in acest blog o sa-mi impartasesc o bucatica mica din viata mea.",
    detalii: [
        {
            tip: "Citeste blogul",
            det: "Vezi articolele postate de mine."
        },
        {
            tip: "Aboneaza-te la Newsletter",
            det: "Primești sfaturi utile și pline de inspirație."
        },
        {
            tip: "Alatura-te de Inspiratie",
            det: "Hai să cream împreună o viață mai împlinită!"
        },
    ],
    titlu3: "Despre mine",
};

const uploadAboutToFirestore = async () => {
    try {
        await setDoc(doc(db, "About", aromaterapieData.slug), aromaterapieData);
        console.log("Datele despre aromaterapie au fost adăugate cu succes!");
    } catch (error) {
        console.error("Eroare la adăugare: ", error);
    }
};

uploadAboutToFirestore();

