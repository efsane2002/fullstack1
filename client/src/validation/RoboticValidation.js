import * as Yup from 'yup';

export const RoboticSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    paragraf: Yup.string().required("paragraf is required"),
    imageURL: Yup.string().required("image is required")
})