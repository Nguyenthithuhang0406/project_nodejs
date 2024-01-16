/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { extractMessageFromErr } from "../../shared/utils/error";
import axios from "axios";
import { requestWithToken } from "../../shared/utils/axios-http";
import { S } from "./styles";

const Profile = () => {
  const getMe = async () => {
    try {
      await requestWithToken({
        url: "/user/me",
      });
    } catch (err) {
      toast.error(extractMessageFromErr(err));
    }
  };
  useEffect(() => {
    getMe();
  }, []);
  return (
    <S>
      <div className="profile-wrapper"></div>
    </S>
  );
};

export default Profile;