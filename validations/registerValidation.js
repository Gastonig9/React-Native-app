import { object, string,ref} from "yup"

export const registerValidation = object({
    fullName:string()
        .min(6,"minimo 6 caracteres")
        .required("Ingrese su nombre"),
    email:string()
        .email("Ingrese un mail valido")
        .required("Ingrese un mail"),
    password:string()
        .min(6,"minimo 6 caracteres")
        .required("Ingrese un password"),
})