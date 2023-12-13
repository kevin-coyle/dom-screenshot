# Screenshot DOM Element

This project is a simple script that uses Puppeteer to take screenshots of specific DOM elements on a webpage.

## Setup

1. Clone the repository.
2. Run `npm install` to install the dependencies.

## Usage

The script is currently set up to take screenshots of elements on 'https://bigmedium.com/'. The elements to screenshot are defined in the `elements` array in `index.js`.

To run the script, use the command `node index.js`. The screenshots will be saved in the `out` directory. Or you can run `npm start`.

## Customization

You can customize the script to take screenshots of elements on any webpage. Simply change the URL and the `elements` array to suit your needs.

## Dependencies

This project uses the following npm packages:

- puppeteer

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)