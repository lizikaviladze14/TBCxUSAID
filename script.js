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

void function Main(){
    displayAllCourses(courses)
}()