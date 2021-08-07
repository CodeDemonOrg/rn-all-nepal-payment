import {StatusBarHeight} from './helper';

export const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  safeAreaView: {
    flex: 1
  },
  webView: {
    flex: 1
  },
  iconContainer:{
    width:50,
    right:16,
    height:50,
    zIndex:999,
    top:StatusBarHeight,
    position:'absolute',
  },
  icon:{
    width:'100%',
    height:'100%'
  }
}
