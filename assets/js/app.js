"use strict";

// Header
let header = $(`
<nav id="navbar">
  <a href="index.html"></a>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="experience.html">Experience</a></li>
    <li><a href="projects.html">Projects</a></li>
    <li><a href="education.html">Education</a></li>
    <li><a href="daily_digest.html">Daily Digest</a></li>
  </ul>
</nav>
`);

// Footer
let footer = $(`
<footer id="footer">
  <form action="https://formcarry.com/s/X5kguuagaM" method="POST" target="_blank" enctype="multipart/form-data">
    <h6>Contact me</h6>
    <input type="text" name="name" placeholder="Full Name" />
    <input type="email" name="email" placeholder="Email Address" />
    <textarea name="message" placeholder="Enter your message..."></textarea>
    <button type="submit">Send</button>
  </form>
  <div>
    <a href="https://www.linkedin.com/in/omiddehkordi/" target="_blank">LinkedIn</a>
    <a href="https://github.com/omiddehkordi" target="_blank">GitHub</a>
    <a href="https://www.kaggle.com/omiddehkordi" target="_blank">Kaggle</a>
  </div>
</footer>
`);

$(function () {
  $('body').prepend(header);
  $('body').append(footer);

  // Navbar current page highlight
  $('a', '#navbar').each(function () {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current-link');
    }
  });
});
