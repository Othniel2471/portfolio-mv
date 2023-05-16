const desktopportfolio = [
  {
    id: 0,
    workImg: 'assets/images/background/desktop/portfolio image 1.png',
    workTitle: 'tonic',
    workRole: { role: 'canopy', job: 'Back End Dev', year: 2015 },
    workDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    workTools: { stack1: 'HTML', stack2: 'CSS', stack3: 'Javascript' },
  },
  {
    id: 1,
    class: 'two',
    workImg: 'assets/images/background/desktop/portfolio image 2.png',
    workTitle: 'Multi-Post Stories',
    workRole: { role: 'facebook', job: 'Full Stack  Dev', year: 2015 },
    workDetails: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    workTools: {
      stack1: 'HTML', stack2: 'Ruby on rails', stack3: 'CSS', stack4: 'Javascript',
    },
  },
  {
    id: 2,
    workImg: 'assets/images/background/desktop/portfolio image 3.png',
    workTitle: 'facebook 360',
    workRole: { role: 'facebook', job: 'Full Stack  Dev', year: 2015 },
    workDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    workTools: {
      stack1: 'HTML', stack2: 'Ruby on rails', stack3: 'CSS', stack4: 'Javascript',
    },
  },
  {
    id: 3,
    class: 'two',
    workImg: 'assets/images/background/desktop/portfolio image 4.png',
    workTitle: 'uber navigation',
    workRole: { role: 'uber', job: 'Lead Developer', year: 2018 },
    workDetails: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    workTools: {
      stack1: 'HTML', stack2: 'Ruby on rails', stack3: 'CSS', stack4: 'Javascript',
    },
  },
];

const mobilePortfolio = [
  {
    id: 0,
    workImg: 'assets/images/projects/multi-post.png',
    workTitle: 'Multi-post Stories',
    workRole: { role: 'canopy', job: 'Back End Dev', year: 2015 },
    workDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    workTools: { stack1: 'HTML', stack2: 'CSS', stack3: 'Javascript' },
  },
  {
    id: 1,
    workImg: 'assets/images/projects/tonic.png',
    workTitle: 'tonic',
    workRole: { role: 'canopy', job: 'Back End Dev', year: 2015 },
    workDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    workTools: { stack1: 'HTML', stack2: 'CSS', stack3: 'Javascript' },
  },
  {
    id: 2,
    workImg: 'assets/images/projects/Snapshoot Portfolio.png',
    workTitle: 'tonic',
    workRole: { role: 'canopy', job: 'Back End Dev', year: 2015 },
    workDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    workTools: { stack1: 'HTML', stack2: 'CSS', stack3: 'Javascript' },
  },
  {
    id: 3,
    workImg: 'assets/images/projects/anoter-one.png',
    workTitle: 'Multi-Post Stories',
    workRole: { role: 'canopy', job: 'Back End Dev', year: 2015 },
    workDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    workTools: { stack1: 'HTML', stack2: 'CSS', stack3: 'Javascript' },
  },
];

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const navLink = document.querySelectorAll('.nav-content');
const sectionPortfolio = document.querySelector('#work-section-desktop');
const mobileSectionPortfolio = document.querySelector('#work-section-mobile');

function toggle() {
  menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
  menuToggle.classList.remove('active');
  mobileMenu.classList.remove('active');
}

menuToggle.addEventListener('click', toggle);
navLink.forEach((btn) => {
  btn.addEventListener('click', closeMobileMenu);
});

function displayDesktopPortfolio(portfolio) {
  const displayDesktopPortfolio = portfolio.map((item) => `
    <div class="project one ${item.class}" id='${item.id}'>
    <div class="work-img">
        <img src="${item.workImg}" alt="tonic image">
    </div>
    <div class="work-description" id="${item.id}">
        <h2 class="work-title">${item.workTitle}</h2>
        <ul class="canopy">
            <li>${item.workRole.role}</li>
            <li>${item.workRole.job}</li>
            <li>${item.workRole.year}</li>
        </ul>
        <p class="work-details">
        ${item.workDetails}
        </p>
        <ul class="work-tools">
            <li>${item.workTools.stack1}</li>
            <li>${item.workTools.stack2}</li>
            <li>${item.workTools.stack3}</li>
            ${item.workTools.stack4 ? `<li>${item.workTools.stack4}</li>` : ''}
        </ul>
        <button class="btn" data-modal="${item.id}">See Project</button>
    </div>
</div>
    `).join('');

  sectionPortfolio.innerHTML = displayDesktopPortfolio;
}

function displayMobilePortfolio(portfolio) {
  const displayPortfolio = portfolio.map((item) => `
        <div class="project">
        <div class="work-img">
            <img src="${item.workImg}" alt="tonic image">
        </div>
        <div class="work-description">
            <h2 class="work-title">${item.workTitle}</h2>
            <ul class="canopy">
                <li>${item.workRole.role}</li>
                <li>${item.workRole.job}</li>
                <li>${item.workRole.year}</li>
            </ul>
            <p class="work-details">
                ${item.workDetails}
            </p>
            <ul class="work-tools">
                <li>${item.workTools.stack1}</li>
                <li>${item.workTools.stack2}</li>
                <li>${item.workTools.stack3}</li>
                 ${item.workTools.stack4 ? `<li>${item.workTools.stack4}</li>` : ''}
            </ul>
            <button class="btn" data-modal="${item.id}">See Project</button>
        </div>
    </div>
    `).join('');
  mobileSectionPortfolio.innerHTML = displayPortfolio;
}

// checkscreen function
function checkScreen() {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 767) {
    displayDesktopPortfolio(desktopportfolio);
    return;
  }
  displayMobilePortfolio(mobilePortfolio);
}

// load portfolio section
window.addEventListener('DOMContentLoaded', () => {
  checkScreen();
});