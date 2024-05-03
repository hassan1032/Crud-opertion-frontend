// import { useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import toast from "react-hot-toast";
// import axios from "axios";

// const DeleteBook = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     axios
//       .delete(`http://localhost:4000/book/book/${id}`)
      

//       .then((res) => {
//         if (res.data.deleted) {
//             console.log("the Dleted res", res.data.deleted);
//           navigate("/books");
//           console.log("the Dleted res", res.data.deleted);
//           toast.success("Remove Is Successfully");
//         }
//       })
//       .catch((err) => {
//         toast.error(err);
//       });
//   }, []);
// };

// export default DeleteBook;
