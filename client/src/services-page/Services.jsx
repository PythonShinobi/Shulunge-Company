// client/src/service-page/Services.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Grid, 
  Card, 
  CardActionArea, 
  CardContent, 
  CardMedia, 
  Typography
} from "@mui/material";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import bookKeeping from "../images/book-keeping.jpg";
import taxation from "../images/taxation.jpg";
import payroll from "../images/payroll.jpg";
import taxServices from "../images/tax-services.jpg";
import secretary from "../images/secretarial-services.jpg";
import immigration from "../images/immigration.jpg";

const services = [
  {
    image: bookKeeping,
    title: "Book Keeping",
    description: "Manage your financial records with precision and clarity.",
    link: "/services/book-keeping", // Update with your specific link
  },
  {
    image: taxation,
    title: "Taxation",
    description: "Expert advice and services to optimize your tax returns.",
    link: "/services/taxation", // Update with your specific link
  },
  {
    image: payroll,
    title: "Payroll Services",
    description: "Efficient payroll management to ensure timely payments.",
    link: "/services/payroll", // Update with your specific link
  },
  {
    image: taxServices,
    title: "Tax Services",
    description: "Comprehensive tax services tailored to your needs.",
    link: "/services/tax-services", // Update with your specific link
  },
  {
    image: secretary,
    title: "Secretarial Services",
    description: "Administrative support to streamline your operations.",
    link: "/services/secretarial", // Update with your specific link
  },
  {
    image: immigration,
    title: "Immigration Services",
    description: "Guidance and assistance for immigration processes.",
    link: "/services/immigration", // Update with your specific link
  },
];

const ServiceCard = ({ image, title, description, link }) => (
  <Card>
    <CardActionArea component={Link} to={link}>
      <CardMedia
        component="img"
        alt={title}
        height="210"
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

const ServicePage = () => {
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
      <Grid container spacing={3} justify="center" style={{ padding: '20px' }}>
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ServiceCard {...service} />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </div>
  );
};

export default ServicePage;