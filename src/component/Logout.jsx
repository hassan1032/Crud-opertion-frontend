import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Logout = ({setRoles}) => {
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:4000/auth/logout`).then((res) => {
        navigate("/login");
      if (res.data.logout) {
        setRoles('')
        console.log("the logout res",res);
        toast.success("Logout Is Successfully");
      }
    }).catch((err) => {
      toast.error(err);
    });
  }, []);
};

export default Logout;
