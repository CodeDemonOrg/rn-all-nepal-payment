import React from 'react';
import { Button, Text, SafeAreaView } from 'react-native';

import Esewa from './../index';


const eSewa = () => {
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

      <Esewa
        amt={100}
        taxAmt={5}
        totalAmt={105}
        env={'EPAYTEST'}
        isVisible={isVisible}
        onPaymentComplete={_onPaymentComplete}
        pid={"ee2c3ca1-696b-4cc5-a6be-2c40d929d43"}
      />
    </SafeAreaView>
  );
}

export default eSewa;
