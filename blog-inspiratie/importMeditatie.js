import { db } from "./src/firebase.js";
import { doc, setDoc } from "firebase/firestore";

const meditatieData = {
    slug: "meditatie",
    title: "Meditatie",
    titlu1: "Ce este meditația?",
    introducere: {
        text1: "Meditația este o practică care implică concentrarea minții pentru a obține o stare de calm și claritate. Când explorăm sensul meditației , o înțelegem ca pe o metodă de cultivare a atenției și a conștientizării. Pentru a defini mai precis meditația , este o tehnică care antrenează mintea să se concentreze și să redirecționeze gândurile, adesea spre respirație, care servește drept ancoră.",
        text2: "Cum înveți să meditezi? În meditația de conștientizare, învățăm cum să acordăm atenție respirației pe măsură ce intră și iese, și cum observăm când mintea rătăcește de la această sarcină. Această practică de a reveni la respirație construiește mușchii atenției și ai atenției. Când acordăm atenție respirației noastre, învățăm cum să ne întoarcem și să rămânem în momentul prezent - să ne ancorăm în aici și acum intenționat, fără a judeca."
    },
    image1: "/images/meditatie.jpg",
    titlu2: "De ce să înveți cum să meditezi?",
    meditatie: {
        text1: "Deși meditația nu este un remediu, cu siguranță poate oferi un spațiu atât de necesar în viața ta. Uneori, asta este tot ce avem nevoie pentru a face alegeri mai bune pentru noi înșine, familiile noastre și comunitățile noastre. Și cele mai importante instrumente pe care le poți aduce cu tine la practica ta de meditație sunt puțină răbdare, puțină bunătate pentru tine și un loc confortabil în care să te așezi.",
        text2: "Când medităm, injectăm în viețile noastre benefic ii de anvergură și de lungă durată. Și bonus: nu aveți nevoie de echipament suplimentar sau de un abonament scump."
    },
    titlu3: "Iată 10 motive pentru a medita:",
    motive: [
        {
            tip: "Înțelegerea durerii",
            descriere: "Meditația vă ajută să deveniți mai conștienți de durerea fizică și emoțională, permițându-vă să o abordați cu mai multă claritate și compasiune."
        },
        {
            tip: "Reduceți-vă stresul",
            descriere: "practica regulată de meditație poate reduce semnificativ nivelul de stres, ajutându-vă să vă simțiți mai calm și mai relaxat în viața de zi cu zi."
        },
        {
            tip: "Conectați-vă mai bine",
            descriere: "prin îmbunătățirea atenției și a empatiei, meditația vă îmbunătățește relațiile și comunicarea cu ceilalți, favorizând conexiuni mai profunde."
        },
        {
            tip: "Îmbunătățiți concentrarea",
            descriere: "meditația îți antrenează mintea să se concentreze mai bine, îmbunătățindu-ți capacitatea de a rămâne concentrat și productiv."
        },
        {
            tip: "Reduceți",
            descriere: "zgomotul constant și dezordinea mentală prin meditație, ceea ce duce la o minte mai clară și mai liniștită."
        },
        {
            tip: "Îmbunătățiți sănătatea emoțională",
            descriere: "meditația vă poate ajuta să vă îmbunătățiți starea de spirit și perspectiva asupra vieții prin promovarea unei mentalități mai pozitive și mai echilibrate."
        },
        {
            tip: "Creșteți conștientizarea de sine",
            descriere: "prin meditație, obțineți o perspectivă mai profundă asupra gândurilor, emoțiilor și comportamentelor dvs., ceea ce poate duce la o mai mare înțelegere de sine și creștere personală."
        }, {
            tip: "Promovați un somn mai bun",
            descriere: "meditația poate relaxa mintea și corpul, facilitând adormirea și îmbunătățirea calității somnului."
        },
        {
            tip: "Creșteți imunitatea",
            descriere: "practica regulată de meditație vă poate întări sistemul imunitar, ajutându-vă corpul să reziste bolilor și să se recupereze mai repede."
        },
        {
            tip: "Susține rezistența mentală",
            descriere: "meditația ajută la dezvoltarea rezistenței mentale, permițându-ți să faci față mai bine provocărilor și eșecurilor din viață."
        },
    ],
    titlu4: "Formele de bază ale meditației",
    desc: "Meditația poate îmbrăca diverse forme, dar majoritatea derivă din două tipuri esențiale: meditația concentrată și meditația mindfulness.",
    forme: [
        {
            tip: "1. Meditație concentrată",
            descriere: "Această metodă presupune focalizarea pe un obiect sau pe un element din jurul tău, folosind simțurile tale. Scopul principal este să trăiești și să te concentrezi pe acel obiect, fie că este vorba despre respirația ta, un cuvânt sau un stimul extern. Poți, de exemplu, să privești o flacără de lumânare, să asculți un sunet specific sau să numărați respirațiile. Deși poate părea simplu, unii începători pot avea dificultăți în a-și păstra atenția asupra unui singur obiect pe o perioadă lungă de timp. În acest caz, dacă mintea ți-o ia razna, încearcă să o redirecționezi și să te concentrezi din nou. Meditația concentrată este ideală pentru cei care vor să își dezvolte abilitatea de a-și menține atenția.",
            instructiuni: [
                {
                    denumire: "Cum să practicați meditația concentrată",
                    pasi: [
                        "Stai într-o poziție confortabilă, cu spatele drept.",
                        "Respirați normal și urmărește fiecare respirație.",
                        "Acordă atenție pauzelor dintre inspirație și expirație.",
                        "Menține-ți corpul relaxat și respirația liniștită.",
                        "Dacă mintea ți se abate, adu-o înapoi la respirație și continuă."
                    ],
                    image: "/images/concentrare.jpg",
                }
            ]
        },
        {
            tip: "2. Meditația mindfulness",
            descriere: "Este una dintre cele mai populare forme de meditație, care presupune observarea gândurilor care îți trec prin minte, fără a le analiza sau judeca. Scopul este să observi fluxul acestora, fără a interveni. Acest tip de meditație este recomandat celor care vor să mediteze singuri, fără un ghid.",
            instructiuni: [
                {
                    denumire: "Cum să practicați meditația mindfulness",
                    pasi: [
                        "Găsește un loc liniștit și așază-te confortabil.",
                        "Setează un cronometru pentru durata meditației (încă de la 10 minute este suficient).",
                        "Închide ochii și concentrează-te pe respirație sau pe mișcările abdomenului în timpul inspirației și expirației.",
                        "Permite gândurilor să vină și să plece, fără a le judeca.",
                        "Oprește meditația atunci când cronometru sună.",
                    ],
                    image: "/images/mindfulness.jpg",
                }
            ]
        },
    ],
    titlu5: "Alte forme de meditație",
    descr: "Iată câteva metode alternative care aduc beneficii diverse:",
    modalitati: [
        {
            tip: "1. Meditația transcendentală",
            descriere: "Aceasta este o practică spirituală ce presupune repetarea unei mantre. Este o tehnică ce poate fi aplicată pentru a depăși stările dificile din viață. Poți alege o frază sau un cuvânt pe care să îl repeți în gând sau cu voce tare, având ca scop îmbunătățirea stării interioare. Un studiu din 2014 a demonstrat că poate reduce stresul și depresia, dar sunt necesare mai multe cercetări pentru a verifica aceste efecte.",
            instructiuni: [
                {
                    denumire: "Cum se practică meditația transcendentală?",
                    pasi: [
                        "Alege o mantra care să fie repetată în timpul meditației.",
                        "Așază-te confortabil și închide ochii, repetând mantra pe întreaga durată a sesiunii.",
                        "Încearcă să nu te lași distras de alte gânduri.",
                    ],
                    image: "/images/meditation.png",
                }
            ]
        },
        {
            tip: "2. Respirație în cutie",
            descriere: "Această tehnică este excelentă pentru momentele când simți un stres intens. Funcționează prin controlul respirației, numărând până la patru pentru fiecare pas: inspirație, reținere, expirare și reținere. Această metodă este folosită chiar și de trupe speciale și poate ajuta la reducerea nivelului de stres și a tensiunii arteriale.",
            instructiuni: [
                {
                    denumire: "Cum să exersați respirația în cutie",
                    pasi: [
                        "Inspirați încet timp de 4 secunde.",
                        "Țineți respirația pentru încă 4 secunde.",
                        "Țineți-vă respirația timp de 4 secunde.",
                        "Expirați încet în 4 secunde.",
                        "Repetați acest ciclu de 12-15 ori.",
                    ]
                }
            ]
        },
        {
            tip: "3. Meditație în timpul mersului",
            descriere: "Aceasta este o practică excelentă pentru cei care nu se simt confortabil să mediteze cu ochii închiși. Poți combina mersul cu meditația, concentrându-te pe pașii tăi și pe mișcările corpului. Este o metodă bună de a reduce anxietatea și de a îmbunătăți sănătatea mentală și fizică.",
            instructiuni: [
                {
                    denumire: "Cum să practicați meditația în timpul mersului",
                    pasi: [
                        "Alege un traseu și începe să mergi încet.",
                        "Fii atent la fiecare pas și sincronizează-ți respirația cu mișcarea.",
                        "Concentrează-te pe senzațiile fizice pe care le simți în timpul mersului",
                    ],
                    image: "/images/walk.jpg",
                }
            ]
        },
        {
            tip: "4. Meditație prin vizualizare",
            descriere: "Această practică presupune crearea unor imagini mentale care induc stări de calm și relaxare. Sportivii, de exemplu, folosesc tehnici de vizualizare pentru a-și îmbunătăți performanțele. Te poți imagina într-un loc liniștit, cum ar fi pe malul mării sau într-o pădure liniștită.",
            instructiuni: [
                {
                    denumire: "Cum să practicați meditația prin vizualizare",
                    pasi: [
                        "Stai confortabil și relaxează-te complet.",
                        "Imaginează-ți o scenă care îți aduce liniște.",
                        "Concentrează-te pe imagini și respirație.",
                    ]
                }
            ]
        },
    ],
    imagine6: "/images/meditez.jpg",
    intrebare: "Cât de des ar trebui să meditați?",
    cat: "Frecvența meditației depinde de fiecare persoană. La început, este important să meditezi regulat pentru a te obișnui cu practica. Unele persoane aleg să mediteze zilnic, în timp ce altele preferă să o facă mai rar. Cel mai important este să îți găsești ritmul care ți se potrivește.",
    titlu6: "Concluzie",
    conclu: "Meditația poate fi o practică extrem de benefică pentru sănătatea mentală și fizică. Poți încerca diferite tipuri de meditație și să descoperi care se potrivește cel mai bine stilului tău de viață. Nu ai nevoie de echipamente speciale, iar beneficiile vor deveni evidente pe măsură ce practici mai des."
};

const uploadMeditatieToFirestore = async () => {
    try {
        await setDoc(doc(db, "Mindfulness", meditatieData.slug), meditatieData);
        console.log("Datele despre aromaterapie au fost adăugate cu succes!");
    } catch (error) {
        console.error("Eroare la adăugare: ", error);
    }
};

uploadMeditatieToFirestore();