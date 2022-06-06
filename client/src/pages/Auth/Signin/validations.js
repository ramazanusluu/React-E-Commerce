import { object, string } from "yup";

const validations = object({
  email: string()
    .email("Geçerli bir e-mail adresi giriniz !")
    .required("Zorunlu alan."),
  password: string()
    .min(5, "Parolanız en az 5 karakter olmalıdır !")
    .required("Zorunlu alan."),
});

export default validations;
