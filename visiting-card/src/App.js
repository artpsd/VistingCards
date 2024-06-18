import React from 'react';
import VisitingCardSupplier from './VisitingCardSupplier';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      <VisitingCardSupplier
        profilePic="https://via.placeholder.com/94"
        brandName="Your Brand"
        natureOfBusiness1="Nature 1"
        natureOfBusiness2="Nature 2"
        phone="+1234567890"
        personName="John Doe"
        email="john.doe@example.com"
         areaOfCoverage={['Location 1', 'Location 2']}
        website="www.example.com"
        iconColor="#fff"
        circleBackgroundColor= "#EC625F"
        textColor="#fff"
        leftBackgroundColor="#313131"
        rightBackgroundColor="#EC625F"
      />
    </div>
  );
}

export default App;
