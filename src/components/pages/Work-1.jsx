import React from "react";

function Work1() {
  return (
    <section>
      <div className="container-fluid">
        <div className="container">
          <h3>職務要約</h3>
          <hr />
          <p>
            日産自動車(株)　車両生産技術本部　生産技術研究開発センター　要素技術開発グループ
          </p>
          <p>接合チームに配属し、技術開発アシスタントとして業務。</p>
          <br />
          <h3>業務内容</h3>
          <hr />
          <div className="row">
            <div className="work-box col-lg-4 col-md-4">
              <img
                className="work-image"
                src="https://www.flaticon.com/svg/static/icons/svg/1186/1186318.svg"
                alt="robot-arm"
              />
              <h3 class="work-title">CAD</h3>
              <p>
                NX(3D
                CAD)を用い工場内の実験現場にロボットアームを設置する際のレイアウトを検討
              </p>
            </div>

            <div class="work-box col-lg-4 col-md-4">
              <img
                className="work-image"
                src="https://www.flaticon.com/svg/static/icons/svg/1909/1909779.svg"
                alt="simulation"
              />
              <h3 class="work-title">CAE</h3>
              <p>
                SORPASにてアルミスポットの条件出し及びSIMUFACTにてSPRの条件出し
              </p>
            </div>

            <div class="work-box col-lg-4 col-md-4">
              <img
                className="work-image"
                src="https://www.flaticon.com/svg/static/icons/svg/3063/3063133.svg"
                alt="microscope"
              />
              <h3 class="work-title">実験結果の分析</h3>
              <p>
                光学顕微鏡でSPR、CFRP、アルミスポット、FDS、ピアスメタル等の断面測定
              </p>
            </div>
          </div>
          <br />
          <h3>実績</h3>
          <hr />
          <p>SPR条件出し部門：約80%のSPR強度向上</p>
        </div>
      </div>
    </section>
  );
}

export default Work1;
