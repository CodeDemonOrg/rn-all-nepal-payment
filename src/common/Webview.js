import React from 'react';
import { WebView } from 'react-native-webview';

import Loader from './loader';
import { styles } from 'common/styles';

const Webview = ({
  source,
  LoadingComponent,
  ...props
}) => {

  const LoadIndicatorView = () =>
    <Loader />

  return (
    <WebView
      {...props}
      source={source}
      domStorageEnabled
      javaScriptEnabled
      startInLoadingState
      style={style.webView}
      originWhitelist={['*']}
      swipeDirection={['up', 'down']}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      renderLoading={!!LoadingComponent ? LoadingComponent : LoadIndicatorView}
    />
  )
}


export default Webview;
