// Lista de 20 videos
const videos = [
    "https://framerusercontent.com/assets/5lenhCsrN74AqGuKfwAH47BpGO0.mp4",
    "https://framerusercontent.com/assets/ifv1l4cTAuKJ7TTA0593MysOA.mp4",
    "https://framerusercontent.com/assets/aFzW6L81l4dSz4Op9KMXwPUk7A.mp4",
];

// Función para cargar videos en las secciones
function loadVideos() {
    const sections = document.querySelectorAll('.section');
    const numSections = sections.length;
    const shuffledVideos = Array.from(videos).sort(() => 0.5 - Math.random()); // Mezclar el orden de los videos
    sections.forEach((section, index) => {
        const videoIndex = index % videos.length;
        const videoElement = document.createElement('video');
        videoElement.src = shuffledVideos[videoIndex]; // Asignar un video a cada sección
        videoElement.autoplay = true;
        videoElement.muted = true;
        videoElement.loop = true;
        videoElement.setAttribute('playsinline', ''); // Para iOS
        videoElement.className = 'vjs-tech video__player'; // Agregar clases
        videoElement.setAttribute('tabindex', '-1');
        videoElement.dataset.id = '6514'; // Agregar atributos data
        videoElement.id = 'video-6514_html5_api';
        section.innerHTML = ''; // Limpiar contenido existente
        section.appendChild(videoElement);

        // Cargar el primer video antes que los demás
        if (index === 0) {
            videoElement.addEventListener('canplaythrough', function () {
                // Una vez que el primer video haya cargado, cargar los demás
                for (var i = 1; i < numSections; i++) {
                    const nextVideoIndex = (index + i) % videos.length;
                    const nextVideoElement = document.createElement('video');
                    nextVideoElement.src = shuffledVideos[nextVideoIndex];
                    nextVideoElement.autoplay = true;
                    nextVideoElement.muted = true;
                    nextVideoElement.loop = true;
                    nextVideoElement.setAttribute('playsinline', '');
                    nextVideoElement.className = 'vjs-tech video__player';
                    nextVideoElement.setAttribute('tabindex', '-1');
                    nextVideoElement.dataset.id = '6514';
                    nextVideoElement.id = 'video-6514_html5_api';
                    sections[i].innerHTML = '';
                    sections[i].appendChild(nextVideoElement);
                }
            });
        }
    });
}

// Cargar videos al cargar la página
window.onload = loadVideos;



//Nombre y description acciones 


// Array con nombres aleatorios
document.addEventListener("DOMContentLoaded", function () {
    var nombresAleatorios = ["🇵🇹 Lorena Caterina 🇵🇹 ",
        "🇫🇮 Ana Maria 🇫🇮",
        "🇨🇦 Carolina Garcia 🇨🇦",
        "🇦🇺 NAKARY MILLER 🇦🇺",
        "🇺🇸 GRACIELA CATERINA 🇺🇸",
        "🇻🇪 Valentina Ribeiro 🇻🇪",
        "🇻🇪 G R A C I E L A 💘 🇻🇪",
        "🇵🇪 Mariana López 🇵🇪",
        "🇷🇴 Andrei Popescu 🇷🇴",
        "🇧🇪 Emma Dubois 🇧🇪",
        "🇬🇷 Ioanna Papadopoulos 🇬🇷",
        "🇨🇱 Matías Silva 🇨🇱",
        "🇭🇺 Levente Kovács 🇭🇺",
        "🇸🇦 Fatima Al-Mansoori 🇸🇦",
        "🇲🇽 Alejandro Hernández 🇲🇽",
        "🇵🇦 Camila González 🇵🇦",
        "🇨🇮 Aminata Diop 🇨🇮",
        "🇨🇴 Isabela Ríos 🇨🇴",
        "🇮🇹 Sofia Santoro 🇮🇹",
        "🇳🇴 Emilie Andersen 🇳🇴",
        "🇦🇹 Lara Hofmann 🇦🇹",
        "🇳🇿 Harper Wilson 🇳🇿",
        "🇨🇿 Klára Nováková 🇨🇿",
        "🇮🇪 Aoife Murphy 🇮🇪",
        "🇨🇭 Alessia Rossi 🇨🇭",
        "🇮🇳 Aarav Patel 🇮🇳",
        "🇦🇪 Layla Khan 🇦🇪",
        "🇸🇪 Malin Lindström 🇸🇪",
        "🇿🇦 Thabo Molefe 🇿🇦",
        "🇳🇱 Daan van der Berg 🇳🇱",
        "🇧🇷 Maria da Silva 🇧🇷",
        "🇫🇷 Léa Dubois 🇫🇷",
        "🇰🇷 Min-jun Kim 🇰🇷",
        "🇯🇵 Yui Tanaka 🇯🇵",
        "🇩🇪 Lena Müller 🇩🇪",
        "🇬🇧 Oliver Hughes 🇬🇧",
        "🇪🇸 Marta García 🇪🇸",];

    for (var i = 1; i <= 5; i++) {
        var indiceAleatorio = Math.floor(Math.random() * nombresAleatorios.length);
        var elementoH2 = document.getElementById("randomName" + i);
        if (elementoH2) {
            elementoH2.textContent = nombresAleatorios[indiceAleatorio];
            nombresAleatorios.splice(indiceAleatorio, 1); // Eliminar el nombre seleccionado del array
        }
    }
});




//Descrition

document.addEventListener("DOMContentLoaded", function () {
    var descripcionesAleatorias = [
        "Watch Me Masturbate Live ❤️",
        "📞🔥 Phone Calls, 💥 Custom Videos, 😋 Live Broadcasts, Your Name on My 🍒TITS!",
        "Made in Czech 🇨🇿🍺 Big smile and big...heart🍒 Cum join me in my adventures as I show off just for you baby ❤️",
        "❣ Exclusive VIP Content 🔞|Seduction and Sensuality Unleashed 🦊| Monthly Nude Delights📸",
        "😻 Model, ❤️ student 🔥I make exclusive videos, 📞calls! Sexsting LIVE -broadcasts!!🍑🍒 #fuck",
        "Model, 20 y.o 🇪🇸 Wanna chat with me? Check all my links 😍",
        "Hi I’m Molly! ❤️ Just a sweet girl who loves to be naughty 🤫😈💋CHECK ALL MY LINKS via IG! ✨",
        "🔥 Hot and ready for you! 😈 Let's play together and make your fantasies come true 💦",
        "🍑 Curvy and fun! 💋 Join me for exclusive content and live shows 📸",
        "🌟 Your favorite cam girl! 🎥 Live shows, custom videos, and more 🔞",
        "💖 Sensual and seductive! 😘 Exclusive content just for you 💌",
        "🔥 Naughty but nice! 💋 Cum play with me and let's have some fun 🍒",
        "🌺 Sweet and sexy! 💫 Join me for a private show and let's get wild together 🚀",
        "👅 Ready to please! 💦 Let's explore your wildest desires together 🔥",
        "🔞 Explicit content and live shows! 💋 Cum chat with me and let's have some fun 😘",
        "🌈 Fun and flirty! 💖 Exclusive content and private shows just for you 🌟",
        "💥 Wild and willing! 🔞 Let's get naughty together and have an unforgettable time 😈",
        "Hi, my name is Mia, I love traveling, sex and making videos 💖",
        "Hi, I'm Anna 23 yo 💋, ready for smth hot?🔞🔞",
        "Welcome to my page 💎 You will notice that I am always sweet and friendly! 💗 Feel free to ask me anything - I'll always chat with you😌",
    ];

    for (var i = 1; i <= 5; i++) {
        var indiceAleatorio = Math.floor(Math.random() * descripcionesAleatorias.length);
        var elementoP = document.getElementById("randomDescription" + i);
        if (elementoP) {
            elementoP.textContent = descripcionesAleatorias[indiceAleatorio];
            descripcionesAleatorias.splice(indiceAleatorio, 1); // Eliminar la descripción seleccionada del array
        }
    }
});




//Avatar imagen

document.addEventListener("DOMContentLoaded", function () {
    var imagenesAleatorias = [
        "/img/Screenshot_5.jpg",
        "/img/Screenshot_5.jpg",
        "/img/Screenshot_5.jpg",
        "/img/Screenshot_5.jpg",
        "/img/Screenshot_5.jpg",
        
    ];

    for (var i = 1; i <= 5; i++) {
        var indiceAleatorio = Math.floor(Math.random() * imagenesAleatorias.length);
        var elementoImg = document.getElementById("randomImage" + i).getElementsByTagName("img")[0];
        if (elementoImg) {
            elementoImg.src = imagenesAleatorias[indiceAleatorio];
            imagenesAleatorias.splice(indiceAleatorio, 1); // Eliminar la imagen seleccionada del array
        }
    }
});

// Crear un elemento <script>


//var script = document.createElement('script');
//script.type = 'text/javascript';
//script.src = '//pl21546160.profitablegatecpm.com/6c/9c/ca/6c9cca2344310fc5890c46b7c2e6c2ca.js';

// Agregar el elemento <script> al final del body
//document.body.appendChild(script);