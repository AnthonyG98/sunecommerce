import "./pages.css";
import sunVideo from "../Images/video.mp4"
import sunHomeImg from "../Images/sunbackground.jpg"

export function Home(){
    return (
        <>
        <div className="home-nav-container">
            <p>HOME</p>
            <p>ABOUT US</p>
            <p>SHOP</p>
            <i class="fas fa-shopping-cart"></i>
        </div>
        <div className="home-container">
            <video autoPlay muted loop className="video">
                <source src={sunVideo} type="video/mp4" />
            </video>
            <div className="home-img-container">
                <h1 className="home-head">SUN SALE</h1>
            </div>
        </div>
        <div className="home-section-one">
            <img src={sunHomeImg} alt="Home sunset" className="sunImg"/>
            <div className="home-sec-text">
                <h1>Sun Rise</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat.</p>
            </div>
        </div>
        </>
    )
}