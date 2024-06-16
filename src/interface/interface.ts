export type Gender = 'male' | 'female';

export interface Tone {
    base: string;
    darken: string;
    highlight: string;
}

export interface OutfitType {
    title: string;
}

export interface OutfitSet {
    [key: string]: OutfitSetData;
}

export interface OutfitSetData {
    title: string;
    zindex: number;
    type: OutfitTypeDetails;
    sleeves: OutfitTypeDetails;
    neck: OutfitTypeDetails;
}

export interface OutfitTypeDetails {
    title: string;
    options: OutfitTypeOption[];
}

interface OutfitTypeOption {
    title: string;
    options: OutfitOption[];
}

export interface OutfitOption {
    title: string;
    length: OutfitOptionsLength[];
}

interface OutfitOptionsLength {
    title: string;
    image: OutfitImage;
}

interface OutfitImage {
    front: Tone;
    back: Tone;
}
