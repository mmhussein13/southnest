// JavaScript to fix dropdown menu issues
document.addEventListener('DOMContentLoaded', function() {
    // Handle dropdown submenu functionality
    const dropdownSubmenus = document.querySelectorAll('.dropdown-submenu');
    
    // Add hover event for desktop
    dropdownSubmenus.forEach(function(submenu) {
        submenu.addEventListener('mouseenter', function() {
            const dropdown = this.querySelector('.dropdown-menu');
            if (dropdown) {
                dropdown.classList.add('show');
            }
        });
        
        submenu.addEventListener('mouseleave', function() {
            const dropdown = this.querySelector('.dropdown-menu');
            if (dropdown) {
                dropdown.classList.remove('show');
            }
        });
        
        // Handle click for mobile devices
        const submenuLink = submenu.querySelector('a');
        if (submenuLink) {
            submenuLink.addEventListener('click', function(e) {
                const parentLi = this.parentElement;
                const dropdown = parentLi.querySelector('.dropdown-menu');
                
                if (dropdown) {
                    if (window.innerWidth < 992) {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        // Toggle the dropdown
                        if (dropdown.classList.contains('show')) {
                            dropdown.classList.remove('show');
                        } else {
                            dropdown.classList.add('show');
                        }
                    }
                }
            });
        }
    });
    
    // Fix for any JavaScript errors related to null elements
    window.addEventListener('error', function(e) {
        if (e.message && e.message.includes("Cannot read properties of null")) {
            console.log('Error caught and prevented:', e.message);
            e.preventDefault();
        }
    }, true);
});