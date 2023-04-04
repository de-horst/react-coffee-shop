import React from 'react';
import chooseImg from '../../assets/choose.jpg';
import coffeeMug from '../../assets/coffee-mug.svg';
import coffeeBeans2 from '../../assets/coffee-beans-2.svg';
import coffeeBeans3 from '../../assets/coffee-beans-3.svg';
import "./choose.css";

const Choose = () => {
    return (
        <section className="choose section">
            <div className="choose__grid container grid">
                <div className="choose__content">
                    <h2 className="section__title title-left" data-title="Why Choose Us">
                        Coffero Most Out Of Your Favorite & Tasty Coffee House
                    </h2>

                    <p className="choose__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim distinctio vitae quae corrupti iure quia dolorum? Excepturi, at ut fuga rerum voluptates quod incidunt ab iste dolores sunt, dicta accusamus alias.
                    </p>

                    <div className="choose__details grid">
                        <div className="choose__details-item">
                            <div className="choose__details-img-wrapper">
                                <img src={coffeeMug} alt="" className="choose__details-img" />
                            </div>

                            <div>
                                <h3 className="choose__details-title">Awesome Aroma</h3>
                                <p className="choose__details-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe error fuga totam porro asperiores eaque incidunt, adipisci eius!</p>
                            </div>
                        </div>

                        <div className="choose__details-item">
                            <div className="choose__details-img-wrapper">
                                <img src={coffeeBeans2} alt="" className="choose__details-img" />
                            </div>

                            <div>
                                <h3 className="choose__details-title">Pure Grades</h3>
                                <p className="choose__details-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe error fuga totam porro asperiores eaque incidunt, adipisci eius!</p>
                            </div>
                        </div>

                        <div className="choose__details-item">
                            <div className="choose__details-img-wrapper">
                                <img src={coffeeBeans3} alt="" className="choose__details-img" />
                            </div>

                            <div>
                                <h3 className="choose__details-title">Healthy Coffee</h3>
                                <p className="choose__details-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe error fuga totam porro asperiores eaque incidunt, adipisci eius!</p>
                            </div>
                        </div>

                    </div>
                </div>

                <img src={chooseImg} alt="" className="choose__img" />
            </div>
        </section>
    )
}

export default Choose