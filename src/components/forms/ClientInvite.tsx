import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

const CreateInvite = () => {
  return (
    <Card className='max-w-2xl'>
      <CardHeader>
        <CardTitle>Create an proposal</CardTitle>
        <CardDescription>
          Fill out the form below to create a testimonial invite.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form className='grid w-full items-center gap-4'>
          <div className='flex flex-col space-y-1.5'>
            <Label htmlFor='name'>Name</Label>
            <Input id='name' name='name' placeholder='Zeeshan Ali' />
          </div>

          <div className='flex flex-col space-y-1.5'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='acid@acidop.codes'
            />
          </div>

          <div className='grid w-full gap-1.5 py-5'>
            <Label htmlFor='message'>Your Message (Optional)</Label>
            <Textarea
              placeholder='Type your message here. Markdown is also supported.'
              rows={4}
              name='email'
            />
            <p className='text-sm text-muted-foreground'>
              If left empty, a default message will be sent.
            </p>
          </div>

          <div className='flex items-center space-x-2'>
            <Switch checked />
            <Label htmlFor='airplane-mode'>
              Auto send invitation over email
            </Label>
          </div>
        </form>
      </CardContent>

      <CardFooter>
        <div className='ml-auto space-x-3'>
          <Button variant='ghost' className='rounded' size='sm'>
            Cancel
          </Button>
          <Button className='rounded' size='sm'>
            Create
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CreateInvite;
