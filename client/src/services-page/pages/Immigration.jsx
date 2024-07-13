// client/src/services-page/pages/Immigration.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, Container, Grid, Button, Box } from "@mui/material";

import "../Service.css";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

const Immigration = () => {
  useEffect(() => {
    // Scroll to the top when component mounts
    window.scrollTo(0, 0);

    // Optionally, you can add an event listener to handle navigation back
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", handleScrollToTop);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("popstate", handleScrollToTop);
    };
  }, []);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Box flex="1">
        <Container maxWidth="md" style={{ marginTop: '20px' }}>
          <Typography variant="h3" align="center" gutterBottom>
            Immigration Services
          </Typography>
          <Typography variant="body1" paragraph>
            Our team includes associates that support foreign entities to establish themselves in Kenya with as little hassle as possible. Our Immigration department in Nairobi provides, but is not limited to, the following services:
          </Typography>
          <ul>
            <li>Foreign company registration in Kenya as Limited Liability Company or foreign branches</li>
            <li>Application for PIN Certificates for companies and non-resident individuals</li>
            <li>Application of Work permits and renewal</li>
            <li>Application of Alien Identity Cards</li>
            <li>Preparation of related company agreement</li>
          </ul>

          <Typography variant="body1" paragraph>
            To learn more about how our immigration services can benefit your business, please <Link to="/contact">contact us</Link> for a consultation. Let us handle the complexities of immigration while you focus on your business growth.
          </Typography>

          <Grid className="contact-button" container spacing={3} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary" component={Link} to="/contact">
                Contact Us
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Immigration;