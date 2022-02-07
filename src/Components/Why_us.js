import { useTranslation } from "react-i18next";

const Why_us = (propos) => {
    const { t } = useTranslation();
    
    return(
        <section id="why-us" className="why-us">
        <div className="container">

            <div className="row">

                <div className="col-lg-4">
                    <div className="box">
                        <h4>{t('free_intro')}</h4>
                        <p>{t('free_intro_desc')}</p>
                    </div>
                </div>

                <div className="col-lg-4 mt-4 mt-lg-0">
                    <div className="box">
                        <h4>{t('affordable')}</h4>
                        <p>{t('affordable_desc')}</p>
                    </div>
                </div>

                <div className="col-lg-4 mt-4 mt-lg-0">
                    <div className="box">
                        <h4>{t('accessible')}</h4>
                        <p>{t('accessible_desc')}</p>
                    </div>
                </div>

            </div>

        </div>
    </section>
    )
}
export default Why_us