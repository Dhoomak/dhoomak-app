import { Dimensions } from 'react-native';

const screenSize = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const screenScale = Dimensions.get('window').scale;
  const fontScale = Dimensions.get('window').fontScale;

  return {
    screenWidth,
    screenHeight,
    screenScale,
    fontScale,
  };
};

export const scale=(uiElementPx)=>{
        const width = Dimensions.get('window').width;
        const height = Dimensions.get('window').height;
      const deviceWidthDp = width > height ? height : width;
      const uiWidthPx = 375;
      const rate = 1;
      return ((uiElementPx * deviceWidthDp) / uiWidthPx) * rate;
}


export default screenSize;

