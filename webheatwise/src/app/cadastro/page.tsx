import { Image } from "@nextui-org/react";

export default function () {
    return (
        <main className="flex" style={{
            background: 'var(--Sun-500, #FFAC00)',
            boxShadow: '0px 300px 190px 0px #F68D2B inset'
        }}>
            <section className="h-screen w-1/2 flex flex-col justify-between">
                <Image src="/logo-small.png" className="h-[2.875rem] mt-[2.44rem] ml-[2.63rem] mb-[3.19rem]" />
                <div className="text-sun-50 font-outfit font-semibold text-[2.69138rem] ml-[4.81rem] max-2-[31.375rem]">
                    <p>
                        Preencha os campos com os dados de sua empresa e deixe o resto com a gente :)
                    </p>
                </div>
                <div className="flex justify-center">
                    <Image src="/cadastro.png" className="h-[32rem]" />

                </div>
            </section>
            <section className="h-screen w-1/2">

            </section>
        </main>
    )
}