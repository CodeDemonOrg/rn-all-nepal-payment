import React from 'react';
import { WebView } from 'react-native-webview';

import { styles } from 'common/styles';

const Webview = ({
  source,
  LoadingComponent,
  ...props
}) => (
    <WebView
      {...props}
      source={source}
      domStorageEnabled
      javaScriptEnabled
      startInLoadingState
      style={styles.webView}
      originWhitelist={['*']}
      swipeDirection={['up', 'down']}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  )

export default Webview;
