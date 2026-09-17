import HeroComp from "../components/heroComponent";
import Navbar from "../components/nav";
import FooterComp from "../components/footer";
import { useNavigate } from "react-router-dom";
import Qoutes from "../media/qoutation-Photoroom.png"
import helmet from "helmet";
import "../css/services.css"
import "aos/dist/aos.css";
import Aos from "aos";
import useGenStore from "../store/store";
import { useEffect } from "react";
import Fonav from "../components/fonnav";

function Services(){
        const navigate= useNavigate()
  const menuActive = useGenStore((s)=>s.menuActive)
  const toContact =()=>{
    navigate("/contact")
  }
  
    useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);
  useEffect(()=>{
   console.log(menuActive)
  },[menuActive])
const testimonials = [
  { words1: "Civil Rights", words2: "Class action" },
  { words1: "Construction Defects", words2: "Construction Performance" },
  { words1: "Construction Breach", words2: "Civil Contracts" },
  { words1: "Property Line Disputes", words2: "Copyright" },
  { words1: "Discrimination", words2: "Employment" },
  { words1: "Discrimination", words2: "Wrongful Termination" },
  { words1: "Retaliation", words2: "Disability" },
  { words1: "Wage Disputes", words2: "Federal Contracting" },
  { words1: "OFCCP", words2: "DOL-Wages" },
  { words1: "Federal Contract Compliance", words2: "Civil Fraud" },
  { words1: "Qui Tam Whistleblower", words2: "Intellectual Property" },
  { words1: "Medical malpractice", words2: "Personal injury" },
  { words1: "Products liability", words2: "Sexual abuse" },
  { words1: "Sexual harassment", words2: "Wrongful death" }
];

    return(
        <div>
         
<helmet>
  <title>McCanna Mediation | Services</title>
  <meta name="description" content="Civil Rights, Class Action, Construction Defects, Performance & Breach. Schedule a consultation." />
</helmet>


        <div className= {`floatNav ${menuActive ? "floatNavActive" : " "}`} >
            <Fonav />
        </div>
            <section className="hero heroPaged">
                <div className="heroPagedDark">
<div className="heroWrap">
                    <div className="floatingNav">
                         <Navbar/>
                    </div>
                    <div className="heroPagedWrap">
                        <img src={Qoutes} alt="" />
                        <h2>Never <span>Cut</span> What You Can <span>Untie</span>.</h2>
                        <span className="said">Joseph Joubert</span>
                        <button className="priBtn" onClick={()=>toContact()}>Schedule A Consultation</button>
                    </div>
                </div>
                </div>
                
            </section>
            <section className="servicesSection">
                <div className="servPlcer">
                    <div className="servLeft">
                        <h2>Services</h2>
                        <h2>Provided</h2>
                        <button className="terBtn" onClick={()=>toContact()}>Get Started Today</button>
                        
                    </div>
                    <div className="servRight">
      <div className="testWrapContainer" >
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <div className="testWrap" key={i}>
                <div className="textBox1">
                  <p className="testUserWords">{testimonial.words1}</p>
                  <div className="textBoXLine"></div>

                </div>
                <div className="textBox2">
                  <p className="testUserWords">{testimonial.words2}</p>
                                    <div className="textBoXLine"></div>


                </div>

           
            </div>
          ))}

      </div>
 
                    </div>

                </div>


            </section>

          
            <footer>
            <FooterComp />

            </footer>
        </div>
    )
}
export default Services;
