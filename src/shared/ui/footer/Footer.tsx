import Image from 'next/image'
import Link from 'next/link'

import FooterIconPng from '@/shared/ui/footer/FooterIcon.png'

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <div>
            <div>
              <p>링크벌세 (스튜디고)</p>

              <div>
                <p>대표 : 스튜디고 스페인어</p>

                <p>
                  사업자등록번호 : 012 - 34 - 56789 |{' '}
                  <a href="#">사업자정보확인</a>
                </p>

                <p>통신판매업 신고번호 : 제 2025 - 서울강남 - 5555 호</p>
                <p>서울 서초구 강남대로99길 45 6층</p>

                <div>
                  <p>대표 번호 : 070 - 1234 - 5678</p>
                  <p>이메일 : studigo@linkberse.com</p>
                  <p>개인정보책임자 : 스튜디고 스페인어</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <hr />
          </div>

          <div>
            <div>
              <div>
                <Image
                  src={FooterIconPng}
                  alt="LINKVERSE"
                  className="h-10 w-auto"
                  priority
                />
              </div>

              <div>
                <p>호스팅서비스제공 : (주)LINKVERSE</p>

                <p>
                  (주)LINKVERSE는 라이브클래스(LIVEKLASS) 호스팅 서비스와 더불어
                  상품의 결제 및 정산 서비스를 제공합니다. 단, (주)LINKVERSE는
                  통신판매중개자이며 통신판매의 당사자가 아닙니다. 상품, 상품
                  정보, 거래에 관한 모든 의무와 책임은 판매자에게 있습니다.
                </p>

                <p>
                  © 2026 LiveKlass | <Link href="/terms">이용약관</Link> |{' '}
                  <Link href="/privacy">개인정보처리방침</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
