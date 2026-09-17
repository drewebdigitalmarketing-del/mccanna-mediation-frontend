import { useNavigate } from "react-router-dom"
import "../css/fonnav.css"
import useGenStore from "../store/store"

function Fonav(){
    const navigate = useNavigate()
    const setMenuActive=useGenStore((s)=>s.setMenuActive)
    const toHome=()=>{
                setMenuActive(false)

        navigate("/")
    }

    const toPractice=()=>{
        setMenuActive(false)
        navigate("/practice-areas")
    }
    const toServices=()=>{
                setMenuActive(false)

        navigate("/services")
    }
    const toAbout=()=>{
                setMenuActive(false)

        navigate("/about")
    }
    const toContact=()=>{
                setMenuActive(false)

        navigate("/contact")
    }
    const toApproach=()=>{
                setMenuActive(false)

        navigate("/approach")
    }
    const toMediation=()=>{
                setMenuActive(false)

        navigate("/mediation")
    }
    const closeMenu=()=>{
                setMenuActive(false)
    }
    return(
        <div className="fonnavWrap">
            <p onClick={()=>toHome()}>Home</p>
            <p onClick={()=>toServices()}>Services</p>
            <p onClick={()=>toApproach()}>My Approach</p>
            <p onClick={()=>toMediation()}>Why Mediation</p>
            <p onClick={()=>toAbout()}>About</p>
            <p onClick={()=>toContact()}>Contact</p>
            <div className="cancelFon" onClick={()=>closeMenu()}>
                  <p>X</p>
            </div>

        </div>
    )
}

export default Fonav;