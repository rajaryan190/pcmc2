// src/components/WhatsappFloatButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappFloatButton = () => {
  return (
    <a
      href="https://wa.me/919204791109"  // Replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp_float"
    >
      <FaWhatsapp size={40} color="#25D366" />
    </a>
  );
};

export default WhatsappFloatButton;
