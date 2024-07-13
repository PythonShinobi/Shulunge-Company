// client/src/services-page/pages/SecreterialServices.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, Container, Grid, Button, Box } from "@mui/material";

import "../Service.css";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

const Secretarial = () => {
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
            Secretarial Services
          </Typography>
          <Typography variant="body1" paragraph>
            The proper maintenance and filing of company records are key in ensuring statutory compliance. Our company secretary associates in Mombasa provide a full range of company secretarial services to ensure that your company is fully compliant with an ever-increasing corporate statutory and regulatory compliance regime.
          </Typography>
          <Typography variant="body1" paragraph>
            Our secretarial service team based in Mombasa, Kenya, is well equipped to provide the following, but not limited to:
          </Typography>
          <ul>
            <li>Kenyan company formation services</li>
            <li>Filing annual returns</li>
            <li>Processing CR12</li>
            <li>Updating details on e-Citizen</li>
            <li>Corporate health checks</li>
            <li>Management of meetings (Board meetings)</li>
            <li>Attending annual general meetings (AGM), board of directors meetings, and board committee meetings</li>
            <li>Preparation and completion of minutes of the various meetings</li>
            <li>Facilitating transfer of shares, increasing capital, allotments, rights issues, bonus issues, etc.</li>
            <li>Completing and filing of statutory documents with the registrar of companies relating to share transfers, annual returns, change in directorships, change of name, etc.</li>
            <li>Drafting of shareholders agreements</li>
            <li>Preparation of bank resolutions and other documentation for various banks</li>
            <li>Maintaining register of members for various clients</li>
            <li>Company winding-up and de-registration</li>
          </ul>

          <Typography variant="body1" paragraph>
            To learn more about how our secretarial services can benefit your business, please <Link to="/contact">contact us</Link> for a consultation. Let us take care of your company’s compliance while you focus on growing your business.
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

export default Secretarial;