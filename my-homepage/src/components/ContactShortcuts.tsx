import React from 'react';
import { FaPlus, FaPhone, FaEnvelope } from 'react-icons/fa';
import Navbar from './Navbar';

const ContactShortcuts: React.FC = () => {
  const contacts = [
    { name: 'John Doe', imgUrl: 'https://w7.pngwing.com/pngs/511/325/png-transparent-customer-support-service-help-communication-contact-operator-telephone-person-internet.png' },
    { name: 'Jane Smith', imgUrl: 'https://w7.pngwing.com/pngs/511/325/png-transparent-customer-support-service-help-communication-contact-operator-telephone-person-internet.png' },
    { name: 'Michael J', imgUrl: 'https://w7.pngwing.com/pngs/511/325/png-transparent-customer-support-service-help-communication-contact-operator-telephone-person-internet.png' },
    { name: 'Alice Brown', imgUrl: 'https://w7.pngwing.com/pngs/511/325/png-transparent-customer-support-service-help-communication-contact-operator-telephone-person-internet.png' },
    { name: 'David Wilson', imgUrl: 'https://w7.pngwing.com/pngs/511/325/png-transparent-customer-support-service-help-communication-contact-operator-telephone-person-internet.png' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex justify-end mb-4 mt-2 pr-4">
        <button className="bg-orange-600 text-white rounded-lg px-4 py-2 flex items-center hover:bg-orange-700 transition-colors shadow-md">
          <FaPlus className="mr-2" />
          Add Contact
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {contacts.map((contact, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg border border-orange-300">
            <img src={contact.imgUrl} alt={`${contact.name}'s avatar`} className="h-16 w-16 rounded-full mb-2 border-2 border-orange-500" />
            <p className="text-lg font-semibold text-gray-800">{contact.name}</p>
            <div className="mt-2 flex space-x-4 text-gray-600">
              <FaPhone className="cursor-pointer hover:text-orange-600" title="Call" />
              <FaEnvelope className="cursor-pointer hover:text-orange-600" title="Email" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactShortcuts;
