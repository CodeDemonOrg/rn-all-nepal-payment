export const sourceGenerator = ({
  amt,
  taxAmt,
  totalAmt,
  psc = '0',
  pdc = '0',
  pid,
  successURL,
  faliureURL,
  env = `EPAYTEST`
}) => `<html>
  <body>
    <form id='myForm' action='https://uat.esewa.com.np/epay/main' method='POST'>
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
        value='${faliureURL}'
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
