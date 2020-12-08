import React from "react";

function Work2() {
  return (
    <section>
      <div className="container-fluid">
        <div className="container">
          <h3>職務要約</h3>
          <hr />
          <p>
            日本法人を持っていない海外店舗を日本のECサイト（主に楽天市場）へ出店させるサポート(契約サポート）及び、運営サポート
          </p>
          <br />
          <h3>業務内容</h3>
          <hr />
          <div className="row">
            <div className="work-box col-lg-4 col-md-4">
              <img
                className="work-image"
                src="https://www.flaticon.com/svg/static/icons/svg/2666/2666523.svg"
                alt="contract"
              />
              <h3 class="work-title">海外営業</h3>
              <p>
                韓国企業へDM送信及び韓国企業と楽天との打ち合わせにて契約内容を調整
              </p>
            </div>
            <div class="work-box col-lg-4 col-md-4">
              <img
                className="work-image"
                src="https://www.flaticon.com/svg/static/icons/svg/3703/3703231.svg"
                alt="analytics"
              />
              <h3 class="work-title">運営</h3>
              <p>
                RMSのデータ（アクセス数、転換率、客単価等）を分析し、売上アップのための提案及び楽天との広告調整
              </p>
            </div>

            <div class="work-box col-lg-4 col-md-4">
              <img
                className="work-image"
                src="https://www.flaticon.com/svg/static/icons/svg/3163/3163359.svg"
                alt="translation"
              />
              <h3 class="work-title">翻訳・通訳</h3>
              <p>
                「韓国語↔日本語」契約書、Webサイトのコンテンツの翻訳及び会議時の通訳
              </p>
            </div>
          </div>
          <br />
          <h3>実績</h3>
          <hr />
          <p>Vaenait Babyの売上アップ（約40万円/月→約70万円/月）</p>
          <p>
            ①スマホTopページのリニューアル　②配送会社の変更による配送期間の短縮　③SNS活用
          </p>
        </div>
      </div>
    </section>
  );
}

export default Work2;
