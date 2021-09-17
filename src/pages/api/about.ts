// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { User } from '@type/user';

export default function handler(_req: NextApiRequest, res: NextApiResponse<User>) {
  res.status(200).json({
    createdAt: '2021-09-09',
    id: '123',
    active: true,
    first_name: 'John',
    last_name: 'Doe',
    email: 'email@domain.com',
    phone: '5541999999999',
  });
}
