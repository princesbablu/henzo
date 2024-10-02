import React from 'react'
import Container from './Grid/Container';
import Row from './Grid/Row';
import Col from './Grid/Col';
import CommonTitle from './CommonTitle';
import howtobg from "../assets/img/howtobg.png"
import howtobtmbg from "../assets/img/howto-bottom-bg.png"
import howtoitembg from "../assets/img/howtoitembg.png"
export default function Howto() {
    const howtoServices = [
        {
            title: "Set Up Your Crypto Wallet",
            desc: "Download a crypto wallet like MetaMask or Trust Wallet and create an accoun Make sure to securely store your recovery phrase",
        },
        {
            title: "Swap ETH/BNB for $HENZO",
            desc: "After connecting your wallet, enter the amount of ETH or BNB to swap for $HENZO. Confirm the transaction, and your $HENZO tokens will be sent to your wallet.",
        },
        {
            title: "Purchase ETH or BNB",
            desc: "Henzo runs on Ethereum and Binance Smart Chain, so you'll need ETH or BNB. Buy them from exchanges like Coinbase, Binance, or KuCoin, then transfer to your wallet.",
        },
        {
            title: "HODL & Enjoy the Journey",
            desc: "Congratulations! You now own $HENZO. Hold your tokens and stay tuned for upcoming updates, giveaways, and more from the Henzo community!",
        },
    ]
    return (
        <div className='howto'>
            <Container>
                <Row>
                    <Col xs={12} className='text-center'>
                        <CommonTitle title={"how to buy"} />
                    </Col>
                </Row>
                <div className="howtobg">
                    <img className='content-bg' src={howtobg} alt="" />
                    <img className='howto-bottom-bg' src={howtobtmbg} alt="" />
                </div>
                <Row className='howto-content'>
                    {howtoServices.map((item, index) => (
                        <Col md={6} key={index} className='mb-8 lg:mb-16'>
                            <div className="single-service text-center relative">
                                <img className='absolute w-full h-full z-[-1]' src={howtoitembg} alt="" />
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
