import { MailerServices } from '@/pages/api/mailer/services';
import { IFormBodyDto } from '@/pages/api/mailer/dto';
import { NextApiRequest, NextApiResponse } from 'next';

const mailerService = new MailerServices();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const formBody: IFormBodyDto = req.body;
    return mailerService.sendMail(formBody, res);
  }
}