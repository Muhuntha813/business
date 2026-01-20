import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import SectionWrapper from '../components/ui/SectionWrapper';
import Card from '../components/ui/Card';
import { Target, Lightbulb, Trophy, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="overflow-x-hidden">
            {/* Hero */}
            <section className="relative py-20 bg-surface">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
                    >
                        About <span className="text-primary">Unique Tech</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        We are a modern digital agency dedicated to building, fixing, and upgrading websites for businesses that want to stand out.
                    </motion.p>
                </div>
            </section>

            {/* Mission & Vision */}
            <SectionWrapper>
                <div className="grid md:grid-cols-2 gap-12">
                    <Card className="p-8 border-t-4 border-t-primary">
                        <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                            <Target className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
                        <p className="text-muted leading-relaxed font-medium">
                            To empower businesses with high-performance digital solutions that drive growth. We believe every business deserves a website that looks great, works perfectly, and converts visitors into customers.
                        </p>
                    </Card>

                    <Card className="p-8 border-t-4 border-t-secondary">
                        <div className="bg-secondary/10 p-4 rounded-full w-fit mb-6">
                            <Lightbulb className="w-8 h-8 text-secondary" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h2>
                        <p className="text-muted leading-relaxed font-medium">
                            To become the go-to agency for businesses seeking reliable, modern, and trustworthy web development services efficiently and affordably.
                        </p>
                    </Card>
                </div>
            </SectionWrapper>

            {/* Founder Section */}
            <SectionWrapper className="bg-surface">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/3 flex justify-center">
                        <div className="relative">
                            <div className="w-64 h-64 bg-slate-800 rounded-full flex items-center justify-center overflow-hidden border-4 border-slate-700 shadow-2xl">
                                <User className="w-32 h-32 text-slate-600" />
                                {/* Placeholder for Founder Image */}
                                {/* <img src="/path/to/image.jpg" className="w-full h-full object-cover" /> */}
                            </div>
                            <div className="absolute bottom-0 right-0 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                Founder
                            </div>
                        </div>
                    </div>

                    <div className="md:w-2/3">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">Muhuntha Vel</h2>
                        <p className="text-primary font-bold mb-6">Founder & Lead Developer</p>

                        <div className="space-y-4 text-muted leading-relaxed font-medium">
                            <p>
                                With a passion for clean code and exceptional design, Muhuntha established Unique Tech to bridge the gap between complex technology and business needs.
                            </p>
                            <p>
                                "I started Unique Tech with a simple goal: to help businesses fix their broken websites and build new ones that actually work. We don't just write code; we solve problems."
                            </p>
                        </div>

                        <div className="mt-8 flex gap-4">
                            <Link to="/contact">
                                <Button variant="outline">Connect on LinkedIn</Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="primary">Work With Me</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default About;
