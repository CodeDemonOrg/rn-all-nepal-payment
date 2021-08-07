export const getKhaltiHTML = ({
  amount,
  publicKey,
  productUrl,
  productName,
  productIdentity,
  paymentPreference,
}) => {

  const paymentPreferenceStr = paymentPreference.reduce((accStr, paymentPreference) => { return accStr + `"${paymentPreference}",` }, '');

  return `
    <html>
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0">
    <head>
      <script src="https://khalti.s3.ap-south-1.amazonaws.com/KPG/dist/2020.12.17.0.0.0/khalti-checkout.iffe.js"></script>
    </head>

    <body>
      <script>
        var config = {
          "publicKey": "${publicKey}",
          "productUrl": "${productUrl}",
          "productName": "${productName}",
          "productIdentity": "${productIdentity}",
          "paymentPreference": [${paymentPreferenceStr}],
          "eventHandler": {
            onSuccess(payload) {
              window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'SUCCESS', data: payload }));
            },
            onError(error) {
              window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'ERROR', data: error }));
            },
            onClose() {
              window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'CLOSED' }));
            }
          }
        };

        var checkout = new KhaltiCheckout(config);
        checkout.show({ amount: ${amount} });

      </script>
    </body>

    </html>
`;
}
