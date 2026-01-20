import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Code2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-surface border-t border-border pt-16 pb-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-1">
                    <Link to="/" className="flex items-center gap-2 mb-6">
                        <img src="/logo.png" alt="Unique Tech" className="h-10 w-auto object-contain" />
                        <span className="text-xl font-bold text-foreground">Unique Tech</span>
                    </Link>
                    <p className="text-muted text-sm leading-relaxed mb-6">
                        Building premium digital experiences for modern businesses. We fix, upgrade, and create stunning websites.
                    </p>
                    <div className="flex gap-4">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                            <a key={i} href="#" className="text-muted hover:text-primary transition-colors">
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-foreground font-semibold mb-6">Services</h3>
                    <ul className="space-y-3 text-muted text-sm">
                        <li><Link to="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
                        <li><Link to="/services" className="hover:text-primary transition-colors">Website Redesign</Link></li>
                        <li><Link to="/services" className="hover:text-primary transition-colors">Bug Fixing</Link></li>
                        <li><Link to="/services" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-foreground font-semibold mb-6">Company</h3>
                    <ul className="space-y-3 text-muted text-sm">
                        <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
                        <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        <li><Link to="/" className="hover:text-primary transition-colors">Testimonials</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-foreground font-semibold mb-6">Contact Us</h3>
                    <ul className="space-y-4 text-muted text-sm">
                        <li className="flex items-start gap-3">
                            <Phone className="w-5 h-5 text-primary shrink-0" />
                            <span>7904447870</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-primary shrink-0" />
                            <span className="break-all">muhuntha.businessdesk@gmail.com</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary shrink-0" />
                            <span>Office above Anjappar Hotel, 2nd Floor, Tuticorin – 628002</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-border text-center text-muted text-sm">
                <p>&copy; {new Date().getFullYear()} Unique Tech. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
