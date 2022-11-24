import { StopInstancesCommand } from '@aws-sdk/client-ec2';
import dotenv from 'dotenv';

import { client, params } from './index.mjs';

dotenv.config();

export const handler = async (event) => {
  const command = new StopInstancesCommand(params);

  try {
    const data = await client.send(command);
    console.log('Success', data.StoppingInstances);

    return data;
  } catch (err) {
    console.log('Error2', err);
  }
};
