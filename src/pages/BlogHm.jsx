import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Mobilemenu from "../component/Mobilemenu";
import Notification from "../component/Notification";
import Sidebar from "../component/Sidebar";
import Slider from "../component/Slider";
import { Link } from "react-router-dom";
import { api, date } from "../Contexts";
import { CardLoading, PinndeLoading } from "../component/CardLodaing";
import Like from "../component/Like";

function BlogHm(props) {
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
          document.getElementById("loadmorepost").setAttribute('data-text', "No More Post");
        }
      }
  };
  useEffect(() => {
    homecontent();
  }, [skip]);
  const [pinnedPost, ...latestPosts] = homedata;

  const handlescroll = () => {
    setSkip(homedata.length);
  }
  const setlike = (likedPost) => {
    const useremail =props.user+"@gmail.com";
    setHomedata(prevData =>
      prevData.map(post =>
        post._id === likedPost
          ? {
              ...post,
              likes: post.likes.includes(useremail)
                ? post.likes.filter(email => email !== useremail)
                : [...post.likes, useremail],
            }
          : post
      )
    );
  };

  const { pubinfo, month, year } = date(pinnedPost?.createdAt,pinnedPost?.updatedAt);

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
                  {pinnedPost ?
                    <article key={pinnedPost._id} className="itm">
                      <div className="iThmb pThmb">
                        <Link
                          className="thmb"
                          to={"/p/" + pinnedPost.url}
                        >
                          <img
                            alt={pinnedPost.title}
                            className="imgThm lazy loaded"
                            data-src={pinnedPost.image}
                            src={pinnedPost.image}
                            lazied="true"
                          />
                        </Link>
                      </div>
                      <div className="iCtnt">
                        <div className="pHdr">
                          <div className="pLbls" data-text="in">
                            <a
                              aria-label="Bsc"
                              data-text="Bsc"
                              href="/search/label/Bsc"
                              rel="tag"
                            ></a>
                            <a
                              aria-label="Mathematics"
                              data-text="Mathematics"
                              href="/search/label/Mathematics"
                              rel="tag"
                            ></a>
                          </div>
                        </div>
                        <h3 className="pTtl aTtl">
                          <Link to={"/p/" + pinnedPost.url}>
                            {pinnedPost.title}
                          </Link>
                        </h3>
                        <div className="pSnpt">
                          {pinnedPost.discription}
                        </div>
                        <div className="pInf">
                          <time className="aTtmp pTtmp pbl" data-text={`${month}, ${year}`} dateTime={pinnedPost.updatedAt} title={`${pubinfo} ${month}, ${year}`}/>
                          <Link
                            aria-label="Read more"
                            className="pJmp"
                            data-text="Keep reading"
                            to={"/p/" + pinnedPost.url}
                          />
                        </div>
                      </div>
                    </article>
                    : <PinndeLoading />
                  }
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
                    {latestPosts?.map((item) => {
                      const { pubinfo, month, year } = date(item.createdAt,item.updatedAt);
                      return(
                      <article key={item._id} className="ntry">
                        <div className="pThmb">
                          <Link className="thmb" to={"/p/" + item.url} >
                            <img alt={item.title} className="imgThm lazy loaded" data-src={item.image} src={item.image} lazied="true" />
                          </Link>
                          
                          <div className="iFxd">
                          <Like postcontent={item} user={props.user} cookies={props.cookies} likeadd={() => setlike(item._id)} setstatusCode={props.setstatusCode} setMessage={props.setMessage}/>

                            {item.comments.length?
                            <Link aria-label="Comments" className="cmnt" data-text={item.comments.length} to={"/p/" + item.url+"#comments"} role="button">
                              <svg className="line" viewBox="0 0 24 24"><g transform="translate(2.000000, 2.000000)"><path d="M17.0710351,17.0698449 C14.0159481,20.1263505 9.48959549,20.7867004 5.78630747,19.074012 C5.23960769,18.8538953 1.70113357,19.8338667 0.933341969,19.0669763 C0.165550368,18.2990808 1.14639409,14.7601278 0.926307229,14.213354 C-0.787154393,10.5105699 -0.125888852,5.98259958 2.93020311,2.9270991 C6.83146881,-0.9756997 13.1697694,-0.9756997 17.0710351,2.9270991 C20.9803405,6.8359285 20.9723008,13.1680512 17.0710351,17.0698449 Z"></path></g></svg>
                            </Link> 
                            :<></>}
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
                            {item.discription}
                          </div>
                          <div className="pInf pSml">
                            <time className="aTtmp pTtmp pbl" data-text={`${month}, ${year}`} dateTime={item.updatedAt} title={`${pubinfo} ${month}, ${year}`}/>
                            <Link aria-label="Read more" className="pJmp" data-text="Keep reading" to={"/p/" + item.url}></Link>
                          </div>
                        </div>
                      </article>
                    )})}
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