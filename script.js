// Data do evento
const eventDate = new Date("2025-11-03T13:00:00");

// Função para formatar números com 2 dígitos
function formatTime(num) {
  return num < 10 ? '0' + num : num;
}

// Função para iniciar a contagem regressiva
function startCountdown() {
  const targetDate = new Date('2025-11-01T13:00:00-03:00').getTime(); // ✅ Evento dia 01/11
  const countdownElement = document.getElementById('countdown');

  const interval = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      clearInterval(interval);
      countdownElement.innerHTML = 'O evento começou!';
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }, 1000);
}

startCountdown();


// Google Calendar
function buildGoogleCalendarUrl() {
  const start = "20251103T160000Z"; // 13h BRT
  const end = "20251103T210000Z";   // +5h
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=Karaokê%20do%20Gabriel🎤&dates=${start}/${end}&details=Venha%20fantasiado%20de%20cantor!&location=Rua+Jaú,+50,+Santa+Maria`;
}

document.getElementById("gcal-link").href = buildGoogleCalendarUrl();

// ICS
function buildICS() {
  return `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Karaokê do Gabriel 🎤
DTSTART:20251103T160000Z
DTEND:20251103T210000Z
DESCRIPTION:Venha fantasiado de cantor! 
LOCATION:Rua Jaú, 50, Santa Maria
END:VEVENT
END:VCALENDAR`;
}

const icsBlob = new Blob([buildICS()], { type: "text/calendar" });
document.getElementById("ics-link").href = URL.createObjectURL(icsBlob);
