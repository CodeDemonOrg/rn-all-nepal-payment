import React from 'react';
import PropTypes from 'prop-types';

import KhaltiWebView from './components/WebView';

const KhatiSdk = ({
  amount,
  publicKey,
  productUrl,
  productName,
  productIdentity,
  onPaymentComplete,
  paymentPreference,
}) => (
  <KhaltiWebView
    amount={amount}
    publicKey={publicKey}
    productUrl={productUrl}
    productName={productName}
    callback={onPaymentComplete}
    productIdentity={productIdentity}
    paymentPreference={paymentPreference}
  />
);

KhatiSdk.propTypes = {
  amount: PropTypes.number.isRequired,
  publicKey: PropTypes.string.isRequired,
  productUrl: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productIdentity: PropTypes.string.isRequired,
  onPaymentComplete: PropTypes.func.isRequired,
  paymentPreference: PropTypes.string.isRequired,
};

export default KhatiSdk;
