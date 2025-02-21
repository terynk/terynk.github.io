const experiences = [
  {
    title: "UX Engineer",
    company: "Microsoft",
    date: "July 2024 - Present",
    description: "More to come soon!",
    iconColor: "color-4",
    animateEffect: "fadeInLeft"
  },
  {
    title: "UX Engineer Intern",
    company: "Microsoft",
    date: "June 2023 - September 2023",
    description: "Under the Innovation & Technology Team, I delivered an MVP landing page for the Fluent Emoji Website to be shipped as part of the broader Fluent 2 ecosystem. I architected and statically hosted the website on Azure and Github pages through the Microsoft EMU. I also integrated Application Insights that produced a dashboard summarizing key metrics. Additionally, I presented a final 20 minute presentation centering around the technical process, personal grown, and a demo.",
    iconColor: "color-5",
    animateEffect: "fadeInLeft"
  },
  {
    title: "Explore Intern",
    company: "Microsoft",
    date: "June 2022 - September 2022",
    description: "Under the Enterprise and Cloud Team, implemented cloud parity solutions for the M365 Core Organization through an interactive dashboard that retrieved information regarding services in various clouds. Additionally, I designed a UI/UX for the dashboard in Figma based off feedback that was provided by customers. This dashboard is used internally to help make business decisions and plan development strategies. I had the chance to conduct a heuristics review for an internal global cloud management tool as a second project.",
    iconColor: "color-1",
    animateEffect: "fadeInLeft"
  },
  {
    title: "Virtual Intern",
    company: "CodeDay Labs",
    date: "June 2021 - July 2021",
    description: "Throughout the internship, I constructed a Chrome Extension that tracks the amount of time a user spends on distinct websites. This serves a similar purpose as the Screen Time function on one's phone but is compatible using a desktop. I recorded and edited a final video detailing the process and specific technical stack that was used.",
    iconColor: "color-2",
    animateEffect: "fadeInRight"
  },
  {
    title: "OIT Help Desk Representative",
    company: "Office of Information & Technology",
    date: "February 2021 - June 2022",
    description: "Provided technical support for software and applications to over 45,000 students and 20,000 employees at the University of California, Irvine. I worked with a ticket system to troubleshoot various operating systems. This job helped me enhance my public speaking, customer service, and technical skills.",
    iconColor: "color-3",
    animateEffect: "fadeInLeft"
  },
  {
    title: "Computer Science Instructor",
    company: "Let's Code",
    date: "July 2019 - March 2020",
    description: "I helped develop the Scratch curriculum consisting of 10 unique projects since this was a start-up. I worked on the company website, designing and building an online presence to attract more customers. Furthermore, I assisted with expanding the business through advertisements and taught students the Scratch curriculum. The school also offered lessons in Python and Java.",
    iconColor: "color-4",
    animateEffect: "fadeInTop"
  },
  {
    title: "Assistant Manager",
    company: "Arnott Kenpo Karate",
    date: "August 2020 - September 2021",
    description: "I kept track of cash flow and recurring online payments on a day-to-day basis. I worked here over Covid and therefore had to ensure a safe environment to continue providing lessons. Before resigning, I wrote a 40 page how-to manual for my successor employee. During my time there, I gained experience in hands on renovations such as building staircases and glazing windows.",
    iconColor: "color-5",
    animateEffect: "fadeInLeft"
  }
];

function generateExperienceHTML() {
  const container = document.querySelector('.timeline-centered');
  experiences.forEach(exp => {
    const article = document.createElement('article');
    article.className = `timeline-entry animate-box`;
    article.setAttribute('data-animate-effect', exp.animateEffect);

    article.innerHTML = `
      <div class="timeline-entry-inner">
        <div class="timeline-icon ${exp.iconColor}">
          <em class="icon-pen2"></em>
        </div>
        <div class="timeline-label">
          <h2><a href="#">${exp.title}<br>${exp.company}</a> <span>${exp.date}</span></h2>
          <p>${exp.description}</p>
        </div>
      </div>
    `;

    container.appendChild(article);
  });
}

document.addEventListener('DOMContentLoaded', generateExperienceHTML);