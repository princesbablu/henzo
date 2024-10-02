import { Container, Row, Col } from '../components/Grid'
import Token from '../components/Token'
import style from '../assets/img/tokenomics-style.png'
import tpshap from "../assets/img/roadmap-tp-separator.png";
import tpcarectar from "../assets/img/roadmaptop-shap.png";

export default function Tokenomics() {
  return (
    <div className='tokenomics text-center relative pb-56 md:pb-[300px]'>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="title text-center">
              <h2>Tokenomic</h2>
            </div>
          </Col>
          <Col xs={12}>
            <div className="tokenomics-wrap relative">
              <div className="tokenomics-item">
                <div className="top flex justify-center">
                  <div className="single">
                    <p>Lp Burnt</p>
                    <span className='inline-block'>70</span>
                  </div>
                  <div className="single">
                    <p>Texes</p>
                    <span className='inline-block'>0<span>/</span>0 tex</span>
                  </div>
                </div>
                <div className="single w-[100%] min-2-[none]">
                  <p>Total supply</p>
                  <span className='inline-block'>2 billion</span>
                </div>
                <div className="token">
                  <Token />
                </div>
              </div>
              <img src={style} alt="" className='style style-1 absolute -scale-[1] -top-[22px]' />
              <img src={style} alt="" className='style style-2 absolute -top-[22px]' />
            </div>
          </Col>
        </Row>
      </Container>
      <img className='absolute bottom-0 left-0 w-[150%] md:w-full h-16 md:h-40 -mb-[2px]' src={tpshap} alt="" />
      <img className='absolute bottom-[-50px] md:bottom-[-30px] left-1/4 z-[-1] max-w-56 md:max-w-64' src={tpcarectar} alt="" />
    </div>
  )
}
