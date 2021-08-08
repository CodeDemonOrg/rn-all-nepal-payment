import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Modal,
  SafeAreaView
} from 'react-native';

import { styles } from './../common/styles';
import CloseIcon from './../common/CloseIcon';
import ConnectIpsPayment from './../common/Webview';
import { sourceGenerator } from './helpers/htmlGenerator';

export const CipsSdk = props => {
  const [url, setUrl] = React.useState('');
  const {
    appId,
    txnId,
    refId,
    token,
    txnAmt,
    baseUrl,
    txnDate,
    appName,
    remarks,
    currency,
    isVisible,
    failureURL,
    successURL,
    merchantId,
    particulars,
    onPaymentComplete
  } = props;

  React.useEffect(() => {
    _handlePaymetProcess();
    return
  }, [url]);

  const _handlePaymetProcess = () => {
    try {
      if (url.startsWith(successURL)) {

        const splits = url.split('?');
        const ref = splits[splits.length - 1].split('=');
        let data = { token: ref[1] };
        return onPaymentComplete(data);

      } else if (url.startsWith(failureURL)) {
        return onPaymentComplete({
          message: `Sorry, your payment process could not be completed`
        });

      }

    } catch (err) {
      // console.log({err})
      return onPaymentComplete({
        message: `Sorry, your payment process could not be completed`
      });
    }
  }

  const _onNavigationStateChange = (state) =>
    setUrl(state.url)


  const _onClose = () =>
    onPaymentComplete({
      message: `Payment process interrupted`
    });

  return (
    <Modal
      visible={isVisible}
      animationType={'slide'}
    >
      <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.wrapper}>
            <CloseIcon
              dark
              onClose={_onClose}
            />
            <ConnectIpsPayment
              source={{
                html: sourceGenerator({
                  appId,
                  txnId,
                  refId,
                  token,
                  txnAmt,
                  baseUrl,
                  txnDate,
                  appName,
                  remarks,
                  currency,
                  merchantId,
                  particulars
                })
              }}
              onNavigationStateChange={_onNavigationStateChange}
            />
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
}

CipsSdk.propTypes = {
  appId: PropTypes.string.isRequired,
  txnId: PropTypes.string.isRequired,
  refId: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  txnAmt: PropTypes.string.isRequired,
  baseUrl: PropTypes.string.isRequired,
  txnDate: PropTypes.string.isRequired,
  appName: PropTypes.string.isRequired,
  remarks: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  currency: PropTypes.string.isRequired,
  failureURL: PropTypes.string.isRequired,
  successURL: PropTypes.string.isRequired,
  merchantId: PropTypes.string.isRequired,
  particulars: PropTypes.string.isRequired,
  onPaymentComplete: PropTypes.func.isRequired
};

CipsSdk.defaultProps = {
  currency: 'NPR'
};
