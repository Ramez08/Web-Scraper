const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

//Insert the link you want to scrape
const baseurl = 'https://www.lttstore.com/collections/all';

axios(baseurl)
  .then(response => {
    const html = response.data;
    const site = cheerio.load(html);
    const products = [];
    //Eneter the main attribute for your scrape
    site('a').each(function() {
      const Product = site(this).text().trim(); // Apply the trim() method to remove leading/trailing whitespace
      const baseurl = site(this).attr('href');
      //Enter what the link starts with for your scrape
      if (baseurl && baseurl.startsWith('/products/')) {
        const Url = 'https://www.lttstore.com' + baseurl;
        products.push({
          Product,
          Url
        });
      }
    });

    console.log(products);
  })
  .catch(err => console.log(err));

app.listen(PORT, () => console.log('server running on PORT ' + PORT.toString()))
