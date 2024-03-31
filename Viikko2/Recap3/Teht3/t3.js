const div = document.getElementById('target');

const browserInfo = navigator.userAgent || '';
const browserName = browserInfo.split(' ')[0];
div.innerHTML += `<p>Browser version: ${browserName}</p>`;

let osName = 'Unknown';
if (browserInfo.includes('Windows')) {
  osName = 'Windows';
} else if (browserInfo.includes('Macintosh')) {
  osName = 'Macintosh';
} else if (browserInfo.includes('Linux')) {
  osName = 'Linux';
} else if (browserInfo.includes('iPhone') || browserInfo.includes('iPad') || browserInfo.includes('iPod')) {
  osName = 'iOS';
} else if (browserInfo.includes('Android')) {
  osName = 'Android';
}
div.innerHTML += `<p>Operating system: ${osName}</p>`;

const screenW = window.screen.width;
const screenH = window.screen.height;
div.innerHTML += `<p>Screen Size: ${screenW}x${screenH}</p>`;

const availableScreenW = window.screen.availWidth;
const availableScreenH = window.screen.availHeight;
div.innerHTML += `<p>Available Screen Size: ${availableScreenW}x${availableScreenH}</p>`;

const date = new Date().toLocaleDateString('fi-FI', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
const time  = new Date().toLocaleTimeString('fi-FI', {
  hour: 'numeric',
  minute: 'numeric'
})
div.innerHTML += `<p>Date: ${date}</p>`;
div.innerHTML += `<p>Time: ${time}</p>`





