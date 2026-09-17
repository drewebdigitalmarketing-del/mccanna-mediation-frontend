import HeroComp from "../components/heroComponent";
import Navbar from "../components/nav";
import FooterComp from "../components/footer";
import { useNavigate } from "react-router-dom";
import helmet from "helmet";
import "../css/landing.css"
import "aos/dist/aos.css";
import Aos from "aos";
import useGenStore from "../store/store";
import { useEffect } from "react";
import Fonav from "../components/fonnav";

function Landing(){
        const navigate= useNavigate()
  const menuActive = useGenStore((s)=>s.menuActive)
  const toContact =()=>{
    navigate("/contact")
  }
  const toAbout =()=>{
    navigate("/about")
  }
  const toApproach =()=>{
    navigate("/approach")
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
  <title>McCanna Mediation | Conflict Resolution</title>
  <meta name="description" content="Safe, confidential mediation for employment, construction, HOA & federal wage disputes. Free consultation. Kitsap County." />
</helmet>
      

        <div className= {`floatNav ${menuActive ? "floatNavActive" : " "}`} >
            <Fonav />
        </div>
            <section className="hero">
                <div className="heroWrap">
                    <div className="floatingNav">
                         <Navbar/>
                    </div>
                  <HeroComp />
                </div>
            </section>
            <section className="welcome">
                <div className="wlcomPlacer">
                    <div className="wlcmIntro">
                        <div className="wlcIntroLeft">
                            <h2><span>Welcome to</span></h2>
                        <h2>McCanna Mediation</h2>
                        </div>
                        <div className="wlcIntroRight">
                            <p>McCanna Mediation, LLC is here to help persons in
conflict resolve their differences and/or reach
settlement in a safe, confidential and neutral
environment.</p>
                        </div>
                        

                    </div>
                    <div className="wlcmBoxed">
                        <div className="wlcmBox wlcmBox1" data-aos="fade-up">
                            <div className="wlmBoxCont">
                                <h3><span>I</span> Understand</h3>
                                 <p>
                                    Having been a prosecutor, working in Indian Country, working as in-house
                                    counsel for a major federal contractor for over eleven years, and a civil
                                    litigator for the last 15 years I understand conflict and how parties get
                                    there. I have also learned how parties can settle their conflict and get on
                                    with their life.
                                </p>
                                <button className="secBtn" onClick={()=>toAbout()}>Learn More</button>
                            </div>
                        </div>
                        <div className="wlcmBox wlcmBox2" data-aos="fade-up">
                                                        <div className="wlmBoxCont">

                            <h3><span>My</span> Approach</h3>
                            <p>I listen first to learn what the issue is, if any. Then, we work towards identifying the core issues by facilitating communications.</p>
                            <button className="secBtn" onClick={()=>toAbout()}>Learn More</button>
                        </div>
                        </div>
                        <div className="wlcmBox wlcmBox3" data-aos="fade-up">
                                                        <div className="wlmBoxContL">

                             <h3><span>Free</span> Initial Consultation</h3>
                            <p>I am happy to do a free consultation for up to 30 minutes.</p>
                            <button className="secBtn" onClick={()=>toApproach()}>   Learn More</button>
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
export default Landing;
