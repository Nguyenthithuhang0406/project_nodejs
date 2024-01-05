// eslint-disable-next-line no-unused-vars
import React from "react";

import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";
import { Controller, useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { extractMessageFromErr } from "../../shared/utils/error";
import { SAuth } from "../../shared/styles/main";
import { Button, Input } from "antd";
import ErrorsMessage from "../../shared/components/ErrorMessages";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      login(data);
    } catch (err) {
      toast.error(extractMessageFromErr(err));
    }
  };

  return (
    <SAuth>
      <h1>Login Form</h1>
      <div className="form-item">
        <span>Username</span>

        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <Input {...field} status={errors.username ? "error" : ""} />
          )}
        />
        {errors.username && <ErrorsMessage message={errors.username} />}
      </div>
      <div className="form-item">
        <span>Password</span>
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <Input
              {...field}
              status={errors.password ? "error" : ""}
              type="password"
            />
          )}
        />
        {errors.password && <ErrorsMessage message={errors.password} />}
      </div>

      <Button
        className="submit"
        type="primary"
        onClick={handleSubmit(onSubmit)}
        disabled={Object.keys(errors).length > 0}
      >
        Submit
      </Button>
    </SAuth>
  );
};
export default Login;
