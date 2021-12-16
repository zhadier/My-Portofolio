// Works Section Dynamically Created
const worksSection = document.querySelector('#Works');
const projectsArray = [
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    techs: ['css', 'html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/p1.svg',
    featuredPopupImage: 'images/p1.svg',
    linkToLiveVersion: 'https://zhadier.github.io/My-Portofolio/',
    linkToSource: 'https://github.com/zhadier/My-Portofolio',
    class: 'project1',
    id: 'but1',
  },
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard.',
    techs: ['html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/p1d.svg',
    featuredPopupImage: 'images/Snapshoot-Portfolio.svg',
    linkToLiveVersion: 'https://zhadier.github.io/My-Portofolio/',
    linkToSource: 'https://github.com/zhadier/My-Portofolio',
    class: 'project2',
    id: 'but2',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard.',
    techs: ['html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/p2d.svg',
    featuredPopupImage: 'images/Snapshoot-Portfolio.svg',
    linkToLiveVersion: 'https://zhadier.github.io/My-Portofolio/',
    linkToSource: 'https://github.com/zhadier/My-Portofolio',
    class: 'project3',
    id: 'but3',
  },
  {
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard.',
    techs: ['html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/p3d.svg',
    featuredPopupImage: 'images/Snapshoot-Portfolio.svg',
    linkToLiveVersion: 'https://zhadier.github.io/My-Portofolio/',
    linkToSource: 'https://github.com/zhadier/My-Portofolio',
    class: 'project4',
    id: 'but4',
  },
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard.',
    techs: ['html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/proj-img.svg',
    featuredPopupImage: 'images/Snapshoot-Portfolio.svg',
    linkToLiveVersion: 'https://zhadier.github.io/My-Portofolio/',
    linkToSource: 'https://github.com/zhadier/My-Portofolio',
    class: 'project5',
    id: 'but5',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard.',
    techs: ['html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/p2d.svg',
    featuredPopupImage: 'images/Snapshoot-Portfolio.svg',
    linkToLiveVersion: 'https://zhadier.github.io/My-Portofolio/',
    linkToSource: 'https://github.com/zhadier/My-Portofolio',
    class: 'project6',
    id: 'but6',
  },
  {
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard.',
    techs: ['html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/p3d.svg',
    featuredPopupImage: 'images/Snapshoot-Portfolio.svg',
    linkToLiveVersion: 'https://zhadier.github.io/My-Portofolio/',
    linkToSource: 'https://github.com/zhadier/My-Portofolio',
    class: 'project7',
    id: 'but7',
  },
];

function creatProject(project) {
  worksSection.innerHTML += `
  <article class="card ${project.class}">
  <div class="card-body">
      <div class="project-Head">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
      </div>
      <ul>
          <li><a href="https://en.wikipedia.org/wiki/HTML" class="program-Link">${project.techs[0]}</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"
                  class="program-Link">${project.techs[1]}</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Ruby" class="program-Link">${project.techs[2]}</a></li>
      </ul>
      <button class="project-Button" id="${project.id}">See Project</button>
  </div>
</article>`;
  if (project.class === 'project1') {
    const project1 = document.querySelector('.project1');
    const imgP1 = document.createElement('img');
    imgP1.src = 'images/p1.svg';
    imgP1.alt = 'Multi Post Stories Project Image';
    imgP1.id = 'p1image';
    project1.insertBefore(imgP1, project1.firstChild);
    const project1tech = document.querySelector('.project1 ul');
    project1tech.innerHTML = `<li><a href="https://en.wikipedia.org/wiki/CSS" class="program-Link">${project.techs[0]}</a></li>
    <li><a href="https://en.wikipedia.org/wiki/HTML" class="program-Link">${project.techs[1]}</a></li>
    <li><a href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"
            class="program-Link">${project.techs[2]}</a></li>
    <li><a href="https://en.wikipedia.org/wiki/Ruby" class="program-Link">${project.techs[3]}</a></li>`;
  } else {
    document.querySelector(`.${project.class}`).setAttribute('style', `background: url(${project.featuredImage}); background-repeat: no-repeat; background-size: cover;`);
  }
}

function createPopUp(project) {
  const div = document.createElement('div');
  div.className = 'backdrop';
  div.innerHTML += `<section class="popUp" data-role="popup">
  <div class="container">
      <h3 class="popup-Name">${project.name}</h3>
      <button id="popup-Close" type="button">x</button>
  </div>
  <div class="container">
      <ul class="popup-List">
          <li>
              <a href="#">${project.techs[0]}</a>
          </li>
          <li>
              <a href="#">${project.techs[1]}</a>
          </li>
          <li>
              <a href="#">${project.techs[2]}</a>
          </li>
      </ul>
  </div>
  <div class="container wrap">
  <div class="img-Container">
      <img src=${project.featuredPopupImage} class="popup-Image" alt="Project Image">
      </div>
      <div class="popup-Main">
          <p class="popup-Text">${project.description}</p>
          <div class="popup-btn-group">
              <button><a href="${project.linkToLiveVersion}" class="live-Link"><span>See Live</span> <img
                          src="images/Icon-seelive.svg" alt=""></a></button>
              <button><a href="${project.linkToSource}" class="source-Link"><span>See Source</span> <img src="images/github-white.png"
                          alt=""></a></button>
          </div>
      </div>
  </div>
</section>`;
  worksSection.appendChild(div);
  document.querySelector('#popup-Close').addEventListener('click', () => {
    worksSection.removeChild(div);
  });
}

for (let i = 0; i < projectsArray.length; i += 1) {
  creatProject(projectsArray[i]);
}

const PopUp1 = document.querySelector(`#${projectsArray[0].id}`);
PopUp1.addEventListener('click', () => { createPopUp(projectsArray[0]); });
const PopUp2 = document.querySelector(`#${projectsArray[1].id}`);
PopUp2.addEventListener('click', () => { createPopUp(projectsArray[1]); });
const PopUp3 = document.querySelector(`#${projectsArray[2].id}`);
PopUp3.addEventListener('click', () => { createPopUp(projectsArray[2]); });
const PopUp4 = document.querySelector(`#${projectsArray[3].id}`);
PopUp4.addEventListener('click', () => { createPopUp(projectsArray[3]); });
const PopUp5 = document.querySelector(`#${projectsArray[4].id}`);
PopUp5.addEventListener('click', () => { createPopUp(projectsArray[4]); });
const PopUp6 = document.querySelector(`#${projectsArray[5].id}`);
PopUp6.addEventListener('click', () => { createPopUp(projectsArray[5]); });
const PopUp7 = document.querySelector(`#${projectsArray[6].id}`);
PopUp7.addEventListener('click', () => { createPopUp(projectsArray[6]); });

// Mobile menu (Dynamic HTML)
const openMenu = document.querySelector('.nav-Button');
const closeMenu = document.querySelector('.nav-Button-Close');
const menu = document.querySelector('.mobile-Menu');
const menuLinks = document.querySelectorAll('.nav-Menu-List li');

closeMenu.addEventListener('click', () => {
  menu.style.top = '-150%';
});

openMenu.addEventListener('click', () => {
  menu.style.top = '0%';
});

menuLinks.forEach((li) => {
  li.addEventListener('click', () => {
    menu.style.top = '-150%';
  });
});

// Form Validation
const footerForm = document.querySelector('.footer-form');
const emailInput = footerForm.querySelector('#email');
const errorMessage = footerForm.querySelector('button + span');

function err(message) {
  errorMessage.textContent = message;
  errorMessage.setAttribute('style', 'color: red; font-size: 15px;font-family: "Inter", sans-serif; ');
  emailInput.setAttribute('style', 'border-bottom: 2px solid red; background: rgba(255, 0, 0, 0.1);');
  return false;
}

function succ() {
  errorMessage.textContent = '';
  emailInput.setAttribute('style', ' border-bottom: 1px solid #DBD8D7;background: white;');
  return true;
}

function validateLowerCase(input, errorMsg) {
  if (input.value.trim() === '') {
    return err('Please input required details');
  }
  if (input.value !== input.value.toLowerCase()) {
    return err(errorMsg);
  }
  return succ();
}

footerForm.addEventListener('submit', (event) => {
  if (!validateLowerCase(emailInput, 'Please make sure email field is lower case.')) {
    event.preventDefault();
  }
});

// Local Storage
// using the same global variable for form defined in form validation called footer form.

let userName = footerForm.querySelector('#name');
let userEmail = footerForm.querySelector('#email');
let userMessage = footerForm.querySelector('#msg');

function storeFormData() {
  localStorage.setItem('user', JSON.stringify({ name: userName.value, email: userEmail.value, text: userMessage.value }));
}

footerForm.addEventListener('focusout', storeFormData());
