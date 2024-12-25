import React from 'react';
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-black py-10">
      <div className="container mx-auto text-gray-400">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Business Services Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Business Services</h3>
            <p className="text-sm">
              Providing corporate travel solutions tailored to your needs. Reliable and luxurious transportation for executives and teams.
            </p>
            <a href="/business-services" className="text-yellow-500 hover:text-yellow-600 text-sm mt-2 inline-block">
              Learn more
            </a>
          </div>

          {/* Delivery Services Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Delivery Services</h3>
            <p className="text-sm">
              Offering fast and eco-friendly parcel delivery across Belgium. Door-to-door service with transparent pricing.
            </p>
            <a href="/delivery-services" className="text-yellow-500 hover:text-yellow-600 text-sm mt-2 inline-block">
              Learn more
            </a>
          </div>

          {/* Eco-Friendly Fleet Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Eco-Friendly Fleet</h3>
            <p className="text-sm">
              Our fleet includes hybrid and fully electric vehicles, supporting a greener future while ensuring a luxurious ride.
            </p>
            <a href="/eco-friendly-fleet" className="text-yellow-500 hover:text-yellow-600 text-sm mt-2 inline-block">
              Learn more
            </a>
          </div>

          {/* Contact & Social Media Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-sm">Gent, Belgium</p>
            <a href="mailto:info@tinpet.com" className="block text-sm hover:underline hover:text-yellow-500">
              email@email.com
            </a>
            <p className="text-sm mb-4">(123) 456-7890</p>

            <h3 className="text-white text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/becode.org/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="h-6 w-6 text-blue-600 hover:text-white" />
              </a>
              <a href="https://x.com/becodeorg" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="h-6 w-6 text-blue-400 hover:text-white" />
              </a>
              <a href="https://www.instagram.com/becodeorg/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-6 w-6 text-pink-500 hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/company/becode.org/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="h-6 w-6 text-blue-700 hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} BELGIAN RIDE SERVICE.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
