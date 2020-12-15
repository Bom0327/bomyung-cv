import React from "react";
import { Table } from "reactstrap";

function Resume() {
  return (
    <section>
      <div className="container-fluid">
        <div className="container">
          <h2>
            <i className="fas fa-graduation-cap"></i> Education
          </h2>
          <hr />
          <Table borderless hover>
            <thead>
              <tr>
                <th>期間</th>
                <th>学歴</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2009/4 ~ 2011/3</td>
                <td>九州英数学館　日本語学校</td>
              </tr>
              <tr>
                <td>2011/4 ~ 2015/3</td>
                <td>名古屋工業大学　生命物質工学科</td>
              </tr>
              <tr>
                <td>2015/4 ~ 2015/9</td>
                <td>Ascend Education Centre Singapore</td>
              </tr>
              <tr>
                <td>2020/7 ~ Present</td>
                <td>
                  <p>The Complete 2020 Web Development Bootcamp</p>
                  <p>The Complete React Native + Hooks Course</p>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <h2>
            <i className="fas fa-archive"></i> Work Experience
          </h2>
          <hr />
          <Table borderless hover>
            <thead>
              <tr>
                <th>期間</th>
                <th>職歴</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2016/5 ~ 2017/5</td>
                <td>
                  <p>株式会社リクルートR&Dスタッヒィング</p>
                  <p>
                    ・日産自動車株式会社　技術開発アシスタントとして派遣（１年勤務）
                  </p>
                </td>
              </tr>
              <tr>
                <td>2017/7 ~ 2017/10</td>
                <td>
                  <p>株式会社ジャパンカラーズ</p>
                  <p>・マーケットプランナーとして海外営業及び運営を担当</p>
                </td>
              </tr>
              <tr>
                <td>2018/3 ~ 2020/9</td>
                <td>
                  <p>株式会社コプロ・エンジニアード</p>
                  <p>
                    ・新菱冷熱工業株式会社　CADオペレーターとして派遣（６ヶ月勤務）
                  </p>
                  <p>
                    ・不二建設株式会社　CADオペレーターとして派遣
                    （２年１ヶ月勤務）
                  </p>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <h2>
            <i class="fas fa-rocket"></i> Skills
          </h2>
          <hr />
          <h5 style={{ fontWeight: "bold" }}>一般スキル</h5>
          <ul>
            <li>PCスキル： Word, Excel, PowerPoint</li>
            <li>CAD：NX, IJCAD(AutoCAD), Tfas, JW CAD</li>
            <li>
              語学力：日本語能力試験 N1（2010年12月）, TOEIC 810点（2016年2月）,
              韓国語 native
            </li>
          </ul>
          <h5 style={{ fontWeight: "bold" }}>Web開発スキル</h5>
          <ul>
            <li>
              Front-end : HTML, CSS, Bootstrap, Javascript（jQuery, React.js）
            </li>
            <li>Back-end : Node.js (Express.js), EJS, MongoDB（Mongoose)</li>
            <li>Tools : Git, Github, npm, Bash, Heroku, Postman</li>
            <li>Other : DOM, Authentication</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
