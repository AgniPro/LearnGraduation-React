import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Mobilemenu from "../component/Mobilemenu";
import { Link, useNavigate } from "react-router-dom";
import { api, date } from "../Contexts";

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
  useEffect(() => {
    homecontent();
  }, []);

  const homecontent = async () => {
    const response = await fetch(`${api}/dashboard`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json", "accessToken": props.cookies.accessToken
      },
    });
    if (response.status === 204) {
      setError("No posts found");
    } else if (!response.ok) {
      setError("An error occurred");
    } else {
      const data = await response.json();
      setHomedata(data);
    }
  };
  const navigate = useNavigate();
  const compose = () => {
    navigate("/compose");
  };
  const back = () => {
    navigate(-1);
  };
  const handleDelete = async (itemUrl) => {
    const response = await fetch(`${api}/${itemUrl}`, {
      method: 'DELETE',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json', "accessToken": props.cookies.accessToken
      }
    });
    if (response.ok) {
      homecontent();
      props.setMessage("Deleted")
      props.setstatusCode(response.status)
    } else {
      props.setMessage("Somthing Went Wrong on Deleating")
      props.setstatusCode(response.status)
    }
  }

  return (
    <>
      <div className="blogCont">
        <div className="secIn">
          <div className="blogM">
            <main className="blogItm mainbar">
              <div className="section" id="main-widget">
                <div className="widget Blog" data-version={2} id="Blog1">
                  <div className="blogPts">
                    <h1 className="pTtl aTtl sml itm">
                      <span>Dashboard</span>
                    </h1>
                    <button onClick={back} className="ln button" style={{ marginRight: "28px" }}>🔙</button>
                    <button onClick={compose} className="button ln">Compose</button>

                    {error && <div className="error">{error}</div>}

                    {homedata?.map((item) => (
                      <article key={item._id} className="ntry" style={{
                        display: "flex", margin: " 28px 00 28px"
                      }}>
                        <div className="pThmb" style={{
                          borderRadius: "12px 0 0 12px",
                          marginBottom: "0"
                        }}>
                          <Link className="thmb" to={"/p/" + item.url} >
                            <img alt={item.title} className="imgThm lazy loaded" data-src={item.pimg} src={item.pimg} lazied="true" />
                          </Link>
                        </div>

                        <div className="pCntn" style={{ padding: "28px", overflow: "hidden" }}>
                          <h2 className="pTtl aTtl sml">
                            <Link data-text={item.title} to={"/p/" + item.url} rel="bookmark">
                              {item.title}
                            </Link>
                          </h2>
                          <button
                            onClick={() => handleDelete(item.url)}
                            className="button ln" style={{ marginRight: "10px" }}
                          >
                            🗑️
                          </button>

                          <Link className="button" to={"/edit/" + item.url}> 📝</Link>

                          <div className="pInf pSml">
                            <time className="aTtmp pTtmp pbl" data-text={date(item.createdAt, item.updatedAt)} title={date(item.createdAt, item.updatedAt)} />

                          </div>
                        </div>
                      </article>
                    ))}


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


