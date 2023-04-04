import React from 'react';
import aboutImg from "../../assets/about-img.jpg";
import { FiCheck } from "react-icons/fi";
import "./about.css";

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="about__grid container grid">
                <div className="about__img-wrapper">
                    <img src={aboutImg} alt="" className="about__img" />
                </div>

                <div className="about__content">
                    <h2 className="section__title title-left" data-title='About Us'>Fresh Quality And Organic Tasty Coffee House For You</h2>

                    <p className="about__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequuntur sapiente deserunt blanditiis ut praesentium nostrum facere mollitia itaque, tempore cum qui rem, culpa possimus suscipit asperiores libero. Porro, magnam temporibus.</p>

                    <div className="about__details grid">
                        <p className="about__details-description">
                            <FiCheck />
                            Itaque placeat obcaecati corporis et quos, deserunt assumenda.
                        </p>
                        <p className="about__details-description">
                            <FiCheck />
                            Error eum aut iusto, voluptatum enim excepturi.
                        </p>
                        <p className="about__details-description">
                            <FiCheck />
                            Nostrum similique voluptatem sit, sed deleniti error sequi.
                        </p>
                    </div>

                    <a href="#team" className="btn">Our Experts</a>
                </div>
            </div>
        </section>
    )
}

export default About