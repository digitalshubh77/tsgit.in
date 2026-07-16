import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'sun' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-forest-800 text-white hover:bg-forest-700 focus-visible:ring-forest-500',
  secondary:
    'bg-white text-forest-900 hover:bg-forest-50 focus-visible:ring-forest-400',
  sun: 'bg-sun-500 text-forest-950 hover:bg-sun-400 focus-visible:ring-sun-500',
  outline:
    'border border-forest-200 bg-transparent text-forest-900 hover:border-forest-400 hover:bg-forest-50 focus-visible:ring-forest-400',
  ghost:
    'bg-transparent text-forest-800 hover:bg-forest-100 focus-visible:ring-forest-400',
}

const sizes: Record<Size, string> = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

export function buttonClass(
  variant: Variant = 'primary',
  size: Size = 'md',
  className?: string,
) {
  return cn(base, variants[variant], sizes[size], className)
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={buttonClass(variant, size, className)} {...props} />
  )
}

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  size?: Size
}

export function LinkButton({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: LinkButtonProps) {
  return <a className={buttonClass(variant, size, className)} {...props} />
}

type RouterLinkButtonProps = LinkProps & {
  variant?: Variant
  size?: Size
}

export function RouterLinkButton({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: RouterLinkButtonProps) {
  return <Link className={buttonClass(variant, size, className)} {...props} />
}
