import { useTranslation } from "react-i18next";

const Footer =  (props) => {
    const { t } = useTranslation();

    return (

    
      <footer id="footer">

        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>TANIT SOLUTION</h3>
                  <strong>Phone:</strong> +55 34 99765 3456 <br />
                  <strong>Email:</strong> hello@tanitsolutions.com<br />
              </div>
              <div className="col-lg-6  col-md-6 footer-contact">
              <br /><br /><br />
                © All rights reserved to TANIT SOLUTION / 2021-2022
              </div>
            </div>
          </div>
        </div>

       
      </footer>
   
    )
}
export default Footer 