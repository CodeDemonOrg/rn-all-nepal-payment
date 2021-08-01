import React from 'react';
import { Platform, View } from 'react-native';
import { WebView } from 'react-native-webview';

const khaltiHtml = () => `
<html>
<meta name=”viewport” content=”initial-scale=1.0, maximum-scale=1.0">
<head>
  <script src="https://khalti.s3.ap-south-1.amazonaws.com/KPG/dist/2020.12.17.0.0.0/khalti-checkout.iffe.js"></script>
</head>

<body>
  <script>
    var config = {
      "publicKey": "test_public_key_dc74e0fd57cb46cd93832aee0a390234",
      "productIdentity": "1234567890",
      "productName": "Dragon",
      "productUrl": "http://gameofthrones.wikia.com/wiki/Dragons",
      "paymentPreference": [
        "KHALTI",
        "EBANKING",
        "MOBILE_BANKING",
        "CONNECT_IPS",
        "SCT",
      ],
      "eventHandler": {
        onSuccess(payload) {
          console.log(payload);
        },
        onError(error) {
          console.log(error);
        },
        onClose() {
          console.log('widget is closing');
        }
      }
    };

    var checkout = new KhaltiCheckout(config);
    checkout.show({ amount: 1000 });
  </script>
</body>

</html>
`;


const KhatliWebView = () => (
  <View style={{ flex: 1 }}>
    <WebView
      source={{ html: khaltiHtml() }}
      javaScriptEnabled
      style={{ flex: 1 }}
      nativeConfig={{ props: { webContentsDebuggingEnabled: true } }}
      domStorageEnabled
      mixedContentMode={'always'}
      useWebKit={Platform.OS === 'ios'}
      // onMessage={props.response}
      startInLoadingState
    />
  </View>
);

export default KhatliWebView;
