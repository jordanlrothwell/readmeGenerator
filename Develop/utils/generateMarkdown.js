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
const getBadge = function (choice) {
  var matchingBadge = licenses.filter(function (license) {
    return license.license == choice;
  })
  console.log(matchingBadge);
};

getBadge("Unlicense")

function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
