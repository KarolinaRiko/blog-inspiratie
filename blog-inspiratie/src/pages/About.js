import React from "react";
import "../App.css"; // Asigură-te că acest import există

const About = () => {
  return (
    <div className="container-all">
      <div className="all-wrapper">
        <div className="all-category">
          <h1>About</h1>
          <hr className="dashed-line" />
        </div>
        <div className="all-container">


          <h1 className="about-title">Bun venit pe <span className="highlight">Inspiratie!</span></h1>
          <div className="about-header">
            <div className="about-text">
              <p>Salut prietene!</p>
              <p>Inspiratie - un blog, pe care imi arat pasiunile mele. Impartasesc viata mea mai echilibrata, mai sanatoasa si mai implinita, in care fiecare pas conteaza.</p>
              <p>Nu am un plan perfect, dar invat din fiecare experienta si să ma bucur din toata inima de ceea ce fac. Sper ca si tu, citind acest blog, iti doresti sa evoluezi pas cu pas. Imi place foarte mult sa cred ca fiecare dintre noi poate face mici schimbari care, pe termen lung, duc la o viata mai implinita.</p>
              <p>Iti doresc succes la vizionarea blogului meu si o viata mai implinita.</p>
            </div>
            <img
              src="https://sun9-45.userapi.com/impg/eJbTp_cK9Sgry9bekNt9loaJAq46cPlAD9sQrw/H-jA_BwObV8.jpg?size=1440x1440&quality=95&sign=cbf7dbda0bd6389e92ba9831db69eef1&type=album"
              alt="Descrierea imaginii"
              className="about-image"
            />
          </div>
          <div className="about-content">
            <h2>Ce vei gasi aici?</h2>
            <ul>
              <li>Recomandari de carti</li>
              <li>Idei pentru antrenamente interesante</li>
              <li>Retete sanatoase si delicioase</li>
              <li>Cunoasterea partii de spiritualitate</li>
            </ul>

            <h2>Conecteaza-te cu Inspiratie</h2>
            <ul>
              <li><strong>Citeste blogul:</strong>&nbsp;Vezi articolele postate de mine.</li>
              <li><strong>Aboneaza-te la Newsletter:</strong>&nbsp;Primești sfaturi utile și pline de inspirație.</li>
              <li><strong>Alatura-te de Inspiratie:</strong>&nbsp;Hai să cream împreună o viață mai împlinită!</li>
            </ul>

            <h2>Despre mine</h2>
            <p>
              Ma numesc Karolina. Si sunt pasionata de dezvoltarea personala, sunt pe cale de a evolua cat mai mult.
              Momentan sunt studenta la informatica, dar sunt deschisa sa explor si alte directii ale vietii mele.
              De asemenea ador sa gatesc mancare cat gustoasa atat si sanatoasa, iubesc mult sa citesc carti, ador sportul si de asemenea recent am inceput sa ma interesez de partea spirituala.
              Sunt deschisa sa evoluez cat mai mult, si in acest blog o sa-mi impartasesc o bucatica mica din viata mea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
