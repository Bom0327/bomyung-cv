
import React from 'react';
import anniversary from '../../images/anniversary.png';
import staySafe from '../../images/staySafe.png';

const ProjectDetails = () => {
  return (
    <div className="details">
      <div className="container-xl">
        <div className="row">


          <div className="col-lg-6 col-md-6" id="project1">
            <div className="details-wrap-right">
              <div className="details-img-container">
                <img className="details-img" src={anniversary} alt="anniversary" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 text">
            <div className="details-wrap-left">
              <div className="details-content">
                <h4>Happy Anniversary App</h4>
                <p>This is my first web application project by using react.
                   It's an anniversary app and it desplays information about couples, love stories, and a photo gallery.
                   It also counts down to the next anniversary.
                   I made this to remember my marriage and also hope that it can be an anniversary template for other couples in future.
                </p>
                <span>Project : </span>
                <a href="https://bom0327.github.io/happy-anniversary/"><i class="fas fa-link"></i> bom0327.github.io/happy-anniversary</a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6" id="project2">
            <div className="details-wrap-right">
              <div className="details-img-container">
                <img className="details-img" src={staySafe} alt="staySafe" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 text">
            <div className="details-wrap-left">
              <div className="details-content">
                <h4>Stay Safe App</h4>
                <p>COVID-19 tracker for places where my family stays.
                   It displays COVID-19 cases for the latest day, as well as historical charts. 
                   I made this app to help my family to stay up to date with latest COVID-19 situation.
                </p>
                <span>Data Sources : </span>
                <a href="https://rapidapi.com/api-sports/api/covid-193">RapidApi COVID-19</a>
                <p>(Japan prefecture data is based on public data by Johns Hopkins CSSE.)</p>
                <span>Project : </span>
                <a href="https://bom0327.github.io/staySafe-covid19/"><i class="fas fa-link"></i> bom0327.github.io/staySafe-covid19</a>

              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
};

export default ProjectDetails;
