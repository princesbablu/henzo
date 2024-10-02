import { Container } from './Grid'
import FooterLogo from '../assets/img/footer-logo.png'
import Social from './Social'

export default function Footer() {
  return (
    <div className='footer md:px-6'>
      <div className="footer-box flex flex-col items-center justify-end bg-[url('../img/footer-bg.png')] bg-no-repeat bg-center">
        <a className='inline-block hover:opacity-85' href="#">
          <img className=' max-w-44 md:max-w-[452px]' src={FooterLogo} alt="footer" /></a>
        <h3 className='text-white text-[20px] tracking-[1.2px] pt-7'>Follow Us</h3>
        <div className="social pt-4">
          <Social />
        </div>
        <p className='text-white text-[20px] tracking-[1.2px] pt-7'>Copyright: © 2024 henzo. All Rights Reserved.</p>
      </div>
    </div>
  )
}
