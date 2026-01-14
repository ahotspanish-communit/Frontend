'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/lib/cn'

/**
 * 버튼 스타일 정의 (Tailwind v4 & Design Tokens)
 * - Trigger: 핵심 기능을 실행시키는 액션 (Red)
 * - Confirm: 결정을 확정 짓는 액션 (Black)
 * - Revoke: 취소하거나 해제하는 보조 액션 (Outline)
 */
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-brand-base transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-brand-main text-white hover:bg-brand-main/90 font-bold',
        secondary:
          'bg-brand-black text-white hover:bg-brand-black/90 font-bold',
        outline:
          'border border-brand-gray-300 bg-white text-brand-black hover:bg-brand-gray-50 font-bold',
        ghost:
          'bg-brand-gray-100 text-brand-gray-400 hover:bg-brand-gray-200 font-medium',
      },
      size: {
        reg: 'h-[56px] px-8 text-base',
        md: 'h-[48px] px-6 text-sm',
        sm: 'h-[40px] px-4 text-xs',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'reg',
    },
  }
)

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
