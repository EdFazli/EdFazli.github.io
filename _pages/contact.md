---
layout: default
title: Contact
permalink: /contact/
---

<!-- Contact Header -->
<section class="contact-header-section">
    <div class="container">
        <div class="contact-header-content">
            <h1 class="contact-main-title">
                Let's Connect
            </h1>
            <p class="contact-main-description">
                Have a question, want to collaborate, or just say hello? I'd love to hear from you. 
                Let's start a conversation about technology, projects, or anything that interests you.
            </p>
            <div class="contact-highlights">
                <div class="contact-highlight-item">
                    <i class="fas fa-reply"></i>
                    <span>24h Response Time</span>
                </div>
                <div class="contact-highlight-item">
                    <i class="fas fa-globe"></i>
                    <span>Available Worldwide</span>
                </div>
                <div class="contact-highlight-item">
                    <i class="fas fa-handshake"></i>
                    <span>Open to Collaboration</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Contact Methods -->
<section class="contact-methods-section">
    <div class="container">
        <div class="contact-methods-grid">
            <!-- Email -->
            <div class="contact-method-card">
                <div class="contact-method-icon email-icon">
                    <i class="fas fa-envelope"></i>
                </div>
                <h3>Email</h3>
                <p>Best for detailed discussions</p>
                <a href="mailto:{{ site.email }}" class="contact-method-link">
                    {{ site.email }}
                </a>
            </div>
            
            <!-- LinkedIn -->
            {% if site.linkedin_username %}
            <div class="contact-method-card">
                <div class="contact-method-icon linkedin-icon">
                    <i class="fab fa-linkedin"></i>
                </div>
                <h3>LinkedIn</h3>
                <p>Professional networking</p>
                <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank" class="contact-method-link">
                    Connect with me
                </a>
            </div>
            {% endif %}
            
            <!-- GitHub -->
            {% if site.github_username %}
            <div class="contact-method-card">
                <div class="contact-method-icon github-icon">
                    <i class="fab fa-github"></i>
                </div>
                <h3>GitHub</h3>
                <p>Code & open source</p>
                <a href="https://github.com/{{ site.github_username }}" target="_blank" class="contact-method-link">
                    View repositories
                </a>
            </div>
            {% endif %}
            
            <!-- Twitter -->
            {% if site.twitter_username %}
            <div class="contact-method-card">
                <div class="contact-method-icon twitter-icon">
                    <i class="fab fa-twitter"></i>
                </div>
                <h3>Twitter</h3>
                <p>Quick updates & thoughts</p>
                <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" class="contact-method-link">
                    Follow me
                </a>
            </div>
            {% endif %}
        </div>
        
        <!-- Contact Form -->
        <div class="contact-form-wrapper">
            <div class="contact-form-container">
                <div class="contact-form-header">
                    <h2>Send me a message</h2>
                    <p>Fill out the form below and I'll get back to you as soon as possible.</p>
                </div>
                
                <form id="contact-form" class="contact-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="name">Full Name *</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                class="form-input"
                                placeholder="Enter your full name"
                            >
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                class="form-input"
                                placeholder="your.email@example.com"
                            >
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">Subject *</label>
                        <select 
                            id="subject" 
                            name="subject" 
                            required 
                            class="form-select"
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
                    
                    <div class="form-group">
                        <label for="message">Message *</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="6" 
                            required 
                            class="form-textarea"
                            placeholder="Tell me about your project, question, or how I can help you..."
                        ></textarea>
                        <div class="char-counter">
                            <span id="char-count">0</span> / 1000 characters
                        </div>
                    </div>
                    
                    <div class="form-checkbox-group">
                        <input type="checkbox" id="newsletter" name="newsletter">
                        <label for="newsletter" class="checkbox-label">
                            I'd like to receive updates about new blog posts and tech insights
                        </label>
                    </div>
                    
                    <div class="form-submit-section">
                        <button 
                            type="submit" 
                            class="btn btn-primary btn-lg form-submit-btn"
                            id="submit-btn"
                        >
                            <i class="fas fa-paper-plane"></i>
                            Send Message
                        </button>
                        <p class="form-security-note">
                            <i class="fas fa-shield-alt"></i>
                            Your information is secure and will never be shared.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

<!-- FAQ Section -->
<section class="contact-faq-section">
    <div class="container">
        <div class="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
        </div>
        
        <div class="faq-grid">
            <div class="faq-card">
                <h3>
                    <i class="fas fa-clock"></i>
                    How quickly do you respond?
                </h3>
                <p>I typically respond within 24 hours during weekdays. For urgent matters, please mention it in the subject line.</p>
            </div>
            
            <div class="faq-card">
                <h3>
                    <i class="fas fa-handshake"></i>
                    Do you offer consulting?
                </h3>
                <p>Yes, I'm available for consulting on web development, cloud architecture, and technical leadership projects.</p>
            </div>
            
            <div class="faq-card">
                <h3>
                    <i class="fas fa-microphone"></i>
                    Speaking engagements?
                </h3>
                <p>I enjoy speaking at conferences and meetups about web development, cloud computing, and technical leadership.</p>
            </div>
            
            <div class="faq-card">
                <h3>
                    <i class="fas fa-code"></i>
                    Code reviews?
                </h3>
                <p>I'm happy to provide feedback on open source projects or help with specific technical questions.</p>
            </div>
        </div>
    </div>
</section>
