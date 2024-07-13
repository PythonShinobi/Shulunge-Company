import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import auditPicture from "../images/audit.jpg";
import bookKeeping from "../images/book-keeping.jpg";
import taxation from "../images/taxation.jpg";
import payroll from "../images/payroll.jpg";
import taxServices from "../images/tax-services.jpg";
import secretary from "../images/secretarial-services.jpg";
import immigration from "../images/immigration.jpg";

const services = [
  {
    title: "Accounting & Bookkeeping Services",
    description:
      "We provide comprehensive accounting and bookkeeping services to ensure your financial records are accurate and up-to-date.",
    link: "/services/book-keeping",
    image: bookKeeping,
  },
  {
    title: "Taxation & Tax Compliance Services",
    description:
      "Our tax experts help you navigate through complex tax regulations and ensure compliance with all tax requirements.",
    link: "/services/taxation",
    image: taxation,
  },
  {
    title: "Payroll Services",
    description:
      "We offer payroll services to manage your employee salaries, wages, bonuses, and deductions efficiently.",
    link: "/services/payroll",
    image: payroll,
  },
  {
    title: "Tax Services",
    description:
      "Specialized tax services for Kenyans living abroad, ensuring they meet their tax obligations both locally and internationally.",
    link: "/services/tax-services",
    image: taxServices,
  },
  {
    title: "Secretarial Services",
    description:
      "Our secretarial services include company formation, compliance, and maintaining statutory records.",
    link: "/services/secretarial",
    image: secretary,
  },
  {
    title: "Immigration Services",
    description:
      "We provide assistance with immigration processes, including visa applications and work permits.",
    link: "/services/immigration",
    image: immigration,
  },
];

const Home = () => {
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
    <div>
      <Navbar />
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          color: "white",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${auditPicture})`,
          marginTop: "-34px", // Adjust for Navbar height if fixed
          // Media query for smaller screens
          '@media (max-width: 600px)': {
            minHeight: "40vh",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "90%", // Adjusted maxWidth for the background box
            margin: "0 auto", // Center horizontally
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              // Media query for smaller screens
              '@media (max-width: 600px)': {
                fontSize: "1.8rem", // Adjust the font size as needed
                maxWidth: "90%", // Reduce width on smaller screens
                margin: "0 auto", // Center horizontally on smaller screens
              },
            }}
          >
            We Help You Nurture and Grow Your Business
          </Typography>
        </Box>
      </Box>
      <Container style={{ padding: "20px" }}>
        <Box
          style={{
            marginBottom: "40px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f9f9f9",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            style={{ fontFamily: "Merriweather, serif", color: "#263238" }}
          >
            Shulunge & Company is your friendly, accessible professional audit
            and accounting firm in Kenya. We deliver to international standards
            and are members of AGN International. Our experienced team offers a
            wide range of services designed to help you manage and grow your
            business effectively. From comprehensive accounting and bookkeeping
            to specialized tax compliance and payroll management, we ensure
            that your financial operations run smoothly. Our commitment to
            continuous learning and adherence to global standards allows us to
            provide you with the best possible service. Partner with us and
            experience a reliable and efficient approach to business
            consultancy.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1px solid #ddd", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <CardMedia
                  component="img"
                  height="210"
                  image={service.image}
                  alt={service.title}
                  loading="lazy"
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {service.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    component="a"
                    href={service.link}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;