import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import SectionWrapper from '../components/ui/SectionWrapper';
import Card from '../components/ui/Card';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
    const projects = [
        {
            title: 'E-Commerce Dashboard',
            category: 'Web App',
            description: 'A comprehensive analytics dashboard for online retailers. Features real-time sales tracking, inventory management, and reporting tools.',
            tech: ['React', 'Redux', 'Tailwind', 'Recharts'],
            image: 'bg-gradient-to-br from-blue-900 to-slate-900'
        },
        {
            title: 'EduLearn Platform',
            category: 'LMS Platform',
            description: 'An online learning management system for schools. Includes student profiles, course progress tracking, and interactive quizzes.',
            tech: ['Next.js', 'Typescript', 'PostgreSQL', 'Prisma'],
            image: 'bg-gradient-to-br from-indigo-900 to-purple-900'
        },
        {
            title: 'Travel Agency Site',
            category: 'Business Website',
            description: 'A stunning, high-performance website for a luxury travel agency. Features immersive video backgrounds and booking forms.',
            tech: ['React', 'Framer Motion', 'GSAP'],
            image: 'bg-gradient-to-br from-emerald-900 to-teal-900'
        },
        {
            title: 'FinTech Landing Page',
            category: 'Landing Page',
            description: 'High-conversion landing page for a new fintech startup. Optimized for speed and SEO with complex scroll animations.',
            tech: ['React', 'Vite', 'Tailwind'],
            image: 'bg-gradient-to-br from-orange-900 to-red-900'
        },
        {
            title: 'Real Estate Portal',
            category: 'Web Application',
            description: 'Property listing platform with advanced filtering, map integration, and virtual tour support.',
            tech: ['React', 'Google Maps API', 'Firebase'],
            image: 'bg-gradient-to-br from-slate-800 to-black'
        },
        {
            title: 'Restaurant Menu & Order',
            category: 'Mobile Web App',
            description: 'QR-code based digital menu and ordering system for restaurants. Fast, responsive, and user-friendly.',
            tech: ['React', 'PWA', 'Stripe Integration'],
            image: 'bg-gradient-to-br from-pink-900 to-rose-900'
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
                        Our <span className="text-secondary">Work</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted max-w-2xl mx-auto font-medium"
                    >
                        Check out some of our recent projects. We deliver quality code and exceptional design.
                    </motion.p>
                </div>
            </section>

            <SectionWrapper>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="group overflow-hidden">
                            {/* Project Image Placeholder */}
                            <div className={`h-48 w-full ${project.image} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                                        View Demo
                                    </Button>
                                </div>
                            </div>

                            <div className="p-2 pt-6">
                                <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">{project.category}</div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">{project.title}</h3>
                                <p className="text-muted text-sm mb-4 leading-relaxed font-medium">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs bg-surface px-2 py-1 rounded text-muted font-semibold border border-border">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a href="#" className="flex items-center gap-2 text-sm text-subtle hover:text-primary transition-colors font-medium">
                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-sm text-subtle hover:text-primary transition-colors font-medium">
                                        <Github className="w-4 h-4" /> Code
                                    </a>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Portfolio;
