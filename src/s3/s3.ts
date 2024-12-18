import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

// Initialize the S3 client
const s3Client = new S3Client({
    region: process.env.NEXT_PUBLIC_AWS_REGION,
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || "",
    },
});

export const uploadImageToS3 = async (file: File): Promise<string> => {
    // Generate a unique file name using the current timestamp
    const timestamp = Date.now();
    const fileName = `${timestamp}-${file.name}`;
    const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME || "";
    const params = {
        Bucket: bucketName,
        Key: fileName,
        Body: file,
        ContentType: file.type,
    };

    try {
        await s3Client.send(new PutObjectCommand(params));
        return `https://${bucketName}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${fileName}`;
    } catch (error) {
        console.error("Error uploading image to S3:", error);
        throw new Error("Failed to upload image");
    }
};
