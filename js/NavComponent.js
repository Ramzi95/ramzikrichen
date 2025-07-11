class NavComponent extends HTMLElement {
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
                            position: sticky;
                            top: 0;
                            left: 0;
                            right: 0;
                            z-index: 1000;
                            backdrop-filter: blur(15px);
                            background: rgba(255, 255, 255, 0.1);
                            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                           
                        }
                        
                        
                        .navbar {
                            padding: 1rem 0;
                        }
                        
                        .navbar-brand {
                            font-size: 1.5rem;
                            font-weight: 800;
                            background: var(--headline-gradient);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                            text-decoration: none;
                            position: relative;
                            padding: 0.5rem 1.2rem;
                            border-radius: 25px;
                            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                            overflow: hidden;
                        }

                        
                        .navbar-brand::before {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background: var(--primary-gradient, linear-gradient(135deg, #667eea 0%, #764ba2 100%));
                            opacity: 0;
                            border-radius: 25px;
                            transition: opacity 0.3s ease;
                            z-index: -1;
                        }
                        
                        .navbar-brand:hover::before {
                            opacity: 0.1;
                        }
                        
                        .navbar-brand:hover {
                            transform: translateY(-3px) scale(1.05);
                            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
                        }
                        
                        
                        
                        .navbar-nav .nav-link {
                            color: #F8F9FA;
                            font-weight: 600;
                            margin: 0 8px;
                            padding: 0.6rem 1.2rem;
                            border-radius: 15px;
                            text-decoration: none;
                            cursor: pointer;
                            position: relative;
                            overflow: hidden;
                            background: var(--headline-gradient);
                            backdrop-filter: blur(10px);
                            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                            border: 1px solid rgba(255, 255, 255, 0.6);
                            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                        }
                        
                        .navbar-nav .nav-link::before {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background: var(--primary-gradient, linear-gradient(135deg, #667eea 0%, #764ba2 100%));
                            opacity: 0;
                            transition: opacity 0.4s ease;
                            z-index: -1;
                        }
                        

                        
                        .navbar-nav .nav-link:hover::before {
                            opacity: 1;
                        }
                        
                        .navbar-nav .nav-link:hover {
                            color: white;
                            transform: translateY(-4px) scale(1.05);
                            box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
                            border-color: rgba(255, 255, 255, 0.8);
                            background: transparent;
                        }
                        
                        .navbar-nav .nav-link:nth-child(even):hover {
                            box-shadow: 0 15px 35px rgba(240, 147, 251, 0.4);
                        }
                        
                        .navbar-nav .nav-link:nth-child(3):hover {
                            box-shadow: 0 15px 35px rgba(79, 172, 254, 0.4);
                        }
                        

                        
                        /* Add a subtle glow effect */
                        .navbar-nav .nav-link:hover {
                            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
                        }
                        
                        /* Active state styling with light text color */
                        .navbar-nav .nav-link.active {
                            color: #F8F9FA !important;
                            background: transparent;
                            transform: translateY(-2px);
                            box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
                            border-color: rgba(255, 255, 255, 0.8);
                            text-shadow: 0 0 10px rgba(248, 249, 250, 0.5);
                            position: relative;
                        }
                        
                        .navbar-nav .nav-link.active::before {
                            opacity: 0.15;
                        }
                        
                       
                        
                        
                        /* Mobile-specific styles */
                        @media (max-width: 991px) {
                            
                            
                            .navbar {
                                padding: 0.5rem 0;
                            }
                            
                            .navbar-brand {
                                font-size: 1.2rem;
                                padding: 0.4rem 1rem;
                            }
                            
                            .navbar-nav .nav-link {
                                font-size: 0.85rem;
                                padding: 0.4rem 0.8rem;
                                margin: 0 4px;
                            }
                        }
                        
                        /* Even smaller screens */
                        @media (max-width: 576px) {
                            :host {
                                min-height: 75px;
                            }
                            
                            .navbar {
                                padding: 0.3rem 0;
                            }
                            
                            .navbar-brand {
                                font-size: 1.1rem;
                                padding: 0.3rem 0.8rem;
                                margin-bottom:10px;
                            }
                            
                            .navbar-nav .nav-link {
                                font-size: 0.8rem;
                                padding: 0.3rem 0.6rem;
                                margin: 0 2px;
                            }
                        }
                        
                        /* Pulse animation for brand */
                        @keyframes pulse {
                            0% { transform: scale(1); }
                            50% { transform: scale(1.05); }
                            100% { transform: scale(1); }
                        }
                        
                        .navbar-brand:focus {
                            animation: pulse 0.6s ease-in-out;
                        }
                        
                        /* Shimmer effect for nav links */
                        @keyframes shimmer {
                            0% { background-position: -200% 0; }
                            100% { background-position: 200% 0; }
                        }
                        
                        .navbar-nav .nav-link:focus {
                            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                            background-size: 200% 100%;
                            animation: shimmer 1s ease-in-out;
                        }

                        
                    </style>
                    
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
                    
                    <nav class="navbar navbar-expand-lg">
                        <div class="container d-flex justify-content-between align-items-center">
                            <a class="navbar-brand" href="#hero">Ramzi Krichen</a>
                            <div class="navbar-nav d-flex flex-row">
                                <a class="nav-link" data-target="hero">Home</a>
                                <a class="nav-link" data-target="projects">Projects</a>
                                <a class="nav-link" data-target="skills">Skills</a>
                                <a class="nav-link" data-target="contact">Contact</a>
                            </div>
                        </div>
                    </nav>
                `;

    // Add event listeners for smooth scrolling and active state
    this.shadowRoot.addEventListener("click", (e) => {
      if (e.target.classList.contains("nav-link") && e.target.dataset.target) {
        e.preventDefault();

        // Remove active class from all nav links
        this.shadowRoot.querySelectorAll(".nav-link").forEach((link) => {
          link.classList.remove("active");
        });

        // Add active class to clicked link
        e.target.classList.add("active");

        const targetId = e.target.dataset.target;
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const navbarHeight = this.getBoundingClientRect().height;
          const targetPosition = targetElement.offsetTop - navbarHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });

    // Set initial active state
    this.setActiveNavLink();
  }

  setActiveNavLink() {
    // Set the first nav link as active by default
    const firstNavLink = this.shadowRoot.querySelector(".nav-link");
    if (firstNavLink) {
      firstNavLink.classList.add("active");
    }
  }
}

customElements.define("nav-component", NavComponent);
