import { constants } from '../../../data/constants';
import { useAppDispatch } from '../../../hooks/toolkitHooks';
import { setSkinTone } from '../../../redux/slices/outfitSlice';

const ToneSelectore = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <h3 className='text-2xl mb-2 mt-6'>Select Skin Tone</h3>
            <div className='flex'>
                {constants.skinTones.map((tone) => (
                    <div
                        key={tone.id}
                        className={`lg:w-14 w-10 lg:h-14 h-10 cursor-pointer`}
                        style={{ backgroundColor: tone.color }}
                        onClick={() => dispatch(setSkinTone(tone.color))}
                    ></div>
                ))}
            </div>
        </>
    );
};

export default ToneSelectore;
