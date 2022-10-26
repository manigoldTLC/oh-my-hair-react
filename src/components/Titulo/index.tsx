import { Titulo } from './style';

interface Props {
    children: React.ReactNode
}

const TituloComponent = ({ children }: Props) => {
    return (
        <Titulo>{children}</Titulo>
    )
}

export default TituloComponent;