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

// Works Section Dynamically Created

const projectsArray = [
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard.',
    technologies: ['css', 'html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/p1.svg',
    linkToLiveVersion: null,
    linkToSource: null,
    class: 'project1',
  },
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/p1.svg',
    linkToLiveVersion: null,
    linkToSource: null,
    class: 'project2',
  },
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/p1.svg',
    linkToLiveVersion: null,
    linkToSource: null,
    class: 'project3',
  },
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/p1.svg',
    linkToLiveVersion: null,
    linkToSource: null,
    class: 'project4',
  },
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/p1.svg',
    linkToLiveVersion: null,
    linkToSource: null,
    class: 'project5',
  },
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/p1.svg',
    linkToLiveVersion: null,
    linkToSource: null,
    class: 'project6',
  },
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/p1.svg',
    linkToLiveVersion: null,
    linkToSource: null,
    class: 'project7',
  },
];