const express = require('express');
const app = express();
const csv = require('csvtojson');
const cors = require("cors");
const filePath = 'data/sample.csv';

app.use(cors({
    origin: "*"
}))

app.get('/',(req,res) => {


    // Taking Data from csv and pushing it to json.
    csv()
    .fromFile(filePath)
    .then((jsonObj) => {

        // Printing it on Web page.
        res.send(jsonObj);
    });

});

//Listen to Port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server Running on localhost:${PORT} ....`);
})