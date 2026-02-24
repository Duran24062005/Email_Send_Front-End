import { apiBase } from "@/api/base.api";
import type { RegisterResponse } from "@/interfaces/register.response";


export const RegisterAction = async (name: string, email: string, password: string): Promise<RegisterResponse> => {
    try {
        const { data } = await apiBase.post<RegisterResponse>("api/auth/register",{
                name: name,
                email: email,
                password: password
            }
        )

        return data;
    } catch (error: any) {
        console.log(error);
        const detail = error.response?.data?.detail;

        // 🔴 error simple (409)
        if (typeof detail === "string") {
        throw detail;
        }

        // 🔴 error validación (422)
        if (Array.isArray(detail)) {

        const messages = detail.map((err: any) => {
            const field = err.loc?.[1] ?? "campo";
            return `${field}: ${err.msg}`;
        });

        throw messages.join(", ");
        }

        throw "Error inesperado, intenta más tarde";

    }
}