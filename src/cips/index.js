import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  SafeAreaView
} from 'react-native';

import ConnectIpsPayment from 'common/payment';
import { sourceGenerator } from './helpers/htmlGenerator';

const index = props => {
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
    failedURL,
    successURL,
    merchantId,
    particulars,
    onPaymentComplete
  }=props;

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

      }else if (url.startsWith(failedURL)) {
        return onPaymentComplete({
          message: `Sorry, your payment process could not be completed`
        });

      }

    } catch (err) {
      return onPaymentComplete({
        message: `Sorry, your payment process could not be completed`
      });
    }
  }

  const _onNavigationStateChange = (state) =>
    setUrl(state.url)

  return (
    <Modal
      visible={isVisible}
    >
      <SafeAreaView style={styles.flex}>
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
      </SafeAreaView>
    </Modal>
  );
}
export default index;


const styles = {
  flex: {
    flex: 1,
    backgroundColor: 'white'
  }
}



index.propTypes = {
  appId:PropTypes.string.isRequired,
  txnId:PropTypes.string.isRequired,
  refId:PropTypes.string.isRequired,
  token:PropTypes.string.isRequired,
  txnAmt:PropTypes.string.isRequired,
  baseUrl:PropTypes.string.isRequired,
  txnDate:PropTypes.string.isRequired,
  appName:PropTypes.string.isRequired,
  remarks:PropTypes.string.isRequired,
  currency:PropTypes.string.isRequired,
  isVisible:PropTypes.string.isRequired,
  failedURL:PropTypes.string.isRequired,
  successURL:PropTypes.string.isRequired,
  merchantId:PropTypes.string.isRequired,
  particulars:PropTypes.string.isRequired,
  onPaymentComplete:PropTypes.func
};

index.defaultProps = {
  currency:'NPR'
};
