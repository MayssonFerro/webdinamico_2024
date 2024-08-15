const dark = document.querySelector('.dark');
const light = document.querySelector('.light');
const qrText = document.querySelector('.qr-text');
const sizes = document.querySelectorAll('.sizes');

dark.addEventListener('input', handleDarkColor);
light.addEventListener('input', handleLightColor);
qrText.addEventListener('input', handleQRText);
sizes.addEventListener('input', handleSizes);

const defaultText = "ce acredita?"
let colorDark = '#000';
let colorLight = '#fff';
let text = defaultText;
let size = 300;

function handleDarkColor(e) {
    colorDark = e.target.value;
    generateQRCode()
}

function handleLightColor(e) {
    colorLight = e.target.value;
    generateQRCode()
}

function handleQRText(e) {
    text = e.target.value;
    if (!text) {
        text = defaultText;
    }
    generateQRCode();
}

function handleSizes(e) {
    size = e.target.value;
    generateQRCode();
    //console.log(size);
}

function generateQRCode() {
    qrCode.innerHTML = "";
    new QRCode("qr-code", {
        text,
        height: size,
        width: size,
        colorDark: colorDark,
        colorLight: colorLight,
    });
}

generateQRCode();