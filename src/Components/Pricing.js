import { useTranslation } from "react-i18next";

const Pricing =  (props) => {
    const { t } = useTranslation();

    return (

     
       <section id="pricing" className="pricing">
       <div className="container">

         <div className="section-title">
           <h2>{t('Pricing')}</h2>
           <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
         </div>

         <div className="row no-gutters">

           <div className="col-lg-3 px-2 box">
             <h3>Free</h3>
             <h4>$0<span>per month</span></h4>
             <ul>
               <li><i className="bx bx-check"></i> Quam adipiscing vitae proin</li>
               <li><i className="bx bx-check"></i> Nec feugiat nisl pretium</li>
               <li><i className="bx bx-check"></i> Nulla at volutpat diam uteera</li>
               <li className="na"><i className="bx bx-x"></i> <span>Pharetra massa massa ultricies</span></li>
               <li className="na"><i className="bx bx-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
             </ul>
             <a href="#" className="btn-buy">Get Started</a>
           </div>

           <div className="col-lg-3 px-2 box featured">
             <h3>Business</h3>
             <h4>$29<span>per month</span></h4>
             <ul>
               <li><i className="bx bx-check"></i> Quam adipiscing vitae proin</li>
               <li><i className="bx bx-check"></i> Nec feugiat nisl pretium</li>
               <li><i className="bx bx-check"></i> Nulla at volutpat diam uteera</li>
               <li><i className="bx bx-check"></i> Pharetra massa massa ultricies</li>
               <li><i className="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
             </ul>
             <a href="#" className="btn-buy">Get Started</a>
           </div>

           <div className="col-lg-3 px-2 box">
             <h3>Developer</h3>
             <h4>$49<span>per month</span></h4>
             <ul>
               <li><i className="bx bx-check"></i> Quam adipiscing vitae proin</li>
               <li><i className="bx bx-check"></i> Nec feugiat nisl pretium</li>
               <li><i className="bx bx-check"></i> Nulla at volutpat diam uteera</li>
               <li><i className="bx bx-check"></i> Pharetra massa massa ultricies</li>
               <li><i className="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
             </ul>
             <a href="#" className="btn-buy">Get Started</a>
           </div>

           <div className="col-lg-3 px-2 box">
             <h3>Developer</h3>
             <h4>$49<span>per month</span></h4>
             <ul>
               <li><i className="bx bx-check"></i> Quam adipiscing vitae proin</li>
               <li><i className="bx bx-check"></i> Nec feugiat nisl pretium</li>
               <li><i className="bx bx-check"></i> Nulla at volutpat diam uteera</li>
               <li><i className="bx bx-check"></i> Pharetra massa massa ultricies</li>
               <li><i className="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
             </ul>
             <a href="#" className="btn-buy">Get Started</a>
           </div>

         </div>

       </div>
     </section>

    )
}
export default Pricing 