import React from 'react';
import { WebView } from 'react-native-webview';

import Loader from './loader';

const Payment = ({
  source,
  LoadingComponent,
  onNavigationStateChange
}) => {

  const LoadIndicatorView = () =>
    <Loader />

  return (
    <WebView
      source={source}
      domStorageEnabled
      javaScriptEnabled
      style={style.flex}
      startInLoadingState
      originWhitelist={['*']}
      swipeDirection={['up', 'down']}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      onNavigationStateChange={onNavigationStateChange}
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
