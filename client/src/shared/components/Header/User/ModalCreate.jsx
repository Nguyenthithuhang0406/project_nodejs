/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useQuery, useQueryClient } from "react-query";
import * as yup from "yup";
import { requestWithToken } from "../../../utils/axios-http";
import { toast } from "react-toastify";
import { extractMessageFromErr } from "../../../utils/error";
import { SModalCreate } from "./style";

import { Button, Input } from "antd";
import { useSearchParams } from "react-router-dom";
import { paramsURLToObject } from "../../../utils/main";
import ErrorsMessage from "../../ErrorMessages";



const schema = yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required(),
    hashTag: yup.string(),
  });
  
  const ModalCreate = ({ close }) => {
    const [searchParams] = useSearchParams();
    const pageQuery = paramsURLToObject(searchParams);
    const {
      handleSubmit,
      control,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });
    const queryClient = useQueryClient();
    const onSubmit = async (data) => {
      try {
        await requestWithToken({
          url: "/post",
          method: "post",
          data,
        });
  
        await queryClient.invalidateQueries(["list-posts", pageQuery]);
        toast.success("create success");
        close();
      } catch (err) {
        toast.error(extractMessageFromErr(err));
      }
    };
    return (
      <SModalCreate>
        <div className="form-item">
          <span>Title</span>
          <Controller
            control={control}
            name="title"
            render={({ field }) => (
              <Input {...field} status={errors.title ? "error" : ""} />
            )}
          />
          {errors.title && <ErrorsMessage message={errors.title} />}
        </div>
        <div className="form-item">
          <span>Content</span>
          <Controller
            control={control}
            name="content"
            render={({ field }) => (
              <Input {...field} status={errors.content ? "error" : ""} />
            )}
          />
          {errors.content && <ErrorsMessage message={errors.content} />}
        </div>
        <div className="form-item">
          <span>HashTag</span>
          <Controller
            control={control}
            name="hashTag"
            render={({ field }) => (
              <Input {...field} status={errors.hashTag ? "error" : ""} />
            )}
          />
        </div>
        <Button type="primary" size="large" onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </SModalCreate>
    );
  };
  

export default ModalCreate;