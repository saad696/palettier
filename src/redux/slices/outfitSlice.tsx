import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { helpers } from '../../utils/helpers/helpers';
import { OutfitSetData, Tone } from '../../interface/interface';
import { skinTone } from '../../data';
import { constants } from '../../data/constants';
import {
    skirtBase,
    skirtHighlight,
    skirtShadow,
    topBase,
    topHighlight,
    topShadow,
} from '../../assets/clothes-images/female';

// Define a type for the slice state
interface OutfitSliceState {
    outfitType: string;
    outfitSubType: string;
    outfitData: OutfitSetData[] | [];
    skinTone: Tone;
    garmentsTone: Tone;
    outfit: {
        top: Tone;
        bottom: Tone;
        over: Tone;
    };
}

const initialState: OutfitSliceState = {
    outfitType: helpers.getOutfits()[0].title,
    outfitSubType: '',
    outfitData: [],
    skinTone: skinTone.data.FAD5B6,
    garmentsTone: constants.defaultGarmentsColor,
    outfit: {
        top: {
            base: topBase,
            highlight: topHighlight,
            darken: topShadow,
        },
        bottom: {
            base: skirtBase,
            highlight: skirtHighlight,
            darken: skirtShadow,
        },
        over: {
            base: '',
            highlight: '',
            darken: '',
        },
    },
};

export const outfitSlice = createSlice({
    name: 'outfit',
    initialState,
    reducers: {
        setSelectedOutfit: (state, action: PayloadAction<string>) => {
            state.outfitType = action.payload;
        },
        setSelectedOutfitSubType: (state, action: PayloadAction<string>) => {
            console.log(action.payload);
            
            state.outfitSubType = action.payload.toLowerCase();
        },
        setSelectedOutfitData: (
            state,
            action: PayloadAction<OutfitSetData[]>
        ) => {
            state.outfitData = action.payload;
        },
        setSkinTone: (state, action: PayloadAction<string>) => {
            switch (action.payload) {
                case '#FAD5B6':
                    state.skinTone = skinTone.data.FAD5B6;
                    break;
                case '#FAC7AA':
                    state.skinTone = skinTone.data.FAC7AA;
                    break;
                case '#D6A183':
                    state.skinTone = skinTone.data.D6A183;
                    break;
                case '#BF8E6F':
                    state.skinTone = skinTone.data.BF8E6F;
                    break;
                case '#9A6948':
                    state.skinTone = skinTone.data['9A6948'];
                    break;
            }
        },
        setOutfit: (
            state,
            action: PayloadAction<{ layer: string; images: Tone }>
        ) => {
            console.log(action.payload);
            
            if (action.payload.layer === 'top') {
                state.outfit.top = action.payload.images;
            } else if (action.payload.layer === 'bottom') {
                state.outfit.bottom = action.payload.images;
            } else {
                state.outfit.over = action.payload.images;
            }
        },
    },
});

export const {
    setSelectedOutfit,
    setSelectedOutfitData,
    setSkinTone,
    setSelectedOutfitSubType,
    setOutfit
} = outfitSlice.actions;

export default outfitSlice.reducer;
