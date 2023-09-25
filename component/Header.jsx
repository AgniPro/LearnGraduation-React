import React from "react";
import { NavLink} from "react-router-dom";

function Header(props) {

  return (
    <>
      <header className="header" id="header">
        {/*[ Header content ]*/}
        <div className="headCn">
          <div className="headD headL">
            <div className="headIc">
              <label className="tNav tIc bIc" htmlFor="offNav">
                <svg className="line" viewBox="0 0 24 24">
                  <line x1={3} x2={21} y1={12} y2={12} />
                  <line x1={3} x2={21} y1={5} y2={5} />
                  <line x1={3} x2={21} y1={19} y2={19} />
                </svg>
              </label>
            </div>
            {/*[ Header widget ]*/}
            <div className="headN section" id="header-title">
              <div className="widget Header" data-version={2} id="Header1">
                <NavLink to={"/"}>
                  <img
                    alt="Learn Graduation"
                    height={71}
                    src="https://1.bp.blogspot.com/-YurRRss-7Vs/YPF73EG4oqI/AAAAAAAACrQ/Zvp7-CXxPpUNT8dTJ3xnflcEpN1K1TRvACLcBGAsYHQ/w200/learngraduation.png"
                    width={300}
                  />
                </NavLink>
                <div className="headInnr hidden">
                  <h1 className="headH">
                    <bdi>
                      <span className="headTtl"> Learn Graduation </span>
                    </bdi>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="headD headR">
            <div className="headI">
              <div className="headS section" id="header-search">
                <div
                  className="widget BlogSearch"
                  data-version={2}
                  id="BlogSearch1"
                >
                  <form action="../search" className="srchF" target="_top">
                    <input
                      aria-label="Search this blog"
                      autoComplete="off"
                      id="searchIn"
                      minLength={3}
                      name="q"
                      placeholder="Enter a search term or a topic"
                      required="required"
                    />
                    <span className="sb">
                      <svg className="line" viewBox="0 0 24 24">
                        <g transform="translate(2.000000, 2.000000)">
                          <circle
                            cx="9.76659044"
                            cy="9.76659044"
                            r="8.9885584"
                          />
                          <line
                            x1="16.0183067"
                            x2="19.5423342"
                            y1="16.4851259"
                            y2="20.0000001"
                          />
                        </g>
                      </svg>
                    </span>
                    <button
                      aria-label="Clear"
                      className="sb"
                      data-text="clear"
                      type="reset"
                    />
                    <span className="fCls" />
                  </form>
                </div>
              </div>
              <div className="headP section" id="header-icon">
                <div
                  className="widget TextList"
                  data-version={2}
                  id="TextList000"
                >
                  <ul className="headIc">
                    <li className="isDrk">
                      <span
                        aria-label="Dark"
                        className="tDark tIc tDL bIc"
                        onClick={props.darkMode}
                        role="button"
                      >
                        <svg className="line" viewBox="0 0 24 24">
                          <g className="d1">
                            <path
                              d="M183.72453,170.371a10.4306,10.4306,0,0,1-.8987,3.793,11.19849,11.19849,0,0,1-5.73738,5.72881,10.43255,10.43255,0,0,1-3.77582.89138,1.99388,1.99388,0,0,0-1.52447,3.18176,10.82936,10.82936,0,1,0,15.118-15.11819A1.99364,1.99364,0,0,0,183.72453,170.371Z"
                              transform="translate(-169.3959 -166.45548)"
                            />
                          </g>
                          <g className="d2">
                            <path
                              className="f"
                              d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
                            />
                            <path
                              d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
                              strokeWidth={2}
                            />
                          </g>
                        </svg>
                      </span>
                    </li>
                    <li className="isSrh">
                      <label
                        aria-label="Search"
                        className="tSrch tIc bIc"
                        htmlFor="searchIn"
                      >
                        <svg className="line" viewBox="0 0 24 24">
                          <g transform="translate(2.000000, 2.000000)">
                            <circle
                              cx="9.76659044"
                              cy="9.76659044"
                              r="8.9885584"
                            />
                            <line
                              x1="16.0183067"
                              x2="19.5423342"
                              y1="16.4851259"
                              y2="20.0000001"
                            />
                          </g>
                        </svg>
                      </label>
                    </li>
                    <li className="isProfile">
                      <label
                        aria-label="Profile"
                        className="tPrfl tIc bIc"
                        htmlFor="offPrf"
                      >
                        <svg className="line" viewBox="0 0 24 24">
                          <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" />
                          <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" />
                        </svg>
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="widget Profile" data-version={2} id="Profile1">
                  <div className="wPrf tm">
                    <div className="prfS fixLs">
                      <div className="prfH fixH fixT" data-text="Contributors">
                        <label
                          aria-label="Close"
                          className="c cl"
                          htmlFor="offPrf"
                        />
                      </div>
                      <div className="prfC">
                        <div className="sImg">
                          <div
                            className="im lazy loaded"
                            data-style="background-image: url(//2.bp.blogspot.com/-oug9Ov-nEv4/YPAvjB73VgI/AAAAAAAAACw/dXeqmhAqIqcwKwPCxPPkPb8EB1OZ1DJpgCK4BGAYYCw/w60/logo.png)"
                            lazied="true"
                            style={{
                              backgroundImage:
                                'url("//2.bp.blogspot.com/-oug9Ov-nEv4/YPAvjB73VgI/AAAAAAAAACw/dXeqmhAqIqcwKwPCxPPkPb8EB1OZ1DJpgCK4BGAYYCw/w60/logo.png")',
                            }}
                          />
                        </div>
                        {props.userstate ? (
                          <>
                            <dl className="sInf">
                              <dt className="sTxt">{props.user}</dt>
                            </dl>
                            <br />
                            <dl className="sInf">
                              <dt className="sDt">
                                <NavLink
                                  className="l extL"
                                  title="Dashboard"
                                  to={"admin/dashboard"}
                                >
                                  <bdi>Dashboard</bdi>
                                </NavLink>
                              </dt>
                            </dl>
                            <br />
                            <dl className="sInf">
                              <dt className="sDt">
                                <NavLink
                                  className="l extL"
                                  title="Compose"
                                  to={"admin/compose"}
                                >
                                  <bdi>Compose</bdi>
                                </NavLink>
                              </dt>
                            </dl>
                            <br />
                            <dl className="sInf">
                              <dt className="sDt">
                                <NavLink
                                  className="l extL"
                                  title="Logout"
                                  onClick={props.logout}
                                >
                                  <bdi>Logout</bdi>
                                </NavLink>
                              </dt>
                            </dl>
                            <br />
                          </>
                        ) : (
                          <>
                            <dl className="sInf">
                              <dt className="sDt">
                                <NavLink
                                  className="l extL"
                                  title="Login"
                                  to="/login"
                                >
                                  <bdi>Login</bdi>
                                </NavLink>
                              </dt>
                            </dl>
                            <br />
                            <dl className="sInf">
                              <dt className="sDt">
                                <NavLink
                                  className="l extL"
                                  title="Sign in with Google"
                                  onClick={props.googlelogin}
                                >
                                  <bdi>Sign in with Google</bdi>
                                </NavLink>
                              </dt>
                            </dl>
                            <br />
                            <dl className="sInf">
                            <dt className="sTxt">No account?</dt>
                              <dt className="sDt">
                                <NavLink
                                  className="l extL"
                                  title="Sign Up"
                                  to={"/signup"}
                                >
                                  <bdi>Create one | Sign Up</bdi>
                                </NavLink>
                              </dt>
                            </dl>
                            <br />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <label className="fCls" htmlFor="offPrf" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
