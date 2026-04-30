import { motion } from 'motion/react'
import type { AnchorHTMLAttributes } from 'react'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'gold' | 'outline'
}

export function Button({ variant = 'gold', className = '', children, ...props }: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-7 py-3.5 font-josefin font-semibold text-base tracking-widest uppercase transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2'

  const variants = {
    gold: 'bg-gold-deco text-dark hover:bg-gold',
    outline: 'border border-gold-deco text-gold-deco hover:bg-gold-deco hover:text-dark',
  }

  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...(props as object)}
    >
      {children}
    </motion.a>
  )
}
