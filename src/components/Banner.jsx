import { Container, Row, Col } from './Grid'
import title from '../assets/img/banner-title.png'
import img from '../assets/img/banner-img.png'
import style1 from '../assets/img/banner-style-1.png'
import style2 from '../assets/img/banner-style-2.png'

export default function Banner() {
  return (
    <div className='banner'>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="banner-wrap overflow-hidden relative">
              <div className="title">
                <img src={title} className='mx-auto' alt="" />
              </div>
              <div className="banner-img">
                <img src={img} alt="" />
              </div>
              <img src={style1} alt="" className="style style1 absolute top-[45px] left-0" />
              <img src={style2} alt="" className="style style2 absolute right-0 top-[120px] md:top-[290px] " />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
