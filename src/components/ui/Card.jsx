import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverEffect = true }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5 } : {}}
            className={`bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md dark:shadow-none transition-all duration-300 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Card;
