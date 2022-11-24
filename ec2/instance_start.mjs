import { StartInstancesCommand } from '@aws-sdk/client-ec2';
import dotenv from 'dotenv';

import { client, params } from './index.mjs';

dotenv.config();

export const handler = async (event) => {
  const command = new StartInstancesCommand(params);

  try {
    const data = await client.send(command);
    console.log('Success', data.StartingInstances);

    return data;
  } catch (err) {
    console.error('Error', err);
  }
};
