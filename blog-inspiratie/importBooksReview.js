import { db } from "./src/firebase.js";
import { doc, setDoc } from "firebase/firestore";
 
const bookReviews = {
"spiritualitate": [
    {
      slug: "mindfulness-zi-de-zi",
      title: "Mindfulness zi de zi",
      author: "Jon Kabat-Zinn",
      image: "https://cdn.dc5.ro/img-prod/3900534830-0.jpeg",
      details: {
        categories: "Spiritualitate",
        category: "spiritualitate",
        language: "Română",
        published: "2024",
        publisher: "Herald",
        pages: 272
      },
      rating: 5,
      review: {
        introduction: [
          "Mindfulness zi de zi de Jon Kabat-Zinn este o lucrare esențială pentru cei care doresc să integreze practica mindfulness în viața cotidiană. Kabat-Zinn, cunoscut pentru munca sa în domeniul meditației și al mindfulness-ului, explică modul în care această practică poate fi aplicată pentru a reduce stresul, a îmbunătăți starea de bine și a adânci conștientizarea de sine. Cartea oferă sfaturi și exerciții pentru a trăi mai prezent și a fi mai conectat cu momentul prezent."
        ],
        parerea: [
          "Este o carte extraordinară pentru oricine vrea să învețe cum să aplice mindfulness-ul în viața de zi cu zi. M-a impresionat simplitatea și claritatea în care Kabat-Zinn explică conceptele complexe legate de mindfulness și cum acestea pot fi aplicate în orice activitate cotidiană, de la mersul pe jos la spălatul vaselor. Este o lecție despre cum să trăim mai calm și conștient, în ciuda ritmului rapid al vieții moderne."
        ],
        pros: [
          "Mi-a plăcut foarte mult abordarea practică a cărții, care nu se rezumă doar la teorie, ci oferă și exerciții concrete pe care le poți face zi de zi. Practica mindfulness nu trebuie să fie complicată sau să necesite ore de meditație, iar Kabat-Zinn subliniază acest lucru. În plus, abordarea sa este accesibilă și poate fi integrată ușor în rutina zilnică. Cartea m-a ajutat să fiu mai prezentă în momentele de zi cu zi, ceea ce m-a ajutat să reduc nivelul de stres și să apreciez mai mult momentele mici ale vieții."
        ],
        cons: [
          "Uneori, mi s-a părut că informațiile sunt repetitive și că unele concepte sunt redate prea mult în detaliu, ceea ce poate face ca lectura să devină mai lentă. De asemenea, în anumite părți ale cărții, Kabat-Zinn se concentrează foarte mult pe teoriile din spatele mindfulness-ului și asupra filosofiei acestuia, ceea ce ar putea să fie mai puțin interesant pentru cei care caută soluții mai rapide și mai concrete."
        ],
        conclusion: [
          "Mindfulness zi de zi este o carte valoroasă pentru oricine dorește să învețe să trăiască mai conștient și să aplice mindfulness-ul în activitățile zilnice. Cu exerciții practice și o abordare accesibilă, această carte poate aduce o schimbare reală în modul în care percepem viața și gestionăm stresul. Este un ghid util pentru cei care doresc să își îmbunătățească starea de bine și să învețe cum să fie mai prezenți și mai calmi în fața provocărilor zilnice."
        ],
      }
    },
    {
    slug: "human-design", 
      title: "Human Design",
      author: "Emma Dunwoody",
      image: "https://cdn.dc5.ro/img-prod/4178976609-0.png",
      details: {
        categories: "Spiritualitate",
        category: "spiritualitate",
        language: "Română",
        published: "2025",
        publisher: "Bookzone",
        pages: 312
      },
      rating: 4,
      review: {
        introduction: [
          "Human Design de Emma Dunwoody este o carte care explorează sistemul de tipuri umane bazat pe astrologie, biologie și genetică, care poate ajuta oamenii să înțeleagă mai bine cine sunt și cum își pot trăi viața într-un mod mai autentic. Sistemul Human Design este un amestec de mai multe discipline și are la bază ideea că fiecare persoană are un design unic care influențează modul în care funcționează în viață, în relații, la locul de muncă și în multe alte aspecte ale existenței. Cartea oferă o introducere în acest sistem și cum poate fi aplicat pentru auto-descoperire și dezvoltare personală.",
        ],
        parerea: [
          "Această carte este fascinantă pentru cei care sunt interesați de auto-descoperire și doresc să afle mai multe despre cum pot naviga viața în armonie cu propriul design unic. Mi-a plăcut mult cum Emma Dunwoody explică fiecare componentă a sistemului Human Design într-un mod clar și accesibil, fără a se pierde în detalii prea complicate. Este o lectură care poate aduce o mai bună înțelegere a propriei persoane și a modului în care interacționezi cu ceilalți.",
        ],
        pros: [
          "Un lucru care mi-a plăcut foarte mult la această carte este faptul că este foarte practică și ușor de înțeles. Emma Dunwoody reușește să explice concepte complexe într-un limbaj simplu și accesibil. Sistemul Human Design este un instrument extrem de util pentru auto-descoperire, iar cartea te încurajează să aplici cunoștințele dobândite în viața de zi cu zi. Mi-au plăcut și exemplele concrete și povestirile de viață care ajută la ilustrarea aplicațiilor sistemului. Este o lectură captivantă și oferă multe informații interesante."
        ],
        cons: [
          "Deși mi-a plăcut în general abordarea cărții, unele părți mi s-au părut un pic prea teoretice și ar fi putut fi mai aplicabile în viața cotidiană. De asemenea, sistemul de Human Design poate fi destul de complex și este posibil să fie necesar mai mult timp pentru a înțelege pe deplin toate aspectele sale. Ar fi fost utilă o explicație mai detaliată a modului în care să aplici cunoștințele despre designul personal pentru a naviga relațiile și carierele, mai ales pentru cei care sunt la început de drum în acest domeniu."
        ],
        conclusion: [
          "Human Design de Emma Dunwoody este o carte excelentă pentru cei interesați de dezvoltarea personală și de înțelegerea propriei persoane dintr-o perspectivă unică. Sistemul Human Design oferă o abordare diferită și interesantă de auto-descoperire, iar cartea este o introducere perfectă în această lume fascinantă. Dacă ești curios să înveți mai multe despre cum îți influențează designul personal viața și relațiile, această carte este o alegere foarte bună."
        ],
      }
    },
],
"romantism": [
    {
      slug: "twisted-hate",
      title: "Twisted Hate",
      author: "Ana Huang",
      image: "https://cdn.dc5.ro/img-prod/1675441289-1.jpeg",
      details: {
        categories: "Romantism",
        category: "romantism",
        language: "Română",
        published: "2024",
        publisher: "Epica",
        pages: 512
      },
      rating: 5,
      review: {
        introduction: [
          "Twisted Lies este ultimul volum din seria Twisted și se concentrează pe povestea de iubire dintre Christian Harper și Ava Chen. Acesta explorează teme precum încrederea, sacrificiul și iubirea adevărată, în timp ce se concentrează pe lupta pentru a proteja ceea ce contează cel mai mult în viață.",
        ],
        parerea: [
          "Am adorat acest final al seriei! Christian și Ava sunt un cuplu minunat, iar povestea lor este plină de pasiune, emoție și momente de tensiune. Finalul este satisfăcător și aduce încheierea perfectă pentru întreaga serie.",
        ],
        pros: [
          "Mi-a plăcut foarte mult cum s-au încheiat toate conflictele din serie și cum Christian și Ava își găsesc fericirea. De asemenea, am apreciat cum Ana Huang a adus toate personajele din serie într-un final satisfăcător. Este o poveste despre iubire, încredere și cum putem găsi adevărata fericire alături de cineva care ne susține."
        ],
        cons: [
          "Poate că mi-aș fi dorit să exploreze mai mult anumite momente din trecutul personajelor, dar în ansamblu, finalul a fost exact ce mi-am dorit."
        ],
        conclusion: [
          "Twisted Lies este un final minunat al unei serii captivante. Personajele sunt bine construite, iar povestea este plină de emoție și pasiune. Dacă ai citit celelalte volume, acest ultim volum nu te va dezamăgi."
        ],
      }
    },
    {
      slug: "twisted-lies",
      title: "Twisted Lies",
      author: "Ana Huang",
      image: "https://cdn.dc5.ro/img-prod/1787776282-0.png",
      details: {
        categories: "Romantism",
        category: "romantism",
        language: "Română",
        published: "2024",
        publisher: "Epica",
        pages: 640,
      },
      rating: 4,
      review: {
        introduction: [
          "Twisted Hate este al treilea volum din seria Twisted și spune povestea lui Josh Chen și a Jules Ambrose, doi oameni care au o relație complicată bazată pe ură și conflicte. Povestea lor se dezvoltă într-un mod neașteptat, transformând ura într-o iubire intensă și pasională.",
        ],
        parerea: [
          "Mi-a plăcut mult această poveste! Josh și Jules au o dinamică diferită față de celelalte cupluri din serie, iar evoluția relației lor este foarte interesantă. Este o poveste plină de tensiune și conflicte, dar și de momente de revelație și descoperire.",
        ],
        pros: [
          "Mi-a plăcut foarte mult modul în care a fost construită relația dintre Josh și Jules. Ură și iubire se împletesc într-un mod fascinant, iar procesul de maturizare a personajelor este bine realizat. De asemenea, am apreciat umorul și chimia dintre ele, care fac cartea și mai captivantă."
        ],
        cons: [
          "Poate că unele momente ar fi putut fi mai detaliate și mai profunde, iar conflictul principal ar fi putut fi mai intens, dar în ansamblu, mi-a plăcut mult cum a evoluat povestea."
        ],
        conclusion: [
          "Twisted Hate este o poveste captivantă despre iubire, ură și răscumpărare. Personajele sunt complexe, iar relația lor este interesant de urmărit. Dacă ești fan al seriei Twisted, cu siguranță îți va plăcea și acest volum."
        ],
      }
    },
    {
      slug: "fluturi.-volumul-4",
      title: "Fluturi",
      author: "Irina Brinder",
      image: "https://cdn.dc5.ro/img-prod/2446624176-0.png",
      details: {
        categories: "Romantism",
        category: "romantism",
        language: "Română",
        published: "2023",
        publisher: "For You",
        pages: 480,
      },
      rating: 5,
      review: {
        introduction: [
          "Ultimul volum din seria Fluturi încheie povestea, aducând răspunsuri și încheierea destinelor personajelor. Este momentul în care toate dilemele emoționale ajung la un punct de finalitate.",
        ],
        parerea: [
          "Finalul seriei este unul emoționant și captivant, cu multe răsturnări de situație și concluzii satisfăcătoare. Am apreciat cum Irina Brinder încheie fiecare fir narativ într-un mod care lasă cititorul cu o senzație de completitudine. Este o concluzie frumoasă pentru o serie care a crescut odată cu personajele sale.",
        ],
        pros: [
          "Mi-a plăcut cum au fost rezolvate toate conflictele și cum personajele au ajuns să înțeleagă mai multe despre ele însele și despre viață. Povestea are un final plin de învățăminte și, deși ușor previzibil, este satisfăcător. Este o încheiere emoționantă."
        ],
        cons: [
          "Unele momente au părut prea grăbite, iar unele subiecte ar fi putut fi tratate mai în detaliu, dar sunt doar mici observații."
        ],
        conclusion: [
          "Fluturi 4 este un final binevenit pentru o serie care m-a captivat de la început. Este o lectură plină de emoție și introspecție, care încheie perfect călătoria personajelor."
        ],
      }
    },
    {
      slug: "twisted-games",
      title: "Twisted Games",
      author: "Ana Huang",
      image: "https://cdn.dc5.ro/img-prod/1675440997-1.jpeg",
      details: {
        categories: "Romantism",
        category: "romantism",
        language: "Română",
        published: "2023",
        publisher: "Epica",
        pages: 464,
      },
      rating: 4,
      review: {
        introduction: [
          "Twisted Games este continuarea poveștii din seria Twisted și se concentrează pe povestea de iubire dintre Bridget, o gardă de corp, și Reece, prințul moștenitor al unui regat european. Această poveste abordează teme precum protecția, puterea, dar și descoperirea iubirii adevărate într-o lume de responsabilități și riscuri.",
        ],
        parerea: [
          "Mi-a plăcut foarte mult acest al doilea volum. Dinamicile dintre Bridget și Reece sunt diferite față de primul volum, dar sunt la fel de intense. Mi-a plăcut cum Bridget este o femeie puternică și independentă, iar Reece este mult mai vulnerabil decât pare la început. Interacțiunile lor sunt electrizante și pline de momente pline de emoție.",
        ],
        pros: [
          "Chemia dintre Bridget și Reece este absolut fantastică. Este interesant cum povestea lor se dezvoltă, iar tensiunea dintre ei se transformă într-o iubire profundă. Mi-a plăcut că personajele nu sunt perfecte, iar relația lor este construită pe încredere și vulnerabilitate. Cartea adâncește mult tema iubirii ca protecție și descoperire reciprocă."
        ],
        cons: [
          "Mi s-a părut că unele momente de acțiune au fost puțin previzibile și că poveștile secundare ar fi putut fi dezvoltate mai mult. Totuși, acest lucru nu scade cu mult din farmecul poveștii principale."
        ],
        conclusion: [
          "Twisted Games este o continuare excelentă a seriei Twisted, cu o poveste captivantă despre iubire, protecție și putere. Personajele sunt bine dezvoltate, iar relația lor este profundă și emoționantă. Dacă ți-a plăcut Twisted Love, cu siguranță vei aprecia și acest volum."
        ],
      }
    },
    {
      slug: "twisted-love", 
      title: "Twisted Love",
      author: "Ana Huang",
      image: "https://cdn.dc5.ro/img-prod/1675440953-0.jpeg",
      details: {
        categories: "Romantism",
        category: "romantism",
        language: "Română",
        published: "2022",
        publisher: "Epica",
        pages: 400,
      },
      rating: 5,
      review: {
        introduction: [
          "Twisted Love este primul volum al seriei Twisted de Ana Huang, care explorează povestea de iubire dintre Alex Volkov și Ava Chen. Este o poveste pasională și complexă despre iubire, dorință, răzbunare și iertare. Alex este un bărbat puternic, rece și impunător, iar Ava este o femeie fragilă, dar hotărâtă să își protejeze familia. Împreună, se angajează într-o relație tumultoasă care le testează limitele.",
        ],
        parerea: [
          "Mi-a plăcut mult acest volum! Este o poveste intensă și plină de conflicte, care m-a captivat de la început. Alex și Ava au o chimie fantastică, iar tensiunea dintre ei este resimțită de fiecare pagină. Este o poveste despre iubire interzisă și despre modul în care sentimentele complexe pot schimba viețile oamenilor.",
        ],
        pros: [
          "Chemia dintre cele două personaje este evidentă și foarte bine construită. De asemenea, mi-a plăcut cum autorul a abordat conflictele interne ale personajelor, creând o dinamică interesantă între trecutul lor și cum ajung să se deschidă unul față de celălalt. Cartea este plină de momente intense și emoționante."
        ],
        cons: [
          "Uneori, mi s-a părut că anumite momente sunt puțin exagerate, iar comportamentele personajelor pot părea uneori prea extreme sau ireale. Totuși, acestea nu afectează prea mult plăcerea lecturii, dar mi-ar fi plăcut ca povestea să fie un pic mai echilibrată."
        ],
        conclusion: [
          "Twisted Love este o poveste captivantă despre iubire, dorință și conflicte interioare. Este o lectură care îți ține atenția captivată, cu personaje puternice și o poveste complexă. Dacă îți plac romanele cu iubiri interzise și dinamici intense între personaje, această carte este perfectă pentru tine."
        ],
      }
    },
    {
      slug: "fluturi.-volumul-3",
      title: "Fluturi",
      author: "Irina Brinder",
      image: "https://cdn.dc5.ro/img-prod/2917639239-0.png",
      details: {
        categories: "Romantism",
        category: "romantism",
        language: "Română",
        published: "2023",
        publisher: "For You",
        pages: 352,
      },
      rating: 5,
      review: {
        introduction: [
          "Fluturi 3 adâncește și mai mult temele din volumele anterioare, oferind o privire asupra maturizării personajelor și a modului în care iubirea se poate transforma. În acest volum, conflictele interioare și lupta cu sinele sunt subiecte centrale.",
        ],
        parerea: [
          "Mi-a plăcut foarte mult cum povestea se maturizează și cum personajele se confruntă cu realitățile vieții. Emotivitatea și complexitatea relațiilor sunt din ce în ce mai pregnante, iar autorul reușește să adâncească experiența cititorului. A fost o lectură care m-a făcut să mă gândesc la propriile mele relații și la modul în care viața mea s-a schimbat de-a lungul anilor.",
        ],
        pros: [
          "Detaliile psihologice ale personajelor sunt foarte bine realizate și te ajută să înțelegi alegerile lor. Acest volum este mai profund și mai matur decât celelalte, iar conflictele din interiorul personajelor sunt prezentate cu multă subtilitate. De asemenea, finalul a fost satisfăcător, lăsând loc pentru reflecție."
        ],
        cons: [
          "Uneori, m-a deranjat că autorul se concentrează prea mult pe un personaj secundar care mi s-a părut mai puțin interesant și prea mult pe introspecția internă. Însă, acestea sunt doar detalii minore."
        ],
        conclusion: [
          "Fluturi 3 este un volum profund și matur, care aduce în prim-plan reflecțiile interioare ale personajelor. Este o continuare satisfăcătoare a poveștii și merită citită pentru complexitatea sa."
        ],
      }
    },
    {
      slug: "fluturi.-volumul-2",
      title: "Fluturi. Vol 2",
      author: "Irina Brinder",
      image: "https://cdn.dc5.ro/img-prod/2917639236-0.png",
      details: {
        categories: "Romantism",
        category: "romantism",
        language: "Română",
        published: "2023",
        publisher: "For You",
        pages: 464,
      },
      rating: 4,
      review: {
        introduction: [
          "Al doilea volum al seriei Fluturi continuă povestea și explorează evoluția relațiilor și dilemele personale ale personajelor principale. Cartea are o adâncire a tematicii, aducând în prim-plan noi provocări emoționale și interacțiuni.",
        ],
        parerea: [
          "Mi-a plăcut cum volumul 2 adâncește povestea, aducând noi unghiuri asupra personajelor și a evoluției lor. Iubirile, conflictele și incertitudinile lor sunt descrise cu o mare sensibilitate și autenticitate. Cartea m-a ținut prinsă, cu dorința de a afla ce se va întâmpla mai departe.",
        ],
        pros: [
          " Am apreciat faptul că autorul nu se oprește doar la suprafața relațiilor, ci explorează mai profund teme precum autocunoașterea, greșelile din trecut și impactul lor asupra viitorului. Personajele sunt mai bine dezvoltate și complexe, iar povestea este mult mai nuanțată."
        ],
        cons: [
          "Pe alocuri, am simțit că ritmul este prea lent, iar unele pasaje de reflecție sunt mai puțin interesante pentru mine. De asemenea, anumite conflicte se rezolvă cam brusc, ceea ce poate da impresia că autorul nu le explorează suficient."
        ],
        conclusion: [
          "Fluturi 2 este un continuare solidă a poveștii, aducând noi unghiuri asupra emoțiilor și relațiilor. Este o lectură care merită timp și atenție, dar poate fi un pic prea lentă pentru unii cititori."
        ],
      }
    },
    {
      slug: "totul-incepe-cu-noi",
      title: "Totul incepe cu noi",
      author: "Colleen Hoover",
      image: "https://assets.bkz.ro/upload/produse/ZKJZMJDWH/totul-incepe-cu-noi-bg3.webp",
      details: {
        categories: "Romantism",
        category: "romantism",
        language: "Română",
        published: "2023",
        publisher: "Epica",
        pages: 368,
      },
      rating: 4,
      review: {
        introduction: [
          "Totul începe cu noi este continuarea romanului Totul se termină cu noi, iar în acest al doilea volum, povestea se adâncește și explorează viața lui Lily Bloom după experiențele grele prin care a trecut. Cartea adresează noi provocări pentru protagonista noastră, dar în același timp, continuă să pună accentul pe importanța iubirii de sine și a găsirii echilibrului în viață.",
        ],
        parerea: [
          "Am fost foarte curioasă să citesc continuarea și nu m-a dezamăgit! Mi-a plăcut cum Colleen Hoover a reușit să continue povestea într-un mod emoționant, dar totodată să păstreze realismul caracteristic primului volum. Cartea se concentrează pe reconstrucția vieții și găsirea unui nou început, iar mesajul este puternic și inspirațional.",
        ],
        pros: [
          "Mi-a plăcut că Lily, personajul principal, evoluează și învață să facă alegeri pentru sine, fără a se lăsa influențată de trecutul ei. Povestea este plină de momente sincere, de curaj și de învățăminte despre iubire și relații. Colleen Hoover îmbină perfect emoția cu reflecția asupra propriilor decizii."
        ],
        cons: [
          "Deși este o continuare bună, mi s-a părut că unele momente se desfășoară prea repede sau sunt mai puțin impactante decât în primul volum. Unele situații și conflicte par mai puțin dezvoltate și mai ușor rezolvabile, ceea ce a diminuat oarecum intensitatea poveștii pentru mine."
        ],
        conclusion: [
          "Totul începe cu noi este o continuare emoționantă și plină de speranță a poveștii Lily Bloom. Este o lectură despre vindecare, găsirea iubirii și reconstrucția vieții. Cu toate că nu m-a impresionat la fel de mult ca primul volum, rămâne o lectură plăcută și plină de lecții valoroase."
        ],
      }
    },
    {
      slug: "totul-se-termina-cu-noi",
      title: "Totul se termina cu noi",
      author: "Colleen Hoover",
      image: "https://cdn4.libris.ro/img/pozeprod/10871/10870231-1.jpg",
      details: {
        categories: "Romantism",
        category: "romantism",
        language: "Română",
        published: "2018",
        publisher: "Epica",
        pages: 416,
      },
      rating: 5,
      review: {
        introduction: [
          "Totul se termină cu noi este un roman emoționant și profund, care abordează teme sensibile, precum iubirea toxică, abuzul în relații și curajul de a te ridica dintr-o situație dificilă. Colleen Hoover explorează cu delicatețe complexitatea relațiilor, iar povestea protagonistei, Lily Bloom, te face să reflectezi asupra alegerilor pe care le facem și asupra importanței de a ne asculta vocea interioară.",
        ],
        parerea: [
          "Mi-a plăcut foarte mult acest roman! Este o lectură care te prinde și te emoționează profund. Cartea abordează un subiect greu, dar o face cu foarte multă sensibilitate, fără a cădea în capcana dramelor ieftine. M-a impresionat sinceritatea cu care sunt tratate conflictele interioare ale personajelor, dar și cum Hoover descrie echilibrul fragil dintre iubire și respect.",
        ],
        pros: [
          "Personajele sunt foarte bine conturate, iar relațiile lor sunt realiste, uneori dureroase, dar în același timp pline de învățăminte. Mi-a plăcut faptul că autorul nu a idealizat iubirea, ci a arătat-o într-o lumină mai realistă, cu toate imperfecțiunile ei. În plus, stilul de scriere al Colleen Hoover este captivant și ușor de urmărit.",
        ],
        cons: [
          "Deși m-am conectat profund cu personajele, mi s-a părut că unele reacții ale acestora ar fi putut fi mai bine dezvoltate, în special în legătură cu conflictele interioare majore. De asemenea, am simțit că unele părți ale poveștii sunt ușor previzibile, dar în ciuda acestui lucru, impactul emoțional al cărții rămâne puternic.",
        ],
        conclusion: [
          "Totul se termină cu noi este o lectură emoționantă și plină de învățăminte. Abordează un subiect sensibil și greu, dar o face cu multă înțelepciune și respect pentru cititor. Este o poveste despre iubire, pierdere, dar și despre găsirea curajului de a merge mai departe."
        ],
      }
    },
    {
      slug: "fluturi.-volumul-1",
      title: "Fluturi. Vol. 1",
      author: "Irina Brinder",
      image: "https://cdn.dc5.ro/img-prod/2917639233-0.png",
      details: {
        categories: "Romantism",
        category: "romantism",
        language: "Română",
        published: "2023",
        publisher: "For You",
        pages: 368,
      },
      rating: 4,
      review: {
        introduction: [
          "Fluturi 1 este primul volum al seriei care explorează povești emoționante de iubire, speranță și auto-descoperire. Irina Brinder reușește să creeze un univers plin de intensitate și sentiment, capturând esența dorințelor și fricilor tinerelor femei care încearcă să-și construiască propriul drum în viață.",
        ],
        parerea: [
          "M-a surprins plăcut cum Irina Brinder reînvie tema iubirii și a relațiilor, prin personaje care sunt profund umane, cu vulnerabilități și pasiuni. Este o poveste care te provoacă să reflectezi asupra propriei tale vieți și alegeri. Mi-a plăcut foarte mult cum sunt descrise momentele de frustrare, dar și cele de eliberare emoțională. Este o lectură care îți stârnește multe gânduri și emoții.",
        ],
        pros: [
          "Povestea este foarte captivantă și scriitura este simplă, dar eficientă. Ce mi-a plăcut mult a fost faptul că autorul reușește să adâncească complexitatea emoțională a personajelor, fără să devină prea pompos sau greu de înțeles. De asemenea, atmosfera creată prin descrierea locurilor și situațiilor este foarte vividă."
        ],
        cons: [
          "Uneori, mi s-a părut că relațiile dintre personaje se dezvoltă un pic prea rapid, iar unele situații ar fi putut fi explorate mai detaliat. De asemenea, finalul mi-a lăsat un sentiment de neliniște, dar nu în mod negativ – mai degrabă te face să vrei să citești continuarea."
        ],
        conclusion: [
          "Fluturi 1 este o poveste captivantă, ce te face să reflectezi asupra iubirii și a vieții în general. Este o carte care îți va adânci înțelegerea relațiilor și îți va stârni curiozitatea pentru restul seriei."
        ],
      }
    },
],
"dezvoltare-personala": [
    {
      slug: "atomic-habits",
      title: "Atomic Habits",
      author: "James Clear",
      image: "https://cdn.dc5.ro/img-prod/320312020-0.gif",
      details: {
        categories: "Dezvoltare Personala",
        category: "dezvoltare-personala",
        language: "Română",
        published: "2019",
        publisher: "Trei",
        pages: 272,
      },
      rating: 5,
      review: {
        introduction: [
          "Atomic Habits este o carte despre cum obiceiurile mici și constante pot avea un impact semnificativ asupra vieții noastre. James Clear detaliază modul în care micile schimbări, aplicate cu răbdare și perseverență, pot duce la rezultate extraordinare în orice domeniu, de la sănătate la productivitate și relații. Cartea se bazează pe cercetări științifice și oferă un ghid practic pentru dezvoltarea obiceiurilor bune și eliminarea celor dăunătoare.",
        ],
        parerea: [
          "Mi-a plăcut foarte mult cum autorul explică procesul de formare a obiceiurilor și importanța mediului în care trăim. Clear face o distincție clară între obiceiurile care ne ajută să creștem și cele care ne sabotează, oferind exemple clare din viața cotidiană. Este o lectură motivantă, care îți oferă uneltele necesare pentru a înfrunta obstacolele care apar în calea formării unui obicei bun sau desființării unui obicei dăunător.",
        ],
        pros: [
          "Un aspect pe care l-am apreciat foarte mult a fost abordarea lui Clear despre 'legea celor 4 pași' în formarea obiceiurilor: semnalul, dorința, reacția și recompensele. Acesta a fost un cadru extrem de util pentru a înțelege cum funcționează obiceiurile la nivel subconștient și cum le putem modifica. De asemenea, mi-a plăcut că, deși sunt prezentate concepte științifice, ele sunt explicate într-un mod accesibil, cu exemple din viața de zi cu zi.",
        ],
        cons: [
          "Deși este o carte bine structurat și informativă, unele idei au fost, în opinia mea, puțin repetitive. De exemplu, autorul revine des asupra importanței micilor schimbări, ceea ce poate deveni plictisitor pentru cititorii care sunt deja familiarizați cu aceste concepte. În plus, unele capitole se concentrează mai mult pe teorie și mai puțin pe aplicabilitatea practică a ideilor."
        ],
        conclusion: [
          "Atomic Habits este o lectură extrem de valoroasă pentru oricine dorește să își îmbunătățească obiceiurile și să facă schimbări durabile în viața lor. Este o carte care combină teoria cu aplicabilitatea practică și care te provoacă să îți examinezi comportamentele cotidiene. Deși există câteva momente repetitive, informațiile oferite sunt extrem de utile și bine structurate. Recomand această carte celor care doresc să creeze un sistem de obiceiuri pozitive și să își transforme viața pe termen lung."
        ],
      }
    },
    {
      slug: "dimineata-miraculoasa",
      title: "Dimineata miraculoasa",
      author: "Hal Elrod",
      image: "https://cdn.dc5.ro/img-prod/79510740-0.jpeg",
      details: {
        categories: "Dezvoltare Personala",
        category: "dezvoltare-personala",
        language: "Română",
        published: "2018",
        publisher: "Lifestyle Publishing",
        pages: 192,
      },
      rating: 5,
      review: {
        introduction: [
          "Dimineața miraculoasă este o carte care propune un program simplu, dar eficient, pentru a-ți transforma viața, concentrându-te pe obiceiuri matinale care să te ajute să îți atingi potențialul maxim. Hal Elrod susține că începutul zilei este esențial pentru succesul general și că obiceiurile bune aplicate dimineața pot schimba radical cursul vieții tale.",
        ],
        parerea: [
          "Cartea m-a captivat prin simplificarea ideii de succes și prin prezentarea unui sistem care poate fi aplicat de oricine, indiferent de circumstanțele personale. Conceptul de 'dimineața miraculoasă' este inspirat și promite o schimbare reală, ajutând cititorii să se concentreze pe activități care le pot aduce beneficii fizice, mentale și emoționale.",
        ],
        pros: [
          "Unul dintre aspectele care mi-au plăcut mult a fost structura simplă a 'SAVERS' - cele șase activități pe care Elrod le propune pentru fiecare dimineață: Silențiu (meditație), Afirmații, Vizualizare, Exerciții fizice, Citirea și Scrierea. Aceste activități sunt destul de ușor de implementat și îți oferă o rutină completă care poate să te ajute să te simți mai bine, mai energizat și mai motivat pe parcursul zilei. M-a inspirat foarte mult ideea de a începe ziua cu intenție și de a investi în propria dezvoltare personală chiar de dimineață."
        ],
        cons: [
          "Poate că pentru unii cititori, structura foarte rigidă a rutinei propuse de autor ar putea părea un pic dificil de respectat, mai ales în zilele când timpul este limitat. De asemenea, unele pasaje mi s-au părut puțin prea motivaționale și mai puțin fundamentate pe cercetări științifice, ceea ce ar putea descuraja cititorii care preferă un fundament mai solid pentru argumentele prezentate."
        ],
        conclusion: [
          "Dimineața miraculoasă este o carte motivantă și plină de energie, care te încurajează să îți transformi viața prin schimbarea modului în care îți începi ziua. Programul propus este simplu de urmat și are potențialul de a aduce schimbări semnificative în viața celor care îl aplică cu consecvență. Chiar dacă poate părea uneori prea idealist, este o lectură care te provoacă să îți depășești limitele și să îți îmbunătățești viața, pas cu pas. O recomand celor care caută o abordare sistematică pentru a-și atinge obiectivele și pentru a deveni cea mai bună versiune a lor."
        ],
      }
    },
],
"psihologie": [ 
    {
      slug: "barbatii-sunt-de-pe-marte-femeile-sunt-de-pe-venus",
      title: "Barbatii sunt de pe Marte, femeile sunt de pe Venus",
      author: "John Gray",
      image: "https://cdn.dc5.ro/img-prod/52137-0.jpeg",
      details: {
        categories: "Psihologie",
        category: "psihologie",
        language: "Română",
        published: "2006",
        publisher: "Vremea",
        pages: 224,
      },
      rating: 5,
      review: {
        introduction: [
          "Bărbații sunt de pe Marte, femeile sunt de pe Venus este o carte care explorează diferențele fundamentale între bărbați și femei în ceea ce privește modul în care gândesc, simt și comunică. John Gray prezintă aceste diferențe ca fiind esențiale pentru înțelegerea și îmbunătățirea relațiilor între sexe. Cartea oferă o perspectivă asupra modului în care bărbații și femeile pot învăța să își aprecieze diferențele și să comunice mai eficient, pentru a construi relații mai sănătoase și mai satisfăcătoare.",
        ],
        parerea: [
          "Este o carte interesantă și foarte revelatoare pentru cei care doresc să înțeleagă mai bine psihologia și comportamentele celor din jur, mai ales în cadrul relațiilor de cuplu. Îmi place cum autorul reinterpretează multe dintre conflictele comune dintre bărbați și femei, ajutând cititorii să realizeze că aceste diferențe nu sunt neapărat probleme, ci mai degrabă oportunități de a învăța și de a crește împreună. Este o lectură care poate aduce claritate și ajută la reconcilierea unor conflicte în relații.",
        ],
        pros: [
          "Mi-a plăcut foarte mult cum autorul subliniază că bărbații și femeile au nevoi emoționale diferite și cum acest lucru influențează modul în care comunicăm și interacționăm în relații. De exemplu, Gray explică faptul că bărbații tind să aibă o abordare mai orientată spre soluții și mai puțin concentrată pe exprimarea emoțiilor, în timp ce femeile sunt mai deschise să împărtășească sentimente și să caute sprijin emoțional. Este o abordare destul de echilibrată, care nu pune niciunul dintre sexe într-o lumină negativă, ci mai degrabă accentuează importanța înțelegerii și acceptării acestor diferențe.",
        ],
        cons: [
          "Unele pasaje din carte pot părea destul de generalizate și s-ar putea ca cititorii să simtă că autorul prea mult reduce complexitatea relațiilor la un set de stereotipuri. Deși este adevărat că există diferențe între bărbați și femei, nu toți oamenii se potrivesc perfect în aceste tipare. De asemenea, în anumite părți ale cărții, soluțiile oferite pentru comunicare sunt uneori destul de simple și pot părea prea teoretice, iar în practică, aplicarea lor poate fi mai dificilă.",
        ],
        conclusion: [
          "Bărbații sunt de pe Marte, femeile sunt de pe Venus este o carte care poate fi foarte utilă celor care vor să înțeleagă mai bine relațiile interpersonale și să îmbunătățească comunicarea cu partenerii lor. Deși unele părți ale cărții sunt mai teoretice și bazate pe stereotipuri, în ansamblu, oferă perspective valoroase care pot ajuta în dezvoltarea unor relații mai armonioase. Este o lectură esențială pentru cupluri sau pentru cei care doresc să înțeleagă diferențele psihologice dintre bărbați și femei și să învețe cum să le gestioneze mai bine."
        ],
      }
    },
    {
      slug: "cele-cinci-limbaje-ale-iubirii",
      title: "Cele cinci limbaje ale iubirii",
      author: "Gary Chapman",
      image: "https://cdn.dc5.ro/img-prod/350600620-1.png",
      details: {
        categories: "Psihologie",
        category: "psihologie",
        language: "Română",
        published: "2019",
        publisher: "Curtea Veche Publishing",
        pages: 208,
      },
      rating: 5,
      review: {
        introduction: [
          "Cele cinci limbaje ale iubirii este o carte care explorează modul în care fiecare persoană își exprimă și primește iubirea într-un mod unic. Gary Chapman propune cinci „limbaje” prin care iubirea poate fi comunicată în relații: cuvinte de încurajare, timp de calitate, daruri, servicii și atingere fizică. Cartea ajută cititorii să înțeleagă cum să își îmbunătățească relațiile prin descoperirea limbajului iubirii proprii și al partenerului.",
        ],
        parerea: [
          "Consider că este o carte foarte utilă, în special pentru cupluri sau persoane care doresc să își îmbunătățească relațiile interpersonale. Conceptul de limbaje ale iubirii este simplu, dar extrem de eficient în crearea unei conexiuni mai profunde între două persoane. A învăța cum să îți exprimi iubirea într-un mod care să fie înțeles de celălalt este un pas important în consolidarea unei relații sănătoase și armonioase.",
        ],
        pros: [
          "Mi-a plăcut foarte mult că Gary Chapman nu doar că expune aceste cinci limbaje, dar oferă și exemple concrete și strategii aplicabile pentru fiecare dintre ele. Citind cartea, am realizat cât de diferit pot comunica oamenii iubirea, chiar dacă o simt la fel de intens. Este o lectură revelatoare și poate ajuta mult în clarificarea unor conflicte din relații care apar din cauza diferențelor în modul de a înțelege iubirea. Cartea este plină de sfaturi utile și ușor de implementat, ceea ce o face accesibilă oricui."
        ],
        cons: [
          "Uneori, mi s-a părut că exemplele din carte sunt prea generalizate și ar fi fost utile mai multe cazuri concrete care să abordeze mai multe situații complexe, cum ar fi relațiile dificile sau mai puțin ideale. De asemenea, câteva capitole sunt mai teoretice și nu sunt atât de aplicabile pe moment, dar acest aspect nu este o problemă majoră."
        ],
        conclusion: [
          "Cele cinci limbaje ale iubirii este o carte care te ajută să înțelegi mai bine nu doar cum să îți exprimi iubirea, dar și cum să o primești în moduri care să te facă să te simți cu adevărat apreciat. Este o lectură esențială pentru oricine vrea să își îmbunătățească relațiile romantice, familiale sau chiar de prietenie. Cartea oferă instrumente valoroase pentru a crea relații mai sănătoase și mai satisfăcătoare, iar prin aplicarea principiilor din ea, putem învăța să iubim și să fim iubiți într-un mod mai profund și mai autentic."
        ],
      }
    },
]
  };

  const uploadBooksToFirestore = async () => {
    try {
      for (const category in bookReviews) {
        const books = bookReviews[category];
        for (const book of books) {
          await setDoc(doc(db, "bookReviews", book.slug), {
            ...book,
            category: category 
          });
          console.log(`Carte adăugată: ${book.title}`);
        }
      }
    } catch (error) {
      console.error("Eroare la încărcarea cărților:", error);
    }
  };
  
  uploadBooksToFirestore();