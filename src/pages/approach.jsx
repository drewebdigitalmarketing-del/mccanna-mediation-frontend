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

function Approach(){
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
  <title>McCanna Mediation | My Approach</title>
  <meta name="description" content="Listen, learn, identify common ground. Contact today." />
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
                        <h2>Sometimes The Best Way To <span>Control</span> </h2>
<h2> Something Is To  <span>Let It Go</span>. </h2>
                        <span className="said">James McCanna</span>
                        <button className="priBtn" onClick={()=>toContact()}>Schedule A Consultation</button>
                    </div>
                </div>
                </div>
                
            </section>
            <section className="myApproach">
                <div className="myapproachPlc">
                    <div className="appTtile">
                        <h2> <span>My </span>Approach </h2>
                    </div>
                    <div className="appBox">
                    <div className="appCont">
                        <div className="appContp">
                             <p>First and foremost I will listen and learn from the parties, review their mediation packets, if any, and initially meet with each party individually (and with counsel if there is counsel) and learn what the issues are.</p>
                        <p>I will then shuttle back and forth between the parties and hopefully identify common ground and potential paths to resolution.</p>
                       
<p><span>James McCanna</span></p>
                        </div>
                       
<button className="secBtn" onClick={()=>toContact()}>Contact Me Today</button>

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

export default Approach;
