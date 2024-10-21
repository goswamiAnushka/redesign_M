import React from 'react';
import { FaPlus, FaPhone, FaEnvelope } from 'react-icons/fa';
import Navbar from './Navbar'; // Importing Navbar

const ContactShortcuts: React.FC = () => {
  const contacts = [
    { name: 'John Doe', imgUrl: 'https://w7.pngwing.com/pngs/511/325/png-transparent-customer-support-service-help-communication-contact-operator-telephone-person-internet.png' },
    { name: 'Jane Smith', imgUrl: 'https://w7.pngwing.com/pngs/511/325/png-transparent-customer-support-service-help-communication-contact-operator-telephone-person-internet.png' },
    { name: 'Michael J', imgUrl: 'https://w7.pngwing.com/pngs/511/325/png-transparent-customer-support-service-help-communication-contact-operator-telephone-person-internet.png' },
    { name: 'Alice Brown', imgUrl: 'https://w7.pngwing.com/pngs/511/325/png-transparent-customer-support-service-help-communication-contact-operator-telephone-person-internet.png' },
    { name: 'David Wilson', imgUrl: 'https://w7.pngwing.com/pngs/511/325/png-transparent-customer-support-service-help-communication-contact-operator-telephone-person-internet.png' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-0"> {/* No padding at the top */}
      <Navbar /> {/* Navbar included at the top */}
      <div className="flex justify-end mb-4 mt-2 pr-2"> {/* Added pr-2 for right padding */}
        <button className="bg-blue-700 text-white rounded px-4 py-2 flex items-center hover:bg-blue-600 transition-colors shadow-md"> {/* Adjusted hover color */}
          <FaPlus className="mr-2" />
          Add 
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4"> {/* Added horizontal padding */}
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-200 p-4" // Padding for better spacing inside the boxes
          >
            <img
              src={contact.imgUrl}
              alt={`${contact.name}'s avatar`}
              className="h-14 w-14 rounded-full mb-2" // Increased avatar size for better visibility
            />
            <p className="text-lg font-semibold text-gray-800">{contact.name}</p> {/* Increased font size */}
            <div className="mt-2 flex space-x-4 text-gray-500"> {/* Increased space between icons */}
              <FaPhone className="cursor-pointer hover:text-blue-500" title="Call" />
              <FaEnvelope className="cursor-pointer hover:text-blue-500" title="Email" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactShortcuts;
