import { useNavigate } from "react-router-dom";
function HeroComp(){
    const navigate = useNavigate()
    const toContact=()=>{
        navigate("/contact")
        console.log("nier")
    }

    return(
        <diV className="heroCont">
            <div className="heroContCover">
                <div className="heroContPlacer">
                    <h1><span className="slantText">Conflict Resolution:</span></h1>
                    <h1>Because Life Is <span>Too Short</span>. </h1>
                    <button className="priBtn" onClick={()=>toContact()}>Schedule A Consultation</button>
                </div>
            </div>
        </diV>
    )
}
export default HeroComp;

