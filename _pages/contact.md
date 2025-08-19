---
layout: default
title: Contact
permalink: /contact/
---

<!-- Contact Header -->
<section class="py-20 bg-gradient-to-br from-gray-50 to-white">
    <div class="container">
        <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">
                Let's Connect
            </h1>
            <p class="text-xl text-gray-600 mb-8">
                Have a question, want to collaborate, or just say hello? I'd love to hear from you. 
                Let's start a conversation about technology, projects, or anything that interests you.
            </p>
            <div class="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <div class="flex items-center gap-2">
                    <i class="fas fa-reply text-primary"></i>
                    <span>24h Response Time</span>
                </div>
                <div class="flex items-center gap-2">
                    <i class="fas fa-globe text-primary"></i>
                    <span>Available Worldwide</span>
                </div>
                <div class="flex items-center gap-2">
                    <i class="fas fa-handshake text-primary"></i>
                    <span>Open to Collaboration</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Contact Methods -->
<section class="py-16">
    <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <!-- Email -->
            <div class="text-center p-8 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <div class="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-6">
                    <i class="fas fa-envelope text-white text-2xl"></i>
                </div>
                <h3 class="text-lg font-bold mb-2 text-gray-900">Email</h3>
                <p class="text-gray-600 text-sm mb-4">Best for detailed discussions</p>
                <a href="mailto:{{ site.email }}" class="text-primary font-semibold hover:text-primary-dark transition-colors">
                    {{ site.email }}
                </a>
            </div>
            
            <!-- LinkedIn -->
            {% if site.linkedin_username %}
            <div class="text-center p-8 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <i class="fab fa-linkedin text-white text-2xl"></i>
                </div>
                <h3 class="text-lg font-bold mb-2 text-gray-900">LinkedIn</h3>
                <p class="text-gray-600 text-sm mb-4">Professional networking</p>
                <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank" class="text-primary font-semibold hover:text-primary-dark transition-colors">
                    Connect with me
                </a>
            </div>
            {% endif %}
            
            <!-- GitHub -->
            {% if site.github_username %}
            <div class="text-center p-8 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <div class="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <i class="fab fa-github text-white text-2xl"></i>
                </div>
                <h3 class="text-lg font-bold mb-2 text-gray-900">GitHub</h3>
                <p class="text-gray-600 text-sm mb-4">Code & open source</p>
                <a href="https://github.com/{{ site.github_username }}" target="_blank" class="text-primary font-semibold hover:text-primary-dark transition-colors">
                    View repositories
                </a>
            </div>
            {% endif %}
            
            <!-- Twitter -->
            {% if site.twitter_username %}
            <div class="text-center p-8 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <i class="fab fa-twitter text-white text-2xl"></i>
                </div>
                <h3 class="text-lg font-bold mb-2 text-gray-900">Twitter</h3>
                <p class="text-gray-600 text-sm mb-4">Quick updates & thoughts</p>
                <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" class="text-primary font-semibold hover:text-primary-dark transition-colors">
                    Follow me
                </a>
            </div>
            {% endif %}
        </div>
        
        <!-- Contact Form -->
        <div class="max-w-4xl mx-auto">
            <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div class="p-8 lg:p-12">
                    <div class="text-center mb-8">
                        <h2 class="text-3xl font-bold mb-4 text-gray-900">Send me a message</h2>
                        <p class="text-gray-600">Fill out the form below and I'll get back to you as soon as possible.</p>
                    </div>
                    
                    <form id="contact-form" class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="name" class="block text-sm font-semibold text-gray-900 mb-2">
                                    Full Name *
                                </label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                    placeholder="Enter your full name"
                                >
                            </div>
                            
                            <div>
                                <label for="email" class="block text-sm font-semibold text-gray-900 mb-2">
                                    Email Address *
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                    placeholder="your.email@example.com"
                                >
                            </div>
                        </div>
                        
                        <div>
                            <label for="subject" class="block text-sm font-semibold text-gray-900 mb-2">
                                Subject *
                            </label>
                            <select 
                                id="subject" 
                                name="subject" 
                                required 
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                            >
                                <option value="">Select a subject</option>
                                <option value="general">General Inquiry</option>
                                <option value="collaboration">Collaboration</option>
                                <option value="consulting">Consulting</option>
                                <option value="speaking">Speaking Opportunity</option>
                                <option value="technical">Technical Question</option>
                                <option value="feedback">Feedback</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        
                        <div>
                            <label for="message" class="block text-sm font-semibold text-gray-900 mb-2">
                                Message *
                            </label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="6" 
                                required 
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                                placeholder="Tell me about your project, question, or how I can help you..."
                            ></textarea>
                            <div class="text-right text-sm text-gray-500 mt-1">
                                <span id="char-count">0</span> / 1000 characters
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-3">
                            <input type="checkbox" id="newsletter" name="newsletter" class="mt-1">
                            <label for="newsletter" class="text-sm text-gray-600">
                                I'd like to receive updates about new blog posts and tech insights
                            </label>
                        </div>
                        
                        <div class="text-center">
                            <button 
                                type="submit" 
                                class="btn btn-primary btn-lg w-full md:w-auto"
                                id="submit-btn"
                            >
                                <i class="fas fa-paper-plane"></i>
                                Send Message
                            </button>
                            <p class="text-sm text-gray-500 mt-4">
                                <i class="fas fa-shield-alt text-success"></i>
                                Your information is secure and will never be shared.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- FAQ Section -->
<section class="py-16 bg-gray-50">
    <div class="container">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p class="text-gray-600">Quick answers to common questions</p>
        </div>
        
        <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <h3 class="text-lg font-bold mb-3 text-gray-900 flex items-center gap-3">
                    <i class="fas fa-clock text-primary"></i>
                    How quickly do you respond?
                </h3>
                <p class="text-gray-600">I typically respond within 24 hours during weekdays. For urgent matters, please mention it in the subject line.</p>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <h3 class="text-lg font-bold mb-3 text-gray-900 flex items-center gap-3">
                    <i class="fas fa-handshake text-primary"></i>
                    Do you offer consulting?
                </h3>
                <p class="text-gray-600">Yes, I'm available for consulting on web development, cloud architecture, and technical leadership projects.</p>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <h3 class="text-lg font-bold mb-3 text-gray-900 flex items-center gap-3">
                    <i class="fas fa-microphone text-primary"></i>
                    Speaking engagements?
                </h3>
                <p class="text-gray-600">I enjoy speaking at conferences and meetups about web development, cloud computing, and technical leadership.</p>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <h3 class="text-lg font-bold mb-3 text-gray-900 flex items-center gap-3">
                    <i class="fas fa-code text-primary"></i>
                    Code reviews?
                </h3>
                <p class="text-gray-600">I'm happy to provide feedback on open source projects or help with specific technical questions.</p>
            </div>
        </div>
    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const messageTextarea = document.getElementById('message');
    const charCount = document.getElementById('char-count');
    const submitBtn = document.getElementById('submit-btn');
    
    // Character counter
    messageTextarea.addEventListener('input', function() {
        const count = this.value.length;
        charCount.textContent = count;
        
        if (count > 1000) {
            this.value = this.value.substring(0, 1000);
            charCount.textContent = 1000;
        }
        
        // Color coding
        if (count > 900) {
            charCount.className = 'text-red-500';
        } else if (count > 700) {
            charCount.className = 'text-yellow-500';
        } else {
            charCount.className = 'text-gray-500';
        }
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            // Success state
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.className = submitBtn.className.replace('btn-primary', 'bg-success text-white');
            
            // Show success notification
            showNotification('Thank you! Your message has been sent successfully.', 'success');
            
            // Reset form
            setTimeout(() => {
                form.reset();
                charCount.textContent = '0';
                charCount.className = 'text-gray-500';
                submitBtn.innerHTML = originalText;
                submitBtn.className = submitBtn.className.replace('bg-success text-white', 'btn-primary');
                submitBtn.disabled = false;
            }, 3000);
            
        }, 2000);
    });
    
    // Notification function
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 p-4 rounded-xl shadow-lg z-50 ${
            type === 'success' ? 'bg-success text-white' : 'bg-error text-white'
        }`;
        notification.innerHTML = `
            <div class="flex items-center gap-3">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" class="ml-2">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
});
</script>
