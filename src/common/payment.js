import React from 'react';
import { WebView } from 'react-native-webview';

import Loader from './loader';

const Payment = ({
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
      style={style.flex}
      startInLoadingState
      originWhitelist={['*']}
      swipeDirection={['up', 'down']}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      renderLoading={!!LoadingComponent ? LoadingComponent : LoadIndicatorView}
    />
  )
}


export default Payment;

const style = {
  flex: {
    flex: 1
  }
}
