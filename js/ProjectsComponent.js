class ProjectsComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.projects = [
      {
        title: "Patient App - Asone4Health",
        description:
          "AI-driven solution for personalized chronic care, enabling patients to manage their health with tailored recommendations and real-time monitoring.",
        technologies: "Next.js,React,FastAPI,CouchDB,GIT,Gitlab,Docker,Bootstrap,HTML,CSS,Javascript,Python",
        images: [
          'assets/projects/asone4health_patient/image1.png','../assets/projects/asone4health_patient/image2.png','../assets/projects/asone4health_patient/image3.png','../assets/projects/asone4health_patient/image4.png','../assets/projects/asone4health_patient/image5.png','../assets/projects/asone4health_patient/image6.png','../assets/projects/asone4health_patient/image7.png','../assets/projects/asone4health_patient/image8.png','../assets/projects/asone4health_patient/image9.png',
        ],
      },
      {
        title: "Doctor App - Asone4Health",
        description:
          "AI-driven solution for personalized chronic care, providing doctors with tools to monitor patients and deliver data-driven insights.",
        technologies: "Next.js,React,FastAPI,CouchDB,GIT,Gitlab,Docker,Bootstrap,HTML,CSS,Javascript,Python",
        images: [
         '../assets/projects/asone4health_doctor/image1.png','../assets/projects/asone4health_doctor/image2.png','../assets/projects/asone4health_doctor/image3.png','../assets/projects/asone4health_doctor/image4.png','../assets/projects/asone4health_doctor/image5.png','../assets/projects/asone4health_doctor/image6.png','../assets/projects/asone4health_doctor/image7.png','../assets/projects/asone4health_doctor/image8.png','../assets/projects/asone4health_doctor/image9.png','../assets/projects/asone4health_doctor/image10.png','../assets/projects/asone4health_doctor/image11.png'
        ],
      },
      {
        title: "Xshop E-commerce - User Side",
        description:
          "Full-featured online shopping platform with intuitive UI, secure payments, and personalized product recommendations.",
        technologies: "Angular,Express.js,MongoDB,Firebase,Bootstrap,HTML,CSS,Javascript,Typescript,GIT,Github",
        images: [
          '../assets/projects/xshop_user/image1.png','../assets/projects/xshop_user/image2.png','../assets/projects/xshop_user/image3.png','../assets/projects/xshop_user/image4.png','../assets/projects/xshop_user/image5.png','../assets/projects/xshop_user/image6.png'
        ],
      },
      {
        title: "Xshop E-commerce - Admin Side",
        description:
          "Admin dashboard for managing products, orders, and users with real-time analytics and inventory tracking.",
        technologies: "Angular,Express.js,MongoDB,Firebase,Bootstrap,HTML,CSS,Javascript,Typescript,GIT,Github",
        images: [
          '../assets/projects/xshop_admin/image1.png','../assets/projects/xshop_admin/image2.png','../assets/projects/xshop_admin/image3.png','../assets/projects/xshop_admin/image4.png','../assets/projects/xshop_admin/image5.png','../assets/projects/xshop_admin/image6.png','../assets/projects/xshop_admin/image7.png','../assets/projects/xshop_admin/image8.png','../assets/projects/xshop_admin/image9.png'
        ],
      },
    ];
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

                        .section-title {
                            background: var(--headline-gradient);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                        }


                        
                        .project-card {
                            background: rgba(255, 255, 255, 0.1);
                            backdrop-filter: blur(10px);
                            border-radius: 20px;
                            border: 1px solid rgba(255, 255, 255, 0.2);
                            padding: 2rem;
                            margin-bottom: 2rem;
                            transition: all 0.3s ease;
                            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                        }
                        
                        .project-card:hover {
                            transform: translateY(-5px);
                            box-shadow: 0 15px 40px rgba(0,0,0,0.2);
                        }
                        
                        .project-carousel {
                            position: relative;
                            width: 100%;
                            height: 300px;
                            overflow: hidden;
                            border-radius: 15px;
                            margin-bottom: 20px;
                        }
                        
                        .project-carousel img {
                            width: 100%;
                            height: 100%;
                            object-fit: contain;
                            position: absolute;
                            top: 0;
                            left: 0;
                            opacity: 0;
                            transition: opacity 0.5s ease;
                            background: white;
                            padding: 10px;
                        }
                        
                        .project-carousel img.active {
                            opacity: 1;
                        }
                        
                        .carousel-nav {
                            position: absolute;
                            bottom: 15px;
                            left: 50%;
                            transform: translateX(-50%);
                            display: flex;
                            gap: 10px;
                        }
                        
                        .carousel-dot {
                            width: 12px;
                            height: 12px;
                            border-radius: 50%;
                            background: rgba(255, 255, 255, 0.5);
                            cursor: pointer;
                            transition: all 0.3s ease;
                        }
                        
                        .carousel-dot.active {
                            background: white;
                            transform: scale(1.2);
                        }
                        
                        .project-title {
                            font-size: 1.5rem;
                            font-weight: 600;
                            margin-bottom: 1rem;
                            background: var(--headline-gradient);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                        }
                        
  
                        
                        .project-description {
                            margin-bottom: 1.5rem;
                            color: #F8F9FA;
                            line-height: 1.6;
                        }
                        

                        
                        .tech-tags {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 0.5rem;
                        }
                        
                        .tech-tag {
                            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                            color: white;
                            padding: 5px 15px;
                            border-radius: 20px;
                            font-size: 0.8rem;
                            font-weight: 500;
                        }
                        
                        @media (max-width: 768px) {
                            .project-carousel {
                                height: 250px;
                            }
                        }
                    </style>
                    
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
                    
                    <section id="projects" class="projects-section">
                        <div class="container">
                            <h2 class="section-title">My Projects</h2>
                            <div class="row">
                                ${this.projects
                                  .map(
                                    (project, index) => `
                                    <div class="col-lg-6 col-md-6 mb-4">
                                        <div class="project-card">
                                            <div class="project-carousel" data-project="${index}">
                                                ${project.images
                                                  .map(
                                                    (img, imgIndex) => `
                                                    <img src="${img}" alt="${
                                                      project.title
                                                    }" ${
                                                      imgIndex === 0
                                                        ? 'class="active"'
                                                        : ""
                                                    } />
                                                `
                                                  )
                                                  .join("")}
                                                <div class="carousel-nav">
                                                    ${project.images
                                                      .map(
                                                        (_, imgIndex) => `
                                                        <div class="carousel-dot ${
                                                          imgIndex === 0
                                                            ? "active"
                                                            : ""
                                                        }" data-index="${imgIndex}"></div>
                                                    `
                                                      )
                                                      .join("")}
                                                </div>
                                            </div>
                                            <h3 class="project-title">${
                                              project.title
                                            }</h3>
                                            <p class="project-description">${
                                              project.description
                                            }</p>
                                            <div class="tech-tags">
                                                ${project.technologies
                                                  .split(",")
                                                  .map(
                                                    (tech) => `
                                                    <span class="tech-tag">${tech.trim()}</span>
                                                `
                                                  )
                                                  .join("")}
                                            </div>
                                        </div>
                                    </div>
                                `
                                  )
                                  .join("")}
                            </div>
                        </div>
                    </section>
                `;

    this.initCarousels();
  }

  initCarousels() {
    const carousels = this.shadowRoot.querySelectorAll(".project-carousel");
    carousels.forEach((carousel) => {
      const dots = carousel.querySelectorAll(".carousel-dot");
      const images = carousel.querySelectorAll("img");

      dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          // Remove active class from all images and dots
          images.forEach((img) => img.classList.remove("active"));
          dots.forEach((d) => d.classList.remove("active"));

          // Add active class to current image and dot
          images[index].classList.add("active");
          dot.classList.add("active");
        });
      });

      // Auto-advance carousel
      let currentIndex = 0;
      setInterval(() => {
        images[currentIndex].classList.remove("active");
        dots[currentIndex].classList.remove("active");

        currentIndex = (currentIndex + 1) % images.length;

        images[currentIndex].classList.add("active");
        dots[currentIndex].classList.add("active");
      }, 4000);
    });
  }
}
customElements.define("projects-component", ProjectsComponent);
