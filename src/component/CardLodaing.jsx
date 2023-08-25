function CardLoading() {
    const articles = new Array(3).fill(null);
    return (
        <>
            <div className="blogPts">
                {articles.map((_, index) => (
                    <article key={index} className="ntry">
                        <div className="pThmb">
                            <div className="thmb">
                                <img alt="Loading..." className="imgThm lazy loaded" />
                            </div>
                        </div>
                        <div className="pCntn">
                            <h2 className="pThmb pTtl aTtl sml" style={{
                                borderRadius: '12px', height: "28px"
                            }}></h2>
                            <div className="pThmb pSnpt" style={{
                                borderRadius: '12px', height: "20px", marginBottom:"12px"
                            }}></div>
                            <div className="pInf pSml">
                                <time
                                    className="pThmb aTtmp pTtmp pbl"
                                    style={{
                                        borderRadius: '12px', height: "12px"
                                    }}
                                    
                                />
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </>
    );
}
export default CardLoading;
