import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import Mobilemenu from "../component/Mobilemenu";
import { api } from "../Contexts";
import { Helmet } from "react-helmet";

function Edit(props) {
  const [homedata, setHomedata] = useState([]);
  const [content, setContent] = useState();
  const location = useLocation();
  const url = location.pathname.split("/")[3];
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
    let discription = document.getElementById("discription").value;
    let image = document.getElementById("image").value;
    let tags = document.getElementById("tags").value;
    let categories = document.getElementById("categories").value;

    fetch(`${api}/${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", 
        "accessToken": props.cookies.accessToken
      },
      credentials: "include",
      body: JSON.stringify({
        url: homedata.url,
        title: postTitle,
        image: image,
        discription: discription,
        content: postContent,
        categories: categories,
        tags: tags
      }),
    })
      .then((response) => {
        if (response.ok) {
          navigate("admin/dashboard");
        }
      })
      .catch((error) => {
        alert("Somthing Went Wrong");
        console.error(error);
      });
  }



  function handleEditorChange(value, event) {
    setContent(value)
  }

  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <>
    <Helmet>
      <title>Edit Post || LearnGradution</title>
     </Helmet>
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
                        <div className="pEnt" id="ID-3760665364233">
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
                                  <label htmlFor="disc">Discription:</label>
                                  <br />
                                  <input
                                    required
                                    className="form-control "
                                    type="text"
                                    id="discription"
                                    defaultValue={homedata.discription}
                                  />
                                  <br />
                                  <label htmlFor="pimg">Thumbnail:</label>
                                  <br />
                                  <input
                                    required
                                    className="form-control"
                                    type="text"
                                    id="image"
                                    defaultValue={homedata.image}
                                  />
                                  <br />
                                  <div style={{display: "flex" ,alignItems:"center"}}>
                                      <label htmlFor="categories">Categories:</label>
                                      <input type="text" className="form-control" id="categories" defaultValue={homedata.categories} name="categories" />
                                      <br />
                                      <label htmlFor="tags">Tags:</label>
                                      <input type="text" className="form-control" id="tags" defaultValue={homedata.tags} name="tags" /></div>
                                  <br />
                                  <label htmlFor="editor">Content:</label>
                                  <br />
                                  <Editor
                                    height="80vh"
                                    width="100%"
                                    theme="vs-dark"
                                    defaultLanguage="html"
                                    value={content}
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
