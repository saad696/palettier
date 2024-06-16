import { Card, Empty, Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks/toolkitHooks';
import { RootState } from '../../../redux/store';
import { OutfitSetData, OutfitTypeDetails } from '../../../interface/interface';
import { OutfitStyle } from '../../../';

const OptionsBox = () => {
    const [activeTab, setActiveTab] = useState<string>('type');
    const [outfitSubData, setOutfitSubData] = useState<OutfitSetData | null>(
        null
    );
    const [outfitOptions, setOutfitOptions] =
        useState<OutfitTypeDetails | null>(null);

    const { outfitData, outfitSubType } = useAppSelector(
        (state: RootState) => state.outfit
    );

    const onTabsChange = (key: string) => {
        setActiveTab(key);

        switch (key) {
            case 'type':
                setOutfitOptions(
                    outfitData.filter(
                        (x) => x.title.toLowerCase() === outfitSubType
                    )[0]?.type
                );
                break;
            case 'sleeves':
                setOutfitOptions(
                    outfitData.filter(
                        (x) => x.title.toLowerCase() === outfitSubType
                    )[0]?.sleeves
                );
                break;
            case 'neck':
                setOutfitOptions(
                    outfitData.filter(
                        (x) => x.title.toLowerCase() === outfitSubType
                    )[0]?.neck
                );
                break;
        }
    };

    useEffect(() => {
        const data = outfitData.filter(
            (x) => x.title.toLowerCase() === outfitSubType
        );
        setOutfitSubData(data[0]);
        setOutfitOptions(
            outfitData.filter((x) => x.title.toLowerCase() === outfitSubType)[0]
                ?.type
        );
    }, [outfitSubType]);

    return (
        <Card
            title={<h1 className='text-4xl mb-6'>Customize</h1>}
            className='p-4 mt-8'
        >
            {outfitSubData ? (
                <Tabs
                    activeKey={activeTab}
                    items={[
                        {
                            key: 'type',
                            label: 'Type',
                            children: (
                                <OutfitStyle
                                    data={outfitOptions}
                                    outfitName={outfitSubType}
                                />
                            ),
                        },
                        {
                            key: 'neck',
                            label: 'Necklines',
                            children: (
                                <OutfitStyle
                                    data={outfitOptions}
                                    outfitName={outfitSubType}
                                />
                            ),
                        },
                        {
                            key: 'sleeves',
                            label: 'Sleeves',
                            children: (
                                <OutfitStyle
                                    data={outfitOptions}
                                    outfitName={outfitSubType}
                                />
                            ),
                        },
                    ]}
                    onChange={onTabsChange}
                />
            ) : (
                <Empty />
            )}
        </Card>
    );
};

export default OptionsBox;
