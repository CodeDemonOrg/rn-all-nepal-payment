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
}) => `
<html>
  <head>
    <style>
      body {
        margin: 0;
        padding: 0;
        height: inherit;
        background-color: #e4e4e4;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .loader {
        border: 6px solid #f3f3f3;
        border-radius: 50%;
        border-top: 6px solid #3498db;
        width: 50px;
        height: 50px;
        -webkit-animation: spin 2s linear infinite;
        /* Safari */
        animation: spin 2s linear infinite;
      }

      /* Safari */
      @-webkit-keyframes spin {
        0% {
          -webkit-transform: rotate(0deg);
        }

        100% {
          -webkit-transform: rotate(360deg);
        }
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
    </style>
  </head>
  <body>
    <div class="loader"></div>
    <form action="${baseUrl}" method="post" id="myForm" hidden>
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
