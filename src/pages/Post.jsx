import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Notification from "../component/Notification";
import { Pshare, Share } from "../component/Pshare";
import Sidebar from "../component/Sidebar";
import Mobilemenu from "../component/Mobilemenu";
import Footer from "../component/Footer";
import Pcomment from "../component/Pcomment";
import { api, date } from "../Contexts";
import InnerHTML from 'dangerously-set-html-content'

function Post() {
  useEffect(() => {
    const bodyClassList = document.body.classList;
    bodyClassList.add("onItm", "onPs");
    return () => {
      bodyClassList.remove("onItm", "onPs");
    };
  }, []);
  const [postcontent, postData] = useState({ pimg: "", title: "", disc: "", content: "",createdAt:"",updatedAt:"" });
  const url = window.location.href;
  const pid = useLocation().pathname.split("/")[2];
  const navigate = useNavigate();
  const pdate = date(postcontent.createdAt , postcontent.updatedAt);

  useEffect(() => {
    const getpost = async () => {
      const response = await fetch( api+"/p/" + pid, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const errorText = await response.text();
        postData({ title: errorText });
        navigate("/error")
      } else {
        const postres = await response.json();
        postData(postres);
      }
    };
    getpost();
    console.log( "post content" +postcontent.content);

    const storedReadingTime = localStorage.getItem("readingTime");
    if (storedReadingTime) {
      document.getElementById("rdTime").innerText = storedReadingTime;
    } else if (postcontent.content) {
      const time = Math.ceil(document.getElementById("article").innerText.trim().split(/\s+/).length / 225);
      document.getElementById("rdTime").innerText = time;
      localStorage.setItem("readingTime", time);
    }
  }, [navigate, pid]);


  return (
    <>
      <div className="blogCont">
        <div className="secIn">
          <Notification />
          <div className="blogM">
            {/*[ Main content ]*/}
            <main className="blogItm mainbar">
              <div className="section" id="main-widget"><div className="widget HTML" data-version={2} id="HTML93">
                <div className="widget-content">
                  <div className="adB" data-text="Ads go here" />
                </div>
              </div><div className="widget Blog" data-version={2} id="Blog1">
                  <div className="blogPts">
                    <article id="article" className="ntry ps post">
                      <div className="brdCmb" itemScope="itemscope" itemType="https://schema.org/BreadcrumbList">
                        <div className="hm" itemProp="itemListElement" itemScope="itemscope" itemType="https://schema.org/ListItem">
                          <Link to="/" itemProp="item"><span itemProp="name">Home</span></Link>
                          <meta content={1} itemProp="position" />
                        </div>
                        <div className="lb" itemProp="itemListElement" itemScope="itemscope" itemType="https://schema.org/ListItem">
                          <Link to="/search/label/Bsc" itemProp="item"><span itemProp="name">B.Sc</span></Link>
                          <meta content={2} itemProp="position" />
                        </div>
                      </div>
                      <h1 className="pTtl aTtl sml itm">
                        <span>
                        {postcontent.title}
                        </span>
                      </h1>
                      <div className="pDesc">{postcontent.disc}</div>
                      <div className="pInf pSml ps">
                        <div className="pIm">
                          <div className="im lazy lazy loaded" data-style="background-image: url(//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9Ho1_bZ2AEcnrygrJBhFE0R-rvh6flix_59-Kltc3pCjfbW7JQ5wShJHHGZOHVDqh0QG_rYmB59_EQapncVmo4Kzrn7AnyAoU79Yn6mPj1H20fDhTK3ZW9CQr73mG7Q/w40-h40-p-k-no-nu/logo.png)" lazied="true" style={{ backgroundImage: 'url("//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9Ho1_bZ2AEcnrygrJBhFE0R-rvh6flix_59-Kltc3pCjfbW7JQ5wShJHHGZOHVDqh0QG_rYmB59_EQapncVmo4Kzrn7AnyAoU79Yn6mPj1H20fDhTK3ZW9CQr73mG7Q/w40-h40-p-k-no-nu/logo.png")' }}>
                          </div>
                        </div>
                        <div className="pNm">
                          <bdi className="nm" data-text="AgniPro" data-write="Oleh" />
                          <div className="pDr">
                            <bdi className="pDt pIn">
                              <time className="aTtmp pTtmp upd"  data-text={pdate}  title={pdate} />
                            </bdi>
                            <div className="pRd pIn"><bdi id="rdTime"></bdi> min read</div>
                          </div>
                        </div>
                        <div className="pCm">
                          <div className="pIc">
                            <label className="sh tIc" htmlFor="forShare">
                              <svg className="line" viewBox="0 0 24 24"><path d="M92.30583,264.72053a3.42745,3.42745,0,0,1-.37,1.57,3.51,3.51,0,1,1,0-3.13995A3.42751,3.42751,0,0,1,92.30583,264.72053Z" transform="translate(-83.28571 -252.73452)" /><circle cx="18.48892" cy="5.49436" r="3.51099" /><circle cx="18.48892" cy="18.50564" r="3.51099" /><line className="cls-3" x1="12.53012" x2="8.65012" y1="8.476" y2="10.416" /><line className="cls-3" x1="12.53012" x2="8.65012" y1="15.496" y2="13.556" /></svg>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="pInr">
                        <div className="pAd">
                        </div>
                        <div className="pEnt" id={postcontent._id}>
                        {!postcontent.content ? <div>Loading...<img alt="Loading..." className="imgThm lazy loaded" /></div> : <InnerHTML className="pS post-body postBody" id="postBody" html={postcontent.content} />}
                      
                          <div className="pAd">
                          </div>
                          <Pshare link={url} />
                        </div>
                      </div>
                    </article>
                    <div className="pFoot">
                      <input className="shIn fixi hidden" id="forShare" type="checkbox" />
                      <Share link={url} title={postcontent.title} img={postcontent.pimg} />
                      <div className="rPst" id="rPst">
                      </div>
                      <Pcomment />
                    </div>
                  </div>
                </div></div>
            </main>
            <Sidebar />
          </div>
          <Mobilemenu />
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Post;


