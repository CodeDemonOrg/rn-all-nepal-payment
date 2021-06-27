import React from 'react';
import {
  Modal,
  SafeAreaView
} from 'react-native';

import EsewaPayment from './components/esewaPayment';
import { sourceGenerator } from './helpers/htmlGenerator';
import { SUCCESS_URL, FAILED_URL } from './helpers/constants';

const index = props => {
  const [url, setUrl] = React.useState('');

  React.useEffect(() => {
    _handlePaymetProcess();
    return
  }, [url]);

  const _handlePaymetProcess = () => {
    try {

      if (url === FAILED_URL) {
        return props.onPaymentComplete({
          message: `Sorry, your payment process could not be completed`
        });

      } else if (url.startsWith(SUCCESS_URL)) {

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
      <SafeAreaView style={styles.flex}>
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
