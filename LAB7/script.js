function updateDateTime() {
  const now = new Date();
  const options = { year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  document.getElementById("dateTime3").value = now.toLocaleString('ru-RU', options); 
}
setInterval(updateDateTime, 1000);

function showAlert() {
  alert('Hello, Mpei!');
}