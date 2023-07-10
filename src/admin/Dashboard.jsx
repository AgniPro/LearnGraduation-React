import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Mobilemenu from "../component/Mobilemenu";
import Notification from "../component/Notification";
import { Link, useNavigate} from "react-router-dom";

function Dashboard(props) {
  useEffect(() => {
    const bodyClassList = document.body.classList;
    bodyClassList.add("onItm", "onPg");
    return () => {
      bodyClassList.remove("onItm", "onPg");
    };
  }, []);

  const [homedata, setHomedata] = useState([]);
  const [error, setError] = useState(null);
  const api = "http://localhost:3000"
  useEffect(() => {
    const homecontent = async () => {
      const response = await fetch(`${api}/dashboard`, {
          credentials: "include",
          headers: {
              "Content-Type": "application/json","accessToken":`${sessionStorage.getItem("accessToken")}`
          },
      });
      if (response.status === 204) {
        setError("No posts found");
          console.log("No content in response");
      } else if (!response.ok) {
         setError("An error occurred");
          console.log("An error occurred:", response.status, response.statusText);
      } else {
          const data = await response.json();
          setHomedata(data);
      }
  };
  homecontent();
  
  
  }, []);

  const navigate = useNavigate();
  const compose = () => {
    navigate("/compose");
  };
  const handleDelete = async (itemUrl) => {
    const response = await fetch(`${api}/${itemUrl}`, {
      method: 'DELETE',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      // handle successful deletion
    } else {
      // handle error
    }
  }

  return (
    <>
      <div className="blogCont">
        <div className="secIn">
          <Notification />
          {/*[ Ad content ]*/}
          <div className="blogAd">
            <div className="section" id="horizontal-ad">
              <div className="widget HTML" data-version={2} id="HTML91">
                <div className="adB" data-text="Ads go here" />
              </div>
            </div>
          </div>
          <div className="blogM">
            {/*[ Main content ]*/}
            <main className="blogItm mainbar">
              <div className="section" id="main-widget">
                <div className="widget Blog" data-version={2} id="Blog1">
                  <div className="blogPts">
                    <article className="ntry ps post">
                      <div
                        className="brdCmb"
                        itemScope="itemscope"
                        itemType="https://schema.org/BreadcrumbList"
                      >
                        <div
                          className="hm"
                          itemProp="itemListElement"
                          itemScope="itemscope"
                          itemType="https://schema.org/ListItem"
                        >
                          <a
                            href="https://learngraduation.blogspot.com/"
                            itemProp="item"
                          >
                            <span itemProp="name">Home</span>
                          </a>
                          <meta content={1} itemProp="position" />
                        </div>
                        <div className="tl" data-text="Dashboard" />
                      </div>
                      <h1 className="pTtl aTtl sml itm">
                        <span>Dashboard</span>
                      </h1>
                      <div className="pInr">
                        <div className="pEnt" id="post376066536486708">
                          <div className="pS post-body postBody" id="postBody">
                          <button onClick={compose}>Compose</button>
      {error && <div className="error">{error}</div>}
      <div className="homecontent">
        {homedata.map((item) => (
          <div key={item._id} className="post">
            <button
              onClick={() => handleDelete(item.url)}
              className="btn btn-dark"
            >
              🗑️
            </button>

            <Link  to={"/update/" + item.url}>
              <div className="imgcn">
                <img src={item.pimg} alt={item.title} className="postImg" />
              </div>
              <h1 className="postTitle">{item.title}</h1>
              <p className="postDesc">{item.disc}</p>
            </Link>
          </div>
        ))}
      </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <Mobilemenu />
          <Footer />
        </div>
      </div>

    </>
  );
}
export default Dashboard;


