import React from 'react';
import deathstranding from '../assets/deathstranding.jpg';
import farmingsimulator from '../assets/farmingsimulator.jpg';
import mecharmada from "../assets/mecharmada.jpg";
import planetcrafter from '../assets/planetcrafter.jpg';
import planetside from '../assets/planetside.jpg';
import pubg from '../assets/pubg.jpg';
import rdr2 from '../assets/rdr2.jpg';
import thehunter from '../assets/thehunter.jpg';
import twohospital from '../assets/twohospital.jpg';
import wartales from '../assets/wartales.jpg'




const Carrusel = () => {


  return (
    <div>
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" className="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
          <li data-target="#carousel" data-slide-to="3"></li>
          <li data-target="#carousel" data-slide-to="4"></li>
          <li data-target="#carousel" data-slide-to="5"></li>
          <li data-target="#carousel" data-slide-to="6"></li>
          <li data-target="#carousel" data-slide-to="7"></li>
          <li data-target="#carousel" data-slide-to="8"></li>
          <li data-target="#carousel" data-slide-to="9"></li>


        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="100000">
            <img className="img-thumbnail d-block mx-auto" src={deathstranding} alt="First slide" style={{ height: 400 }} />
          </div>
          <div className="carousel-item">
            <img className="img-thumbnail d-block mx-auto" src={farmingsimulator} alt="Second slide" style={{ height: 400 }} />
          </div>
          <div className="carousel-item">
            <img className="img-thumbnail d-block mx-auto" src={mecharmada} alt="Third slide" style={{ height: 400 }} />
          </div>
          <div className="carousel-item">
            <img className="img-thumbnail d-block mx-auto" src={planetcrafter} alt="Fourth slide" style={{ height: 400 }} />
          </div>
          <div className="carousel-item">
            <img className="img-thumbnail d-block mx-auto" src={planetside} alt="Fifth slide" style={{ height: 400 }} />
          </div>
          <div className="carousel-item">
            <img className="img-thumbnail d-block mx-auto" src={pubg} alt="Sixth slide" style={{ height: 400 }} />
          </div>
          <div className="carousel-item">
            <img className="img-thumbnail d-block mx-auto" src={rdr2} alt="Seventh slide" style={{ height: 400 }} />
          </div>
          <div className="carousel-item">
            <img className="img-thumbnail d-block mx-auto" src={thehunter} alt="Eighth slide" style={{ height: 400 }} />
          </div>
          <div className="carousel-item">
            <img className="img-thumbnail d-block mx-auto" src={twohospital} alt="Ninth slide" style={{ height: 400 }} />
          </div>
          <div className="carousel-item">
            <img className="img-thumbnail d-block mx-auto" src={wartales} alt="Tenth slide" style={{ height: 400 }} />
          </div>

        </div>
        <a className="carousel-control-prev" href="#carousel" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#carousel" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  )
}

export default Carrusel 