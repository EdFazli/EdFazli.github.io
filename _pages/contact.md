---
layout: default
title: Contact
permalink: /contact/
---

<div class="contact-page">
    <div class="container">
        <!-- Enhanced Contact Header -->
        <div class="contact-header">
            <div class="contact-header-content">
                <h1 class="contact-title">Let's Connect</h1>
                <p class="contact-description">I'd love to hear from you! Whether you have a question about a blog post, want to discuss a potential collaboration, or just want to say hello, I'm always open to meaningful conversations.</p>
                <div class="contact-highlights">
                    <div class="highlight-item">
                        <i class="fas fa-reply"></i>
                        <span>Quick Response</span>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-handshake"></i>
                        <span>Open to Collaboration</span>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-globe"></i>
                        <span>Global Availability</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Contact Content -->
        <div class="contact-main">
            <!-- Contact Methods Section -->
            <section class="contact-methods-section">
                <h2 class="section-title">
                    <i class="fas fa-address-book"></i>
                    Get In Touch
                </h2>
                <div class="contact-methods-grid">
                    <div class="contact-method primary-method">
                        <div class="method-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="method-content">
                            <h3>Email</h3>
                            <p>The best way to reach me for professional inquiries and detailed discussions</p>
                            <a href="mailto:{{ site.email }}" class="contact-link primary-link">
                                <span>{{ site.email }}</span>
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>

                    {% if site.linkedin_username %}
                    <div class="contact-method">
                        <div class="method-icon linkedin">
                            <i class="fab fa-linkedin"></i>
                        </div>
                        <div class="method-content">
                            <h3>LinkedIn</h3>
                            <p>Connect with me professionally and see my career journey</p>
                            <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank" class="contact-link">
                                <span>Professional Profile</span>
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                    {% endif %}

                    {% if site.twitter_username %}
                    <div class="contact-method">
                        <div class="method-icon twitter">
                            <i class="fab fa-twitter"></i>
                        </div>
                        <div class="method-content">
                            <h3>Twitter</h3>
                            <p>Follow me for tech updates, quick thoughts, and industry insights</p>
                            <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" class="contact-link">
                                <span>@{{ site.twitter_username }}</span>
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                    {% endif %}

                    {% if site.github_username %}
                    <div class="contact-method">
                        <div class="method-icon github">
                            <i class="fab fa-github"></i>
                        </div>
                        <div class="method-content">
                            <h3>GitHub</h3>
                            <p>Check out my code, open source contributions, and projects</p>
                            <a href="https://github.com/{{ site.github_username }}" target="_blank" class="contact-link">
                                <span>View Repositories</span>
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                    {% endif %}
                </div>
            </section>

            <!-- Contact Form Section -->
            <section class="contact-form-section">
                <div class="form-header">
                    <h2 class="section-title">
                        <i class="fas fa-paper-plane"></i>
                        Send a Message
                    </h2>
                    <p class="form-description">Fill out the form below and I'll get back to you as soon as possible. Please provide as much detail as you can to help me understand how I can assist you.</p>
                </div>
                
                <form class="enhanced-contact-form" action="https://formspree.io/f/your-form-id" method="POST">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="name">
                                <i class="fas fa-user"></i>
                                Full Name *
                            </label>
                            <input type="text" id="name" name="name" required placeholder="Enter your full name">
                        </div>
                        
                        <div class="form-group">
                            <label for="email">
                                <i class="fas fa-envelope"></i>
                                Email Address *
                            </label>
                            <input type="email" id="email" name="email" required placeholder="your.email@example.com">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="subject">
                                <i class="fas fa-tag"></i>
                                Subject *
                            </label>
                            <select id="subject" name="subject" required>
                                <option value="">Select a subject</option>
                                <option value="general">General Inquiry</option>
                                <option value="collaboration">Collaboration Opportunity</option>
                                <option value="speaking">Speaking Engagement</option>
                                <option value="consulting">Consulting Services</option>
                                <option value="technical">Technical Question</option>
                                <option value="feedback">Blog Feedback</option>
                                <option value="guest-post">Guest Post Proposal</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="company">
                                <i class="fas fa-building"></i>
                                Company/Organization
                            </label>
                            <input type="text" id="company" name="company" placeholder="Your company or organization">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">
                            <i class="fas fa-comment-alt"></i>
                            Message *
                        </label>
                        <textarea id="message" name="message" rows="6" required placeholder="Tell me about your project, question, or how I can help you. Please provide as much detail as possible..."></textarea>
                        <div class="character-count">
                            <span id="char-count">0</span> / 1000 characters
                        </div>
                    </div>
                    
                    <div class="form-group checkbox-group">
                        <label class="checkbox-label">
                            <input type="checkbox" name="newsletter" value="yes">
                            <span class="checkmark"></span>
                            <span class="checkbox-text">I'd like to receive updates about new blog posts and tech insights</span>
                        </label>
                    </div>
                    
                    <div class="form-actions">
                        <button type="submit" class="submit-button">
                            <i class="fas fa-paper-plane"></i>
                            <span>Send Message</span>
                        </button>
                        <p class="form-note">
                            <i class="fas fa-shield-alt"></i>
                            Your information is secure and will never be shared with third parties.
                        </p>
                    </div>
                </form>
            </section>
        </div>

        <!-- FAQ Section -->
        <section class="contact-faq-section">
            <h2 class="section-title">
                <i class="fas fa-question-circle"></i>
                Frequently Asked Questions
            </h2>
            
            <div class="faq-grid">
                <div class="faq-item">
                    <div class="faq-question">
                        <i class="fas fa-clock"></i>
                        <h3>How quickly do you respond?</h3>
                    </div>
                    <div class="faq-answer">
                        <p>I typically respond to emails within 24-48 hours during weekdays. For urgent matters, please mention it in the subject line and I'll prioritize your message.</p>
                    </div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">
                        <i class="fas fa-handshake"></i>
                        <h3>Do you offer consulting services?</h3>
                    </div>
                    <div class="faq-answer">
                        <p>Yes, I'm available for consulting on web development, cloud architecture, DevOps practices, and technical leadership. Please email me with details about your project and timeline.</p>
                    </div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">
                        <i class="fas fa-code"></i>
                        <h3>Can you review my code?</h3>
                    </div>
                    <div class="faq-answer">
                        <p>I'm happy to provide feedback on open source projects or help with specific technical questions. For extensive code reviews, I may suggest a consulting arrangement.</p>
                    </div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">
                        <i class="fas fa-microphone"></i>
                        <h3>Speaking engagements?</h3>
                    </div>
                    <div class="faq-answer">
                        <p>I enjoy speaking at conferences, meetups, and corporate events about web development, cloud computing, and technical leadership. Please reach out with event details and timeline.</p>
                    </div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">
                        <i class="fas fa-edit"></i>
                        <h3>Guest post submissions?</h3>
                    </div>
                    <div class="faq-answer">
                        <p>I occasionally accept high-quality guest posts that align with my blog's focus on technical content. Please email me with your proposal, writing samples, and topic outline.</p>
                    </div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">
                        <i class="fas fa-users"></i>
                        <h3>Collaboration opportunities?</h3>
                    </div>
                    <div class="faq-answer">
                        <p>I'm always interested in meaningful collaborations, whether it's co-authoring articles, joint projects, or knowledge sharing. Let's discuss how we can work together!</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Footer -->
        <section class="contact-footer-section">
            <div class="contact-info-grid">
                <div class="info-card">
                    <div class="info-icon">
                        <i class="fas fa-reply"></i>
                    </div>
                    <div class="info-content">
                        <h4>Response Time</h4>
                        <p>I aim to respond to all inquiries within 24-48 hours during business days</p>
                    </div>
                </div>
                
                <div class="info-card">
                    <div class="info-icon">
                        <i class="fas fa-calendar-check"></i>
                    </div>
                    <div class="info-content">
                        <h4>Availability</h4>
                        <p>Currently accepting new projects and collaboration opportunities</p>
                    </div>
                </div>
                
                <div class="info-card">
                    <div class="info-icon">
                        <i class="fas fa-globe-americas"></i>
                    </div>
                    <div class="info-content">
                        <h4>Time Zone</h4>
                        <p>EST (UTC-5) - I work with clients and collaborators globally</p>
                    </div>
                </div>
                
                <div class="info-card">
                    <div class="info-icon">
                        <i class="fas fa-language"></i>
                    </div>
                    <div class="info-content">
                        <h4>Languages</h4>
                        <p>English (Native), Available for international communication</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
