const request = require('request')

module.exports = {
    /*
    ** This method returns a promise
    ** which gets resolved or rejected based
    ** on the result from the API
    */
    make_API_call: function (url) {
        return new Promise((resolve, reject) => {
            request(url, { json: true }, (err, res, body) => {
                if (err) reject(err)
                resolve(body)
            });
        })
    },

    make_PDF_call: function (url) 
    {
        return new Promise((resolve, reject) => 
        {

            //feedback
            console.log('Making call to PdfGenApi');

            //request configuration vars
            var key = 'df95b809583e1377de772a6a0bd215f6d1c709fa7bb869fa716e674f8d3fdcfc';
            var secret = '9dea60808354915c1f3ec63de0f5e6278774d16b3ae20df4a542f945922628ab';
            var workspace = 'garrett@blackshirtcode.com';

            request(url, {
                "method": "post", "headers": {
                    'X-Auth-Key': key,
                    'X-Auth-Secret': secret, 'X-Auth-Workspace': workspace, 'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }, (err, res, body) => {
                    if (err) reject(err)
                    resolve(body)
                });
        })
    }
}


