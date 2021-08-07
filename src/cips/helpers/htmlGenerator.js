export const sourceGenerator = ({
  appId,
  txnId,
  refId,
  token,
  txnAmt,
  baseUrl,
  txnDate,
  appName,
  remarks,
  currency,
  merchantId,
  particulars
}) => `<html>
  <body>
    <form action="${baseUrl}" method="post" id="myForm">
      <br>
      MERCHANT ID
      <input type="text" name="MERCHANTID" id="MERCHANTID" value="${merchantId}"/>
      <br>
      APP ID
      <input type="text" name="APPID" id="APPID" value="${appId}"/>
      <br>
      APP NAME
      <input type="text" name="APPNAME" id="APPNAME" value="${appName}"/>
      <br>
      TXN ID
      <input type="text" name="TXNID" id="TXNID" value="${txnId}"/>
      <br>
      TXN DATE
      <input type="text" name="TXNDATE" id="TXNDATE" value="${txnDate}"/>
      <br>
      TXN CRNCY
      <input type="text" name="TXNCRNCY" id="TXNCRNCY" value="${currency}"/>
      <br>
      TXN AMT
      <input type="text" name="TXNAMT" id="TXNAMT" value="${txnAmt}"/>
      <br>
      REFERENCE ID
      <input type="text" name="REFERENCEID" id="REFERENCEID" value="${refId}"/>
      <br>
      REMARKS
      <input type="text" name="REMARKS" id="REMARKS" value="${remarks}"/>
      <br>
      PARTICULARS
      <input type="text" name="PARTICULARS" id="PARTICULARS" value="${particulars}"/>
      <br>
      TOKEN
      <input type="text" name="TOKEN" id="TOKEN" value="${token}"/>
      <br>
      <input type="submit" value="Submit">
    </form>
    <script>
      var auto_refresh = setInterval(function () {
        submitform();
      }, 500);

      function submitform() {
        document.getElementById('myForm').submit();
      }

    </script>

  </body>
</html>
`;
