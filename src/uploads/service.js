import dotenv from "dotenv";
import AWS from "aws-sdk";

dotenv.config();

// Configuring AWS
AWS.config = new AWS.Config({
    accessKeyId: process.env.S3_KEY,
    secretAccessKey: process.env.S3_SECRET,
    region: process.env.BUCKET_REGION
});

// Creating a S3 instance
const s3 = new AWS.S3();

const Bucket = process.env.BUCKET_NAME;

// PUT URL Generator
export function generatePutUrl(Key, ContentType) {
    return new Promise((resolve, reject) => {
        const params = {Bucket, Key, ContentType, Expires: 300};
        s3.getSignedUrl("putObject", params, function (err, url) {
            if (err) {
                reject(err);
            }
            resolve(url);
        });
    });
}

export function generateGetUrl(Key) {
    return new Promise((resolve, reject) => {
        const params = {
            Bucket,
            Key
        };
        // Note operation in this case is getObject
        s3.getSignedUrl('getObject', params, (err, url) => {
            if (err) {
                reject(err);
            } else {
                resolve(url);
            }
        });
    });

}