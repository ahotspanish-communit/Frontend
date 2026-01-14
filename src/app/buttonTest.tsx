'use client'

/**
 * [컨벤션 준수]
 * 1. 반드시 @/src/ 를 포함한 절대 경로 사용 (@/shared/ -> @/src/shared/)
 * 2. 아이콘 이름 뒤에 항상 Icon 붙이기
 */
import { Button } from '../shared/ui/button/Button'
import { SirenIcon, HeartIcon, LogOutIcon } from 'lucide-react'

const ButtonGalleryPage = () => {
  return (
    <main className="min-h-screen space-y-12 bg-gray-50 p-10">
      <header className="border-b pb-4">
        <h1 className="text-brand-black text-2xl font-bold">
          Button System Gallery (Issue #20)
        </h1>
        <p className="text-brand-gray-300 mt-1 text-sm">
          StudiGo Design System: 56px(Reg) / 48px(Md) / 40px(Sm)
        </p>
      </header>

      {/* 1. Regular Buttons (56px) - 메인 페이지용 / Trigger & Confirm */}
      <section className="space-y-4">
        <h2 className="border-brand-main border-l-4 pl-3 text-lg font-bold">
          1. Regular Actions (56px)
        </h2>
        <div className="grid max-w-2xl grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-brand-gray-300 text-xs">
              [Trigger] 핵심 액션 유발 (Red)
            </p>
            {/* FIX: variant="default" -> "primary", size="default" -> "reg" */}
            <Button variant="primary" size="reg" className="w-full">
              로그인 하기
            </Button>
            <Button variant="primary" size="reg" disabled className="w-full">
              정답 제출 (Disabled)
            </Button>
          </div>
          <div className="space-y-2">
            <p className="text-brand-gray-300 text-xs">
              [Confirm] 결정 확정 (Black)
            </p>
            {/* FIX: size="default" -> "reg" */}
            <Button variant="secondary" size="reg" className="w-full">
              이메일로 로그인
            </Button>
            <Button variant="secondary" size="reg" className="w-full">
              내 정보 저장하기
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Modal Buttons (48px) - 모달 하단용 / Confirm & Revoke */}
      <section className="space-y-4">
        <h2 className="border-brand-black border-l-4 pl-3 text-lg font-bold">
          2. Modal Actions (48px)
        </h2>
        <div className="rounded-brand-base shadow-brand-md max-w-md space-y-6 bg-white p-6">
          <p className="text-brand-black text-center text-sm font-medium">
            정말 밴을 해제하시겠습니까?
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="md" className="flex-1">
              취소
            </Button>
            <Button variant="secondary" size="md" className="flex-1">
              해제
            </Button>
          </div>

          <div className="space-y-4 border-t pt-4">
            <p className="text-brand-black text-center text-sm font-medium">
              정말로 탈퇴하시겠습니까?
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="md" className="flex-1">
                취소
              </Button>
              {/* FIX: variant="destructive" -> "primary" (시안의 레드 버튼 대응) */}
              <Button variant="primary" size="md" className="flex-1">
                회원탈퇴
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Inline / Small Buttons (40px) - 보조용 / Helpers */}
      <section className="space-y-4">
        <h2 className="border-brand-gray-200 border-l-4 pl-3 text-lg font-bold">
          3. Inline Helpers (40px)
        </h2>
        <div className="flex flex-wrap items-end gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-brand-gray-300 text-xs">중복확인 / 인증</p>
            <Button variant="ghost" size="sm">
              중복 확인
            </Button>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-brand-gray-300 text-xs">
              아이콘 조합 (Revoke/Support)
            </p>
            <Button variant="outline" size="sm" className="gap-2">
              <SirenIcon className="text-brand-main h-4 w-4" /> 신고하기
            </Button>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-brand-gray-300 text-xs">좋아요</p>
            <Button variant="outline" size="sm" className="gap-2 px-3">
              <HeartIcon className="text-brand-main h-4 w-4" /> 좋아요
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Special States */}
      <section className="space-y-4">
        <h2 className="border-l-4 border-red-500 pl-3 text-lg font-bold">
          4. Global Utility
        </h2>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            기본 이미지로 변경
          </Button>
          <Button
            variant="ghost"
            size="reg"
            className="text-brand-gray-500 hover:bg-transparent"
          >
            <LogOutIcon className="mr-2 h-5 w-5" /> 로그아웃
          </Button>
        </div>
      </section>
    </main>
  )
}

export default ButtonGalleryPage
