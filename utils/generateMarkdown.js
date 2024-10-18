// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// must be 3 licenses, any 3
export function renderLicenseBadge(badge) {
  if (!badge) {
  return '';
  }

  const licenseBadges = {
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
    IBM: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]',
  };

  return licenseBadges[badge] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
export function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  const licenseLinks = {
    Apache: '(https://opensource.org/licenses/Apache-2.0)', 
    MIT: '(https://opensource.org/licenses/MIT)',
    IBM: '(https://opensource.org/licenses/IPL-1.0)',
  };

  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
export function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `## License
  This project is licensed under the [${license}](${renderLicenseLink(license)}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { // this seems like it might look like the html function from the mini project
  // except with a README.md template, and not an html template
  return `# ${data.title}

## Description

${data.description}
`;
}

export default generateMarkdown;
