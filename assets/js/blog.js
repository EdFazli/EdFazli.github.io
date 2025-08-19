// Enhanced Blog Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeBlogFilters();
    initializeViewToggle();
    initializeBlogInteractions();
});

function initializeBlogFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('post-search');
    const sortSelect = document.getElementById('sort-select');
    const postsContainer = document.getElementById('posts-container');
    const noResults = document.getElementById('no-results');
    const visibleCount = document.getElementById('visible-count');
    const postCards = document.querySelectorAll('.post-card');
    
    let currentPosts = Array.from(postCards);
    
    function updateVisibleCount() {
        const visiblePosts = currentPosts.filter(card => card.style.display !== 'none').length;
        visibleCount.textContent = visiblePosts;
        
        if (visiblePosts === 0) {
            noResults.style.display = 'block';
            postsContainer.style.display = 'none';
        } else {
            noResults.style.display = 'none';
            postsContainer.style.display = postsContainer.classList.contains('grid-view') ? 'grid' : 'flex';
        }
    }
    
    function filterPosts() {
        const selectedCategory = categoryFilter.value.toLowerCase();
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        currentPosts.forEach(card => {
            const categories = card.dataset.categories.toLowerCase();
            const tags = card.dataset.tags.toLowerCase();
            const title = card.dataset.title.toLowerCase();
            const excerpt = card.querySelector('.post-excerpt').textContent.toLowerCase();
            
            const matchesCategory = !selectedCategory || categories.includes(selectedCategory);
            const matchesSearch = !searchTerm || 
                title.includes(searchTerm) || 
                excerpt.includes(searchTerm) || 
                tags.includes(searchTerm) ||
                categories.includes(searchTerm);
            
            card.style.display = (matchesCategory && matchesSearch) ? 'block' : 'none';
        });
        
        updateVisibleCount();
        
        // Add animation to visible posts
        const visiblePosts = currentPosts.filter(card => card.style.display !== 'none');
        visiblePosts.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('animate-fade-in-up');
        });
    }
    
    function sortPosts() {
        const sortValue = sortSelect.value;
        
        currentPosts.sort((a, b) => {
            switch (sortValue) {
                case 'date-desc':
                    return new Date(b.dataset.date) - new Date(a.dataset.date);
                case 'date-asc':
                    return new Date(a.dataset.date) - new Date(b.dataset.date);
                case 'title-asc':
                    return a.dataset.title.localeCompare(b.dataset.title);
                case 'title-desc':
                    return b.dataset.title.localeCompare(a.dataset.title);
                default:
                    return 0;
            }
        });
        
        // Reorder DOM elements
        currentPosts.forEach(card => {
            postsContainer.appendChild(card);
        });
        
        filterPosts(); // Reapply filters after sorting
    }
    
    // Event listeners
    if (categoryFilter) categoryFilter.addEventListener('change', filterPosts);
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(filterPosts, 300);
        });
    }
    if (sortSelect) sortSelect.addEventListener('change', sortPosts);
    
    // Category and tag click handlers
    document.addEventListener('click', function(e) {
        if (e.target.matches('.category-card') || e.target.closest('.category-card')) {
            e.preventDefault();
            const categoryCard = e.target.closest('.category-card') || e.target;
            const category = categoryCard.dataset.category;
            if (categoryFilter && category) {
                categoryFilter.value = category;
                filterPosts();
                // Scroll to posts section
                document.querySelector('.posts-section').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        
        if (e.target.matches('.tag-cloud-item') || e.target.matches('.tag')) {
            e.preventDefault();
            const tag = e.target.dataset.tag || e.target.textContent.trim();
            if (searchInput && tag) {
                searchInput.value = tag;
                filterPosts();
                // Scroll to posts section
                document.querySelector('.posts-section').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
    
    // Initialize
    updateVisibleCount();
}

function initializeViewToggle() {
    const viewButtons = document.querySelectorAll('.view-btn');
    const postsContainer = document.getElementById('posts-container');
    
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.dataset.view;
            
            // Update active button
            viewButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update container class
            if (view === 'grid') {
                postsContainer.classList.add('grid-view');
            } else {
                postsContainer.classList.remove('grid-view');
            }
            
            // Save preference
            localStorage.setItem('blog-view-preference', view);
            
            // Add transition effect
            postsContainer.style.opacity = '0.5';
            setTimeout(() => {
                postsContainer.style.opacity = '1';
            }, 150);
        });
    });
    
    // Load saved preference
    const savedView = localStorage.getItem('blog-view-preference');
    if (savedView) {
        const targetBtn = document.querySelector(`[data-view="${savedView}"]`);
        if (targetBtn) {
            targetBtn.click();
        }
    }
}

function initializeBlogInteractions() {
    // Enhanced post card interactions
    const postCards = document.querySelectorAll('.post-card');
    
    postCards.forEach(card => {
        // Add hover effect for better UX
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Make entire card clickable
        card.addEventListener('click', function(e) {
            if (!e.target.matches('a') && !e.target.closest('a')) {
                const link = this.querySelector('.post-title a');
                if (link) {
                    window.location.href = link.href;
                }
            }
        });
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
    
    // Smooth scrolling for internal links
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
    
    // Reading progress for blog posts
    if (document.querySelector('.post')) {
        const progressBar = document.getElementById('reading-progress');
        if (progressBar) {
            window.addEventListener('scroll', function() {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) * 100;
                
                progressBar.style.width = scrolled + '%';
                progressBar.style.opacity = winScroll > 100 ? '1' : '0';
            });
        }
    }
    
    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Global function for clearing filters
function clearAllFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('post-search');
    const sortSelect = document.getElementById('sort-select');
    
    if (categoryFilter) categoryFilter.value = '';
    if (searchInput) searchInput.value = '';
    if (sortSelect) sortSelect.value = 'date-desc';
    
    // Trigger filter update
    const event = new Event('change');
    if (categoryFilter) categoryFilter.dispatchEvent(event);
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('post-search');
        if (searchInput) {
            searchInput.focus();
            searchInput.select();
        }
    }
    
    // Escape to clear search
    if (e.key === 'Escape') {
        const searchInput = document.getElementById('post-search');
        if (searchInput && document.activeElement === searchInput) {
            searchInput.value = '';
            searchInput.blur();
            const event = new Event('input');
            searchInput.dispatchEvent(event);
        }
    }
});
