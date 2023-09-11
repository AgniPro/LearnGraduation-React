import {React, useEffect, useState } from "react";

function Toc() {
  const [postPage, setPostPage] = useState();
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const classList = mutation.target.classList;
          if (classList.contains("onPs")) {
            setPostPage(true);
            document.addEventListener('DOMContentLoaded', () => new TableOfContents({ from: document.querySelector('#postBody'), to: document.querySelector('#tocAuto') }).generateToc() );
          }
        }
      });
    });
    observer.observe(document.body, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {postPage ? (
        <div className="widget HTML" data-version={2} id="HTML11">
          <input className="tocI hidden" id="forTocJs" type="checkbox" />
          <div className="tocL">
            <div className="tocLi">
              <div className="tocLs">
                <label
                  aria-label="Close"
                  className="tocH fixH"
                  htmlFor="forTocJs"
                >
                  <div className="tocC">
                    <svg className="rad" viewBox="0 0 160 160">
                      <path
                        d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z"
                        transform="translate(0 10)"
                      />
                    </svg>
                    <span>
                      <svg className="line" viewBox="0 0 24 24">
                        <g transform="translate(3.610000, 2.750100)">
                          <line
                            x1="11.9858"
                            x2="4.7658"
                            y1="12.9463"
                            y2="12.9463"
                          />
                          <line
                            x1="11.9858"
                            x2="4.7658"
                            y1="9.1865"
                            y2="9.1865"
                          />
                          <line x1="7.521" x2="4.766" y1="5.4272" y2="5.4272" />
                          <path d="M7.63833441e-14,9.25 C7.63833441e-14,16.187 2.098,18.5 8.391,18.5 C14.685,18.5 16.782,16.187 16.782,9.25 C16.782,2.313 14.685,0 8.391,0 C2.098,0 7.63833441e-14,2.313 7.63833441e-14,9.25 Z" />
                        </g>
                      </svg>
                    </span>
                    <svg className="rad in" viewBox="0 0 160 160">
                      <path
                        d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z"
                        transform="translate(0 10)"
                      />
                    </svg>
                  </div>
                  <div className="tocT fixT" data-text="Contents">
                    <span className="c cl" data-texxt="Close" />
                  </div>
                </label>
                <div className="tocIn" id="tocAuto">
            
                </div>
              </div>
            </div>
            <label className="fCls" htmlFor="forTocJs" />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
export default Toc;
