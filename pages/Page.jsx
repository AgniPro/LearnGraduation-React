import { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Mobilemenu from "../component/Mobilemenu";
import Notification from "../component/Notification";

function Page() {
  useEffect(() => {
    const bodyClassList = document.body.classList;
    bodyClassList.add("onItm", "onPg");
    return () => {
      bodyClassList.remove("onItm", "onPg");
    };
  }, []);

  const [message, setmessage] = useState("");
  const messageChange=(event)=>{
    setmessage(event.target.value)
  }
  const sendMessage=()=>{
    window.open("mailto:?body="+ message );
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
                        <div className="tl" data-text="CONTACT" />
                      </div>
                      <h1 className="pTtl aTtl sml itm">
                        <span>CONTACT</span>
                      </h1>
                      <div className="pInr">
                        <div className="pEnt" id="postID-3760665364233486708">
                          <div className="pS post-body postBody" id="postBody">
                            <p></p>
                            <div
                              className="separator"
                              style={{ clear: "both", textAlign: "center" }}
                            >
                              <div className="zmImg">
                                <a
                                  href="https://1.bp.blogspot.com/-YurRRss-7Vs/YPF73EG4oqI/AAAAAAAACrQ/Zvp7-CXxPpUNT8dTJ3xnflcEpN1K1TRvACLcBGAsYHQ/s0/learngraduation.png"
                                  style={{
                                    marginLeft: "1em",
                                    marginRight: "1em",
                                  }}
                                >
                                  <img
                                    border={0}
                                    data-original-height={538}
                                    data-original-width={1400}
                                    height={154}
                                    src="https://1.bp.blogspot.com/-YurRRss-7Vs/YPF73EG4oqI/AAAAAAAACrQ/Zvp7-CXxPpUNT8dTJ3xnflcEpN1K1TRvACLcBGAsYHQ/s0/learngraduation.png"
                                    width={400}
                                  />
                                </a>
                              </div>
                            </div>
                            <br />
                            <p />
                            <p>Contact Me</p>
                            <p>
                              ATTENTION: I do not publish guest posts on this
                              blog. So, please don’t contact me regarding guest
                              posting.
                            </p>
                            <p>
                              <br />
                            </p>
                            <p>
                              Hey there, thanks for your interest in reaching
                              out and connecting with me.
                            </p>
                            <p>
                              <br />
                            </p>
                            <p>
                              Please email me or send me a message on blog
                              Comment for any query.
                            </p>{" "}
                            <style
                              dangerouslySetInnerHTML={{
                                __html:
                                  "\n        .ContactForm{max-width:500px;font-size:92%;margin-bottom:40px}\n        .ContactForm .inputArea{position:relative}\n        .ContactForm label{display:inline-block;margin-bottom:8px}\n        .ContactForm label span{color:var(--highlight-red);font-size:small}\n    ",
                              }}
                            />
                            <div className="ContactForm" id="ContactForm1">
                              <form name="contact-form">
                                <div className="input-area">
                                  <label>Name </label>
                                  <input
                                    className="contact-form-name"
                                    id="ContactForm1_contact-form-name"
                                    name="name"
                                    type="text"
                                    defaultValue
                                  />
                                </div>
                                <div className="input-area">
                                  <br />
                                </div>
                                <div className="input-area">
                                  <label>
                                    Email<span>* </span>
                                  </label>
                                  <input
                                    className="contact-form-email"
                                    id="ContactForm1_contact-form-email"
                                    name="email"
                                    type="text"
                                    defaultValue
                                  />
                                </div>
                                <div className="input-area">
                                  <br />
                                </div>
                                <div className="input-area">
                                  <label>
                                    Message<span>* </span>
                                  </label>
                                  <textarea
                                  onChange={messageChange}
                                    className="contact-form-email-message"
                                    id="ContactForm1_contact-form-email-message"
                                    name="email-message"
                                    style={{
                                      height: 82,
                                      margin: 0,
                                      width: 489,
                                    }}
                                    defaultValue={""}
                                  />
                                </div>
                                <div className="input-area">
                                  <br />
                                </div>
                                <div className="input-area">
                                  <input
                                    className="contact-form-button contact-form-button-submit"
                                    id="ContactForm1_contact-form-submit"
                                    type="button"
                                    defaultValue="Send"
                                    onClick={sendMessage}
                                  />
                                </div>
                                <div className="notif-area">
                                  <p
                                    className="contact-form-error-message"
                                    id="ContactForm1_contact-form-error-message"
                                  />
                                  <p
                                    className="contact-form-success-message"
                                    id="ContactForm1_contact-form-success-message"
                                  />
                                </div>
                              </form>
                            </div>
                            <p>
                              <br />
                            </p>
                            <p>I’ll respond to you as soon as time allows.</p>
                            <p>
                              <br />
                            </p>
                            <p>Thanks &amp; Regards!</p>
                            <p>
                              <br />
                            </p>
                            <p>
                              <br />
                            </p>
                            <p>
                              <br />
                            </p>
                            <p>
                              <br />
                            </p>
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
export default Page;


