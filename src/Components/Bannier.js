import { useTranslation } from "react-i18next";

import bannier_pic from "../assets/img/hero-img.png";
const Bannier = (props) => {
    const { t } = useTranslation();
    return (
        <section id="hero" className="d-flex align-items-center">

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1>{t('Bannier_title')}</h1>
                        <ul>
                            <li>
                                <i className="ri-check-line"></i>
                                We are navigators in the age of digital transformation.
                            </li>
                            <li>
                                <i className="ri-check-line"></i>
                                We are a digital transformation consultancy that operates at the intersection of People, Data and Technology.
                            </li>
                         
                        </ul>
                        <div className="mt-3">
                            <a href="#about" className="btn-get-started scrollto">Get Started</a>
                            <a href="" className="btn-get-quote">Request a Quote</a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img">
                        <img src={bannier_pic} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Bannier