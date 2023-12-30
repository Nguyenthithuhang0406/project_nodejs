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
import ErrorMessage from "../../ErrorMessages";
import { Input } from "antd";



const schema = yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required(),
    hashTag: yup.string(),
});

const ModalCreate = ({close}) => {
    const{
        handleSubmit,
        control,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });
    const queryClient = useQueryClient();
    const onSubmit = async (data) => {
        try{
            await requestWithToken({
                url: "/post",
                method: "post",
                data,
            });

            await queryClient.invalidateQueries("list-posts");
            toast.success("create success");
            close();
        }catch(err){
            toast.error(extractMessageFromErr(err));
        }
    };
    return(
        <SModalCreate>
            <div className="form-item">
                <span>Title</span>
                <Controller
                control={control}
                name="title"
                render={({field}) => (
                    <Input {...field} status={errors.title ? "error" : ""}/>
                )}
                />
                {errors.title && <ErrorMessage message={errors.title}/>}
            </div>

            <div className="form-item">
                <span>Title</span>
                <Controller
                control={control}
                name="title"
                render={({field}) => (
                    <Input {...field} status={errors.title ? "error" : ""}/>
                )}
                />
                {errors.title && <ErrorMessage message={errors.title}/>}
            </div>

            <div className="form-item">
                <span>Title</span>
                <Controller
                control={control}
                name="title"
                render={({field}) => (
                    <Input {...field} status={errors.title ? "error" : ""}/>
                )}
                />
                {errors.title && <ErrorMessage message={errors.title}/>}
            </div>


            <div className="form-item">
                <span>Title</span>
                <Controller
                control={control}
                name="title"
                render={({field}) => (
                    <Input {...field} status={errors.title ? "error" : ""}/>
                )}
                />
                {errors.title && <ErrorMessage message={errors.title}/>}
            </div>

            <div className="form-item">
                <span>Title</span>
                <Controller
                control={control}
                name="title"
                render={({field}) => (
                    <Input {...field} status={errors.title ? "error" : ""}/>
                )}
                />
                {errors.title && <ErrorMessage message={errors.title}/>}
            </div>
        </SModalCreate>
    );
};

export default ModalCreate;