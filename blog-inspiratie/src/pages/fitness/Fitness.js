import React from "react";
import { NavLink } from "react-router-dom";

const Fitness = () => {
  return (
    <div className="container-all">
      <div className="all-wrapper">
        <div className="all-category">
          <h1>Toate categoriile</h1>
          <hr className="dashed-line" />
        </div>
        <div className="all-container">
          <div className="all-card">
            <NavLink to="/fitness/exercitii-upper" className="all-title">
              <img
                src="https://media.istockphoto.com/id/610576810/photo/athlete-muscular-fitness-male-model-pulling-up-on-horizontal-bar.jpg?b=1&s=170667a&w=0&k=20&c=Y2EHADkccaFU1I93zAygYCzfmzg9ox-3n61U5s5RkPw="
                alt="Exercitii Upper"
                className="all-image"
              />
            </NavLink>
            <div className="all-info">
              <h2>
                <NavLink to="/fitness/exercitii-upper" className="all-title">
                  Exercitii Upper
                </NavLink>
              </h2>
              <div className="all-subtitle">
                <p>Transformă-ți brațele, umerii și pieptul cu exerciții dedicate care îți vor întări musculatura superioară, îți vor îmbunătăți postura și îți vor oferi un corp mai echilibrat.</p>
              </div>
            </div>
            <NavLink to="/fitness/exercitii-upper">
              <button className="read-more-button">TOATE...</button>
            </NavLink>
          </div>
          <div className="all-card">
            <NavLink to="/fitness/exercitii-lower" className="all-title">
              <img
                src="https://www.activ-club.ro/wp-content/uploads/2014/10/genu.jpg"
                alt="Exercitii Lower"
                className="all-image"
              />
            </NavLink>
            <div className="all-info">
              <h2>
                <NavLink to="/fitness/exercitii-lower" className="all-title">
                  Exercitii Lower
                </NavLink>
              </h2>
              <div className="all-subtitle">
                <p>Focalizează-te pe picioare și fese cu exerciții care nu doar că te vor ajuta să-ți tonifiezi musculatura inferioară, dar îți vor îmbunătăți mobilitatea și performanța generală în mișcare.</p>
              </div>
            </div>
            <NavLink to="/fitness/exercitii-lower">
              <button className="read-more-button">TOATE...</button>
            </NavLink>
          </div>
          <div className="all-card">
            <NavLink to="/fitness/apdomen" className="all-title">
              <img
                src="https://media.csid.ro/NLkal8pPiWG0IWoOauQUzbo5P_g=/930x523/smart/filters:contrast(5):format(webp):quality(80)/https%3A%2F%2Fwww.csid.ro%2Fwp-content%2Fuploads%2F2019%2F03%2F17988778%2F1-exercitii-abdomen.jpg"
                alt="Abdomen"
                className="all-image"
              />
            </NavLink>
            <div className="all-info">
              <h2>
                <NavLink to="/fitness/apdomen" className="all-title">
                  Abdomen
                </NavLink>
              </h2>
              <div className="all-subtitle">
                <p>Pentru un abdomen plat și bine definit, combină exerciții eficiente pentru mușchii abdominali cu o alimentație corectă și multă disciplină pentru rezultate durabile.</p>
              </div>
            </div>
            <NavLink to="/fitness/apdomen">
              <button className="read-more-button">TOATE...</button>
            </NavLink>
          </div>
          <div className="all-card">
            <NavLink to="/fitness/secrete-gym" className="all-title">
              <img
                src="https://st2.depositphotos.com/1017228/7108/i/450/depositphotos_71080145-stock-photo-gym-interior-with-equipment.jpg"
                alt="Secrete Gym"
                className="all-image"
              />
            </NavLink>
            <div className="all-info">
              <h2>
                <NavLink to="/fitness/secrete-gym" className="all-title">
                  Secrete Gym
                </NavLink>
              </h2>
              <div className="all-subtitle">
                <p>Află cele mai eficiente tehnici și strategii care te vor ajuta să îți depășești limitele la sală, să îți maximizezi progresul și să obții corpul dorit într-un mod mai inteligent și mai eficient.</p>
              </div>
            </div>
            <NavLink to="/fitness/secrete-gym">
              <button className="read-more-button">DETALII</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitness;
