// useDownloadSection.ts
import { useCallback } from 'react';
import domToImage from 'dom-to-image';

const useDownloadSection = () => {
  const downloadSectionAsPNG = useCallback((elementId: string, fileName: string = 'section') => {
    const element = document.getElementById(elementId);
    if (element) {
      domToImage.toPng(element)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = `${fileName}.png`;
          link.click();
        })
        .catch((error) => {
          console.error('Could not download the image', error);
        });
    }
  }, []);

  return downloadSectionAsPNG;
};

export default useDownloadSection;
