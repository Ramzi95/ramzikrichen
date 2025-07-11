class FooterComponent extends HTMLElement {
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
                            color: white;
                            padding: 3rem 0 1rem;
                        }
                        
                        .footer-content {
                            text-align: center;
                        }
                        
                        .footer-title {
                            font-size: 1.5rem;
                            font-weight: 700;
                            margin-bottom: 1rem;
                            background: var(--headline-gradient);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                        }

                        .footer-description {
                            margin-bottom: 2rem;
                            opacity: 0.8;
                            max-width: 600px;
                            margin-left: auto;
                            margin-right: auto;
                        }
                        
                        .social-links {
                            display: flex;
                            justify-content: center;
                            gap: 1rem;
                            margin-bottom: 2rem;
                        }
                        
                        .social-link {
                            background: rgba(255, 255, 255, 0.1);
                            color: white;
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            text-decoration: none;
                            font-size: 1.2rem;
                            transition: all 0.3s ease;
                            backdrop-filter: blur(10px);
                        }
                        
                        .social-link:hover {
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            transform: translateY(-3px);
                            color: white;
                        }
                        
                        .footer-bottom {
                            border-top: 1px solid rgba(255, 255, 255, 0.1);
                            padding-top: 2rem;
                            text-align: center;
                            opacity: 0.7;
                        }
                        
                        @media (max-width: 768px) {
                            .social-links {
                                flex-wrap: wrap;
                            }
                        }
                    </style>
                    
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
                    
                    <footer class="footer-section pt-5">
                        <hr class="hr w-75 mx-auto my-4 border border-light opacity-50" />


                        <div class="container">
                            <div class="footer-content">
                                <h3 class="footer-title">Ramzi Krichen</h3>
                                <p class="footer-description">
                                    Full Stack Developer specializing in modern web technologies. 
                                    Let's build something amazing together.
                                </p>
                                
                                <div class="social-links">
                                    <a href="mailto:ramzikrichen95@gmail.com" class="social-link">
                                        <i class="fas fa-envelope"></i>
                                    </a>
                                    <a href="tel:+21628654512" class="social-link">
                                        <i class="fas fa-phone"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/ramzikrichen/" target='_blank' class="social-link">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                    <a href="https://github.com/Ramzi95" target='_blank' class="social-link">
                                        <i class="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            
                            <div class="footer-bottom">
                                <p class='mb-0'>&copy; 2025 Ramzi Krichen. All rights reserved.</p>
                            </div>
                        </div>
                    </footer>
                `;
  }
}

customElements.define("footer-component", FooterComponent);
