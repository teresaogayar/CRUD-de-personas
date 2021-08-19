
export interface Persona{
    id: number,
    user: string,
    password: string,
    name: string,
    surname: string,
    company_email: string,
    personal_email: string,
    city: string,
    active: boolean,
    created_date: string,
    imagen_url: string,
    termination_date: string
}

export function empezar(): Persona{
    const per = {
        id: null,
        user: null,
        password: null,
        name: null,
        surname: null,
        company_email: null,
        personal_email: null,
        city: null,
        active: null,
        created_date: null,
        imagen_url: null,
        termination_date: null
    }
    return Object.assign(per);
}