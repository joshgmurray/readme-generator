// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return '## License\n' + license + '\n';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let readMe = '';
  readMe += `# ReadMe Generator - ${data.title}\n` + data.description + '\n' +
    `## Github user Name\n ${data.username}` + '\n' +
    `## Installation\n` + data.installation + '\n' +
    '## Usage\n' + data.usage + '\n' +
    '## Contributing\n' + data.contributing + '\n' +
    renderLicenseSection(data.license);
  return readMe;
}

module.exports = generateMarkdown;
