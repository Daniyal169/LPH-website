import React from 'react'
import "./ServiceSection.css"
import cloud from "../../asserts/img/cloud.png";
import cyber from "../../asserts/img/cyber.png";
import consul from "../../asserts/img/consul.png";
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

                        image={cloud}
                        heading={"Cloud Computing"}
                        detail={"Expert business consulting services to accelerate growth."}
                    />
                </div>
                <div >
                    <ServiceCard

                        image={cyber}
                        heading={"CyberSecurity"}
                        detail={"Strategic investments for long-term success."}
                    />
                </div>
                <div >
                    <ServiceCard

                        image={consul}
                        heading={"Consultancy"}
                        detail={"Cutting-edge technology solutions for your business."}
                    />
                </div>
            </div>
        </div>
    )
}

export default ServiceSection