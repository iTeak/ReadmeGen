// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseArr = [
  "Apache license 2.0", 
  "Boost Software License 1.0", 
  "ISC",  
  "MIT", 
  "Mozilla Public License 2.0",  
  "The Unlicense", 
  "zLib License"]
  
  function renderLicenseBadge(license) {
    if (license===licenseArr[0]){
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
    } else if (license===licenseArr[1]){
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    } else if (license===licenseArr[2]){
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    } else if (license===licenseArr[3]){
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (license===licenseArr[4]){
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
     } else if (license===licenseArr[5]){
       return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
     } else if (license===licenseArr[6]){
      return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
     } else {
       return ""
     }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license===licenseArr[0]){
      return `[${licenseArr[0]}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license===licenseArr[1]) {
    return `[${licenseArr[1]}] (https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license===licenseArr[2]) {
    return `[${licenseArr[2]}] (https://opensource.org/licenses/ISC)`
  } else if (license===licenseArr [3]) {
    return `[${licenseArr[3]}] (https://opensource.org/licenses/MIT)`
  } else if (license===licenseArr [4]) {
    return `[${licenseArr[4]}] (https://opensource.org/licenses/MPL-2.0)`
  } else if (license===licenseArr [5]) {
    return `[${licenseArr[5]}] (http://unlicense.org/)`
  } else if (license===licenseArr [6]) {
    return `[${licenseArr[6]}] (https://opensource.org/licenses/Zlib)`
  } else {
    return ""
   }
  }
  
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license===licenseArr[0]){
      return `Read more about ${licenseArr[0]} here:`
    } else if (license===licenseArr[1]){
      return `Read more about ${licenseArr[1]} here:`
    } else if (license===licenseArr[2]){
      return `Read more about ${licenseArr[2]} here:`
    } else if (license===licenseArr[3]){
      return `Read more about ${licenseArr[3]} here:`
    } else if (license===licenseArr[4]){
      return `Read more about ${licenseArr[4]} here:`
    } else if (license===licenseArr[5]){
      return `Read more about ${licenseArr[5]} here:`
    } else if (license===licenseArr[6]){
      return `Read more about ${licenseArr[6]} here:`
    } else {
      return ""
    }
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
    ## Badges
    ${renderLicenseBadge(data.license)}
    ## Table of Contents
    * [License](#license)
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [How to Contribute](#how-to-contribute)
    * [Tests](#tests)
    * [Questions](#questions)
    ## License
    ${renderLicenseSection(data.license)}
    ${renderLicenseLink(data.license)}
    ## Description
    ${data.description}
    ## Installation
    ${data.install}
    ## Usage
    ${data.usage}
    ## How to Contribute
    [Contributor Information](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)  
    ${data.contributing}
    ## Tests
    ${data.testing}
    ## Questions?
    ### Reach me here: 
    [${data.username}](https://github.com/${data.username})  
    ${data.email}`;
  
  }
  
  module.exports = generateMarkdown;