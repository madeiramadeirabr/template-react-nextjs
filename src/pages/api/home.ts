/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type {User} from '@type/user'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
): void {
  const { headers } = req;

  res.status(200).json({ firstName: 'John Doe' })
}
