# rn-all-nepal-payment

![rnAllNepalPayment](https://user-images.githubusercontent.com/30138390/128639942-40b2dbc6-6184-48a9-a575-7fb360eb0b8d.jpg)
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

```js
import React from 'react';
import { Button, Text, SafeAreaView } from 'react-native';

import { CipsSdk } from 'rn-all-nepal-payment';

const CIPSExample = () => {
  const [isVisible, setisVisible] = React.useState(false);
  const [response, setResponse] = React.useState('');

  const _onPaymentComplete = (response) => {
    setResponse(response);
    setisVisible(false);
    return;
  };

  const CONFIG = {
    MERCHANTID: '1',
    APPID: 'MER-1-APP-1',
    APPNAME: 'RN Payment Test',
    TXNID: '120',
    TXNDATE: '02-08-2022',
    TXNAMT: '20000',
    REFID: 'REF-001',
    REMARKS: 'RMKS-001',
    PARTICULARS: 'PART-001',
    TOKEN:
      'mpqZ3kyEBjhiGKlYMv6OXe4kT8ID5gDr6wRdfd0hAcwlOcKrJn8WHFd5t7V2OCtZrKrEu0BbQeleQbA8kj766PT6J/7eakXFZURn1gedczCovBZq7Hz79lU5KQA58WSCv3sTs3mfY8Qspaz/VbUgHJKNK6thFeNdcs8rNWfXFlfJm9V84Wem2wNC5bjwzd8tZPVHa1BHiF+8eBgOEu8vhvs1tW6VUVbOr/U3ZOZNwaG3ZCL0GUnwF8qrmSoKexj6DDZLZOKB6xMsbTnQCu6i4nn2uGwSmAS3F3kUt5+cjmd4TLURFrYw0UKAXgKlU3tRanhAEN3dOpIisSRaBjwFHQ==',
  };

  return (
    <SafeAreaView>
      <Button
        title={'CIPS test'}
        onPress={() => setisVisible(true)}
        style={{ width: 100, height: 50, backgroundColor: 'red' }}
      />
      {response?.token && <Text>{`ref id: ${response.token}`}</Text>}

      <CipsSdk
        currency={'NPR'} // Default currency of choice
        appId={CONFIG.APPID} //  App id registered with connectips
        txnId={CONFIG.TXNID} // Transaction Id registered with connectips while creating token
        refId={CONFIG.REFID} // Refrence ID registered with connectips while creating token
        token={CONFIG.TOKEN} // Token generated from your private key.
        isVisible={isVisible} // Bool to show model
        txnAmt={CONFIG.TXNAMT} //  Number in paisa
        txnDate={CONFIG.TXNDATE} // Date of transaction
        appName={CONFIG.APPNAME} // Name of App registered with connectips
        remarks={CONFIG.REMARKS} // Remarks for transaction
        merchantId={CONFIG.MERCHANTID} // Merchant Id registered with connectips
        particulars={CONFIG.PARTICULARS} // Particulars for product
        onPaymentComplete={_onPaymentComplete} // Callback from connectips Web Sdk
        baseUrl={`https://www.connectips.com/connectipsgw/loginpage`} // Base url provided by connectips
        successURL={`https://www.connectips.com/connectipsgw/failedpage`} // Success URL registered with connectips
        failureURL={`https://www.connectips.com/connectipsgw/successpage`} // Failure URL registered with connectips
      />
    </SafeAreaView>
  );
};

export default CIPSExample;
```

** For more information about CONNECTIPS integration please use connectips documentation. **

## Esewa

```JS
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
        amt={100} // Amount of product or item or ticket etc
        taxAmt={5} // Tax amount on product or item or ticket etc
        totalAmt={105} // Total payment amount including tax, service and deliver charge. [i.e tAmt = amt + txAmt + psc + tAmt]
        env={'EPAYTEST'} // Merchant code provided by eSewa
        testMode={true} // Boolean value for enabling test endpoint and real payment gateway
        isVisible={isVisible} // Bool to show modal
        onPaymentComplete={_onPaymentComplete} //  Callback from connectips Web Sdk
        pid={"ee2c3ca1-696b-4cc5-a6be-2c40d929d43"} // A unique ID of product or item or ticket etc
        failureURL={`http://merchant.com.np/page/esewa_payment_failed?q=fu`} // Failure URL: a redirect URL of merchant application where customer will be redirected after FAILURE or PENDING transaction
        successURL={`http://merchant.com.np/page/esewa_payment_success?q=su`} // Success URL: a redirect URL of merchant application where customer will be redirected after SUCCESSFUL transaction
        psc={0} // Product service charge amount
        pdc={0} // Product delivery charge amount
      />
    </SafeAreaView>
  );
}

export default EsewaExample;


```

For more information please visit [here](https://developer.esewa.com.np/#/epay).

## Khalti

```js
import React from 'react';
import { Button, SafeAreaView } from 'react-native';

import { KhatiSdk } from 'rn-all-nepal-payment';

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
    return;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title={'Start Khalti'} onPress={() => setIsVisible(true)} />
      <KhatiSdk
        amount={100} // Number in paisa
        isVisible={isVisible} // Bool to show model
        paymentPreference={[
          // Array of services needed from Khalti
          'KHALTI',
          'EBANKING',
          'MOBILE_BANKING',
          'CONNECT_IPS',
          'SCT',
        ]}
        productName={'Dragon'} // Name of product
        productIdentity={'1234567890'} // Unique product identifier at merchant
        onPaymentComplete={_onPaymentComplete} // Callback from Khalti Web Sdk
        productUrl={'http://gameofthrones.wikia.com/wiki/Dragons'} // Url of product
        publicKey={'test_public_key_dc74e0fd57cb46cd93832aee0a390234'} // Test or live public key which identifies the merchant
      />
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default KhaltiExample;
```

For more information please visit [here](https://docs.khalti.com/checkout/web/).

## License

MIT
