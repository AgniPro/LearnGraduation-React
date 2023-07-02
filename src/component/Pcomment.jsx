function Pcomment() {
    return (
        <div className="pCmnts" id="comment">
            <input className="cmSh fixi hidden" id="forComments" type="checkbox" />
            <div className="cmShw">
                <label className="cmBtn button ln" htmlFor="forComments">
                    Post a Comment
                </label>
            </div>
            <section className="cm cmBr fixL" data-embed="true" data-num-comments={0} id="comments">
                <div className="cmBri mty">
                    <div className="cmBrs fixLs">
                        <div className="cmH fixH">
                            <h3 className="title">
                                Post a Comment
                            </h3>
                            <div className="cmI cl">
                                <label aria-label="Close" className="c" htmlFor="forComments" />
                            </div>
                        </div>
                        <div className="cmC">
                            <div className="cmFrm">
                                <div id="commentForm">
                                    <a aria-label="Comment Form" href="https://www.blogger.com/comment/frame/6482790797019347133?po=56120394634594030&hl=en&skin=contempo&skin=contempo" id="comment-editor-src" />
                                    <iframe className="blogger-iframe-colorize blogger-comment-from-post lazy" data-src="https://www.blogger.com/comment/frame/6482790797019347133?po=56120394634594030&hl=en&skin=contempo&skin=contempo" height={296} id="comment-editor" title="Blogger comment" width={100} src="https://www.blogger.com/comment/frame/6482790797019347133?po=56120394634594030&hl=en&skin=contempo&skin=contempo" lazied="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <label className="fCls" htmlFor="forComments" />
            </section>
        </div>

    )
}
export default Pcomment;