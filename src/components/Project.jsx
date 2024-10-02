import React from 'react'
import { Container, Row, Col } from './Grid'
import Dex from '../assets/img/dex.png'
import nft from '../assets/img/nft.png'
import henzo from '../assets/img/henzo.png'
import btmshap from "../assets/img/roadmap-btm-separator.png";

export default function Project() {
    const ProjectItem = [
        {
            head: 'Coming soon',
            img: Dex,
            titile: 'DEX marketplace for cloud computing resources',
            des: 'Earn up to 160% in $HeNZO and $SOL tokens trading your idle computer resource.',
            url: '#'
        },
        {
            head: 'Coming soon',
            img: nft,
            titile: 'NFT Marketplace Integration',
            des: 'Create NFTs, build your community and create tokens. Earn and trade commission free.',
            url: '#'
        },
        {
            head: 'Coming soon',
            img: henzo,
            titile: '$Henzo staking',
            des: 'Earn up to 400$, when you stake your $Henzo tokens, enjoy new and unique features coming to the $AUVA staking platform',
            url: '#'
        },
    ]
    return (
        <div className="project pt-24 md:pt-52 relative pb-6 md:pb-20">
            <img className=' absolute top-0 left-0 lg:w-full h-12 md:h-40 w-[200%]' src={btmshap} alt="" />
            <div className="project">
                <Container>
                    <div className="project-box">
                        <h2 className='text-[#2B2B2B] text-center lg:tracking-[4.8px] font-normal'>Upcoming projects</h2>
                        <Row className='project-row'>
                            {ProjectItem.map((item, index) => (
                                <Col xs={12} md={6} lg={6} xl={4} key={index}>
                                    <div className="project-item bg-[url('../img/project-item-bg.png')] bg-no-repeat">
                                        <h4 className='text-right'>{item.head}</h4>
                                        <img src={item.img} alt="" />
                                        <div className="item-content">
                                            <h3>{item.titile}</h3>
                                            <p>{item.des}</p>
                                            <a href={item.url} target='_blank'>Learn more</a>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    )
}
