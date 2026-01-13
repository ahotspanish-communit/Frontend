import Image from 'next/image'
import Link from 'next/link'

import FooterIcon from '@/shared/ui/footer/FooterIcon.png'

const Footer = () => {
  return (
    <footer className="text-brand-white w-full bg-[#1E1919] px-5 pt-15 md:px-13 lg:px-60">
      <div className="mx-auto max-w-360">
        <section className="max-w-193 text-left">
          <p className="mb-4.5 text-[13px] font-semibold">
            LINKVERSE (스튜디고)
          </p>

          <div className="space-y-2.5 text-[13px] leading-5.5 opacity-90">
            <p>대표 : 스튜디고 스페인어</p>

            <p>
              사업자등록번호 : 012 - 34 - 56789 |{' '}
              <a className="no-underline" href="#">
                사업자정보확인
              </a>
            </p>

            <p>통신판매업 신고번호 : 제 2025 - 서울강남 - 5555 호</p>
            <p>서울 서초구 강남대로99길 45 6층</p>

            <div className="space-y-2.5 pt-5">
              <p>대표 번호 : 070 - 1234 - 5678</p>
              <p>이메일 : studigo@linkberse.com</p>
              <p>개인정보책임자 : 스튜디고 스페인어</p>
            </div>
          </div>
        </section>

        <div className="mt-18 h-px w-full bg-white/20" />

        <section className="mt-12 max-w-193 text-left">
          <div className="h-6 w-22.5">
            <Image
              src={FooterIcon}
              alt="LINKVERSE"
              className="h-full w-full object-contain object-left"
              priority
            />
          </div>

          <div className="mt-4 space-y-2 pb-15">
            <p className="text-[13px] font-semibold">
              호스팅서비스제공 : (주)LINKVERSE
            </p>

            <p className="text-[13px] leading-5.5 break-keep opacity-90">
              (주)LINKVERSE는 라이브클래스(LIVEKLASS) 호스팅 서비스와 더불어
              상품의 결제 및 정산 서비스를 제공합니다.
            </p>

            <p className="text-[13px] leading-5.5 break-keep opacity-90">
              단, (주)LINKVERSE는 통신판매중개자이며 통신판매의 당사자가
              아닙니다. 상품, 상품 정보, 거래에 관한 모든 의무와 책임은
              판매자에게 있습니다.
            </p>

            <p className="mt-2 text-[13px] opacity-90">
              © 2026 LiveKlass | <Link href="/terms">이용약관</Link> |{' '}
              <Link href="/privacy">개인정보처리방침</Link>
            </p>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer
