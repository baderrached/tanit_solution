import { useTranslation } from "react-i18next";

const About =  (props) => {
    const { t } = useTranslation();
    return (
        <section id="about" className="about">
            <div className="container">

                <div className="row content">
                    <div className="col-lg-6">
                        <h2>{t('about1')}</h2>
                        <h3>{t('about2')}</h3>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                        <p> 
                            {t('about3')}
                        </p>
                        
                    </div>
                </div>

            </div>
        </section>
    )
}
export default About