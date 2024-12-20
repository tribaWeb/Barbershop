// Uchováváme všechny položky v poli
const navItems = [];

// Funkce pro manipulaci s hamburger menu
function toggleMenu() {
    const hamburgerNav = document.querySelector('.nav'); // Navigace pro hamburger menu
    const leftNavItems = Array.from(document.querySelectorAll('.left-nav .nav-list li')); // Položky levé navigace
    const rightNavItems = Array.from(document.querySelectorAll('.right-nav .nav-list li')); // Položky pravé navigace
    const navList = hamburgerNav?.querySelector('.nav-list'); // Seznam v hamburger menu

    // Pokud navigace není nalezena, zastav funkci
    if (!hamburgerNav || !navList) {
        console.error('Navigace nebyla nalezena. Zkontrolujte HTML strukturu.');
        return;
    }

    // Pokud je menu aktivní, zavřeme jej a vyčistíme seznam
    if (hamburgerNav.classList.contains('active')) {
        hamburgerNav.classList.remove('active'); // Zavře menu
        navList.innerHTML = ''; // Vyprázdní obsah hamburger menu
        return;
    }

    // Pokud není menu aktivní, přidáme položky z pole
    if (navItems.length === 0) {
        // Přidáme položky z levé i pravé navigace do pole
        navItems.push(...leftNavItems, ...rightNavItems);
    }

    // Přidáme položky z pole do hamburger menu
    navList.innerHTML = ''; // Vyprázdní obsah před přidáním položek
    navItems.forEach(item => {
        const clonedItem = item.cloneNode(true); // Klonuj položku
        navList.appendChild(clonedItem); // Přidej položku do hamburger menu
    });

    // Aktivujeme menu
    hamburgerNav.classList.add('active');
}
