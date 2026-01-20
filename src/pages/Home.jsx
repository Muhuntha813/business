import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import SectionWrapper from '../components/ui/SectionWrapper';
import Card from '../components/ui/Card';
import { Code2, PenTool, Layout, Smartphone, Zap, Search, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -z-10" />

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-2 bg-blue-50/50 dark:bg-slate-800/50 rounded-full border border-blue-100 dark:border-slate-700 mb-6">
                            <span className="text-primary font-bold text-sm">Web Development & Digital Solutions</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            We Build, Fix & <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Upgrade</span> Modern Websites
                        </h1>
                        <p className="text-xl text-muted mb-8 leading-relaxed max-w-lg font-medium">
                            Unique Tech helps businesses grow with premium, high-performance websites. From full builds to quick fixes, we handle it all.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact">
                                <Button size="lg" variant="primary">Get a Website</Button>
                            </Link>
                            <Link to="/contact">
                                <Button size="lg" variant="outline">Fix My Website</Button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Hero Image / Code Block Placeholder - Adjusted for Light Mode */}
                        <div className="relative z-10 bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 shadow-2xl">
                            <div className="flex items-center gap-2 mb-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="text-xs text-slate-500 ml-2">uniquetech.dev</div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-40 bg-slate-100 dark:bg-slate-800/50 rounded-lg w-full animate-pulse" />
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-20 bg-slate-100 dark:bg-slate-800/50 rounded-lg w-full animate-pulse" />
                                    <div className="h-20 bg-slate-100 dark:bg-slate-800/50 rounded-lg w-full animate-pulse" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements - High Contrast Text */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 bg-white dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl z-20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 dark:bg-green-500/20 p-2 rounded-lg">
                                    <Zap className="text-green-600 dark:text-green-500 w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-foreground">Fast Speed</div>
                                    <div className="text-xs text-muted font-medium">99/100 Performance</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-10 -left-10 bg-white dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl z-20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-100 dark:bg-blue-500/20 p-2 rounded-lg">
                                    <Smartphone className="text-blue-600 dark:text-blue-500 w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-foreground">Mobile First</div>
                                    <div className="text-xs text-muted font-medium">100% Responsive</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services Highlight */}
            <SectionWrapper id="services" className="bg-surface">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Our Expertise</h2>
                    <p className="text-muted max-w-2xl mx-auto font-medium text-lg">
                        We provide comprehensive digital solutions tailored to your business needs using the latest technologies.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Layout, title: 'Web Development', desc: 'Custom business websites built from scratch using React & Tailwind.' },
                        { icon: Search, title: 'Website Repair', desc: 'Fixing broken layouts, bugs, and performance issues instantly.' },
                        { icon: PenTool, title: 'UI/UX Design', desc: 'Modern, clean, and user-friendly interface designs that convert.' },
                    ].map((service, index) => (
                        <Card key={index} className="flex flex-col items-start p-8">
                            <div className="p-3 bg-primary/10 rounded-xl mb-6">
                                <service.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                            <p className="text-muted leading-relaxed mb-6 flex-grow">{service.desc}</p>
                            <Link to="/services" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                Learn more <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            {/* Why Choose Us */}
            <SectionWrapper>
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Why Unique Tech?</h2>
                        <p className="text-muted mb-8 leading-relaxed font-medium">
                            We don't just build websites; we build digital assets that represent your brand professionally. Our focus is on quality, speed, and long-term support.
                        </p>
                        <div className="space-y-4">
                            {[
                                'Premium "Big Agency" Design Quality',
                                'Lightning Fast Performance',
                                'Mobile-First Responsive Approach',
                                'Direct Founder Support'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle className="text-green-600 dark:text-green-500 w-5 h-5 shrink-0" />
                                    <span className="text-foreground font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <Link to="/about">
                                <Button variant="secondary">About Us</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Card className="flex flex-col items-center justify-center p-8 text-center bg-card">
                            <div className="text-5xl font-black text-primary mb-2">50+</div>
                            <div className="text-sm font-bold text-muted">Projects Completed</div>
                        </Card>
                        <Card className="flex flex-col items-center justify-center p-8 text-center bg-card">
                            <div className="text-5xl font-black text-accent mb-2">100%</div>
                            <div className="text-sm font-bold text-muted">Client Satisfaction</div>
                        </Card>
                        <Card className="flex flex-col items-center justify-center p-8 text-center col-span-2 bg-card">
                            <div className="text-5xl font-black text-secondary mb-2">24/7</div>
                            <div className="text-sm font-bold text-muted">Technical Support</div>
                        </Card>
                    </div>
                </div>
            </SectionWrapper>

            {/* Tech Stack */}
            <SectionWrapper className="bg-surface text-center">
                <h2 className="text-3xl font-bold mb-12 text-foreground">Powered by Modern Tech</h2>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 dark:opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {['React', 'Vite', 'Tailwind', 'Framer Motion'].map((tech) => (
                        <div key={tech} className="text-2xl font-bold text-muted hover:text-primary transition-colors">{tech}</div>
                    ))}
                </div>
            </SectionWrapper>

            {/* CTA Section */}
            <SectionWrapper>
                <div className="bg-primary border border-primary/20 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] -z-10" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[80px] -z-10" />

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">Ready to scale your business?</h2>
                    <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg font-medium">
                        Let's build something amazing together. Get a free consultation for your next project.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" variant="inverted">Start a Project</Button>
                    </Link>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Home;
