interface IProps {
  name: string;
  errors: ErrorType[];
}

type ErrorType = {
  name: string;
  message: string;
};

const Error = ({ errors, name }: IProps) => {
  return (
    <>
      {errors.map(
        (error, index) =>
          error.name === name && (
            <p key={index} className='text-sm text-red-500'>
              {error.message}
            </p>
          ),
      )}
    </>
  );
};

export default Error;
