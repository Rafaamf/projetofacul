document.addEventListener('DOMContentLoaded', function() {
    const menuToggleButton = document.getElementById('menuToggleButton');
    const mainMenu = document.getElementById('mainMenu');
    const closeMenuButton = document.getElementById('closeMenuButton');
    const body = document.body;
    let menuOverlay = document.getElementById('menuOverlay');

    function openMenu() {
        mainMenu.classList.add('active');
        menuToggleButton.setAttribute('aria-expanded', 'true');
        body.style.overflow = 'hidden';

        if (!menuOverlay) {
            menuOverlay = document.createElement('div');
            menuOverlay.id = 'menuOverlay';
            menuOverlay.classList.add('menu-overlay');
            document.body.appendChild(menuOverlay);
        }
        menuOverlay.classList.add('active');
    }

    function closeMenu() {
        mainMenu.classList.remove('active');
        menuToggleButton.setAttribute('aria-expanded', 'false');
        body.style.overflow = '';

        if (menuOverlay) {
            menuOverlay.classList.remove('active');
        }
    }

    if (menuToggleButton) {
        menuToggleButton.addEventListener('click', function() {
            if (mainMenu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', closeMenu);
    }

    document.addEventListener('click', function(event) {
        if (mainMenu.classList.contains('active') &&
            !menuToggleButton.contains(event.target) && 
            !mainMenu.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && mainMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});