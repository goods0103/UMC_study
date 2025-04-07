const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,}$/;

function validateUser(values) {
  const errors = {
    email: "",
    password: "",
    checkpw: "",
  };

  if (emailPattern.test(values.email) === false) {
    errors.email = "올바른 이메일 형식이 아닙니다. 다시 확인해주세요";
  }

  if (values.password.length < 1 || values.password.length > 3) {
    errors.password = "비밀번호는 1 ~ 3자 사이로 입력해주세요.";
  }

  if (values.password !== values.checkpw) {
    errors.checkpw = "비밀번호가 일치하지 않습니다!";
  }

  return errors;
}

function validateLogin(values) {
  return validateUser(values);
}

export { validateLogin };
