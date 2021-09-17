// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { User } from '@type/user';

export default function handler(_req: NextApiRequest, res: NextApiResponse<User>) {
  res.status(200).json({
    firstName: 'John'
  });
}
