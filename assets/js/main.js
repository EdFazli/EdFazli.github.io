// Modern JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTheme();
    initializeSearch();
    initializeAnimations();
    initializeScrollEffects();
});

// Navigation functionality
function initializeNavigation() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            // Animate hamburger
            const spans = this.querySelectorAll('span');
            if (mobileMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans.forEach(span => span.style.transform = '');
                spans[1].style.opacity = '';
            }
        });
        
        // Close mobile menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans.forEach(span => span.style.transform = '');
                spans[1].style.opacity = '';
            });
        });
    }
    
    // Active navigation highlighting
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath === href || (currentPath === '/' && href === '/')) {
            link.classList.add('active');
        }
    });
}

// Theme functionality
function initializeTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle?.querySelector('i');
    
    // Get saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
            
            // Add smooth transition
            document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
        });
    }
    
    function updateThemeIcon(theme) {
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

// Search functionality
function initializeSearch() {
    const searchToggle = document.querySelector('.search-toggle');
    const searchModal = document.getElementById('search-modal');
    const searchInput = document.getElementById('search-input');
    const searchClose = document.getElementById('search-close');
    const searchResults = document.getElementById('search-results');
    
    if (searchToggle && searchModal) {
        searchToggle.addEventListener('click', function() {
            searchModal.classList.add('active');
            searchInput.focus();
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (searchClose) {
        searchClose.addEventListener('click', closeSearch);
    }
    
    if (searchModal) {
        searchModal.addEventListener('click', function(e) {
            if (e.target === searchModal) {
                closeSearch();
            }
        });
    }
    
    // Close search with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchModal?.classList.contains('active')) {
            closeSearch();
        }
    });
    
    function closeSearch() {
        searchModal.classList.remove('active');
        document.body.style.overflow = '';
        searchInput.value = '';
        resetSearchResults();
    }
    
    function resetSearchResults() {
        if (searchResults) {
            searchResults.innerHTML = `
                <div class="text-center py-12 text-gray-500">
                    <i class="fas fa-search text-4xl mb-4 opacity-50"></i>
                    <p>Start typing to search articles...</p>
                </div>
            `;
        }
    }
    
    // Search functionality
    if (searchInput && searchResults) {
        let searchTimeout;
        
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            const query = this.value.trim();
            
            if (query.length < 2) {
                resetSearchResults();
                return;
            }
            
            // Show loading
            searchResults.innerHTML = `
                <div class="text-center py-12 text-gray-500">
                    <i class="fas fa-spinner fa-spin text-2xl mb-4"></i>
                    <p>Searching...</p>
                </div>
            `;
            
            searchTimeout = setTimeout(() => {
                performSearch(query);
            }, 300);
        });
    }
    
    function performSearch(query) {
        // This would typically fetch from your search API
        // For now, we'll simulate search results
        const mockResults = [
            {
                title: "Getting Started with Modern JavaScript",
                url: "/blog/modern-javascript",
                excerpt: "Learn the latest JavaScript features and best practices for modern web development.",
                category: "JavaScript"
            },
            {
                title: "Building Scalable Applications with AWS",
                url: "/blog/aws-scalable-apps",
                excerpt: "Discover how to build and deploy scalable applications using AWS services.",
                category: "Cloud"
            }
        ];
        
        const filteredResults = mockResults.filter(result => 
            result.title.toLowerCase().includes(query.toLowerCase()) ||
            result.excerpt.toLowerCase().includes(query.toLowerCase())
        );
        
        if (filteredResults.length > 0) {
            searchResults.innerHTML = filteredResults.map(result => `
                <div class="p-4 hover:bg-gray-50 rounded-lg cursor-pointer" onclick="window.location.href='${result.url}'">
                    <h3 class="font-semibold text-gray-900 mb-2">${highlightText(result.title, query)}</h3>
                    <p class="text-gray-600 text-sm mb-2">${highlightText(result.excerpt, query)}</p>
                    <span class="inline-block px-2 py-1 bg-primary text-white text-xs rounded-full">${result.category}</span>
                </div>
            `).join('');
        } else {
            searchResults.innerHTML = `
                <div class="text-center py-12 text-gray-500">
                    <i class="fas fa-search-minus text-4xl mb-4 opacity-50"></i>
                    <h3 class="text-lg font-semibold mb-2">No results found</h3>
                    <p>Try different keywords or browse our categories.</p>
                </div>
            `;
        }
    }
    
    function highlightText(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
    }
}

// Animation functionality
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    document.querySelectorAll('.animate-fade-in-up').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Scroll effects
function initializeScrollEffects() {
    const header = document.querySelector('.site-header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'fixed bottom-6 right-6 w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all hover:-translate-y-1 opacity-0 invisible';
    backToTop.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Newsletter form functionality
document.addEventListener('submit', function(e) {
    if (e.target.matches('.newsletter-form')) {
        e.preventDefault();
        
        const form = e.target;
        const button = form.querySelector('button[type="submit"]');
        const input = form.querySelector('input[type="email"]');
        const originalHTML = button.innerHTML;
        
        // Show loading state
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        button.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-check"></i>';
            button.className = button.className.replace('btn-primary', 'bg-success text-white');
            
            setTimeout(() => {
                button.innerHTML = originalHTML;
                button.className = button.className.replace('bg-success text-white', 'btn-primary');
                button.disabled = false;
                input.value = '';
            }, 2000);
        }, 1500);
    }
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to open search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.querySelector('.search-toggle')?.click();
    }
});
