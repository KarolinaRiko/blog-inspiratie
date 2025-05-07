import { db } from "./src/firebase.js";
import { doc, setDoc } from "firebase/firestore";
 
const recipesData = {
    "feluri-principale": [
      { 
        slug: "paste-cremoase-cu-somon",
        title: "Paste cremoase cu somon", 
        description: "Căutați sfaturi pentru prânzul vostru la pachet? Atunci aceste paste cremoase cu somon sunt alegerea perfectă. Pe lângă aroma delicioasă, veți aprecia și porția generoasă de proteine.", 
        image: "/images/41.jpg",
        category: "feluri-principale", 
      },
      { 
        slug: "gulas-de-vita", 
        title: "Gulas de vita", 
        description: "Gulașul de vită este un preparat perfect, mai ales pentru lunile mai reci. Deși durează puțin mai mult pentru a fi gătit, este incredibil de ușor de preparat și oricine îl poate face. Rezultatul – carne de vită fragedă și suculentă – merită cu adevărat.", 
        image: "/images/42.jpg",
        category: "feluri-principale", 
      },
    ],
    "deserturi": [
      { 
        slug: "rulouri-cu-scortisoara-si-dovleac", 
        title: "Rulouri cu scortisoara si dovleac", 
        description: "Această rețetă este o încercare obligatorie pentru oricine iubește mirosul de scorțișoară, care adesea îi atrage pe mulți de pe stradă direct în brutării. Chiar dacă baza este un aluat dospit, brutarii mai puțin experimentați se pot descurca cu prepararea acestuia.", 
        image: "/images/46.jpg",
        category: "deserturi", 
      },
      { 
        slug: "cheesecake-cu-tofu-si-arahide",  
        title: "Cheesecake cu tofu si arahide", 
        description: "Există nenumărate moduri de a prepara un cheesecake, iar noi astăzi am creat o versiune folosind tofu. Prin combinația cu brânza quark, este garantat că acest răsfăț nu numai că are un gust uimitor, ci conține și o cantitate generoasă de proteine.", 
        image: "/images/45.jpg",
        category: "deserturi", 
      },
    ],
    "salate": [
      { 
        slug: "salată-cu-bulgur-si-carne-de-curcan", 
        title: "Salata cu bulgur si carne de curcan", 
        description: "Dacă sunteți în căutarea unei rețete de salată ușor de preparat, aromată și care să conțină macronutrienți în raport optim, atunci trebuie să încercați acest preparat gustos. Perfect atât pentru prânz, cât și pentru cină.", 
        image: "/images/44.jpg",
        category: "salate", 
      },
      { 
        slug: "salata-nicoise", 
        title: "Salata Nicoise", 
        description: "Nicoise se numără printre delicioasele salate care sunt sățioase. Conține carbohidrați complecși, proteine și, desigur, multe legume. Tot ce trebuie să faceți este să adăugați măsline și sos cu miere și muștar pentru a crea preparatul perfect.", 
        image: "/images/43.jpg",
        category: "salate", 
      },
    ],
    "bauturi": [
      { 
        slug: "pumpkin-spice-latte", 
        title: "Pumpkin Spice Latte", 
        description: "Nu există altă băutură la fel de specifică pentru toamnă precum Pumpkin Spice Latte. Consistența sa cremoasă și gustul dulce cu aromă de lapte de cocos și scorțișoară sunt perfecte pentru vremea mohorâtă.", 
        image: "/images/47.jpg",
        category: "bauturi", 
      },
      { 
        slug: "smoothie-cremos-cu-banane-si-unt-de-arahide", 
        title: "Smoothie cremos cu banane si unt de arahide", 
        description: "Un smoothie este un răsfăț rapid care vă va sătura atunci când pur și simplu nu reușiți să țineți pasul cu agitația cotidiană. Această combinație perfectă, dominată de gustul untului de arahide și al bananei, ne-a cucerit încă de la prima înghițitură.", 
        image: "/images/48.jpg",
        category: "bauturi", 
      },
    ],
    "supe": [
      { 
        slug: "supa-de-dovleac",  
        title: "Supa de dovleac", 
        description: "Supa de dovleac este fantastică pentru zilele reci. Este minunată pentru a vă potoli foamea și pentru a vă încălzi. Aceasta vă va cuceri prin gustul său delicios și consistența cremoasă, ce reprezintă un contrast excelent cu semințele crocante pe care le conține.", 
        image: "/images/39.jpg",
        category: "supe", 
      },
      { 
        slug: "supa-de-pui-dulce-acrisoara", 
        title: "Supa de pui dulce-acrisoara", 
        description: "Această supă dulce-acrișoară este o necesitate pentru toți cei cărora le place mâncarea asiatică. Combinația de pui, condimente și alte ingrediente creează o armonie ideală de arome.", 
        image: "/images/40.jpg",
        category: "supe", 
      },
    ]
  };

  const uploadRecipesToFirestore = async () => {
    try {
      for (const category in recipesData) {
        const recipes = recipesData[category];
        for (const recipe of recipes) {
          await setDoc(doc(db, "recipes", recipe.slug), {
            ...recipe,
            category: category 
          });
          console.log(`Rețetă adăugată: ${recipe.title}`);
        }
      }
    } catch (error) {
      console.error("Eroare la încărcarea rețetelor:", error);
    }
  };
  
  uploadRecipesToFirestore();