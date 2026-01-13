'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner, ToasterProps } from 'sonner'

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'bg-brand-white! border-none! rounded-brand-base! shadow-brand-sm!',
          title: 'text-brand-black!',
          success: 'text-brand-green!',
          info: 'text-brand-blue!',
          warning: 'text-brand-warning!',
          error: 'text-brand-error!',
          loading: 'text-brand-gray-400!',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
