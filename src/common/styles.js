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
  wrapper:{
    flex:1
  },
  iconContainer: {
    top: 5,
    right: 0,
    width: 40,
    height: 40,
    zIndex: 999,
    position: 'absolute'
  },
  icon:(dark) =>({
    width: '100%',
    height: '100%',
    resizeMode:'contain',
    tintColor:dark?'#000':'white'
  })
}
