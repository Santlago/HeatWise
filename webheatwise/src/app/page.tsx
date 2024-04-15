import Footer from "@/components/Footer";
import { BorderedButton } from "@/components/buttons/BorderedButton";
import { BorderedProfileButton } from "@/components/buttons/BorderedProfileButton";
import { ProfileButton } from "@/components/buttons/ProfileButton";
import { StdButton } from "@/components/buttons/StdButton";
import { WhiteButton } from "@/components/buttons/WhiteButton";
import { Button, Image } from "@nextui-org/react"
import { Dot } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-sun-900 font-outfit bg-sun-950 bg-contain bg-no-repeat bg-[url('/landingpage-bg.png')]" style={{
      color: 'var(--Sun-50, #FFFDEA)',
      fontSize: '1.26281rem',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal'
    }}>
      <section className=" w-full h-[51.0625rem]">
        <div className="py-[3.06rem] px-[2.88rem] flex justify-between">
          <Image
            src="/logo-small.png"
            alt="logo"
            height={46}
            width={197}
          />
          <Link href="/login">
            <BorderedButton text="Login" />
          </Link>
        </div>
        <div className="px-[4.38rem]">
          <p className="mb-[3.25rem] text-[2.06494rem] font-bold text-sun-50 w-[41.37581rem]">
            Potencialize a Experiência de seus funcionários. Transformando <span className="text-sun-500">Dados</span> em <span className="text-sun-500">Insights</span> e melhorando sua Plataforma Digital!
          </p>
          <StdButton text="Veja nossos planos" />
        </div>
      </section>
      <section className="w-full bg-sun-500">
        <h1 className="text-center font-bold text-sun-50 font-outfit text-[2.54788rem] pt-[2.56rem]">Sobre Nós</h1>
        <div className="flex justify-center">
          <p className="w-[38.9375rem] pt-[4.5rem] mr-[1.87rem] text-[1.57919rem] font-outfit text-sun-50 font-semibold">
            Transformamos dados em insights valiosos para melhorar a experiência em suas plataformas digitais. Com nossa tecnologia avançada de análise de dados e feedback funcional, capacitamos as empresas a entender e otimizar a jornada dos funcionários, impulsionando a eficiência e a produtividade
          </p>
          <Image src="/sobrenos.png" className="w-[27.3125rem] h-auto " />
        </div>
      </section>
      <section className="w-full bg-sun-950">
        <h1 className="py-[3.19rem] px-[3.63rem] font-bold text-sun-50 font-outfit text-[2.54788rem] pt-[2.56rem]">Benefícios Principais</h1>
        <div className="flex flex-col justify-around h-[20rem] px-[6.25rem] pb-[6.61rem]">
          <div className="flex"><Dot />Melhoria da Experiência do Funcionário - Identifique áreas de oportunidade para aprimorar a usabilidade e eficiência da plataforma.</div>
          <div className="flex"><Dot />Otimização de Processos Internos - Personalize estratégias de desenvolvimento com base no comportamento e necessidades reais dos funcionários.</div>
          <div className="flex"><Dot />Tomada de Decisão Baseada em Dados - Transforme dados em insights acionáveis para impulsionar o desempenho e o sucesso da equipe.</div>
        </div>
      </section>
      <section className="w-full bg-sun-500">
        <h1 className="text-center font-bold text-sun-50 font-outfit text-[2.54788rem] pt-[2.56rem]">Mas como funciona?</h1>
        <div className="flex mt-[2.56rem] pb-[6rem] justify-around align-middle">
          <div className="text-[1.57919rem] font-outfit text-sun-50 font-semibold pt-[7.5rem]">
            <p className="align-middle">
              Nossa plataforma irá gerar mapas de calor com base em seu site
            </p>
          </div>
          <div>
            <Image src="/funciona1.png" className="w-[27.3125rem] h-auto " />
          </div>
        </div>
      </section>
      <section className="w-full bg-sun-600 flex justify-around">
        <div className="py-[8rem]">
          <Image src="/funciona2.png" className="w-[27.3125rem] h-auto " />
        </div>
        <div className="w-[34rem] py-[10rem] text-[2.06494rem] font-bold text-sun-50">
          <p>Então, nossa ia generativa irá confeccionar um relatório apontando insights valiosos e um feedback de sua plataforma   </p>
        </div>
      </section>
      <section className="w-full bg-sun-700 flex justify-around">
        <div className="w-[34rem] py-[10rem] text-[2.06494rem] font-bold text-sun-50">
          <p>Por fim, você poderá ver este relatório de forma mais precisa através de nosso dashboard   </p>
        </div>
        <div className="py-[8rem]">
          <Image src="/funciona3.png" className="w-[27.3125rem] h-auto " />
        </div>
      </section>
      <section className="w-full bg-sun-950 text-sun-50">
        <div className="flex items-center justify-around">
          <div className="">
            <Image src="/funciona4.png" className="w-[27.3125rem] h-auto " />

          </div>
          <div id="texto" className="text-center">
            <div className="text-[2.91063rem] mb-[5.19rem]">
              <h1>Ta esperando o que?</h1>
            </div>
            <div className="text-[2.34031rem] max-w-[35rem]">
              <p><span className="text-sun-500">Cadastre-se</span> e adquira já a mais nova solução de heatmapping no mercado!</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main >
  );
}