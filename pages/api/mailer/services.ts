import nodemailer from 'nodemailer';
import { IFormBodyDto } from '@/pages/api/mailer/dto';
import EmailBodyRender from '@/pages/api/mailer/utils/emailBodyRender';
import { NextApiResponse } from 'next';
export class MailerServices {
  async sendMail(data: IFormBodyDto, res: NextApiResponse) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env['MAIL_USER'],
        pass: process.env['MAIL_PASS'],
      },
    });

    try {
      await transporter.sendMail({
        from: `"Робот Beans team" <${process.env['MAIL_USER']}>`,
        to: process.env['RECIPIENTS'],
        subject: 'Новая заявка от ' + data?.fullName,
        html: EmailBodyRender(data),
      });

      return res.status(200).send('Email sent successfully');
    } catch (err) {
      console.error(err);
      return res.status(400).json({ message: 'Bad Request' });
    }
  }
}
