import { v4 as uuidv4 } from 'uuid';

const createInviteLink = () => {
  const inviteID = uuidv4();
  const inviteLink = `${process.env.BASE_URL}/invite/${inviteID}`;

  return inviteLink;
};

export default createInviteLink;
