

void function Main(){
  const courses = [
    {
        imgSrc: "https://static.wixstatic.com/media/dd97f4_6f93a2a737b14a32ae26b17f51e6dbf1~mv2.jpg/v1/fill/w_560,h_280,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_6f93a2a737b14a32ae26b17f51e6dbf1~mv2.jpg",
        courseName: "iOS Development",
        registrationStatus: "რეგისტრაცია დასრულებულია",
        detailsUrl: "https://www.tbcacademy.ge/usaid/ios-development"
    },
    {
        imgSrc: "https://static.wixstatic.com/media/dd97f4_4323db1079614633a653e2ff9a95738e~mv2.jpg/v1/fill/w_560,h_280,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_4323db1079614633a653e2ff9a95738e~mv2.jpg",
        courseName: "React",
        registrationStatus: "რეგისტრაცია დასრულებულია",
        detailsUrl: "https://www.tbcacademy.ge/usaid/react"
    },
    {
        imgSrc: "https://static.wixstatic.com/media/dd97f4_5487da3fc590472dbb3599f7575df2d1~mv2.jpg/v1/fill/w_560,h_280,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_5487da3fc590472dbb3599f7575df2d1~mv2.jpg",
        courseName: "Intro to Python",
        registrationStatus: "რეგისტრაცია დასრულებულია",
        detailsUrl: "https://www.tbcacademy.ge/usaid/python-basic"
    },
    {
        imgSrc: "https://static.wixstatic.com/media/dd97f4_d9e4b267142542e98dbcdf183d766651~mv2.jpg/v1/fill/w_560,h_280,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_d9e4b267142542e98dbcdf183d766651~mv2.jpg",
        courseName: "Advanced Python",
        registrationStatus: "რეგისტრაცია დასრულებულია",
        detailsUrl: "https://www.tbcacademy.ge/usaid/python-advance"
    },
    {
        imgSrc: "https://static.wixstatic.com/media/dd97f4_41969c5f1e6b4a269bf1d790a52e465b~mv2.jpg/v1/fill/w_560,h_280,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_41969c5f1e6b4a269bf1d790a52e465b~mv2.jpg",
        courseName: "Advanced Cybersecurity Course",
        registrationStatus: "რეგისტრაცია დასრულებულია",
        detailsUrl: "https://www.tbcacademy.ge/usaid/information-security-advance"
    },
    {
        imgSrc: "https://static.wixstatic.com/media/dd97f4_dd355dc915d14264afd4ce2a9d2b0e12~mv2.jpg/v1/fill/w_560,h_280,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_dd355dc915d14264afd4ce2a9d2b0e12~mv2.jpg",
        courseName: "ToT - Training of Trainers",
        registrationStatus: "რეგისტრაცია დასრულებულია",
        detailsUrl: "https://www.tbcacademy.ge/usaid/training-of-trainers"
    },
    {
        imgSrc: "https://static.wixstatic.com/media/dd97f4_0fc678e4e2e04f8dacc747a4e2fbb6e6~mv2.jpg/v1/fill/w_560,h_280,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_0fc678e4e2e04f8dacc747a4e2fbb6e6~mv2.jpg",
        courseName: "Blockchain",
        registrationStatus: "რეგისტრაცია დასრულებულია",
        detailsUrl: "https://www.tbcacademy.ge/usaid/blockchain"
    },
    {
        imgSrc: "https://static.wixstatic.com/media/dd97f4_dda966974c014319bd5623526510b47c~mv2.jpg/v1/fill/w_560,h_280,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_dda966974c014319bd5623526510b47c~mv2.jpg",
        courseName: "DevOps",
        registrationStatus: "რეგისტრაცია დასრულებულია",
        detailsUrl: "https://www.tbcacademy.ge/usaid/devops"
    },
    {
        imgSrc: "https://static.wixstatic.com/media/dd97f4_8cc30cf0258d45a6ad2298ebec33550a~mv2.jpg/v1/fill/w_560,h_280,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_8cc30cf0258d45a6ad2298ebec33550a~mv2.jpg",
        courseName: "Information Security Governance",
        registrationStatus: "რეგისტრაცია დასრულებულია",
        detailsUrl: "https://www.tbcacademy.ge/usaid/information-security-basic"
    }
  ]
  
  const partners = [
    {
      imgUrl: "https://static.wixstatic.com/media/93e8a3_a356bb7d201f4f47870683655e9e4120~mv2.png/v1/fill/w_438,h_132,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%204_2x_edited.png",
      imgAlt: "USAID",
      className: "usaid"
    },
    {
      imgUrl: "https://static.wixstatic.com/media/93e8a3_eaf33552ffd5463e96a5f776dda00111~mv2.png/v1/fill/w_400,h_132,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/White%20horiz.png",
      imgAlt: "Space",
      className: "space"
    },
    {
      imgUrl: "https://static.wixstatic.com/media/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png/v1/fill/w_500,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png",
      imgAlt: "თინეთი",
      className: "tnet"
    },
    {
      imgUrl: "https://static.wixstatic.com/media/93e8a3_b595f31239344928802dd7135813e17c~mv2.png/v1/fill/w_360,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Tegeta%20logo%20geo.png",
      imgAlt: "Tegeta",
      className: "tegeta"
    },
    {
      imgUrl: "https://static.wixstatic.com/media/93e8a3_aca86c1c067d4f8585c3c2cb1b0a0178~mv2.png/v1/fill/w_262,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_aca86c1c067d4f8585c3c2cb1b0a0178~mv2.png",
      imgAlt: "spectre",
      className: "spectre"
    },
    {
      imgUrl: "https://static.wixstatic.com/media/93e8a3_b6ed8fb2602e4670bc83d1fd4a7d9283~mv2.png/v1/fill/w_440,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MicrosoftTeams-image%20(9).png",
      imgAlt: "TBCლიზინგი",
      className: "tbc-leasing"
    },
    {
      imgUrl: "https://static.wixstatic.com/media/93e8a3_ef7860c1a2854f1c8fc20f867ffa30ab~mv2.png/v1/fill/w_464,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UFC%20GEO%20PNG_edited.png",
      imgAlt: "UFC",
      className: "ufc"
    }
  ]
  
  const QAs = [
    {
      question: "როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?",
      answer: `<div>
        <p>კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:</p>
        <br>
        <p class="paragraph-text">
          <strong>I ეტაპი</strong> - პირველ ეტაპზე საჭიროა, შეავსო სასურველი კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა. 
        </p>
        <p class="paragraph-text">
          <strong>II ეტაპი</strong> - შერჩევის მეორე ეტაპი კურსების მიხედვით განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე.
        </p>
        <p class="paragraph-text">
          <strong>III ეტაპი</strong> - მესამე ეტაპი კურსების მიხედვით განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური დავალება, რაც თქვენი კვლევისა და თვითსწავლის უნარს ამოწმებს.
        </p>
        <p class="paragraph-text">
          <strong>IV ეტაპი</strong>  - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით გავლის შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი ხელშეკრულება.
        </p>
        <p>
        * სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით წაიკითხო კურსის აღწერა, ნახო რას ისწავლი კურსის განმავლობაში და გაიგო გააჩნია თუ არა კურსს დასწრების წინაპირობა.
        </P>
      </div>`
    },
    {
      question: "შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?",
      answer: `
        <div>
          <p>
            TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე.
          </p>
        </div>
      `
    },
    {
      question: "რა ღირს სწავლა პროგრამის ფარგლებში?",
      answer: `
        <div>
          <p>
          პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ.
          </p>
        </div>
      `
    }
  ]
  
  function courseTemplate(course) {
    return `
      <li>
        <img src="${course.imgSrc}" alt="${course.courseName}">
        <h5>${course.courseName}</h5>
        <p>${course.registrationStatus}</p>
        <a href="${course.detailsUrl}" class="see-details">
          <svg preserveAspectRatio="xMidYMid meet" data-bbox="1.833 2.667 13.334 10.666" xmlns="http://www.w3.org/2000/svg" viewBox="1.833 2.667 13.334 10.666" height="16" width="17" data-type="color" role="presentation" aria-hidden="true"><defs><style>#comp-lnoncoa62__00000000-0000-0000-0000-000000000003 svg [data-color="1"] {fill: #00AEEF;}</style></defs>
              <g>
                  <path fill="#00aef3" d="m10.3 2.867 4.667 4.666a.645.645 0 0 1 0 .934L10.3 13.133a.644.644 0 0 1-.933 0 .644.644 0 0 1 0-.933L12.9 8.667H2.5c-.4 0-.667-.267-.667-.667s.267-.667.667-.667h10.4L9.367 3.8a.605.605 0 0 1-.2-.467c0-.2.066-.333.2-.466a.644.644 0 0 1 .933 0Z" data-color="1"></path>
              </g>
          </svg>
          <span>კურსის დეტალები</span>
        </a>
      </li>
    `
  }
  
  function displayAllCourses(courses) {
    const courseList = document.querySelector('main section ul.course-list')
  
    courses.forEach(course => {
      courseList.insertAdjacentHTML('beforeend', courseTemplate(course))
    })
  }
  
  function setPartnersContent(partners) {
    const partnersList = document.querySelector('main section.partners ul')
  
    for (let i = 0; i < partners.length; i += 3) {
        const partnersSlice = partners.slice(i, i + 3)
  
        const listItem = document.createElement('li')
        listItem.classList.add('swiper-slide')
        listItem.classList.add(`${partners[i].className}`)
  
        partnersSlice.forEach(partner => {
            const partnerItem = `
              <a href="#">
                  <img src="${partner.imgUrl}" alt="${partner.imgAlt}" class="${partner.className}">
              </a>
            `
            listItem.innerHTML += partnerItem
        })
  
        partnersList.appendChild(listItem)
    }
  
    const partnersSwiper = new Swiper('main section.partners .swiper-container', {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1000,
      pagination: {
        el: '.partners .swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.partners .next',
        prevEl: '.partners .prev'
      }
    })
  }
  
  function setQAs(QAs) {
    const QAsList = document.querySelector('main section.questions ul')
  
    QAs.forEach(qa => {
      let li = `
        <li> 
          <div class="question">
            <p>${qa.question}</p>
            <span class="material-icons icon">keyboard_arrow_down</span>
          </div>
          <div class="answer">${qa.answer}</div>
        </li>
      `
  
      QAsList.innerHTML += li
    })
  }

  void function Init() {
    displayAllCourses(courses)
    setPartnersContent(partners)
    setQAs(QAs)
  }()

  void function InitDomEvents(){
    const questionsList = document.querySelector('main section.questions ul')

    questionsList.addEventListener('click', function (event) {
        const clickedQuestion = event.target.closest('.question')

        if (clickedQuestion) {
            const clickedAnswer = clickedQuestion.nextElementSibling

            clickedQuestion.classList.toggle('extended')
            clickedAnswer.classList.toggle('visible')

            // loop through all question elements
            const questionElements = questionsList.querySelectorAll('.question')
            questionElements.forEach(questionElement => {
                // remove "extended" class from other questions
                if (questionElement !== clickedQuestion) {
                    questionElement.classList.remove('extended')
                }
            })

            // loop through all answer elements
            const answerElements = questionsList.querySelectorAll('.answer')
            answerElements.forEach(answerElement => {
                // hide other answers
                if (answerElement !== clickedAnswer) {
                  answerElement.classList.remove('visible')
                }
            })
        }
    })

    document.addEventListener('click', function (event) {
      const mobileMenuIcon = event.target.closest('header.mobile-header .menu');

      if (mobileMenuIcon) {
        document.querySelector('body').classList.add('block-scroll');
        document.querySelector('nav#sidebar').classList.add('visible');
      }
    })

    document.addEventListener('click', function (event) {
      const sidebarCloseIcon = event.target.closest('#sidebar .close');

      if (sidebarCloseIcon) {
        document.querySelector('body').classList.remove('block-scroll');
        document.querySelector('nav#sidebar').classList.remove('visible');
      }
    })
  }()
}()