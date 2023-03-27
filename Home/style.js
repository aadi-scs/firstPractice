import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  main: {
    backgroundColor: '#E5E5E5',
  },
  main1: {
    flexDirection: 'row',
  },
  svg1: {
    marginTop: moderateScale(12, 0.1),
    paddingLeft: moderateScale(32, 0.1),
  },
  svg2: {
    marginHorizontal: moderateScale(10, 0.1),
    marginTop: moderateScale(23, 0.1),
  },
  sv: {
    opacity: 0.8,
  },
  image: {
    height: verticalScale(200),
    resizeMode: 'cover',
  },
  image1: {
    height: verticalScale(200),
    resizeMode: 'cover',
    opacity: 0.35,
    position: 'absolute',
  },
  view: {
    backgroundColor: '#FF9900',
    marginLeft: moderateScale(165, 0.1),
    marginRight: moderateScale(100, 0.1),
  },
  text: {
    flex: 1,
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    paddingHorizontal: moderateScale(5, 0.1),
    paddingTop: moderateScale(2, 0.1),
  },
  text1: {
    color: '#414141',
    fontFamily: 'Poppins-Regular',
    fontSize: 6,
    marginLeft: moderateScale(165, 0.1),
  },
  view1: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: moderateScale(0, 0.1),
    alignSelf: 'center',
  },
  sv1: {marginBottom: 0},
  view2: {
    flexDirection: 'column',
    marginLeft: moderateScale(12, 0.1),
    height: verticalScale(20),
    width: scale(120),
  },
  view3: {
    backgroundColor: 'white',
    paddingLeft: moderateScale(5, 0.1),
    marginRight: moderateScale(2.5, 0.1),
  },
  view4: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(5, 0.1),
  },
  svg3: {marginLeft: 'auto', marginRight: moderateScale(5, 0.1)},
  view5: {
    flexDirection: 'column',
    marginLeft: moderateScale(8, 0.1),
    height: verticalScale(50),
    width: scale(120),
  },
  view6: {
    backgroundColor: 'white',
    paddingLeft: moderateScale(5, 0.1),
    marginRight: moderateScale(2.5, 0.1),
  },
  view7: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(5, 0.1),
  },
  item3: {width: scale(117.5), height: verticalScale(87)},
  srcContainer: {
    flexDirection: 'row',
    marginLeft: moderateScale(20, 0.1),
    marginVertical: moderateScale(20, 0.1),
    backgroundColor: '#EEEEEE',
    width: scale(280),
  },
  inp: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    padding: moderateScale(5, 0.1),
    width: scale(270),
  },
  vw: {
    position: 'absolute',
  },
  txt: {
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: moderateScale(165, 0.1),
    marginTop: moderateScale(60, 0.1),
    marginRight: moderateScale(30, 0.1),
  },
  disc: {
    flexDirection: 'row',
    marginLeft: moderateScale(9, 0.1),
    marginVertical: moderateScale(12, 0.1),
    alignItems: 'center',
  },
  discTxt: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    fontWeight: '600',
    color: 'black',
  },
  timer: {
    fontFamily: 'Poppins-Bold',
    fontSize: 10,
    marginLeft: moderateScale(5, 0.1),
    paddingHorizontal: moderateScale(4, 0.1),
    paddingTop: moderateScale(2, 0.1),
    borderRadius: 5,
    color: 'white',
    backgroundColor: '#6C28FE',
  },
  ind: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#6C28FE',
    marginHorizontal: moderateScale(3, 0.1),
    paddingTop: moderateScale(2, 0.1),
  },
  timer1: {
    fontFamily: 'Poppins-Bold',
    fontSize: 10,
    // marginLeft: moderateScale(5, 0.1),
    paddingHorizontal: moderateScale(4, 0.1),
    paddingTop: moderateScale(2, 0.1),
    borderRadius: 5,
    color: 'white',
    backgroundColor: '#6C28FE',
  },
  sa: {
    color: '#6C28FE',
    fontFamily: 'Poppins-Medium',
    marginLeft: 'auto',
    fontSize: 14,
    marginRight: moderateScale(5, 0.1),
    marginTop: moderateScale(7, 0.1),
  },
  nm: {
    fontFamily: 'Poppins-Medium',
    fontSize: 11,
    color: '#161616',
    marginBottom: moderateScale(-4, 0.1),
  },
  nm1: {
    fontFamily: 'Poppins=Medium',
    fontSize: 10,
    color: '#A4A4A4',
  },
  pr: {
    fontFamily: 'Poppins-Medium',
    color: '#6C28FE',
    fontSize: 11,
    marginTop: moderateScale(2, 0.1),
  },
  pr1: {
    color: '#777777',
    fontFamily: 'Poppins-Medium',
    fontSize: 8,
    marginTop: moderateScale(-2, 0.1),
    textDecorationLine: 'line-through',
  },
  up: {
    marginVertical: moderateScale(10, 0.1),
    marginTop: moderateScale(20, 0.1),
  },
  up1: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    fontWeight: '600',
    color: 'black',
    marginLeft: moderateScale(9, 0.1),
  },
  up3: {
    fontFamily: 'Poppins-Medium',
    marginLeft: 'auto',
    marginRight: moderateScale(5, 0.1),
    fontSize: 11,
    color: '#6C28FE',
  },
});