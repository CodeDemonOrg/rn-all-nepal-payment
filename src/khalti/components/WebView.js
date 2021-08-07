import React from 'react';

import WebView from './../../common/Webview';
import { getKhaltiHTML } from './htmlGenerator';

const KhaltiWebView = ({
  amount,
  callback,
  publicKey,
  productUrl,
  productName,
  productIdentity,
  paymentPreference,
}) => (
  <WebView
    onMessage={callback}
    source={{
      html: getKhaltiHTML({
        amount,
        publicKey,
        productUrl,
        productName,
        productIdentity,
        paymentPreference,
      })
    }}
  />
);

export default KhaltiWebView;
