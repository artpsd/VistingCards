import React from 'react';
import { Card, Typography, Avatar, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';


const VisitingCardHire = ({
  profilePic,
  brandName,
  natureOfBusiness,
  address,
  phone,
  email,
  contactName,
  website,
  iconColor,
  circleBackgroundColor,
  textColor = '#000', // Default text color
  leftBackgroundColor = '#2D6ABF', // Default left background color
  rightBackgroundColor = '#333' // Default right background color
}) => {
  return (
    <Card sx={{ width: 328, height: 250, display: 'flex', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', transition: '0.3s', '&:hover': { boxShadow: '0 8px 16px rgba(0,0,0,0.2)' } }}>
    <Box sx={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
      {/* Left Side */}
      <Box sx={{ width: '50%',  backgroundColor: leftBackgroundColor, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',  }}>
        <Avatar  alt="Profile Picture" src={profilePic} sx={{  boxShadow: '0 4px 4px rgba(0,0,0,0.3)', width: 72, height: 72, marginBottom: '.3rem' }} />
        <Typography width='100%' margin='0' variant="h5" gutterBottom sx={{ textAlign:'right', fontSize:'20px', fontFamily: "DM Sans, sans-serif", color: textColor }}>
          {brandName}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end',textAlign:'right', marginBottom: '0.5rem', width: '100%' }}>
            <Typography sx={{ fontFamily: "DM Sans, sans-serif", fontWeight:"medium", color: textColor, fontSize: '12px' }}>
             {natureOfBusiness.join(', ')}
            </Typography>
          </Box>
        <Box display="flex" alignItems="center" paddingTop="10px">
          <Typography textAlign='right' fontSize='10px' variant="body1" sx={{ fontFamily: "DM Sans, sans-serif", fontWeight:"medium", color: textColor }}>
            {address}
          </Typography>
        </Box>
      </Box>
      {/* Icons Column */}
      <Box sx={{gap:'14px', padding:'0px 5px', backgroundColor: leftBackgroundColor, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ width: 23, height: 23, boxShadow: '0 4px 4px rgba(0,0,0,0.3)', borderRadius: '50%', backgroundColor: circleBackgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '0.5rem', color: iconColor }}>
          <PersonIcon fontSize="extrasmall" />
        </Box>
        <Box sx={{ width: 23, height: 23, boxShadow: '0 4px 4px rgba(0,0,0,0.3)', borderRadius: '50%', backgroundColor: circleBackgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '0.5rem', color: iconColor }}>
          <PhoneIcon fontSize="extrasmall" />
        </Box>
        <Box sx={{ width: 23, height: 23,  boxShadow: '0 4px 4px rgba(0,0,0,0.3)', borderRadius: '50%', backgroundColor: circleBackgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '0.5rem', color: iconColor }}>
          <EmailIcon fontSize="extrasmall" />
        </Box>
        <Box sx={{ width: 23, height: 23, boxShadow: '0 4px 4px rgba(0,0,0,0.3)', borderRadius: '50%', backgroundColor: circleBackgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '0.5rem', color: iconColor }}>
          <LanguageIcon fontSize="extrasmall" />
        </Box>
        <Box sx={{ width: 23, height: 23, boxShadow: '0 4px 4px rgba(0,0,0,0.3)', borderRadius: '50%', backgroundColor: circleBackgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '0.5rem', color: iconColor }}>
          <LocationOnIcon fontSize="extrasmall" />
        </Box>
      </Box>
  
         {/* Right Side */}
        <Box sx={{gap:'26px', paddingTop: '24px',width: '50%', backgroundColor: rightBackgroundColor, display: 'flex', flexDirection: 'column', justifyContent:'flex-start', alignItems: 'left' }}>
          <Typography variant="body1" sx={{ fontSize:'12px', color: textColor, fontFamily: "DM Sans, sans-serif", marginLeft: '0.5rem' }}>
            {contactName}
          </Typography>
          <Typography variant="body1" sx={{ fontSize:'12px', color: textColor, fontFamily: "DM Sans, sans-serif", fontWeight:"medium", marginLeft: '0.5rem' }}>
            {phone}
          </Typography>
          <Typography variant="body1" sx={{ fontSize:'12px', color: textColor, fontFamily: "DM Sans, sans-serif", fontWeight:"medium", marginLeft: '0.5rem' }}>
            {email}
          </Typography>
          <Typography variant="body1" sx={{ fontSize:'12px', color: textColor, fontFamily: "DM Sans, sans-serif", fontWeight:"medium", marginLeft: '0.5rem' }}>
            {website}
          </Typography>
        </Box>
      </Box>
     
    </Card>
  );
};

export default VisitingCardHire;
