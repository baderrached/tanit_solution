import { useTranslation } from "react-i18next";

const Count = (props) => {
    const { t } = useTranslation();

    return(
        <section id="counts" className="counts section-bg">
        <div className="container">

            <div className="row">

                <div className="col-lg-3 col-md-6">
                    <div className="count-box about">
                        <i></i>
                        <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                        <p id="about">{t('happy_clients')}</p>
                        <h2 id="about">12</h2>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                    <div className="count-box">
                        <i className="bi bi-journal-richtext"></i>
                        <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                        <p>{t('projects')}</p>
                        <h2 id="about">45</h2>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                    <div className="count-box">
                        <i className="bi bi-headset"></i>
                        <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                        <p>{t('hours_support')}</p>
                        <h2 id="about">300</h2>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                    <div className="count-box">
                        <i className="bi bi-people"></i>
                        <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                        <p>{t('hard_workers')}</p>
                        <h2 id="about">10</h2>
                    </div>
                </div>

            </div>

        </div>
    </section>
    )
}
export default Count