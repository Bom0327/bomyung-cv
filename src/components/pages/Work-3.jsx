import React from "react";

function Work3() {
  return (
    <section>
      <div className="container-fluid">
        <div className="container">
          <h3>職務要約</h3>
          <hr />
          <p>
            新菱冷熱工業(株)　慶應義塾大学病院の改修工事にて、図面修正及び補助業務
          </p>
          <br />
          <h3>業務内容</h3>
          <hr />
          <div className="row">
            <div className="work-box col-lg-4 col-md-4">
              <img
                className="work-image"
                src="https://www.flaticon.com/svg/static/icons/svg/1207/1207271.svg"
                alt="CAD"
              />
              <h3 class="work-title">図面修正</h3>
              <p>IJCADにて設計図修正及びTfasにて施工図修正（ex.配管図作成）</p>
            </div>
            <div class="work-box col-lg-4 col-md-4">
              <img
                className="work-image"
                src="https://www.flaticon.com/svg/static/icons/svg/1875/1875723.svg"
                alt="analytics"
              />
              <h3 class="work-title">図面チェック</h3>
              <p>ガラリ風量、冷媒スケルトン、 制気口リスト等の図面チェック</p>
            </div>

            <div class="work-box col-lg-4 col-md-4">
              <img
                className="work-image"
                src="https://www.flaticon.com/svg/static/icons/svg/2610/2610605.svg"
                alt="safety"
              />
              <h3 class="work-title">安全書類</h3>
              <p>WIZDOMにて安全書類の管理及びKAENSにて日報管理</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <h3>職務要約</h3>
          <hr />
          <p>
            不二建設(株)　新築マンション（渋谷区宇田川町：ザ・パークハウス
            アーバンス渋谷）の図面作成・修正及び積算業務等
          </p>
          <br />
          <h3>業務内容</h3>
          <hr />
          <div className="row">
            <div className="work-box col-lg-4 col-md-4">
              <img
                className="work-image"
                src="https://www.flaticon.com/svg/static/icons/svg/1207/1207271.svg"
                alt="CAD"
              />
              <h3 class="work-title">図面修正・作成</h3>
              <p>
                JWCADにてトレース・設計図・施工図修正及び図面作成（壁種図、断熱計画図、外部足場解体図等）
              </p>
            </div>
            <div class="work-box col-lg-4 col-md-4">
              <img
                className="work-image"
                src="https://www.flaticon.com/svg/static/icons/svg/1875/1875723.svg"
                alt="analytics"
              />
              <h3 class="work-title">図面チェック</h3>
              <p>各種製作図内容チェック及び重ね図による整合チェック</p>
            </div>

            <div class="work-box col-lg-4 col-md-4">
              <img
                className="work-image"
                src="https://www.flaticon.com/svg/static/icons/svg/1833/1833049.svg"
                alt="estimate"
              />
              <h3 class="work-title">積算</h3>
              <p>コンクリート数量拾い、内装仕上げ数量拾い、断熱材拾い等</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work3;
