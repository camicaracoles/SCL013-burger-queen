

export const saveUserInLocalStorage = (userData = {}) => {
  const dataToSave = {
    email: userData.email,
    name: userData.name,
    job: userData.job
  };

  const dataInString = JSON.stringify(dataToSave); // from JSON to string
  localStorage.setItem("userData", dataInString);
};

export const getUserFromLocalStorage = () => {
  const savedUserData = localStorage.getItem("userData");
  const userData = JSON.parse(savedUserData); // from string to JSON
  return userData;
};

