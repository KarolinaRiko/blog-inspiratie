import React from "react";
import { useParams } from "react-router-dom";

const recipesDetail = {
  "supe": [
    {
      slug: "supa-de-dovleac",
      title: "Supa de dovleac",
      description: "Supa de dovleac este fantastică pentru zilele reci. Este minunată pentru a vă potoli foamea și pentru a vă încălzi. Aceasta vă va cuceri prin gustul său delicios și consistența cremoasă, ce reprezintă un contrast excelent cu semințele crocante pe care le conține.",
      image: "https://gymbeam.ro/blog/wp-content/uploads/fly-images/644831/Navrh-bez-nazvu-2024-12-09T093136.064-688x439.png",
      category: "supe",
      ingredients: [
        "600g dovleac",
        "600 ml supa concentrata de legume",
        "200 ml lapte de cocos",
        "300 g cartof dulce",
        "10 g de ghimbir",
        "1 ceapă",
        "3 căței de usturoi",
        "2 lingurițe de ulei de măsline",

        "1 morcov mic",
        "sare, piper dupa gust"
      ],
      steps: [
        { text: "Începeți prin a curăța cartoful dulce și a-l tăia cubulețe împreună cu dovleacul. Nu este nevoie să-l curățați pe acesta din urmă. Apoi curățați morcovii și tăiați-i felii. Căliți în ulei ceapa, usturoiul și ghimbirul toate tocate mărunt. Adăugați apoi cartofii dulci, morcovii și dovleacul.", image: "https://gymbeam.ro/blog/wp-content/uploads/2024/12/Navrh-bez-nazvu-2024-12-09T092436.287.png" },
        { text: "Căliți împreună și apoi turnați supa concentrată de legume și laptele de cocos. Condimentați cu sare după gust, acoperiți oala cu un capac și fierbeți până când legumele devin moi. Acest lucru va dura aproximativ 20 de minute." },
        { text: "Când este gata, luați un blender și mixați supa până se omogenizează. Apoi asezonați cu piper măcinat și sare după cum considerați și totul este gata. Serviți cu verdețuri proaspete și semințe de dovleac, pe care le puteți usca în prealabil într-o tigaie. Ornați farfuria cu câteva picături de lapte de cocos pentru efect." }
      ]
    },
    {
      slug: "supa-de-pui-dulce-acrisoara",
      title: "Supa de pui dulce-acrisoara",
      description: "Această supă dulce-acrișoară este o necesitate pentru toți cei cărora le place mâncarea asiatică. Combinația de pui, condimente și alte ingrediente creează o armonie ideală de arome.",
      image: "https://gymbeam.ro/blog/wp-content/uploads/fly-images/515297/Navrh-bez-nazvu-2023-12-05T203738.070-688x439.png",
      category: "supe",
      ingredients: [
        "700 ml supă concentrată de pui",
        "310 g piept de pui",
        "80 g ardei roșu",
        "70 g sos de soia",
        "50 g morcovi",
        "30 g oțet de orez",
        "20 g ciuperci negre (Hirneola auricula-judae)",
        "20 g zahăr de cocos",
        "10 g amidon (Solamyl)",
        "5 g ulei de susan (opțional)",
        "1 ou",
        "ulei spray",
        "sare, piper după gust"
      ],
      steps: [
        { text: "Începeți prin a pregăti ciupercile. Lăsați-le la înmuiat în apă timp de 10 minute și apoi tocați-le mărunt. Scurgeți apa din pui și asezonați cu ulei de susan, sos de soia, sare și piper negru. Tăiați mărunt ardeiul roșu și morcovii. Pulverizați vasul cu ulei spray, adăugați legumele, ciupercile și sotați. Apoi adăugați carnea și amestecați totul. Turnați supa concentrată peste tot amestecul și fierbeți până când fierbe tot lichidul. La final, adăugați oțetul de orez și zahărul de cocos. Când gustul este pe placul vostru, bateți ouăle în supa care fierbe și amestecați." },
        { text: "Într-o cană, amestecați Solamyl în puțină apă și adăugați-l în supă. Gătiți încă 15 minute pentru a îngroșa supa. Dacă doriți, puteți amesteca ușor cu un blender, dar nu este necesar. La sfârșit, adăugați sare după cum considerați și serviți. Ornați fiecare porție cu ceapă verde." }
      ]
    },
  ],
  "bauturi": [
    {
      slug: "smoothie-cremos-cu-banane-si-unt-de-arahide",
      title: "Smoothie cremos cu banane si unt de arahide",
      description: "Un smoothie este un răsfăț rapid care vă va sătura atunci când pur și simplu nu reușiți să țineți pasul cu agitația cotidiană. Această combinație perfectă, dominată de gustul untului de arahide și al bananei, ne-a cucerit încă de la prima înghițitură.",
      image: "https://gymbeam.ro/blog/wp-content/uploads/fly-images/422858/Navrh-bez-nazvu-2023-02-25T083529.348-688x439.png",
      category: "bauturi",
      ingredients: [
        "200 ml lapte cu conținut scăzut de grăsimi",
        "30 g proteine cu aromă de unt de arahide",
        "10 g unt de arahide cu caramel și ciocolată albă",
        "10 g banane liofilizate",
        "10 g Sirop de ciocolată",
        "Flavor Drops cu aromă de ciocolată după gust",
      ],
      steps: [
        { text: "Puneți laptele, proteinele, untul de arahide, Flavor Drops, Zero Siropul de ciocolată și bananele într-un blender. Puneți deoparte doar câteva felii de banane pentru a orna smoothie-ul. Amestecați toate ingredientele pentru a crea un smoothie fin și cremos.", image: "https://gymbeam.ro/blog/wp-content/uploads/2023/02/Navrh-bez-nazvu-2023-02-24T121320.150.png" },
        { text: "Pregătiți un pahar pentru servire și puneți siropul de ciocolată la congelator pentru câteva minute, pentru a se întări puțin și a avea o consistență mai groasă. Apoi scoateți-l și decorați părțile laterale ale paharului. La final, turnați smoothie-ul pregătit în pahar, puneți deasupra felii de banană și serviți." }
      ]
    },
    {
      slug: "pumpkin-spice-latte",
      title: "Pumpkin Spice Latte",
      description: "Nu există altă băutură la fel de specifică pentru toamnă precum Pumpkin Spice Latte. Consistența sa cremoasă și gustul dulce cu aromă de lapte de cocos și scorțișoară sunt perfecte pentru vremea mohorâtă.",
      image: "https://gymbeam.ro/blog/wp-content/uploads/fly-images/400518/preview-pumpkin-688x439.png",
      category: "bauturi",
      ingredients: [
        "1 dovleac pentru piure",
        "300 ml lapte de cocos (în principal partea solidă)",
        "5 g sirop de arțar",
        "scorțișoară după gust",
        "3 shoturi de espresso",
        "Flavor Drops- alune, vanilie",

      ],
      steps: [
        { text: "Mai întâi, pregătiți 3 shot-uri de espresso și lăsați-le să se răcească. Apoi puteți începe piureul de dovleac. Luați un dovleac Hokkaido mai mic, tăiați-l în jumătate și scoateți interiorul și semințele. Nu aruncați semințele, deoarece le puteți usca în cuptor, le puteți prăji într-o tigaie și le puteți folosi ca gustare sănătoasă sau ca ingredient în alte preparate." },
        { text: "Tăiați ambele jumătăți de dovleac în părți mai mici și puneți-le pe o tavă tapetată cu hârtie de copt. Coaceți în cuptorul preîncălzit la 190°C timp de aproximativ 30 de minute. Încercați-l cu furculița pentru a vedea dacă este moale. Dacă nu, mai coaceți încă 10 minute. După aceea, scoateți-l din cuptor, lăsați-l să se răcească și apoi sunteți gata să începeți să pregătiți piureul propriu zis. Îndepărtați coaja, puneți pulpa acestuia într-un bol și mixați cu un blender până când obțineți o consistență moale. Aveți nevoie doar de 100 g de piure pentru această rețetă. Păstrați restul la frigider și folosiți-l pentru o altă rețetă sau pentru următoarea porție de Pumpkin Spice Latte. Amestecați piureul de dovleac (100 g) cu laptele de cocos. Apoi, turnați espressourile în acest amestec și amestecați bine din nou.", image: "https://gymbeam.ro/blog/wp-content/uploads/2022/11/kafe-lije-pumpkin-latte.png" },
        { text: "Adăugați scorțișoara, flavor drops și siropul de arțar după gust. Amestecați totul, încălziți puțin și totul este gata. Puteți decora băutura după cum doriți." },
      ]
    },
  ],
  "feluri-principale": [
    {
      slug: "paste-cremoase-cu-somon",
      title: "Paste cremoase cu somon",
      description: "Căutați sfaturi pentru prânzul vostru la pachet? Atunci aceste paste cremoase cu somon sunt alegerea perfectă. Pe lângă aroma delicioasă, veți aprecia și porția generoasă de proteine.",
      image: "https://gymbeam.ro/blog/wp-content/uploads/fly-images/638070/Navrh-bez-nazvu-2024-10-24T135929.651-688x439.png",
      category: "feluri-principale",
      ingredients: [
        "200 g roșii cherry",
        "125 g spanac baby",
        "120 g paste",
        "100 g ricotta",
        "1 conservă de somon în saramură",
        "sare după gust",
        "piper după gust",
        "ulei de măsline spray",
        "",
        ""
      ],
      steps: [
        { text: "Începeți prin a găti pastele conform instrucțiunilor și între timp începeți să pregătiți sosul. Pulverizați ulei spray într-o tigaie încălzită și puneți spanacul în ea. Tăiați apoi roșiile cherry în jumătate și adăugați-le peste spanac. Căliți împreună puțin, numai pentru câteva minute, astfel încât să se înmoaie puțin, dar să nu se gătească prea mult. Apoi asezonați legumele cu sare și piper și reduceți focul la mic. Adăugați ricotta în tigaie și amestecați.", image: "https://gymbeam.ro/blog/wp-content/uploads/2024/10/Navrh-bez-nazvu-2024-10-24T135424.859.png" },
        { text: "Dacă amestecul este prea gros, adăugați puțină apă (ideal din paste). Luați apoi conserva de somon, scurgeți lichidul din ea, rupeți în bucăți mici și adăugați în sos împreună cu pastele. Amestecați totul și serviți." },
      ]
    },
    {
      slug: "gulas-de-vita",
      title: "Gulas de vita",
      description: "Gulașul de vită este un preparat perfect, mai ales pentru lunile mai reci. Deși durează puțin mai mult pentru a fi gătit, este incredibil de ușor de preparat și oricine îl poate face. Rezultatul – carne de vită fragedă și suculentă – merită cu adevărat.",
      image: "https://gymbeam.ro/blog/wp-content/uploads/fly-images/613472/Navrh-bez-nazvu-2024-09-17T161306.963-437x279.png",
      category: "feluri-principale",
      ingredients: [
        "600 g carne slabă de vită (crupă)",
        "400 g cartofi",
        "3 căței de usturoi",
        "2 roșii mari",
        "2 ardei grași",
        "2 cepe mari",
        "2 lingurițe de ulei de măsline",
        "1.3 litri de apă",
        "2 lingurițe de boia măcinată",
        "1 linguriță boia afumată",
        "1 linguriță chimen întreg",
        "1 linguriță măghiran",
        "chilli măcinat după gust",
        "sare după gust"
      ],
      steps: [
        { text: "Luați o oală mare, puneți-o pe aragaz și căliți ceapa tocată grosier în ulei de măsline până când aceasta devine translucidă. Adăugați carnea de vită tăiată cubulețe, pre-asezonată cu sare și continuați să gătiți. Apoi, amestecați boia de ardei, boia de ardei afumată, chimen și chilli după gust și prăjiți totul împreună. Curățați și tocați roșiile și ardeii în bucăți mari, apoi adăugați-le în oală. Turnați apa și fierbeți gulașul aproximativ 2-3 ore, până când carnea de vită devine fragedă. Între timp, curățați cartofii, taiați-i cubulețe, apoi adăugați-i în gulaș, gătind încă 20 de minute.", image: "https://gymbeam.ro/blog/wp-content/uploads/2024/09/Navrh-bez-nazvu-2024-09-17T121822.953.png" },
        { text: "Pentru a finaliza, adăugați usturoiul zdrobit, măghiranul și asezonați cu sare după gust. Serviți gulașul ornat cu ceapă feliată, pătrunjel proaspăt și o felie de pâine, dacă doriți." },
      ]
    }
  ],
  "deserturi": [
    {
      slug: "rulouri-cu-scortisoara-si-dovleac",
      title: "Rulouri cu scortisoara si dovleac",
      description: "Această rețetă este o încercare obligatorie pentru oricine iubește mirosul de scorțișoară, care adesea îi atrage pe mulți de pe stradă direct în brutării. Chiar dacă baza este un aluat dospit, brutarii mai puțin experimentați se pot descurca cu prepararea acestuia.",
      image: "https://gymbeam.ro/blog/wp-content/uploads/fly-images/671863/Navrh-bez-nazvu-2025-01-28T192729.630-688x439.png",
      category: "deserturi",
      ingredients: [
        "150 g (+20 g pentru pudrat) făină de spelta simplă",
        "150 g făină de spelta integrală",
        "150 g piure de dovleac",
        "80 ml lapte",
        "35 g zahăr din trestie",
        "50 g unt",
        "1 linguriță drojdie uscată",
        "un vârf de sare",
        "2 lingurițe de scorțișoară",
        "1 linguriță cuișoare măcinate"
      ],
      steps: [
        { text: "Începeți prin a pregăti piureul de dovleac. Tăiați dovleacul, scoateți semințele și coaceți-l cu pielița în sus la cuptor la 180°C până când se înmoaie, ceea ce va dura aproximativ 40 de minute. Curățați dovleacul prăjit și amestecați pulpa până la omogenizare. Acest lucru va crea un piure care va fi apoi folosit în rulourile cu scorțișoară." },
        { text: "Amestecați drojdia și 5 g zahăr din trestie în lapte cald și lăsați să crească timp de 10 minute. Amestecați cele două tipuri de făină cu zahărul rămas, un praf de sare, adăugați aluatul crescut, untul la temperatura camerei tăiat felii și piureul de dovleac. Frământați aluatul până obțineți o consistență omogenă și aproape antiaderent. Acoperiți apoi vasul cu un șervețel și lăsați-l să crească timp de o oră. Între timp, începeți să pregătiți umplutura. Amestecați untul înmuiat cu zahărul, scorțișoara și cuișoarele pentru a obține un amestec uniform. Puneți aluatul pe un sucitor cu făină și întindeți-l într-un dreptunghi. Apoi întindeți amestecul de unt și rulați. Apoi luați un fir de ață și folosiți-l pentru a tăia aluatul în rulouri.", image: "https://gymbeam.ro/blog/wp-content/uploads/2025/01/Navrh-bez-nazvu-2025-01-28T192347.773.png" },
        { text: "Așezați-le într-o tavă de copt (a noastră avea 20x20 cm) tapetată cu hârtie de copt. Atunci când este gata, lăsați pe tava de copt încă 30 de minute să crească. Apoi puneți-le în cuptorul preîncălzit la 180°C și coaceți până se rumenesc aproximativ 20 de minute. Lăsați-le să se răcească puțin , acoperiți cu sirop zero de dovleac și serviți.", image: "https://gymbeam.ro/blog/wp-content/uploads/2025/01/Navrh-bez-nazvu-2025-01-28T192402.633.png" }
      ]
    },
    {
      slug: "cheesecake-cu-tofu-si-arahide",
      title: "Cheesecake cu tofu si arahide",
      description: "Există nenumărate moduri de a prepara un cheesecake, iar noi astăzi am creat o versiune folosind tofu. Prin combinația cu brânza quark, este garantat că acest răsfăț nu numai că are un gust uimitor, ci conține și o cantitate generoasă de proteine.",
      image: "https://gymbeam.ro/blog/wp-content/uploads/fly-images/668389/Navrh-bez-nazvu-2024-12-31T062202.650-688x439.png",
      category: "deserturi",
      ingredients: [
        "80 g ovăz",
        "40 g unt de arahide",
        "3 lingurițe de lapte semi-degresat",
        "300 g quark cu conținut scăzut de grăsimi",
        "250 ml lapte semi-degresat",
        "200 g tofu",
        "30 g pulbere proteică de vanilie",
        "20 g unt de arahide pudră",
        "20 g gelatină pudră",
        "4 lingurițe de apă"
      ],
      steps: [
        { text: "Începeți prin a pregăti baza. Amestecați ovăzul cu laptele și untul de arahide, transformându-l într-un amestec sfărâmicios cu mâinile. Apăsați uniform amestecul pe fundul unei forme de copt de 22 cm și lăsați să se răcească la frigider. Apoi, pregătiți umplutura cu cremă. Tăiați tofu în cuburi, puneți-l într-un blender și adăugați laptele. Apoi, adăugați pulberea proteică și untul de arahide pudră. Amestecați până la omogenizare – acest lucru poate dura ceva timp, în funcție de puterea blenderului vostru." },
        { text: "Transferați amestecul într-un bol mai mare, adăugați brânza quark și bateți până obțineți o cremă netedă. Îndulciți amestecul după bunul plac cu Flavor Drops. Într-o cratiță mică, presărați gelatina peste aproximativ 4 linguri de apă și lăsați-o să crească timp de 10 minute. Încălziți încet, amestecând constant, până se dizolvă complet. Amestecați gelatina topită în crema preparată. Turnați crema pe baza răcită și puneți cheesecake-ul la frigider peste noapte pentru a se întări. Serviți cu zmeură proaspătă sau liofilizată pentru o notă suplimentară." },
      ]
    },
  ],
  "salate": [
    {
      slug: "salată-cu-bulgur-si-carne-de-curcan",
      title: "Salata cu bulgur si carne de curcan",
      description: "Dacă sunteți în căutarea unei rețete de salată ușor de preparat, aromată și care să conțină macronutrienți în raport optim, atunci trebuie să încercați acest preparat gustos. Perfect atât pentru prânz, cât și pentru cină.",
      image: "https://gymbeam.ro/blog/wp-content/uploads/fly-images/669677/Navrh-bez-nazvu-2025-01-12T080014.271-688x439.png",
      category: "salate",
      ingredients: [
        "250 g roșii cherry",
        "155 g piept de curcan în suc propriu",
        "100 g bulgur",
        "100 g măsline negre",
        "100g brânză din Balcani",
        "4 roșii uscate",
        "1 castravete",
        "busuioc proaspăt după gust",
        "sare după gust",
        "iaurt alb"
      ],
      steps: [
        { text: "Începeți prin a pregăti bulgurul. Clătiți-l și puneți-l într-o oală mică cu 300 ml apă. Adăugați sare, puneți pe foc și fierbeți până se înmoaie timp de aproximativ 15 minute. Nu uitați să amestecați din când în când pentru a nu se lipi de fund. Între timp, pregătiți celelalte ingrediente pentru salată. Spălați și tocați castraveții și roșiile. Pur și simplu tăiați roșiile cherry în jumătate și castraveții în cuburi mici. Tăiați apoi măslinele în jumătate și tocați mărunt roșiile uscate la soare și brânza balcanică.", image: "https://gymbeam.ro/blog/wp-content/uploads/2025/01/Navrh-bez-nazvu-2025-01-12T075157.768.png" },
        { text: "Puneți ingredientele preparate într-un bol și adăugați bulgurul fiert, din care ați scurs apa. Scurgeți apa și din carnea de curcan. Apoi turnați și adăugați și busuiocul tocat la celelalte ingrediente din bol. Amestecați totul, adăugați sare după gust și serviți." }
      ]
    },
    {
      slug: "salata-nicoise",
      title: "Salata Nicoise",
      description: "Nicoise se numără printre delicioasele salate care sunt sățioase. Conține carbohidrați complecși, proteine și, desigur, multe legume. Tot ce trebuie să faceți este să adăugați măsline și sos cu miere și muștar pentru a crea preparatul perfect.",
      image: "https://gymbeam.ro/blog/wp-content/uploads/fly-images/420048/Navrh-bez-nazvu-2023-02-07T202250.969-688x439.png",
      category: "salate",
      ingredients: [
        "500 g roșii mici",
        "240 g ton în ulei de măsline",
        "200 g fasole verde congelată",
        "200 g roșii cherry",
        "100 g măsline negre",
        "4-5 linguri sos honey mustard",
        "4 ouă",
        "1 salată iceberg",
        "sare"
      ],
      steps: [
        { text: "Fierbeți cartofii mai mici cu coaja subțire în apă cu sare până se înmoaie. După ce sunt gata, tăiați-i în sferturi. Fierbeți ouăle (se pun ouăle la temperatura camerei în apă clocotită și se fierb timp de 10 minute). Apoi se răcesc în apă rece, se curăță coaja și se taie în sferturi. Fierbeți fasolea congelată în apă fierbinte și sărată aproximativ 10 minute, apoi răciți-o în apă rece și amestecați-o cu cartofii și 3 linguri de sos honey mustard." },
        { text: "Acum, puteți trece la plating. Puneți pe farfurie frunzele de salată iceberg. Dacă vreți să fie mai ușor de mâncat, le puteți tăia. Așezați amestecul de cartofi și fasole și sosul în mijlocul farfuriei cu salată. Deasupra, adăugați roșiile cherry tăiate bucățele mai mici, măslinele tăiate pe jumătate și bucățile de ton din care ați scurs în prealabil uleiul. Ornați deasupra cu sosul rămas, condimentați cu sare după gust și puteți servi." }
      ]
    },
  ],
}


const RecipeDetail = () => {
  const { category, recipeSlug } = useParams();

  const recipe = recipesDetail[category]?.find(r => r.slug === recipeSlug);

  if (!recipe) {
    return <h2>Reteta nu a fost gasita!</h2>;
  }

  return (
    <div className="container-all">
      <div className="all-wrapper">
        <div className="all-category">
        </div>
        <div className="recipe-container"> 
          <div className="recipe-title">{recipe.title}</div>
              <hr className="recipes-line" />
          <div className="recipe-header">
            <div className="recipe-ingredients">
              <h>Ingrediente</h>
              <ul>
                {recipe.ingredients?.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
          </div>
          <hr className="recipes-line-2" />
          <div className="recipe-instructions">
            <h>Mod de preparare:</h>
            {recipe.steps?.map((step, index) => (
              <div key={index} className={`recipe-step ${index % 2 === 0 ? "left" : "right"}`}>
                <p>{step.text}</p>
                {step.image && <img src={step.image} alt={`Pasul ${index + 1}`} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
