import React from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
const WhatsApp = () => {
    return (
        <div>
          <WhatsAppWidget
			message={`Hello! 👋🏼 \n\nHow can we help you?`}
			phoneNumber='+8801615127085'
		/>  
        </div>
    );
};

export default WhatsApp;