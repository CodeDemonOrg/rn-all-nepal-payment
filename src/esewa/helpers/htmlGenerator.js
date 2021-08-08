export const sourceGenerator = ({
  amt,
  taxAmt,
  totalAmt,
  psc = '0',
  pdc = '0',
  pid,
  successURL,
  failureURL,
  env = `EPAYTEST`
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
    <form id='myForm' action='https://uat.esewa.com.np/epay/main' method='POST' hidden>
      <input value='${amt}' name='amt' type='hidden' />
      <input value='${psc}' name='psc' type='hidden' />
      <input value='${pdc}' name='pdc' type='hidden' />
      <input value='${env}' name='scd' type='hidden' />
      <input value='${totalAmt}' name='tAmt' type='hidden' />
      <input value='${taxAmt}' name='txAmt' type='hidden' />
      <input
        value='${pid}'
        name='pid'
        type='hidden'
      />
      <input
        value='${successURL}'
        type='hidden'
        name='su'
      />
      <input
        value='${failureURL}'
        type='hidden'
        name='fu'
      />
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
