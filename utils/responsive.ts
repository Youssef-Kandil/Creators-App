import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// التصميم المرجعي (مثلاً: iPhone 11)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const ScreenDimensions = {SCREEN_WIDTH,SCREEN_HEIGHT}
// width
export const scale_width = (size:number) => (SCREEN_WIDTH / guidelineBaseWidth) * size;
// hights
export const verticalScale_hights = (size:number) => (SCREEN_HEIGHT / guidelineBaseHeight) * size;
// Font
export const moderateScale_Font = (size:number, factor = 0.5) => size + (scale_width(size) - size) * factor;
