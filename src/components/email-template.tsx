interface EmailTemplateProps {
  name: string;
  inviteLink: string;
}

export const EmailTemplate = ({
  name,
  inviteLink,
}: EmailTemplateProps) => (
  <div>
    <h1>Welcome, {name}!</h1>
    <p>
      You've been invited to leave a testimonial. Click the link below to
      get started.
    </p>
    <a href={inviteLink} target='_blank' rel='noopener noreferrer'>
      Get Started
    </a>
  </div>
);
