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
    const allContents = document.querySelectorAll('.hidden-content');
    allContents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Ascunde div-ul cu clasa 'asigtip' atunci când se accesează secțiunile News, Contact, About
    if (page === 'news' || page === 'contact' || page === 'about') {
        document.querySelector('.asigtip').style.display = 'none';
    } else {
        // Resetează stilul display la valoarea implicită (de obicei, bloc)
        document.querySelector('.asigtip').style.display = ''; // Elimină orice stil inline adăugat
    }
    
    // Afișează div-ul corespunzător pentru pagina selectată
    if (page === 'news') {
        document.querySelector('#news-content').style.display = 'block'; // Arată secțiunea de News
    }

    console.log("Loading content for: " + page);

if (page === 'contact') {
    document.querySelector('#contact-content').style.display = 'block'; // Arată secțiunea de News
}

console.log("Loading content for: " + page);

}