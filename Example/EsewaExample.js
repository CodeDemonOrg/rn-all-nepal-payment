import React from 'react';
import { Button, Text, SafeAreaView } from 'react-native';

import { EsewaSdk } from 'rn-all-nepal-payment';

const EsewaExample = () => {
  const [isVisible, setisVisible] = React.useState(false);
  const [response, setResponse] = React.useState('');

  const _onPaymentComplete = (response) => {
    setResponse(response);
    setisVisible(false);
    return
  }

  return (
    <SafeAreaView>
      <Button
        title={'Esewa test'}
        onPress={() => setisVisible(true)}
        style={{ width: 100, height: 50, backgroundColor: 'red' }}
      />
      {response?.token && <Text>{`ref id: ${response.token}`}</Text>}

      <EsewaSdk
        amt={100}
        taxAmt={5}
        totalAmt={105}
        env={'EPAYTEST'}
        isVisible={isVisible}
        onPaymentComplete={_onPaymentComplete}
        pid={"ee2c3ca1-696b-4cc5-a6be-2c40d929d43"}
        failureURL={`http://merchant.com.np/page/esewa_payment_failed?q=fu`}
        successURL={`http://merchant.com.np/page/esewa_payment_success?q=su`}
      />
    </SafeAreaView>
  );
}

export default EsewaExample;
