AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Part-time Data Researcher",
    cardImage: "assets/images/experience-page/Acculogic.jpeg",
    place: "Aldora",
    time: "(September 2025 – Present) · Remote",
    desp: "<li>Working on projects to collect and analyze data in the entertainment and gaming industry.</li>",
  },
  {
    title: "Engineering Intern",
    cardImage: "assets/images/experience-page/Acculogic.jpeg",
    place: "DigiProces",
    time: "(May 2025 – June 2025) · Barcelona, Spain",
    desp: "<li>Developed a dynamic data collection method that responded to technician changes in soldering system programs and collected error information from the technician, enabling the collection of labeled data to train Machine Learning models.</li><li>Led the initiation phase of developing Machine Learning models to predict fixes to soldering system errors in production.</li><li>Collaborated with cross-functional teams to ensure the successful integration of data-driven solutions, enhancing operational efficiency.</li><li>Presented a final presentation on the methods developed to a group of engineers and managers detailing the progress made and next steps.</li>",
  },
  {
    title: "Software and Test Engineer",
    cardImage: "assets/images/experience-page/Acculogic.jpeg",
    place: "Acculogic Inc",
    time: "(June 2022 – April 2025) · Lake Forest, California",
    desp: "<li>Debugged and employed test programs for PCB and battery testing in collaboration with application engineers, reducing the cost of defects for customers by up to 35% in final assembly.</li><li>Created a Python script to generate battery test programs for the FLS Flying Probe Tester, resulting in a 50% reduction in pre-test time — adopted by Lucid and Tesla.</li><li>Developed a program to analyze battery data and output statistics to ensure test validity and improve error detection by 10%.</li><li>Constructed a Python script to convert test coverage data from text to Excel format instantaneously, automating the conversion process.</li><li>Installed probe modules into the FLS tester to increase test coverage and reduce test time by up to 60%.</li><li>Utilized Jupyter Notebook for battery data visualization projects for marketing and research purposes.</li>",
  },
  {
    title: "Computer Science Intern",
    cardImage: "assets/images/experience-page/Acculogic.jpeg",
    place: "Acculogic Inc",
    time: "(May 2021 – August 2021) · Lake Forest, California",
    desp: "<li>Designed a C++ program using Object-oriented principles to evaluate FLS Tester performance by comparing PCB test data.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

/*const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  }
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
    href: "https://uplift.girlscript.tech/",
  }
  
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};*/
