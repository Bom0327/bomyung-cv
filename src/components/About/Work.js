import React from 'react'
import { makeStyles, Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const Work = () => {
  const classes = useStyles();

  return (
    <div className="work">
      <div className="container-xl">
        <div className="work-title">
          <h2>
            <i className="fas fa-archive"></i> Work Experience
          </h2>
        </div>

        <div className="work-wrap">
          <div className="row">

            <div className="col-lg-4 col-md-6 work-col">
              <div className="work-item">
                <Card>
                  <div className="work-img-container">
                    <img
                      className="work-img"
                      src="https://www.flaticon.com/svg/static/icons/svg/1909/1909779.svg"
                      alt="simulation"
                    />
                  </div>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      2016/5 ~ 2017/5
                  </Typography>
                    <Typography variant="h6" component="h2">
                      日産自動車株式会社
                 </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      技術開発アシスタント
                  </Typography>
                    <Typography variant="body2" component="p">
                      生産技術研究開発部門：接合チームで技術開発アシスタントとして業務。
                  </Typography>
                  </CardContent>
                </Card>
              </div>

            </div>


            <div className="col-lg-4 col-md-6 work-col">
              <div className="work-item">
                <Card>
                  <div className="work-img-container">
                    <img
                      className="work-img"
                      src="https://www.flaticon.com/svg/static/icons/svg/2666/2666523.svg"
                      alt="contract"
                    />
                  </div>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      2017/7 ~ 2017/10
                  </Typography>
                    <Typography variant="h6" component="h2">
                      株式会社ジャパンカラーズ
                 </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      マーケットプランナー
                  </Typography>
                    <Typography variant="body2" component="p">
                      海外店舗を日本のECサイトへ出店させるサポート及び、運営サポート
                  </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 work-col">
              <div className="work-item">
                <Card>
                  <div className="work-img-container">
                    <img
                      className="work-img"
                      src="https://www.flaticon.com/svg/static/icons/svg/1875/1875723.svg"
                      alt="analytics"
                    />
                  </div>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      2018/3 ~ 2018/8
                  </Typography>
                    <Typography variant="h6" component="h2">
                      新菱冷熱工業株式会社
                 </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      CADオペレーター
                  </Typography>
                    <Typography variant="body2" component="p">
                      慶應義塾大学病院の改修工事にて、図面修正・チェック及び補助業務
                  </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 work-col">
              <div className="work-item">
                <Card>
                  <div className="work-img-container">
                    <img
                      className="work-img"
                      src="https://www.flaticon.com/svg/static/icons/svg/1207/1207271.svg"
                      alt="CAD"
                    />
                  </div>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      2018/9 ~ 2020/9
                  </Typography>
                    <Typography variant="h6" component="h2">
                      不二建設株式会社
                 </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      CADオペレーター
                  </Typography>
                    <Typography variant="body2" component="p">
                      新築マンション（ザ・パークハウスアーバンス渋谷）の図面作成・修正及び積算業務等
                  </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
};

export default Work;










  // return (
  //   <Card className={classes.root}>

  //   </Card>
  // );
// }
