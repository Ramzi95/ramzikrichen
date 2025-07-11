class SkillsComponent extends HTMLElement {
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
                            padding: 80px ;
                            color: white;
                        }
                        
                        .section-title {
                            text-align: center;
                            font-size: 3rem;
                            font-weight: 700;
                            margin-bottom: 3rem;
                            color: white;
                        }

                        /* Light theme - dark blue-gray gradient */
                        .section-title {
                            background: var(--headline-gradient);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                        }


                        
                        .skill-category {
                            margin-bottom: 3rem;
                        }
                        
                        .category-title {
                            font-size: 1.5rem;
                            font-weight: 600;
                            margin-bottom: 1.5rem;
                            text-align: center;
                            color: rgba(255, 255, 255, 0.9);
                        }
                        
                        .skill-item {
                            background: rgba(255, 255, 255, 0.1);
                            backdrop-filter: blur(10px);
                            border-radius: 15px;
                            border: 1px solid rgba(255, 255, 255, 0.2);
                            padding: 1.5rem;
                            text-align: center;
                            transition: all 0.3s ease;
                            width: 135px;
                        }
                        
                        .skill-item:hover {
                            transform: translateY(-5px) scale(1.05);
                            background: rgba(255, 255, 255, 0.2);
                        }
                        
                        .skill-icon {
                            font-size: 2.5rem;
                            margin-bottom: 1rem;
                            color: white;
                        }
                        
                        .skill-name {
                            font-size: 0.9rem;
                            font-weight: 500;
                            color: rgba(255, 255, 255, 0.9);
                        }
                        
                        @media (max-width: 768px) {
                            .skill-item {
                                width: 120px;
                                padding: 1rem;
                            }
                            
                            .skill-icon {
                                font-size: 2rem;
                            }
                        }
                        
                        @media (max-width: 576px) {
                            .skill-item {
                                width: 100px;
                                padding: 0.8rem;
                            }
                        }
                    </style>
                    
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
                    
                    <section id="skills" class="skills-section">
                        <div class="container">
                            <h2 class="section-title">Technologies</h2>
                            
                            <div class="skill-category">
                                <h3 class="category-title">Frontend</h3>
                                <div class="d-flex flex-wrap justify-content-start gap-4">
                                    <div class="skill-item">
                                        <div class="skill-icon">
                                            <i class="fab fa-react"></i>
                                        </div>
                                        <div class="skill-name">React</div>
                                    </div>
                                    <div class="skill-item">
                                        <div class="skill-icon">
                                            <i class="fab fa-angular"></i>
                                        </div>
                                        <div class="skill-name">Angular</div>
                                    </div>
                                    <div class="skill-item">
                                        <div class="skill-icon">
                                             <svg height='32' viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#ffffff">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <g>
                                                        <path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z" fill="#currentColor"> </path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="skill-name">Next.js</div>
                                    </div>
                                    <div class="skill-item">
                                        <div class="skill-icon">
                                            <i class="fab fa-js"></i>
                                        </div>
                                        <div class="skill-name">JavaScript</div>
                                    </div>
                                    <div class="skill-item">
                                        <div class="skill-icon">
                                            <svg height='32' fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.445.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H2.25V9.938z" />
                                            </svg>
                                        </div>
                                        <div class="skill-name">TypeScript</div>
                                    </div>
                                    <div class="skill-item">
                                        <div class="skill-icon">
                                            <i class="fab fa-html5"></i>
                                        </div>
                                        <div class="skill-name">HTML5</div>
                                    </div>
                                    <div class="skill-item">
                                        <div class="skill-icon">
                                            <i class="fab fa-css3-alt"></i>
                                        </div>
                                        <div class="skill-name">CSS3</div>
                                    </div>
                                    <div class="skill-item">
                                        <div class="skill-icon">
                                            <i class="fab fa-bootstrap"></i>
                                        </div>
                                        <div class="skill-name">Bootstrap</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="skill-category">
                                <h3 class="category-title">Backend</h3>
                                <div class="d-flex flex-wrap justify-content-start gap-4">
                                    <div class="skill-item">
                                        <div class="skill-icon">
                                            <i class="fab fa-node-js"></i>
                                        </div>
                                        <div class="skill-name">Node.js</div>
                                    </div>
                                    <div class="skill-item">
                                        <div class="skill-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="32" viewBox="0 0 40 40" fill='#ffffff'>
                                                <path 
                                                    d="M37.005,31.5c-0.975,0-1.91-0.463-2.502-1.237l-5.599-7.321l-5.6,7.321 c-0.592,0.774-1.527,1.237-2.502,1.237h-2.22l8.433-11.028L18.625,9.5h2.22c0.975,0,1.911,0.462,2.502,1.236l5.556,7.266 l5.557-7.266C35.051,9.962,35.987,9.5,36.962,9.5h2.22l-8.391,10.972L39.225,31.5H37.005z">
                                                </path>
                                                <path 
                                                    d="M38.17,10l-8.008,10.472L38.213,31h-1.208c-0.825,0-1.604-0.385-2.105-1.04l-5.996-7.841 l-5.996,7.841c-0.501,0.656-1.28,1.04-2.105,1.04h-1.208l8.051-10.528L19.636,10h1.208c0.825,0,1.604,0.385,2.105,1.04l5.954,7.785 l5.954-7.785c0.501-0.656,1.28-1.04,2.105-1.04H38.17 M40.194,9H38.17h-1.208c-1.129,0-2.213,0.536-2.899,1.433l-5.159,6.747 l-5.159-6.747C23.058,9.536,21.974,9,20.845,9h-1.208h-2.024l1.229,1.607l7.544,9.865l-7.586,9.92L17.57,32h2.024h1.208 c1.129,0,2.213-0.536,2.899-1.433l5.202-6.803l5.202,6.803C34.791,31.464,35.875,32,37.005,32h1.208h2.024l-1.229-1.607 l-7.586-9.92l7.544-9.865L40.194,9L40.194,9z">
                                                </path>
                                                <g>
                                                    <path 
                                                        d="M10,32.5c-5.238,0-9.5-4.409-9.5-9.828v-4.345C0.5,12.909,4.762,8.5,10,8.5s9.5,4.408,9.5,9.827 v4.172L3.5,22.5v0.172c0,3.765,2.916,6.828,6.5,6.828c1.977,0,3.893-0.996,5.125-2.663c0.628-0.851,1.551-1.338,2.532-1.338h1.469 l-0.248,0.673C17.484,29.957,13.917,32.5,10,32.5z M16.5,19.5v-1.173c0-3.765-2.916-6.827-6.5-6.827s-6.5,3.062-6.5,6.827V19.5 H16.5z">
                                                    </path>
                                                    <path 
                                                        d="M10,9c4.962,0,9,4.185,9,9.327V22L3,22v0.672C3,26.713,6.14,30,10,30 c2.188,0,4.223-1.102,5.527-2.866C16.035,26.447,16.802,26,17.657,26l0.752,0c0,0,0,0,0.001,0.001c-1.322,3.588-4.704,6-8.41,6 c-4.962,0-9-4.185-9-9.328v-4.345C1,13.185,5.038,9,10,9 M3,20h14v-1.673C17,14.287,13.86,11,10,11s-7,3.287-7,7.327V20 M10,8 C4.486,8,0,12.633,0,18.327v4.345C0,28.367,4.486,33,10,33c4.125,0,7.881-2.674,9.348-6.654l0.495-1.344L18.411,25L17.658,25 c-1.142,0-2.211,0.561-2.935,1.54C13.584,28.08,11.819,29,10,29c-3.204,0-5.83-2.663-5.992-6L19,23l1,0v-1v-3.672 C20,12.633,15.514,8,10,8L10,8z M4,19v-0.673C4,14.838,6.692,12,10,12s6,2.838,6,6.327V19H4L4,19z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="skill-name">Express.js</div>
                                    </div>
                                    <div class="skill-item">
                                        <div class="skill-icon">
                                            <i class="fab fa-python"></i>
                                        </div>
                                        <div class="skill-name">Python</div>
                                    </div>
                                    <div class="skill-item">
                                        <div class="skill-icon">
                                            <i class="fas fa-bolt"></i>
                                        </div>
                                        <div class="skill-name">FastAPI</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="skill-category">
                                <h3 class="category-title">Databases & Tools</h3>
                                <div class="d-flex flex-wrap justify-content-start gap-4">
                                    <div class="skill-item">
                                        <div class="skill-icon">
                                            <i class="fas fa-leaf text-white text-xl"></i>
                                        </div>
                                        <div class="skill-name">MongoDB</div>
                                    </div>
                                    <div class="skill-item">
                                        <div class="skill-icon">
                                            <i class="fas fa-couch text-white text-xl"></i>
                                        </div>
                                        <div class="skill-name">CouchDB</div>
                                    </div>
                                    <div class="skill-item">
                                        <div class="skill-icon">
                                            <i class="fas fa-database"></i>
                                        </div>
                                        <div class="skill-name">MySQL</div>
                                    </div>
                                    <div class="skill-item">
                                        <div class="skill-icon">
                                            <i class="fas fa-fire"></i>
                                        </div>
                                        <div class="skill-name">Firebase</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="skill-category">
                                <h3 class="category-title">Tools</h3>
                                <div class="d-flex flex-wrap justify-content-start gap-4">
                                    <div class="skill-item">
                                        <div class="skill-icon">
                                            <i class="fab fa-git-alt"></i>
                                        </div>
                                        <div class="skill-name">Git</div>
                                    </div>
                                    <div class="skill-item">
                                        <div class="skill-icon">
                                            <i class="fab fa-github"></i>
                                        </div>
                                        <div class="skill-name">GitHub</div>
                                    </div>
                                    <div class="skill-item">
                                        <div class="skill-icon">
                                            <i class="fab fa-gitlab"></i>
                                        </div>
                                        <div class="skill-name">GitLab</div>
                                    </div>
                                    <div class="skill-item">
                                        <div class="skill-icon">
                                            <svg viewBox="0 -1 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" height='32'>
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <defs>
                                                        <path
                                                            d="M180.82764,252.605272 C184.843951,254.170159 189.42406,254.069552 193.478224,252.11917 L245.979142,226.856851 C251.495593,224.202221 255.003889,218.618034 255.003889,212.49296 L255.003889,41.1971845 C255.003889,35.0719113 251.495593,29.4886211 245.979142,26.8339907 L193.478224,1.57068551 C188.158006,-0.989256713 181.931329,-0.362230036 177.262566,3.0323459 C176.595173,3.51727166 175.959655,4.05869672 175.363982,4.65536598 L74.8565893,96.3498444 L31.0778002,63.1181557 C27.0024197,60.0246398 21.3020866,60.2780499 17.5170718,63.7211005 L3.47578059,76.4937075 C-1.15402423,80.7052561 -1.15933349,87.9889043 3.46431538,92.2072265 L41.430759,126.844525 L3.46431538,161.482221 C-1.15933349,165.700742 -1.15402423,172.984291 3.47578059,177.19584 L17.5170718,189.967949 C21.3020866,193.411497 27.0024197,193.664509 31.0778002,190.571591 L74.8565893,157.339404 L175.363982,249.034221 C176.953772,250.625007 178.82048,251.823326 180.82764,252.605272 Z M191.291764,68.9559518 L115.029663,126.844525 L191.291764,184.733396 L191.291764,68.9559518 Z"
                                                            id="path-1"> </path>
                                                        <linearGradient x1="50.0000484%" y1="-3.91645412e-07%" x2="50.0000484%" y2="99.999921%"
                                                            id="linearGradient-3">
                                                            <stop stop-color="#FFFFFF" offset="0%"> </stop>
                                                            <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"> </stop>
                                                        </linearGradient>
                                                    </defs>
                                                    <g>
                                                        <mask id="mask-2" fill="white">
                                                            <use xlink:href="#path-1"> </use>
                                                        </mask>
                                                        <g> </g>
                                                        <path
                                                            d="M246.134784,26.873337 L193.593025,1.57523773 C187.51178,-1.35300582 180.243173,-0.117807811 175.469819,4.65514684 L3.46641717,161.482221 C-1.16004072,165.700742 -1.1547215,172.984291 3.47789235,177.19584 L17.5276804,189.967949 C21.3150858,193.411497 27.0189053,193.664509 31.0966765,190.571591 L238.228667,33.4363005 C245.177523,28.1646927 255.158535,33.1209324 255.158535,41.8432608 L255.158535,41.2332436 C255.158535,35.11066 251.651235,29.5293619 246.134784,26.873337 Z"
                                                            fill="#FFFFFF" fill-rule="nonzero" mask="url(#mask-2)"> </path>
                                                        <path
                                                            d="M246.134784,226.816011 L193.593025,252.11419 C187.51178,255.041754 180.243173,253.806579 175.469819,249.034221 L3.46641717,92.2070273 C-1.16004072,87.9888047 -1.1547215,80.7049573 3.47789235,76.4935082 L17.5276804,63.7209012 C21.3150858,60.2778506 27.0189053,60.0243409 31.0966765,63.1179565 L238.228667,220.252649 C245.177523,225.524058 255.158535,220.568416 255.158535,211.84549 L255.158535,212.456104 C255.158535,218.57819 251.651235,224.159388 246.134784,226.816011 Z"
                                                            fill="#FFFFFF" fill-rule="nonzero" mask="url(#mask-2)"> </path>
                                                        <path
                                                            d="M193.428324,252.134497 C187.345086,255.060069 180.076479,253.823898 175.303125,249.050544 C181.184153,254.931571 191.240868,250.765843 191.240868,242.448334 L191.240868,11.2729623 C191.240868,2.95542269 181.184153,-1.21005093 175.303125,4.67135981 C180.076479,-0.102038107 187.345086,-1.3389793 193.428324,1.58667934 L245.961117,26.8500144 C251.481553,29.5046448 254.991841,35.0879351 254.991841,41.2132082 L254.991841,212.509283 C254.991841,218.634357 251.481553,224.217548 245.961117,226.872178 L193.428324,252.134497 Z"
                                                            fill="#FFFFFF" fill-rule="nonzero" mask="url(#mask-2)"> </path>
                                                        <path
                                                            d="M180.827889,252.605272 C184.8442,254.169163 189.424309,254.069552 193.477476,252.11917 L245.978395,226.855855 C251.495842,224.201225 255.004138,218.618034 255.004138,212.49296 L255.004138,41.1969853 C255.004138,35.0717121 251.495842,29.4884219 245.979391,26.8337915 L193.477476,1.57052613 C188.158255,-0.989423064 181.931578,-0.362396387 177.261819,3.03217656 C176.595422,3.51710232 175.959904,4.05852738 175.363235,4.65519664 L74.8565395,96.3496452 L31.0777504,63.1179565 C27.0024695,60.0244405 21.3020368,60.2779503 17.517022,63.7209012 L3.4757806,76.4935082 C-1.15402423,80.7050569 -1.15933349,87.9888047 3.46431539,92.2071269 L41.4308088,126.844525 L3.46431539,161.482221 C-1.15933349,165.700742 -1.15402423,172.984291 3.4757806,177.19584 L17.517022,189.967949 C21.3020368,193.411497 27.0024695,193.664509 31.0777504,190.571591 L74.8565395,157.339404 L175.363235,249.034221 C176.953025,250.625007 178.820729,251.823326 180.827889,252.605272 Z M191.292013,68.9557526 L115.029912,126.844525 L191.292013,184.733396 L191.292013,68.9557526 Z"
                                                            fill-opacity="0.25" fill="url(#linearGradient-3)" mask="url(#mask-2)"> </path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="skill-name">VS Code</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                `;
  }
}

customElements.define("skills-component", SkillsComponent);
