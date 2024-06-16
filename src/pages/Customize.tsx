import { Col, Row } from 'antd';
import { CustomizeCenterSide, CustomizeLeftSide, OptionsBox } from '..';

const Customize = () => {
    return (
        <>
            <Row gutter={[32, 32]}>
                <Col xs={24} md={6}>
                    <CustomizeLeftSide />
                </Col>
                <Col xs={24} md={0}>
                    <OptionsBox />
                </Col>
                <Col xs={24} md={11} className='relative'>
                    <CustomizeCenterSide />
                </Col>
                <Col xs={0} md={7}>
                    <OptionsBox />
                </Col>
            </Row>
        </>
    );
};

export default Customize;
