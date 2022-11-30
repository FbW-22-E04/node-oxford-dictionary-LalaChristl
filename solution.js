const axios = require ('axios');
const dotenv = require('dotenv');
dotenv.config();
// require('dotenv').config()
// console.log(process.env)

const input = process.argv.slice(2)

const options = {
    headers: {app_id: process.env.APP_ID, app_key: process.env.APP_API_KEY}
    
}

async function getData() {
const response  = await axios.get(`https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${input}`, options);

const definitions = response.data.results[0].lexicalEntries[0].entries[0].senses.map((item => {
    return item.definitions[0]
}));
console.log(definitions);

}


getData()