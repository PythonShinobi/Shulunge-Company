import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Grid, Box } from '@mui/material';
import { LocationOn, Phone, PhoneAndroid } from '@mui/icons-material';

import "./Contact.css";
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      alert('Message sent successfully');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('There was an error sending the message!', error);
      alert('Failed to send message');
    }
  };

  return (
    <div className='contact-container'>
      <Navbar />
      <Container maxWidth="md">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Make a Business Enquiry
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="name"
                    label="Name"
                    fullWidth
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="phone"
                    label="Phone"
                    fullWidth
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                    fullWidth
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Contact Details
            </Typography>
            <Box>
              <Box mt={4}>
                <Typography variant="subtitle1">
                  <LocationOn /> <strong>Location:</strong>
                </Typography>
                <Typography variant="body1">
                  Fidelity Shield Building 2nd Floor - Kaunda Avenue, Mombasa., Mombasa, Kenya
                </Typography>
              </Box>
              <Box mt={4}>
                <Typography variant="subtitle1">
                  <Phone /> <strong>Contact Number:</strong>
                </Typography>
                <Typography variant="body1">+254-24285347</Typography>
              </Box>
              <Box mt={4}>
                <Typography variant="subtitle1">
                  <PhoneAndroid /> <strong>Mobile Phone:</strong>
                </Typography>
                <Typography variant="body1">+254-26126433</Typography>
              </Box>
              <Box mt={4}>
                <iframe
                  title="Shulunge & Company Location"                
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15919.049531556842!2d39.6661945338379!3d-4.068774400291764!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1840137511bf68f3%3A0xa8ed4ab63b700451!2sShulunge%20%26%20Co.!5e0!3m2!1sen!2ske!4v1720765339277!5m2!1sen!2ske"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactForm;
