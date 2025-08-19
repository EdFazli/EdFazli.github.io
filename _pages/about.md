---
layout: default
title: About
permalink: /about/
---

<div class="about-page">
    <div class="container">
        <div class="about-header">
            <div class="about-avatar">
                <img src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="{{ site.author.name }}" class="avatar-image">
            </div>
            <div class="about-intro">
                <h1>About {{ site.author.name }}</h1>
                <p class="about-tagline">{{ site.author.bio }}</p>
                <div class="about-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>{{ site.author.location }}</span>
                </div>
            </div>
        </div>

        <div class="about-content">
            <div class="about-section">
                <h2>Hello, I'm Ed!</h2>
                <p>Welcome to my technical blog! I'm a passionate software developer with over 8 years of experience building scalable web applications, cloud infrastructure, and leading development teams.</p>
                
                <p>I specialize in modern web technologies, cloud computing (particularly AWS), and DevOps practices. Through this blog, I share my experiences, insights, and lessons learned from working on diverse projects ranging from startup MVPs to enterprise-scale applications.</p>
                
                <p>When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community through writing and speaking at tech events.</p>
            </div>

            <div class="about-section">
                <h2>What I Do</h2>
                <div class="skills-grid">
                    <div class="skill-category">
                        <h3><i class="fas fa-code"></i> Development</h3>
                        <ul>
                            <li>Full-stack web development</li>
                            <li>JavaScript/TypeScript, Python, Java</li>
                            <li>React, Node.js, Express</li>
                            <li>RESTful APIs and GraphQL</li>
                        </ul>
                    </div>
                    
                    <div class="skill-category">
                        <h3><i class="fas fa-cloud"></i> Cloud & Infrastructure</h3>
                        <ul>
                            <li>AWS (Lambda, EC2, S3, RDS)</li>
                            <li>Docker and Kubernetes</li>
                            <li>Infrastructure as Code (Terraform)</li>
                            <li>Serverless architectures</li>
                        </ul>
                    </div>
                    
                    <div class="skill-category">
                        <h3><i class="fas fa-cogs"></i> DevOps & Tools</h3>
                        <ul>
                            <li>CI/CD pipelines (GitHub Actions, Jenkins)</li>
                            <li>Monitoring and logging</li>
                            <li>Database design and optimization</li>
                            <li>Performance optimization</li>
                        </ul>
                    </div>
                    
                    <div class="skill-category">
                        <h3><i class="fas fa-users"></i> Leadership</h3>
                        <ul>
                            <li>Technical team leadership</li>
                            <li>Code review and mentoring</li>
                            <li>Architecture design</li>
                            <li>Agile methodologies</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="about-section">
                <h2>My Journey</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-date">2023 - Present</div>
                        <div class="timeline-content">
                            <h4>Senior Software Engineer</h4>
                            <p>Leading development of cloud-native applications and mentoring junior developers. Focus on AWS serverless architectures and microservices.</p>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-date">2020 - 2023</div>
                        <div class="timeline-content">
                            <h4>Full Stack Developer</h4>
                            <p>Built and maintained multiple web applications using React, Node.js, and AWS. Implemented CI/CD pipelines and improved deployment processes.</p>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-date">2018 - 2020</div>
                        <div class="timeline-content">
                            <h4>Software Developer</h4>
                            <p>Started my professional journey developing enterprise applications. Gained experience in database design, API development, and agile methodologies.</p>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-date">2016 - 2018</div>
                        <div class="timeline-content">
                            <h4>Computer Science Degree</h4>
                            <p>Graduated with a Bachelor's degree in Computer Science. Focused on algorithms, data structures, and software engineering principles.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="about-section">
                <h2>Why I Write</h2>
                <p>I believe in the power of sharing knowledge and experiences with the developer community. Through this blog, I aim to:</p>
                
                <ul class="about-goals">
                    <li><strong>Share practical insights:</strong> Real-world solutions to common development challenges</li>
                    <li><strong>Explore new technologies:</strong> Deep dives into emerging tools and frameworks</li>
                    <li><strong>Document my learning:</strong> Lessons learned from successes and failures</li>
                    <li><strong>Build community:</strong> Connect with fellow developers and foster discussions</li>
                </ul>
                
                <p>Every post is written with the goal of providing actionable value that you can apply in your own projects.</p>
            </div>

            <div class="about-section">
                <h2>Let's Connect</h2>
                <p>I'm always interested in connecting with fellow developers, discussing new technologies, or exploring collaboration opportunities.</p>
                
                <div class="connect-links">
                    {% if site.github_username %}
                        <a href="https://github.com/{{ site.github_username }}" class="connect-link github" target="_blank">
                            <i class="fab fa-github"></i>
                            <span>Follow me on GitHub</span>
                        </a>
                    {% endif %}
                    
                    {% if site.linkedin_username %}
                        <a href="https://linkedin.com/in/{{ site.linkedin_username }}" class="connect-link linkedin" target="_blank">
                            <i class="fab fa-linkedin"></i>
                            <span>Connect on LinkedIn</span>
                        </a>
                    {% endif %}
                    
                    {% if site.twitter_username %}
                        <a href="https://twitter.com/{{ site.twitter_username }}" class="connect-link twitter" target="_blank">
                            <i class="fab fa-twitter"></i>
                            <span>Follow on Twitter</span>
                        </a>
                    {% endif %}
                    
                    <a href="{{ '/contact' | relative_url }}" class="connect-link email">
                        <i class="fas fa-envelope"></i>
                        <span>Send me an email</span>
                    </a>
                </div>
            </div>

            <div class="about-section">
                <h2>Fun Facts</h2>
                <div class="fun-facts">
                    <div class="fun-fact">
                        <i class="fas fa-coffee"></i>
                        <p>I've consumed approximately 2,920 cups of coffee while coding (and counting!)</p>
                    </div>
                    
                    <div class="fun-fact">
                        <i class="fas fa-book"></i>
                        <p>I read at least one technical book every month to stay current with industry trends</p>
                    </div>
                    
                    <div class="fun-fact">
                        <i class="fas fa-mountain"></i>
                        <p>I enjoy hiking and find that nature walks often lead to my best coding insights</p>
                    </div>
                    
                    <div class="fun-fact">
                        <i class="fas fa-gamepad"></i>
                        <p>I'm working on a side project: a web-based game using Canvas API and WebGL</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.about-page {
    padding: var(--spacing-3xl) 0;
}

.about-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-2xl);
    margin-bottom: var(--spacing-3xl);
    padding: var(--spacing-2xl);
    background-color: var(--bg-secondary);
    border-radius: var(--radius-lg);
}

.about-avatar {
    flex-shrink: 0;
}

.avatar-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--accent-primary);
}

.about-intro h1 {
    margin-bottom: var(--spacing-md);
    color: var(--text-primary);
}

.about-tagline {
    font-size: var(--font-size-lg);
    color: var(--text-secondary);
    margin-bottom: var(--spacing-md);
}

.about-location {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    color: var(--text-muted);
}

.about-section {
    margin-bottom: var(--spacing-3xl);
}

.about-section h2 {
    color: var(--accent-primary);
    margin-bottom: var(--spacing-lg);
    border-bottom: 2px solid var(--border-color);
    padding-bottom: var(--spacing-sm);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-xl);
    margin-top: var(--spacing-lg);
}

.skill-category {
    background-color: var(--bg-secondary);
    padding: var(--spacing-lg);
    border-radius: var(--radius-md);
    border: 1px solid var(--border-color);
}

.skill-category h3 {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    color: var(--accent-primary);
    margin-bottom: var(--spacing-md);
}

.skill-category ul {
    list-style: none;
    padding: 0;
}

.skill-category li {
    padding: var(--spacing-xs) 0;
    color: var(--text-secondary);
    border-bottom: 1px solid var(--border-color);
}

.skill-category li:last-child {
    border-bottom: none;
}

.timeline {
    position: relative;
    padding-left: var(--spacing-xl);
}

.timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: var(--accent-primary);
}

.timeline-item {
    position: relative;
    margin-bottom: var(--spacing-xl);
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: -25px;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--accent-primary);
    border: 3px solid var(--bg-primary);
}

.timeline-date {
    font-weight: 600;
    color: var(--accent-primary);
    margin-bottom: var(--spacing-sm);
}

.timeline-content h4 {
    margin-bottom: var(--spacing-sm);
    color: var(--text-primary);
}

.about-goals {
    list-style: none;
    padding: 0;
}

.about-goals li {
    padding: var(--spacing-sm) 0;
    border-left: 3px solid var(--accent-primary);
    padding-left: var(--spacing-md);
    margin-bottom: var(--spacing-sm);
}

.connect-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-md);
    margin-top: var(--spacing-lg);
}

.connect-link {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    background-color: var(--bg-secondary);
    border-radius: var(--radius-md);
    text-decoration: none;
    color: var(--text-primary);
    transition: all 0.2s ease;
    border: 1px solid var(--border-color);
}

.connect-link:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.connect-link.github:hover { background-color: #333; color: white; }
.connect-link.linkedin:hover { background-color: #0077b5; color: white; }
.connect-link.twitter:hover { background-color: #1da1f2; color: white; }
.connect-link.email:hover { background-color: var(--accent-primary); color: white; }

.fun-facts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-lg);
    margin-top: var(--spacing-lg);
}

.fun-fact {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
    background-color: var(--bg-secondary);
    border-radius: var(--radius-md);
    border: 1px solid var(--border-color);
}

.fun-fact i {
    color: var(--accent-primary);
    font-size: var(--font-size-xl);
    margin-top: var(--spacing-xs);
}

.fun-fact p {
    margin: 0;
    color: var(--text-secondary);
}

@media (max-width: 768px) {
    .about-header {
        flex-direction: column;
        text-align: center;
    }
    
    .avatar-image {
        width: 120px;
        height: 120px;
    }
    
    .skills-grid {
        grid-template-columns: 1fr;
    }
    
    .connect-links {
        grid-template-columns: 1fr;
    }
    
    .fun-facts {
        grid-template-columns: 1fr;
    }
}
</style>
