import React from 'react';
import { Card, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import NearMeIcon from '@mui/icons-material/NearMe';

// Define custom styles with dynamic background colors
const StyledCard = styled(Card)(({ theme }) => ({
  width: 328,
  height: 250,
  margin: 'auto',
  marginTop: '2rem',
  marginBottom: '2rem',
  padding: '.3rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  transition: '0.3s',
  '&:hover': {
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  },
}));

const LeftBackground = styled('div')(({ leftColor }) => ({
  width: '65%',
  height: '100%',
  backgroundColor: leftColor,
  position: 'absolute',
  top: 0,
  left: 0,
}));

const RightBackground = styled('div')(({ rightColor }) => ({
  width: '35%',
  height: '100%',
  backgroundColor: rightColor,
  position: 'absolute',
  top: 0,
  right: 0,
  boxShadow: 'inset 5px 0px 15px rgba(0, 0, 0, 0.2)',
}));

const ContentWrapper = styled('div')({
  zIndex: 1,
  position: 'relative',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start', // Align content at the top
  alignItems: 'center',
  color: '#fff', // Adjust text color
});

const StyledAvatar = styled(Avatar)({
  position: 'absolute',
  top: '101px',
  right: '30px',
  width: 94,
  height: 94,
  margin: 'auto',
  marginBottom: '1rem',
  boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
});

const NameWorkWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  flexDirection: 'column',
  marginBottom: '0.5rem',
  paddingRight: '20px',
});

const NameTypography = styled(Typography)({
  fontFamily: 'Playfair Display, serif',
  fontSize: 32,
  fontWeight: 'medium',
});

const WorkExperienceTypography = styled(Typography)({
  fontFamily: 'DM Sans, sans-serif',
  fontSize: 14,
});

const DepartmentPositionWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexDirection: 'column',
  height: '100%',
});

const Topcontentwrapper = styled('div')({
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginBottom: '1rem', // Adjust margin for spacing
    paddingRight: '1rem',
    width: '100%',
  });

const DepartmentTypography = styled(Typography)({
  fontFamily: 'DM Sans, sans-serif',
  fontSize: 12,
  marginBottom: '0.25rem', // Adjust margin for spacing
});

const PositionTypography = styled(Typography)({
  fontFamily: 'DM Sans, sans-serif',
  fontSize: 12,
});

const RightContentWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'column',
    height: '100%',
    paddingRight: '120px',
  });

const IconWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '0.8rem',
});

const PhoneEmailWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'center',
  paddingBottom: '30px',
  
  });

const CircleIcon = styled('div')(({ iconColor, backgroundColor }) => ({
  width: 28,
  height: 28,
  borderRadius: '50%',
  backgroundColor: backgroundColor,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '0.5rem',
  color: iconColor, // Dynamically set icon color
  boxShadow: '0 4px 4px rgba(0,0,0,0.3)',
}));

const IconLabel = styled(Typography)({
  marginRight: '0.5rem',
});

const PreferredLocationsWrapper = styled('div')({
    position: 'absolute',
    top: '195px',
    right: '90px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  });
  
  const PreferredLocationsLabel = styled(Typography)({
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 10,
    marginRight: '0.45rem', // Adjust margin for spacing 
    color: '#6B7280',
  });
  
  const PreferredLocationsTypography = styled(Typography)({
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 12,
  });

  const IconLabelWithIcon = styled(Typography)({
    display: 'flex',
    alignItems: 'center',
  });

  const CurrentLocationWrapper = styled('div')({
    position: 'absolute',
    top: '75px',
    right: '90px',
  });

  const LocationData = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '-15%',
    paddingRight: '40%',
  });

const VisitingCard = ({ profilePic, name, workExperience, currentLocation, phone, email, preferredLocations, department, position, leftColor, rightColor, iconColor, circleBackgroundColor }) => {
  return (
    <StyledCard>
      <LeftBackground leftColor={leftColor} />
      <RightBackground rightColor={rightColor} />
      <ContentWrapper>
        <Topcontentwrapper>
        <NameWorkWrapper>
          <NameTypography variant="h5">
            {name}
          </NameTypography>
          <WorkExperienceTypography variant="body1">
            {workExperience}
          </WorkExperienceTypography>
        </NameWorkWrapper>
        <DepartmentPositionWrapper>
          <DepartmentTypography variant="body1">
            {department}
          </DepartmentTypography>
          <PositionTypography variant="body1">
            {position}
          </PositionTypography>
        </DepartmentPositionWrapper>
        </Topcontentwrapper>
        <StyledAvatar alt="Profile Picture" src={profilePic} />
        <RightContentWrapper>
            <CurrentLocationWrapper>
            <Typography variant="body1">
            <IconWrapper>
                <IconLabel fontSize=".95rem"> {currentLocation}</IconLabel>
                <CircleIcon iconColor={iconColor} backgroundColor={circleBackgroundColor}>
                    <LocationOnIcon fontSize="Extrasmall" />
                </CircleIcon>
            </IconWrapper>
            </Typography>
            </CurrentLocationWrapper>
            <PhoneEmailWrapper>
            <Typography variant="body1">
            <IconWrapper>
                <IconLabel fontSize=".95rem" > {phone}</IconLabel>
                <CircleIcon iconColor={iconColor} backgroundColor={circleBackgroundColor}>
                <PhoneIcon fontSize="Extrasmall" />
                </CircleIcon>
            </IconWrapper>
            </Typography>
            <Typography variant="body1">
            <IconWrapper>
                <IconLabel  fontSize=".85rem" > {email}</IconLabel>
                <CircleIcon iconColor={iconColor} backgroundColor={circleBackgroundColor}>
                <EmailIcon fontSize="Extrasmall" />
                </CircleIcon>
            </IconWrapper>
            </Typography>
            </PhoneEmailWrapper>
            <PreferredLocationsWrapper>
          <IconWrapper>
            <IconLabelWithIcon variant="body2">
              <PreferredLocationsLabel>Preferred Locations</PreferredLocationsLabel>
              <CircleIcon iconColor={iconColor} backgroundColor={circleBackgroundColor}>
                <NearMeIcon fontSize="Extrasmall" />
              </CircleIcon>
            </IconLabelWithIcon>
          </IconWrapper>
          <LocationData>
          {preferredLocations.map((location, index) => (
            <PreferredLocationsTypography key={index} variant="body1">
              {location}, 
            </PreferredLocationsTypography>
            ))}
           </LocationData>
        </PreferredLocationsWrapper>
        </RightContentWrapper>
      </ContentWrapper>
    </StyledCard>
  );
};

export default VisitingCard;
