import React from 'react';
import {
  View,
  Modal,
  SafeAreaView
} from 'react-native';

import { styles } from 'common/styles';
import EsewaPayment from 'common/Webview';
import { sourceGenerator } from './helpers/htmlGenerator';

const EsewaSdk = props => {
  const [url, setUrl] = React.useState('');
  const { successURL, failedURL } = props;

  React.useEffect(() => {
    _handlePaymetProcess();
    return
  }, [url]);

  const _handlePaymetProcess = () => {
    try {

      if (url === failedURL) {
        return props.onPaymentComplete({
          message: `Sorry, your payment process could not be completed`
        });

      } else if (url.startsWith(successURL)) {

        const splits = url.split('&');
        const ref = splits[splits.length - 1].split('=');
        const amt = splits[splits.length - 2].split('=');
        let data = { token: ref[1], amount: Math.round(amt[1]) };
        return props.onPaymentComplete(data);

      }

    } catch (err) {
      return props.onPaymentComplete({
        message: `Sorry, your payment process could not be completed`
      });
    }
  }

  const _onNavigationStateChange = (state) =>
    setUrl(state.url)

  return (
    <Modal
      visible={props.isVisible}
    >
      <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaView}>
          <EsewaPayment
            source={{
              html: sourceGenerator({
                amt: props.amt,
                psc: props.psc,
                pdc: props.pdc,
                pid: props.pid,
                env: props.env,
                taxAmt: props.taxAmt,
                totalAmt: props.totalAmt
              })
            }}
            onNavigationStateChange={_onNavigationStateChange}
          />
        </SafeAreaView>
      </View>
    </Modal>
  );
}
export default EsewaSdk;
