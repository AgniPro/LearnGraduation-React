
function Error(){
    return(

<div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Arvo" />
  <style media="screen" dangerouslySetInnerHTML={{__html: "\n.page_404{ padding:40px 0; background:#fff; font-family: 'Arvo', serif;\n}\n.page_404  img{ width:100%;}\n.four_zero_four_bg{\n background-image: url(https://vieurl.web.app/assets/404.gif);\n    height: 400px;\n    background-position: center;\n }\n .four_zero_four_bg h1{\n font-size:80px;\n }\n  .four_zero_four_bg h3{\n\t\t\t font-size:80px;\n\t\t\t }\n\t\t\t \n\t\t\t .link_404{\t\t\t \n\tcolor: #fff!important;\n    padding: 10px 20px;\n    background: #39ac31;\n    margin: 20px 0;\n    display: inline-block;}\n\t.contant_box_404{ margin-top:-50px;}\n    " }} />
  <section className="page_404">
    <div className="container">
      <div className="row">	
        <div className="col-sm-12 ">
          <div className="col-sm-10 col-sm-offset-1  text-center">
            <div className="four_zero_four_bg">
              <h1 className="text-center ">404</h1>
            </div>
            <div className="contant_box_404">
              <h3 className="h2">
                Look like you're lost
              </h3>
              <p>the page you are looking for not avaible!</p>
              <a href="/" className="link_404">Go to Home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    );
}
export default Error;
