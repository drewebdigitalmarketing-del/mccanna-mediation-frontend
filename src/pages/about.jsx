import HeroComp from "../components/heroComponent";
import Navbar from "../components/nav";
import FooterComp from "../components/footer";
import { useNavigate } from "react-router-dom";
import Qoutes from "../media/qoutation-Photoroom.png"
import helmet from "helmet";
import james from "../media/james.jpg"
import "../css/services.css"
import "aos/dist/aos.css";
import Aos from "aos";
import useGenStore from "../store/store";
import { useEffect } from "react";
import Fonav from "../components/fonnav";

function About(){
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

    return(
        <div>
             <helmet>
  <title>James McCanna | About</title>
  <meta name="description" content="BA Philosophy, JD, Tribal Prosecutor, King County Prosecutor, Tribal Judge, 11 years In-house counsel, Private practice since 2014." />
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

                     <h2>   Conflict Is <span>Inevitable</span> But Combat Is  </h2>
                        <h2><span>Optional</span>.</h2>
                        
                        <span className="said">Max Lucado</span>
                        <button className="priBtn" onClick={()=>toContact()}>Schedule A Consultation</button>
                    </div>
                </div>
                </div>
                
            </section>
            <section className="about">
                <div className="aboutPlc">
                    <div className="aboutTop">
                        <div className="atLeft">
                            <div className="atLeftIntro">
                                <h2><span>About</span></h2>
                                <h2>James McCanna</h2>
                                <img src={james} alt="" />
                            </div>
                        </div>
                        <div className="atRight">
                            <div className="atBoxed">
                                                            <div className="abCont">

                                    <p><span>Education and Experience</span></p>
                                    <div className="actBoxedLine">

                                    </div>

                                    <ul>
  <li>B.A - Linfield College with a BA in Philosophy (1980)</li>
  <li>J.D - Northwestern School of Law at Lewis and Clark College (1992) OR</li>
  <li>Tribal Prosecutor w/experience in Indian Child Welfare cases</li>
  <li>King County prosecutor (Many trials)</li>
  <li>Tribal Judge Tulalip Tribal Court and Pro Tem Judge at Port Gamble S'Klallam Tribal Court</li>
  <li>Guardian Ad litem work in Washington - Reporting on family issues on behalf of children in divorce proceedings</li>
  <li>In-house counsel for Chugach Alaska corporation for 11 years as the Senior Employment Practices Counsel - employer-side employee issues, Wage Determination claims, federal labor law, federal contracts, Office Of Federal Contract Compliance Program audits and Department of Labor investigations and federal and state EEO investigations</li>
  <li>Private practice Solo office since 2014 advising primarily in employment related cases. Also, Business development, Construction contracts, HOA litigation, federal Wage Determination disputes and audits.</li>
</ul>

                                </div>
                            </div>
                        </div>

                       
                    </div>
                    <div className="aboutBtm">
                    <div className="aboutBtmLeft">
                        <div className="atBoxed">
                        <div className="abCont">
                             <p>Training</p>
                               <div className="actBoxedLine">

                                    </div>

                          <p>In addition to participating in many mediations as a litigator
James has extensive training from the 40- hour King County
Conflict Resolution course in 2022 and the 40-hour Mediating
the Litigated Case from the Straus Institute for Dispute
Resolution at the Caruso School of Law - Pepperdine
University in 2025.</p>
                        </div>
                    </div>
                    </div>
                    <div className="aboutBtmRight">
                                                <div className="atBoxed">

                        <div className="abCont">
                            <p>Personal</p>
                               <div className="actBoxedLine">

                                    </div>

                            <ul>
  <li>A long-time resident of Kitsap County.</li>
  <li>A lifelong musician and singer-songwriter with way too many guitars and too little time to play them all.</li>
  <li>James is married to the love of his life, Melissa.</li>
  <li>He is a proud father to his three children and celebrates the wonderful contributions they make to the community.</li>
</ul>
                        </div>
                        </div>
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

export default About;
