import React from "react";
import me from '../../images/me-img.jpg';

function About() {
  return (
    <div className="about">
      <div className="container-xl">
        <div className="row">

          <div className="col-lg-6 col-md-6">
            <div className="about-wrap left">
              <div className="about-img-container">
                <img className="about-img" src={me} alt="me" />
              </div>
              <div className="about-content-left">
                <p>
                  はじめまして。私は韓国の釜山で生まれ2009年に父の仕事がきっかけで日本に来ました。
                  その後、日本で大学を卒業し社会人としてお仕事をしてきました。
                  最近はオンラインでWeb開発の授業を受講し、Webアプリの作成に没頭しています。
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="about-wrap right">
              <h2 className="education-title">
                <i className="fas fa-graduation-cap"></i> Education
              </h2>
              
              <div className="about-content-right">
                <div class="timeline">
                  <div class="container-right">
                    <div class="content">
                      <p class="date">2009/4 ~ 2011/3</p>
                      <p>九州英数学館 日本語学校</p>
                      <p>日本語能力試験 N1（2010/12）</p>
                    </div>
                  </div>

                  <div class="container-right">
                    <div class="content">
                      <p class="date">2011/4 ~ 2015/3</p>
                      <p>名古屋工業大学</p>
                      <p>生命物質工学科 人工タンパク質専攻</p>
                    </div>
                  </div>

                  <div class="container-right">
                    <div class="content">
                      <p class="date">2015/4 ~ 2015/9</p>
                      <p>Ascend Education Centre Singapore</p>
                      <p>General English Course - Intermediate</p>
                    </div>
                  </div>

                  <div class="container-right">
                    <div class="content">
                      <p class="date">2020/7 ~ Present</p>
                      <p>The Complete 2020 Web Development Bootcamp</p>
                      <p>The Complete React Native + Hooks Course</p>
                      <p>Free Code Camp</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;