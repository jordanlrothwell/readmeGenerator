// array of licenses with matchings badges
const licenses = [
  {
    license: "Apache 2.0",
    badge:
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  },
  {
    license: "Boost 1.0",
    badge:
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  },
  {
    license: "BSD 3-Clause",
    badge:
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  },
  {
    license: "CC0 1.0",
    badge:
      "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
  },
  {
    license: "EPL 1.0",
    badge:
      "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
  },
  {
    license: "GPLv3",
    badge:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  },
  {
    license: "ISC",
    badge:
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
  },
  {
    license: "MIT",
    badge:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  },
  {
    license: "MPL 2.0",
    badge:
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  },
  {
    license: "ODbL",
    badge:
      "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)",
  },
  {
    license: "ODC BY",
    badge:
      "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)",
  },
  {
    license: "Perl",
    badge:
      "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
  },
  {
    license: "Artistic 2.0",
    badge:
      "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
  },
  {
    license: "OFL 1.1",
    badge:
      "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
  },
  {
    license: "Unlicense",
    badge:
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  },
  {
    license: "WTFPL",
    badge:
      "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
  },
];

// function to get badge based on choice of license
function getBadge (choice) {
  var matchingBadge = licenses.filter(function (licenseObj) {
    return licenseObj.license == choice;
  })
  return matchingBadge[0].badge;
};

// keeping track of the variables we're (maybe) going to pass into the template string
let githubUsername;
let githubRepoName;
let imagePath;
let title;
let tagline;
let motivation;
let summary;
let gettingStarted;

//function to generate md for README
function generateMarkdown(data) {
  return `<div id="top"></div>

  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Stargazers][stars-shield]][stars-url]
  [![Issues][issues-shield]][issues-url]
  [![MIT License][license-shield]][license-url]
  [![LinkedIn][linkedin-shield]][linkedin-url]
  
  
  
  <!-- PROJECT LOGO -->
  <br />
  <div align="center">
    <a href="https://github.com/${githubUsername}/${githubRepoName}">  
    <img src="${imagePath}" alt="Logo" width="80" height="80">
    </a>
  
    <h3 align="center">${title}</h3>
  
    <p align="center">
      ${tagline}
      <br />
      <a href="https://github.com/${githubUsername}/${githubRepoName}"><strong>Jump to the code »</strong></a>
      <br />
      <br />
      <a href="https://github.com/${githubUsername}/${githubRepoName}">View Demo</a>
      ·
      <a href="https://github.com/${githubUsername}/${githubRepoName}/issues">Report Bug</a>
      ·
      <a href="https://github.com/${githubUsername}/${githubRepoName}/issues">Request Feature</a>
    </p>
  </div>
  
  
  
  <!-- TABLE OF CONTENTS -->
  <details>
    <summary>Table of Contents</summary>
    <ol>
      <li>
        <a href="#about-the-project">About The Project</a>
        <ul>
          <li><a href="#built-with">Built With</a></li>
        </ul>
      </li>
      <li>
        <a href="#getting-started">Getting Started</a>
        <ul>
          <li><a href="#installation">Installation</a></li>
        </ul>
      </li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#acknowledgments">Acknowledgments</a></li>
    </ol>
  </details>
  
  
  
  <!-- ABOUT THE PROJECT -->
  ## About The Project
  
  [![Product Name Screen Shot][product-screenshot]](https://example.com)
  
  ${motivation}

  ${summary}
  
  <p align="right">(<a href="#top">back to top</a>)</p>
  


  ### Built With
  
  The following major frameworks/libraries were used to bootstrap this project:
  
  ${ /*should put checkbox here */''}
  * [Next.js](https://nextjs.org/)
  * [React.js](https://reactjs.org/)
  * [Vue.js](https://vuejs.org/)
  * [Angular](https://angular.io/)
  * [Svelte](https://svelte.dev/)
  * [Laravel](https://laravel.com)
  * [Bootstrap](https://getbootstrap.com)
  * [JQuery](https://jquery.com)
  
  <p align="right">(<a href="#top">back to top</a>)</p>
  
  
  
  <!-- GETTING STARTED -->
  ## Getting Started
  
  ${gettingStarted /* should this be dot points? */}
  
  <p align="right">(<a href="#top">back to top</a>)</p>
  
  
  
  <!-- USAGE EXAMPLES -->
  ## Usage
  
  _For more examples, please refer to the [Documentation](https://example.com)_
  
  <p align="right">(<a href="#top">back to top</a>)</p>
  
  
  
  <!-- LICENSE -->
  ## License
  
  Distributed under the ${license}. See ${licenseLink} for more information.
  
  <p align="right">(<a href="#top">back to top</a>)</p>
  
  
  
  <!-- CONTACT -->
  ## Contact
  
  Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com
  
  Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)
  
  <p align="right">(<a href="#top">back to top</a>)</p>
  
  
  
  <!-- ACKNOWLEDGMENTS -->
  ## Acknowledgments
  
  Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!
  
  * [Choose an Open Source License](https://choosealicense.com)
  * [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
  * [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
  * [Malven's Grid Cheatsheet](https://grid.malven.co/)
  * [Img Shields](https://shields.io)
  * [GitHub Pages](https://pages.github.com)
  * [Font Awesome](https://fontawesome.com)
  * [React Icons](https://react-icons.github.io/react-icons/search)
  
  <p align="right">(<a href="#top">back to top</a>)</p>
  
  
  
  <!-- MARKDOWN LINKS & IMAGES -->
  <!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
  [contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
  [contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
  [forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
  [forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
  [stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
  [stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
  [issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
  [issues-url]: https://github.com/othneildrew/Best-README-Template/issues
  [license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
  [license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
  [linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
  [linkedin-url]: https://linkedin.com/in/othneildrew
  [product-screenshot]: images/screenshot.png;`
}

module.exports = generateMarkdown;
