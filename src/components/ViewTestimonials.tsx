import type { Session } from 'next-auth';

interface ViewTestimonialsProps {
  session: Session;
}

const ViewTestimonials = ({ session }: ViewTestimonialsProps) => {
  return <div>Testimonials</div>;
};

export default ViewTestimonials;
