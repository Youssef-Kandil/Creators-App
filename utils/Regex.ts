export const isValidPhone = (phone: string) => {
  const regex = /^(\+?20|0)?1[0-2,5][0-9]{8}$|^(\+?966|0)?5[0-9]{8}$|^(\+?971|0)?5[0-9]{8}$/;
  return regex.test(phone);
};

