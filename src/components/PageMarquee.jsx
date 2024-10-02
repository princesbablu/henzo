import Marquee from "react-fast-marquee"
import { Container } from '../components/Grid'
import icon from '../assets/img/marquee-icon.png'

export default function PageMarquee() {
  return (
    <Container>
      <div className="common-marquee bg-[#2B2B2B] py-2 md:py-4 lg:py-5 xl:py-6 rounded-2xl border-[2px] lg:border-[4px] border-[#E23B3B]">
        <Marquee autoFill={true} speed={60}>
          <div className="flex items-center">
            <img src={icon} className=" mx-[14px]" alt="" />
            <h4 className="mb-0 text-uppercase text-white text-2xl md:text-3xl xl:text-[36px] tracking-[2.16px] leading-[88.889%] font-normal">Buy henzo</h4>
          </div>
        </Marquee>
      </div>
    </Container>
  )
}
