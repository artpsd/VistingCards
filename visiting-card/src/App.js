import React from 'react';
import VisitingCardHire from './VisitingCardHire';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      <VisitingCardHire
        profilePic="https://example.com/profile.jpg"
        brandName="The Bier House"
        natureOfBusiness={['Nature1', 'Nature2']}
        address="2nd Floor, JK Plaza, 788, 12th Main Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038,"
        phone="+1234567890"
        email="email@example.com"
        contactName="Contact Name"
        website="https://example.com"
        iconColor="#EC625F" // Icon color
        circleBackgroundColor="#1F2A37" // Circle background color
        textColor="#fff" // Text color
        leftBackgroundColor="#EC625F" // Left background color
        rightBackgroundColor="#1F2A37" // Right background color
      />
    </div>
  );
}

export default App;
