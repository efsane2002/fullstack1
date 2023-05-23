import React from "react";
import { useFormik } from 'formik';
import { Button, TextField} from "@mui/material";
import { RoboticSchema } from "../validation/RoboticValidation";
import Swal from "sweetalert2";
import { postRobotics } from "../api/request";
import { useNavigate } from "react-router-dom";
import { useRoboticContext } from "../context/RoboticContext";

const Add = () => {
  const navigate = useNavigate();
  const[robotics,setRobotics] = useRoboticContext();
  function handleSubmit(values, actions) {
    postRobotics(values)
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate('/products');
    setRobotics([...robotics, values]);
    actions.resetForm();
  }
  
  const formik = useFormik({
    initialValues: {
      name: "",
      paragraf: "",
      imageURL: "",
    },
    validationSchema: RoboticSchema,
    onSubmit: handleSubmit,
  });
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "70vh",
        justifyContent: "center",
        alignItems: "center",
        paddingTop:"220px"
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "30px",
          border: "1px solid #eee",
          width: "50%",
          height: "400px",
        }}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          style={{ marginBottom: "7px" }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="name"
          type="text"
          id="outlined-basic"
          value={formik.values.name}
          label="Name"
          variant="outlined"
          error={formik.errors.name && formik.touched.name ? true : false}
        />
        {formik.errors.name && formik.touched.name && <p style={{color:'red'}}>{formik.errors.name}</p>}
       
         <TextField
          style={{ marginBottom: "7px" }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="paragraf"
          type="text"
          value={formik.values.paragraf}
          error={formik.errors.paragraf && formik.touched.paragraf ? true : false}
          id="outlined-basic"
          label="paragraf"
          variant="outlined"
        />
         {formik.errors.paragraf && formik.touched.paragraf && <p style={{color:'red'}}>{formik.errors.paragraf}</p>}
    
        <TextField
          style={{ marginBottom: "7px" }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.imageURL}
          error={formik.errors.imageURL && formik.touched.imageURL ? true : false}
          name="imageURL"
          type="text"
          id="outlined-basic"
          label="Image"
          variant="outlined"
        />
         {formik.errors.imageURL && formik.touched.imageURL && <p style={{color:'red'}}>{formik.errors.imageURL}</p>}

        <Button
          style={{ display: "block", margin: "10px auto" }}
          type="submit"
          variant="contained"
          color="warning"
        >
          Add Robotics
        </Button>
      </form>
    </div>
  );
};

export default Add;