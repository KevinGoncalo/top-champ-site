import { Facebook, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Top Champ Plumbing LLC</h3>
            <p className="text-blue-200 italic">"Reliable and Dedicated. Service of Champs."</p>
            <div className="flex items-center space-x-2 text-blue-200">
              <MapPin size={18} />
              <span>Serving MA & RI</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-blue-200">
              <li>Residential and Commercial</li>
              <li>Install and Remodels</li>
              <li>Heating</li>
              <li>Service and Repairs</li>
              <li>Gas Work</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:774-218-9526" className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors">
                <Phone size={18} />
                <span>774-218-9526</span>
              </a>
              <a href="mailto:TopChampPlumbing@gmail.com" className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors">
                <Mail size={18} />
                <span>TopChampPlumbing@gmail.com</span>
              </a>
              <a 
                href="https://m.facebook.com/profile.php?id=61566051824561"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors"
              >
                <Facebook size={18} />
                <span>Follow us on Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-700">
          <div className="text-center text-blue-200">
            <p>&copy; {currentYear} Top Champ Plumbing LLC. All rights reserved.</p>
            <p className="mt-2 text-sm">Licensed & Insured</p>
          </div>
        </div>
      </div>
    </footer>
  );
}