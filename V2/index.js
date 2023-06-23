// Import required libraries
const axios = require('axios'); // For making HTTP requests
const cheerio = require('cheerio'); // For parsing HTML
const os = require('os'); // For accessing operating system functionalities
const fs = require('fs'); // For interacting with the file system

// Define the title of the website
const title = "https://www.lttstore.com";

// Define the base URL of the website to be scraped
const baseurl = 'https://www.lttstore.com/collections/all';

// Make an HTTP GET request to the base URL
axios(baseurl)
  .then(response => {
    const html = response.data; // Extract the HTML content from the response
    const site = cheerio.load(html); // Load the HTML content into a Cheerio instance
    const products = []; // Array to store the scraped product data

    // Iterate over all anchor tags in the loaded HTML
    site('a').each(function() {
      const Product = site(this).text().trim(); // Extract the text content of the current anchor tag
      const baseurl = site(this).attr('href'); // Extract the href attribute of the current anchor tag

      // Check if the href attribute starts with '/products/'
      if (baseurl && baseurl.startsWith('/products/')) {
        const Url = 'https://www.lttstore.com' + baseurl; // Create the complete URL for the product
        const PriceSelector = site(this).parent().find('.price-item.price-item-regular').first(); // Select the price element relative to the current anchor tag
        const Price = PriceSelector.text().trim(); // Extract the text content of the price element
        products.push({
          Product,
          Url
        }); // Add the product details to the products array
      }
    });

    // Filter out duplicate products based on their JSON representation
    const uniqueProducts = products.filter((p, index) => {
      return index === products.findIndex(obj => {
        return JSON.stringify(obj) === JSON.stringify(p);
      });
    });

    // Write the scraped data to a file
    fs.writeFile('scraped_data.txt', `Site Name: ${title}` + os.EOL + os.EOL + uniqueProducts.map(p => `Product: ${p.Product} - URL: ${p.Url}`).join(os.EOL + os.EOL), (err) => {
      if (err) {
        console.log(err); // Log any errors that occur during file writing
      } else {
        console.log('Data written to file successfully!'); // Log a success message if the file writing is successful
        console.log("Open Scrapped-data.txt"); // Instruct the user to open the generated file
      }
    });
  })
  .catch(err => console.log(err)); // Log any errors that occur during the HTTP request or data parsing
