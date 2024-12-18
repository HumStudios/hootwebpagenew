import { db } from "@/firebase/firebase";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { doc, getDoc } from "firebase/firestore";

const fetchAWSCredentials = async () => {
    try {
        const docRef = doc(db, "aws", "s3"); // Replace "aws" with your collection and "s3" with the document ID
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            return {
                aId: data.accessKey,
                sKey: data.secretAccessKey,
            };
        } else {
            throw new Error("No AWS credentials found in Firestore");
        }
    } catch (error) {
        console.error("Error fetching AWS credentials:", error);
        throw new Error("Failed to fetch AWS credentials");
    }
};

export const uploadImageToS3 = async (file: File): Promise<string> => {
    try {
        const { aId, sKey } = await fetchAWSCredentials();

        // Initialize S3 client with credentials from Firestore
        const s3Client = new S3Client({
            region: process.env.NEXT_PUBLIC_AWS_REGION,
            credentials: {
                accessKeyId: aId,
                secretAccessKey: sKey,
            },
        });

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

        await s3Client.send(new PutObjectCommand(params));
        return `https://${bucketName}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${fileName}`;
    } catch (error) {
        console.error("Error uploading image to S3:", error);
        throw new Error("Failed to upload image");
    }
};
