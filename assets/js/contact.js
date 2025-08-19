// Enhanced Contact Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeContactForm();
    initializeCharacterCounter();
    initializeFormValidation();
    initializeContactInteractions();
});

function initializeContactForm() {
    const contactForm = document.querySelector('.enhanced-contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector('.submit-button');
            const originalHTML = submitButton.innerHTML;
            
            // Show loading state
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
            submitButton.disabled = true;
            
            // Collect form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                // Success state
                submitButton.innerHTML = '<i class="fas fa-check"></i> <span>Message Sent!</span>';
                submitButton.style.background = 'var(--success)';
                
                // Show success message
                showNotification('Thank you! Your message has been sent successfully. I\'ll get back to you soon.', 'success');
                
                // Reset form after delay
                setTimeout(() => {
                    this.reset();
                    submitButton.innerHTML = originalHTML;
                    submitButton.style.background = '';
                    submitButton.disabled = false;
                    
                    // Reset character counter
                    const charCount = document.getElementById('char-count');
                    if (charCount) charCount.textContent = '0';
                }, 3000);
                
            }, 2000);
        });
    }
}

function initializeCharacterCounter() {
    const messageTextarea = document.getElementById('message');
    const charCount = document.getElementById('char-count');
    
    if (messageTextarea && charCount) {
        messageTextarea.addEventListener('input', function() {
            const currentLength = this.value.length;
            const maxLength = 1000;
            
            charCount.textContent = currentLength;
            
            // Change color based on character count
            if (currentLength > maxLength * 0.9) {
                charCount.style.color = 'var(--error)';
            } else if (currentLength > maxLength * 0.7) {
                charCount.style.color = 'var(--warning)';
            } else {
                charCount.style.color = 'var(--text-muted)';
            }
            
            // Prevent exceeding max length
            if (currentLength > maxLength) {
                this.value = this.value.substring(0, maxLength);
                charCount.textContent = maxLength;
            }
        });
    }
}

function initializeFormValidation() {
    const form = document.querySelector('.enhanced-contact-form');
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    inputs.forEach(input => {
        // Real-time validation
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // Clear error state when user starts typing
            if (this.classList.contains('error')) {
                this.classList.remove('error');
                removeFieldError(this);
            }
        });
    });
    
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }
        
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }
        
        // Message length validation
        if (field.id === 'message' && value && value.length < 10) {
            isValid = false;
            errorMessage = 'Please provide a more detailed message (at least 10 characters)';
        }
        
        if (!isValid) {
            showFieldError(field, errorMessage);
        } else {
            removeFieldError(field);
        }
        
        return isValid;
    }
    
    function showFieldError(field, message) {
        field.classList.add('error');
        
        // Remove existing error message
        removeFieldError(field);
        
        // Add new error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: var(--error);
            font-size: var(--font-size-xs);
            margin-top: var(--spacing-1);
            display: flex;
            align-items: center;
            gap: var(--spacing-1);
        `;
        errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
        
        field.parentNode.appendChild(errorDiv);
        
        // Add error styling to field
        field.style.borderColor = 'var(--error)';
        field.style.boxShadow = '0 0 0 4px rgba(229, 62, 62, 0.1)';
    }
    
    function removeFieldError(field) {
        field.classList.remove('error');
        field.style.borderColor = '';
        field.style.boxShadow = '';
        
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }
}

function initializeContactInteractions() {
    // Enhanced contact method interactions
    const contactMethods = document.querySelectorAll('.contact-method');
    
    contactMethods.forEach(method => {
        method.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px)';
        });
        
        method.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // FAQ item interactions
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add a subtle pulse effect when clicked
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Info card interactions
    const infoCards = document.querySelectorAll('.info-card');
    
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Auto-resize textarea
    const textarea = document.getElementById('message');
    if (textarea) {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 300) + 'px';
        });
    }
    
    // Form field focus effects
    const formFields = document.querySelectorAll('input, select, textarea');
    
    formFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.parentNode.classList.add('focused');
        });
        
        field.addEventListener('blur', function() {
            this.parentNode.classList.remove('focused');
        });
    });
    
    // Copy email to clipboard functionality
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const email = this.href.replace('mailto:', '');
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    showNotification('Email address copied to clipboard!', 'success');
                    
                    // Still open email client after a short delay
                    setTimeout(() => {
                        window.location.href = this.href;
                    }, 1000);
                });
            } else {
                // Fallback for older browsers
                window.location.href = this.href;
            }
        });
    });
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: var(--spacing-6);
        right: var(--spacing-6);
        background: ${type === 'success' ? 'var(--success)' : type === 'error' ? 'var(--error)' : 'var(--accent-primary)'};
        color: white;
        padding: var(--spacing-4) var(--spacing-6);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-xl);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: var(--spacing-2);
        font-weight: 500;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform var(--transition-base);
    `;
    
    const icon = type === 'success' ? 'fas fa-check-circle' : 
                 type === 'error' ? 'fas fa-exclamation-circle' : 
                 'fas fa-info-circle';
    
    notification.innerHTML = `
        <i class="${icon}"></i>
        <span>${message}</span>
        <button onclick="this.parentNode.remove()" style="
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 0;
            margin-left: var(--spacing-2);
            font-size: var(--font-size-lg);
        ">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Enter to submit form
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        const form = document.querySelector('.enhanced-contact-form');
        const submitButton = form.querySelector('.submit-button');
        if (form && submitButton && !submitButton.disabled) {
            form.dispatchEvent(new Event('submit'));
        }
    }
});

// Add CSS for form field focus effects
const style = document.createElement('style');
style.textContent = `
    .form-group.focused label {
        color: var(--accent-primary);
    }
    
    .form-group.focused label i {
        transform: scale(1.1);
    }
    
    .field-error {
        animation: shake 0.3s ease-in-out;
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    .notification {
        animation: slideIn 0.3s ease-out;
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
