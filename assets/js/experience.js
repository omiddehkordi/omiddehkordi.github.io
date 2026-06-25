//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data Researcher",

    place: "Aldora",
    time: "(September 2025 – Present) · Remote",
    desp: "<li>Architected an agentic AI system for the Aldora web stack using Azure OpenAI, implementing RAG and non-RAG agents with Turbopuffer as the vector store.</li><li>Built an embedding pipeline ingesting monthly, daily, and PDF data from Snowflake into Turbopuffer for vector search.</li><li>Developed web scraping pipelines to collect entertainment and gaming industry data, applying regression models to surface actionable trends.</li>",
  },
  {
    title: "Engineering Intern",

    place: "DigiProces",
    time: "(May 2025 – June 2025) · Barcelona, Spain",
    desp: "<li>Developed a dynamic data collection method that responded to technician changes in soldering system programs and collected error information from the technician.</li><li>Initiated development of ML models to predict and diagnose soldering system errors in production.</li>",
  },
  {
    title: "Software and Test Engineer",

    place: "Acculogic Inc",
    time: "(June 2022 – April 2025) · Lake Forest, California",
    desp: "<li>Debugged and employed test programs for Printed Circuit Board (PCB) and battery testing, reducing the cost of defects for customers by up to 35% in the final assembly and generating thousands of dollars of revenue for the company.</li><li>Built a Python script, adopted by Lucid and Tesla, to automate battery test program generation for the FLS Flying Probe Tester, cutting pre-test time by 50%.</li><li>Developed a program to analyze battery data and output statistics to ensure validity of tests and improve error detection by 10%.</li><li>Constructed a Python script to convert test coverage data from text to Excel format instantaneously, allowing for more thorough data analysis and automating the conversion process.</li><li>Utilized Jupyter Notebook for battery data visualization projects for marketing and research purposes.</li>",
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

