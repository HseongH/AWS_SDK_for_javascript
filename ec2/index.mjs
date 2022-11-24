import { EC2Client } from '@aws-sdk/client-ec2';
import dotenv from 'dotenv';

dotenv.config();

export const client = new EC2Client({ region: process.env.REGION });
export const params = { InstanceIds: [process.env.INSTANCE_ID] };
