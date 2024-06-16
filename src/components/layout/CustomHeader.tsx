import { Button } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { localStorageService } from '../../utils/services/localStorageService';
import { constants } from '../../data/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/toolkitHooks';
import { userLoggedIn } from '../../redux/slices/globalSlice';
import { RootState } from '../../redux/store';

const CustomHeader = () => {
    const dispatch = useAppDispatch();
    const isUserLoggedIn = useAppSelector(
        (state: RootState) => state.global.isLogin
    );

    const logout = () => {
        localStorageService.setItem<boolean>(
            constants.localStorageKeys.isLoggedIn,
            false
        );
        window.location.replace(`/login`);
        dispatch(userLoggedIn());
    };

    return (
        <Header className='bg-white flex'>
            <div className='w-full flex justify-between px-4'>
                <img
                    src='https://pves-gamma.vercel.app/static/media/palettier_logoNew.bfceaa37af3912ada4026ec26ca871b3.svg'
                    alt='logo'
                    width={40}
                />

                {isUserLoggedIn && (
                    <div className='space-x-4'>
                        <Button size='small' type='text'>
                            Home
                        </Button>
                        <Button size='small' type='text'>
                            Customize
                        </Button>
                        <Button
                            size='small'
                            type='primary'
                            danger
                            onClick={logout}
                        >
                            Logout
                        </Button>
                    </div>
                )}
            </div>
        </Header>
    );
};

export default CustomHeader;
