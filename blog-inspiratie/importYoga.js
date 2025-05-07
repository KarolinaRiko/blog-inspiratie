import { db } from "./src/firebase.js";
import { doc, setDoc } from "firebase/firestore";

const yogaData = {
  slug: "yoga",
  denumire: "Yoga: Arta Echilibrului și Relaxării",
  title1: "Ce este Yoga?",
  introducere: {
    text1: "Trăim într-o lume stresantă. De la locurile noastre de muncă, incertitudinea cu privire la viitor și relațiile stresate până la un echilibru mereu provocator dintre muncă și viață personală creează mai multă anxietate și stres în viața noastră.",
    text2: "Pentru a scăpa de acest stres și anxietate, apelăm la diferite măsuri. Un astfel de mod sigur de a ține stresul la distanță este yoga. Calitățile sale terapeutice ajută la reglarea emoțiilor și au un impact pozitiv.",
    text3: "Lumea se luptă din ce în ce mai mult cu scăderea bunăstării mintale. Și toți avem nevoie de acea singură sursă care poate aduce mai multă calm, stabilitate, energie pozitivă, relaxare și pace în viața noastră. Și yoga este acea sursă. O practică indiană străveche, yoga este o modalitate eficientă de a vă menține corpul în formă, în același timp cu un impact pozitiv asupra minții și sufletului.",
    text4: "Practicând yoga calmantă și yoga pentru sistemul nervos, poți simți o diferență instantanee în viața ta. Da, există poziții speciale de yoga pentru sănătatea mintală și asane pe care le puteți practica pentru a vă calma mintea și a vă relaxa sistemul nervos. Practicarea regulată a yoga contribuie semnificativ la îmbunătățirea sănătății fizice, ajutând la creșterea energiei și vitalității, sporind flexibilitatea și întărind musculatura.",
  },
  imagine1: "/images/yoga.jpg",
  title2: "Tipuri de Yoga",
  tipuri: [ 
    {den: "Există mai multe stiluri de yoga, fiecare având propriile sale caracteristici",},
    {
      "nume": "Hatha Yoga",
      "descriere": "Ideală pentru începători, această practică se concentrează pe posturi și tehnici de respirație, ajutând la echilibru și relaxare."
    },
    {
      "nume": "Vinyasa Yoga",
      "descriere": "Mișcări fluide sincronizate cu respirația."
    },
    {
      "nume": "Ashtanga Yoga",
      "descriere": "Un stil dinamic și intens."
    },
    {
      "nume": "Yin Yoga",
      "descriere": "Posturi menținute mai mult timp pentru relaxare profundă."
    },
    {
      "nume": "Bikram Yoga",
      "descriere": "Înseamnă o serie de 26 de posturi practicate într-o cameră încălzită la 40ºC."
    },
],
  imagine2: "/images/yog.jpg",
  title3: "Principalele beneficii ale practicii yoga",
  beneficii: [
    {
      yoga: "Practica regulată a yoga aduce multiple beneficii atât pentru corp, cât și pentru minte. Iată câteva dintre cele mai importante avantaje:",
      descriere: [
      "Îmbunătățirea performanțelor și a condiției fizice.",
      "Yoga contribuie la alungirea coloanei vertebrale și la deschiderea toracelui, ceea ce îmbunătățește semnificativ postura corpului.",
      "Practicarea regulată poate ajuta la diminuarea sau chiar eliminarea durerilor de spate și articulare, oferind mai mult confort zilnic.",
      "Tehnicile de respirație corectă dezvoltate prin yoga duc la o oxigenare mai bună a organismului, îmbunătățind energia și vitalitatea.",
      "Îmbunătățirea coordonării și a echilibrului.",
      "Practicând yoga, devii mai conștient de propriul corp și de senzațiile profunde pe care le resimți, ceea ce ajută la echilibrarea minții și a spiritului.",
      "Mușchii și oasele sunt întărite prin exercițiile de yoga, reducând riscul de osteoporoză și contribuind la o sănătate mai bună a sistemului osos.",
      "Flexibilitate, mobilitate și suplețe sporite.",
      "Yoga aduce beneficii și pentru sistemul cardiovascular, ajutând la reglarea tensiunii arteriale, dar și pentru sistemul respirator prin creșterea capacității pulmonare și îmbunătățirea funcționării organelor interne.",
      "Îmbunătățirea proceselor digestive",
      "Îmbunătățirea stării pielii - este mai fermă",
      "Prin stimularea circulației și a respirației, yoga favorizează eliminarea toxinelor și a substanțelor nocive din organism.",
      "Întârzierea procesului de îmbătrânire.",
      "Metabolismul este accelerat prin practicarea yoga, ceea ce susține reducerea grăsimilor și îmbunătățirea formei fizice.",
      "Un mai bun control al emoțiilor.",
      "Realizarea echilibrului intern.",
      "Relaxare, reducerea stresului și a tensiunii.",
      "Yoga oferă o pauză binevenită de la stresul cotidian, concentrându-te pe „aici și acum”, ajutându-te să îți găsești liniștea interioară.",
      "Îmbunătățirea percepției de sine."
      ]
    }
  ],
  title4: "Pozitii in Yoga",
  poses: [
    {
      name: "Balasana",
      img: "/images/balasana.jpg",
      gif: "https://homeworkouts.org/wp-content/uploads/anim-child-pose.gif",
      description: [
        "Poziția copilului (Balasana) se concentrează pe crearea unui moment de odihnă în care corpul poate fi nemișcat. Este o postură fundamentală de yoga care ne amintește că inacțiunea poate fi la fel de valoroasă ca și acțiunea.",
        "Poziția copilului nu este complet inactivă dacă iei versiunea cu brațele întinse în fața ta, care angajează și întinde mușchii spatelui, precum și umerii și brațele. "
      ],
      steps: [
        "Îngenunchează pe podea. Atingeți-vă degetele mari de la picioare și așezați-vă pe călcâie, apoi separați genunchii la fel de lați ca șoldurile. (Pentru mai mult masaj în partea din față a corpului, țineți genunchii mai apropiați.)",
        "Expirați și pliați înainte; întinde-ți trunchiul între coapse. Îngustează punctele șoldurilor spre buric, astfel încât acestea să se cuibărească pe interiorul coapselor. Lărgiți-vă pe partea din spate a pelvisului la nivelul sacrului și prelungiți-vă coccisul departe de spate. Ridicați ușor bărbia pentru a ridica baza craniului departe de ceafa.",
        "Întindeți-vă mâinile spre partea din față a covorașului pentru poziția copilului extins. Sau întindeți-vă înapoi spre picioare și sprijiniți brațele pe podea lângă trunchi, cu palmele în sus, eliberând partea din față a umerilor către podea. Lăsați greutatea umerilor să tragă omoplații larg peste spate.",
        "Balasana este o ipostaza de odihna. Stați oriunde de la 30 de secunde la câteva minute.",
        "Pentru a veni în sus, mai întâi lungiți trunchiul din față și apoi cu o ridicare prin inhalare de la coczis, în timp ce presează în jos și în pelvis."
      ],
      sfaturi: [
        "Nu vă fie teamă să jucați cu diferite iterații! Puteți întinde genunchii puțin mai lat sau puteți aduce brațele lângă picioare, cu palmele în sus. Vezi ce aduc aceste modificări pentru tine și ce versiune a posturii se simte cel mai conectată la corpul tău.",
        "Dacă doriți, în loc să vă întindeți brațele pe podea, atingeți-le înapoi lângă picioare, cu palmele în sus.",
        "Nu te sfii să folosești blocuri, pături sau suporturi. Poziția copilului este menită să fie odihnitoare și liniștitoare. Oricare ar fi cea mai bună experiență a posturii, ar trebui să vă străduiți să creați și să vă sprijiniți în acea postură."
      ]
    },
    {
      name: "Vrksasana",
      img: "/images/Vrksasana.jpg",
      gif: "https://i.gifer.com/origin/52/52a10f4b83567b6f7a5d445bb2d0eadb.gif",
      description: [
        "Vrksasana (Poza copacului) te învață să apeși în jos și să te simți înrădăcinat în timp ce ajungi înalt ca ramurile unui copac puternic. În această ipostază, găsești un sentiment de împământare prin puterea piciorului tău în picioare. Aducerea tălpii piciorului opus la tibie sau coapsă vă provoacă echilibrul. Angajați-vă în mod continuu gleznele, picioarele și nucleul și observați ce mișcări mici ar putea face corpul pentru a vă ajuta să vă mențineți echilibrul.",
      ],
      steps: [
        "Stai în Tadasana. Întindeți-vă degetele de la picioare, apăsați-vă picioarele în covoraș și întăriți-vă mușchii picioarelor. Ridicați șoldurile din față spre coastele inferioare pentru a ridica ușor burta inferioară.",
        "Inspirați adânc, ridicându-vă pieptul și expirați în timp ce trageți omoplații pe spate. Privește drept înainte la un loc fix de privit.",
        "Pune-ți mâinile pe șolduri și ridică-ți piciorul drept sus pe coapsa sau tibia stângă. Evitați contactul cu genunchiul.",
        "Apăsați piciorul drept și piciorul stâng unul în celălalt.",
        "Verificați dacă pelvisul este orizontal și îndreptat în față.",
        "Când te simți stabil, plasează-ți mâinile în Anjali Mudra la inimă sau întinde-ți brațele deasupra capului, ca niște ramuri care ajung la soare.",
        "Țineți câteva respirații, apoi reveniți în Poziția Muntelui și repetați pe cealaltă parte."
      ],
      sfaturi: [
        "Practicați Poziția copacului în timp ce stați la câțiva centimetri de un perete pe partea cu piciorul drept. Chiar dacă nu atingi peretele, proximitatea acestuia te ajută să te simți încrezător că nu vei cădea din ipostază. Dar dacă vă clătinați, puteți pur și simplu să întindeți o mână și să vă reechilibrați.",
        "Când ajungeți în sus, țineți brațele aliniate cu urechile. Dacă luați mâinile prea mult înapoi, vă poate schimba centrul de greutate și vă poate face să cădeți înapoi.",
        "Aplecă-te în metafora Copacului, întruchipând rădăcinile de dedesubt, trunchiul puternic și înflorirea deplină a întinderii tale în sus."
      ]
    },
    {
      name: "Tadasana",
      img: "/images/tadasana.jpg",
      gif: "https://www.wakefit.co/blog/wp-content/uploads/2019/06/Tadasana.gif",
      description: [
        "Interacțiunea dintre efort și ușurință este ceva pe care îl experimentați în aproape fiecare poziție de yoga. Mountain Pose vă permite să practicați principiile de bază ale echilibrului, alinierei și efortului selectiv și ușurinței, pregătindu-vă să utilizați aceleași principii în alte ipostaze.",
        "„În exterior, Mountain Pose în yoga pare extrem de simplă”, spune Stephany McMillan, fondatorul Rise and Flow Yoga din Greensboro, Carolina de Nord. „Dar în interior, mușchii sunt activi, puternici și lucrează din greu.”"
      ],
      steps: [
        "Stai cu degetele mari de la picioare atingându-se și călcâiele ușor depărtate.",
        "Ridicați și întindeți-vă degetele de la picioare, apoi coborâți-le înapoi pe covoraș.",
        "Stivuiți-vă umerii, șoldurile, genunchii și gleznele într-o linie dreaptă.",
        "Lasă-ți brațele să cadă în lateral, cu palmele îndreptate înainte.",
        "Privește drept înainte. Respira."
      ],
      sfaturi: [
        "Despărțiți-vă picioarele de la șolduri pentru a găsi un echilibru mai bun și pentru a ușura tensiunea musculară din partea inferioară a spatelui.",
        "Legănați înainte și înapoi și dintr-o parte în alta pe picioarele voastre. Reduceți încet balansul și opriți-vă cu greutatea echilibrată uniform pe picioare. Rădăcină în jos prin toate marginile picioarelor tale. Simțiți cum energia se trage din picioare în sus prin miez.",
        "Cereți unui profesor să verifice dacă urechile, articulațiile umerilor, șoldurile și gleznele sunt în linie dreaptă.",
      ],
    },
    {
      name: "Marjaryasana",
      img: "/images/cat.jpg",
      gif: "https://64.media.tumblr.com/a6835e339014fe16bbe02e41214de0eb/tumblr_o5vuqlO7sw1rysr6eo1_400.gif",
      description: [
        "Rareori întâlnești Poza pisicii, sau Marjaryasana, la cursul de yoga, fără a fi, de asemenea, indicat în Poza vacii, Bitilasana. Împreună, aceste poziții îți angajează nucleul și eliberează tensiunea din spate ca o modalitate de a te pregăti pentru ceea ce urmează. Deși este o poziție atât de comună, încât poate fi ușor să te grăbești prin ea fără minte. Încetini. Lasă-te să experimentezi. Sincronizează-ți respirația cu mișcarea ta. Fă-ți un moment pentru a găsi liniștea în corpul tău. S-a acordat permisiunea de a ignora indicația profesorului și de a zăbovi aici când simți că mâinile tale apăsează pe saltea și îți eliberezi gâtul. Această conștientizare poate pregăti scena pentru restul practicii tale."
      ],
      steps: [
        "Începeți în Tabletop cu șoldurile direct peste genunchi. Mâinile tale ar trebui să fie la distanță de umeri și ușor în fața umerilor tăi.",
        "Aduceți cutele încheieturii mâinii paralele cu partea din față a covorașului. Întindeți-vă degetele larg și apăsați ferm prin degete.",
        "Expiră și rotunjește-ți coloana vertebrală spre tavan în timp ce îți eliberezi capul și cozisul spre covoraș. Relaxează-ți gâtul. Nu este nevoie să-ți bagi bărbia.",
        "Împingeți podeaua cu mâinile pentru a vă lărgi peste omoplați. Trage-ți buricul spre coloana vertebrală.",
        "Țineți șoldurile peste genunchi și brațele drepte pentru a izola mișcarea coloanei vertebrale.",
        "Pentru a elibera poziția, reveniți la o coloană neutră în Tabletop."
      ],
      sfaturi: [
        "Relaxați-vă gâtul în loc să-l țineți încordat, astfel încât capul să se elibereze spre covoraș.",
        "Țineți umerii departe de urechi."
      ]
    },
    {
      name: "Adho Mukha Svanansana",
      img: "/images/caine.jpg",
      gif: "https://media0.giphy.com/media/3o7bu2u8DAsIlfUxRm/200w.gif?cid=6c09b952qv764a6xv8l6zi35byph6nu4xyo51gfg88m1za7j&ep=v1_gifs_search&rid=200w.gif&ct=g",
      description: [
        "Adho Mukha Svanasana (Poza câinelui cu fața în jos) este una dintre cele mai recunoscute ipostaze de yoga. Această poziție de bază deschide și întărește umerii și pieptul, prelungește ischiochibial și îmbunătățește circulația cu o întindere pe tot corpul.",
        "„Downward Dog este poziția perfectă pentru a observa și a corecta dezechilibrele corpului tău”,",
        "Pentru unii oameni, această poziție este despre întindere și deschidere; pentru alții, înseamnă să înveți să-ți stabilizezi articulațiile cu efort muscular.",
      ],
      steps: [
        "Vino pe mâini și genunchi. Aduceți-vă mâinile ușor în fața umerilor, întindeți-vă degetele larg, apăsați prin degete și întindeți-vă degetele de la picioare.",
        "Expiră în timp ce ridici genunchii și ajungi la șolduri în sus și înapoi. Țineți genunchii ușor îndoiți în timp ce apăsați spatele coapselor spre peretele din spatele vostru și ajungeți la călcâiele spre covoraș.",
        "Apăsați baza degetelor arătător în covoraș . Relaxează-ți gâtul și ține-ți capul între brațe.",
        "Respiră aici. Pe măsură ce expirați, îndoiți genunchii și coborâți-vă în Poziția Copilului"
      ],
      sfaturi: [
        "Țineți genunchii îndoiți dacă aveți încordări sau strângere la ischiogambieri și spatele.",
        "Lasă-ți călcâiele să se simtă grele în timp ce le lași să se scufunde spre saltea. Este perfect în regulă și destul de obișnuit ca ei să rămână ridicați de pe covoraș.",
        "Atingeți-vă oasele sediului spre peretele din spatele vostru, unde se întâlnește cu tavanul.",
        "Dacă aveți umerii strânși, plasați mâinile puțin mai late decât umerii și întoarceți-vă degetele ușor spre exterior."
      ]
    },
    {
      name: "Trikonasana",
      img: "/images/trikonasana.jpg",
      gif: "https://64.media.tumblr.com/3af235a99a2b764764ce21587e57a8e9/tumblr_o5vumnMzAj1rysr6eo1_400.gif",
      description: [
        "Utthita Trikonasana aduce stabilitate la pământ și o expansiune a pieptului care deschide inima. Întinde muschii ischiochibial și spatelui în timp ce activează mușchii abdominali. Este o poziție care necesită concentrare, conștientizare a corpului, echilibru și o respirație constantă, ceea ce poate ajuta la concentrarea minții rătăcitoare și te poate aduce înapoi la ceea ce se întâmplă pe saltea ta.",

      ],
      steps:
        [
          "Din Tadasana (Poza Muntelui) , pășește-ți picioarele la 3 până la 4 picioare. Ridicați brațele paralel cu podeaua și atingeți-le activ în lateral, cu omoplații lați, palmele în jos.",
          "Întoarceți ușor piciorul stâng și piciorul drept înainte pentru a face față față de covoraș. Aliniați călcâiul drept cu călcâiul stâng, dacă este confortabil pentru dvs. Angajați-vă quad-urile.",
          "Expirați și întindeți-vă trunchiul înainte - îndoindu-vă de la articulația șoldului, nu de la talie - pentru a ajunge la corpul lateral direct peste piciorul din față. Contracarați atingerea ancorând șoldul stâng la stânga. (Imaginați-vă că cineva încearcă să vă tragă șoldurile spre stânga.) Întăriți această mișcare prin întărirea piciorului stâng și apăsând ferm călcâiul exterior pe podea.",
          "Când ați ajuns cât de departe puteți, înclinați-vă la șold și aduceți trunchiul la dreapta, deplasându-vă spre partea superioară a corpului, paralel cu podeaua. Întindeți mâna dreaptă în jos spre podea și întindeți brațul stâng spre tavan, în linie cu vârful umerilor. Mâinile, brațele și umerii tăi vor forma o linie dreaptă, perpendiculară pe covorașul tău.",
          "Deschide-ți trunchiul spre stânga, păstrând părțile stânga și dreaptă ale trunchiului la fel de lungi. Lăsați șoldul stâng să vină ușor înainte și prelungiți coczisul spre călcâiul din spate.",
          "Așezați-vă mâna dreaptă pe tibie, pe gleznă sau pe podea în afara piciorului drept - orice este posibil fără a distorsiona părțile laterale ale trunchiului. Țineți-vă capul într-o poziție neutră sau întoarceți-vă pentru a vă uita în sus la mână sau în jos la pământ.",
          "Rămâneți în această poziție timp de 30 până la 60 de secunde. Inspiră pentru a veni în sus, apăsând puternic călcâiul din spate în podea și ajungând la brațul superior spre tavan. Recentrează, apoi inversează picioarele și repetă pentru aceeași perioadă de timp pe cealaltă parte."
        ],
      sfaturi: [
        "Dacă picioarele tale sunt prea îndepărtate, te vei simți dezechilibrat. Lungimea este unică pentru dvs. și pentru picioarele dvs., așa că explorați poziția pentru a găsi poziția piciorului care este cea mai bună pentru dvs. Ar trebui să simți o întindere plăcută, dar nu ar trebui să te simți încordat.",
        "Dacă vă simțiți instabil în poziție, sprijiniți-vă călcâiul din spate de un perete.",
        "Încercați să vă țineți brațele într-o linie lungă de la podea la tavan.",
        "Dacă întoarcerea capului spre tavan nu este confortabil pentru gât, priviți drept înainte sau în jos la covoraș."
      ]
    },
    {
      name: "Baddha Konasana",
      img: "/images/baddha.jpg",
      gif: "https://ghost-cms.s3.ap-south-1.amazonaws.com/2021/07/Butterfly-pose--bandhakonasana-.gif",
      description: [
        "Baddha Konasana (Poza unghiului legat) este o poză potrivită pentru deschiderea șoldurilor și întinderea mușchilor interiori ai coapsei. Această poziție aparent simplă îți întărește, de asemenea, miezul și îți îmbunătățește postura.",
        "Baddha Konasana poate părea simplă, dacă stai în ea pentru o perioadă lungă de timp, mușchii spatelui se vor obosi, ceea ce face dificil să ții pieptul în poziție verticală, spune Carpenter."
      ],
      steps: [
        "Începeți în poziția personalului . Stai direct deasupra oaselor tale așezate, mai degrabă decât în spatele lor.",
        "Îndoiți genunchii și lăsați-i să se deschidă în lateral.",
        "Adunați tălpile picioarelor împreună și folosiți-vă mâinile pentru a le deschide ca și cum ați deschide paginile unei cărți.",
        "Apăsați omoplații pe partea superioară a spatelui pentru a vă ridica prin stern sau piept. Strângeți-vă gleznele pentru a vă ajuta să găsiți ridicare de-a lungul trunchiului.",
        "Pentru a ieși din poziția, eliberați ușor picioarele și reveniți la Poziția personalului."
      ],
      sfaturi: [
        "Amintiți-vă că toată lumea are limite naturale. Structura osoasă și dezvoltarea musculară pot împiedica genunchii să se deschidă până la podea. Asta e ok; Baddha Konasana vă va ajuta în continuare să vă întindeți interiorul coapselor și să vă construiți puterea în spate."
      ]
    },
    {
      name: "Padmasana",
      img: "/images/lotus.jpg",
      gif: "https://media0.giphy.com/media/YRmculiLALwEymK6z6/giphy.gif?cid=6c09b952ci8y2tbetiuxa6ieme45wrlzjfr4bxqvq3eg88p7&ep=v1_gifs_search&rid=giphy.gif&ct=g",
      description: [
        "Lotusul este adesea găsit în iconografia hindusă, asociat cu multe zeități puternice. Lakshmi (zeița abundenței) este adesea arătată stând pe un lotus deschis și ținând altul în mână. Același lucru este valabil și pentru Ganesha, distrugătorul obstacolelor cu cap de elefant, și pentru Lordul Vishnu, despre care se spune că reprezintă principiul conservării în univers. Și tradiția spune că oriunde mergea Buddha, florile de lotus înfloreau."
      ],
      steps: [
        "Stai pe podea in Dandasana cu picioarele intinse. Îndoiți genunchiul drept în lateral și leagănați genunchiul și piciorul în mâini. Rotiți-vă piciorul de la șold (nu de la genunchi) și ghidați-vă piciorul în pliul șoldului stâng.",
        "Îndoiți genunchiul stâng, rotind coapsa spre exterior de la șold și, exact așa cum ați făcut pe dreapta. Ridicați-vă ușor tibia și ghidați piciorul stâng peste cel drept și aduceți-l să se bage în pliul șoldului drept.",
        "Așezați vârful picioarelor de coapsele superioare și eliberați genunchii spre podea. Încercați să nu lăsați gleznele secera.",
        "Stai în picioare, ridică-ți sternul și alungește-ți coloana vertebrală. Starea pe o pătură îndoită poate ajuta la prevenirea rotunjirii coloanei vertebrale.",
        "Respirați încet și adânc și rămâneți în poziție atâta timp cât este confortabil."
      ],
      sfaturi: [
        "Pentru a intra în Lotus, este nevoie ca ambele coapse să se rotească spre exterior, deplasându-se de la nivelul șoldurilor. Șoldul este o articulație sferică cu o gamă circulară de mișcare care variază foarte mult de la o persoană la alta, așa că această poziție este o briză pentru unii oameni, mai puțin pentru alții. Nu judeca și nu forța poziția.",
        "Când aduceți piciorul spre zona inghinală, mențineți o întindere uniformă a gleznelor interioare și exterioare la ambele picioare. Nu lăsați o parte a picioarelor sau picioarelor să se simtă suprasolicitate."
      ]
    },
    {
      name: "Ardha Matsyendrasana",
      img: "/images/pose.jpg",
      gif: "https://64.media.tumblr.com/579036645724926507ad63f85dc0b420/tumblr_o8puatTtBy1rysr6eo1_400.gif",
      description: [
        "Ardha Matsyendrasana (Poza Jumătate de Lord al Peștilor/Poza de răsucire așezată) este o răsucire profundă, restauratoare, care este atât întăritoare, cât și întineritoare. Răsucirea întregului trunchi în poziție ajută la stimularea circulației sanguine, susține procesul digestiv și contribuie la îmbunătățirea mobilității coloanei vertebrale.",
        "„Aștept cu nerăbdare să fac Ardha Matsyendrasana spre sfârșitul practicii mele”, spune editorul colaborator al Yoga Journal, Gina Tomaine."
      ],
      steps: [
        "Începeți așezat în Sukhasana. Încrucișează-ți genunchiul drept deasupra sau stânga, aducând picioarele lângă șolduri.",
        "Ridicați genunchiul drept pentru a pune sufletul piciorului drept pe covorașul din afara genunchiului stâng.",
        "Așezați mâna dreaptă pe podea în afara șoldului drept pentru sprijin. Asigurați-vă că stați seara pe ambele oase.",
        "Inspiră și ridică mâna stângă spre tavan. Expirați și aduceți cotul stâng în jos spre exteriorul genunchiului drept. Apăsați-vă genunchiul și cotul împreună pentru a crea o oarecare rezistență.",
        "Întoarce-ți capul la dreapta, privind dincolo de umărul drept. Asigurați-vă că nu vă încordați gâtul.",
        "Respirați în timp ce țineți poziția, prelungindu-vă la fiecare inspirație și răsucindu-vă ușor puțin mai mult la fiecare expirație.",
        "Pentru a ieși din poziție, inspirați pentru a ajunge la brațul drept în sus și a relaxa corpul. Expiră pentru a elibera înapoi în centru. Repetați pe cealaltă parte."
      ],
      sfaturi: [
        "Dacă umerii sunt strânși, în loc să apăsați cotul pe genunchiul ridicat, țineți genunchiul cu mâna sau înfășurați-vă brațul în jurul piciorului ridicat și îmbrățișați coapsa de trunchi.",
        "Dacă te străduiești să respiri profund, renunți puțin la răsucire și încetinește-ți respirația.",
        "Evitați sau modificați această poziție dacă aveți dureri de genunchi, șold sau spate sau răni în aceste zone.",
        "Pentru sprijin, stați pe o pătură."
      ]
    },
    {
      name: "Marichyasana I",
      img: "/images/1.jpg",
      gif: "https://www.docteur-fitness.com/wp-content/uploads/2022/09/marichyasana-posture-du-sage-marichi.gif",
      description: [
        "Marichyasana (Poza dedicată înțeleptului Marichi I) este prima dintre cele patru ipostaze dedicate înțeleptului din seria primară Ashtanga.",
        "Marichyasana calmează mintea și reduce stresul. Adaugă-l spre sfârșitul antrenamentului după ce ți-ai încălzit deja șoldurile, ischiochimbiolarele și umerii. Evitați să vă rotunjiți spatele în timp ce vă pliați și, mai ales, amintiți-vă să respirați."
      ],
      steps: [
        "Începeți în poziția personalului . Apăsați înainte cu movilele degetelor mari de la picior, rotiți interiorul coapselor în jos și înrădăcinați cu oasele coapsei.",
        "Asigurați-vă că vă așezați direct deasupra oaselor așezate (în loc să cazați în spatele lor).",
        "Mișcă-ți sacrul înăuntru și în sus spre buric, în timp ce extinde-ți sternul departe de buric pentru a prelungi corpul din față.",
        "Îndoiți genunchiul drept pentru a trage piciorul înapoi. Călcâiul trebuie să fie chiar în fața osului drept.",
        "Trageți izometric călcâiul drept înapoi pentru a vă balansa pelvisul ușor înainte.",
        "Lăsați genunchiul drept să cadă ușor deschis și înclinați-vă trunchiul înainte, astfel încât să ajungă în interiorul coapsei drepte.",
        "Întindeți mâna dreaptă înainte și lungiți-vă trunchiul. Fixați-vă genunchiul drept înapoi spre linia mediană, astfel încât genunchiul drept interior să vă îmbrățișeze umărul exterior drept.",
        "Rotiți intern brațul drept, așezându-vă axila dreaptă pe tibia dreaptă.",
        "Păstrând această conexiune, îndoiți cotul drept și luați brațul drept la spate.",
        "Întinde mâna la spate cu brațul stâng pentru a strânge încheietura mâinii stângi cu mâna dreaptă.",
        "Inhala. Atingeți-vă sternul înainte pentru a prelungi corpul din față.",
        "Expiră. Balamale de la șolduri și pliați înainte pentru a prelungi corpul din spate.",
        "Îndreptați coroana capului spre degetele de la picioare și eliberați umerii departe de urechi.",
        "Țineți 10-12 respirații. Ridică-ți trunchiul și relaxează-ți brațele la o inspirație.",
        "Reveniți la Poza personalului, apoi repetați pe cealaltă parte."
      ],
      sfaturi: [
        "Din cauza strângerii în zona inghinală, începătorii au adesea dificultăți în a-și menține coapsa cu genunchiul îndoit aproape de partea laterală a trunchiului. Acest lucru face mai dificilă înfășurarea tibiei în axilă și înfășurarea brațului în jurul piciorului. Pe măsură ce aduceți brațul înainte pentru a pregăti poziție, prindeți tibia cu genunchiul îndoit cu mâna din partea opusă și trageți coapsa spre trunchiul lateral."
      ]
    }
  ],
  concluzie: [
    "Dacă ești la început în practicarea yoga, cel mai bine este să vizitezi un studio și să consulți un instructor despre sesiuni individuale sau de grup. Participarea la câteva cursuri te va ajuta să te familiarizezi cu tehnicile de bază. Dacă preferi să exersezi acasă, alege un curs online de încredere, care oferă explicații clare și videoclipuri de calitate. Hatha yoga este o opțiune excelentă pentru începători, deoarece introduce pozițiile fundamentale. Ai nevoie doar de un covoraș confortabil și motivația de a practica, iar în timp vei descoperi beneficiile pentru corp și minte."
  ]
};

const uploadYogaToFirestore = async () => {
    try {
        await setDoc(doc(db, "Mindfulness", yogaData.slug), yogaData);
        console.log("Datele despre poses au fost adăugate cu succes!");
    } catch (error) {
        console.error("Eroare la adăugare: ", error);
    }
};

uploadYogaToFirestore();
