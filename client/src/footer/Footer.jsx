// client/src/footer/Footer.jsx
import React from 'react';
import { Container, Typography, Box, Grid, IconButton } from '@mui/material';
import { Facebook, WhatsApp, X } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box bgcolor="#263238" color="#FFFFFF" py={4}>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {/* Contacts */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Contacts
            </Typography>
            <Typography variant="body1" gutterBottom>
              Fidelity Shield Building 2nd Floor, Kaunda Avenue
            </Typography>
            <Typography variant="body1" gutterBottom>
              P.O. Box 6556-00200, Mombasa, Kenya
            </Typography>
            <Typography variant="body1" gutterBottom>
              E: info@shulunge.com
            </Typography>
            <Typography variant="body1" gutterBottom>
              O: +254-24285347 | M: +254-26126433
            </Typography>
          </Grid>
          {/* Sitemap */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Sitemap
            </Typography>
            <Typography variant="body1" gutterBottom>
              <a href="/">Home</a>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <a href="/about">About Us</a>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <a href="/services">Services</a>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <a href="/contact">Contact Us</a>
            </Typography>
          </Grid>
        </Grid>
        <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="body2" gutterBottom>
              © Copyright Shulunge & Company 2024. All Rights Reserved.
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton size="large" style={{ marginRight: 10, marginTop: -330 }}>
              <Facebook fontSize="large" style={{ color: '#3b5998' }} />
            </IconButton>
            <IconButton size="large" style={{ marginRight: 10, marginTop: -330 }}>
              <X fontSize="large" style={{ color: '#546E7A' }} />
            </IconButton>
            <IconButton size="large" style={{ marginTop: -330 }}>
              <WhatsApp fontSize="large" style={{ color: '#25D366' }} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;