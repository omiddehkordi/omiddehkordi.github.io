//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Part-time Data Researcher",

    place: "Aldora",
    time: "(September 2025 – Present) · Remote",
    desp: "<li>Currently integrating a Small Language Model (SLM) into the Aldora Web Stack, covering embedding pipeline development, model training and RAG architecture.</li><li>Working on projects to collect and analyze data in the entertainment and gaming industry.</li>",
  },
  {
    title: "Engineering Intern",

    place: "DigiProces",
    time: "(May 2025 – June 2025) · Barcelona, Spain",
    desp: "<li>Developed a dynamic data collection method that responded to technician changes in soldering system programs and collected error information from the technician, enabling the collection of labeled data to train Machine Learning models.</li><li>Led the initiation phase of developing Machine Learning models to predict fixes to soldering system errors in production.</li><li>Collaborated with cross-functional teams to ensure the successful integration of data-driven solutions, enhancing operational efficiency.</li><li>Presented a final presentation on the methods developed to a group of engineers and managers detailing the progress made and next steps.</li>",
  },
  {
    title: "Software and Test Engineer",

    place: "Acculogic Inc",
    time: "(June 2022 – April 2025) · Lake Forest, California",
    desp: "<li>Debugged and employed test programs for PCB and battery testing in collaboration with application engineers, reducing the cost of defects for customers by up to 35% in final assembly.</li><li>Created a Python script to generate battery test programs for the FLS Flying Probe Tester, resulting in a 50% reduction in pre-test time — adopted by Lucid and Tesla.</li><li>Developed a program to analyze battery data and output statistics to ensure test validity and improve error detection by 10%.</li><li>Constructed a Python script to convert test coverage data from text to Excel format instantaneously, automating the conversion process.</li><li>Installed probe modules into the FLS tester to increase test coverage and reduce test time by up to 60%.</li><li>Utilized Jupyter Notebook for battery data visualization projects for marketing and research purposes.</li>",
  },
  {
    title: "Computer Science Intern",

    place: "Acculogic Inc",
    time: "(May 2021 – August 2021) · Lake Forest, California",
    desp: "<li>Designed a C++ program using Object-oriented principles to evaluate FLS Tester performance by comparing PCB test data.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, place, time, desp }) =>
      (output += `
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400">
      <div class="card card1">
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

