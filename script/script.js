var weddingDate = new Date("Dec 29, 2024 00:00:00").getTime();
var x = setInterval(function () {

    var now = new Date().getTime();
    var distance = weddingDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "The wedding has arrived!";
    }
}, 1000);


document.getElementById('addToCalendar').addEventListener('click', function () {
    const eventTitle = "Rosnawadz Wedding Day";
    const startDate = new Date("2024-12-29T10:00:00Z");
    const endDate = new Date("2024-12-29T15:00:00Z");
    const location = "Kp. Boncel RT 01 / RW 11 Ds. Bojongemas, Kec. Solokanjeruk, Kab. Bandung, JAWABARAT";
    const description = "Join us in celebrating our wedding!";

    const formatDate = (date) => {
        return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };

    const start = formatDate(startDate);
    const end = formatDate(endDate);
    const calendarURL = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${start}/${end}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;

    window.open(calendarURL, "_blank");
});

/* -------------------------------------------------------------
                 SECTION KEDUA
---------------------------------------------------------------- */
const secondSection = document.getElementById('second');
const animatedText = document.querySelector('.animated-text');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animatedText.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

observer.observe(secondSection);

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/* -------------------------------------------------------------
                 SECTION KETIGA
---------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-up'); // Tambahkan animasi fade-up
                observer.unobserve(entry.target); // Hentikan observasi setelah animasi dijalankan
            }
        });
    });

    // Pilih elemen yang ingin diobservasi
    const decorativeElement = document.querySelector('.decorative-bottom-left');
    if (decorativeElement) {
        observer.observe(decorativeElement);
    }
});

/* -------------------------------------------------------------
                 SECTION KETIGA
---------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");

    // Membuat instance Intersection Observer
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible"); // Tambahkan kelas 'visible'
                    observer.unobserve(entry.target); // Berhenti mengamati elemen yang sudah terlihat
                }
            });
        },
        { threshold: 0.2 } // Aktifkan ketika elemen 20% terlihat di layar
    );

    // Amati setiap elemen galeri
    galleryItems.forEach((item) => {
        observer.observe(item);
    });
});

/* -------------------------------------------------------------
                 SECTION KEEMPAT
---------------------------------------------------------------- */
// Ambil elemen terkait
const timelineItems = document.querySelectorAll('.timeline-item');
const contentItems = document.querySelectorAll('.content-item');

// Fungsi untuk memunculkan konten dan mengaktifkan timeline
function handleScroll() {
    contentItems.forEach((content, index) => {
        const rect = content.getBoundingClientRect();
        if (rect.top < window.innerHeight / 1.2 && rect.bottom >= 0) {
            content.classList.add('visible');
            content.classList.remove('hidden');
            timelineItems[index].classList.add('active');
        } else {
            content.classList.remove('visible');
            content.classList.add('hidden');
            timelineItems[index].classList.remove('active');
        }
    });
}

// Tambahkan event listener untuk scroll
window.addEventListener('scroll', handleScroll);
/* -------------------------------------------------------------
                 SECTION KETUJUH
---------------------------------------------------------------- */
document.getElementById('copyButton').addEventListener('click', function () {
    const accountDropdown = document.getElementById('accountDropdown');
    const selectedAccount = accountDropdown.value;

    // Salin nomor rekening ke clipboard
    navigator.clipboard.writeText(selectedAccount).then(() => {
        alert('Nomor rekening berhasil disalin!');
    });
});

document.getElementById('whatsappButton').addEventListener('click', function () {
    const accountDropdown = document.getElementById('accountDropdown');
    const selectedAccount = accountDropdown.value;

    // Nomor WhatsApp tujuan
    const whatsappNumber = '6281224019616';
    const message = `Hi! Aku udah transfer hadiah ke rekening ${selectedAccount}. Selamat ya, bahagia selalu!`;

    // Buka WhatsApp dengan nomor tujuan dan pesan
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
});

/* -------------------------------------------------------------
                 SECTION KEDELAPAN
---------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    const guestForm = document.getElementById("guestForm");
    const messagesList = document.getElementById("messages-list");
    const messages = [];

    guestForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Cegah refresh halaman

        const name = document.getElementById("name").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !message) {
            alert("Semua kolom harus diisi!");
            return;
        }

        messages.push({ name, message });
        guestForm.reset(); 
        displayMessages();
    });

    function displayMessages() {
        messagesList.innerHTML = ""; 
        messages.forEach((msg) => {
            const div = document.createElement("div");
            div.innerHTML = `<strong>${msg.name}:</strong> ${msg.message}`;
            messagesList.appendChild(div);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('backgroundMusic');
    const musicButton = document.getElementById('musicButton');

    music.play();

    let isPlaying = true;

    musicButton.addEventListener('click', () => {
        if (isPlaying) {
            music.pause();
            musicButton.textContent = '🔇';
        } else {
            music.play();
            musicButton.textContent = '🔊';
        }
        isPlaying = !isPlaying;
    });
});














