
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import RabbitLogo from "./RabbitLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative">
      <div className="absolute inset-0 bg-rabbit-dark/90 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <RabbitLogo className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-white font-chakra">Rabbit MVP</span>
            </div>
            <p className="text-gray-400 mb-4">
              A revolutionary methodology to create Minimum Viable Products in just 7 days with AI as your co-founder.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-rabbit-turquoise transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-rabbit-turquoise transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-rabbit-turquoise transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-rabbit-turquoise transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Methodology</h3>
            <ul className="space-y-2">
              <li><a href="#methodology" className="text-gray-400 hover:text-rabbit-turquoise transition-colors">About</a></li>
              <li><a href="#stages" className="text-gray-400 hover:text-rabbit-turquoise transition-colors">7 Stages</a></li>
              <li><a href="#mindset" className="text-gray-400 hover:text-rabbit-turquoise transition-colors">Rabbit Mindset</a></li>
              <li><a href="#" className="text-gray-400 hover:text-rabbit-turquoise transition-colors">Extended Rabbit</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#case-studies" className="text-gray-400 hover:text-rabbit-turquoise transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-rabbit-turquoise transition-colors">Tools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-rabbit-turquoise transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-rabbit-turquoise transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-rabbit-turquoise transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-rabbit-turquoise transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-rabbit-turquoise transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-rabbit-turquoise transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Rabbit MVP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
