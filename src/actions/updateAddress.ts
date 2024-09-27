'use server';

const updateAddress = async (formData: FormData) => {
  const entries = Object.fromEntries(formData.entries());

  console.log({ entries });
};

export default updateAddress;
