const KhatiSdk = () => (
  <KhaltiWebView
    amount={100}
    paymentPreference={[
      "KHALTI",
      "EBANKING",
      "MOBILE_BANKING",
      "CONNECT_IPS",
      "SCT"
    ]}
    productName={'Dragon'}
    productIdentity={'1234567890'}
    productUrl={'http://gameofthrones.wikia.com/wiki/Dragons'}
    publicKey={'test_public_key_dc74e0fd57cb46cd93832aee0a390234'}
    onPaymentComplete={(data) => {
      const str = data.nativeEvent.data;
      const resp = JSON.parse(str);
      console.log({ resp })
      if (resp.event === 'CLOSED') {
        // close page/ go back
      } else if (resp.event === 'SUCCESS') {
        // console.log({ data: resp.data })
      } else if (resp.event === 'ERROR') {
        // console.log({ error: resp.data })
      }
    }}
  />
);

export default KhatiSdk;
