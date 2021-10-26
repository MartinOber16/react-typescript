import { useForm } from '../hooks/useForm';

interface FormData {
    email: string;
    nombre: string;
}

export const Formulario = () => {

    // const [formulario, setFormulario] = useState({
    //     email: '',
    //     nombre: '',
    // });

    // const handleChange = ( { target }: ChangeEvent<HTMLInputElement> ) => {
    //     const { name, value } = target;
    //     setFormulario({
    //         ...formulario,
    //         [ name ]: value,
    //     })
    // }

    //const { formulario, handleChange } = useForm<FormData>({
    const { nombre, email, formulario, handleChange } = useForm<FormData>({
        email: 'martin@mail.com',
        nombre: 'Martin',
    });

    // const { email, nombre } = formulario;

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email"
                    className="form-control"
                    name="email"
                    onChange={ handleChange }
                    value={ email }
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text"
                    className="form-control"
                    name="nombre"
                    onChange={ handleChange }
                    value={ nombre }
                />
            </div>

            <pre> { JSON.stringify( formulario ) } </pre>
        </form>
    )
}
