'use client'

import * as React from 'react'

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/shared/ui/select/Select'

export default function Page() {
  const [mdValue, setMdValue] = React.useState<string>()
  const [lgValue, setLgValue] = React.useState<string>()

  return (
    <div className="min-h-screen space-y-10 p-10">
      {/* md */}
      <section className="space-y-2">
        <p className="text-brand-gray-400 text-sm font-semibold">중 (md)</p>

        <Select value={mdValue} onValueChange={setMdValue}>
          <SelectTrigger size="md">
            <SelectValue placeholder="선택해주세요" />
          </SelectTrigger>

          <SelectContent>
            {Array.from({ length: 12 }).map((_, i) => (
              <SelectItem key={i} value={`md-${i}`}>
                옵션 {i + 1}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </section>

      {/* lg */}
      <section className="space-y-2">
        <p className="text-brand-gray-400 text-sm font-semibold">대 (lg)</p>

        <Select value={lgValue} onValueChange={setLgValue}>
          <SelectTrigger size="lg">
            <SelectValue placeholder="선택해주세요" />
          </SelectTrigger>

          <SelectContent>
            {Array.from({ length: 12 }).map((_, i) => (
              <SelectItem key={i} value={`lg-${i}`}>
                옵션 {i + 1}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </section>
    </div>
  )
}
