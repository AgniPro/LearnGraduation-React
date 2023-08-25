import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, date } from "../Contexts";
import Notification from "../component/Notification";
import Footer from "../component/Footer";
import Mobilemenu from "../component/Mobilemenu";

function Search() {

  const urlParams = new URLSearchParams(window.location.search);
  const value = urlParams.get('q');
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const bodyClassList = document.body.classList;
    bodyClassList.add("oneGrd", "onIndx", "onMlt");
    return () => {
      bodyClassList.remove("oneGrd", "onIndx", "onMlt");
    };
  }, []);

  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchresult = async () => {
      const response = await fetch(`${api}/search?q=${value}&skip=${skip}`, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        setResults({ title: "No Search Result Found" });
      } else {
        setResults(prevData => [...prevData, ...data]);
        if (data.length == 0) {
          document.getElementById("searchloadmore").setAttribute('data-text',"No More Post");
        }
      }
    };
    searchresult();
  }, [skip]);
  const handlescroll = () => {
    setSkip(results.length);
  }

  return (
    <>
      <div className="blogCont">
        <div className="secIn">

          <Notification />


          <div className="blogM">

            <main className="blogItm mainbar">
              <div className="section" id="main-widget">
                <div className="widget Blog" data-version="2" id="Blog1">
                  <div className="blogTtl">
                    <div className="t srch">
                      <span data-text="Search:"></span>
                    </div>
                  </div>
                  <div className="blogPts">
                    {results.map((item) => (
                      <article key={item._id} className="ntry noThmb">
                        <div className="pThmb">
                          <Link className="thmb" to={"/p/" + item.url}>
                            <img  className="imgThm lazy loaded" data-src={item.pimg} src={item.pimg} alt={item.title}  lazied="true"/>
                          </Link>
                        </div>
                        <div className="pCntn">
                          <div className="pHdr pSml">
                            <div className="pLbls" data-text="in">
                              <Link aria-label="Bsc" data-text="Bsc" to={"/p/" + item.url} rel="tag">
                              </Link>
                              <Link aria-label="graduation" data-text="graduation" to={"/p/" + item.url} rel="tag">
                              </Link>
                            </div>
                          </div>
                          <h2 className="pTtl aTtl sml">
                            <Link data-text={item.title} to={"/p/" + item.url} rel="bookmark">{item.title} </Link>
                          </h2>
                          <div className="pSnpt">
                          {item.disc}
                          </div>
                          <div className="pInf pSml">
                            <time className="aTtmp pTtmp pbl" data-text={date(item.createdAt, item.updatedAt)} title={date(item.createdAt, item.updatedAt)} ></time>
                            <Link aria-label="Read more" className="pJmp" data-text="Keep reading" to={"/p/" + item.url}></Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                  <div className="blogPg" id="blogPager"><a aria-label="Load more posts" id="searchloadmore" className="jsLd" data-text="Load More" onClick={handlescroll} ></a></div>
                </div>

              </div>
              <div className="section" id="add-widget"><div className="widget HTML" data-version="2" id="HTML94">
                <div className="widget-content">
                  <div className="adB" data-text="Ads go here"></div>
                </div>
              </div></div>
            </main>
          </div>
          <Mobilemenu />
          <Footer />
        </div>
      </div>

    </>
  );
}
export default Search;










