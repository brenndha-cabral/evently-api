import Users from '../database/models/users';

const getUserLogin = async (email: string) => {
  const response = await Users.findOne({
    where: { email },
  });

  return response;
};

export default {
  getUserLogin,
};
