// client/src/services-page/pages/Payroll.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, Container, Grid, Button, Box } from "@mui/material";

import "../Service.css";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

const Payroll = () => {
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
            Payroll Services
          </Typography>
          <Typography variant="body1" paragraph>
            Payroll processing can be a complex and time-consuming endeavor for any organization. This need not be the case for any organization. When you engage with our experienced team of accountants, you will not only save money and time but shall guarantee you smooth and timely payroll processing. We will work with you on a regular basis to ensure that your business activities, records, and processes are in full compliance with all applicable regulations. At Geoffrey Gitau & Co., we’ll ensure that:
          </Typography>
          <ul>
            <li>
              Monthly payroll reconciliations are done.
            </li>
            <li>
              Monthly payroll is in compliance with the income tax legislation.
            </li>
            <li>
              Processing of P9A certificates are done in time and issued to staff.
            </li>
          </ul>
          <Typography variant="body1" paragraph>
            One of your statutory obligations as an employer is to deduct PAYE from your employees’ salaries and wages. PAYE is computed at the prevailing graduated scale rates as prescribed by the National Treasury. The resulting funds must be remitted to the Kenya Revenue Authority on or before the 9th of the following month.
          </Typography>

          <Typography variant="body1" paragraph>
            Our professional services entail:
          </Typography>
          <ul>
            <li>Computation of PAYE for each employee</li>
            <li>Payroll Preparation</li>
            <li>Submission/filing of PAYE returns on iTAX (online)</li>
            <li>Generation of payment slips</li>
            <li>Payment of the tax due to the KRA appointed banks on behalf of clients</li>
            <li>Processing of the P9A forms</li>
          </ul>

          <Typography variant="body1" paragraph>
            To learn more about how our payroll services can benefit your business, please <Link to="/contact">contact us</Link> for a consultation. Let us take care of the payroll while you focus on what matters most - your business goals and success.
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

export default Payroll;
