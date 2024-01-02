import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Mobilemenu from "../component/Mobilemenu";
import Footer from "../component/Footer";
import Notification from "../component/Notification";
import { api } from "../Contexts";
function AllMockTest() {
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
      const response = await fetch(`${api}/mocktest`, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        setResults({ testName: "No Search Result Found" });
      } else {
        setResults(prevData => [...prevData, ...data]);
        if (data.length == 0) {
          document.getElementById("searchloadmore").setAttribute('data-text', "No More Post");
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
                      <span data-text="All Mock Test:"></span>
                    </div>
                  </div>
                  <div className="blogPts">
                    {results.map((item) => (
                      <article key={item.testName} className="ntry noThmb">
                        <div className="pThmb">
                          <Link className="thmb" to={"/mocktest/" + item.testName}>
                            <img className="imgThm lazy loaded" data-src="https://analystprep.com/blog/wp-content/uploads/2018/09/exam-1024x683.jpg" src="https://analystprep.com/blog/wp-content/uploads/2018/09/exam-1024x683.jpg" alt="MockTest" lazied="true" />
                          </Link>
                        </div>
                        <div className="pCntn">
                          <div className="pHdr pSml">
                            <div className="pLbls" data-text="in">
                              <Link aria-label=" Previous Year" data-text=" Previous Year" to={"/mocktest/"} rel="tag">
                              </Link>
                            </div>
                          </div>
                          <h2 className="pTtl aTtl sml">
                            <Link data-text={item.testName} to={"/mocktest/" + item.testName} rel="bookmark">{item.testName} </Link>
                          </h2>
                          <div className="pSnpt">
                            "previous year question paper of {item.testName}"
                          </div>
                          <div className="pInf pSml">
                            <Link aria-label="Read more" className="pJmp" data-text="Keep reading" to={"/mocktest/" + item.testName}></Link>
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
export default AllMockTest;










