import { db } from "./src/firebase.js";
import { doc, setDoc } from "firebase/firestore";

const aromaterapieData = {
    slug: "aromaterapie",
    title: "Aromaterapie și Beneficiile Sale",
    titlu1: "Ce este aromaterapie?",
    titlu2: "Beneficiile Aromaterapiei",
    titlu3: "Uleiuri Esentiale Populare",
    titlu4: "Modalitati de Utilizare",
    titlu5: "Sfaturi pentru utilizarea uleiurilor esentiale",
    introducere: {
        text1: "Probabil că ai auzit deja despre aromaterapie, dar știi ce presupune cu adevărat?",
        text2: "Aromaterapia se bazează pe folosirea uleiurilor esențiale și altor substanțe naturale cu mirosuri plăcute pentru a îmbunătăți starea fizică, mentală și emoțională."
    },
    ceEste: [
        "Aromaterapia este o practică ce implică o experiență senzorială profundă, în care uleiurile esențiale emană arome naturale ce ajută la relaxarea minții și a corpului.",
        "Această metodă holistică combină abilitățile terapeutice ale specialistului cu efectele benefice ale aromelor, oferind o senzație de răsfăț și reducere a stresului."
    ],
    beneficii: [
        {
            "titlu": "Reducerea stresului și anxietății",
            "descriere": "Uleiurile de lavandă și bergamotă au efecte calmante, contribuind la diminuarea stresului. Acestea pot stimula producția de serotonină, hormonul fericirii.",
        },
        {
            "titlu": "Îmbunătățirea somnului",
            "descriere": " Uleiurile esențiale de lavandă, lemn de trandafir și eucalipt ajută la un somn liniștit. Poți adăuga câteva picături într-un difuzor sau pe pernă înainte de culcare."
        },
        {
            "titlu": "Stimularea concentrării și energiei",
            "descriere": "Uleiurile de mentă, lămâie și rozmarin sunt excelente pentru creșterea energiei și îmbunătățirea concentrării în timpul activităților ce necesită atenție.",
        },
        {
            "titlu": "Reducerea durerilor și disconfortului",
            "descriere": "Uleiurile de ghimbir și tea tree au proprietăți antiinflamatorii și analgezice, fiind utile pentru masajul terapeutic sau aplicarea pe zonele dureroase.",
        },
        {
            "titlu": "Îmbunătățirea stării emoționale",
            "descriere": "Lavanda, ylang-ylang și bergamota sunt ideale pentru susținerea unei stări de bine și echilibru emoțional.",
        },
        {
            "titlu": "Sprijin pentru sistemul respirator",
            "descriere": "Eucaliptul și menta ajută la descongestionarea căilor respiratorii.",
        },
        {
            "titlu": "Echilibrarea energiei vitale",
            "descriere": " Uleiurile de lămâie, busuioc, rozmarin și mentă pot fi utilizate în meditații pentru a sprijini echilibrul energetic.",
        },
        {
            "titlu": "Îmbunătățirea imunității",
            "descriere": "Uleiurile de eucalipt, cimbru și tea tree au proprietăți antimicrobiene și pot stimula sistemul imunitar."
        }

    ],
    uleiuri: [
        {
            nume: "Lavandă",
            descriere: "Este cunoscută pentru efectele sale calmante și relaxante, fiind ideală pentru reducerea stresului și îmbunătățirea calității somnului."
        },
        {
            nume: "Mentă",
            descriere: "Eficientă în reducerea migrenelor și durerilor de cap, mentă are și efect energizant și stimulent."
        },
        {
            nume: "Eucalipt",
            descriere: "Uleiul de eucalipt are proprietăți excelente de curățare a căilor respiratorii și ajută la reducerea congestiei nazale. Este, de asemenea, folosit pentru proprietățile sale energizante."
        },
        {
            nume: "Lămâie",
            descriere: "Este un antiseptic natural, ideal pentru purificarea aerului din interiorul casei și îmbunătățirea stării de spirit, datorită proprietăților sale revigorante și antimicrobiene."
        },
        {
            nume: "Ylang-ylang",
            descriere: "Este folosit pentru relaxare și echilibrarea emoțională. Este cunoscut pentru efectele sale pozitive asupra stării de bine și echilibrului mental."
        },
        {
            nume: "Rozmarin",
            descriere: "Uleiul de rozmarin ajută la îmbunătățirea circulației sângelui și poate fi folosit pentru a stimula concentrarea mentală și memoria."
        }
    ],
    modalitati: [
        {
            "tip": "Inhalare",
            "descriere": "Adaugă câteva picături de ulei esențial într-un vas cu apă fierbinte sau într-un difuzor. Acest lucru va permite vaporilor de ulei să fie inhalați, având un efect rapid asupra stării tale mentale și fizice."
        },
        {
            "tip": "Masaj",
            "descriere": "Uleiurile esențiale pot fi diluate cu uleiuri purtătoare, cum ar fi uleiul de migdale sau de cocos, și aplicate pe piele prin masaj. Acest lucru ajută la absorția mai rapidă a substanțelor active și la relaxarea mușchilor."
        },
        {
            "tip": "Băi aromatice",
            "descriere": "Adăugarea câtorva picături de ulei esențial în apa de baie este o modalitate foarte eficientă de a te relaxa și de a te răsfăța după o zi lungă."
        },
        {
            "tip": "Difuzare în aer",
            "descriere": "Folosirea unui difuzor pentru a elibera vaporii de ulei esențial în aer este ideală pentru crearea unei atmosfere plăcute și calmante acasă sau la birou."
        },
        {
            "tip": "Comprese",
            "descriere": "Uleiurile esențiale pot fi diluate în apă caldă și aplicate pe zonele afectate, având un efect analgezic și antiinflamator."
        }
    ],
    sfaturi: [
        {
            titlu: "Deși uleiurile esențiale sunt foarte benefice, este important să le folosești corect pentru a evita efectele secundare. Câteva recomandări pentru utilizare în siguranță:",
            recomandari: [
                "Diluează uleiurile esențiale: Uleiurile esențiale sunt foarte concentrate și trebuie diluate cu uleiuri purtătoare înainte de a le aplica pe piele.",
                "Testează înainte de utilizare: Aplică o cantitate mică de ulei diluat pe o zonă mică a pielii pentru a verifica dacă ai vreo reacție alergică.",
                "Nu le aplica pe pielea iritată: Evită utilizarea uleiurilor esențiale pe pielea crăpată sau iritată.",
                "Consultă un specialist: Înainte de a începe utilizarea aromaterapiei pentru afecțiuni grave sau cronice, este recomandat să consulți un specialist."
            ]
        }
    ],
    imagineIntro: "/images/spa.jpg"
};

const uploadAromaterapieToFirestore = async () => {
    try {
        await setDoc(doc(db, "Mindfulness", aromaterapieData.slug), aromaterapieData);
        console.log("Datele despre aromaterapie au fost adăugate cu succes!");
    } catch (error) {
        console.error("Eroare la adăugare: ", error);
    }
};

uploadAromaterapieToFirestore();
