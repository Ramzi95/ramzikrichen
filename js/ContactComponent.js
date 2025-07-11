class ContactComponent extends HTMLElement {
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
                            padding: 80px 0;
                        }
                        
                        .section-title {
                            text-align: center;
                            font-size: 3rem;
                            font-weight: 700;
                            margin-bottom: 3rem;
                        }

                        /* Light theme */
                        .section-title {
                            background: var(--headline-gradient);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                        }

                        
                        .contact-form {
                            background: rgba(255, 255, 255, 0.1);
                            backdrop-filter: blur(10px);
                            border-radius: 20px;
                            border: 1px solid rgba(255, 255, 255, 0.2);
                            padding: 3rem;
                            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                        }
                        
                        .form-group {
                            margin-bottom: 1.5rem;
                        }
                        
                        .form-label {
                            font-weight: 600;
                            margin-bottom: 0.5rem;
                            color: #f8f9fa;
                        }

                        
                        .form-control {
                            background: rgba(255, 255, 255, 0.1);
                            border: 1px solid rgba(255, 255, 255, 0.2);
                            border-radius: 10px;
                            padding: 12px 15px;
                            font-size: 1rem;
                            transition: all 0.3s ease;
                            color: #333;
                        }

                        
                        .form-control:focus {
                            outline: none;
                            border-color: #667eea;
                            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
                            background: rgba(255, 255, 255, 0.2);
                        }
                        
                        .form-control::placeholder {
                            color: rgba(51, 51, 51, 0.6);
                        }
                        

                        
                        .btn-submit {
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            border: none;
                            color: white;
                            padding: 15px 40px;
                            border-radius: 30px;
                            font-weight: 600;
                            font-size: 1.1rem;
                            transition: all 0.3s ease;
                            cursor: pointer;
                            width: 100%;
                            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                        }
                        
                        .btn-submit:hover {
                            transform: translateY(-2px);
                            box-shadow: 0 15px 40px rgba(0,0,0,0.2);
                        }
                        
                        .btn-submit:disabled {
                            opacity: 0.6;
                            cursor: not-allowed;
                            transform: none;
                        }
                        
                        .contact-info {
                            display: flex;
                            flex-direction: column;
                            gap: 2rem;
                        }
                        
                        .contact-item {
                            display: flex;
                            align-items: center;
                            gap: 1rem;
                            background: rgba(255, 255, 255, 0.1);
                            backdrop-filter: blur(10px);
                            border-radius: 15px;
                            padding: 1.5rem;
                            border: 1px solid rgba(255, 255, 255, 0.2);
                        }
                        
                        .contact-icon {
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 1.2rem;
                        }
                        
                        .contact-details h4 {
                            margin: 0;
                            font-size: 1.1rem;
                            font-weight: 600;
                            color: #f8f9fa;
                        }
                        

                        
                        .contact-details p {
                            margin: 0.5rem 0 0 0;
                            font-weight:bold;
                            background: var(--headline-gradient);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                        }
                        

                        
                        .success-message {
                            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                            color: white;
                            padding: 1rem;
                            border-radius: 10px;
                            margin-bottom: 1rem;
                            text-align: center;
                            display: none;
                        }
                        
                        .error-message {
                            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                            color: white;
                            padding: 1rem;
                            border-radius: 10px;
                            margin-bottom: 1rem;
                            text-align: center;
                            display: none;
                        }
                        
                        @media (max-width: 768px) {
                            .contact-form {
                                padding: 2rem;
                            }
                        }
                    </style>
                    
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
                    
                    <section id="contact" class="contact-section pb-5">
                        <div class="container">
                            <h2 class="section-title">Get In Touch</h2>
                            <div class="row">
                                <div class="col-lg-8">
                                    <form class="contact-form" id="contactForm">
                                        <div class="success-message" id="successMessage">
                                            Thank you! Your message has been sent successfully.
                                        </div>
                                        <div class="error-message" id="errorMessage">
                                            Sorry, there was an error sending your message. Please try again.
                                        </div>
                                        
                                        <div class="form-group">
                                            <label class="form-label">Name</label>
                                            <input type="text" class="form-control" name="user_name" required placeholder="Your Name">
                                        </div>
                                        
                                        <div class="form-group">
                                            <label class="form-label">Email</label>
                                            <input type="email" class="form-control" name="user_email" required placeholder="your.email@example.com">
                                        </div>
                                        
                                        <div class="form-group">
                                            <label class="form-label">Subject</label>
                                            <input type="text" class="form-control" name="subject" required placeholder="Subject">
                                        </div>
                                        
                                        <div class="form-group">
                                            <label class="form-label">Message</label>
                                            <textarea class="form-control" name="message" rows="5" required placeholder="Your message here..."></textarea>
                                        </div>
                                        
                                        <button type="submit" class="btn-submit">
                                            <i class="fas fa-paper-plane"></i> Send Message
                                        </button>
                                    </form>
                                </div>
                                <div class="col-lg-4">
                                    <div class="contact-info">
                                        <div class="contact-item">
                                            <div class="contact-icon">
                                                <i class="fas fa-envelope"></i>
                                            </div>
                                            <div class="contact-details">
                                                <h4>Email</h4>
                                                <p>ramzikrichen95@gmail.com</p>
                                            </div>
                                        </div>
                                        
                                        <div class="contact-item">
                                            <div class="contact-icon">
                                                <i class="fas fa-phone"></i>
                                            </div>
                                            <div class="contact-details">
                                                <h4>Phone</h4>
                                                <p>(+216) 28654512</p>
                                            </div>
                                        </div>
                                        
                                        <div class="contact-item">
                                            <div class="contact-icon">
                                                <i class="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div class="contact-details">
                                                <h4>Location</h4>
                                                <p>Alain KM 8, Sfax, 3042, Tunisia</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                `;

    this.initContactForm();
  }

  initContactForm() {
    const form = this.shadowRoot.getElementById("contactForm");
    const successMessage = this.shadowRoot.getElementById("successMessage");
    const errorMessage = this.shadowRoot.getElementById("errorMessage");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector(".btn-submit");
      const originalText = submitBtn.innerHTML;

      // Show loading state
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      // Hide previous messages
      successMessage.style.display = "none";
      errorMessage.style.display = "none";

      // Send email using EmailJS
      emailjs
        .sendForm("service_7ofhm5f", "template_danqb5c", form)
        .then(() => {
          successMessage.style.display = "block";
          form.reset();
        })
        .catch(() => {
          errorMessage.style.display = "block";
        })
        .finally(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        });
    });
  }
}

customElements.define("contact-component", ContactComponent);
