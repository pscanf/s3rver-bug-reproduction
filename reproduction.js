var S3 = require("aws-sdk").S3;

var setupWait = 1000;
setTimeout(function () {

    var client = new S3({
        endpoint: "http://localhost:4567",
        s3BucketEndpoint: true
    });

    client.createBucket({Bucket: "bucket"}, function (err, res) {
        if (err) {
            console.log("ERROR");
            console.log(err);
        } else {
            console.log("SUCCESS");
            console.log(res);
        }
    });

}, setupWait);
