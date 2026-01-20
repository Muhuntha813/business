import { motion } from 'framer-motion';

const variants = {
    primary: 'bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-blue-500/30',
    secondary: 'bg-secondary text-secondary-foreground hover:opacity-90 shadow-lg shadow-indigo-500/30',
    outline: 'border-2 border-border text-foreground hover:border-primary hover:text-primary bg-transparent',
    ghost: 'text-muted hover:text-primary hover:bg-surface',
    inverted: 'bg-background text-primary hover:bg-surface shadow-lg',
};

const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
};

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    ...props
}) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${variants[variant]} ${sizes[size]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
