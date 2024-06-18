import React from 'react';
import { Card, Typography, Avatar, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';

const VisitingCardSupplier = ({
  profilePic,
  brandName,
  natureOfBusiness1,
  natureOfBusiness2,
  phone,
  personName,
  email,
  areaOfCoverage,
  website,
  iconColor,
  circleBackgroundColor,
  textColor = '#000', // Default text color
  leftBackgroundColor = '#2D6ABF', // Default left background color
  rightBackgroundColor = '#333' // Default right background color
}) => {
  return (
    <Card sx={{ width: 328, height: 250, display: 'flex', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', transition: '0.3s', '&:hover': { boxShadow: '0 8px 16px rgba(0,0,0,0.2)' } }}>
    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
      {/* Left Side */}
      <Box sx={{ zIndex: 1, width: '70%', backgroundColor: leftBackgroundColor, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>     
        <Box sx={{ width:'100%', display: 'flex', justifyContent:'right', alignItems: 'center', marginBottom: '0.1rem', backgroundColor: '#1E5F74' , paddingBlock: '8px'}}>
          <Typography variant="body1" sx={{ fontSize:'12px', color: textColor, fontFamily: 'DM Sans' }}>
            {phone}
          </Typography>
          <Box sx={{ width: 23, height: 23, borderRadius: '50%', backgroundColor: circleBackgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center',  color: iconColor, marginLeft: '20px' }}>
            <PhoneIcon fontSize="extrasmall" />
          </Box>
        </Box>
        <Box sx={{  width:'100%', display: 'flex', justifyContent:'right', alignItems: 'center', marginBottom: '0.1rem', backgroundColor: '#1E5F74' , paddingBlock: '8px' }}>
          <Typography variant="body1" sx={{ fontSize:'12px', color: textColor, fontFamily: 'DM Sans' }}>
            {personName}
          </Typography>
          <Box sx={{ width: 23, height: 23, borderRadius: '50%', backgroundColor: circleBackgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center', color: iconColor, marginLeft: '20px'  }}>
            <PersonIcon fontSize="extrasmall" />
          </Box>
        </Box>
        <Box sx={{  width:'100%', display: 'flex', justifyContent:'right', alignItems: 'center', marginBottom: '0.1rem', backgroundColor: '#1E5F74' , paddingBlock: '8px' }}>
          <Typography variant="body1" sx={{ fontSize:'12px', color: textColor, fontFamily: 'DM Sans' }}>
            {email}
          </Typography>
          <Box sx={{ width: 23, height: 23, borderRadius: '50%', backgroundColor: circleBackgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center', color: iconColor , marginLeft: '20px'}}>
            <EmailIcon fontSize="extrasmall" />
          </Box>
        </Box>
        <Box sx={{ width:'100%', display: 'flex', justifyContent:'right', alignItems: 'flex-start', marginBottom: '0.1rem', backgroundColor: '#1E5F74' , paddingBlock: '8px' }}>
          <Typography variant="body1" sx={{ fontSize:'12px', color: textColor, fontFamily: 'DM Sans', textAlign:'right' }}>
          Area of Coverage: {areaOfCoverage.join(', ')}
          </Typography>
          <Box sx={{ width: 23, height: 23, borderRadius: '50%', backgroundColor: circleBackgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center',  color: iconColor, marginLeft: '20px' }}>
            <LocationOnIcon fontSize="extrasmall" />
          </Box>
        </Box>
        <Box sx={{ width:'100%', display: 'flex', alignItems: 'center', justifyContent:'right', marginBottom: '0.1rem' , backgroundColor: '#1E5F74' , paddingBlock: '8px'}}>
          <Typography variant="body1" sx={{ fontSize:'12px', color: textColor, fontFamily: 'DM Sans' }}>
            {website}
          </Typography>
          <Box sx={{ width: 23, height: 23, borderRadius: '50%', backgroundColor: circleBackgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center',  color: iconColor, marginLeft: '20px' }}>
            <LanguageIcon fontSize="extrasmall" />
          </Box>
        <Box
        sx={{
          position: 'absolute',
          top: '-15.5%',
          left: '55.8%',
          width: '35%',
          height: '7%',
          backgroundColor: '#1E5F74',
          clipPath: 'polygon(25.5% 0%, 73.5% 0%, 75.5% 100%, 27.5% 100%)',
          transform: 'rotate(102deg) translate(0%, -50%)',
          transformOrigin: 'top left',
          zIndex: -1,
        }}
        />  
        </Box>
      </Box>
         
      {/* Right Side */}
      <Box sx={{  clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',  width: '30%', backgroundColor: rightBackgroundColor, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0px 10px' }}>
        <Avatar alt="Profile Picture" src={profilePic} sx={{ width: 74, height: 74, marginBottom: '.5rem' }} />
        <Typography variant="h5" gutterBottom sx={{ textAlign:'right', color: textColor, fontFamily: 'Playfair Display' }}>
          {brandName}
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ width:"100%", textAlign:'right', color: textColor, fontFamily: 'DM Sans', margin:'0' }}>
          {natureOfBusiness1}
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ width:"100%", textAlign:'right', color: textColor, fontFamily: 'DM Sans', margin:'0' }}>
          {natureOfBusiness2}
        </Typography>
      </Box>
    </Box>
  </Card>
  );
};

export default VisitingCardSupplier;
