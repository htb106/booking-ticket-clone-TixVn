import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const notifiSuccess = (str) => toast.success(str);

export const notifiError = (str) => toast.error(str);