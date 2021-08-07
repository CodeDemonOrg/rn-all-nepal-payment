import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Modal,
  SafeAreaView
} from 'react-native';

import { styles } from './../common/styles';
import KhaltiWebView from './components/WebView';

export const KhatiSdk = ({
  amount,
  publicKey,
  isVisible,
  productUrl,
  productName,
  productIdentity,
  onPaymentComplete,
  paymentPreference,
}) => (
  <Modal
    visible={isVisible}
    animationType={'slide'}
  >
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <KhaltiWebView
          amount={amount}
          publicKey={publicKey}
          productUrl={productUrl}
          productName={productName}
          callback={onPaymentComplete}
          productIdentity={productIdentity}
          paymentPreference={paymentPreference}
        />
      </SafeAreaView>
    </View>
  </Modal>
);

KhatiSdk.propTypes = {
  amount: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
  publicKey: PropTypes.string.isRequired,
  productUrl: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productIdentity: PropTypes.string.isRequired,
  onPaymentComplete: PropTypes.func.isRequired,
  paymentPreference: PropTypes.array.isRequired,
};
