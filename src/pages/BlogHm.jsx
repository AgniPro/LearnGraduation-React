import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Mobilemenu from "../component/Mobilemenu";
import Notification from "../component/Notification";
import Sidebar from "../component/Sidebar";
import Slider from "../component/Slider";
import { Link } from "react-router-dom";
import { api, date } from "../Contexts";
import CardLoading from "../component/CardLodaing";

function BlogHm() {
  useEffect(() => {
    const bodyClassList = document.body.classList;
    bodyClassList.add('oneGrd', 'onIndx', 'onHm');
    return () => {
      bodyClassList.remove('oneGrd', 'onIndx', 'onHm');
    };
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  const [homedata, setHomedata] = useState([]);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const homecontent = async () => {
      const response = await fetch(api + "?skip=" + skip, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setIsLoading(false);
      if (!response.ok) {
        setHomedata(prevData => [...prevData, ...data]);
      } else {
        setHomedata(prevData => [...prevData, ...data]);
        if (data.length == 0) {
          document.getElementById("loadmorepost").setAttribute('data-text',"No More Post");
        }
      }
    };
    homecontent();
  }, [skip]);

  const handlescroll = () => {
    setSkip(homedata.length);
  }


  return (
    <div className="blogCont">
      <div className="secIn">
        <Notification />
        <div className="blogAd">
          <div className="section" id="horizontal-ad">
            <div className="widget HTML" data-version={2} id="HTML91">
              <Link to={"https://github.com/agnipro"} title="Hire Me">

                <div className="adB" data-text="   This MERN application is developed by AgniPro"></div>
              </Link>
            </div>
          </div>
        </div>
        <div className="blogM">
          {/*[ Main content ]*/}
          <main className="blogItm mainbar">
            <Slider />
            <div className="section" id="top-widget">
              <div className="widget HTML" data-version={2} id="HTML92">
                <div className="widget-content">
                  <div className="adB" data-text="Ads go here" />
                </div>
              </div>
              <div
                className="widget FeaturedPost"
                data-version={2}
                id="FeaturedPost1"
              >
                <h2 className="title">Pinned Post</h2>
                <div className="itemFt" role="feed">
                  <article className="itm">
                    <div className="iThmb pThmb">
                      <a
                        className="thmb"
                        href="https://learngraduation.blogspot.com/2023/04/boolean-algebra-notes-pdf-download.html"
                      >
                        <img
                          alt="Boolean Algebra Notes PDF 📑 Download"
                          className="imgThm lazy loaded"
                          data-src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUL77Rz203doYBEbISo2tXJp7ssL_-OinAuzqO2aTZcpt9Gnnxi_s39hmK3Zs26IR95LUc4T5Mn1glCefGwakqcm8fVoPjRcCMmXk5z385wsM206Kfj87s3h8qxuGYT5KPWsQ9YAvkgc_GXqFQYC2v_9bw2rIQbxSDy1QitbWkbxMOg1hYLJYW9Ve2/w600-h300-p-k-no-nu/Boolean%20Algebra.png"
                          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUL77Rz203doYBEbISo2tXJp7ssL_-OinAuzqO2aTZcpt9Gnnxi_s39hmK3Zs26IR95LUc4T5Mn1glCefGwakqcm8fVoPjRcCMmXk5z385wsM206Kfj87s3h8qxuGYT5KPWsQ9YAvkgc_GXqFQYC2v_9bw2rIQbxSDy1QitbWkbxMOg1hYLJYW9Ve2/w600-h300-p-k-no-nu/Boolean%20Algebra.png"
                          lazied="true"
                        />
                      </a>
                    </div>
                    <div className="iCtnt">
                      <div className="pHdr pSml">
                        <div className="pLbls" data-text="in">
                          <a
                            aria-label="Bsc"
                            data-text="Bsc"
                            href="https://learngraduation.blogspot.com/search/label/Bsc"
                            rel="tag"
                          ></a>
                          <a
                            aria-label="Mathematics"
                            data-text="Mathematics"
                            href="https://learngraduation.blogspot.com/search/label/Mathematics"
                            rel="tag"
                          ></a>
                        </div>
                      </div>
                      <h3 className="pTtl aTtl">
                        <a href="https://learngraduation.blogspot.com/2023/04/boolean-algebra-notes-pdf-download.html">
                          Boolean Algebra Notes PDF 📑 Download
                        </a>
                      </h3>
                      <div className="pSnpt">
                        Boolean Algebra Boolean algebra is the category of
                        algebra in which the variable’s values are the
                        truth values, true and false, ordinarily den…
                      </div>
                      <div className="pInf pSml">
                        <time
                          className="aTtmp pTtmp pbl"
                          data-text
                          title="Published:"
                        />
                        <a
                          aria-label="Read more"
                          className="pJmp"
                          data-text="Keep reading"
                          href="https://learngraduation.blogspot.com/2023/04/boolean-algebra-notes-pdf-download.html"
                        />
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="section" id="main-widget">
              <div className="widget HTML" data-version={2} id="HTML93">
                <div className="widget-content">
                  <div className="adB" data-text="Ads go here" />
                </div>
              </div>
              <div className="widget Blog" data-version={2} id="Blog1">
                <div className="blogTtl hm">
                  <h3 className="title">Latest Posts</h3>
                </div>
                {isLoading ? <CardLoading /> : <>

                  <div className="blogPts">
                    {homedata?.map((item) => (
                      <article key={item.url} className="ntry">
                        <div className="pThmb">
                          <Link className="thmb" to={"/p/" + item.url} >
                            <img alt={item.title} className="imgThm lazy loaded" data-src={item.pimg} src={item.pimg} lazied="true" />
                          </Link>
                          <div className="iFxd">
                            <a aria-label="Comments" className="cmnt" data-text="2" href="https://learngraduation.blogspot.com/fgh" role="button">
                              <svg className="line" viewBox="0 0 24 24"><g transform="translate(2.000000, 2.000000)"><path d="M17.0710351,17.0698449 C14.0159481,20.1263505 9.48959549,20.7867004 5.78630747,19.074012 C5.23960769,18.8538953 1.70113357,19.8338667 0.933341969,19.0669763 C0.165550368,18.2990808 1.14639409,14.7601278 0.926307229,14.213354 C-0.787154393,10.5105699 -0.125888852,5.98259958 2.93020311,2.9270991 C6.83146881,-0.9756997 13.1697694,-0.9756997 17.0710351,2.9270991 C20.9803405,6.8359285 20.9723008,13.1680512 17.0710351,17.0698449 Z"></path></g></svg>
                            </a>
                          </div>
                        </div>
                        <div className="pCntn">
                          <div className="pHdr pSml">
                            <div className="pLbls" data-text="in">
                              <Link aria-label="Bsc" data-text="Bsc" to={"https://learngraduation.blogspot.com/search/label/Bsc"} rel="tag">
                              </Link>
                              <Link aria-label="Mathematics" data-text="Mathematics" to="https://learngraduation.blogspot.com/search/label/Mathematics" rel="tag">
                              </Link>
                            </div>
                          </div>
                          <h2 className="pTtl aTtl sml">
                            <Link data-text={item.title} to={"/p/" + item.url} rel="bookmark">
                              {item.title}
                            </Link>
                          </h2>
                          <div className="pSnpt">
                            {item.disc}
                          </div>
                          <div className="pInf pSml">
                            <time className="aTtmp pTtmp pbl" data-text={date(item.createdAt, item.updatedAt)} title={date(item.createdAt, item.updatedAt)} />
                            <Link aria-label="Read more" className="pJmp" data-text="Keep reading" to={"/p/" + item.url}></Link>
                          </div>
                        </div>
                      </article>
                    ))}

                  </div>
                  <div className="blogPg" id="blogPager"><button aria-label="Load more posts" id="loadmorepost" className="jsLd" data-text="Load more posts" onClick={handlescroll} /></div>
                </>}
              </div>
            </div>
            {/* post add */}
            <div className="section" id="add-widget">
              <div className="widget HTML" data-version={2} id="HTML94">
                <div className="widget-content">
                  <div className="adB" data-text="Ads go here" />
                </div>
              </div>
            </div>
          </main>
          <Sidebar />
        </div>
        <Mobilemenu />
        <Footer />
      </div>
    </div>
  );
}
export default BlogHm;