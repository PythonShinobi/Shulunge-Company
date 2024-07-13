// client/src/services-page/pages/Taxation.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, Container, Grid, Button, Box } from "@mui/material";

import "../Service.css";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

const Taxation = () => {
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
            Taxation & Tax Compliance Services
          </Typography>
          <Typography variant="body1" paragraph>
            It is said that death and taxes are the only things that are inevitable in life. Tax compliance can be an extremely complex undertaking, especially due to the ever-changing income tax laws in Kenya. On an annual basis, during the budget-making process, the Minister of Finance normally comes up with fiscal and monetary measures aimed at boosting economic growth. This includes changes in taxes and tax rates to generate revenue.
          </Typography>

          <Typography variant="body1" paragraph>
            Our team of qualified Tax Experts is always prepared to help you determine the kind of tax obligation that is appropriate for your business. We’ll also work with you to prepare accurate tax returns on a monthly or annual basis with a view to minimizing business risks of unforeseen tax liabilities.
          </Typography>

          <Typography variant="body1">
            The following are the main taxes in Kenya:
          </Typography>
          <ol>
            <li>
              <Typography variant="body1">
                <strong>Corporation Tax:</strong> Corporation tax in Kenya is a form of income tax that is levied on companies and branches. Resident companies are taxable at a rate of 30% while non-resident companies and branches are taxable at a rate of 37.5%. Corporate tax is paid in instalments.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>PAYE:</strong> Pay as you Earn in Kenya is a method of collecting tax at source from individuals in gainful employment. The employer deducts a certain amount of tax from his/her employee’s salary or wages on each payday then remits the tax to the Authority. This relieves the employee from paying taxes at the end of the year and shifts the responsibility to the employers.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Withholding Tax:</strong> Withholding taxes in Kenya are deducted at source from the following sources of income: Interest, dividends, royalties, management or professional fees, training, commissions, pension or retirement annuity, rent, appearance or performance fees for entertaining, sporting or diverting an audience.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Value Added Tax (VAT):</strong> Value Added Tax (VAT) is a tax on consumer expenditure introduced in Kenya in January 1990 to replace Sales Tax, which had been in operation since 1973. VAT is levied on consumption of taxable goods and services supplied or imported into Kenya and is collected by registered persons at designated points who then remit it to the KRA.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Advance Tax:</strong> Advance tax is applicable to Matatus and other commercial Vehicles. Any advance tax paid in Kenya becomes credit available for offset against the corporate tax liability.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Residential Rental Income Tax (MRI):</strong> The landlords pay residential rental income tax under a special category of tax specific to their needs. The taxpayers are not allowed any expenses or capital expenditure. It does not matter whether the taxpayers are individuals, corporate organizations, male, female, religious organization etc. The tax rate under this special category is 10% of monthly rental income. The rental tax is based on the gross rental income collection per month and is payable by 20th of the following month.
              </Typography>
            </li>
          </ol>

          <Typography variant="body1" paragraph>
            To learn more about how our taxation and tax compliance services can benefit your business, please <Link to="/contact">contact us</Link> for a consultation. Let us help you navigate the complexities of tax compliance while you focus on what matters most - your business goals and success.
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

export default Taxation;