# Web Scraper

This Node.js script is a demonstration of web scraping capabilities using Axios and Cheerio libraries. It showcases the ability to extract product information from the LTT Store website (https://www.lttstore.com/collections/all) by scraping the titles and URLs of products whose URLs start with '/products/'. The extracted data is then displayed using an Express server.

This project was based on the following video tutorial: [Web Scraping in Node.js with Axios and Cheerio](https://youtu.be/-3lqUHeZs_0)

## Prerequisites

- Node.js installed on your machine
- Package.json file with the required dependencies (axios, cheerio, express)

## Installation

1. Clone the repository or download the script file.
2. Navigate to the project directory.
3. Install the dependencies by running the following command:

   ```shell
   npm install
   ```

## Usage

1. Open the script file (`index.js`) and modify the `PORT` constant if necessary.
2. Run the script using the following command:

   ```shell
   node index.js
   ```

3. The script will scrape the LTT Store website and log the extracted product titles and URLs to the console.
4. The Express server will start and listen on the specified port.
5. Visit `http://localhost:<PORT>` in your web browser to see the extracted data.

## Skill Set Demonstration

This project serves as a demonstration of the following skills:

- Web scraping using Axios and Cheerio libraries.
- Handling HTTP requests and parsing HTML responses.
- Building a basic Express server to serve the scraped data.

Feel free to explore the code to understand the implementation details.

## License

This project is licensed under the [MIT License](LICENSE).

## Disclaimer

Please note that web scraping may be subject to legal and ethical considerations. Ensure that you have permission to scrape data from targeted websites and comply with their terms of service. Use this script responsibly and at your own risk.

## Acknowledgments

- [Axios](https://github.com/axios/axios)
- [Cheerio](https://github.com/cheeriojs/cheerio)
- [Express](https://expressjs.com/)
