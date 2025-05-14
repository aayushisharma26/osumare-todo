import leftarrow from "../assets/leftarrow.png"
import rightarrow from "../assets/rightarrow.png"
import logoisump from "../assets/logisump.png"
import manplay from "../assets/play.png"
import facebook from "../assets/facebook.png"
import google from "../assets/google.png"
import youtube from "../assets/youtube.png"
import twitch from "../assets/twitch.png"
import pintrest from "../assets/pintrest.png"
import { useState } from "react"
import SignupModal from "./SignupModal"

// Create a global event for communication between components (note: don't use this globally like this for multiple events)
export function Hero() {
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

    const openSignupModal = () => {
        setIsSignupModalOpen(true);
    };

    const closeSignupModal = () => {
        setIsSignupModalOpen(false);
    };
    
    const handleFormSubmission = (formData) => {
        console.log("Hero component received form data:", formData);
        
        // Create a new CustomEvent each time with the form data
        const signupEvent = new CustomEvent('user-signup', {
            detail: formData, // Pass the form data directly as the event's detail
        });
        
        // Dispatch the custom event
        window.dispatchEvent(signupEvent);
        
        // Close the modal
        setIsSignupModalOpen(false);
    };

    return (
        <div className="hero">
            <div className="hero-content">
                <h1 className="text1">
                    Simplify Your Life with Our<br />Todo App
                </h1>
                <p className="text2">
                    Stay organized and boost your productivity with our intuitive todo website.<br />
                    Experience a modern approach to task management that fits your lifestyle.
                </p>
                <div className="but-main">
                    <button className="get-started" onClick={openSignupModal}>Get started</button>
                    <button className="learn-more">Learn more</button>
                </div>

                <div className="section1">
                    <div className="organize">
                        <div className="organize-content">
                            <p className="organ">Organize.</p>
                            <p className="organ-text1">
                                Achieve.<br />
                                Relax.
                            </p>
                            <p className="organ-text2">
                                Turn clutter into clarity, chaos into control, and dreams into done.<br />
                                Bold visions into market success
                            </p>
                        </div>
                        <div className="organ-but">
                            <button className="organ-started" onClick={openSignupModal}>Get Started Today</button>
                            <button className="organ-discover">Discover Features</button>
                        </div>
                    </div>

                    <div className="man">
                        <div className="man-task">
                            Your Tasks.<br />
                            Our Tools.
                        </div>
                        <div className="man-nav">
                            <button className="nav-button left"><img src={leftarrow} alt="Previous" /></button>
                            <button className="nav-button right"><img src={rightarrow} alt="Next" /></button>
                        </div>
                        <div className="man-content">
                            <div className="profile-info">
                                <div className="logoipsum">
                                    <img src={logoisump} alt="Profile" className="logoisump" />
                                </div>
                                <div className="man-name">
                                    <div className="man-title">Freddie Halvorson</div>
                                    <div className="man-position">Chief Productivity Enthusiast</div>
                                </div>
                            </div>
                            <button className="play-button-container">
                                <img src={manplay} alt="Play" className="play-button" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="social-footer">
                    <img src={google} alt="Google" />
                    <img src={facebook} alt="Facebook" />
                    <img src={youtube} alt="YouTube" />
                    <img src={pintrest} alt="Pinterest" />
                    <img src={twitch} alt="Twitch" />
                </div>
            </div>
            
            <SignupModal 
                isOpen={isSignupModalOpen} 
                onClose={closeSignupModal} 
                onSubmit={handleFormSubmission}
            />
        </div>
    );
}
