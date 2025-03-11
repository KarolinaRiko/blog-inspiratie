import React from "react";
import { NavLink } from "react-router-dom";

const Recipes = () => {
  return (
    <div className="container-all">
      <div className="all-wrapper">
        <div className="all-category">
          <h1>Toate categoriile</h1>
          <hr className="dashed-line" />
        </div>
        <div className="all-container">
          <div className="all-card">
            <NavLink to="/recipes/supe" className="all-title">
              <img
                src="https://media.istockphoto.com/id/595734992/ro/fotografie/varietate-de-supe-garnisite-%C3%AEn-boluri-colorate.jpg?s=612x612&w=0&k=20&c=2R5vcLgpAsnNesAWF99xSrYsOc_G3sQuTv2ZxfszoVc="
                alt="Supe"
                className="all-image"
              />
            </NavLink>
            <div className="all-info">
              <h2>
                <NavLink to="/recipes/supe" className="all-title">
                  Supe
                </NavLink>
              </h2>
              <div className="all-subtitle">
                <p>Încălzește-te cu supe cremoase sau clare, pline de arome și beneficii, care îți vor hrăni corpul și sufletul, ideale pentru zilele mai răcoroase sau ca mic dejun reconfortant.</p>
              </div>
            </div>
            <NavLink to="/recipes/supe">
              <button className="read-more-button">CITESTE...</button>
            </NavLink>
          </div>
          <div className="all-card">
            <NavLink to="/recipes/deserturi" className="all-title">
              <img
                src="https://mediacdn.libertatea.ro/unsafe/1260x708/smart/filters:format(webp):contrast(8):quality(75)/https://static4.libertatea.ro/wp-content/uploads/2020/12/prajituri-desert-revelion.jpg"
                alt="Deserturi"
                className="all-image"
              />
            </NavLink>
            <div className="all-info">
              <h2>
                <NavLink to="/recipes/deserturi" className="all-title">
                  Deserturi
                </NavLink>
              </h2>
              <div className="all-subtitle">
                <p>Delicii dulci care îți vor satisface pofta fără a compromite sănătatea - deserturi sănătoase, dar savuroase, care pot face orice masă mai specială.</p>
              </div>
            </div>
            <NavLink to="/recipes/deserturi">
              <button className="read-more-button">CITESTE...</button>
            </NavLink>
          </div>
          <div className="all-card">
            <NavLink to="/recipes/bauturi" className="all-title">
              <img
                src="https://www.arctic.ro/blog/wp-content/uploads/2017/11/shutterstock_568166740-1.jpg"
                alt="Băuturi"
                className="all-image"
              />
            </NavLink>
            <div className="all-info">
              <h2>
                <NavLink to="/recipes/bauturi" className="all-title">
                  Bauturi
                </NavLink>
              </h2>
              <div className="all-subtitle">
                <p>Răcorește-ți ziua cu băuturi fresh, sănătoase și revitalizante, pline de vitamine și antioxidanți, care te vor energiza și hidrata natural.</p>
              </div>
            </div>
            <NavLink to="/recipes/bauturi">
              <button className="read-more-button">CITESTE...</button>
            </NavLink>
          </div>
          <div className="all-card">
            <NavLink to="/recipes/feluri-principale" className="all-title">
              <img
                src="https://mediacdn.libertatea.ro/unsafe/1260x708/smart/filters:format(webp):contrast(8):quality(75)/https://static4.libertatea.ro/wp-content/uploads/2021/12/meniu-pentru-masa-de-craciun--idei-de-aperitive-feluri-principale-si-deserturi-scaled.jpeg"
                alt="Feluri principale"
                className="all-image"
              />
            </NavLink>
            <div className="all-info">
              <h2>
                <NavLink to="/recipes/feluri-principale" className="all-title">
                  Feluri principale
                </NavLink>
              </h2>
              <div className="all-subtitle">
                <p>Gătește feluri principale savuroase, pline de ingrediente naturale, care nu doar că te vor sătura, dar îți vor furniza și energia necesară pentru a face față zilei cu vitalitate.</p>
              </div>
            </div>
            <NavLink to="/recipes/feluri-principale">
              <button className="read-more-button">CITESTE...</button>
            </NavLink>
          </div>
          <div className="all-card">
            <NavLink to="/recipes/salate" className="all-title">
              <img
                src="https://imageproxy.wolt.com/venue/62b9a7e68c2af9380940486b/171a870e-fc26-11ec-a326-e69904a165c0_list_photo_3.jpg"
                alt="Salate"
                className="all-image"
              />
            </NavLink>
            <div className="all-info">
              <h2>
                <NavLink to="/recipes/salate" className="all-title">
                  Salate
                </NavLink>
              </h2>
              <div className="all-subtitle">
                <p>Găsește inspirație în salate crocante și colorate, perfect echilibrate între legume proaspete, proteine și dressinguri gustoase, ideale pentru o masă sănătoasă sau un aperitiv ușor.</p>
              </div>
            </div>
            <NavLink to="/recipes/salate">
              <button className="read-more-button">CITESTE...</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
