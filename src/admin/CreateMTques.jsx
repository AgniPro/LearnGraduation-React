import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import Mobilemenu from "../component/Mobilemenu";
import { api } from "../Contexts";
import { Helmet } from "react-helmet";

function CreateMTques(props) {
  const [testName, setTestName] = useState('Test 1');
 const [questions, setQuestions] = useState("");
  
  function handleEditorChange(value, event) {
    setQuestions(value)
  }

  const handleSubmit = () => {
    const testData = {
      testName,
      questions
    };
  
    fetch(`${api}/mocktest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  }
  return (
    <>
    <Helmet>
      <title>Compose Mock Test || LearnGradution</title>
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
                        <div className="tl" data-text="Make a New Post" />
                      </div>
                      <div className="pInr">
                        <div className="pEnt" id="ID-3764233">
                          <div className="pS post-body postBody" id="postBody">
                            <button onClick={back} className="button ln" style={{ marginRight: "28px" }}>🔙</button>
                            <button className="button ln" onClick={handleSubmit}>
                              Save Post
                            </button>
                            <div className="container">
                              <div className="jumbotron centered">
                                <div className="form-group row">
                                  <div>
                                    <label htmlFor="testName" >Test Name:</label>
                                    <br />
                                    <input required className="form-control " name="testName" type="text" onChange={(e) => setTestName(e.target.value)}  />
                                    <br />
                                  </div>
                                  <Editor
                                    height="80vh"
                                    width="100%"
                                    theme="vs-dark"
                                    defaultLanguage="json"
                                    value={questions}
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

export default CreateMTques;
