# rn-all-nepal-payment
React-native wrapper which includes all the major payment solutions in Nepal. This package implements the services in a webview in a [Modal](https://github.com/react-native-webview/react-native-webview).

## Installation
```sh
npm install --save prop-types  // if you have not already
npm install --save react-native-webview  // if you have not already
npm install rn-all-nepal-payment
```
or
```sh
yarn add prop-types  // if you have not already
yarn add react-native-webview  // if you have not already
yarn add rn-all-nepal-payment
```

# Usage
## CIPS

## Esewa


## Khalti
```js
import React from 'react';
import { Button, SafeAreaView } from 'react-native';

import { KhatiSdk } from 'rn-all-nepal-payment'

const KhaltiExample = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const _onPaymentComplete = (data) => {
    setIsVisible(false);
    const str = data.nativeEvent.data;
    const resp = JSON.parse(str);
    // console.log({ resp })
    if (resp.event === 'CLOSED') {
      // handle closed action
    } else if (resp.event === 'SUCCESS') {
      // console.log({ data: resp.data })
    } else if (resp.event === 'ERROR') {
      // console.log({ error: resp.data })
    }
    return
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={'Start Khalti'}
        onPress={() => setIsVisible(true)}
      />
      <KhatiSdk
        amount={100}  // Number in paisa
        isVisible={isVisible}  // Bool to show model
        paymentPreference={[  // Array of services needed from Khalti
          "KHALTI",
          "EBANKING",
          "MOBILE_BANKING",
          "CONNECT_IPS",
          "SCT"
        ]}
        productName={'Dragon'}  // Name of product
        productIdentity={'1234567890'}  // Unique product identifier at merchant
        onPaymentComplete={_onPaymentComplete}  // Callback from Khalti Web Sdk
        productUrl={'http://gameofthrones.wikia.com/wiki/Dragons'}  // Url of product
        publicKey={'test_public_key_dc74e0fd57cb46cd93832aee0a390234'}  // Test or live public key which identifies the merchant
      />
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export default KhaltiExample;

```

For more information please visit [here](https://docs.khalti.com/checkout/web/).

