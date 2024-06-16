import React, { useState } from 'react';
import {
    OutfitOption,
    OutfitTypeDetails,
    Tone,
} from '../../../interface/interface';
import { Col, Empty, Row } from 'antd';
import { measurementIcon, outfitIcon } from '../../../assets/icons';
import { useAppDispatch } from '../../../hooks/toolkitHooks';
import { helpers } from '../../../utils/helpers/helpers';
import { setOutfit } from '../../../redux/slices/outfitSlice';

interface OutfitStyleProps {
    data: OutfitTypeDetails | null;
    outfitName: string
}

const OutfitStyle: React.FC<OutfitStyleProps> = ({ data, outfitName }) => {
    const dispatch = useAppDispatch();

    const [selectedLength, setSelectedLength] = useState<OutfitOption | null>(
        null
    );

    const onSelect = (value: string) => {
        const lengths = data?.options[0].options.filter(
            (x) => x.title === value
        )[0];
        setSelectedLength(lengths ? lengths : null);
    };

    const onLengthSelected = (images: Tone) => {
        const layer = helpers.checkOutfitLayer(outfitName);
        console.log(outfitName);
        
        dispatch(setOutfit({ layer, images }));
    };

    return (
        <>
            <Row>
                <Col xs={4}>
                    {selectedLength &&
                        selectedLength.length.map((outfitLength) => (
                            <div
                                className='cursor-pointer mb-4'
                                onClick={() => {
                                    onLengthSelected(outfitLength.image.front);
                                }}
                            >
                                <img
                                    src={measurementIcon}
                                    alt={outfitLength.title}
                                    width={40}
                                />
                                <p className='text-[0.7rem] text-left'>
                                    {outfitLength.title}
                                </p>
                            </div>
                        ))}
                </Col>
                <Col xs={20} className='bg-gray-100 rounded p-2'>
                    <Row gutter={[32, 32]} justify={'center'}>
                        {data && data?.options?.length ? (
                            data?.options[0]?.options.map((option) => (
                                <Col
                                    xs={12}
                                    md={8}
                                    className='cursor-pointer hover:scale-105 transition-all'
                                    onClick={() => {
                                        onSelect(option.title);
                                    }}
                                >
                                    <img
                                        src={outfitIcon}
                                        alt={option.title}
                                        width={40}
                                        className='mx-auto'
                                    />
                                    <p className='text-[0.7rem] text-center'>
                                        {option.title}
                                    </p>
                                </Col>
                            ))
                        ) : (
                            <Empty />
                        )}
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default OutfitStyle;
