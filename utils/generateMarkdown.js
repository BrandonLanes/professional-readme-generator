// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// must be 3 licenses, any 3
export function renderLicenseBadge(license) {
  if (!license) {
  return '';
  }

  const licenseBadges = {
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    IBM: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
  };

  return licenseBadges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { // this seems like it might look like the html function from the mini project
  // except with a README.md template, and not an html template
  return `# ${data.title}

## Description

${data.description}
`;
}

export default generateMarkdown;
