import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";

function Update() {
  const [homedata, setHomedata] = useState([]);
  const [content, setContent] = useState();

  const location = useLocation();
  const url = location.pathname.split("/")[2];
  useEffect(() => {
    const homecontent = async () => {
      const response = await fetch("http://localhost:3000/p/" + url, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
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
    fetch(`http://localhost:3000/${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
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
      <div>
        <button className="btn btn-dark" onClick={back}>Back</button>
        <button className="btn btn-dark" onClick={savePost}>
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
                width="80%"
                theme="vs-dark"
                defaultLanguage="html"
                defaultValue={content}
                onChange={handleEditorChange}
              /> 
            </div>
          </div>
        </div>
      </div>

      <span>note dont use copyright content</span>
    </>
  );
}
export default Update;
