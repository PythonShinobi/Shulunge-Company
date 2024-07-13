import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, Container, Grid, Button, Box } from "@mui/material";

import "../Service.css";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

const Bookkeeping = () => {
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
            Bookkeeping Services
          </Typography>
          <Typography variant="body1" paragraph>
            Proper accounts provide you with important financial information on the profitability and financial health of the business enterprises and thus allow you concentrate on your core functions. It provides information and data to the management to serve as guides in making decisions involving financial considerations.
          </Typography>

          <Typography variant="body1" paragraph>
            Our accounting and bookkeeping team is qualified and competent to handle all your accounting and bookkeeping tasks in Kenya. We are prompt, efficient, easy to deal with and are keen to details. Our approach ensures accuracy in capturing and storing of financial information.
          </Typography>

          <Typography variant="body1">
            This includes:
          </Typography>
          <ul>
            <li>Review the financial reporting structure of the company in order to ensure timely and accurate reporting of financial information.</li>
            <li>Ensure the right accounting stationery is consistently used with a view of boosting accountability and internal control systems.</li>
            <li>Ensure posting of all financial transactions and preparation of supporting documents.</li>
            <li>Maintain accounting records as per the Generally Accepted Accounting Standards (GAAPS).</li>
            <li>Ensure that the bank reconciliations are done on time.</li>
            <li>Ensure management accounts are submitted on a quarterly basis.</li>
            <li>Make recommendations on the appropriate tax treatment on any expenditure. This will include but not limited to treatment of withholding tax, PAYE among others.</li>
            <li>Ensure preparation of audit file at the end of the year and communication with external auditors, preparation of the draft replies to audit queries to be authorized by the management representative, to the extent that the queries relate to scope of services under this contract.</li>
            <li>Ensure filing and efficient management of monthly returns that includes VAT, PAYE, NHIF, NSSF, KEBS among others.</li>
          </ul>

          <Typography variant="body1" paragraph>
            The following are the benefits of outsourcing accounting services:
          </Typography>
          <ol>
            <li>Spend less time managing your books and thus dedicating more time to core business functions.</li>
            <li>Avoid cutting corners when you don’t really understand how to do bookkeeping properly.</li>
            <li>Access to professional accounting services without hiring accounting professionals on a full-time basis.</li>
            <li>Access to customized accounting services without necessarily investing in essential accounting and bookkeeping hardware and software systems.</li>
            <li>Total compliance with the increasingly complex statutory requirements, i.e., PAYE, VAT, NITA, NSSF, NHIF, KEBS deadlines, Tourism Fund among others. This will ensure that you will not have missed deadlines and ensure compliance with the evolving tax system in Kenya.</li>
          </ol>

          <Typography variant="body1" paragraph>
            To learn more about how our accounting and bookkeeping services can benefit your business, please <Link to="/contact">contact us</Link> for a consultation. Let us take care of the numbers while you focus on what matters most - your business goals and success.
          </Typography>

          <Grid className="contact-button" container spacing={3} justifyContent="center">
            <Grid item>
              <Button                 
                variant="contained" 
                color="primary" 
                component={Link} 
                to="/contact">
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

export default Bookkeeping;