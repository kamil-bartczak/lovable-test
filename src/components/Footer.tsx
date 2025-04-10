
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import RabbitLogo from "./RabbitLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#f8f8f8] border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <RabbitLogo className="h-8 w-8"/>
              <span className="text-xl font-light text-gray-900 font-chakra">Rabbit MVP</span>
            </div>
            <p className="text-gray-600 mb-4">
              A methodology to create Minimum Viable Products in just 7 days with speed and precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-purple-700 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-700 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-700 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-700 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Methodology</h3>
            <ul className="space-y-2">
              <li><a href="#methodology" className="text-gray-600 hover:text-purple-700 transition-colors">About</a></li>
              <li><a href="#stages" className="text-gray-600 hover:text-purple-700 transition-colors">7 Stages</a></li>
              <li><a href="#mindset" className="text-gray-600 hover:text-purple-700 transition-colors">Rabbit Mindset</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">Extended Rabbit</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#case-studies" className="text-gray-600 hover:text-purple-700 transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">Tools</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Rabbit MVP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
