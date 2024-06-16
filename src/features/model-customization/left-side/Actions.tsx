import { Button } from 'antd';
import React from 'react';
import useDownloadSection from '../../../hooks/useDownloadSection';

const Actions = () => {
    const downloadSectionAsPNG = useDownloadSection();

    return (
        <>
            <h3 className='text-2xl mb-2'>Actions</h3>
            <Button
                className='w-full block my-2'
                type='default'
                onClick={() => {
                    downloadSectionAsPNG(
                        'model-container',
                        `palettier-model-${Math.floor(Math.random() * 100)}`
                    );
                }}
            >
                Download
            </Button>
            <Button
                className='w-full block my-2'
                type='primary'
                danger
                onClick={() => location.reload()}
            >
                Reset
            </Button>
        </>
    );
};

export default Actions;
