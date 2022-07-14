import CreditCardModel from '../models/Creditcard.js';

export const createCreditCard = async (userId, registerData) => {
  return CreditCardModel.create({
    ...registerData,
    userId
  });
};
