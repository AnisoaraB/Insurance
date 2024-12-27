// Buttons for opening the popups
const openLoginPopupBtn = document.getElementById('openPopup');
const openRegisterPopupBtn = document.getElementById('openPopup2');

// Popups and close buttons
const loginPopupOverlay = document.getElementById('popupOverlay');
const registerPopupOverlay = document.getElementById('registerPopupOverlay');
const closeLoginPopupBtn = document.getElementById('closePopup');
const closeRegisterPopupBtn = document.getElementById('closeRegisterPopup');

// Submit buttons
const submitLoginBtn = document.getElementById('submitRegistration');
const submitRegisterBtn = document.getElementById('submitRegistration2');

// Enable/disable submit button for registration
const termsCheckbox = document.getElementById('termsCheckbox');

// Open login popup
openLoginPopupBtn.addEventListener('click', () => {
    loginPopupOverlay.style.display = 'flex';
});

// Open registration popup
openRegisterPopupBtn.addEventListener('click', () => {
    registerPopupOverlay.style.display = 'flex';
});

// Close login popup
closeLoginPopupBtn.addEventListener('click', () => {
    loginPopupOverlay.style.display = 'none';
});

// Close registration popup
closeRegisterPopupBtn.addEventListener('click', () => {
    registerPopupOverlay.style.display = 'none';
});

// Close popups if clicking outside
window.addEventListener('click', (event) => {
    if (event.target === loginPopupOverlay) {
        loginPopupOverlay.style.display = 'none';
    }
    if (event.target === registerPopupOverlay) {
        registerPopupOverlay.style.display = 'none';
    }
});

// Enable submit button for registration when the checkbox is checked
termsCheckbox.addEventListener('change', () => {
    submitRegisterBtn.disabled = !termsCheckbox.checked;
});

// Handle login submission
submitLoginBtn.addEventListener('click', () => {
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    if (name && email && password) {
        alert('Login successful!');
        document.getElementById('nameInput').value = '';
        document.getElementById('emailInput').value = '';
        document.getElementById('passwordInput').value = '';
        
        loginPopupOverlay.style.display = 'none';
    } else {
        alert('Please fill out all fields.');
    }
});

// Handle registration submission
submitRegisterBtn.addEventListener('click', () => {
    const registerName = document.getElementById('registerNameInput').value;
    const registerEmail = document.getElementById('registerEmailInput').value;
    const registerPassword = document.getElementById('registerPasswordInput').value;

    if (registerName && registerEmail && registerPassword) {
        alert('Registration successful!');
        document.getElementById('registerNameInput').value = '';
        document.getElementById('registerEmailInput').value = '';
        document.getElementById('registerPasswordInput').value = '';
        registerPopupOverlay.style.display = 'none';

    } else {
        alert('Please fill out all fields.');
    }
});

function openPopup3() {
    document.getElementById("popup3").style.display = "flex";
}

function closePopup3() {
    document.getElementById("popup3").style.display = "none";
}
function openPopup4(popupId4) {
    document.getElementById(popupId4).style.display = "flex";
}

function closePopup4(popupId4) {
    document.getElementById(popupId4).style.display = "none";
}
function openPopup5() {
    document.getElementById("popup5").style.display = "flex";
}

function closePopup5() {
    document.getElementById("popup5").style.display = "none";
}
function openPopup6(popupId6) {
    document.getElementById(popupId6).style.display = "flex";
}

function closePopup6(popupId6) {
    document.getElementById(popupId6).style.display = "none";
}
function openPopup7() {
    document.getElementById("popup7").style.display = "flex";
}

function closePopup7() {
    document.getElementById("popup7").style.display = "none";
}
function openPopup8(popupId8) {
    document.getElementById(popupId8).style.display = "flex";
}

function closePopup8(popupId8) {
    document.getElementById(popupId8).style.display = "none";
}
function openPopup9() {
    document.getElementById("popup9").style.display = "flex";
}

function closePopup9() {
    document.getElementById("popup9").style.display = "none";
}
function openPopup10(popupId10) {
    document.getElementById(popupId10).style.display = "flex";
}

function closePopup10(popupId10) {
    document.getElementById(popupId10).style.display = "none";
}
function openPopup11() {
    document.getElementById("popup11").style.display = "flex";
}

function closePopup11() {
    document.getElementById("popup11").style.display = "none";
}
function openPopup12(popupId12) {
    document.getElementById(popupId12).style.display = "flex";
}

function closePopup12(popupId12) {
    document.getElementById(popupId12).style.display = "none";
}


function loadContent(page) {
    // Ascunde toate secțiunile de conținut la început
    const allContents = document.querySelectorAll('.hidden-content, .hidden-content2, .hidden-content3');
    allContents.forEach(function(content) {
        content.style.display = 'none'; // Ascunde toate secțiunile
    });

    // Ascunde div-ul cu clasa 'asigtip' pentru anumite pagini
    if (page === 'news' || page === 'contact' || page === 'about') {
        const asigtip = document.querySelector('.asigtip');
        if (asigtip) {
            asigtip.style.display = 'none'; // Ascunde dacă există
        }
    } else {
        // Resetează stilul display la valoarea implicită pentru asigtip
        const asigtip = document.querySelector('.asigtip');
        if (asigtip) {
            asigtip.style.display = ''; // Elimină orice stil inline adăugat
        }
    }

    // Afișează secțiunea corespunzătoare pentru pagina selectată
    if (page === 'home') {
        // Optional: Add logic to display Home section content if needed
        document.querySelector('#home-content').style.display = 'block'; // Example Home content
    } else if (page === 'news') {
        document.querySelector('#news-content').style.display = 'block'; // Arată secțiunea News
    } else if (page === 'contact') {
        document.querySelector('#contact-content').style.display = 'block'; // Arată secțiunea Contact
    } else if (page === 'about') {
        document.querySelector('#about-content').style.display = 'block'; // Arată secțiunea About
    }

    console.log("Loading content for: " + page);
}


document.querySelectorAll('.address-checkbox').forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        const hoursText = document.getElementById('hours-text');

        // Deselectează toate celelalte checkbox-uri
        document.querySelectorAll('.address-checkbox').forEach((cb) => {
            if (cb !== this) cb.checked = false;
        });

        // Afișează orele corespunzătoare
        if (this.checked) {
            hoursText.textContent = this.dataset.hours;
        } else {
            hoursText.textContent = 'Selectează o adresă pentru a vedea orele de funcționare.';
        }
    });
});
 // JavaScript pentru a evidenția secțiunea activă
 const links = document.querySelectorAll('a');
 const sections = document.querySelectorAll('.section');

 // Functia care marchează secțiunea activă
 function highlightActiveSection() {
     let currentSection = null;
     
     // Verifică care secțiune este vizibilă pe ecran
     sections.forEach(section => {
         const rect = section.getBoundingClientRect();
         if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
             currentSection = section;
         }
     });

     // Evidentiază secțiunea activă
     sections.forEach(section => {
         if (section === currentSection) {
             section.classList.add('active');
         } else {
             section.classList.remove('active');
         }
     });

     // Evidentiază linkul corespunzător
     links.forEach(link => {
         const href = link.getAttribute('href').substring(1);
         if (href === currentSection.id) {
             link.style.color = '#0056b3';
         } else {
             link.style.color = '#007bff';
         }
     });
 }

 // Deschide popup-ul când se apasă pe butonul pentru apel Viber
 document.getElementById('viberCallBtn').addEventListener('click', function() {
    document.getElementById('popupFormfooter').style.display = 'flex';
});

// Închide popup-ul când se apasă pe "X"
document.getElementById('closePopupfooter').addEventListener('click', function() {
    document.getElementById('popupFormfooter').style.display = 'none';
});

// Trimiterea formularului
document.getElementById('callForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const phoneNumber = document.getElementById('phoneNumber').value;
    const name = document.getElementById('name').value;
    const family = document.getElementById('family').value;
    const message = document.getElementById('message').value;

    // Poți trimite datele către un server sau le poți utiliza aici.
    alert(`Apel comandat pentru:\nNumăr: ${phoneNumber}\nNume: ${name}\nFamilie: ${family}\nMesaj: ${message}`);

    // Închide popup-ul după trimiterea formularului
    document.getElementById('popupFormfooter').style.display = 'none';

    // Deschide aplicația Viber pentru apel
    window.location.href = `viber://call?number=${phoneNumber}`;
});