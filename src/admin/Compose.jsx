import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import Mobilemenu from "../component/Mobilemenu";
import { api } from "../Contexts";

function Compose(props) {
  const [content, setContent] = useState(null);

  function savePost() {
    let postTitle = document.getElementById('title').value;
    let postContent = content;
    let url = document.getElementById("url").value;
    let discription = document.getElementById("disc").value;
    let image = document.getElementById("image").value;
    let tags = document.getElementById("tags").value;
    let categories = document.getElementById("categories").value;
    if (!url) {
      alert('Please enter a URL');
      return;
    }
    fetch(api + "/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', "accessToken": props.cookies.accessToken
      },
      credentials: "include",
      body: new URLSearchParams({
        url: url,
        title: postTitle,
        discription: discription,
        image: image,
        content: postContent,
        categories: [categories],
        tags: [tags]
      })
    }).then(response => {
      if (response.ok) {
        window.location.href = '/dashboard';
      }
    }).catch(error => {
      alert("Somthing Went Wrong")
      console.error(error);
    });
  }

  function handleEditorChange(value, event) {
    setContent(value)
  }
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
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
                        <div className="tl" data-text="Make a New Post" />
                      </div>
                      <div className="pInr">
                        <div className="pEnt" id="ID-3764233">
                          <div className="pS post-body postBody" id="postBody">
                            <button onClick={back} className="button ln" style={{ marginRight: "28px" }}>🔙</button>
                            <button className="button ln" onClick={savePost}>
                              Save Post
                            </button>
                            <div className="container">
                              <div className="jumbotron centered">
                                <div className="form-group row">
                                  <div>
                                    <label htmlFor="url" >URL:</label>
                                    <br />
                                    <input required className="form-control " name="url" type="text" id="url" />
                                    <br />

                                    <label htmlFor="title">Title:</label>
                                    <br />
                                    <input
                                      required
                                      className="form-control form-control-lg "
                                      type="text"
                                      name="title"
                                      id="title"
                                    />
                                    <br />
                                    <label htmlFor="discription">Discription:</label>
                                    <br />
                                    <input required className="form-control " name="discription" type="text" id="discription" />
                                    <br />
                                    <label htmlFor="image">Thumbnail:</label>
                                    <br />
                                    <input
                                      required
                                      className="form-control"
                                      type="text"
                                      id="image"
                                      name="thumbnail"
                                      defaultValue="https://1.bp.blogspot.com/-YurRRss-7Vs/YPF73EG4oqI/AAAAAAAACrY/EwlnBWaqUXEmxfhzm2hixuCV_edgZcYkQCPcBGAYYCw/s16000/learngraduation.png"
                                    />
                                    <br />
                                    <div style={{display: "flex" ,alignItems:"center"}}>
                                      <label htmlFor="categories">Categories:</label>
                                      <input type="text" className="form-control" id="categories" name="categories" />
                                      <br />
                                      <label htmlFor="tags">Tags:</label>
                                      <input type="text" className="form-control" id="tags" name="tags" /></div>
                                    <br />
                                    <label htmlFor="editor">Content:</label>
                                    <br />
                                  </div>
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
export default Compose;
