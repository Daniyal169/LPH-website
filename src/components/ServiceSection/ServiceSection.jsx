import React from 'react'
import "./ServiceSection.css"
import design from "../../asserts/img/design.png";
import coding from "../../asserts/img/coding.png";
import coding2 from "../../asserts/img/coding2.png";
import design2 from "../../asserts/img/design2.png";
import ServiceCard from './ServiceCard';

function ServiceSection() {
    return (
        <div className="serviceSection">
            <div className="ser-left">

                <span  >Services</span>
                <span > Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa similique, illum repellat facere architecto quia. Odio ipsam doloribus adipisci quasi voluptatum rerum temporibus velit at rem enim dignissimos repellat doloremque tempora consequuntur quisquam, molestiae dolorem iusto saepe. Nostrum nisi, sed asperiores cupiditate, inventore tempore, aut molestiae quisquam porro fugit quae.</span>
                <a href={"https://www.fiverr.com/s/wkzbQ2D"} target='__blank' data-aos="slide-up">
                    <button className=" btn mt-8">Lets Work</button>
                </a>
            </div>

            <div className="ser-right">
                <div >
                    <ServiceCard

                        image={design2}
                        heading={"Consulting"}
                        detail={"Expert business consulting services to accelerate growth."}
                    />
                </div>
                <div >
                    <ServiceCard

                        image={coding}
                        heading={"Investment"}
                        detail={"Strategic investments for long-term success."}
                    />
                </div>
                <div >
                    <ServiceCard

                        image={design}
                        heading={"Tech Solutions"}
                        detail={"Cutting-edge technology solutions for your business."}
                    />
                </div>
            </div>
        </div>
    )
}

export default ServiceSection