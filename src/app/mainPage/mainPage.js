import React, { Component } from 'react';
import './mainPage.css';

class MainPage extends Component  {
  constructor(props) {

   super(props);
   this.state = {
     value: '',
     link:null,
     flag:false,
 };

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({value: event.target.value});
    console.log(this.state.value);
  }
  handleSubmit(event) {

   event.preventDefault();
   let data = this.state.value;
   console.log(data);
   this.setState({
     link:data,
     flag:true,
   })



 }
 render(){
   let iframe;
    if(this.state.flag==true ){
      iframe = <iframe width="200" height="200" src={'https://www.youtube.com/embed/'+this.state.value} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    }
  return (
  <div>
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">{this.props.name}</a>
                <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-5" src={process.env.PUBLIC_URL + '/assets/img/avataaars.svg'} alt="" />
                <h1 className="masthead-heading text-uppercase mb-0">{this.props.working}</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0">{this.props.knowledge}</p>
            </div>
        </header>
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={process.env.PUBLIC_URL +'/assets/img/portfolio/cabin.png'} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={process.env.PUBLIC_URL +'/assets/img/portfolio/cake.png'} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={process.env.PUBLIC_URL +'/assets/img/portfolio/circus.png'} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={process.env.PUBLIC_URL +'/assets/img/portfolio/game.png'} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={process.env.PUBLIC_URL +'/assets/img/portfolio/safe.png'} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={process.env.PUBLIC_URL +'/assets/img/portfolio/submarine.png'} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
          <form onSubmit={this.handleSubmit}>
        <label>
         Add your link:
         <input type="text" value={this.state.value} onChange={this.handleChange} />
       </label>
       <input type="submit" value="Submit" />
      </form>
        </section>
        <section >
        <iframe className="mr-4" width="200" height="200" src="https://www.youtube.com/embed/pqLVcASg-sM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        {iframe}
        </section>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        <script src="assets/mail/jqBootstrapValidation.js"></script>
        <script src="assets/mail/contact_me.js"></script>
        <script src="js/scripts.js"></script>
   </div>
  );
 }
}

export default MainPage;
