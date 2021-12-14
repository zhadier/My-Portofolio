// Works Section Dynamically Created
const worksSection = document.querySelector('#Works');
function creatProject(project) {
  worksSection.innerHTML += `
  <article class="card ${project.name}">
  <img id="p1image" src="${project.featuredImage}" alt="${project.name} Image">
  <div class="card-body">
      <div class="project-Head">
          <h3>${project.description}</h3>
          <p></p>
      </div>
      <ul>
          <li><a href="https://en.wikipedia.org/wiki/CSS" class="program-Link"></a></li>
          <li><a href="https://en.wikipedia.org/wiki/HTML" class="program-Link"></a></li>
          <li><a href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"
                  class="program-Link"></a></li>
          <li><a href="https://en.wikipedia.org/wiki/Ruby" class="program-Link"></a></li>
      </ul>
      <button class="project-Button"></button>
  </div>
</article>`;
}
const projectsArray = [
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard.',
    technologies: ['css', 'html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/p1.svg',
    linkToLiveVersion: 'https://zhadier.github.io/My-Portofolio/',
    linkToSource: 'https://github.com/zhadier/My-Portofolio',
    class: 'project1',
  },
  {
    name: 'Profesional Art Printing Data',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard.',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/p1d.svg',
    linkToLiveVersion: 'https://zhadier.github.io/My-Portofolio/',
    linkToSource: 'https://github.com/zhadier/My-Portofolio',
    class: 'project2',
  },
  {
    name: 'Data Dashboard Healthcare',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard.',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/p2d.svg',
    linkToLiveVersion: 'https://zhadier.github.io/My-Portofolio/',
    linkToSource: 'https://github.com/zhadier/My-Portofolio',
    class: 'project3',
  },
  {
    name: 'Website Protfolio',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard.',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/p3d.svg',
    linkToLiveVersion: 'https://zhadier.github.io/My-Portofolio/',
    linkToSource: 'https://github.com/zhadier/My-Portofolio',
    class: 'project4',
  },
  {
    name: 'Profesional Art Printing Data',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard.',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/proj-img.svg',
    linkToLiveVersion: 'https://zhadier.github.io/My-Portofolio/',
    linkToSource: 'https://github.com/zhadier/My-Portofolio',
    class: 'project5',
  },
  {
    name: 'Data Dashboard Healthcare',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard.',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/p2d.svg',
    linkToLiveVersion: 'https://zhadier.github.io/My-Portofolio/',
    linkToSource: 'https://github.com/zhadier/My-Portofolio',
    class: 'project6',
  },
  {
    name: 'Website Protfolio',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard.',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/p3d.svg',
    linkToLiveVersion: 'https://zhadier.github.io/My-Portofolio/',
    linkToSource: 'https://github.com/zhadier/My-Portofolio',
    class: 'project7',
  },
];

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
