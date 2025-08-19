// Professional JavaScript functionality for the blog

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all professional features
    initializeNavigation();
    initializeSearch();
    initializeAnimations();
    initializeTheme();
    initializeScrollEffects();
    initializeInteractions();
});

// Professional Navigation System
function initializeNavigation() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMobileMenu();
        });
        
        // Close menu when clicking on nav links (mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 767) {
                    closeMobileMenu();
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbarToggle.contains(e.target) && !navbarMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        // Close menu when pressing Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navbarMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 767) {
                closeMobileMenu();
            }
        });
        
        // Prevent scrolling when menu is open on mobile
        function toggleMobileMenu() {
            const isActive = navbarMenu.classList.contains('active');
            
            if (isActive) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        }
        
        function openMobileMenu() {
            navbarMenu.classList.add('active');
            navbarToggle.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Add backdrop
            const backdrop = document.createElement('div');
            backdrop.className = 'mobile-menu-backdrop';
            backdrop.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                z-index: 999;
                opacity: 0;
                transition: opacity var(--transition-base);
            `;
            document.body.appendChild(backdrop);
            
            // Animate backdrop
            setTimeout(() => {
                backdrop.style.opacity = '1';
            }, 10);
            
            backdrop.addEventListener('click', closeMobileMenu);
        }
        
        function closeMobileMenu() {
            navbarMenu.classList.remove('active');
            navbarToggle.classList.remove('active');
            document.body.style.overflow = '';
            
            // Remove backdrop
            const backdrop = document.querySelector('.mobile-menu-backdrop');
            if (backdrop) {
                backdrop.style.opacity = '0';
                setTimeout(() => {
                    backdrop.remove();
                }, 250);
            }
        }
    }
}

// Professional Search System
function initializeSearch() {
    const searchToggle = document.querySelector('.search-toggle');
    const searchModal = document.getElementById('search-modal');
    const searchClose = document.getElementById('search-close');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (searchToggle && searchModal) {
        searchToggle.addEventListener('click', function() {
            searchModal.classList.add('active');
            searchInput.focus();
            document.body.style.overflow = 'hidden';
        });
    }

    if (searchClose && searchModal) {
        searchClose.addEventListener('click', closeSearch);
    }

    // Close search modal when clicking outside
    if (searchModal) {
        searchModal.addEventListener('click', function(e) {
            if (e.target === searchModal) {
                closeSearch();
            }
        });
    }

    // Close search with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchModal && searchModal.classList.contains('active')) {
            closeSearch();
        }
    });

    function closeSearch() {
        searchModal.classList.remove('active');
        document.body.style.overflow = '';
        searchInput.value = '';
        searchResults.innerHTML = `
            <div style="text-align: center; padding: var(--spacing-8); color: var(--text-muted);">
                <i class="fas fa-search" style="font-size: var(--font-size-3xl); margin-bottom: var(--spacing-4); opacity: 0.5;"></i>
                <p>Start typing to search articles...</p>
            </div>
        `;
    }

    // Enhanced search functionality
    if (searchInput && searchResults) {
        let searchData = [];
        
        // Simulate search data (replace with actual search implementation)
        searchData = [
            {
                title: "Getting Started with AWS Lambda",
                url: "/cloud/aws/2024/01/15/getting-started-with-aws-lambda/",
                excerpt: "Learn how to build and deploy your first AWS Lambda function with this comprehensive guide.",
                category: "Cloud",
                tags: ["aws", "lambda", "serverless"]
            },
            {
                title: "Modern JavaScript Best Practices for 2024",
                url: "/development/javascript/2024/01/10/modern-javascript-best-practices/",
                excerpt: "Discover the latest JavaScript best practices and modern syntax for maintainable code.",
                category: "Development",
                tags: ["javascript", "best-practices", "es6"]
            }
        ];

        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            const query = this.value.toLowerCase().trim();
            
            if (query.length < 2) {
                searchResults.innerHTML = `
                    <div style="text-align: center; padding: var(--spacing-8); color: var(--text-muted);">
                        <i class="fas fa-search" style="font-size: var(--font-size-3xl); margin-bottom: var(--spacing-4); opacity: 0.5;"></i>
                        <p>Start typing to search articles...</p>
                    </div>
                `;
                return;
            }

            // Show loading state
            searchResults.innerHTML = `
                <div style="text-align: center; padding: var(--spacing-8); color: var(--text-muted);">
                    <div class="skeleton" style="width: 100%; height: 20px; margin-bottom: var(--spacing-4); border-radius: var(--radius-md);"></div>
                    <div class="skeleton" style="width: 80%; height: 20px; margin: 0 auto; border-radius: var(--radius-md);"></div>
                </div>
            `;

            searchTimeout = setTimeout(() => {
                const results = searchData.filter(post => 
                    post.title.toLowerCase().includes(query) ||
                    post.excerpt.toLowerCase().includes(query) ||
                    post.tags.some(tag => tag.toLowerCase().includes(query))
                ).slice(0, 5);

                if (results.length > 0) {
                    searchResults.innerHTML = results.map(post => `
                        <div class="search-result" onclick="window.location.href='${post.url}'">
                            <h4>${highlightText(post.title, query)}</h4>
                            <p>${highlightText(post.excerpt, query)}</p>
                            <div class="search-meta">
                                <span class="badge badge-primary">${post.category}</span>
                                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                    `).join('');
                } else {
                    searchResults.innerHTML = `
                        <div style="text-align: center; padding: var(--spacing-8); color: var(--text-muted);">
                            <i class="fas fa-search-minus" style="font-size: var(--font-size-3xl); margin-bottom: var(--spacing-4); opacity: 0.5;"></i>
                            <h3 style="margin-bottom: var(--spacing-2);">No results found</h3>
                            <p>Try different keywords or browse our categories.</p>
                        </div>
                    `;
                }
            }, 300);
        });
    }

    function highlightText(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark style="background-color: var(--accent-primary); color: white; padding: 2px 4px; border-radius: 2px;">$1</mark>');
    }
}

// Professional Animation System
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

    // Stagger animations for grids
    document.querySelectorAll('.posts-grid .post-card, .categories-grid .category-card').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
}

// Professional Theme System
function initializeTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            
            // Add transition effect
            document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
        });
    }
}

// Professional Scroll Effects
function initializeScrollEffects() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Professional Interactive Elements
function initializeInteractions() {
    // Enhanced button interactions
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        btn.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        btn.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1)';
        });
    });

    // Copy code functionality
    document.querySelectorAll('pre code').forEach(function(codeBlock) {
        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.innerHTML = '<i class="fas fa-copy"></i>';
        button.style.cssText = `
            position: absolute;
            top: 12px;
            right: 12px;
            background: var(--accent-primary);
            color: white;
            border: none;
            padding: 8px;
            border-radius: var(--radius-md);
            cursor: pointer;
            opacity: 0;
            transition: all var(--transition-fast);
            font-size: var(--font-size-sm);
        `;

        const pre = codeBlock.parentNode;
        pre.style.position = 'relative';
        pre.appendChild(button);

        pre.addEventListener('mouseenter', function() {
            button.style.opacity = '1';
        });

        pre.addEventListener('mouseleave', function() {
            button.style.opacity = '0';
        });

        button.addEventListener('click', function() {
            navigator.clipboard.writeText(codeBlock.textContent).then(function() {
                button.innerHTML = '<i class="fas fa-check"></i>';
                button.style.background = 'var(--success)';
                setTimeout(function() {
                    button.innerHTML = '<i class="fas fa-copy"></i>';
                    button.style.background = 'var(--accent-primary)';
                }, 2000);
            });
        });
    });

    // Back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        width: 56px;
        height: 56px;
        background: var(--accent-gradient);
        color: white;
        border: none;
        border-radius: var(--radius-full);
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all var(--transition-base);
        z-index: 1000;
        box-shadow: var(--shadow-lg);
        font-size: var(--font-size-lg);
    `;
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
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

    backToTop.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.1)';
    });

    backToTop.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });

    // Newsletter form enhancement
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            const button = this.querySelector('button');
            const originalHTML = button.innerHTML;
            
            // Show loading state
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
            button.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
                button.style.background = 'var(--success)';
                
                setTimeout(() => {
                    button.innerHTML = originalHTML;
                    button.style.background = '';
                    button.disabled = false;
                    this.reset();
                }, 3000);
            }, 2000);
        });
    }

    // Enhanced card interactions
    document.querySelectorAll('.post-card, .category-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}
