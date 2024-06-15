import React from 'react';
import VisitingCard from './VisitingCard';

function App() {
  // Example data
  const cardData = {
    profilePic: 'https://via.placeholder.com/150', // Replace with actual URL or path to profile picture
    name: 'John Doe',
    workExperience: '5 years',
    currentLocation: 'New York, USA',
    phone: '+1 234 567 890',
    email: 'john.doe@example.com',
    preferredLocations: ['London', 'Paris', 'Tokyo'], // Example preferred locations array
    department: 'Engineering',
    position: 'Software Engineer',
    leftColor: '#2D3250', // Example left background color
    rightColor: '#E19898', // Example right background color
    iconColor: '#FFFFFF', // Example dynamic icon color
    circleBackgroundColor: '#424769', // Example dynamic circle background color
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <VisitingCard {...cardData} />
    </div>
  );
}

export default App;