import { object, string, ref } from "yup";

const validations = object({
  email: string()
    .email("Geçerli bir e-mail adresi giriniz !")
    .required("Zorunlu alan."),
  password: string()
    .min(5, "Parolanız en az 5 karakter olmalıdır !")
    .required("Zorunlu alan."),
  passwordConfirm: string()
    .oneOf([ref("password")], "Girilen Parolalar aynı değil !")
    .required("Zorunlu alan."),
});

export default validations;
