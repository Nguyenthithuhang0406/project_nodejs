/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import React, {useEffect} from "react";
import { extractMessageFromErr } from "../../shared/utils/error";
import { toast } from "react-toastify";
import { requestWithToken } from "../../shared/utils/axios-http";
import axios from "axios";

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
    return <div>Profile</div>;
  };

export default Profile;