import { Button, Card, Form, FormProps, InputNumber, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { localStorageService } from '../../utils/services/localStorageService';
import { constants } from '../../data/constants';
import { useAppDispatch } from '../../hooks/toolkitHooks';
import { userLoggedIn } from '../../redux/slices/globalSlice';

const { Option } = Select;

type FieldType = {
    mobile?: string;
};

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const onSubmit: FormProps<FieldType>['onFinish'] = (values) => {
        if (values.mobile) {
            localStorageService.setItem(
                constants.localStorageKeys.isLoggedIn,
                true
            );
            navigate('/');
            dispatch(userLoggedIn())
        }
    };

    return (
        <div className='flex justify-center items-center h-full'>
            <div>
                <h1 className='text-4xl uppercase font-semibold mb-8'>
                    Login to Continue
                </h1>
                <Card>
                    <Form
                        layout='vertical'
                        name='login'
                        onFinish={onSubmit}
                        autoComplete='off'
                    >
                        <Form.Item<FieldType>
                            label='Enter Mobile Number'
                            name='mobile'
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Mobile number is required to login',
                                },
                                {
                                    pattern: /^\d{10}$/,
                                    message: 'Enter a valid mobile number',
                                },
                            ]}
                        >
                            <InputNumber
                                className='w-full'
                                addonBefore={
                                    <Select defaultValue='91'>
                                        <Option value='91'>+91</Option>
                                        <Option value='44'>+44</Option>
                                    </Select>
                                }
                            />
                        </Form.Item>
                        <Button
                            type='primary'
                            htmlType='submit'
                            className='w-full'
                        >
                            Login
                        </Button>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default Login;
