// script.js

const numberInput = document.getElementById('numberInput');
const convertButton = document.getElementById('convertButton');
const resultDiv = document.getElementById('result');

function convertNumberToWords(num) {
  const belowTwenty = [
    'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen',
    'Eighteen', 'Nineteen'
  ];
  const tens = [
    '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
  ];

  if (num < 20) return belowTwenty[num];
  if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? ' ' + belowTwenty[num % 10] : '');
  if (num < 1000) return belowTwenty[Math.floor(num / 100)] + ' Hundred' + (num % 100 !== 0 ? ' ' + convertNumberToWords(num % 100) : '');
  if (num < 100000) return convertNumberToWords(Math.floor(num / 1000)) + ' Thousand' + (num % 1000 !== 0 ? ' ' + convertNumberToWords(num % 1000) : '');
  if (num < 10000000) return convertNumberToWords(Math.floor(num / 100000)) + ' Lakh' + (num % 100000 !== 0 ? ' ' + convertNumberToWords(num % 100000) : '');
  if (num < 1000000000) return convertNumberToWords(Math.floor(num / 10000000)) + ' Crore' + (num % 10000000 !== 0 ? ' ' + convertNumberToWords(num % 10000000) : '');
  if (num === 1000000000) return "One Arab";
  if (num < 100000000000) return convertNumberToWords(Math.floor(num / 1000000000)) + ' Arab' + (num % 1000000000 !== 0 ? ' ' + convertNumberToWords(num % 1000000000) : '');
  if(num === 100000000000) return "One Kharab";
  if (num < 10000000000000) return convertNumberToWords(Math.floor(num / 100000000000)) + ' Kharab' + (num % 100000000000 !== 0 ? ' ' + convertNumberToWords(num % 100000000000) : '');
  if(num === 10000000000000) return "One Neel";
  if (num < 1000000000000000) return convertNumberToWords(Math.floor(num / 10000000000000)) + ' Neel' + (num % 10000000000000 !== 0 ? ' ' + convertNumberToWords(num % 10000000000000) : '');
  if(num === 1000000000000000) return "One Padma";
  if (num < 100000000000000000) return convertNumberToWords(Math.floor(num / 1000000000000000)) + ' Padma' + (num % 1000000000000000 !== 0 ? ' ' + convertNumberToWords(num % 1000000000000000) : '');
  if(num === 100000000000000000) return "One Shankh";
  if (num < 1000000000000000000) return convertNumberToWords(Math.floor(num / 100000000000000000)) + ' Shankh' + (num % 100000000000000000 !== 0 ? ' ' + convertNumberToWords(num % 100000000000000000) : '');
  if(num === 1000000000000000000) return "One Mahashankh";

  if (num <= Number.MAX_SAFE_INTEGER) {
    let words = convertNumberToWords(Math.floor(num / 1000000000000000000)) + ' Mahashankh';
    let remainder = num % 1000000000000000000;
    if (remainder !== 0) {
      words += ' ' + convertNumberToWords(remainder);
    }
    return words + " only"; // Added " only" here
  } else {
    return "Number is too large to handle";
  }
}


convertButton.addEventListener('click', () => {
  const number = parseInt(numberInput.value, 10);
  if (isNaN(number) || number < 0 ) {
    resultDiv.innerText = 'Please enter a valid positive number.';
  } else {
    const words = convertNumberToWords(number);
    resultDiv.innerText = words;
  }
});