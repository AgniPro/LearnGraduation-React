import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import Mobilemenu from "../component/Mobilemenu";
import { Helmet } from "react-helmet";
import "../mocktest/mock-test.css";
import { api } from "../Contexts";
import Timer from "../component/MockTestTimer";

function MockTest(props) {
  const navigate = useNavigate();
  const url = window.location.href;
  const pid = useLocation().pathname.split("/")[2];
  const [apimocktest, setapimocktest] = useState({
    testName: "fetching data....",
    questions: [{}],
  });
  useEffect(() => {
    const bodyClassList = document.body.classList;
    bodyClassList.add("onItm", "onPg");
    return () => {
      bodyClassList.remove("onItm", "onPg");
    };
  }, []);

  const getmockTest = async () => {
    const response = await fetch(api + "/mocktest/" + pid, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const errorText = await response.text();
      setapimocktest({ testName: errorText });
      navigate("/error");
    } else {
      const data = await response.json();
      setapimocktest(data?.[0]);
    }
  };
  useEffect(() => {
    getmockTest();
  }, [pid]);
  useEffect(() => {
    setmocktest(apimocktest.questions);
  }, [apimocktest]);

  const postcontent = {
    title: "Mock Test||LearnGraduation",
    discription: "Mock Test||LearnGraduation",
    image:
      "https://1.bp.blogspot.com/-1QbuCkPSD0o/YPAlJlLIAYI/AAAAAAAACrI/jW19tm8IzyYBdnHXxfKNzDgs_m48NqS_gCPcBGAYYCw/s250/learngraduationlogo.png",
  };

  const [mocktest, setmocktest] = useState(apimocktest.questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(new Array(mocktest.length).fill(null));
  useEffect(() => {
    setQuestionStatus(
      new Array(mocktest.length).fill("notVisited").map((status, index) => {
        return [1, 31, 61, 91, 131].includes(index + 1)
          ? "notAnswered"
          : status;
      })
    );
  }, [mocktest]);
  const [questionStatus, setQuestionStatus] = useState("");

  function updateQuestionStatusAndMoveNext(nextQuestionIndex) {
    const newQuestionStatus = [...questionStatus];
    if (answers[currentQuestion] != null) {
      newQuestionStatus[currentQuestion] = "answered";
    } else {
      newQuestionStatus[currentQuestion] = "notAnswered";
    }
    setQuestionStatus(newQuestionStatus);
    setCurrentQuestion(nextQuestionIndex);
  }
  const OptionRow = ({
    optionNumber,
    currentQuestion,
    mocktest,
    answers,
    setAnswers,
    questionStatus,
    setQuestionStatus,
  }) => {
    return (
      <tr>
        <td className="tdquestion" style={{ width: 10, verticalAlign: "top" }}>
          {optionNumber}.
        </td>
        <td className="tdquestion" style={{ width: 10, verticalAlign: "top" }}>
          <input
            type="radio"
            id={`optionAttrib1_${optionNumber}`}
            name={`optionAttrib1_${optionNumber}`}
            value={optionNumber}
            checked={answers[currentQuestion] === `${optionNumber}`}
            style={{ marginTop: 3 }}
            onChange={(e) => {
              const newAnswers = [...answers];
              newAnswers[currentQuestion] = e.target.value;
              setAnswers(newAnswers);
              const newQuestionStatus = [...questionStatus];
              newQuestionStatus[currentQuestion] = "answered";
              setQuestionStatus(newQuestionStatus);
            }}
          />
        </td>
        <td className="tdquestion">
          <label htmlFor={`optionAttrib1_${optionNumber}`}>
            {mocktest[currentQuestion][`option${optionNumber}`]}
          </label>
        </td>
      </tr>
    );
  };

  function handleSubmit() {
    let results = [];
    for (let i = 0; i < mocktest.length; i += 30) {
      let sectionQuestions = mocktest.slice(i, i + 30);
      let sectionAnswers = answers.slice(i, i + 30);
      let totalQuestions = sectionQuestions.length;
      const attempted = sectionAnswers.filter(answer => answer !== null && answer !== undefined).length;
      console.log(answers);

      let correct = sectionAnswers.filter(
        (answer, questionIndex) =>
          Number(answer) === sectionQuestions[questionIndex].correctoption
      ).length;
      let score = correct * 1; // assuming each question is worth 1 points
      let accuracy =
        attempted !== 0 ? Number(((correct / attempted) * 100).toFixed(3)) : 0;
      let sectionName ;
      if (i / 30 + 1 === 1) {
        sectionName = "CDP"
      } else if (i / 30 + 1 === 2) {
        sectionName="Maths"
      } else if (i / 30 + 1 === 3) {
        sectionName="Science"
      } else if (i / 30 + 1 === 4) {
        sectionName="Hindi 1"
      }else{
        sectionName="English 2"
      }

      results.push({
        sectionName:sectionName,
        totalQuestions,
        attempted,
        correct,
        score,
        accuracy,
        sectionQuestions,
        sectionAnswers,
      });
    }

    navigate("/mocktest-result", { state: { results: results } });
  }

  return (
    <>
      <Helmet>
        <title>{postcontent.title}</title>

        <link href={url} rel="canonical" />

        <meta content={postcontent.discription} name="description" />
        <meta
          content={
            postcontent.keyword ||
            "Learn Graduation, , learn graduation, learngraduation, learn-graduation ,learn%20graduation"
          }
          name="keywords"
        />

        <meta content={postcontent.title} property="og:title" />
        <meta content={url} property="og:url" />
        <meta content="Learn Graduation" property="og:site_name" />
        <meta content="website" property="og:type" />
        <meta content={postcontent.discription} property="og:description" />
        <meta content={postcontent.title} property="og:image:alt" />
        <meta content={postcontent.image} property="og:image" />

        <meta content={postcontent.title} name="twitter:title" />
        <meta content={url} name="twitter:url" />
        <meta content={postcontent.discription} name="twitter:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={postcontent.title} name="twitter:image:alt" />
        <meta content={postcontent.image} name="twitter:image:src" />
      </Helmet>
      <div className="blogCont" >
        <div className="secIn">
          <div className="blogM">
            <main className="blogItm mainbar">
              <div className="section" id="main-widget">
                <div className="widget Blog" data-version="{2}" id="Blog1">
                  <div className="blogPts">
                    <article className="ntry ps post">
                      <div className="main-wrap" style={{ cursor: "pointer" }}>
                        <div
                          className="main cf"
                          style={{ marginTop: "0px!important" }}
                        >
                          <div
                            className="row"
                            style={{ margin: "0px!important" }}
                          >
                            <div
                              className="col-9 main-content"
                              style={{ paddingRight: 10, paddingLeft: 10 }}
                            >
                              <div style={{ textAlign: "justify" }}>
                                <div className="paperHeading">
                                  {apimocktest.testName}
                                </div>
                                <div id="above">
                                  <span
                                    className="textwelcome"
                                    style={{ float: "right" }}
                                  >
                                    REMAINING TIME <Timer />{" "}
                                  </span>
                                  <span
                                    className="textwelcome"
                                    style={{ float: "left" }}
                                  >
                                    Welcome : {props.user}
                                  </span>
                                  <div style={{ clear: "both" }} />
                                </div>
                              </div>
                              <div
                                className="questionDisplay"
                                id="question1"
                                style={{ display: "block" , display: "flex", flexDirection: "column"}}
                              >
                                <div className="sections">
                                  <span className="section_normal_current">
                                    <a
                                      style={{ whiteSpace: "nowrap" }}
                                      onClick={() =>
                                        updateQuestionStatusAndMoveNext(0)
                                      }
                                    >
                                      Child development % Pedagogy
                                    </a>
                                  </span>
                                  <span className="section_normal_current">
                                    <a
                                      style={{ whiteSpace: "nowrap" }}
                                      onClick={() =>
                                        updateQuestionStatusAndMoveNext(30)
                                      }
                                    >
                                      Mathematics
                                    </a>
                                  </span>
                                  <span className="section_normal_current">
                                    <a
                                      style={{ whiteSpace: "nowrap" }}
                                      onClick={() =>
                                        updateQuestionStatusAndMoveNext(60)
                                      }
                                    >
                                     Science
                                    </a>
                                  </span>
                                  <span className="section_normal_current">
                                    <a
                                      style={{ whiteSpace: "nowrap" }}
                                      onClick={() =>
                                        updateQuestionStatusAndMoveNext(90)
                                      }
                                    >
                                      Language- 1 (Hindi)
                                    </a>
                                  </span>
                                  <span className="section_normal_current">
                                    <a
                                      style={{ whiteSpace: "nowrap" }}
                                      onClick={() =>
                                        updateQuestionStatusAndMoveNext(120)
                                      }
                                    >
                                      Language- 2 (English)
                                    </a>
                                  </span>
                                  <div style={{ clear: "both" }} />
                                </div>

                                {mocktest &&
                                  mocktest.length > currentQuestion && (
                                    <>
                                      <div className="sectionQuestion">
                                        <span className="question">
                                          Question No.{currentQuestion + 1}{" "}
                                        </span>
                                        <span className="marks">
                                          Correct Marks : 1 Negative Mark :{" "}
                                          <span style={{ color: "#FF0000" }}>
                                            0
                                          </span>
                                        </span>
                                        <div style={{ clear: "both" }} />
                                      </div>
                                      <div
                                        className="questionDetails"
                                        key={mocktest[currentQuestion].qnumber}
                                      >
                                        {mocktest[currentQuestion].passage ? (
                                          <>
                                            <div className="psg1">
                                              <div className="psgcn">Passage: {mocktest[currentQuestion].passage}<br />
                                              </div>
                                            </div>
                                            <div className="psg2">
                                              <div style={{ padding: 3 }}>{mocktest[currentQuestion].qnumber +". "}
                                                <strong>{mocktest[currentQuestion].title}</strong>
                                              </div>
                                              <div style={{ clear: "both" }} />
                                              <div className="questionOptions">
                                                <table className="optionTable">
                                                  <tbody>
                                                    <OptionRow
                                                      optionNumber={1}
                                                      currentQuestion={
                                                        currentQuestion
                                                      }
                                                      mocktest={mocktest}
                                                      answers={answers}
                                                      setAnswers={setAnswers}
                                                      questionStatus={
                                                        questionStatus
                                                      }
                                                      setQuestionStatus={
                                                        setQuestionStatus
                                                      }
                                                    />
                                                    <OptionRow
                                                      optionNumber={2}
                                                      currentQuestion={
                                                        currentQuestion
                                                      }
                                                      mocktest={mocktest}
                                                      answers={answers}
                                                      setAnswers={setAnswers}
                                                      questionStatus={
                                                        questionStatus
                                                      }
                                                      setQuestionStatus={
                                                        setQuestionStatus
                                                      }
                                                    />
                                                    <OptionRow
                                                      optionNumber={3}
                                                      currentQuestion={
                                                        currentQuestion
                                                      }
                                                      mocktest={mocktest}
                                                      answers={answers}
                                                      setAnswers={setAnswers}
                                                      questionStatus={
                                                        questionStatus
                                                      }
                                                      setQuestionStatus={
                                                        setQuestionStatus
                                                      }
                                                    />
                                                    <OptionRow
                                                      optionNumber={4}
                                                      currentQuestion={
                                                        currentQuestion
                                                      }
                                                      mocktest={mocktest}
                                                      answers={answers}
                                                      setAnswers={setAnswers}
                                                      questionStatus={
                                                        questionStatus
                                                      }
                                                      setQuestionStatus={
                                                        setQuestionStatus
                                                      }
                                                    />
                                                  </tbody>
                                                </table>
                                              </div>
                                            </div>
                                          </>
                                        ) : (<>
                                            <div style={{ padding: 3 }}>
                                              <strong>{mocktest[currentQuestion].title}</strong>

                                            </div>
                                            <div style={{ clear: "both" }} />
                                            <div className="questionOptions">
                                              <table className="optionTable">
                                                <tbody>
                                                  <OptionRow
                                                    optionNumber={1}
                                                    currentQuestion={
                                                      currentQuestion
                                                    }
                                                    mocktest={mocktest}
                                                    answers={answers}
                                                    setAnswers={setAnswers}
                                                    questionStatus={
                                                      questionStatus
                                                    }
                                                    setQuestionStatus={
                                                      setQuestionStatus
                                                    }
                                                  />
                                                  <OptionRow
                                                    optionNumber={2}
                                                    currentQuestion={
                                                      currentQuestion
                                                    }
                                                    mocktest={mocktest}
                                                    answers={answers}
                                                    setAnswers={setAnswers}
                                                    questionStatus={
                                                      questionStatus
                                                    }
                                                    setQuestionStatus={
                                                      setQuestionStatus
                                                    }
                                                  />
                                                  <OptionRow
                                                    optionNumber={3}
                                                    currentQuestion={
                                                      currentQuestion
                                                    }
                                                    mocktest={mocktest}
                                                    answers={answers}
                                                    setAnswers={setAnswers}
                                                    questionStatus={
                                                      questionStatus
                                                    }
                                                    setQuestionStatus={
                                                      setQuestionStatus
                                                    }
                                                  />
                                                  <OptionRow
                                                    optionNumber={4}
                                                    currentQuestion={
                                                      currentQuestion
                                                    }
                                                    mocktest={mocktest}
                                                    answers={answers}
                                                    setAnswers={setAnswers}
                                                    questionStatus={
                                                      questionStatus
                                                    }
                                                    setQuestionStatus={
                                                      setQuestionStatus
                                                    }
                                                  />
                                                </tbody>
                                              </table>
                                            </div>
                                        </>)}
                                      </div>
                                    </>
                                  )}

                                <div className="questionFooter">
                                  <center className="mocktstbtn">
                                    {currentQuestion > 0 && (
                                      <span className="section_btn section_normal">
                                        <a
                                          onClick={() =>
                                            updateQuestionStatusAndMoveNext(
                                              currentQuestion - 1
                                            )
                                          }
                                        >
                                          Save Prev
                                        </a>
                                      </span>
                                    )}

                                    <span className="section_btn sc-button-blue">
                                      <a
                                        onClick={() => {
                                          const newQuestionStatus = [
                                            ...questionStatus,
                                          ];
                                          if (
                                            newQuestionStatus[
                                            currentQuestion
                                            ] === "answered"
                                          ) {
                                            newQuestionStatus[currentQuestion] =
                                              "markedAndReviewd";
                                          } else {
                                            newQuestionStatus[currentQuestion] =
                                              "marked";
                                          }
                                          setQuestionStatus(newQuestionStatus);

                                          setCurrentQuestion(
                                            currentQuestion + 1
                                          );
                                        }}
                                      >
                                        Mark For Review &amp; Next
                                      </a>
                                    </span>
                                    <span className="section_btn sc-button-gray">
                                      <a
                                        onClick={() => {
                                          let newAnswers = [...answers];
                                          newAnswers[currentQuestion] = null;
                                          setAnswers(newAnswers);
                                        }}
                                      >
                                        Clear Response
                                      </a>
                                    </span>
                                    {currentQuestion < mocktest.length - 1 && (
                                      <span className="section_btn section_normal">
                                        <a
                                          onClick={() =>
                                            updateQuestionStatusAndMoveNext(
                                              currentQuestion + 1
                                            )
                                          }
                                        >
                                          Save Next
                                        </a>
                                      </span>
                                    )}
                                  </center>
                                </div>
                              </div>
                            </div>
                            <div>
                              <aside
                                id="modelsidebar"
                                className="col-3 sidebar"
                                style={{ paddingRight: 10, paddingLeft: 10 }}
                              >
                                <div className="questionIndexPart">
                                  {mocktest.map((_, index) => (
                                    <div
                                      key={index}
                                      className={`questionIndex ${questionStatus[index]}`}
                                      onClick={() => {
                                        updateQuestionStatusAndMoveNext(index);
                                      }}
                                    >
                                      {index + 1}
                                    </div>
                                  ))}
                                </div>

                                <div className="sectionLegends">
                                  <div style={{ marginBottom: 4 }}>
                                    <strong>LEGENDS</strong>
                                  </div>
                                  <div className="qButtonLegends_notVisited">
                                    Not Visited
                                  </div>
                                  <div className="qButtonLegends_notAnswered">
                                    Not Answered
                                  </div>
                                  <div className="qButtonLegends_answered">
                                    Answered
                                  </div>
                                  <div className="qButtonLegends_marked">
                                    Marked for Review
                                  </div>
                                  <div className="qButtonLegends_markedAndReviewd">
                                    Answered & Mark For Review
                                  </div>
                                </div>
                                <div
                                  className="sectionInstructions"
                                  style={{
                                    height: "auto",
                                    textAlign: "center",
                                    backgroundColor: "#f9f9f9",
                                  }}
                                >
                                  &nbsp;&nbsp;Filter&nbsp;:&nbsp;
                                  <select
                                    id="questioStatus"
                                    name="questioStatus"
                                    className="filterSelectTest"
                                  >
                                    <option value>All</option>
                                    <option value={0}>Not Visited</option>
                                    <option value={1}>Not Answered</option>
                                    <option value={2}>Marked for review</option>
                                    <option value={3}>
                                      Answered &amp; marked for review
                                    </option>
                                    <option value={4}>Answered</option>
                                  </select>
                                  <div style={{ clear: "both" }} />
                                  <div style={{ padding: "20px  0px" }}>
                                    <center>
                                      <span className="section_btn sc-button-blue">
                                        <a>Instructions</a>
                                      </span>
                                      <div
                                        id="paperInstructions"
                                        style={{ display: "none" }}
                                      >
                                        Instructions{" "}
                                      </div>
                                      <span className="section_btn sc-button-blue btn">
                                        <a onClick={handleSubmit}>
                                          Submit Test
                                        </a>
                                      </span>
                                    </center>
                                  </div>
                                </div>
                              </aside>
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
export default MockTest;



<div className="questionDetails">
  <div className="psg1">
    <div style={{ padding: 5, maxHeight: 300, overflow: 'auto' }}> <strong>Passage:</strong><br />
    </div>
    <div className="psg2">
      <div style={{ padding: 3 }}>&nbsp;&nbsp;<strong>Question : </strong>For which of the following characteristics is Kevlar known ?</div>                                                                                                                    <div style={{ clear: 'both' }} />
      <div className="questionOptions">
        <table className="optionTable">
          <tbody><tr>
            <td style={{ width: 10, verticalAlign: 'top' }}>1.</td>
            <td style={{ width: 10, verticalAlign: 'top' }}><input type="radio" id="optionAttrib52_1" name="optionAttribName52" defaultValue={1} style={{ marginTop: 3 }} /></td>
            <td><label htmlFor="optionAttrib52_1">
              Durability                                                                              </label></td>
          </tr>
            <tr>
              <td style={{ verticalAlign: 'top' }}>2.</td>
              <td style={{ verticalAlign: 'top' }}><input type="radio" id="optionAttrib52_2" name="optionAttribName52" defaultValue={2} style={{ marginTop: 3 }} /></td>
              <td style={{ verticalAlign: 'top' }}><label htmlFor="optionAttrib52_2">
                Heat resistant                                                                              </label></td>
            </tr>
            <tr>
              <td style={{ verticalAlign: 'top' }}>3.</td>
              <td style={{ verticalAlign: 'top' }}><input type="radio" id="optionAttrib52_3" name="optionAttribName52" defaultValue={3} style={{ marginTop: 3 }} /></td>
              <td style={{ verticalAlign: 'top' }}><label htmlFor="optionAttrib52_3">
                Strength                                                                              </label>
              </td>
            </tr>
            <tr>
              <td style={{ verticalAlign: 'top' }}>4.</td>
              <td style={{ verticalAlign: 'top' }}><input type="radio" id="optionAttrib52_4" name="optionAttribName52" defaultValue={4} style={{ marginTop: 3 }} /></td>
              <td style={{ verticalAlign: 'top' }}><label htmlFor="optionAttrib52_4">
                All of these                                                                              </label>
              </td>
            </tr>
          </tbody></table>
      </div>
    </div>
    <div style={{ clear: 'both' }} />
  </div>
</div>
