import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import SectionWrapper from '../components/ui/SectionWrapper';
import Card from '../components/ui/Card';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <div className="overflow-x-hidden">
            <section className="py-20 bg-surface text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
                    >
                        Get In <span className="text-primary">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted max-w-2xl mx-auto font-medium"
                    >
                        Have a project in mind? We'd love to hear from you. Let's create something amazing together.
                    </motion.p>
                </div>
            </section>

            <SectionWrapper>
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                                        <p className="text-muted font-medium">7904447870</p>
                                        <p className="text-xs text-subtle mt-1">Mon-Fri from 9am to 6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-secondary/10 p-3 rounded-lg text-secondary">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                                        <p className="text-muted break-all font-medium">muhuntha.businessdesk@gmail.com</p>
                                        <p className="text-xs text-subtle mt-1">We respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-accent/10 p-3 rounded-lg text-accent">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                                        <p className="text-muted font-medium">Office above Anjappar Hotel, 2nd Floor</p>
                                        <p className="text-muted font-medium">Tuticorin – 628002</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-border">
                                <h3 className="font-semibold text-foreground mb-4">Connect Quickly</h3>
                                <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-green-500/20">
                                    <MessageSquare className="w-5 h-5 mr-2" /> Chat on WhatsApp
                                </Button>
                            </div>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h2>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-foreground">First Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-medium placeholder:text-subtle"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-foreground">Last Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-medium placeholder:text-subtle"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-medium placeholder:text-subtle"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground">Subject</label>
                                    <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-medium">
                                        <option>I need a new website</option>
                                        <option>Fix my current website</option>
                                        <option>Website Redesign</option>
                                        <option>Other inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground">Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none font-medium placeholder:text-subtle"
                                        placeholder="Tell us more about your project..."
                                    ></textarea>
                                </div>

                                <Button type="submit" className="w-full mt-4" size="lg">
                                    <Send className="w-5 h-5 mr-2" /> Send Message
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Contact;
