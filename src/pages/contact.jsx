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
import { useEffect, useRef, useState } from "react";
import Fonav from "../components/fonnav";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Swal from "sweetalert2";
import { Ping } from 'ldrs/react';
import 'ldrs/react/Ping.css';

function Contact(){
  const navigate = useNavigate();
  const menuActive = useGenStore((s)=>s.menuActive);
  const contactSectionRef = useRef(null);
  
  // Form refs
  const emailRef = useRef("");  // NEW: Email field
  const party1Ref = useRef("");
  const party2Ref = useRef("");
  const otherPartiesRef = useRef("");
  const conflictTypeRef = useRef("");
  const additionalInfoRef = useRef("");
  
  // State
  const [captchaToken, setCaptchaToken] = useState(null);
  const captchaRef = useRef();
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    party1: "",
    party2: "",
    conflictType: "",
    additionalInfo: "",
  });

  const toContact =()=>{
    navigate("/contact");
  }
  
  useEffect(() => {
    Aos.init({ duration: 400 });
    
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
      });
    }
  }, []);
  
  useEffect(()=>{
    console.log(menuActive);
  },[menuActive]);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      email: "",
      party1: "",
      party2: "",
      conflictType: "",
      additionalInfo: "",
    };

    // Email validation
    const emailValue = emailRef.current.value.trim();
    if (!emailValue) {
      newErrors.email = "Email address is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }

    if (!party1Ref.current.value.trim()) {
      newErrors.party1 = "Party 1 name is required";
      valid = false;
    }

    if (!party2Ref.current.value.trim()) {
      newErrors.party2 = "Party 2 name is required";
      valid = false;
    }

    if (!conflictTypeRef.current.value.trim()) {
      newErrors.conflictType = "Type of conflict is required";
      valid = false;
    }

    if (!additionalInfoRef.current.value.trim()) {
      newErrors.additionalInfo = "Additional information is required";
      valid = false;
    } else if (additionalInfoRef.current.value.trim().length < 20) {
      newErrors.additionalInfo = "Please provide more detail (at least 20 characters)";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    if (!captchaToken) {
      Swal.fire({
        title: "Verification Required",
        text: "Please confirm you're not a robot.",
        icon: "warning",
        confirmButtonColor: "#CCF41C",
        confirmButtonText: "OK"
      });
      return;
    }

    const email = emailRef.current.value;
    const party1 = party1Ref.current.value;
    const party2 = party2Ref.current.value;
    const otherParties = otherPartiesRef.current.value;
    const conflictType = conflictTypeRef.current.value;
    const additionalInfo = additionalInfoRef.current.value;

    const url = "https://mccannamediationbackend-744x.onrender.com/sendEmail";

    const body = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email: ${email}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PARTIES INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Party 1: ${party1}
Party 2: ${party2}
Other Parties: ${otherParties || "N/A"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONFLICT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Type of Conflict: ${conflictType}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADDITIONAL INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${additionalInfo}
`;

    const data = {
      emUser: email,  // Now using the actual client email
      nameUser: `${party1} & ${party2}`,
      subject: `New Message | McCanna Mediation`,
      body: body,
      captcha: captchaToken,
    };

    setLoader(true);

    try {
      const response = await axios.post(url, data, {
        timeout: 30000,
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      setLoader(false);
      
      Swal.fire({
        title: "Message Sent!",
        text: response.data.message || "Your message has been sent. We will contact you shortly.",
        icon: "success",
        confirmButtonColor: "#adcf16",
        confirmButtonText: "Sounds Good!"
      });
      
      // Reset form
      if (emailRef.current) emailRef.current.value = "";
      if (party1Ref.current) party1Ref.current.value = "";
      if (party2Ref.current) party2Ref.current.value = "";
      if (otherPartiesRef.current) otherPartiesRef.current.value = "";
      if (conflictTypeRef.current) conflictTypeRef.current.value = "";
      if (additionalInfoRef.current) additionalInfoRef.current.value = "";
      
      if (captchaRef.current) {
        captchaRef.current.reset();
      }
      setCaptchaToken(null);
      
    } catch (error) {
      setLoader(false);
      
      let errorMessage = "Failed to send consultation request. Please try again.";
      
      if (error.response) {
        errorMessage = error.response.data?.message || errorMessage;
      } else if (error.request) {
        errorMessage = "Network error. Please check your connection and try again.";
      }
      
      Swal.fire({
        title: "Error",
        text: errorMessage,
        icon: "error",
        confirmButtonColor: "#CCF41C",
        confirmButtonText: "Try Again"
      });
    }
  };

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const onCaptchaExpired = () => {
    setCaptchaToken(null);
    Swal.fire({
      title: "Verification Expired",
      text: "Please verify again that you're not a robot.",
      icon: "info",
      confirmButtonColor: "#CCF41C",
      confirmButtonText: "OK"
    });
  };

  return(
    <div>
      <helmet>
        <title>Contact James McCanna | Free Consultation</title>
        <meta name="description" content="Request a free initial consultation. Provide your email, party names, type of conflict, and case details. Schedule today." />
      </helmet>
      
      <div className={`floatNav ${menuActive ? "floatNavActive" : " "}`}>
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
              <h2> <span>Mediation</span> is conflict's way of <span> looking at itself</span>.</h2>
              <span className="said">Jeff Cohen</span>
              <button className="priBtn" onClick={()=>toContact()}>Schedule A Consultation</button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="whymediation" ref={contactSectionRef}>
        <div className="whymedPlc">
          <div className="contactLeft">
            <h2> <span>Contact</span> </h2>
            <h2> James McCanna </h2>
            <p>Please fill out this form to request a free initial consultation.</p>
          </div>
          <div className="contactRight">
            <div className="contactForm">
              <div className="contactBox">
                
                {/* NEW: Email Input Field */}
                <div className="contactInputBox">
                  <p>Your Email Address <span className="required">*</span></p>
                  <div className="ciBox">
                    <input 
                      type="email" 
                      ref={emailRef} 
                      placeholder="you@example.com" 
                    />
                  </div>
                  {errors.email && <div className="error-text">{errors.email}</div>}
                </div>
                
                <div className="contactInputBox">
                  <p>1. Name of the Parties <span className="required">*</span></p>
                  <div className="ciBox">
                    <input type="text" ref={party1Ref} placeholder="Party 1" />
                  </div>
                  {errors.party1 && <div className="error-text">{errors.party1}</div>}
                  <div className="ciBox">
                    <input type="text" ref={party2Ref} placeholder="Party 2" />
                  </div>
                  {errors.party2 && <div className="error-text">{errors.party2}</div>}
                  <div className="ciBox">
                    <input type="text" ref={otherPartiesRef} placeholder="Other Parties (if any)" />
                  </div>
                </div>
                
                <div className="contactInputBox">
                  <p>2. Type of Conflict <span className="required">*</span></p>
                  <div className="ciBox">
                    <input type="text" ref={conflictTypeRef} placeholder="E.g. Lawsuit, Dispute, etc." />
                  </div>
                  {errors.conflictType && <div className="error-text">{errors.conflictType}</div>}
                </div>
                
                <div className="contactInputBox">
                  <p>3. Additional Information <span className="required">*</span></p>
                  <div className="ciBoxT">
                    <textarea ref={additionalInfoRef} placeholder="If a lawsuit, provide the court, the case number and the lawyers involved. Also provide the trial date, if any and any pending deadlines about mediation. (Minimum 20 characters)"></textarea>
                  </div>
                  {errors.additionalInfo && <div className="error-text">{errors.additionalInfo}</div>}
                </div>
                
                <div className="captcha-container">
                  <ReCAPTCHA
                    ref={captchaRef}
                    sitekey="6LcB894sAAAAANqW4M7W_G5SLI9IMH5QS8NIxkoZ"
                    onChange={onCaptchaChange}
                    onExpired={onCaptchaExpired}
                    theme="light"
                  />
                </div>
                
                <button className="secBtn" onClick={handleSubmit} disabled={loader}>
                  {loader ? <Ping size="30" speed="1" color="#CCF41C" /> : "Submit Message"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <footer>
        <FooterComp />
      </footer>
    </div>
  );
}

export default Contact;