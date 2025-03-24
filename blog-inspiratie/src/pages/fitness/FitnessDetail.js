import React from "react";
import { useParams } from "react-router-dom";

const fitnessDetail = {
  "exercitii-upper": [
    {
      slug: "push-ups",
      title: "Push-ups",
      description: "Exercițiul de push-up este un exercițiu foarte popular folosit în antrenamentul extremităților superioare. Este un exercițiu cu lanț cinetic închis care nu necesită instrumente și folosește greutatea corporală pentru rezistență. Are multe variante, astfel încât poate fi ajustat în funcție de nivelul de fitness. Flotările sunt un exercițiu rapid și eficient pentru creșterea forței.",
      gif: "https://media0.giphy.com/media/5t9IcXiBCyw60XPpGu/giphy.gif?cid=6c09b952noibuyuorzmmpehl3crwiztsuoaktk5mbhci053t&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
      category: "exercitii-upper",
      musclesImage: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2024/06/Muscles-worked-in-push-ups.jpg?resize=563%2C563&ssl=1",
      mistakes: [
        "Nu vă lăsați șoldurile să se încline. Mențineți corpul într-o linie dreaptă pe tot parcursul exercițiului.",
        "Verificați-vă poziția mâinii. Mâinile trebuie să fie puțin mai late decât lățimea umerilor.",
        "Nu vă lăsați coatele să se stingă. Coatele trebuie să formeze un unghi de aproximativ 45 de grade față de corp.",
        "Efectuați flotările mai încet și controlat. Nu săriți sau nu faceți mișcări bruște, deoarece riscați să vă răniți."
      ],
      benefits: [
        "Îmbunătățește forța pieptului, umerilor și tricepsului.",
        "Le poti face mai ușoare sau mai dificile în funcție de nivelul de fitness.",
        "Este un exercițiu care se poate efectua oriunde, fără echipament.",
        "Este un exercițiu care poate ajuta la îmbunătățirea sănătății cardiovasculare."
      ],
      muscles: ["Piept", "Deltoizi", "Triceps"],
      steps: [
        "1. Începeți prin a vă pune în poziția de flotare, cu mâinile pe sol, mai late decât lățimea umerilor și cu picioarele întinse.",
        "2. Corpul trebuie să fie într-o linie dreaptă, de la cap până la călcâie. Nu lăsați șoldurile să se lase sau să se ridice.",
        "3. Coboară încet pieptul spre sol, păstrând coatele aproape de corp.",
        "4. Odată ce pieptul atinge solul (sau aproape de sol), împingeți-vă înapoi în poziția inițială, folosind forța din piept, umeri și triceps.",
        "5. Repetați mișcarea pentru numărul dorit de repetări."
      ],
      motivation: "Nu renunța! Fiecare flotare făcută te aduce mai aproape de obiectivele tale de forță și rezistență.",
      recommendations: {
        beginner: { sets: "2-3", reps: "5-10" },
        intermediate: { sets: "3-5", reps: "10-20" },
        advanced: { sets: "3-5", reps: "20+" }
      }
    },
    {
      slug: "dumbbell-shoulder-press",
      title: "Dumbbell Shoulder Press ",
      description: "Shoulder press este unul dintre cele mai bune exerciții pentru întărirea umerilor și a părții superioare a spatelui. Cel mai mare beneficiar al acestui exercițiu este partea frontală a mușchiului umărului (deltoidul anterior), dar vei lucra și deltoizii, tricepșii, trapezul și pectoralii. Shoulder press activează și mușchii stabilizatori din umeri, coate și încheieturi, iar mișcarea antrenează indirect mușchii abdominali, deoarece menții un trunchi drept pe tot parcursul exercițiului. Toate acestea contribuie la îmbunătățirea stabilității și echilibrului corpului. Integrând shoulder press în rutina ta de antrenament, vei putea desfășura mai eficient activitățile zilnice și vei reduce riscul de accidentări în timpul altor activități care implică partea superioară a corpului și brațele.",
      gif: "https://cdn.jefit.com/assets/img/exercises/gifs/48.gif",
      category: "exercitii-upper",
      musclesImage: "https://bodybuilding-wizard.com/wp-content/uploads/2014/05/seated-dumbbell-shoulder-press-muscles-engaged-1.jpg",
      mistakes: [
        "Coatele prea largi",
        "Lovirea ganterelor una de alta în partea de sus",
        "Extinderea excesivă în partea de sus",
        "Arcada spatelui",
        "Împingerea înainte și în afacere, nu în sus"
      ],
      benefits: [
        "Întărirea mușchilor",
        "Îmbunătățirea posturii",
        "Stabilitate și echilibru",
        "Prevenirea accidentărilor"
      ],
      muscles: ["Deltoizi", "Triceps", "Trapez", "Core"],
      steps: [
        "1. Strânge-ți abdomenul și strânge-ți fesele",
        "2. Ține-ți coatele la un unghi de 45 de grade",
        "3. Împinge ganterele deasupra capului",
        "4. Fă o ușoară îndoire a brațelor în partea de sus",
        "5. Coboară greutatea cu control"
      ],
      motivation: "Fiecare repetare te face mai puternică. Nu renunța când arde, acolo începe progresul! Ridică greutatea, ridică-ți standardele! ",
      recommendations: {
        beginner: { sets: "2-3", reps: "8-12" },
        intermediate: { sets: "3-5", reps: "6-10" },
        advanced: { sets: "4-5", reps: "4-8" }
      }
    },
    {
      slug: "bent-over-rows",
      title: "Bent-over Rows",
      description: "Bent over row este un exercițiu de bază pentru antrenamentele spatelui și este considerat unul dintre cele mai eficiente exerciții pentru dezvoltarea masei musculare a spatelui. Bent over row este utilizat în principal pentru a construi și întări mușchii părții superioare a spatelui (latissimus dorsi, romboizi și trapez). Totuși, pentru a executa corect acest exercițiu, este necesară implicarea mușchilor zonei lombare, a trunchiului și a brațelor. Bent over row este utilizat în principal pentru a construi și întări mușchii părții superioare a spatelui (latissimus dorsi, romboizi și trapez). Totuși, pentru a executa corect acest exercițiu, este necesară implicarea mușchilor zonei lombare, a trunchiului și a brațelor.",
      gif: "https://media2.giphy.com/media/E9piwvfhDHF6I9jkss/giphy.gif?cid=6c09b952zc0ujpug3px6i8fm6luonxbl9omy7cg9b2mm83hh&ep=v1_gifs_search&rid=giphy.gif&ct=g",
      category: "exercitii-upper",
      musclesImage: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2023/01/Barbell-row-muscles-worked.png?resize=563%2C563&ssl=1",
      mistakes: [
        "Evită să îți curbi spatele în timpul exercițiului. Menține o poziție neutră a coloanei pentru a preveni dureri și accidentări.",
        "Nu te grăbi să ridici greutățile. Execută mișcările lent și controlat pentru a activa corect mușchii și a evita leziunile.",
        "Nu lăsa umerii să se ridice spre urechi. Ține-i jos și înapoi pentru a proteja gâtul și umerii.",
        "Folosește o greutate care îți permite să păstrezi o formă corectă. Prea multă greutate poate duce la o formă greșită și accidentări.",
        "Evită să îți deschizi prea mult coturile. Ele trebuie să fie aproape de corp pentru a activa corect mușchii spatelui."
      ],
      benefits: [
        "Dezvoltă forța și masa musculară a spatelui",
        "Îmbunătățește postura",
        "Crește forța brațelor și a prizei ",
        "Întărește zona core",
        "Îmbunătățește performanța în alte exerciții și activități zilnice"
      ],
      muscles: ["Romboizii ", "Latissimus Dorsi", "Trapezul ", "Erector Spinae "],
      steps: [
        "1. Adoptă o poziție în picioare, ținând bara cu o priză dublă pronată (palmele orientate în jos).",
        "2. Apleacă-te din șolduri până când trunchiul este aproximativ paralel cu podeaua (sau ușor deasupra). Începe mișcarea trăgând coatele înapoi, în timp ce retragi omoplații.",
        "3. Menține abdomenul activat pe parcursul mișcării pentru a preveni arcuirea excesivă a coloanei.",
        "4. Trage bara spre abdomen până când atinge corpul, apoi coboar-o lent și controlat în poziția inițială.",
        "5. Nu împinge capul înainte în timpul tracțiunii."
      ],
      motivation: "Spatele puternic nu e doar pentru estetică, ci pentru putere! Ridică, controlează, progresează! ",
      recommendations: {
        beginner: { sets: "2-4", reps: "10-12" },
        intermediate: { sets: "4-5", reps: "8-10" },
        advanced: { sets: "4-5", reps: "6-8" }
      }
    },
    {
      slug: "triceps-dips",
      title: "Triceps Dips",
      description: "Triceps Dips, uneori numite doar dips, sunt un exercițiu popular deoarece nu este necesar să le faci într-o sală de sport. Acestea lucrează mai mulți mușchi importanți ai brațelor și umerilor, pe lângă mușchii pieptului. În plus, este ușor să le faci mai dificile sau mai ușoare prin câteva ajustări simple. Astfel, chiar dacă nu ești obișnuită să faci exerciții fizice, există o variație de dips pe care o poți încerca pentru a începe să construiești forță.",
      gif: "https://cdn.jefit.com/assets/img/exercises/gifs/229.gif",
      category: "exercitii-upper",
      musclesImage: "https://upload.wikimedia.org/wikipedia/commons/8/83/Triceps_brachii.png",
      mistakes: [
        "Ține-ți umerii jos, departe de urechi, în timp ce efectuezi triceps dips. Încearcă să menții un gât lung pe parcursul mișcării.",
        "Fii atentă la tensiunea din umeri în timpul triceps dips. Nu coborî mai jos dacă începi să simți o presiune mare. În caz contrar, riști o posibilă accidentare la umeri.",
        "Nu îți bloca coatele la vârful mișcării. Menținerea coatelor ușor flexate ajută la menținerea tensiunii pe triceps.",
        "Dacă te apleci înainte, vei lucra mai mult pieptul decât tricepsul. Menține un corp într-o linie dreaptă fără a te apleca înainte."
      ],
      benefits: [
        "Triceps dip-ul este unul dintre cele mai eficiente exerciții pentru activarea mușchiului triceps brachii din spatele brațului superior.",
        "De asemenea, trebuie să îți activezi core-ul pe măsură ce îți ții șoldurile deasupra solului, ceea ce ajută la îmbunătățirea stabilității.",
        "Tricepsul este folosit pentru a extinde coatele, fiind important în mișcări precum împingerea unui cărucior de cumpărături sau utilizarea unei mașini de tuns iarba.",
        "Tricepsul ajută la menținerea echilibrului corpului. Dacă practici sporturi care implică acțiuni de tragere (care folosesc bicepsul), este esențial să îți întărești tricepsul pentru a preveni accidentările și dezechilibrele musculare."
      ],
      muscles: ["Triceps"],
      steps: [
        "1. Apasă-ți palmele pentru a-ți ridica corpul și alunecă înainte suficient încât fesele tale să depășească marginea scaunului.",
        "2. Coboară-te până când coatele sunt îndoite între 45 și 90 de grade. Controlează mișcarea pe toată amplitudinea mișcării.",
        "3. Împinge-te înapoi lent până când brațele tale sunt aproape drepte și repetă."
      ],
      motivation: "Fă fiecare repetare să conteze! Tricepșii puternici nu sunt doar un semn de forță, ci de determinare! Ridică-te și îți vei depăși limitele! ",
      recommendations: {
        beginner: { sets: "3", reps: "8-12" },
        intermediate: { sets: "4", reps: "8-10" },
        advanced: { sets: "5", reps: "6-8" }
      }
    },
    {
      slug: "lateral-raises",
      title: "Lateral Raises",
      description: "Ridicările laterale sunt exerciții excelente pentru a dezvolta mușchii umerilor! Acestea implică o mișcare simplă, de obicei realizată cu greutăți. Ca în orice exercițiu, este important să înveți să execuți corect forma de ridicări laterale și să eviți greșelile comune.",
      gif: "https://cdn.jefit.com/assets/img/exercises/gifs/32.gif",
      category: "exercitii-upper",
      musclesImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPsi87XJFWvxgYMejgpsRSYFBpajw4eQRtQ&s",
      mistakes: [
        "Rezistă tentației de a „balansa” corpul. În schimb, concentrează-te pe menținerea core-ului activat și pe un trunchi drept și puternic pe parcursul mișcării.",
        "Nu te grăbi! Controlează mișcarea pentru a crește timpul sub tensiune și a stimula o creștere musculară suplimentară. Încearcă să ridici ganterele în 3 secunde, să ții o pauză de 1 secundă în partea de sus și apoi să cobori în 3 secunde.",
        "Nu conduce mișcarea cu mâinile. Acest lucru elimină tensiunea de pe deltoizi. În schimb, conduce cu coatele, asigurându-te că acestea sunt întotdeauna puțin mai sus decât mâinile pe parcursul exercițiului.",
        "Nu ridica ganterele prea sus. Ridicarea brațelor mai sus de nivelul umerilor va scoate atenția de pe deltoizi și va activa trapezul. Concentrează-te pe a-ți aduce brațele paralel cu umerii, dar nu mai sus."
      ],
      benefits: [
        "Construirea zonei exterioare a umerilor",
        "Umeri și brațe superioare bine definite",
        "Creșterea mobilității, a amplitudinii de mișcare și a stabilității umerilor",
        "Corectarea eventualelor dezechilibre musculare"
      ],
      muscles: ["Deltoizii laterali", "Deltoizii anteriori", "Deltoizii posterioari"],
      steps: [
        "1. Stai drept, cu brațele lângă corp într-o prindere neutră (palmele una față de cealaltă), ținând ganterele. Menține umerii la spate, pieptul ridicat și activează core-ul.",
        "2. Ridică ganterele, departe de linia mediana a corpului, păstrând o ușoară flexiune a coatelor, până când ajung la nivelul orizontal, formând un „T” cu brațele.",
        "3. Coboară încet înapoi în poziția de start și repetă.",
      ],
      motivation: "Crește-ți umerii, crește-ți încrederea! Fiecare ridicare te aduce mai aproape de forma ta ideală! Ridică, simte și continuă să avansezi! ",
      recommendations: {
        beginner: { sets: "2-3", reps: "10-12" },
        intermediate: { sets: "3-4", reps: "8-10" },
        advanced: { sets: "4-5", reps: "6-8" }
      }
    },
    {
      slug: "chest-press",
      title: "Chest Press",
      description: "Împinsul la piept (Chest Press) este un exercițiu clasic pentru întărirea părții superioare a corpului, care lucrează pectoralii (pieptul), deltoizii (umerii) și tricepsul (brațele). Pentru cele mai bune rezultate și siguranță, este esențial să folosești o formă corectă și o tehnică adecvată. ",
      gif: "https://images.squarespace-cdn.com/content/v1/54f9e84de4b0d13f30bba4cb/1526590877144-BYR9X8ZX5FROTGOZ2VHL/DSC_6330.mov.gif",
      category: "exercitii-upper",
      musclesImage: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/10/Muscles-worked-by-dumbbell-chest-press.png?resize=700%2C700&ssl=1",
      mistakes: [
        "Arcuirea excesivă a spatelui - Evită să îți arcuiești spatele în timpul exercițiului. Menține o poziție neutră a coloanei vertebrale și apasă-ți picioarele ferm pe sol pentru a preveni accidentările.",
        "Lipsa controlului mișcării - Nu lăsa greutatea să cadă prea repede în jos. Controlează mișcarea atât când coboară greutatea, cât și când o împingi înapoi în sus pentru a maximiza stimulul muscular și a preveni rănirile.",
        "Lăsarea coatelor prea deschise  Evită să îți îndrepți coatele prea spre exterior, la 90 de grade. Ideal este să le menții la un unghi de aproximativ 45 de grade față de corp pentru a proteja umerii.",
        "Ridicarea prea rapidă a greutății - Nu te grăbi să împingi greutatea prea repede. Concentrează-te pe mișcări lente și controlate pentru a maximiza activarea mușchilor.",
        "Folosirea unei greutăți prea mari - Este important să alegi o greutate care să îți permită să menții forma corectă pe parcursul întregii mișcări. Folosirea unei greutăți prea mari poate duce la o tehnică incorectă și crește riscul de accidentare."
      ],
      benefits: [
        "Dezvoltă forța corpului superior",
        "Activează mai multe grupuri musculare",
        "Îmbunătățește sănătatea mentală",
        "Ajută la arderea caloriilor și pierderea grăsimii",
        "Îmbunătățește nivelul de fitness"
      ],
      muscles: ["Piept", "Deltoizi", "Triceps"],
      steps: [
        "1. Întinde-te pe o bancă plată, cu picioarele apăsând ferm în sol.",
        "2. Tragă-ți umerii în jos și înapoi, astfel încât să îi apeși pe bancă.",
        "3. Ține câte o ganteră în fiecare mână, cu palmele orientate spre înainte și degetele mari înfășurate în jurul mânerului.",
        "4. La inspirație, coboară ganterele ușor mai larg decât nivelul pieptului, făcând mișcarea lent și controlat.",
        "5. Atinge ușor pieptul cu ganterele",
        "6. La expirație, împinge brațele în sus, menținând coatele ușor îndoite.",
        "7. Poziționează ganterele puțin sub nivelul ochilor."
      ],
      motivation: "Fiecare împingere te apropie de puterea supremă! Nu te opri până nu simți că pieptul tău devine mai puternic cu fiecare set!",
      recommendations: {
        beginner: { sets: "3", reps: "12-15" },
        intermediate: { sets: "3-4", reps: "8-12" },
        advanced: { sets: "4-5", reps: "6-10" }
      }
    },
    {
      slug: "bicep-curls",
      title: "Bicep Curls",
      description: "Bicep Curl-ul este un exercițiu de sală conceput pentru a izola și viza mușchii bicepsului, ajutând la dezvoltarea forței și a masei musculare în timp. Exercițiul de bicep curl își primește numele din mișcarea de curl creată prin contractarea mușchilor bicepsului pentru a ridica ganterele, menținând coatele aproape de torace. Bicep Curl-ul este unul dintre exercițiile dovedite pentru dezvoltarea grupului muscular al bicepsului și este unul dintre cele mai bune exerciții pentru creșterea și întărirea brațelor.",
      gif: "https://i.pinimg.com/originals/8c/53/27/8c532774e4e1c524576bf1fb829ad895.gif",
      category: "exercitii-upper",
      musclesImage: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2024/02/Muscles-worked-in-dumbbell-curl-exercise-1024x1024.png?resize=700%2C700&ssl=1",
      mistakes: [
        "Balansarea - Folosirea impulsului poate permite ridicarea unei greutăți mai mari, dar îndepărtează atenția de la biceps. Menține-ți trunchiul drept, stabil și nemișcat.",
        "Lăsarea greutății prea repede - Nu lăsa greutatea repede de la vârful repetării. Dacă nu controlezi faza excentrică, nu vei beneficia la maximum de exercițiu. Menține tensiunea pe parcursul mișcării.",
        "Tragerea - Mulți împing coatele înapoi și trag bara pe corp. Deși această mișcare nu este complet greșită, este mai bine să îți fixezi coatele lângă torace și să le imaginezi ca niște balamale, urmând o arcadă controlată.",
        "Ridicarea unei greutăți prea mari - Lasă-ți ego-ul deoparte și ridică greutatea pe care o poți controla până când ești pregătit să o crești."
      ],
      benefits: [
        "Efectuarea constantă a flexiunilor pentru biceps te va ajuta să îți construiești forță în brațul superior și să înveți cum să folosești corect mușchii brațului, activând și mușchii core-ului.",
        "Flexiunile lucrează mușchii bicepsului din fața brațului superior, precum și mușchii antebrațului — brahialis și brachioradialis.",
        "Acești mușchi sunt folosiți de fiecare dată când ridici ceva, ceea ce este o activitate comună în viața de zi cu zi.",
      ],
      muscles: ["Biceps Brachii", "Brachialis", "Brachioradialis"],
      steps: [
        "1. Stai în picioare, ținând câte un dumbbell în fiecare mână, cu brațele atârnând pe lângă corp.",
        "2. Asigură-te că coatele sunt aproape de torace și umerii nu sunt ridicați.",
        "3. Ținând brațele superioare nemișcate, expiră și ridică greutățile până la nivelul umerilor, rotind încheieturile în exterior, în timp ce îți contractezi bicepsul.",
      ],
      motivation: "Fiecare curl adaugă forță și definire! Nu te opri până nu simți că bicepșii tăi sunt mai mari cu fiecare repetare!",
      recommendations: {
        beginner: { sets: "3", reps: "10-12" },
        intermediate: { sets: "3-4", reps: "8-10" },
        advanced: { sets: "4-5", reps: "6-8" }
      }
    },
  ],
  "exercitii-lower": [
    {
      slug: "squats",
      title: "Squats ",
      description: "Squatul este un pattern de mișcare fundamental care necesită integrarea mai multor articulații și mușchi. Bebelușii fac squaturi perfect, dar apoi uităm acest lucru și învățăm să ne aplecăm. Ca exercițiu dinamic de forță, squaturile implică mai mulți mușchi din partea superioară și inferioară a corpului care lucrează împreună simultan.",
      gif: "https://media.tenor.com/1NY6qOs30XIAAAAM/goblet-squad.gif",
      category: "exercitii-lower",
      musclesImage: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/05/Squat-muscles-worked.png?resize=700%2C700&ssl=1",
      mistakes: [
        "Arcuirea spatelui: Arcuirea excesivă a coloanei toracale și lombare este o greșeală întâlnită probabil cel mai des la sală. Încercați să mențineți spatele într-o poziție naturală, chiar și în detrimentul unei genuflexiuni care nu este suficient de joasă.",
        "Libertate de mișcare redusă: Jumătate de genuflexiuni înseamnă jumătate de rezultat, deoarece o genuflexiune mai joasă angajează mai mulți mușchi din fese și picioare. O încălzire corectă a șoldurilor înainte de antrenament sau folosirea accesoriului squat wedge blocks, vă pot ajuta cu o mobilitate mai bună.",
        "Înclinare în față sau în spate: Acest lucru este provocat cel mai des de greutate distribuită incorect pe picioare. Încercați să distribuiți greutate uniform pe toată suprafața piciorului.",
        "Ridicare călcâielor de pe podea: Acest lucru are legătură cu punctul anterior. Călcâiele ar trebui să fie fixate ferm pe podea tot timpul.",
        "Rotirea genunchilor înspre interior: Această greșeală poate provoca leziuni ale ligamentelor genunchiului și pune presiune inutilă pe genunchi. Concentrați-vă să mențineți genunchii spre exterior tot timpul. O bandă elastică vă poate ajuta în acest caz dacă o așezați deasupra genunchilor și încercați să o mențineți sub tensiune în timp ce faceți genuflexiuni. "
      ],
      benefits: [
        "Dezvoltă forță funcțională",
        "Favorizează dezvoltarea mușchilor membrelor inferioare",
        "Au ca rezultat îmbunătățirea în alte sporturi",
        "Susțin mobilitatea",
        "Ard mai multe calorii"
      ],
      muscles: ["Cvadricepși", "Fese"],
      steps: [
        "1. Stați cu picioarele depărtate cam la nivelul umerilor, menținând greutatea pe întreaga suprafață a piciorului.",
        "2. Țineți gâtul în linie cu trunchiul, menținând o linie dreaptă de la cap înspre șolduri, privirea înainte, umerii trași în spate și în jos, spatele într-o curbă naturală și pieptul deschis, cu privirea înainte.",
        "3. Întindeți brațele în față sau încrucișați-le la piept pentru un echilibru mai bun.",
      ],
      motivation: "Fiecare genuflexiune te face mai puternică! Ridică greutatea și coboară adânc, simte cum îți construiești picioarele și fundul de fier!",
      recommendations: {
        beginner: { sets: "3-4", reps: "20+" },
        intermediate: { sets: "4", reps: "30+" },
        advanced: { sets: "4-5", reps: "50+" }
      }
    },
    {
      slug: "lunges",
      title: "Lunges",
      description: "Lunges sunt un exercițiu puternic, care îți permite să modelezi și să întărești aproape toate mușchile corpului inferior. Învață să faci fente cu formă corectă, iar acest exercițiu poate deveni o parte valoroasă a oricărui regim de antrenament de forță sau de circuit.",
      gif: "https://media.tenor.com/-YiEMDDCOwoAAAAM/afundo.gif",
      category: "exercitii-lower",
      musclesImage: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/10/Muscles-worked-by-dumbbell-lunge.png?resize=700%2C700&ssl=1",
      mistakes: [
        "Inclinarea prea multă înainte - Menține-ți trunchiul drept și evită să te apleci prea mult înainte.",
        "Permițând genunchiului din față să se îndrepte spre interior - Asigură-te că genunchiul rămâne aliniat cu piciorul, fără a se deplasa spre interior.",
        "Arcarea umerilor sau a spatelui - Menține-ți spatele drept și umerii retrași pentru o poziție corectă.",
        "Evită să împingi cu piciorul din spate, concentrează-te pe piciorul din față pentru mișcarea corectă."
      ],
      benefits: [
        "Lucrează mai multe grupe de mușchi din partea inferioară a corpului.",
        "Îmbunătățește echilibrul și stabilitatea în mișcări unilaterale.",
        "Simulează mișcările de alergare, ajutând la construirea mușchilor pentru a absorbi impactul.",
        "Îmbunătățește eficiența într-un program de rezistență.",
        "Previne accidentările și ajută la întărirea ligamentelor."
      ],
      muscles: ["Fesierii", "Cvadricepsul", "Hamstrings", "Gambele"],
      steps: [
        "1. Începe dintr-o poziție verticală, cu picioarele la lățimea șoldurilor.",
        "2. Fă un pas înainte mai lung decât un pas normal astfel încât un picior să fie în fața trunchiului și celălalt în spate. Piciorul din față trebuie să rămână plat pe sol, iar călcâiul din spate se va ridica.",
        "3. Îndoaie genunchii până ajungi la aproximativ 90 de grade, menținând trunchiul drept și activând mușchii abdomenului.",
        "4. Împinge energic cu piciorul din față pentru a reveni la poziția de start.",
      ],
      motivation: "Fiecare pas înainte te face mai puternică! Coboară adânc, ridică-te cu forță și simte cum picioarele tale se transformă!",
      recommendations: {
        beginner: { sets: "2-3", reps: "15+" },
        intermediate: { sets: "3-4", reps: "20+" },
        advanced: { sets: "4-5", reps: "30+" }
      }
    },
    {
      slug: "glute-bridges",
      title: "Glute Bridges",
      description: "Exercițiul podul gluteal este versatil, provocator și eficient. Este o adiție excelentă la orice rutină de antrenament, indiferent de vârstă sau nivel de fitness. Acest exercițiu lucrează partea din spate a picioarelor, cunoscută sub numele de lanț posterior. Principalele grupe musculare implicate sunt ischio-gambierii și fesierii.",
      gif: "https://static.wixstatic.com/media/2566d7_f74030a463314e73bea9e129567ea451~mv2.gif",
      category: "exercitii-lower",
      musclesImage: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2023/03/Muscles-worked-in-glute-bridge.png?resize=563%2C563&ssl=1",
      mistakes: [
        "Te miști prea repede - activează-ți core-ul, fesierii și picioarele. Evită mișcările rapide și necontrolate pentru a preveni accidentările.",
        "Îți arcui prea mult spatele - nu ridica excesiv șoldurile, deoarece poate cauza dureri lombare. Menține o linie dreaptă de la umeri până la genunchi.",
        "Nu îți activezi fesierii - strânge fesierii la fiecare repetare pentru a-i menține implicați și pentru a proteja zona lombară.",
        "Nu ai stabilitate în picioare - apasă ferm în călcâie și trage-le ușor spre fesieri pentru a activa mușchii posteriori ai coapselor și șoldurile."
      ],
      benefits: [
        "Susține postura corectă.",
        "Îmbunătățește forța nucleului, fesierilor, picioarelor și șoldurilor.",
        "Crește echilibrul și mobilitatea, esențiale odată cu înaintarea în vârstă pentru prevenirea căderilor.",
        "Face mai ușoare activitățile zilnice, precum ridicarea din pat, urcarea scărilor și ridicarea obiectelor de pe sol."
      ],
      muscles: ["Fesieri", "Hamstrings", "Lombari", "Abdomen"],
      steps: [
        "1. Așază-te pe spate cu picioarele îndoite la un unghi de 90 de grade și tălpile așezate ferm pe sol.",
        "2. Orientează degetele de la picioare spre exterior la un unghi de 45 de grade, iar genunchii să fie în aceeași direcție cu degetele.",
        "3. Apasă în podea cu tălpile și ridică șoldurile. Ar trebui să simți o activare a părții exterioare a coapselor.",
        "4. Menține genunchii aliniați cu degetele de la picioare și evită să îi lași să se deplaseze în față peste degete.",
        "5. Coboară controlat șoldurile spre podea. Aceasta este o repetare."
      ],
      motivation: "Fesieri puternici și conturați încep cu fiecare ridicare! Ridică-ți șoldurile, simte focul în fiecare repetare!",
      recommendations: {
        beginner: { sets: "2-3", reps: "12-15" },
        intermediate: { sets: "3-4", reps: "10-12" },
        advanced: { sets: "4-5", reps: "8-10" }
      }
    },
    {
      slug: "step-ups",
      title: "Step-ups",
      description: "Step-up-urile cu greutăți sunt excelente pentru partea inferioară a corpului, iar adăugarea ganterelor crește încărcătura pe mușchii lucrați. Exercițiul poate fi modificat pentru a oferi un antrenament sigur și eficient pentru persoanele de toate nivelurile de fitness, integrându-se în majoritatea rutinelor de exerciții concepute pentru a crește forța în mușchii coapsei și fesele.",
      gif: "https://blog.myfitnesspal.com/wp-content/uploads/2019/07/High-box-step-ups.gif",
      category: "exercitii-lower",
      musclesImage: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2021/01/Muscles-worked-by-step-up.png?resize=700%2C700&ssl=1",
      mistakes: [
        "Evitați trecerea genunchiului peste degetele picioarelor - Protejați genunchiul piciorului activ prin evitarea împingerii acestuia prea înainte. Dacă genunchiul depășește degetele, se schimbă mușchii folosiți și se pune mai multă presiune pe articulația genunchiului.",
        "Alinierea greșită a genunchiului - Genunchiul piciorului activ trebuie să urmeze linia celor de-al doilea și al treilea deget al piciorului. Evitați ca genunchiul să se colapseze spre interior sau exterior.",
        "Evitați împingerea cu piciorul inferior - Munca trebuie să vină din piciorul de conducere, ridicând celălalt picior ca pe o greutate moartă. Împingerea cu piciorul inferior reduce încărcătura pe piciorul activ.",
        "Nu aduceți spatele în curbură - Poate fi necesar să vă aplecați puțin înainte pentru a evita stresul asupra articulației genunchiului. În acest caz, păstrați trunchiul cât mai drept posibil, ridicând pieptul și evitând curburile spatelui."
      ],
      benefits: [
        "Echilibru îmbunătățit - Exercițiile pe un singur picior cresc forța și stabilitatea articulațiilor, îmbunătățind propriocepția (capacitatea corpului de a percepe poziția sa în spațiu). Acest lucru reduce riscul de căderi și accidentări.",
        "Mobilitate crescută - Lateral step-ups sunt exerciții funcționale care antrenează corpul pentru mișcări naturale, precum urcatul și coborâtul scărilor.",
        "Stabilitate articulară sporită - Lucrul asupra musculaturii din partea inferioară a corpului oferă suport articulațiilor gleznelor, genunchilor și șoldurilor.",
        "Un core mai puternic - Exercițiile de echilibru solicită mușchii abdominali și ai spatelui, contribuind la gestionarea durerilor de spate și prevenirea recidivelor acestora."
      ],
      muscles: ["Cvadricepși", "Glutei", "Aductori", "Ischio-gambieri"],
      steps: [
        "1. Faceți un pas cu piciorul drept, apăsând prin călcâi pentru a îndrepta piciorul drept.",
        "2. Aduceți piciorul stâng pentru a întâlni piciorul drept pe treaptă.",
        "3. Îndoiți genunchiul drept și faceți un pas înapoi cu piciorul stâng.",
        "4. Aduceți piciorul drept în jos pentru a întâlni piciorul stâng pe pământ.",
      ],
      motivation: "Fiecare pas te urcă mai sus, nu doar pe bancă, ci și în progres! Ridică-te cu forță și fă picioarele să ardă!",
      recommendations: {
        beginner: { sets: "2-3", reps: "15" },
        intermediate: { sets: "3-4", reps: "20" },
        advanced: { sets: "4-5", reps: "25" }
      }
    },
    {
      slug: "leg-curls",
      title: "Leg Curls",
      description: "Flexiile pentru picioare (cunoscute și sub denumirea scurtă de leg curls) sunt un exercițiu de izolare care vizează partea din spate a piciorului: mușchii ischio-gambieri și mușchii gambei. Acestea pot fi efectuate în diferite poziții și sunt o adăugire excelentă la aproape orice antrenament de forță pentru partea inferioară a corpului. Când sunt realizate corect, flexiile pentru picioare pot ajuta la îmbunătățirea echilibrului, rezistenței, forței generale și performanței atletice. Și când înveți ce greșeli comune, cum ar fi folosirea greutăților incorecte, să eviți în timpul acestui exercițiu, poți obține beneficiile acestui exercițiu clasic de două ori mai mult.",
      gif: "https://www.top10consultants.com/wp-content/uploads/2020/02/45-3498304-Leg-Curls-GIF-aa13a58de5a744719617eb7155357877.gif",
      category: "exercitii-lower",
      musclesImage: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2023/05/muscles-worked-seated-leg-curl.png?resize=700%2C700&ssl=1",
      mistakes: [
        "Padul pentru picioare prea sus - Dacă leverul cu pernă este prea sus pe gambe, poate pune presiune pe tendonul lui Ahile și reduce amplitudinea mișcării. Prima dată când încerci leg curls, este recomandat să ai un antrenor sau instructor de fitness care să îți arate poziția corectă și să te ajute să reglezi perna dacă este necesar.",
        "Nu folosești greutatea corectă - Pentru a executa corect un leg curl, începe întotdeauna cu o greutate mai ușoară. Nu vrei să forțezi corpul să compenseze prin ridicarea șoldurilor și flexarea spatelui inferior. Aceasta nu izolează gambele și hamstringurile și poate duce la accidentări ale spatelui.",
      ],
      benefits: [
        "Îmbunătățirea forței și echilibrului: Hamstringurile puternice contribuie la o forță generală mai bună și un echilibru mai bun.",
        "Prevenirea accidentărilor: Activarea și întărirea mușchilor gambei, feselor și coapselor ajută la evitarea accidentărilor în activitățile zilnice.",
        "Beneficii pe termen lung: Îmbunătățirea forței și flexibilității hamstringurilor ajută la prevenirea problemelor de genunchi și dureri articulare sau de spate, mai ales pe măsură ce îmbătrânești.",
      ],
      muscles: ["Hamstrings", "Gambe"],
      steps: [
        "1. Expiră și flexează-ți genunchii, trăgându-ți gleznele cât mai aproape de fese. Ține-ți șoldurile ferm pe bancă.",
        "2. Țineți scurt.",
        "3. Inspirați în timp ce vă întoarceți picioarele în poziția inițială într-o mișcare lentă și controlată.",
      ],
      motivation: "Fiecare flexie îți definește picioarele! Controlează mișcarea, simte tensiunea și construiește femurali puternici!",
      recommendations: {
        beginner: { sets: "2-3", reps: "10-12" },
        intermediate: { sets: "3-4", reps: "8-10" },
        advanced: { sets: "4-5", reps: "6-8" }
      }
    },
    {
      slug: "deadlifts",
      title: "Deadlifts",
      description: "Deadlift-ul este o modalitate excelentă de a construi picioare și fese puternice. Într-un deadlift, ridici greutăți de pe sol până la nivelul coapsei, folosind în principal mușchii picioarelor și șoldurilor, dar cu ajutorul majorității grupelor mari de mușchi ale corpului. Deadlift-ul este de obicei realizat cu o bară și discuri sau o bară fixă, dar poate fi efectuat și cu gantere. Este o specialitate a powerlifter-ilor pe care nu ar trebui să o ignori în antrenamentele tale de fitness general. Fă deadlift-ul parte din antrenamentele tale de forță pentru a construi mușchi și pentru a-ți îmbunătăți fitness-ul funcțional.",
      gif: "https://i.pinimg.com/originals/fd/54/03/fd54030652211ed341805115089acbe6.gif",
      category: "exercitii-lower",
      musclesImage: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/04/Deadlift-muscles-worked.png?resize=700%2C700&ssl=1",
      mistakes: [
        "Rotunjirea Spatelui sau Umerilor - Menține spatele drept și activează-ți abdomenul pentru a sprijini postura corectă.",
        "Ridicarea cu Brațele sau Spatele - Ridică doar cu picioarele și șoldurile, nu cu brațele sau spatele. Ține brațele drepte.",
        "Folosirea Prea Multor Greutăți - Începe cu greutăți ușoare și corectează forma înainte de a adăuga mai multă greutate.",
        "Ridicări Parțiale - Evita ridicările parțiale. Practică ridicarea completă a barei de la podea.",
        "Bara Prea Departe de Corp - Păstrează bara aproape de corp pentru eficiență și siguranță."
      ],
      benefits: [
        "Construiește masă musculară Deadlift-urile sunt foarte apreciate pentru dezvoltarea masei musculare, un aspect dorit de culturisti și de persoanele care doresc să prevină sau să inverseze pierderea musculară cauzată de îmbătrânire. Poți folosi deadlift-ul pentru a construi forță generală, forță a trunchiului și stabilitate.",
        "Crește metabolismul Metabolismul tău determină câte calorii arzi în repaus. Mușchii slabi accelerează metabolismul. Prin creșterea masei musculare slabe în corpul tău, poți ajuta la accelerarea metabolismului. Deoarece deadlift-urile lucrează cu unele dintre cele mai mari grupuri musculare ale corpului, acestea sunt o alegere bună pentru a construi un procent mai mare de mușchi slabi în corpul tău.",
        "Construiește fitness funcțional - Deadlift-ul este unul dintre cele mai bune exerciții pentru a imita mișcările de ridicare pe care le faci pe parcursul zilei, făcându-l un exercițiu funcțional. Învățând să faci deadlift cu o formă corectă, vei putea ridica și transporta obiecte cu un risc mai mic în viața de zi cu zi.",
      ],
      muscles: ["Fesieri", "Spate inferior", "Cvadriceps", "Hamstrings"],
      steps: [
        "1. Apucă bara puțin mai lat decât lățimea genunchilor, folosind o prindere de tip pronat sau mixtă.",
        "2. Poziționează-ți picioarele la lățimea umerilor (sau puțin mai mult) cu vârfurile degetelor sub bară. Picioarele trebuie să fie orientate înainte sau pot forma un unghi ușor de ieșire. Călcâiele trebuie să rămână plate pe sol. Pe măsură ce ridici și cobori bara, aceasta trebuie să treacă aproape de tibii și poate chiar să-i atingă. Menține o poziție a coloanei vertebrale neutră.",
        "3. Angajează-ți mușchii abdominali.",
        "4. Coborâ bara încet cât mai jos, menținând o formă corectă, îndoirea ușoară a genunchilor și păstrând spatele drept.",
        "5. Ridică bara împingând cu picioarele din genunchi. Expiră în momentul efortului. Fii atent să nu ridici șoldurile prima dată, pentru a evita înclinarea trunchiului înainte și curbarea spatelui. Nu încerca să ridici bara cu brațele. Brațele trebuie să rămână întinse sub tensiune, menținându-se ferme în timp ce picioarele împing în sus. Gândește-te la mișcarea sincronizată a picioarelor și umerilor cu șoldurile, punctul de echilibru.",
        "6. Bara trebuie să atingă aproape tibii și să se odihnească pe coapse atunci când ajungi la înălțimea maximă. Trage umerii înapoi cât mai mult posibil fără a te arcuire înapoi.",
        "7. Coboară bara spre sol într-o mișcare inversă, asigurându-te că spatele rămâne drept.",
      ],
      motivation: "Ridică greutatea, ridică-ți puterea! Fiecare deadlift îți transformă corpul și îți construiește forța din picioare până în spate!",
      recommendations: {
        beginner: { sets: "2-3", reps: "10-12" },
        intermediate: { sets: "3-4", reps: "8-10" },
        advanced: { sets: "4-5", reps: "6-8" }
      }
    },
    {
      slug: "calf-raises",
      title: "Calf Raises",
      description: "Gambele sunt adesea ignorate în antrenamentele cu greutăți, dar joacă un rol esențial în multe activități - de la mers și alergare, până la sărituri și întinderi. Adaugă ridicările pe vârfuri în antrenamentul tău pentru partea inferioară a corpului, pentru a face aceste mișcări mai ușoare. Lucrul asupra mușchilor gambei îți îmbunătățește performanța fizică și contribuie la echilibru și stabilitate. Mușchii puternici ai gambei oferă suport esențial gleznelor și picioarelor, reducând riscul de accidentări în timpul diverselor activități.",
      gif: "https://i.pinimg.com/originals/71/58/dc/7158dc3b232bb7b0a9a07b17f87af49b.gif",
      category: "exercitii-lower",
      musclesImage: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/10/Muscles-worked-by-calf-raises.png?w=1125&ssl=1",
      mistakes: [
        "Nu te întinzi înainte de antrenament - Întinderea este esențială pentru prevenirea crampelor și menținerea flexibilității. Dedica 5-10 minute pentru a-ți întinde gambele înainte de antrenament.",
        "Execuție prea rapidă - Controlează ritmul exercițiului. Ridicările prea rapide nu sunt la fel de eficiente, mai ales la început. Ridică și coboară încet călcâiele pentru a obține mai multă forță și definire musculară.",
        "Te apleci prea mult în față - Menține pieptul ridicat și postura dreaptă. Aplecarea excesivă mută greutatea corpului și poate cauza dureri de spate, reducând eficiența exercițiului.",
        "Prea puține repetări - Deoarece ridicările pe vârfuri sunt un exercițiu izolat cu o mișcare mică, este mai eficient să faci un număr mai mare de repetări. În funcție de greutatea folosită, începe cu 10-30 de repetări."
      ],
      benefits: [
        "Activează mușchii gambei - Ridicările pe vârfuri lucrează gastrocnemiul și solearul, cei doi mușchi din partea posterioară a gambei, esențiali pentru flexia și extensia gleznei, dar și pentru alergare și sărituri.",
        "Îmbunătățesc stabilitatea și echilibrul - Solearul ajută la menținerea echilibrului și la pomparea sângelui din picioare către inimă, prevenind astfel oboseala și umflarea picioarelor.",
        "Reduc riscul de accidentări - Mușchii gambei susțin genunchiul și glezna, iar unii dintre ei lucrează împreună cu hamstring-urile pentru a controla flexia genunchiului. Mușchii slabi sunt mai predispuși la întinderi și rupturi musculare.",
        "Îmbunătățesc agilitatea - Fibrele cu contracție rapidă din gastrocnemiu permit mișcări explozive, ceea ce face acest exercițiu util atât pentru începători, cât și pentru sportivi.",
        "Contribuie la independența la vârste înaintate - Capacitatea de a executa ridicări pe vârfuri poate indica mobilitatea și capacitatea unei persoane în vârstă de a desfășura activități zilnice."
      ],
      muscles: ["Calves"],
      steps: [
        "1. Poziționează-te corect - Stai cu partea din față a picioarelor pe o treaptă sau un step, astfel încât călcâiele să fie libere.",
        "2. Ridică-te pe vârfuri - Împinge călcâiele în sus cât mai mult posibil, menținând echilibrul și controlul mișcării.",
        "3. Coborâre lentă - Coboară încet călcâiele sub nivelul treptei până simți o întindere plăcută în mușchii gambei.",
        "4. Revenire la poziția inițială - Ridică-te din nou pe vârfuri și repetă mișcarea, menținând un ritm controlat.",
      ],
      motivation: "Picioarele puternice încep de jos! Ridică-te pe vârfuri, simte arsura și construiește gambe de fier!",
      recommendations: {
        beginner: { sets: "3", reps: "15" },
        intermediate: { sets: "4", reps: "12-15" },
        advanced: { sets: "5", reps: "10-12" }
      }
    },
  ],
  "apdomen": [
    {
      slug: "plank",
      title: "Plank",
      description: "Un plank presupune menținerea echilibrului pe vârfurile degetelor și pe antebrațe, ridicând restul corpului de pe sol. Coloana vertebrală trebuie să rămână într-o poziție neutră, iar capul, trunchiul și picioarele trebuie să fie aliniate. Plank-ul este un exercițiu izometric, deoarece îți ții mușchii centrali contractați într-o singură poziție.",
      gif: "https://media.tenor.com/6SOetkNbfakAAAAM/plank-abs.gif",
      category: "apdomen",
      musclesImage: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/10/Muscles-worked-by-plank-exercise-1024x1024.jpg?resize=700%2C700&ssl=1",
      mistakes: [
        "Arcuirea spatelui: Dacă îți arcuiești spatele, nu angajezi suficient abdominalii și pui mai multă greutate pe brațe. Verifică să îți ții umerii jos și largi.",
        "Lăsarea șoldurilor: Șoldurile vor începe să coboare atunci când abdominalii tăi vor atinge limita de oboseală. Este un semn că ar trebui să închei plank-ul. Dacă se întâmplă de la început, încearcă să îți separi picioarele puțin mai mult și concentrează-te pe angajarea abdominalilor.",
        "Ridicarea capului: Gâtul trebuie să fie în linie cu corpul, nu ridicat, pentru a evita tensiunea la nivelul gâtului. Menține-ți privirea în jos, spre podea.",
      ],
      benefits: [
        "Întărirea core-ului: Un core puternic ajută la stabilizarea, echilibrarea și alimentarea corpului în diverse activități fizice.",
        "Reducerea stresului asupra articulațiilor: Un core puternic contribuie la o mai bună postură și reduce presiunea asupra articulațiilor.",
        "Test de forță și stabilitate: Plank-ul poate fi folosit pentru a testa forța și stabilitatea mușchilor core.",
        "Creșterea arderii caloriilor: Deși este un exercițiu de forță, plank-ul activează mai multe grupe de mușchi, ajutând și la arderea caloriilor."
      ],
      muscles: ["Rectus abdominis", "Oblici ", "Transversus abdominis", "Deltoizi", "Cvadriceps"],
      steps: [
        "1. Începe în poziția de plank, cu fața în jos, antebrațele și degetele de la picioare pe sol. Coatele trebuie să fie direct sub umeri, iar antebrațele să fie orientate înainte. Capul trebuie să fie relaxat și să privești în jos, spre sol.",
        "2. Activează-ți mușchii abdominali, tragând buricul spre coloană. Menține trunchiul drept și rigid, iar corpul trebuie să fie într-o linie dreaptă de la urechi până la vârfurile picioarelor, fără să se lase sau să se îndoaie. Aceasta este poziția neutră a coloanei vertebrale. Asigură-te că umerii sunt jos, nu se apropie de urechi. Călcâiele trebuie să fie deasupra vârfurilor picioarelor.",
        "3. Menține această poziție timp de 10 secunde. Apoi coboară-te pe sol.",
      ],
      motivation: "Stai pe poziție, ține corpul tare! Fiecare secundă în plank te face mai puternică și mai stabilă!",
      recommendations: {
        beginner: { sets: "2", reps: "30 sec" },
        intermediate: { sets: "3", reps: "45 sec" },
        advanced: { sets: "4", reps: "60+ sec" }
      }
    },
    {
      slug: "crunches",
      title: "Crunches",
      description: "Crunch-urile au fost un exercițiu de bază în antrenamentele pentru abdomen de decenii. Ele vizează rectus abdominis, mușchiul „pachetului de șase” care se află pe partea din față a trunchiului. Crunch-urile pot face parte din antrenamentele pentru forța core-ului sau din antrenamentele pentru întregul corp.",
      gif: "https://www.icegif.com/wp-content/uploads/2022/07/icegif-475.gif",
      category: "apdomen",
      musclesImage: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/10/Muscles-worked-by-crunches.jpg?resize=700%2C700&ssl=1",
      mistakes: [
        "Nerespectarea activării mușchilor abdominali: Este important să începi mișcarea prin aducerea ușoară a buricului spre coloană (fără a ține respirația), pentru a activa core-ul și a stabiliza mișcarea",
        "Ridicarea prea sus a trunchiului: Ridică doar până când omoplatul se ridică de pe sol, fără a merge mai sus. Un sit-up complet nu este necesar, iar ridicarea prea mare poate implica flexorii șoldului, nu mușchii abdominali.",
        "Arcuirea spatelui: În timpul crunch-urilor, spatele inferior nu trebuie să se arqueze. Acesta trebuie să rămână în contact cu salteaua. Dacă se arcuiește, reduce nivelul de dificultate al exercițiului.",
        "Poziția brațelor: Poziția brațelor poate modifica dificultatea exercițiului. Cu brațele pe lângă corp este mai ușor, iar cu brațele la piept este puțin mai dificil. Cel mai greu este cu brațele ridicate deasupra capului.",
        "Forțarea gâtului: Nu trebuie să conduci mișcarea cu mușchii gâtului sau să-l forțezi. Gâtul trebuie să rămână aliniat cu corpul și să nu fie tensionat.",
        "Folosirea mușchilor umerilor pentru mișcare: Nu trebuie să folosești mușchii brațelor sau ai umerilor pentru a face curl-ul. Mișcarea trebuie să fie efectuată de mușchii abdominali."
      ],
      benefits: [
        "Rectus abdominis (six-pack): Ab crunches lucrează mușchii din fața abdomenului, cunoscuți sub numele de rectus abdominis, care flexează pentru a aduce umerii către șolduri.",
        "Stabilizarea corpului: Rectus abdominis este un mușchi principal al core-ului, care ajută la stabilizarea corpului.",
        "Prevenirea durerilor de spate: Un abdomen și un spate puternic sunt fundamentale pentru prevenirea durerilor de spate și pentru menținerea stabilității coloanei și pelvisului.",
      ],
      muscles: ["Apdomen", "Oblice"],
      steps: [
        "1. Poziția de început: Întinde-te pe spate pe o saltea de exerciții, cu genunchii îndoiți și picioarele pe podea.",
        "2. Poziționarea mâinilor: Pune-ți ambele mâini pe spatele capului, fără a interloca degetele. Coloană vertebrală și pelvisul ar trebui să fie într-o poziție neutră.",
        "3. Activarea mușchilor: Ușor, înclină pelvisul și adu coastele în jos, activând core-ul. Fă ca bărbia să rămână aproape de piept pe tot parcursul exercițiului, ca și cum ai ține un ou sub bărbie.",
        "4. Mișcarea ascendentă: Începe mișcarea de ridicare prin strângerea mușchilor abdominali, ridicând umerii de la sol. Fă o pauză în vârful mișcării.",
        "5. Coborârea controlată: Coboară lent la poziția de start, menținând tensiunea pe mușchii abdominali. Repetă pentru numărul dorit de repetări."
      ],
      motivation: "Ridică-te din sol, ridică-ți abdomenul! Fiecare crunch te aduce mai aproape de un abdomen puternic și tonifiat!",
      recommendations: {
        beginner: { sets: "3", reps: "30 sec" },
        intermediate: { sets: "4", reps: "45 sec" },
        advanced: { sets: "5", reps: "60+ sec" }
      }
    },
    {
      slug: "bicycle-crunches",
      title: "Bicycle Crunches",
      description: "Bicycle crunch este un exercițiu eficient pentru abdomen, care lucrează atât mușchii abdominali superiori, cât și mușchii profunzi și oblicii, adică mușchii laterali ai trunchiului. Acest exercițiu de tip „bicicletă în aer” este o alegere excelentă pentru antrenarea core-ului. Nu necesită echipament și poate fi efectuat oriunde, fiind potrivit și pentru începători. Poate fi inclus într-un antrenament de întărire a abdomenului sau ca parte a unui antrenament pentru întregul corp.",
      gif: "https://www.icegif.com/wp-content/uploads/2022/08/icegif-117.gif",
      category: "apdomen",
      musclesImage: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/10/Muscles-worked-by-crunches.jpg?resize=700%2C700&ssl=1",
      mistakes: [
        "Rotirea șoldurilor - Doar trunchiul trebuie să facă rotația, nu șoldurile. Picioarele trebuie să se miște drept înainte și înapoi.",
        "Tensiune în gât - Nu trage capul înainte. Concentrează-te pe rotația trunchiului, nu pe atingerea cu cotul forțată.",
      ],
      benefits: [
        "Activează intens mușchii abdominali - Lucrează rectus abdominis (abdomenul superior) și oblicii, fiind unul dintre cele mai eficiente exerciții pentru aceste zone.",
        "Angajează abdomenul profund - Implică mușchiul transvers abdominal, esențial pentru un trunchi stabil.",
        "Tonifică și picioarele - Hamstring-urile și cvadricepșii sunt folosiți în mișcare.",
        "Îmbunătățește postura și reduce durerile de spate - Un nucleu puternic ajută la menținerea unei poziții corecte și previne disconfortul lombar.",
        "Crește performanța sportivă - Un abdomen antrenat sprijină mișcările explozive și echilibrul."
      ],
      muscles: ["Rectus abdominis", "Transvers abdominis", "Oblicii"],
      steps: [
        "1. Contractă mușchii core-ului, trăgând abdomenul spre interior pentru a stabiliza coloana vertebrală.",
        "2. Ține capul cu mâinile, fără să aplici presiune pe gât. Ridică umerii ușor și adu genunchii la un unghi de 90 de grade, menținând picioarele deasupra podelei.",
        "3. Expiră și începe mișcarea, pedalând lent ca și cum ai merge pe bicicletă. Adu un genunchi spre axilă și întinde celălalt picior, menținându-l mai sus decât șoldurile.",
        "4. Rotește trunchiul, astfel încât cotul să atingă genunchiul opus în timp ce acesta se ridică.",
        "5. Alternează mișcarea, întinzând un picior și aducând celălalt genunchi spre axilă, atingându-l cu cotul opus."
      ],
      motivation: "Fiecare răsucire te apropie de un abdomen sculptat! Continuă, simte arderea, transformă-te!",
      recommendations: {
        beginner: { sets: "2-3", reps: "10-12" },
        intermediate: { sets: "4", reps: "15+" },
        advanced: { sets: "4-5", reps: "20" }
      }
    },
    {
      slug: "russian-twists",
      title: "Russian Twists",
      description: "Exercițiul Russian twist este foarte eficient pentru întărirea mușchilor abdominali. Folosirea unui minge medicinală adaugă o provocare suplimentară antrenamentului, crescând intensitatea acestuia. Acest exercițiu poate face parte dintr-un antrenament de întărire a zonei core alături de alte exerciții precum plank, crunch și bridge. De asemenea, poate fi inclus într-un antrenament de întărire generală a corpului și este deosebit de util dacă practici un sport care implică aruncarea unei mingi sau lovirea unei bâte (cum ar fi golful sau tenisul).",
      gif: "https://hips.hearstapps.com/hmg-prod/images/766/fitgif-friday-weighted-russian-twist-slider-thumbnail-override-1515520081.gif?crop=1xw:0.786xh;center,top&resize=640:*",
      category: "apdomen",
      musclesImage: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2024/11/muscles-worked-russian-twist.png?resize=700%2C700&ssl=1",
      mistakes: [
        "Formă incorectă - Dacă ai o formă incorectă, vei pune prea multă presiune pe vertebrele lombare. Dacă observi că îți rotunjești spatele și simți o rotație excesivă a părții inferioare a spatelui, este recomandat să exersezi mișcarea fără greutate până când stăpânești forma corectă.",
        "Ținerea respirației - Poate fi tentant să îți ții respirația, dar este important să respiri normal pe toată durata exercițiului.",
      ],
      benefits: [
        "Îmbunătățirea posturii: Un core puternic ajută la menținerea unei posturi corecte și previne durerile de spate.",
        "Protecția coloanei vertebrale: Exercițiile pentru core contribuie la susținerea coloanei vertebrale și la prevenirea accidentărilor.",
        "Creșterea echilibrului: Un core bine antrenat îmbunătățește echilibrul și coordonarea corpului.",
        "Performanță sportivă mai bună: Athletii din sporturi care necesită rotație, cum ar fi golful sau aruncările, beneficiază de un avantaj în performanță.",
        "Reducerea durerilor lombare: Corectarea posturii și întărirea mușchilor din jurul coloanei vertebrale ajută la prevenirea durerilor de spate inferioare."
      ],
      muscles: ["Oblicii", "Rectus abdominis"],
      steps: [
        "1. Așază-te pe podea cu genunchii îndoiți și picioarele fie pe sol, fie ridicate ușor.",
        "2. Ține o placă de greutate, o minge medicinală sau un kettlebell cu ambele mâini în fața pieptului.",
        "3. Apleacă-te ușor pe spate, menținând spatele drept și abdomenul încordat.",
        "4. Rotește trunchiul într-o parte și adu greutatea spre șold, menținând șoldurile stabile.",
        "5. Revino la centru și rotește-te în cealaltă parte."
      ],
      motivation: "Răsucirea te ajută să înfrunți orice obstacol! Simte fiecare mișcare, iar abdomenul tău va deveni puternic și definit!",
      recommendations: {
        beginner: { sets: "3", reps: "12-15" },
        intermediate: { sets: "4", reps: "15-20" },
        advanced: { sets: "5", reps: "20-25" }
      }
    },
    {
      slug: "leg-raises",
      title: "Leg Raises",
      description: "Leg raises sunt un exercițiu eficient care ajută la întărirea mușchilor abdominali și a mușchilor flexori ai șoldului. Acesta este ideal pentru tonifierea zonei inferioare a abdomenului și îmbunătățirea stabilității core-ului. Leg raises pot fi realizate pe sol sau suspendat, oferind opțiuni variate pentru diferite nivele de dificultate. Acest exercițiu nu doar că ajută la îmbunătățirea tonusului abdominal, dar poate contribui și la o mai bună postură, prevenirea durerilor de spate și creșterea forței generale a corpului. De asemenea, este un exercițiu excelent pentru dezvoltarea flexibilității și mobilității șoldurilor. În ciuda eficienței sale, este esențial să fie realizat corect pentru a evita stresul asupra spatelui și a maximiza beneficiile. O formă bună și o execuție controlată sunt cheia pentru a obține cele mai bune rezultate și a preveni accidentările.",
      gif: "https://cdn.jefit.com/assets/img/exercises/gifs/44.gif",
      category: "apdomen",
      musclesImage: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/10/Muscles-worked-by-lying-leg-raises.png?resize=700%2C700&ssl=1",
      mistakes: [
        "Arcuirea spatelui - Este important să menții spatele drept și să nu permiți să se arqueze. Arcuirea spatelui poate duce la compresia coloanei vertebrale și la dureri de spate. Spatele trebuie să rămână pe suportul aparatului.",
        "Neangajarea core-ului - Asigură-te că îți angajezi mușchii abdominali înainte de a ridica picioarele. Dacă nu activezi corect mușchii, exercițiul nu va fi eficient și te vei expune riscurilor de accidentare.",
        "Folosirea impulsului - Pentru a maximiza beneficiile, mișcările trebuie să fie lente și controlate. Folosirea impulsului poate duce la reducerea eficienței exercițiului și poate cauza tensiune inutilă în alte părți ale corpului.",
        "Ținerea respirației - Nu uita să respiri corect în timpul exercițiului. Ținerea respirației poate afecta performanța și poate duce la oboseală prematură. Încearcă să inspiri când coboară picioarele și să expiri când le ridici."
      ],
      benefits: [
        "Lucrează eficient mușchii abdominali - Hanging leg raises sunt excelente pentru activarea și tonifierea mușchilor abdominali, în special a rectus abdominis (abdomenele superioare) și a oblicelor externe, ajutând la definirea zonei abdominale.",
        "Îmbunătățește stabilitatea core-ului - Acest exercițiu ajută la consolidarea întregii zone centrale (core), care include mușchii abdominali, spatele inferior și mușchii șoldurilor, esențiali pentru stabilitate și susținerea coloanei vertebrale.",
        "Îmbunătățește postura - O zonă centrală puternică ajută la menținerea unei posturi corecte și poate reduce durerea de spate, fiind esențială pentru activitățile zilnice și sporturi care implică mișcări de rotație.",
        "Crește flexibilitatea și mobilitatea șoldurilor - Ridicarea picioarelor ajută la îmbunătățirea flexibilității și mobilității șoldurilor și a coapselor, ceea ce este important pentru performanțele sportive și prevenirea accidentărilor.",
        "Antrenează și mușchii flexori ai șoldului  - Leg raises lucrează și flexorii șoldurilor (iliopsoas), care sunt esențiali pentru mișcările de ridicare a picioarelor, precum urcatul scărilor sau sprinturile."
      ],
      muscles: ["Oblicii", "Rectus abdominis"],
      steps: [
        "1. Întinde-te pe spate, cu brațele pe lângă corp.",
        "2. Ținând picioarele drepte, ridică-le până când sunt perpendicular pe podea.",
        "3. Coboară-le încet și controlat."
      ],
      motivation: "Ridică picioarele și simte fiecare contracție! Fiecare repetare te face mai puternică și îți aduce un abdomen mai tonifiat!",
      recommendations: {
        beginner: { sets: "2-3", reps: "10-12" },
        intermediate: { sets: "4", reps: "12-15" },
        advanced: { sets: "5", reps: "15-20" }
      }
    },
    {
      slug: "flutter-kicks",
      title: "Flutter Kicks",
      description: "Flutter kicks sunt un exercițiu de abdomene care vizează în special mușchii abdominali, dar și picioarele și șoldurile. Se realizează într-o poziție culcat pe spate, ridicând picioarele la un unghi de aproximativ 45 de grade și alternând mișcarea acestora într-un ritm rapid, ca și cum ai înota pe loc. Exercițiul ajută la tonifierea mușchilor abdominali și a mușchilor șoldurilor, îmbunătățind flexibilitatea și rezistența. Flutter kicks sunt excelente și pentru arderea caloriilor, fiind un bun antrenament cardio.",
      gif: "https://cdn.shopify.com/s/files/1/0618/9462/3460/files/198.gif?v=1741670189",
      category: "apdomen",
      musclesImage: "https://cdn.shopify.com/s/files/1/1497/9682/files/Targeted_Muscles__Core.png?v=1660228751",
      mistakes: [
        "Arcuirea spatelui inferior: Asigură-te că spatele inferior rămâne pe sol. Dacă îl ridici, nu vei lucra core-ul corect și vei pune presiune pe coloana vertebrală, ceea ce poate duce la dureri de spate.",
        "Mișcarea prea rapidă: Mișcările rapide și scurte pot duce la pierderea controlului asupra core-ului. E mai important să controlezi mișcarea decât să o faci rapid. Păstrează un ritm constant, fără a compromite forma corectă.",
        "Umerii ridicați: Evită să ridici umerii prea mult de pe sol. Ridicarea excesivă a umerilor poate pune presiune pe gât și poate duce la tensiune. Trebuie să fie doar o ridicare ușoară a capului și a umerilor.",
        "Picioarele prea sus sau prea jos: Păstrează picioarele la un unghi de aproximativ 45 de grade față de sol, nu prea sus sau prea jos. Dacă picioarele sunt prea sus, îți va fi greu să simți activitatea abdominalelor, iar dacă sunt prea jos, poate pune o presiune suplimentară pe zona lombară.",
        "Lipsa implicării core-ului: Asigură-te că îți angajezi core-ul. Dacă îți relaxezi core-ul, nu vei lucra eficient mușchii abdominali și risc de a face greșeli de postură.",
        "Lipsa unui ritm constant: Nu face mișcările prea brusc, iar când îți miști picioarele, încearcă să le ridici și cobori într-un mod fluid."
      ],
      benefits: [
        "Întărirea mușchilor abdominali și a core-ului.",
        "Îmbunătățirea flexibilității șoldurilor și a picioarelor.",
        "Creșterea rezistenței cardio.",
        "Arderea caloriilor și reducerea grăsimii corporale."
      ],
      muscles: ["Flexorii șoldului", "Cvadricepsul", "Oblicii"],
      steps: [
        "1. Stai pe spate, extinzându-ți picioarele la un unghi de 45 de grade. Brațele trebuie să fie pe lângă corp, iar picioarele ridicate de la sol.",
        "2. Ridică-ți capul, umerii și gâtul ușor de pe sol.",
        "3. Începe să îți miști picioarele alternativ, ridicându-le și coborându-le. Mișcă-ți picioarele într-un ritm pe care îl poți menține, în timp ce îți menții core-ul stabil.",
        "4. Fă acest exercițiu timp de 90 de secunde sau până când simți că nu mai poți continua.",
      ],
      motivation: "Nu lăsa nimic să te oprească! Ridică-ți picioarele, simte fiecare contracție și construiește un abdomen puternic!",
      recommendations: {
        beginner: { sets: "2-3", reps: "30 sec" },
        intermediate: { sets: "4", reps: "45 sec" },
        advanced: { sets: "5", reps: "60+ sec" }
      }
    },
    {
      slug: "mountain-climbers",
      title: "Mountain Climbers",
      description: "Escaladarea unui munte ar fi un antrenament descurajant pentru majoritatea, dar ce-ar fi dacă muntele tău ar fi podeaua? Acesta este conceptul din spatele exercițiului mountain climbers. Realizat din poziția de plank, vei alterna aducerea unui genunchi la piept, apoi vei da piciorul înapoi, accelerând fiecare mișcare până când vei 'alerga' împotriva podelei.",
      gif: "https://cdn.jefit.com/assets/img/exercises/gifs/484.gif",
      category: "apdomen",
      musclesImage: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2023/01/Muscles-worked-by-mountain-climbers.jpeg?resize=700%2C700&ssl=1",
      mistakes: [
        "Săritul pe vârfuri: Nu sări pe vârfurile picioarelor, deoarece reduce activarea mușchilor abdominali. Folosește încălțăminte adecvată pentru o formă corectă.",
        "Degetele care nu ating solul: Asigură-te că degetele ating solul pentru a beneficia complet de mișcare și a preveni accidentările.",
        "Greutatea înapoi: Menține greutatea echilibrată, cu umerii deasupra încheieturilor, evitând să îți ridici fundul.",
      ],
      benefits: [
        "Excelente pentru îmbunătățirea rezistenței cardiovasculare, forței core și agilitații. Acestea lucrează mai multe grupuri musculare, aproape ca un antrenament complet pentru întregul corp cu un singur exercițiu.",
        "În timpul mișcării, umerii, brațele și pieptul stabilizează partea superioară a corpului, iar core-ul stabilizează restul corpului. Ca mișcători principali, cvadricepsii primesc un antrenament intens.",
        "Fiind un exercițiu cardio, mountain climbers îți îmbunătățesc sănătatea inimii și te ajută să arzi calorii. Poți să îți testezi limitele adăugând greutăți la glezne.",
      ],
      muscles: ["Apdomen", "Oblice"],
      steps: [
        "1. Intră în poziția de plank cu mâinile aproximativ la lățimea umerilor, spatele drept și abdomenul activat.",
        "2. Trage genunchiul drept spre piept cât de mult poți.",
        "3. Schimbă picioarele, trăgând un genunchi în afacere și aducând celălalt genunchi înapoi.",
        "4. Ține șoldurile jos și mișcă genunchii înainte și înapoi cât de departe și rapid poți.",
      ],
      motivation: "Fiecare escaladare te aduce mai aproape de obiectivele tale! Dă-i tot ce ai, simte arderea și câștigă rezistență!",
      recommendations: {
        beginner: { sets: "2-3", reps: "45 sec" },
        intermediate: { sets: "4", reps: "60 sec" },
        advanced: { sets: "5", reps: "75 sec" }
      }
    },
  ]
};

const FitnessDetail = () => {
  const { category, fitnessSlug } = useParams();
  const fitness = fitnessDetail[category]?.find((exercise) => exercise.slug === fitnessSlug);

  if (!fitness) {
    return <h2>Exercitiul nu a fost gasit!</h2>;
  }

  return (
    <div className="container-all">
      <div className="all-wrapper">
        <div className="all-category">
        </div>
        <div className="recipe-container">
          <div className="exercise-detail">
            <div className="exercise-content">
              <h2>{fitness.title}</h2>
              <div className="separator-container">
                <div className="separator-line-left"></div>
                <img src="/images/dumbbell.png" alt="Ganteră" className="dumbbell-image" />
                <div className="separator-line-right"></div>
              </div>
              <div className="exercise-description">
                <p>{fitness.description}</p>
              </div>
              {fitness.gif && <img src={fitness.gif} alt={fitness.title} className="exercise-gif" />}
              <div className="exercise-steps">
                <h3>Pași pentru a face corect {fitness.title}</h3>
                <ul>
                  {fitness.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
              <div className="exercise-recommendations">
                <h3>Recomandări Seturi și Repetări</h3>
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Incepator</th>
                      <th>Intermediar</th>
                      <th>Avansat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Seturi</td>
                      <td>{fitness.recommendations.beginner.sets}</td>
                      <td>{fitness.recommendations.intermediate.sets}</td>
                      <td>{fitness.recommendations.advanced.sets}</td>
                    </tr>
                    <tr>
                      <td>Repetari</td>
                      <td>{fitness.recommendations.beginner.reps}</td>
                      <td>{fitness.recommendations.intermediate.reps}</td>
                      <td>{fitness.recommendations.advanced.reps}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card">
                <h3>Beneficii</h3>
                <ul>
                  {fitness.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="card">
                <h3>Greșeli de evitat</h3>
                <ul>
                  {fitness.mistakes.map((mistake, index) => (
                    <li key={index}>{mistake}</li>
                  ))}
                </ul>
              </div>
              <div className="card muscle-card">
                <div>
                  <h3>Mușchi lucrați</h3>
                  <ul>
                    {fitness.muscles.map((muscle, index) => (
                      <li key={index}>{muscle}</li>
                    ))}
                  </ul>
                </div>
                {fitness.musclesImage && (
                  <img src={fitness.musclesImage} alt="Mușchi lucrați" className="muscles-image" />
                )}
              </div>
              <div className="motivation-section">
                <p><strong>{fitness.motivation}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FitnessDetail;
