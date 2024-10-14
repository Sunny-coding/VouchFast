'use server';

import { EmailTemplate } from '@/components/email-template';
import { db } from '@/lib/db';
import { inviteSchema } from '@/schema/invite-form-schema';

import { Resend } from 'resend';
import { v4 as uuidv4 } from 'uuid';

const createInvite = async (formData: FormData) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const baseUrl = process.env.BASE_URL;
  const inviteID = uuidv4();
  const inviteLink = baseUrl + '/invite/' + inviteID;

  const entries = Object.fromEntries(formData.entries());

  const isValid = inviteSchema.safeParse(entries);

  // Invalid Schema
  if (!isValid.success) {
    return { success: false };
  }

  const {
    data: { name, email, message },
  } = isValid;
  let emailTemplate;

  if (!message) {
    emailTemplate = EmailTemplate({ name, inviteLink });
  } else {
  }

  return { success: true };
};

export default createInvite;
