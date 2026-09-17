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

function Mediation(){
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
  <title>McCanna Mediation | Key Benefits</title>
  <meta name="description" content="Cost savings, control, confidentiality, flexibility. Mediation saves time and preserves relationships. Get started today." />
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
                        <h2>An Ounce Of <span>Mediation</span> Is Worth A Pound</h2>
<h2> Of Litigation and A Ton Of <span>Arbitration</span>.</h2>
                        <span className="said">Joseph Grybaum</span>
                        <button className="priBtn" onClick={()=>toContact()}>Schedule A Consultation</button>
                    </div>
                </div>
                </div>
                
            </section>
            <section className="whymediation">
                <div className="whymedPlc">
                    <div className="whyMedLeft">
                        <h2> <span>Key Benefits</span> </h2>
                        <h2> Of Mediation </h2>
                        <button className="secBtn" onClick={()=>toContact()}>Get Started Today</button>
                    </div>
                    <div className="whyMedRight">
                    <div className="whyMedBoxed">
                       <div className="wmb wmb1">
                                                <div className="wmbCont">

                        <p>Cost and time savings</p>
                        <p>Mediation can be much faster
and less expensive than
going to court. If you are
already in litigation, it will take
months or even years off of
resolution and save you
significant legal fees.</p>
</div>
<div className="wmbLine"></div>
                       </div>
                       <div className="wmb wmb2">
                                                <div className="wmbCont">

                        <p>Control over the outcome</p>
                        <p>The parties, not the mediator
or a judge, decide the
outcome. You are in charge
and can take control of how
the conflict impacts you.</p>
</div>
<div className="wmbLine"></div>
                       </div>
                       <div className="wmb wmb3">
                                                <div className="wmbCont">

                        <p>Improved communication</p>
                        <p>A neutral third party mediator
facilitates discussion,
allowing each party to be
heard and to understand the
other's perspective - the goal
is to reach effective solutions
and resolution.
</p>
</div>
<div className="wmbLine"></div>

                       </div>
                       <div className="wmb wmb4">
                                                <div className="wmbCont">

                        <p>Confidentiality</p>
                        <p>All discussions in mediation
are private and confidential,
creating a safe space for
open communication.
</p>
</div>
<div className="wmbLine"></div>

                       </div>
                       <div className="wmb wmb5">
                                                <div className="wmbCont">

                        <p>Preservation of relationships</p>
                        <p>By focusing on problem-
solving rather than winning or
losing, mediation may help
repair and preserve
relationships, especially in
situations like workplace
disputes where ongoing
communication is necessary.
</p>
</div>
<div className="wmbLine"></div>

                       </div>
                       <div className="wmb wmb6">
                        <div className="wmbCont">
<p>Flexibility</p>
                        <p>The process is informal and
flexible, allowing parties to
address a wide range of
issues in a way that works for
them, not according to strict
legal rules.
</p>
                        </div>
                        
<div className="wmbLine"></div>

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

export default Mediation;
