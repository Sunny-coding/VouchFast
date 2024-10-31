export type StringMap = {
  [key: string]: string;
};

export type FormState = {
  success?: boolean;
  errors?: StringMap;
  message?: string;
  data?: any;
};
