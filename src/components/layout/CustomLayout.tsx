import { Layout } from 'antd';
import React, { ReactNode } from 'react';
import CustomHeader from './CustomHeader';

const CustomLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Layout className='h-screen overflow-x-hidden'>
            <CustomHeader />
            {children}
        </Layout>
    );
};

export default CustomLayout;
