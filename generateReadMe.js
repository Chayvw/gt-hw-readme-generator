function createReadMe(newData){
    const { userName, email, title, description, license, dependencies, repo, contributing} = newData;

    return `
      
    # ${title.charAt(0).toUpperCase() + title.slice(1)}

## ${description}
## Table of Contents


* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

## Usage 

## Credits

## License

## Badges

## Contributing

## Tests

`

 }
 module.exports = createReadMe;