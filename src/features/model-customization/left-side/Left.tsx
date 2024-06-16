import { Card } from 'antd';
import { OutfitSelector, Actions, ToneSelectore } from '../../../';

const Left = () => {
    return (
        <Card title={<h1 className='text-4xl mb-6'>Select Outfit</h1>} className='p-4 mt-8'>
            <OutfitSelector />
            <div className='mt-10 lg:mt-40 '>
                <Actions />
                <ToneSelectore />
            </div>
        </Card>
    );
};

export default Left;
