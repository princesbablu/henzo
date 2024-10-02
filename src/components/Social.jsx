import X from '../assets/img/icon/x.svg'
import telegram from '../assets/img/icon/telegram.svg'
import DexsCnner from '../assets/img/icon/dexscnner.svg'
import sscnner from '../assets/img/icon/sscnner.svg'


export default function Social({ className }) {
  const socialIcons = [

    {
      name: 'X',
      icon: X,
      url: ''
    },
    {
      name: 'telegram',
      icon: telegram,
      url: ''
    },
    {
      name: 'dexscreener',
      icon: DexsCnner,
      url: ''
    },
    {
      name: 'dextools',
      icon: sscnner,
      url: ''
    },
  ];
  return (
    <ul className={`social-list flex items-center flex-wrap gap-2 ${className}`}>
      {socialIcons.map((item, index) => (
        <li key={index} className='!mb-0'>
          <a href={item.url} target="_blank" className="social-link flex items-center justify-center ml-1">
            <img src={item.icon} alt="" />
          </a>
        </li>
      ))}
    </ul>
  )
}