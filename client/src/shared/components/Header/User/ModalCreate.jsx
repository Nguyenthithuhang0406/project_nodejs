/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Input } from "antd";
import React, { useState } from "react";
import { SModalCreate } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import ErrorsMessage from "../../ErrorMessages";
import { requestWithToken } from "../../../utils/axios-http";
import { toast } from "react-toastify";
import { extractMessageFromErr } from "../../../utils/error";
import { useQueryClient } from "react-query";
import { useSearchParams } from "react-router-dom";
import { paramsURLToObject } from "../../../utils/main";
import UploadFile from "../../Uploadfile";

const schema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  hashTag: yup.string(),
});

const ModalCreate = ({ close }) => {
  const [searchParams] = useSearchParams();
  const [img, setImg] = useState({
    file: undefined,
    image: undefined,
  });
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
      const formData = new FormData();

      for (let [key, value] of Object.entries(data)) {
        formData.append(key, value);
      }
      if (!img.file) {
        return toast.error("image is required");
      }
      //add file
      formData.append("image", img.file);

      await requestWithToken({
        url: "/post",
        method: "post",

        data: formData,
      });

      await queryClient.invalidateQueries(["list-posts", pageQuery]);
      toast.success("create success");
      close();
    } catch (err) {
      toast.error(extractMessageFromErr(err));
    }
  };

  const handleChangeImage = ({ file, img }) => {
    setImg({ image: img, file });
  };

  console.log(img);
  return (
    <SModalCreate>
      <div className="form-item">
        <span>Image</span>
        <UploadFile handleChange={handleChangeImage} image={img.image} />
      </div>
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