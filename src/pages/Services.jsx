import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import SectionWrapper from '../components/ui/SectionWrapper';
import Card from '../components/ui/Card';
import { Code2, Settings, Smartphone, Zap, PenTool, Bug, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            icon: Code2,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10',
            title: 'Custom Website Development',
            desc: 'Tailor-made websites built with React and Tailwind CSS. Fast, secure, and scalable solutions for your business.',
            features: ['Single Page Applications', 'Corporate Websites', 'Landing Pages', 'CMS Integration']
        },
        {
            icon: Settings,
            color: 'text-emerald-500',
            bg: 'bg-emerald-500/10',
            title: 'Website Redesign',
            desc: 'Transform your outdated website into a modern digital experience. We improve aesthetics and functionality.',
            features: ['Modern UI Overhaul', 'Better User Experience', 'Mobile Optimization', 'Content Restructuring']
        },
        {
            icon: Bug,
            color: 'text-red-500',
            bg: 'bg-red-500/10',
            title: 'Bug Fixing & Repair',
            desc: 'Having trouble with your current site? We identify and fix bugs, broken layouts, and script errors quickly.',
            features: ['Layout Fixes', 'Script Debugging', 'Form Repairs', 'Cross-browser Compatibility']
        },
        {
            icon: Smartphone,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10',
            title: 'Mobile Responsiveness',
            desc: 'Ensure your website looks perfect on all devices. We optimize layouts for phones, tablets, and desktops.',
            features: ['Fluid Layouts', 'Touch-friendly UI', 'Adaptive Images', 'Mobile Navigation']
        },
        {
            icon: Zap,
            color: 'text-yellow-500',
            bg: 'bg-yellow-500/10',
            title: 'Performance Optimization',
            desc: 'Speed matters. We optimize your website to load fast, improving SEO and user retention.',
            features: ['Code Minification', 'Image Optimization', 'Lazy Loading', 'Core Web Vitals Improvement']
        },
        {
            icon: PenTool,
            color: 'text-pink-500',
            bg: 'bg-pink-500/10',
            title: 'UI/UX Improvements',
            desc: 'Enhance the look and feel of your digital product. We focus on usability and visual hierarchy.',
            features: ['Visual Design', 'Interaction Design', 'Accessibility', 'Brand Consistency']
        }
    ];

    return (
        <div className="overflow-x-hidden">
            <section className="py-20 bg-surface text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
                    >
                        Our <span className="text-secondary">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted max-w-2xl mx-auto font-medium"
                    >
                        From simple fixes to complex builds, we offer a full range of web development services.
                    </motion.p>
                </div>
            </section>

            <SectionWrapper>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="flex flex-col h-full hover:border-primary/50 transition-colors">
                            <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6`}>
                                <service.icon className={`w-8 h-8 ${service.color}`} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                            <p className="text-muted mb-6 flex-grow leading-relaxed font-medium">
                                {service.desc}
                            </p>
                            <ul className="mb-8 space-y-2">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-subtle font-semibold">
                                        <div className={`w-1.5 h-1.5 rounded-full ${service.color.replace('text-', 'bg-')}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/contact">
                                <Button variant="outline" size="sm" className="w-full">
                                    Get Details <ChevronRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </Card>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <div className="bg-primary border border-primary/20 rounded-2xl p-8 md:p-12 inline-block max-w-4xl w-full shadow-2xl">
                        <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Need something custom?</h2>
                        <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-medium">
                            We can build exactly what you need. Let's discuss your custom requirements.
                        </p>
                        <Link to="/contact">
                            <Button variant="inverted" size="lg">Talk to an Expert</Button>
                        </Link>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Services;
