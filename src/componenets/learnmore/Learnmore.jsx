import React, { useState, useEffect } from 'react';
import './LearnMore.css'; // Import your CSS file
import image1 from '../../assests/Untitled design (6).png';
import image2 from '../../assests/step2.png';
import image3 from '../../assests/step3.png';
import image4 from '../../assests/step4.png';
import image5 from '../../assests/step5.png';
import poster from '../../assests/poster.png';
import poster2 from '../../assests/poster2.png';
import organicWaste from '../../assests/organicWaste.png';
import recyclable from '../../assests/recyclable.png';
import nonRecyclable from '../../assests/nonRecyclable.png';


const LearnMore = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        showSlides();
    }, []);

    const showSlides = () => {
        const slides = document.querySelectorAll('.learnMore .slider img');
        if (slideIndex >= slides.length) {
            setSlideIndex(0);
        } else if (slideIndex < 0) {
            setSlideIndex(slides.length - 1);
        }
        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? 'block' : 'none';
        });
    };

    const nextSlide = () => {
        setSlideIndex(slideIndex + 1);
        showSlides();
    };

    const prevSlide = () => {
        setSlideIndex(slideIndex - 1);
        showSlides();
    };

    return (
        <div className="learnMore">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Let's Learn!</h1>
                </div>
            </section>

            <section className="content-section">
                <div className="text">
                    <h1>TYPES OF WASTE</h1>
                    <h2>Organic Waste</h2>
                    <p>Organic waste is stuff from plants or animals that we don't need anymore. Like banana peels, apple cores, or even leftovers from dinner. It's like food for the Earth!</p>
                    <img src={organicWaste} alt="organic waste" />
                    <br />
                    <h2>Recyclable Waste</h2>
                    <p>Recyclable waste is stuff that can be used again and again, like a superhero's cape! Things like paper, plastic bottles, and metal cans can be turned into new things instead of being thrown away. Isn't that cool?</p>
                    <img src={recyclable} alt="Recyclable waste" />
                    <br />
                    <h2>Non-Recyclable Waste</h2>
                    <p>Non-recyclable waste is stuff that can't be made into new things easily, like some types of plastic or dirty paper. Instead of recycling it, we have to throw it away in the trash.</p>
                    <img src={nonRecyclable} alt="Non Recyclable waste" />
                </div>
                <div className="image">
                    <img src={poster} alt="Waste Reduction Impacts" /><br></br><br></br><br></br><br></br>
                    <img src={poster2} alt="Waste Reduction Impacts" />
                </div>
                
            </section>

            <div className="know">
                <section className="image-slider-container">
                    <section className="image-slider">
                        <div className="slider">
                        <img src={image1} alt="Image 1" />
                        <img src={image2} alt="Image 2" />
                        <img src={image3} alt="Image 3" />
                        <img src={image4} alt="Image 4" />
                        <img src={image5} alt="Image 5" />
                        </div>
                        <button className="prev" onClick={prevSlide}>&#10094;</button>
                        <button className="next" onClick={nextSlide}>&#10095;</button>
                        <br />
                    </section>
                </section>
            </div>

            <div className="centered-container">
                <h2>DID YOU KNOW?</h2><br></br><br></br>
            </div>
            <div className="container">
                <section className="fact-section">
                    <div className="fact-box">
                        <h3>Plastic World Tour</h3>
                        <div className="fact-content">
                            <p>Every year, if you put all the plastic thrown away in a line, it would go around the Earth four times.</p>
                        </div>
                    </div>
                    <div className="fact-box">
                        <h3>Glass Never-ending Story</h3>
                        <div className="fact-content">
                            <p>Did you know that it can take more than 1 million years for glass to break down into tiny pieces?</p>
                        </div>
                    </div>
                    <div className="fact-box">
                        <h3>Tree Rescue Mission</h3>
                        <div className="fact-content">
                            <p> Recycling a stack of newspaper just 3 feet high saves one tree.</p>
                        </div>
                    </div>
                    <div className="fact-box">
                        <h3>Can Power-Up</h3>
                        <div className="fact-content">
                            <p>By recycling just one aluminum can, you can save enough energy to power a TV for three whole hours.</p>
                        </div>
                    </div>
                    <div className="fact-box">
                        <h3>Styrofoam Staycation</h3>
                        <div className="fact-content">
                            <p>Polystyrene foam, or Styrofoam, may never fully decompose, staying in the environment for a long time.</p>
                        </div>
                    </div>
                    <div className="fact-box">
                        <h3>Plastic Waste Mountain</h3>
                        <div className="fact-content">
                            <p>The world produces 400 billion kilograms of plastic waste each year.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default LearnMore;
