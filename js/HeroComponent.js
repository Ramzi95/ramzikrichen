class HeroComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
                    <link rel="stylesheet" type="text/css" href="../css/index.css" />
                    <style>
                        :host {
                            display: block;
                            min-height: 100vh;
                            display: flex;
                            align-items: center;
                            color: white;
                            position: relative;
                            overflow: hidden;
                        }
                        
                        .hero-content {
                            position: relative;
                            z-index: 2;
                        }
                        
                        .hero-title {
                            font-size: 3rem;
                            font-weight: 700;
                            margin-bottom: 1rem;
                            animation: fadeInUp 1s ease;
                            position: relative;
                        }
                        
                        /* Light theme  */
                        .hero-title {
                            background: var(--headline-gradient);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                        }
                        
                        .hero-title::after {
                            content: '';
                            position: absolute;
                            bottom: -5px;
                            left: 0;
                            width: 100%;
                            height: 3px;
                            background: var(--accent-gradient);
                            border-radius: 2px;
                            animation: expandWidth 1.5s ease 0.5s both;
                        }
                        
                        .hero-subtitle {
                            font-size: 1.5rem;
                            font-weight: 600;
                            margin-bottom: 1.5rem;
                            opacity: 0.9;
                            animation: fadeInUp 1s ease 0.2s both;
                        }
                        
                        /* Light theme - gradient subtitle */
                        .hero-subtitle {
                            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                        }
                        
                        
                        
                        .hero-description {
                            font-size: 1rem;
                            margin-bottom: 2rem;
                            animation: fadeInUp 1s ease 0.4s both;
                            line-height: 1.6;
                        }
                        
                        /* Light theme - darker description text for better readability */
                        .hero-description {
                            color: #f7fafc;
                            font-weight: 500;
                        }
                        
                        
                        /* Light theme - gradient tech highlights */
                        .tech-highlight {
                            font-weight: 600;
                            position: relative;
                            padding: 0 2px;
                            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                        }

                        
                        .tech-highlight::after {
                            content: '';
                            position: absolute;
                            bottom: -2px;
                            left: 0;
                            width: 100%;
                            height: 2px;
                            background: var(--accent-gradient);
                            border-radius: 1px;
                            opacity: 0.3;
                        }
                        
                        .hero-buttons {
                            animation: fadeInUp 1s ease 0.6s both;
                        }
                        
                        .btn-hero {
                            border: none;
                            color: white;
                            padding: 15px 40px;
                            border-radius: 30px;
                            font-weight: 600;
                            font-size: 1.1rem;
                            text-decoration: none;
                            display: inline-block;
                            margin: 0 10px;
                            transition: all 0.3s ease;
                            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                        }
                        
                        /* Light theme - darker button background for better contrast */
                        .btn-hero {
                            background: linear-gradient(135deg, #4c63d2 0%, #6b46c1 100%);
                        }
                        

                        
                        .btn-hero:hover {
                            transform: translateY(-2px);
                            color: white;
                            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
                            filter: brightness(1.1);
                        }
                        
                        .hero-image {
                            text-align: center;
                            animation: fadeInUp 1s ease 0.8s both;
                        }
                        
                        .hero-image img {
                            width: 300px;
                            height: 300px;
                            border-radius: 50%;
                            object-fit: cover;
                            position: relative;
                            z-index: 2;
                            transition: transform 0.3s ease;
                        }
                        
                        .image-container {
                            position: relative;
                            display: inline-block;
                            padding: 8px;
                            border-radius: 50%;
                            background: var(--headline-gradient);
                            box-shadow: var(--shadow);
                            transition: all 0.3s ease;
                        }
                        
                        .image-container::before {
                            content: '';
                            position: absolute;
                            top: -4px;
                            left: -4px;
                            right: -4px;
                            bottom: -4px;
                            background: var(--primary-gradient);
                            border-radius: 50%;
                            z-index: -1;
                            opacity: 0;
                            transition: opacity 0.3s ease;
                        }

                        .image-container:hover {
                            transform: scale(1.05);
                            box-shadow: var(--shadow-hover);
                        }
                        
                        .image-container:hover::before {
                            opacity: 1;
                        }
                        
                        .image-container:hover img {
                            transform: scale(1.02);
                        }
                        
                        @keyframes fadeInUp {
                            from {
                                opacity: 0;
                                transform: translateY(30px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                        
                        @keyframes expandWidth {
                            from {
                                width: 0;
                            }
                            to {
                                width: 100%;
                            }
                        }
                        
                        @keyframes rotate {
                            from {
                                transform: translate(-50%, -50%) rotate(0deg);
                            }
                            to {
                                transform: translate(-50%, -50%) rotate(360deg);
                            }
                        }
                        
                        @media (max-width: 768px) {
                            .hero-title {
                                font-size: 1.8rem;
                            }
                            
                            .hero-subtitle {
                                font-size: 1.2rem;
                            }
                            
                            .hero-image img {
                                width: 250px;
                                height: 250px;
                            }
                            
                            .image-container::after {
                                width: 270px;
                                height: 270px;
                            }
                            
                            .hero-buttons .btn-hero {
                                margin: 10px;
                                width: 100%;
                                text-align: center;
                            }
                        }
                    </style>
                    
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
                    
                    <section id="hero" class="hero-section">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-6 mb-2">
                                    <div class="hero-content">
                                        <h6 class="hero-title">Hi, I'm Ramzi Krichen</h6>
                                        <p class="hero-subtitle">Full Stack Developer</p>
                                        <p class="hero-description">
                                            I specialize in <span class="tech-highlight">Next.js</span>, <span class="tech-highlight">React</span>, and <span class="tech-highlight">Angular</span> for frontend, <span class="tech-highlight">Node.js</span>-<span class="tech-highlight">Express.js</span> and <span class="tech-highlight">Python</span>-<span class="tech-highlight">FastAPI</span> for backend, 
                                            and <span class="tech-highlight">MongoDB</span> and <span class="tech-highlight">CouchDB</span> for databases. I excel at developing <span class="tech-highlight">RESTful APIs</span> using <span class="tech-highlight">Agile methodologies</span>.
                                        </p>
                                        <div class="hero-buttons">
                                            <a href="#projects" class="btn-hero">View My Work</a>
                                            <a href="#contact" class="btn-hero">Get In Touch</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="hero-image">
                                        <div class="image-container">
                                            <img src="../assets/myPhoto.png" alt="Ramzi Krichen" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                `;
  }
}
customElements.define("hero-component", HeroComponent);
