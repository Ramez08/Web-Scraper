const PORT = 8000; // The port number that the server will listen on.
const axios = require('axios'); // The axios library is used to make HTTP requests.
const cheerio = require('cheerio'); // The cheerio library is used to parse HTML.
const express = require('express'); // The express library is used to create a web server.

const app = express(); // Create an express application.

// Insert the link you want to scrape.
const baseurl = 'https://www.lttstore.com/collections/all';

axios(baseurl)
  .then(response => {
    // Get the HTML response from the axios request.
    const html = response.data;

    // Create a Cheerio object from the HTML response.
    const site = cheerio.load(html);

    // Create an empty array to store the products.
    const products = [];

    // Iterate over all of the `a` elements in the HTML.
    site('a').each(function() {
      // Get the text content of the `a` element.
      const Product = site(this).text().trim();

      // Get the href attribute of the `a` element.
      const baseurl = site(this).attr('href');

      // If the href attribute starts with `/products/`, then...
      if (baseurl && baseurl.startsWith('/products/')) {
        // Create a new object to store the product information.
        const Url = 'https://www.lttstore.com' + baseurl;
        products.push({
          Product,
          Url
        });
      }
    });

    // Log the products to the console.
    console.log(products);
  })
  .catch(err => console.log(err));

// Start the server on the specified port.
app.listen(PORT, () => console.log('server running on PORT ' + PORT.toString()));
