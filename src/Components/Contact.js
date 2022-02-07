import { useTranslation } from "react-i18next";

const Contact =(propos) => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="contact section-bg">
        <div className="container">

            <div className="section-title">
                <h2>{t('Contact_title')}</h2>
            </div>

            <div className="row">

                <div className="col-lg-6">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="info-box">
                                <i className="bx bx-map"></i>
                                <h3>{t('our_adress')}</h3>
                                <p>R. Luiz Claudio Pascolini, Uberaba, Brazil</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-box mt-4">
                                <i className="bx bx-envelope"></i>
                                <h3>{t('email_us')}</h3>
                                <p>hello@tanitsolution.com</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-box mt-4">
                                <i className="bx bx-phone-call"></i>
                                <h3>Whatsapp</h3>
                                <p>+55 34997653456</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-lg-6 mt-4 mt-lg-0">
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                        </div>
                        <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">{t('message_sent')}</div>
                        </div>
                        <div className="text-center"><button type="submit">{t('send_message')}</button></div>
                    </form>
                </div>

            </div>

        </div>
    </section>
    )
}
export default Contact