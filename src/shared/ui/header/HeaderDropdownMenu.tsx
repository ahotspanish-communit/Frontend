'use client'

import Link from 'next/link'
import {
  ChevronDownIcon,
  HeartIcon,
  HistoryIcon,
  HomeIcon,
  LayoutGridIcon,
  LogOutIcon,
  MessageSquareTextIcon,
  SettingsIcon,
  UserIcon,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'
import { Avatar, AvatarImage, AvatarFallback } from '@/shared/ui/avatar'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/accordion'

export const HeaderDropdownMenu = () => (
  <div className="flex items-center">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="hover:bg-brand-gray-100 cursor-pointer rounded-full p-1 transition-colors outline-none">
          <UserIcon className="text-brand-black h-6 w-6" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="rounded-brand-base border-brand-gray-100 shadow-brand-md w-64 p-2"
      >
        <div className="flex items-center gap-3 p-3">
          <Avatar className="border-brand-green h-10 w-10 border">
            <AvatarImage src="/images/profile-dog.png" alt="Fortes42" />
            <AvatarFallback>F42</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-brand-black text-sm font-bold">Fortes42</span>
            <span className="text-brand-gray-300 text-[11px]">
              forteslv42@gmail.com
            </span>
          </div>
        </div>

        <DropdownMenuSeparator className="bg-brand-gray-100" />

        <div className="py-1">
          <DropdownMenuItem
            asChild
            className="rounded-brand-sm focus:bg-brand-gray-100"
          >
            <Link
              href="/mypage"
              className="text-brand-gray-500 flex w-full items-center gap-3 py-2"
            >
              <HomeIcon className="h-4 w-4" />{' '}
              <span className="text-sm">마이페이지로 이동</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="rounded-brand-sm focus:bg-brand-gray-100 text-brand-gray-500 flex items-center gap-3 py-2 text-sm">
            <SettingsIcon className="h-4 w-4" />내 정보 수정
          </DropdownMenuItem>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="my-activity" className="border-none">
              <AccordionTrigger className="hover:bg-brand-gray-100 rounded-brand-sm text-brand-gray-500 px-2 py-2 hover:no-underline">
                <div className="flex items-center gap-3">
                  <HistoryIcon className="h-4 w-4" />
                  <span>내 활동 보기</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-brand-gray-100/50 rounded-brand-sm mt-1 pb-1">
                <DropdownMenuItem className="text-brand-gray-500 flex cursor-pointer items-center gap-3 px-8 py-2 text-sm focus:bg-transparent">
                  <LayoutGridIcon className="h-4 w-4" /> 내 게시글
                </DropdownMenuItem>
                <DropdownMenuItem className="text-brand-gray-500 flex cursor-pointer items-center gap-3 px-8 py-2 text-sm focus:bg-transparent">
                  <MessageSquareTextIcon className="h-4 w-4" /> 내 댓글
                </DropdownMenuItem>
                <DropdownMenuItem className="text-brand-gray-500 flex cursor-pointer items-center gap-3 px-8 py-2 text-sm focus:bg-transparent">
                  <HeartIcon className="h-4 w-4" /> 좋아요
                </DropdownMenuItem>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <DropdownMenuSeparator className="bg-brand-gray-100" />

        <DropdownMenuItem className="rounded-brand-sm focus:bg-brand-gray-100 text-brand-black flex items-center gap-3 py-2 text-sm font-medium">
          <LogOutIcon className="h-4 w-4" />
          로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
)

export default HeaderDropdownMenu
