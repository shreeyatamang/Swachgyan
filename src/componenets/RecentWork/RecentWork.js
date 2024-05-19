import React, { useState } from 'react';
import './RecentWork.css'; 
import wasteSeg from '../../assests/WasteSeg.jpeg';
import recentWork from '../../assests/Recentwork.png';

const RecentWorkContainer = () => {
  return (
    <div className="recent-work-container">
      <h1>Our Recent Works</h1>
      <RecentWork />
    </div>
  );
};

const RecentWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    wasteSeg,
    recentWork,
    '../../assets/img1.jpg'
  ];

  const updateImages = () => {
    if (currentIndex < 0) setCurrentIndex(0);
    else if (currentIndex >= images.length - 1) setCurrentIndex(images.length - 2);
  };

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 2, 0));
    updateImages();
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 2, images.length - 2));
    updateImages();
  };

  return (
    <div className="Rcontainer">
      <div className="arrow left-arrow" onClick={handleLeftArrowClick}>&lt;</div>
      <img
        className="image"
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />
      <img
        className="image"
        src={images[currentIndex + 1]}
        alt={`Image ${currentIndex + 2}`}
      />
      <div className="arrow right-arrow" onClick={handleRightArrowClick}>&gt;</div>
    </div>
  );
};

export default RecentWorkContainer;
