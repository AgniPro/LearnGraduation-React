import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";

function Compose() {
  const [content, setContent] = useState();

  function savePost() {
    let postTitle = document.getElementById('title').value;
    let postContent = content;
    let url = document.getElementById("url").value;
    let disc = document.getElementById("disc").value;
    let pimg = document.getElementById("pimg").value;
    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      credentials: "include",
      body: new URLSearchParams({
        url: url,
        title: postTitle,
        disc: disc,
        pimg: pimg,
        content: postContent
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
    console.log("here is the current model value:", value);
    setContent(value)
  }
  const navigate = useNavigate();
  const back= ()=>{
    navigate(-1);
  }
  return (
    <>
    <button onClick={back}>Back</button>
      <div className="container">
        <div className="jumbotron centered">
          <i className="fas fa-key fa-6x" />
          <h1 className="display-3">Make a New Post</h1>
          <p className="secret-text">All field are Important</p>
          <div className="form-group row">
            <label htmlFor="url">URL:</label>
            <br />
            <input required className="form-control " type="text" id="url" />
            <br />
            <br />
            <label htmlFor="title">Title:</label>
            <br />
            <input
              required
              className="form-control form-control-lg "
              type="text"
              id="title"
            />
            <br />
            <br />
            <label htmlFor="disc">Disc:</label>
            <br />
            <input required className="form-control " type="text" id="disc" />
            <br />
            <br />
            <label htmlFor="pimg">Thumbnail:</label>
            <br />
            <input
              required
              className="form-control"
              type="text"
              id="pimg"
              defaultValue="https://1.bp.blogspot.com/-YurRRss-7Vs/YPF73EG4oqI/AAAAAAAACrY/EwlnBWaqUXEmxfhzm2hixuCV_edgZcYkQCPcBGAYYCw/s16000/learngraduation.png"
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
            <button className="btn btn-dark" onClick={savePost}>
              Save Post
            </button>
          </div>
        </div>
      </div>
      <span>note dont use copyright content</span>
    </>
  );
}
export default Compose;
