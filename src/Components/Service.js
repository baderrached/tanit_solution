import service_pic from "../assets/img/services.png";
import Business from "../assets/img/Business.svg";
import Marketing from "../assets/img/Team.svg";


const Service = (propos) => {
    return (

        <section id="services" className="services">
            <div className="container">

                <div className="section-title">
                    <h2>Services</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">
                    <div className="content col-xl-5 d-flex flex-column justify-content-center">
                        <img src={service_pic} className="img-fluid" alt="" />
                    </div>
                    <div className="col-xl-7">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">
                                <div className="col-lg-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="icon-box iconbox-blue">
                                        <div className="icon">
                                            <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                                            </svg>
                                            <i className="bx bxl-dribbble"></i>
                                        </div>
                                        <h4><a href="">Business Consulting</a></h4>
                                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
                                    <div className="icon-box iconbox-orange ">
                                        <div className="icon">
                                          <img src={Marketing} />
                                          
                                        </div>
                                        <h4><a href="">Marketing Management</a></h4>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <div className="icon-box iconbox-pink">
                                        <div className="icon">
                                       <img src={Business} />
                                            <i className="bx bx-tachometer"></i>
                                        </div>
                                        <h4><a href="">UX / Technical Design</a></h4>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="icon-box iconbox-teal">
                                        <div className="icon">
                                            <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"></path>
                                            </svg>
                                            <i className="bx bx-layer"></i>
                                        </div>
                                        <h4><a href="">Web Development</a></h4>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>

    )

}

export default Service 