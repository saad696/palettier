import { Button, Empty, Select } from 'antd';
import React from 'react';
import { helpers } from '../../../utils/helpers/helpers';
import { useDispatch } from 'react-redux';
import {
    setSelectedOutfit,
    setSelectedOutfitData,
    setSelectedOutfitSubType,
} from '../../../redux/slices/outfitSlice';
import { useAppSelector } from '../../../hooks/toolkitHooks';
import { RootState } from '../../../redux/store';

const OutfitSelector = () => {
    const dispatch = useDispatch();

    const selectedOutfitData = useAppSelector(
        (state: RootState) => state.outfit.outfitData
    );

    const onSelectOutfit = (value: string) => {
        const outfitData = helpers.getOutfitSet(value);
        dispatch(setSelectedOutfit(value));
        dispatch(setSelectedOutfitData(outfitData));
    };

    const filterOption = (
        input: string,
        option?: { label: string; value: string }
    ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <>
            <Select
                showSearch
                className='w-[300px]  text-gray-600 mb-6'
                placeholder='Search here...'
                optionFilterProp='children'
                onChange={onSelectOutfit}
                filterOption={filterOption}
                options={helpers.getOutfits().map((type) => ({
                    value: type.title.split(' ').join('_').toLowerCase(),
                    label: type.title,
                }))}
            />

            {selectedOutfitData && selectedOutfitData.length ? (
                <>
                    <h3 className='text-2xl mb-2'>Select type to customize</h3>
                    {selectedOutfitData.map((outfit) => (
                        <Button
                            key={outfit.title}
                            className='w-full block mb-2'
                            type='primary'
                            onClick={() =>
                                dispatch(setSelectedOutfitSubType(outfit.title))
                            }
                        >
                            {outfit.title}
                        </Button>
                    ))}
                </>
            ) : (
                <Empty />
            )}
        </>
    );
};

export default OutfitSelector;
