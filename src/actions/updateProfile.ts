'use server';

const updateProfile = async (formData: FormData) => {
  const entries = Object.fromEntries(formData.entries());

  console.log({ entries });
};

export default updateProfile;
