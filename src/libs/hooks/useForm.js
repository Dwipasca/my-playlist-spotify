import { useState } from "react";

const useForm = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(values));
    if (Object.keys(errors).length === 0) {
      alert("tada");
    }
  };

  return { handleChange, values, handleSubmit, errors };
};

const validateForm = (values) => {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name playlist is required";
  } else if (values.name.length < 10) {
    errors.name = "Name playlist minimum is 10 characters";
  }

  if (!values.description.trim()) {
    errors.description = "Description is required";
  } else if (values.description.length < 20) {
    errors.description = "Description playlist minimum is 20 characters";
  }
  return errors;
};

export default useForm;
