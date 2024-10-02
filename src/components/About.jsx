import { Container, Row, Col } from './Grid'
import img from '../assets/img/about-img.png'

export default function About() {
  return (
    <div className='about'>
      <Container>
        <Row className='items-end'>
          <Col xs={12} lg={7} className='flex justify-center'>
            <div className="about-content">
              <div className="text">
                <h3 className='uppercase font-normal'>About Henzo</h3>
                <p className='uppercase'>Henzo is more than just a meme coin – it’s a movement. Built for the community by the community, Henzo is designed to ride the waves of the crypto market with a lighthearted yet serious mission: make profits and have fun doing it! Our goal? To become the most loved meme coin on the blockchain.</p>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={5}>
            <div className="about-img">
              <img src={img} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
