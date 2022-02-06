// array of licenses with matchings badges
const licenses = [
  {
    license: "Apache 2.0",
    badge:
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    licenceURL: "https://opensource.org/licenses/Apache-2.0",
  },
  {
    license: "Boost 1.0",
    badge:
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    licenceURL: "https://www.boost.org/LICENSE_1_0.txt",
  },
  {
    license: "BSD 3-Clause",
    badge:
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    licenceURL: "https://opensource.org/licenses/BSD-3-Clause",
  },
  {
    license: "CC0 1.0",
    badge:
      "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
    licenceURL: "http://creativecommons.org/publicdomain/zero/1.0/",
  },
  {
    license: "EPL 1.0",
    badge:
      "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    licenceURL: "https://opensource.org/licenses/EPL-1.0",
  },
  {
    license: "GPLv3",
    badge:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    licenceURL: "https://www.gnu.org/licenses/gpl-3.0",
  },
  {
    license: "ISC",
    badge:
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    licenceURL: "https://opensource.org/licenses/ISC",
  },
  {
    license: "MIT",
    badge:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    licenceURL: "https://opensource.org/licenses/MIT",
  },
  {
    license: "MPL 2.0",
    badge:
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    licenceURL: "https://opensource.org/licenses/MPL-2.0",
  },
  {
    license: "ODbL",
    badge:
      "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)",
    licenceURL: "https://opendatacommons.org/licenses/odbl/",
  },
  {
    license: "ODC BY",
    badge:
      "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)",
    licenceURL: "https://opendatacommons.org/licenses/by/",
  },
  {
    license: "Perl",
    badge:
      "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
    licenceURL: "https://opensource.org/licenses/Artistic-2.0",
  },
  {
    license: "Artistic 2.0",
    badge:
      "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
    licenceURL: "https://opensource.org/licenses/Artistic-2.0",
  },
  {
    license: "OFL 1.1",
    badge:
      "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
    licenceURL: "https://opensource.org/licenses/OFL-1.1",
  },
  {
    license: "Unlicense",
    badge:
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    licenceURL: "http://unlicense.org/",
  },
  {
    license: "WTFPL",
    badge:
      "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
    licenceURL: "http://www.wtfpl.net/about/",
  },
];

// functions to get badge or license URL based on choice of license
const getBadge = function (choice) {
  var matchingBadge = licenses.filter(function (licenseObj) {
    return licenseObj.license == choice;
  });
  return matchingBadge[0].badge;
};

const getLicenseURL = function (choice) {
  var matchingURL = licenses.filter(function (licenseObj) {
    return licenseObj.license == choice;
  });
  return matchingURL[0].licenceURL;
};

// function to return array of all license values in 'licences'
const getAllLicences = function () {
  const licencesValues = licenses.map((obj) => Object.values(obj));
  const licensesArray = [];
  for (arr of licencesValues) {
    licensesArray.push(arr[0]);
  }
  return licensesArray;
};

//function to generate md for README
function generateMarkdown(data) {
  const badge = getBadge(data.license);
  const licenceURL = getLicenseURL(data.license);
  return `<div id="top"></div>

[![${data.license} License][license-shield]]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/${data.githubUsername}/${data.githubRepoName}">  
  <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">${data.title}</h3>

  <p align="center">
    ${data.tagline}
    <br />
    <a href="https://github.com/${data.githubUsername}/${data.githubRepoName}"><strong>Jump to the code »</strong></a>
    <br />
    <br />
    <a href="https://github.com/${data.githubUsername}/${data.githubRepoName}">View Demo</a>
    ·
    <a href="https://github.com/${data.githubUsername}/${data.githubRepoName}/issues">Report Bug</a>
    ·
    <a href="https://github.com/${data.githubUsername}/${data.githubRepoName}/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

${data.motivation}

${data.description}

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

${data.usage}

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the ${data.license} license. See ${licenceURL} for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/${data.githubUsername}/${data.githubRepoName}](https://github.com/${data.githubUsername}/${data.githubRepoName})
LinkedIn: [https://linkedin.com/in/${data.linkedinUsername}](https://linkedin.com/in/${data.linkedinUsername})

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: ${badge}
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/${data.linkedinUsername}`;
}

exports.generateMarkdown = generateMarkdown;
exports.getAllLicences = getAllLicences;
