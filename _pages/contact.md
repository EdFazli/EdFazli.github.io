---
layout: default
title: Contact
permalink: /contact/
---

<div class="contact-page">
    <div class="container">
        <div class="contact-header">
            <h1>Get In Touch</h1>
            <p>I'd love to hear from you! Whether you have a question about a blog post, want to discuss a potential collaboration, or just want to say hello, feel free to reach out.</p>
        </div>

        <div class="contact-content">
            <div class="contact-methods">
                <div class="contact-method">
                    <div class="contact-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="contact-info">
                        <h3>Email</h3>
                        <p>The best way to reach me for professional inquiries</p>
                        <a href="mailto:{{ site.email }}" class="contact-link">{{ site.email }}</a>
                    </div>
                </div>

                {% if site.linkedin_username %}
                <div class="contact-method">
                    <div class="contact-icon">
                        <i class="fab fa-linkedin"></i>
                    </div>
                    <div class="contact-info">
                        <h3>LinkedIn</h3>
                        <p>Connect with me professionally</p>
                        <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank" class="contact-link">LinkedIn Profile</a>
                    </div>
                </div>
                {% endif %}

                {% if site.twitter_username %}
                <div class="contact-method">
                    <div class="contact-icon">
                        <i class="fab fa-twitter"></i>
                    </div>
                    <div class="contact-info">
                        <h3>Twitter</h3>
                        <p>Follow me for tech updates and quick thoughts</p>
                        <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" class="contact-link">@{{ site.twitter_username }}</a>
                    </div>
                </div>
                {% endif %}

                {% if site.github_username %}
                <div class="contact-method">
                    <div class="contact-icon">
                        <i class="fab fa-github"></i>
                    </div>
                    <div class="contact-info">
                        <h3>GitHub</h3>
                        <p>Check out my code and open source contributions</p>
                        <a href="https://github.com/{{ site.github_username }}" target="_blank" class="contact-link">GitHub Profile</a>
                    </div>
                </div>
                {% endif %}
            </div>

            <div class="contact-form-section">
                <h2>Send Me a Message</h2>
                <p>Fill out the form below and I'll get back to you as soon as possible.</p>
                
                <form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
                    <div class="form-group">
                        <label for="name">Name *</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email *</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">Subject *</label>
                        <select id="subject" name="subject" required>
                            <option value="">Select a subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="collaboration">Collaboration</option>
                            <option value="speaking">Speaking Opportunity</option>
                            <option value="technical">Technical Question</option>
                            <option value="feedback">Blog Feedback</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Message *</label>
                        <textarea id="message" name="message" rows="6" required placeholder="Tell me about your project, question, or how I can help you..."></textarea>
                    </div>
                    
                    <div class="form-group">
                        <button type="submit" class="submit-btn">
                            <i class="fas fa-paper-plane"></i>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div class="contact-faq">
            <h2>Frequently Asked Questions</h2>
            
            <div class="faq-item">
                <h3>How quickly do you respond to emails?</h3>
                <p>I typically respond to emails within 24-48 hours during weekdays. For urgent matters, please mention it in the subject line.</p>
            </div>
            
            <div class="faq-item">
                <h3>Do you offer consulting services?</h3>
                <p>Yes, I'm available for consulting on web development, cloud architecture, and technical leadership. Please email me with details about your project.</p>
            </div>
            
            <div class="faq-item">
                <h3>Can you review my code or provide technical feedback?</h3>
                <p>I'm happy to provide feedback on open source projects or help with specific technical questions. For extensive code reviews, I may suggest a consulting arrangement.</p>
            </div>
            
            <div class="faq-item">
                <h3>Are you available for speaking engagements?</h3>
                <p>I enjoy speaking at conferences, meetups, and corporate events about web development, cloud computing, and technical leadership. Please reach out with event details.</p>
            </div>
            
            <div class="faq-item">
                <h3>Do you accept guest post submissions?</h3>
                <p>I occasionally accept high-quality guest posts that align with my blog's focus on technical content. Please email me with your proposal and writing samples.</p>
            </div>
        </div>

        <div class="contact-footer">
            <div class="response-time">
                <i class="fas fa-clock"></i>
                <div>
                    <h4>Response Time</h4>
                    <p>I aim to respond to all inquiries within 24-48 hours</p>
                </div>
            </div>
            
            <div class="availability">
                <i class="fas fa-calendar"></i>
                <div>
                    <h4>Availability</h4>
                    <p>Currently accepting new projects and collaborations</p>
                </div>
            </div>
            
            <div class="timezone">
                <i class="fas fa-globe"></i>
                <div>
                    <h4>Time Zone</h4>
                    <p>EST (UTC-5) - I work with clients globally</p>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.contact-page {
    padding: var(--spacing-3xl) 0;
}

.contact-header {
    text-align: center;
    margin-bottom: var(--spacing-3xl);
}

.contact-header h1 {
    color: var(--accent-primary);
    margin-bottom: var(--spacing-lg);
}

.contact-header p {
    font-size: var(--font-size-lg);
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-3xl);
    margin-bottom: var(--spacing-3xl);
}

.contact-methods {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);
}

.contact-method {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-lg);
    padding: var(--spacing-lg);
    background-color: var(--bg-secondary);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-color);
    transition: all 0.2s ease;
}

.contact-method:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.contact-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: var(--accent-primary);
    color: white;
    border-radius: var(--radius-md);
    font-size: var(--font-size-xl);
    flex-shrink: 0;
}

.contact-info h3 {
    margin-bottom: var(--spacing-sm);
    color: var(--text-primary);
}

.contact-info p {
    color: var(--text-secondary);
    margin-bottom: var(--spacing-sm);
    font-size: var(--font-size-sm);
}

.contact-link {
    color: var(--accent-primary);
    font-weight: 500;
    text-decoration: none;
}

.contact-link:hover {
    color: var(--accent-secondary);
}

.contact-form-section {
    background-color: var(--bg-secondary);
    padding: var(--spacing-2xl);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-color);
}

.contact-form-section h2 {
    color: var(--accent-primary);
    margin-bottom: var(--spacing-md);
}

.contact-form-section > p {
    color: var(--text-secondary);
    margin-bottom: var(--spacing-xl);
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    margin-bottom: var(--spacing-sm);
    font-weight: 500;
    color: var(--text-primary);
}

.form-group input,
.form-group select,
.form-group textarea {
    padding: var(--spacing-md);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-size: var(--font-size-base);
    transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

.submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-md) var(--spacing-xl);
    background-color: var(--accent-primary);
    color: white;
    border: none;
    border-radius: var(--radius-md);
    font-size: var(--font-size-base);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
}

.submit-btn:hover {
    background-color: var(--accent-secondary);
    transform: translateY(-1px);
}

.submit-btn:active {
    transform: translateY(0);
}

.contact-faq {
    margin-bottom: var(--spacing-3xl);
}

.contact-faq h2 {
    color: var(--accent-primary);
    margin-bottom: var(--spacing-xl);
    text-align: center;
}

.faq-item {
    margin-bottom: var(--spacing-xl);
    padding: var(--spacing-lg);
    background-color: var(--bg-secondary);
    border-radius: var(--radius-md);
    border: 1px solid var(--border-color);
}

.faq-item h3 {
    color: var(--text-primary);
    margin-bottom: var(--spacing-md);
}

.faq-item p {
    color: var(--text-secondary);
    margin: 0;
}

.contact-footer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-xl);
    padding: var(--spacing-2xl);
    background-color: var(--bg-secondary);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-color);
}

.contact-footer > div {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
}

.contact-footer i {
    color: var(--accent-primary);
    font-size: var(--font-size-xl);
    margin-top: var(--spacing-xs);
}

.contact-footer h4 {
    margin-bottom: var(--spacing-sm);
    color: var(--text-primary);
}

.contact-footer p {
    margin: 0;
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
}

@media (max-width: 768px) {
    .contact-content {
        grid-template-columns: 1fr;
        gap: var(--spacing-2xl);
    }
    
    .contact-method {
        flex-direction: column;
        text-align: center;
    }
    
    .contact-form-section {
        padding: var(--spacing-lg);
    }
    
    .contact-footer {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .contact-footer > div {
        flex-direction: column;
        align-items: center;
    }
}
</style>
