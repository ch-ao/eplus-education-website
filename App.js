const renderHead = () => {
    const head = ` 
        <meta charset="utf-8" />
        <meta name="google-site-verification" content="LZemO1xB5_jMu3MIn_ryAH7-mxwhy6jOZLvqeblbpWY" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="keywords" content="Earnest Education, Earnest Education Ltd, Canada， Vancouver，Richmond, 知行教育，加拿大，列治文，温哥华，教育机构，教育">
        <meta name="description" content="Earnest Education, Earnest Education Ltd, Canada, Vancougiver，Richmond, 知行教育， 加拿大，温哥华，教育机构，教育" />
        <meta name="author" content="chao zhang" />
        <title>Earnest Education - 知行教育</title>

        <!-- animate css  -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>

        <!-- hover.css  -->
        <link rel="stylesheet" href="./css/hover-min.css">

        <link rel="shortcut icon" type="image/x-icon" href="https://src-earnest-education.s3-us-west-2.amazonaws.com/title-logo.JPG" />
        <!-- Font Awesome icons (free version)-->
        <script src="https://kit.fontawesome.com/b89ede4b80.js" crossorigin="anonymous"></script>
        <!-- Google fonts-->
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@500&display=swap" rel="stylesheet">

        <!-- Third party plugin CSS-->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" rel="stylesheet" />

        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="css/styles.css" rel="stylesheet" />

        <!-- CSS Link  -->
        <link rel="stylesheet" href="css/video.css">
        <link rel="stylesheet" href="css/map.css">
        <link rel="stylesheet" href="css/chao.css">
        <link rel="stylesheet" href="css/sub.css">

        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

    `;

    $('#headComponent').html(head);
}

const renderNavigation = () => {
    const html = `        
    <nav class="navbar navbar-expand-lg fixed-top py-3 navbarCourse" id="mainNav">
        <div class="container">      
            <a href="index.html">
                <img src="assets/img/rsz_logo.png">
            </a>
    
            <button class="navbar-toggler navbar-light navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto my-2 my-lg-0">
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="index.html#about">ABOUT</a>
                    </li>
    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        CURRICULUM</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="coding.html">Coding</a>
                        <a class="dropdown-item" href="math.html">Math</a>
                        <a class="dropdown-item" href="english.html">English</a>
                        <a class="dropdown-item" href="chinese.html">Chinese</a>
                        </div>
                    </li>
    
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="index.html#teacher">TEACHERS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="news.html">NEWS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="index.html#gallery">GALLERY</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="registration.html">REGISTRATION</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link js-scroll-trigger" href="index.html#contact">CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;

    $('#navigationComponent').html(html);
}

const renderCurriculum = () => {
    const data = [
        {
            link: 'coding.html',
            img: 'https://media.giphy.com/media/d9IfL7seBexHLct75B/giphy.gif',
            name: 'Coding'
        },
        {
            link: 'math.html',
            img: 'https://media.giphy.com/media/Qub7ehsQcflvwgat5M/giphy.gif',
            name: 'Math'
        },
        {
            link: 'english.html',
            img: 'https://media.giphy.com/media/VDNDNheLuIOfX76gxi/giphy.gif',
            name: 'English'
        },
        {
            link: 'chinese.html',
            img: 'https://media.giphy.com/media/St9qmF1OvSE0lTV2y5/giphy.gif',
            name: 'Chinese'
        }
        // {
        //     link: 'social.html',
        //     img: 'https://media.giphy.com/media/fXEUiqDbxfQbWwLQh1/giphy.gif',
        //     name: 'Social'
        // },
        // {
        //     link: 'science.html',
        //     img: 'https://media.giphy.com/media/KzWMBa9V3z8jHJCEC7/giphy.gif',
        //     name: 'Science'
        // },
        // {
        //     link: 'speech.html',
        //     img: 'https://media.giphy.com/media/f4DmXx6APMvCWkvx9t/giphy.gif',
        //     name: 'Bilingual Speech'
        // },
        // {
        //     link: 'map.html',
        //     img: 'https://media.giphy.com/media/iehsZQR0fyJxUmR00X/giphy.gif',
        //     name: 'Art'
        // }
    ]

    let html = `   
    <section class="page-section" id="course">
        <div class="container">
            <h2 class="text-center tt" data-aos="slide-right">CURRICULUM</h2>
            <hr class="divider my-4" />
            <div class="row">`;

    data.forEach(e => {
        html += `                
                <div class="col-lg-3 col-md-6 text-center">
                    <a href="${e.link}">
                        <div class="mt-5 hvr-fade curriculum">
                            <img src=${e.img} width="200px" height="200px" class="img-fluid p-4" alt="" data-aos="flip-up">
                            <h3 class="h4 mb-2">${e.name}</h3>
                        </div>
                    </a>
                </div>
                `});

        html += `
                </div>
            </div>
        </section>
        `;

    $('#curriculumComponent').html(html);
}

const renderTeacher = () => {

    const data = [
        {
            img: 'https://src-earnest-education.s3-us-west-2.amazonaws.com/teachers-images/Alex.png',
            target: '#Alex'
        },
        {
            img: 'https://src-earnest-education.s3-us-west-2.amazonaws.com/teachers-images/Barbara.png',
            target: '#Barbara'
        },
        {
            img: 'https://src-earnest-education.s3-us-west-2.amazonaws.com/teachers-images/Cindy.png',
            target: '#Cindy'
        },
        {
            img: 'https://src-earnest-education.s3-us-west-2.amazonaws.com/teachers-images/Jane.png',
            target: '#Jane'
        },
        {
            img: 'https://src-earnest-education.s3-us-west-2.amazonaws.com/teachers-images/Katrina.png',
            target: '#Katrina'
        },
        {
            img: 'https://src-earnest-education.s3-us-west-2.amazonaws.com/teachers-images/Chao.png',
            target: '#Chao'
        },
        {
            img: 'https://src-earnest-education.s3-us-west-2.amazonaws.com/teachers-images/Liying.jpeg',
            target: '#Liying'
        },
        {
            img: 'https://src-earnest-education.s3-us-west-2.amazonaws.com/teachers-images/Eric.png',
            target: '#Eric'
        },
        {
            img: 'https://src-earnest-education.s3-us-west-2.amazonaws.com/teachers-images/Chris.png',
            target: '#Chris'
        },
        {
            img: 'https://src-earnest-education.s3-us-west-2.amazonaws.com/teachers-images/Qin.png',
            target: '#Qin'
        },
        {
            img: 'https://src-earnest-education.s3-us-west-2.amazonaws.com/teachers-images/Joyce.png',
            target: '#Joyce'
        },
        {
            img: 'https://src-earnest-education.s3-us-west-2.amazonaws.com/teachers-images/JoyceBa.png',
            target: '#JoyceBa'
        }
    ];

    let html = 
    `    
    <section class="page-section" id="teacher">
    <div class="container">
        <h2 class="text-center tt" data-aos="slide-right">TEACHERS</h2>
        <hr class="divider my-4" />
        <div class="row align-items-center justify-content-md-center">
    `;

    data.forEach( e => {
        html +=
        `                
        <div class="col-lg-3 teacher hvr-grow">
            <img src=${e.img} data-aos="zoom-in" class="img-fluid my-4" data-toggle="modal" data-target=${e.target}>
        </div>`
    });
    
    html += `           
            </div>
        </div>
    </section>`;

    // add image modal 
    data.forEach(e => {
        html += `    
        <div id=${e.target.substr(1)} class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <img src=${e.img} class="img-responsive" width="468px" height="650px">
                    </div>
                </div>
            </div>
        </div>`;})

    $('#teacherComponent').html(html);
    
};


renderHead();
renderNavigation();
renderCurriculum();
renderTeacher();

