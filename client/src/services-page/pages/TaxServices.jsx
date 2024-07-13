// client/src/services-page/pages/TaxServices.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, Container, Grid, Button, Box } from "@mui/material";

import "../Service.css";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

const TaxServices = () => {
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
            Tax Services
          </Typography>
          <Typography variant="body1" paragraph>
            This service is geared towards helping Kenyans living and working abroad to comply with the tax provisions in Kenya. Our Diaspora tax team will handle the following for you:
          </Typography>
          <ul>
            <li>Ascertain the residency status of the Kenyan tax payer living outside Kenya.</li>
            <li>Process Personal Identification Number (PIN) Certificates for Kenyans living abroad or re-locating to Kenya.</li>
            <li>Act as tax representative in Kenya and file relevant income tax returns. The law requires any Kenyan who has a PIN, whether based in the country or abroad, to file return annually, including a nil return.</li>
            <li>Account and pay taxes from taxable income earned worldwide, i.e. Investment income, rental among others.</li>
            <li>Claim tax credits based on the Double Tax Agreement (DTA) treaties.</li>
            <li>Encourage Kenyans living abroad to take advantage of Income Tax Amnesty. Tax amnesty is the opportunity given to taxpayers to write off an existing tax liability (including interests and fines). The period was extended by one year to cover up to 31st December 2017. Additionally, the deadline for filing the amnesty return has been extended to 30th June 2019.</li>
          </ul>

          <Typography variant="body1" paragraph>
            To learn more about how our diaspora tax services can benefit you, please <Link to="/contact">contact us</Link> for a consultation. Let us take care of your tax compliance while you focus on what matters most.
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

export default TaxServices;
