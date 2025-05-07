import { db } from "./src/firebase.js";
import { doc, setDoc } from "firebase/firestore";

const fitnessData = {
    "secrete-gym": [
      {
        slug: "secret-1",
        title: "Adopta o forma corecta",
        description: "Cheia succesului în orice antrenament este să execuți mișcările corect. Fie că este vorba de genuflexiuni sau flotări, o formă incorectă poate duce la accidentări și la rezultate mai slabe. Încearcă să îți controlezi postura și să nu te grăbești.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlyUq3FK4ZkG6AnB_TwNNneA5mncHpwI0PKAvpRWRGpzrT_WtTkIOLpJcZ8t9REJd9g8&usqp=CAU",
        category: "secrete-gym",
        categories: "Secrete",
      },
      {
        slug: "secret-2",
        title: "Varietatea este cheia progresului",
        description: "Pentru a evita stagnarea și a continua să progresezi, este esențial să îți schimbi rutina de antrenament din când în când. Încearcă să variezi exercițiile, greutățile și numărul de seturi/repetări.",
        image: "https://www.steroizi.ro/media/3279/pauza-odihna-pentru-forta-si-putere.jpg",
        category: "secrete-gym",
        categories: "Secrete",
      },
      {
        slug: "secrete-3",
        title: "Odihna este importanta",
        description: "Nu subestima puterea odihnei! Mușchii cresc și se repară în timpul perioadelor de odihnă. Asigură-te că îți dai corpului suficient timp pentru recuperare între antrenamente.",
        image: "https://www.worldclass.ro/wp-content/uploads/Picture1-1-1.jpg",
        category: "secrete-gym",
        categories: "Secrete",
      },
      {
        slug: "secret-4",
        title: "Progresia treptata",
        description: "Creșterea graduală a greutăților sau a intensității antrenamentului este esențială pentru a evita platoul de antrenament. Începe cu greutăți mai mici și crește-le pe măsură ce devii mai puternic.",
        image: "https://urbangym.ro/wp-content/uploads/2021/11/Ziua-de-brate-si-umeri-pentru-doamne.jpg",
        category: "secrete-gym",
        categories: "Secrete",
      },
      {
        slug: "secret-5",
        title: "Exercitiile compound sunt cele mai eficiente",
        description: "Exercițiile care lucrează mai multe grupuri musculare deodată (de exemplu, genuflexiunile, îndreptările sau flotările) sunt excelente pentru a construi forță și masă musculară. Acestea sunt mult mai eficiente decât exercițiile de izolare.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLl2pbCcRsvyavmp8aTaayWSLyfxJ1eposUQ&s",
        category: "secrete-gym",
        categories: "Secrete",
      },
      {
        slug: "secrete-6",
        title: "Nu neglija încalzirea si stretching-ul",
        description: "Înainte de orice antrenament, este esențial să îți încălzești mușchii. Acest lucru îți va îmbunătăți performanța și va preveni accidentările. De asemenea, stretching-ul după antrenament ajută la flexibilitate și recuperare.",
        image: "https://blog.nasm.org/hubfs/beginner-stretches.jpg",
        category: "secrete-gym",
        categories: "Secrete",
      },
    ],
  };

  const uploadFitnessDataToFirestore = async () => {
    try {
        for (const category in fitnessData) {
            const exercises = fitnessData[category];
            for (const exercise of exercises) {
                await setDoc(doc(db, "fitness", exercise.slug), {
                    ...exercise,
                    category: category 
                });
                console.log(`Exercițiul "${exercise.title}" a fost adăugat în Firestore.`);
            }
        }
    } catch (error) {
        console.error("Eroare la încărcarea datelor: ", error);
    }
};

uploadFitnessDataToFirestore();