import { object, string } from "yup";

const newProductScheme = object({
  title: string().required(),
  description: string().min(5).required(),
  price: string().required(),
});

export default newProductScheme;
