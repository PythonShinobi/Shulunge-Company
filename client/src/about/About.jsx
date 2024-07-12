// client/src/about/About.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Angela from "../images/Angela.jpg";
import Jim from "../images/Jim.jpg";
import John from "../images/John.jpg";
import Michael from "../images/Michael.jpg";
import Stacy from "../images/Stacy.jpg";

const teamMembers = [
  { 
    name: 'Angela', 
    role: 'Managing Partner', 
    image: Angela, 
    bio: 'Angela has over 20 years of experience in the financial advisory sector. She graduated from Harvard Business School with an MBA in Finance and has worked with several top-tier firms before joining MGK Consulting.' 
  },
  { 
    name: 'Jim', 
    role: 'Senior Partner', 
    image: Jim, 
    bio: 'Jim is a seasoned professional with 18 years of experience in business consultancy. He holds a degree in Economics from the London School of Economics and has a proven track record in improving business operations.' 
  },
  { 
    name: 'John', 
    role: 'Partner, Outsourced Services', 
    image: John, 
    bio: 'John has a background in accounting and over 15 years of experience managing outsourced financial services. He earned his degree from the University of Nairobi and has a keen eye for detail and efficiency.' 
  },
  { 
    name: 'Michael', 
    role: 'Partner, Audit Services', 
    image: Michael, 
    bio: 'Michael brings 17 years of auditing experience to the team. He is a graduate of the University of Oxford with a degree in Accounting and Finance and has worked with international clients on various audit projects.' 
  },
  { 
    name: 'Stacy', 
    role: 'Other Role', 
    image: Stacy, 
    bio: 'Stacy has a diverse background in business strategy and development, with over 12 years of experience. She graduated from Stanford University with a degree in Business Administration and has helped numerous companies grow and succeed.' 
  }
];

const AboutUs = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Listen to window resize events
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            Since our incorporation in March 2002, we have been offering financial and business advisory services to diverse Kenyan and international organizations. We are proud to mark 25 years of partnering with our clients, many of whom have been with us since our formative years. Our philosophy of building strong working relationships and proving quality service, responsive to our client needs has enabled us to continuously grow our client portfolio and sustain a high client retention rate.
          </Typography>
          <Typography variant="body1" paragraph>
            With our skilled and experienced staff, we provide a comprehensive range of business solutions and where expertise is not available in-house, we have partnered with carefully selected associates so as to make MGK Consulting a one-stop shop for financial advisory. We continue to invest in and develop our staff and resources so as to build the capacity to serve our clients even better.
          </Typography>
          <Typography variant="body1" paragraph>
            As businesses focus more on their core functions and look outside for their support functions, we have experienced significant interest and uptake of our outsourced accounting, payroll and internal audit services.
          </Typography>
          <Typography variant="body1" paragraph>
            Whether you are an individual or corporate client requiring help in registering a new business, setting up your accounting and control systems, handling your payroll or getting assurance services, MGK is your friendly expert.
          </Typography>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5" component="h2" gutterBottom>
                Mission and Values
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ my: 2 }}>
                <Typography variant="h5" component="h4" gutterBottom>
                  Our Value Proposition
                </Typography>
                <Typography variant="body1" paragraph>
                  We offer financial advice and consultancy to businesses and organisations looking to protect and grow their business by offering accurate and timely accounting, auditing and other professional services to international standards and at good value, through a friendly, accessible and involved team.
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" paragraph>1. Professionalism</Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="• Integrity." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Adherence to international standards" />
                  </ListItem>
                </List>
              </Box>
              <Box>
                <Typography variant="h6" paragraph>2. Continuous Learning</Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="• Keeping abreast of developments in our profession" />
                  </ListItem>
                </List>
              </Box>
              <Box>
                <Typography variant="h6" paragraph>3. Customer Centricity</Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="• Efficiency" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Strive to understand client needs, deliver quality service, and continuous involvement" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Involvement" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Collegiality – to be friendly and accessible" />
                  </ListItem>
                </List>
              </Box>
              <Box>
                <Typography variant="h6" paragraph>4. Commitment</Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="• God Fearing" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Ethical conduct" />
                  </ListItem>
                </List>
              </Box>
              <Box>
                <Typography variant="h6" paragraph>5. Innovation</Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="• Continuously seeking new ways of improving customer service and efficiency" />
                  </ListItem>
                </List>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h5" component="h2" gutterBottom>
                Team Members
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer component={Paper} sx={{ my: 2 }}>
                <Table>
                  <TableBody>
                    {teamMembers.map((member, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            style={{ 
                              width: '100%', 
                              maxWidth: isSmallDevice ? '100%' : '600px', 
                              height: isSmallDevice ? '100%' : 'auto'
                            }} 
                          />
                        </TableCell>
                        <TableCell>
                          <Typography variant="h6"><strong>{member.name}</strong></Typography>
                          <Typography variant="h6">{member.role}</Typography>
                          <Typography variant="body2">{member.bio}</Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default AboutUs;