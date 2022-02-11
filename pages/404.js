import Link from "../src/components/link"

export default function Page404() {
    return(
        <div>
            <h1>Error 404</h1>
            <h3>Você entrou em uma página inexistente! :(</h3>
            <Link href="/">
                Voltar para a home
            </Link>
        </div>
    )
}