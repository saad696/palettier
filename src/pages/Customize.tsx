import { Col, Row } from 'antd';
import { CustomizeCenterSide, CustomizeLeftSide, OptionsBox } from '..';

const Customize = () => {
    return (
        <>
            <Row gutter={[32, 32]}>
                <Col xs={24} md={6}>
                    <CustomizeLeftSide />
                </Col>
                <Col xs={24} md={11}>
                    <CustomizeCenterSide />
                </Col>
                <Col xs={24} md={7}>
                    <OptionsBox />
                </Col>
            </Row>
        </>
    );
};

export default Customize;
