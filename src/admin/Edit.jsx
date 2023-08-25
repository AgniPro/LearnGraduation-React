import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import Mobilemenu from "../component/Mobilemenu";
import { api } from "../Contexts";

function Edit(props) {
  const [homedata, setHomedata] = useState([]);
  const [content, setContent] = useState();
  const location = useLocation();
  const url = location.pathname.split("/")[2];
  useEffect(() => {
    const homecontent = async () => {
      const response = await fetch(api+"/p/" + url, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await response.json();
      if (!response.ok) {
        setHomedata(data);
      } else {
        setHomedata(data);
        setContent(data.content);
      }
    };

    homecontent();
  }, [url]);

  function savePost() {
    let postTitle = document.getElementById("title").value;
    let postContent = content;
    let disc = document.getElementById("disc").value;
    let pimg = document.getElementById("pimg").value;
    fetch(`${api}/${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", "accessToken": props.cookies.accessToken
      },
      credentials: "include",
      body: new URLSearchParams({
        url: homedata.url,
        title: postTitle,
        disc: disc,
        pimg: pimg,
        content: postContent,
      }),
    })
      .then((response) => {
        if (response.ok) {
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        alert("Somthing Went Wrong");
        console.error(error);
      });
  }

  function handleEditorChange(value, event) {
    console.log("here is the current model value:", value);
    setContent(value)
  }

  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="blogCont">
        <div className="secIn">
          <div className="blogM">
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
                        <div className="tl" data-text="CONTACT" />
                      </div>
                      <h1 className="pTtl aTtl sml itm">
                        <span>Compose</span>
                      </h1>
                      <div className="pInr">
                        <div className="pEnt" id="postID-3760665364233">
                          <div className="pS post-body postBody" id="postBody">
                            <button className="button ln" onClick={back} style={{marginRight:"28px"}}>🔙</button>
                            <button className="button ln" onClick={savePost}>
                              Save Post
                            </button>
                            <div className="container">
                              <div className="jumbotron">
                                <i className="fas fa-key fa-6x" />
                                <h1 className="display-3">Update Post</h1>
                                <p className="secret-text">All field are Important</p>
                                <div id="url">{homedata.url}</div>
                                <div className="form-group row">
                                  <label htmlFor="title">Title:</label>
                                  <br />
                                  <input
                                    required
                                    className="form-control form-control-lg "
                                    type="text"
                                    id="title"
                                    defaultValue={homedata.title}
                                  />
                                  <br />
                                  <br />
                                  <label htmlFor="disc">Disc:</label>
                                  <br />
                                  <input
                                    required
                                    className="form-control "
                                    type="text"
                                    id="disc"
                                    defaultValue={homedata.disc}
                                  />
                                  <br />
                                  <br />
                                  <label htmlFor="pimg">Thumbnail:</label>
                                  <br />
                                  <input
                                    required
                                    className="form-control"
                                    type="text"
                                    id="pimg"
                                    defaultValue={homedata.pimg}
                                  />
                                  <br />
                                  <br />
                                  <label htmlFor="editor">Content:</label>
                                  <br />
                                  <Editor
                                    height="80vh"
                                    width="100%"
                                    theme="vs-dark"
                                    defaultLanguage="html"
                                    defaultValue={content}
                                    onChange={handleEditorChange}
                                  />
                                </div>
                              </div>
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
        </div>
      </div>

    </>
  );
}
export default Edit;
