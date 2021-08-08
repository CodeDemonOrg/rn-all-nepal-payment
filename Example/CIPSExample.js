import React from 'react';
import { Button, Text, SafeAreaView } from 'react-native';

import { CipsSdk } from 'rn-all-nepal-payment';

const CIPSExample = () => {
  const [isVisible, setisVisible] = React.useState(false);
  const [response, setResponse] = React.useState('');

  const _onPaymentComplete = (response) => {
    setResponse(response);
    setisVisible(false);
    return
  }

  const CONFIG = {
    MERCHANTID: "1",
    APPID: "MER-1-APP-1",
    APPNAME: "RN Payment Test",
    TXNID: "120",
    TXNDATE: "02-08-2022",
    TXNAMT: "20000",
    REFID: "REF-001",
    REMARKS: "RMKS-001",
    PARTICULARS: "PART-001",
    TOKEN: "mpqZ3kyEBjhiGKlYMv6OXe4kT8ID5gDr6wRdfd0hAcwlOcKrJn8WHFd5t7V2OCtZrKrEu0BbQeleQbA8kj766PT6J/7eakXFZURn1gedczCovBZq7Hz79lU5KQA58WSCv3sTs3mfY8Qspaz/VbUgHJKNK6thFeNdcs8rNWfXFlfJm9V84Wem2wNC5bjwzd8tZPVHa1BHiF+8eBgOEu8vhvs1tW6VUVbOr/U3ZOZNwaG3ZCL0GUnwF8qrmSoKexj6DDZLZOKB6xMsbTnQCu6i4nn2uGwSmAS3F3kUt5+cjmd4TLURFrYw0UKAXgKlU3tRanhAEN3dOpIisSRaBjwFHQ=="
  }

  return (
    <SafeAreaView>
      <Button
        title={'CIPS test'}
        onPress={() => setisVisible(true)}
        style={{ width: 100, height: 50, backgroundColor: 'red' }}
      />
      {response?.token && <Text>{`ref id: ${response.token}`}</Text>}

      <CipsSdk
        currency={'NPR'}
        appId={CONFIG.APPID}
        txnId={CONFIG.TXNID}
        refId={CONFIG.REFID}
        token={CONFIG.TOKEN}
        isVisible={isVisible}
        txnAmt={CONFIG.TXNAMT}
        txnDate={CONFIG.TXNDATE}
        appName={CONFIG.APPNAME}
        remarks={CONFIG.REMARKS}
        merchantId={CONFIG.MERCHANTID}
        particulars={CONFIG.PARTICULARS}
        onPaymentComplete={_onPaymentComplete}
        baseUrl={`https://www.connectips.com/connectipsgw/loginpage`}
        successURL={`https://www.connectips.com/connectipsgw/failedpage`}
        failureURL={`https://www.connectips.com/connectipsgw/successpage`}
      />
    </SafeAreaView>
  );
}

export default CIPSExample;
