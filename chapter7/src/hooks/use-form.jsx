import { useEffect, useState } from "react";
function useForm({ initialValue, validate }) {
  const [values, setValues] = useState(initialValue);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const handleChangeInput = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
    // console.log(values);
  };

  const handleBlur = (name) => {
    setTouched({
      ...touched,
      [name]: true,
    });
    // console.log(touched);
  };

  const getTextIputProps = (name) => {
    const value = values[name];
    const onChange = (event) => handleChangeInput(name, event.target.value);
    const onBlur = () => handleBlur(name);

    return { value, onChange, onBlur };
  };

  useEffect(() => {
    const newErrors = validate(values);
    setErrors(newErrors);
    // console.log(newErrors);
  }, [validate, values]);

  // reset
  const resetForm = () => {
    setValues(initialValue);
    setTouched({});
    setErrors({});
  };

  return { values, errors, touched, getTextIputProps, resetForm };
}
export default useForm;
