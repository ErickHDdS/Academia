import UserModel from '../models/Users.js';
import ErrorAPI from '../error/ErrorAPI.js';
import { entityIfHeIsPresent } from './entity.js';
import { encryptPhrase, compareWithEncrypted } from './bcrypt.js';
import { generateJwtToken } from './jwt.js';
import { createCreditCard } from './creditCard.js';

const cpfAlreadyExistError = new ErrorAPI(409, 'CPF already exists');

export const userIfIsFound = (user) => entityIfHeIsPresent(user, 'User not found');

const getUserByCPF = (cpf) => UserModel.findOne({ where: { cpf } });

export const getUserById = async (id) => {
  const user = await UserModel.findByPk(id, {
    attributes: {
      exclude: ['password'],
    },
  });

  return userIfIsFound(user);
};

export const deleteUser = async (id) => {
  const user = await getUserById(id);

  await user.destroy();

  return user;
};

const checkPassword = async (password, passwordEncrypted) => {
  const validPass = await compareWithEncrypted(password, passwordEncrypted);

  if (!validPass) throw new ErrorAPI(403, 'Invalid password');
};

// TODO refactor this to other functions like checkLoginData, getToken and getRefreshToken
export const getToken = async (loginData) => {
  const user = userIfIsFound(await getUserByCPF(loginData.cpf));

  await checkPassword(loginData.password, user.getDataValue('password'));

  const userId = user.getDataValue('id');
  const userType = user.getDataValue('type');

  return generateJwtToken({ userId, userType });
};

export const createUserWithCreditCard = async (userAndCreditCardData) => {
  const userCreated = await createUser(userAndCreditCardData);
  const creditCardCreated = await createCreditCard(userCreated.getDataValue('id'), userAndCreditCardData);

  return {
    creditCardData: creditCardCreated.dataValues,
    userData: userCreated.dataValues
  };
}

export const createUser = async (registerData) => {
  const hashedPassword = await encryptPhrase(registerData.password);

  if (await getUserByCPF(registerData.cpf)) throw cpfAlreadyExistError;

  return UserModel.create({
    ...registerData,
    password: hashedPassword,
  });
};

export const getAllPersons = () => UserModel.findAll({
  attributes: ['id', 'name'],
  where: {
    type: 'PERSON'
  }
});

export const update = async (id, registerData) => {
  // TODO do all promises in parallel
  const userIfCPFExist = await getUserByCPF(registerData.cpf);
  if (userIfCPFExist && userIfCPFExist.getDataValue('id') !== parseInt(id, 10)) throw cpfAlreadyExistError;

  const hashedPassword = await encryptPhrase(registerData.password);

  const user = await getUserById(id);

  return user.update({
    ...registerData,
    password: hashedPassword,
  });
};

export const getJWTToken = (
  refreshTokenKey,
) => generateJWTToken(refreshTokenKey);