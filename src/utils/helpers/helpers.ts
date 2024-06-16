import { clothes, outfitOptions } from '../../data';
import { constants } from '../../data/constants';
import { OutfitSetData, OutfitType } from '../../interface/interface';

export const helpers = {
    getOutfits: (): OutfitType[] => {
        return outfitOptions.data;
    },
    getOutfitSet: (outfitType: string): OutfitSetData[] => {
        const clothesData = clothes.data;

        // @ts-expect-error acessing key as a string from outfit data
        return clothesData[outfitType];
    },
    checkOutfitLayer: (outfitPart: string): string => {
        if (constants.outfitLayers.top.includes(outfitPart)) {
            return 'top';
        } else if (constants.outfitLayers.bottom.includes(outfitPart)) {
            return 'bottom';
        } else {
            return 'over';
        }
    },
};
