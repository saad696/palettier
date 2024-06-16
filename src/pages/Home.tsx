import { Button, Select } from 'antd';
import { useState } from 'react';
import { useAppDispatch } from '../hooks/toolkitHooks';
import { chooseGender } from '../redux/slices/globalSlice';
import { useNavigate } from 'react-router-dom';
import { localStorageService } from '../utils/services/localStorageService';
import { constants } from '../data/constants';
import { Gender } from '../interface/interface';

const Home = () => {
    const [gender, setGender] = useState<Gender>('female');

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onGenderChange = (value: Gender) => {
        setGender(value);
    };

    const onStartCustomize = () => {
        localStorageService.setItem<string>(
            constants.localStorageKeys.gender,
            gender
        );
        dispatch(chooseGender(gender));
        navigate('/customize');
    };

    return (
        <div className='flex justify-center items-center h-full'>
            <div>
                <div>
                    <img
                        src='https://pves-gamma.vercel.app/static/media/palettier_logoNew.bfceaa37af3912ada4026ec26ca871b3.svg'
                        alt='logo'
                        width={100}
                        className='mx-auto'
                    />
                    <h1 className='text-4xl lg:text-6xl font-semibold mt-4'>
                        Welcome to Palettier
                    </h1>
                </div>

                <div className='flex-row text-center my-6 space-y-2'>
                    <label className='block font-semibold text-gray-600'>
                        Select model gender
                    </label>
                    <Select
                        className='w-[300px] text-center text-gray-600'
                        defaultValue={'female'}
                        optionFilterProp='children'
                        onChange={onGenderChange}
                        options={[
                            {
                                value: 'male',
                                label: 'Male',
                            },
                            {
                                value: 'female',
                                label: 'Female',
                            },
                        ]}
                    />
                    <Button
                        className='block mx-auto w-[300px]'
                        type='primary'
                        onClick={onStartCustomize}
                    >
                        Start Customizing
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Home;
