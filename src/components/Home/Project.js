import React from 'react';
import anniversary from '../../images/anniversary.png';
import staySafe from '../../images/staySafe.png';
import next from '../../images/next.jpg';

const Project = () => {
  return (
    <div className="project">
      <div className="container">
        <div className="project-title">
          <h2>My Projects</h2>
        </div>

        <div className="project-wrap">
          <div className="row">

            <div className="col-lg-4 col-md-6 project-col">
              <div className="project-item">
                <img className="project-img" src={anniversary} alt="anniversary" />
                <div className="project-text">
                  <h4>Anniversary app</h4>
                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-6 project-col">
              <div className="project-item">
                <img className="project-img" src={staySafe} alt="staySafe" />
                <div className="project-text">
                  <h4>Stay Safe app</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 project-col">
              <div className="project-item">
                <img className="project-img" src={next} alt="next" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
};

export default Project;






