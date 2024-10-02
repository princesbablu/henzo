import React from 'react';
import Container from './Grid/Container';
import Row from './Grid/Row';
import Col from './Grid/Col';
import CommonTitle from './CommonTitle';
import tpdonok from "../assets/img/roadmap-tp-donok.png";
import brshap from "../assets/img/roadmap-br-shap.png";
import frame from "../assets/img/roadmap-list-frame.png";

export default function Roadmap() {
    const roadmapServices = [
        {
            title: "Phase 1",
            list: ["Fair Token Launch", "Social Media Campaigns", "Airdrops and Giveaways"]
        },
        {
            title: "Phase 2",
            list: ["Listings on Top Exchanges", "Influencer Collaborations"]
        },
        {
            title: "Phase 3",
            list: ["Release of Exclusive NFTs", "Branded Merchandise"]
        },
        {
            title: "Phase 4",
            list: ["Major Partnerships", "DAO Implementation"]
        }
    ];

    return (
        <div className='roadmap'>
            <Container>
                <div className="roadmap-donok">
                    <img src={tpdonok} className='max-w-64 xl:max-w-[360px] 2xl:max-w-[460px]' alt="" />
                </div>
                <Row className='justify-content-center'>
                    <Col xs={12} className='text-center'>
                        <CommonTitle title={"Roadmap"} />
                    </Col>
                </Row>
                <Row className='justify-center'>
                    {roadmapServices.map((item, index) => (
                        <Col md={6} key={index} className='mb-6'>
                            <div className="single-item">
                                <img className='frame' src={frame} alt="" />
                                <h3>{item.title}</h3>
                                <ul>
                                    {item.list.map((service, idx) => (
                                        <li key={idx}>{service}</li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            <img className='absolute shape-2 bottom-[-50px] lg:bottom-[-100px] right-0 max-w-44 md:max-w-64 lg:max-w-[260px] xl:max-w-[400px] z-[2]' src={brshap} alt="" />
        </div >
    );
}
