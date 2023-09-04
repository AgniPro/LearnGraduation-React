function Cardinner() {
    return (
        <>
            <div className="pHdr pSml">
                <div className="pLbls pThmb" style={{
                    height: "12px",
                    borderRadius: "24px",
                    maxWidth: "30%"
                }}>
                </div>
            </div>
            <h2 className="pThmb pTtl" style={{
                borderRadius: '28px', height: "24px",maxWidth: "90%"
            }}></h2>
            <div className="pSnpt pThmb" style={{
                height: "42px",
                borderRadius: "12px",
                maxWidth: "90%"
            }}>
            </div>
            <div className="pInf  pThmb" style={{
                height: "12px",
                borderRadius: "24px",
                maxWidth: "20%",marginBottom: "10px"
            }}>
            </div>
        </>
    )
}
function CardLoading() {
    const articles = new Array(3).fill(null);
    return (
        <>
            <div className="blogPts">
                {articles.map((_, index) => (
                    <article key={index} className="ntry">
                        <div className="thmb pThmb" style={{
                            borderRadius: '12px 12px 0 0', height: "160px"
                        }} />
                        <div className="pCntn">
                         <Cardinner/>
                        </div>
                    </article>
                ))}
            </div>
        </>
    );
}

function PinndeLoading() {
    return (
        <article className="itm">
            <div className="thmb pThmb" style={{
                borderRadius: '12px', height: "160px"
            }}>
            </div>
            <div className="iCtnt">
            <Cardinner/>
            </div>
        </article>
    )
}
export { PinndeLoading, CardLoading }
