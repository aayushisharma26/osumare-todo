import girl from "../assets/girl.png"
import arrow from "../assets/arrow.png"
import girlname from "../assets/girlname.png"

export function Testimonial(){
    return(
        <div>
            <div className="test-head">
            Customer Testimonials
            </div>
            <div className="test-head2">
            This tool has transformed my productivity and organization!
            </div>
            <div className="test-container">
                <div className="cont1">
                    <div className="test-text1">
                    <p className="test-cont1-text">Using this website has made my <br />tasks so much easier! I can't <br /> imagine my day without it."</p>
                    <img src= {girlname}alt="" className="test-girl-name" />
                  
                    </div>
                    <img src={arrow} alt="" className="test-arrow" />
                </div>
                <div className="cont2">
                    <div className="text2">
                        <img src={girl} alt="" className="test-girl"/>

                    </div>
                </div>
            </div>



        </div>
    )
}