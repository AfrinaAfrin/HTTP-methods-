 

const axios = require('axios');

 
const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

 
async function testApi() {
  try {
    
    const getResponse = await axios.get(baseUrl);
    const posts = getResponse.data;
 
    if (posts.length > 0) {
      console.log(`Title of the first post: ${posts[0].title}`);
    } else {
      console.log('No posts found.');
    }

     
    const postData = {
      title: 'Automated Test Post',
      body: 'Testing API endpoints via Node.js script.',
      userId: 123,
    };

    const postResponse = await axios.post(baseUrl, postData);

     
    console.log('POST Request Response:', postResponse.data);
  } catch (error) {
    
    console.error('An error occurred:', error.message);
  }
}

 
testApi();
