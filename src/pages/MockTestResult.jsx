import React from 'react';
import { useLocation } from 'react-router-dom';
import Mobilemenu from '../component/Mobilemenu';
import Footer from '../component/Footer';
import "../mocktest/mock-test.css";

function MockTestResult() {
  const location = useLocation();
  const results = location.state.results;
  console.log(results);
  function getClassName(optionNumber, question, userAnswer) {
    const correctOption = parseInt(question.correctoption, 10);
    const userOption = userAnswer !== null ? parseInt(userAnswer, 10) : null;
  
    if ((userAnswer === null || userAnswer === undefined) && optionNumber === correctOption) {
      return 'options notAttempted';
    } else if (optionNumber === correctOption) {
      return 'options correct';
    } else if (optionNumber === userOption) {
      return 'options incorrect';
    } else {
      return 'options';
    }
  }
  return (
    <>
      <div className="blogCont">
        <div className="secIn">
          <div className="blogM">
            <main className="blogItm mainbar">
              <div className="section" id="main-widget">
                <div className="widget Blog" data-version="{2}" id="Blog1">
                  <div className="blogPts">
                    <article className="ntry ps post">

                      <div className="col-12 main-content">
                        <div style={{ textAlign: 'justify' }}>
                          <div className="paperHeading" style={{ textTransform: 'uppercase' }}>SUMMARY RESULT</div>
                        </div>
                        <h4 style={{ fontSize: 22, textAlign: 'center', marginTop: 10, marginBottom: 0 }}>Sectional Result</h4>
                        <div className="question_preview" style={{ marginTop: 0, width: '100%' }}>
                          <table style={{ fontSize: 12, width: '100%', display: 'table' }}>
                            <thead>
                              <tr>
                                <th style={{ fontSize: 9, padding: '4px 3px' }}>Section Name</th>
                                <th style={{ fontSize: 9, padding: '4px 3px' }}>Total Questions</th>
                                <th style={{ fontSize: 9, padding: '4px 3px' }}>Attempted</th>
                                <th style={{ fontSize: 9, padding: '4px 3px' }}>Correct</th>
                                <th style={{ fontSize: 9, padding: '4px 3px' }}>Score</th>
                                <th style={{ fontSize: 9, padding: '4px 3px' }}>Accuracy</th>
                              </tr>
                            </thead>
                            <tbody>
                              {results.map(result => (
                                <tr key={result.sectionName+result.correct+result.accuracy}>
                                  <td className='tdquestion' style={{ fontSize: 9, padding: '4px 3px' }}><b>{result.sectionName}</b></td>
                                  <td className='tdquestion'>{result.totalQuestions}</td>
                                  <td className='tdquestion'>{result.attempted}</td>
                                  <td className='tdquestion'>{result.correct}</td>
                                  <td className='tdquestion'>{result.score}</td>
                                  <td className='tdquestion'>{result.accuracy}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                            <table style={{ whiteSpace: 'nowrap' }}>
                              <tbody>
                                {results.map((result, resultIndex) => (
                                  <React.Fragment key={resultIndex}>
                                    <tr>
                                      <td className='tdquestion'>{result.sectionName}</td>
                                    </tr>
                                    {result.sectionQuestions.map((question, questionIndex) => (
                                      <React.Fragment key={questionIndex}>

                                        <tr><td className='tdquestion'>"Q" {questionIndex + 1 + ". " + question.title}</td></tr>

                                        <tr>
                                          <td className={getClassName(1, question, result.sectionAnswers[questionIndex])}>1.{question.option1}</td>
                                        </tr>
                                        <tr>
                                          <td className={getClassName(2, question, result.sectionAnswers[questionIndex])}>2.{question.option2}</td>
                                        </tr>
                                        <tr>
                                          <td className={getClassName(3, question, result.sectionAnswers[questionIndex])}>3.{question.option3}</td>
                                        </tr>
                                        <tr>
                                          <td className={getClassName(4, question, result.sectionAnswers[questionIndex])}>4.{question.option4}</td>
                                        </tr>
                                      </React.Fragment>
                                    ))}
                                  </React.Fragment>
                                ))}
                              </tbody>
                            </table>
                      </div>
                    </article>
                  </div>
                </div >
              </div >
            </main >
          </div >
          <Mobilemenu />
          <Footer />
        </div >
      </div >

    </>

  );
}

export default MockTestResult;