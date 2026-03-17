// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Caltech Artificial Intelligence and Machine Learning Bootcamp",
    cardImage: "assets/images/education-page/simplilearn.jpg",
    moocLink: "https://success.simplilearn.com/76548818",
  },
  {
    title: "Learning SQL Programming",
    cardImage: "assets/images/education-page/sql.png",
    moocLink: "https://www.linkedin.com/learning/certificates/0419ad88585483a685201e58db4b5e57956a1a4f50a4758675b841395202573d?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bl1GCwL1JQtmVBYuZw9CMOg%3D%3D",
  },
];

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
