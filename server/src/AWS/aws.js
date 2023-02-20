const aws = require("aws-sdk")
require("dotenv").config();
aws.config.update({
    accesssKeyId:"AKIARMRRTVHDLLMVDMNJ",//process.env.ACCESSKEY,
    secretAccessKey:"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",//process.env.SECRETKEY,
    region:"ap-south-1"
})

let uploadFile= async ( file) =>{
   return new Promise( function(resolve, reject) {
    // this function will upload file to aws and return the link
    let s3= new aws.S3({apiVersion: '2006-03-01'}); // we will be using the s3 service of aws

    var uploadParams= {
        ACL: "public-read",
        Bucket: "classroom-training-bucket",  //HERE
        Key: "abc/" + file.originalname, //HERE
        Body: file.buffer
    }

    s3.upload( uploadParams, function (err, data ){
        if(err) {
            return reject({"error": err})
        }
        return resolve(data.Location)
    })
   })
}


module.exports={uploadFile};