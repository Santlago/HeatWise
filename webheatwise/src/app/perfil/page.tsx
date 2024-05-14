import Link from "next/link"
import { getSession } from "../lib/session"
import { Image } from "@nextui-org/react"
import { BorderedButton } from "@/components/buttons/BorderedButton"
import { WhiteButton } from "@/components/buttons/WhiteButton"
import { LogoutButton } from "@/components/buttons/LogoutButton"

export default async function Perfil() {
    const user = await getSession()
    return (
        <main className="h-screen" style={{
            background: 'var(--Sun-500, #FFAC00)',
            boxShadow: '0px 300px 190px 0px #F68D2B inset'
        }}>
            <div className="py-[3.06rem] px-[2.88rem] flex justify-between">
                <Link href='/'>
                    <Image
                        src="/logo-small.png"
                        alt="logo"
                        height={46}
                        width={197}
                    />
                </Link>
                <Link href={user ? '/homelogado' : '/'}>
                    <BorderedButton text="Voltar" />
                </Link>
            </div>
            <LogoutButton text="Deslogar"/>
            <h1>Perfil</h1>
        </main>
    )
}