import React from 'react';

import femaleModelBase from '../../../assets/model-images/female/model_base_f.png';
import femaleModelShadow from '../../../assets/model-images/female/model_shadow_f.png';
import femaleModelHighlight from '../../../assets/model-images/female/model_highlight_f.png';
import femaleModelHair from '../../../assets/model-images/female/hairstyle_f.png';
import femaleModelFace from '../../../assets/model-images/female/face_f.png';
import femaleModelJwell from '../../../assets/model-images/female/jewellery_f.png';
import femaleModelFootwear from '../../../assets/model-images/female/footwear_f.png';

import { useAppSelector } from '../../../hooks/toolkitHooks';
import { RootState } from '../../../redux/store';

const BaseLayer = () => {
    const skinTone = useAppSelector(
        (state: RootState) => state.outfit.skinTone
    );

    return (
        <div className='relative'>
            <img
                className='absolute left-1/2 transform -translate-x-1/2 object-contain'
                src={femaleModelBase}
                alt='model-base'
                width={550}
                style={{ filter: skinTone.base }}
            />
            <img
                className='absolute  left-1/2 transform -translate-x-1/2 object-contain'
                src={femaleModelHighlight}
                alt='model-highlight'
                width={550}
                style={{ filter: skinTone.highlight }}
            />
            <img
                className='absolute left-1/2 transform -translate-x-1/2 object-contain'
                src={femaleModelShadow}
                alt='model-shadow'
                width={550}
                style={{ filter: skinTone.darken }}
            />
            <img
                className='absolute left-1/2 transform -translate-x-1/2 object-contain'
                src={femaleModelHair}
                alt='model-shadow'
                width={550}
            />
            <img
                className='absolute left-1/2 transform -translate-x-1/2 object-contain'
                src={femaleModelFace}
                alt='model-shadow'
                width={550}
            />
            <img
                className='absolute left-1/2 transform -translate-x-1/2 object-contain'
                src={femaleModelJwell}
                alt='model-shadow'
                width={550}
            />
            <img
                className='absolute left-1/2 transform -translate-x-1/2 object-contain'
                src={femaleModelFootwear}
                alt='model-shadow'
                width={550}
            />
        </div>
    );
};

const ClothesLayer: React.FC<{
    base: string;
    highlight: string;
    shadow: string;
}> = ({ base, highlight, shadow }) => {
    const outfitTone = useAppSelector(
        (state: RootState) => state.outfit.garmentsTone
    );

    return (
        <>
            <div className='relative'>
                <img
                    className='absolute left-1/2 transform -translate-x-1/2 object-contain'
                    src={base}
                    alt='model-outfit-base'
                    width={550}
                    style={{ filter: outfitTone.base }}
                />
                <img
                    className='absolute  left-1/2 transform -translate-x-1/2 object-contain'
                    src={highlight}
                    alt='model-outfit-highlight'
                    width={550}
                    style={{ filter: outfitTone.highlight }}
                />
                <img
                    className='absolute left-1/2 transform -translate-x-1/2 object-contain'
                    src={shadow}
                    alt='model-outfit-shadow'
                    width={550}
                    style={{ filter: outfitTone.darken }}
                />
            </div>
        </>
    );
};

const Model = () => {
    const outfit = useAppSelector((state: RootState) => state.outfit.outfit);
console.log(outfit);

    return (
        <div id='model-container'>
            <BaseLayer />
            <div className='clothes-container '>
                <ClothesLayer
                    base={outfit.top.base}
                    highlight={outfit.top.highlight}
                    shadow={outfit.top.darken}
                />
                <ClothesLayer
                    base={outfit.bottom.base}
                    highlight={outfit.bottom.highlight}
                    shadow={outfit.bottom.darken}
                />
                {outfit.over.base && (
                    <ClothesLayer
                        base={outfit.over.base}
                        highlight={outfit.over.highlight}
                        shadow={outfit.over.darken}
                    />
                )}
            </div>
        </div>
    );
};

export default Model;
