import React from 'react';

export const Aromaterapie = () => (
  <div className="container-all">
    <div className="all-wrapper">
      <div className="all-category">
        <h1>Aromaterapie și Beneficiile Sale</h1>
        <hr className="dashed-line" />
      </div>
      <div className="all-container">
        {/* Introducere */}
        <div className="intro-section">
          <div className="intro-text">
            <div className='introducere'>Cu siguranță ai mai auzit de aromaterapie, însă te-ai întrebat vreodată în ce constă aceasta?</div>
            <b>Aromaterapia presupune utilizarea uleiurilor esențiale și a altor substanțe aromatice naturale pentru bunăstarea fizică, psihologică și spirituală.</b>
          </div>
        </div>
        <div className="aroma-title">Ce este aromaterapie?</div>
        <div className="intro-section">

          <div className="intro-image">
            <img src="https://cluj24.ro/wp-content/uploads/2024/10/poza-principala-e1727771716630.jpg" alt="Aromaterapie" />
          </div>
          <div className="intro-text">
            <div className='aroma'>Aromaterapia reprezintă o experiență senzorială sublimă, în care parfumul natural al uleiurilor esențiale se întâlnesc în armonie pentru a încânta atât mintea, cât și corpul.</div>
            <div className='aroma'>Această formă de terapie holistică îmbină arta mâinilor experte ale terapeutului cu puterea magica a aromelor, oferindu-ți un răsfăț aparte și o eliberare profundă a stresului.</div>
          </div>
        </div>
        <div className="benefits-section">
          <div className="aromas-title">Beneficiile Aromaterapiei</div>
          <ul>
            <li><b>Reducerea stresului și a anxietății</b> lavanda, bergamota - au efecte calmante, contribuind la reducerea nivelului de stres si anxietate. Inhalarea acestor arome poate stimula productia de serotonina, neurotransmitator asociat cu starea de bine.</li>
            <li><b>Imbunatatirea Calitatii Somnului:</b> lavanda, lemn de trandafir si eucalipt - aceste uleiuri esentiale pot favoriza un somn odihnitor. Adauga cateva picaturi in difuzor sau aplica pe perna inainte de culcare pentru un efect relaxant.</li>
            <li><b>Stimularea Concentratiei si a Energiei:</b> menta, lamaie si rozmarin - sunt cateva dintre uleiurile ce pot contribui la cresterea nivelului de energie si a concentrarii. Foloseste aceste arome in timpul activitatilor care necesita focus si atentie sporita.</li>
            <li><b>Reducerea Durerilor si Disconfortului:</b> ghimbirul si tea tree pot avea efecte antiinflamatorii si analgezice. Adauga-le in uleiuri de masaj sau aplica-le diluate direct pe zonele afectate pentru un relief localizat.</li>
            <li><b>Imbunatatirea Starii Emotionale:</b> lavanda, ylang-ylang, bergamonta, menta. Crearea unei rutine de aromaterapie poate contribui la gestionarea emotiilor si la imbunatatirea starii generale de bine.</li>
            <li><b>Sprijin pentru Sistemul Respirator:</b> eucalipt, menta, tea tree sunt uleiuri care au proprietati expectorante si antivirale.</li>
            <li><b>Echilibrarea Energiei Vitale:</b> lamaie, busuioc, rozmarin, menta - utilizarea acestor uleiuri esentiale in meditatii sau ritualuri poate sustine armonizarea energiei.</li>
            <li><b>Imbunatatirea functiei sistemului imunitar:</b> Unele uleiuri esentiale, cum ar fi eucaliptul, cimbrul sau tea tree, au proprietati antimicrobiene si antiinflamatorii care pot ajuta la stimularea sistemului imunitar si la combaterea infectiilor.</li>
          </ul>
        </div> 
        <div className="essential-oils-section">
          <div className="aromas-title">Uleiuri Esentiale Populare</div>
          <div className="oil-container">
            <div className="oil-item">
              <div className='oil-title'>Lavandă</div>
              <p>Este ideal pentru persoanele ce au nevoie de relaxare, reducând anxietatea. Acesta este indicat pentru îngrijirea pielii în general, reducând mâncărimea, chiar și în cazul înțepăturilor de insecte.</p>
            </div>
            <div className="oil-item">
              <div className='oil-title'>Mentă</div>
              <p>Contribuie activ la reducerea durerilor de cap și a migrenelor, are efect energizant și antispasmodic, elimină oboseala.</p>
            </div>
            <div className="oil-item">
              <div className='oil-title'>Eucalipt</div>
              <p>Este potrivit pentru a fi folosit în sezonul răcelilor, are rol expectorant și decongestionant. Printre beneficiile uleiului de eucalipt se numără și acela de energizare. </p>
            </div>
            <div className="oil-item">
              <div className='oil-title'>Lămâie</div>
              <p>Are efect antimicrobian, antioxidant, reduce stresul, îmbunătățește imunitatea. Este ideal pentru împrospătarea lucrurilor din interiorul casei, având un miros extrem de plăcut și proaspăt. </p>
            </div>
            <div className="oil-item">
              <div className='oil-title'>Mandarin</div>
              <p>Acesta este folosit pentru a induce o stare de calmitate, are un miros plăcut, energizant. </p>
            </div>
            <div className="oil-item">
              <div className='oil-title'>Rozmarin</div>
              <p>Beneficiile uleiului esențial de rozmarin sunt multiple, acesta fiind folosit mai ales de către persoanele care se confruntă cu o congestie respiratorie, bronșită, răceli, îmbunătățind sistemul circulator.</p>
            </div>
          </div>
        </div>
        <div className="modalitati-section">
          <div className="aromas-title">Modalitati de Utilizare</div>
          <ul>
            <li><b>Inhalare:</b> Inhalarea directa a uleiurilor esentiale din flacon sau de pe o bucata de tesatura poate fi utila pentru a beneficia rapid de proprietatile lor. De asemenea, se pot adauga cateva picaturi de ulei esential intr-un lighean cu apa fierbinte si inhalati vaporii.</li>
            <li><b>Masaj:</b> Uleiurile esentiale pot fi diluate intr-un ulei purtator, cum ar fi uleiul de cocos sau uleiul de migdale dulci si apoi utilizate pentru masaj. Aceasta este o modalitate eficienta de a permite pielii sa absoarba substantele active ale uleiului esential, oferind in acelasi timp beneficii terapeutice.</li>
            <li><b>Băi aromatice:</b> Adaugarea catorva picaturi de ulei esential in apa de baie poate oferi o experienta relaxanta si revigoranta. Uleiurile esentiale se vor dispersa in apa si vor fi absorbite prin piele si inhalate in timpul baii.</li>
            <li><b>Difuzare în aer:</b> Una dintre cele mai populare modalitati de utilizare a uleiurilor esentiale este difuzarea lor in aer folosind un difuzor special pentru aromaterapie. Acest proces implica dispersarea particulelor de ulei esential in aer, ceea ce permite inhalarea lor pentru a influenta starea de spirit si sanatatea.</li>
            <li><b>Comprese:</b> Uleiurile esentiale pot fi adaugate in apa calda si folosite pentru a face comprese in scopul tratarii diverselor afectiuni, cum ar fi durerile musculare sau inflamatiile locale.</li>
           </ul>
        </div>
        <div className="sfaturi-section">
          <div className="aromas-title">Sfaturi pentru utilizarea uleiurilor esentiale</div>
          <ul>
            <div className='sfaturi'>Uleiurile esentiale sunt substante concentrate care provin din natura si aparent sunt sigure, dar atunci cand nu sunt folosite corect pot produce daune pielii. Iata cateva sfaturi pentru a le utiliza in siguranta:</div>
            <li>Intotdeauna dilueaza uleiurile esentiale inainte de a le aplica pe piele. Acest lucru presupune amestecarea unui ulei esential cu o alta substanta, cum ar fi un ulei purtator sau o lotiune fara parfum.</li>
           <li>Nu aplica niciodata ulei esential direct pe piele din recipient si evita adaugarea directa a picaturilor in apa de imbaiere.</li>
           <li>Nu depozita sau utiliza uleiurile esentiale in apropierea flacarilor deschise, deoarece acestea sunt inflamabile. </li>
           <li>Pastreaza uleiurile esentiale departe de copii si animale de companie, deoarece aceste uleiuri sunt toxice in cantitati mari. Asigura-te ca sticlele sunt bine inchise si depoziteaza-le intr-un loc inaccesibil copiilor, animalelor de companie si oricarei persoane din gospodarie care ar putea sa le confunde cu alte substante.</li>
            <li>Uleiurile de aromaterapie si alte produse sunt usor de gasit online si in magazine. Cu toate acestea, usurinta lor de acces poate sugera in mod fals ca oricine poate face aromaterapie si sa obtina aceleasi beneficii. Discuta cu un specialist inainte de a incepe o asemenea terapie,  te poate ajuta sa eviti capcanele comune. </li>
            </ul>
            </div>
      </div>
    </div>
  </div>
);

export default Aromaterapie;
