import { siteConfig } from "@/data/site-config";
import { TrackedLink } from "@/components/tracked-link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative flex min-h-[720px] items-end overflow-hidden bg-[radial-gradient(ellipse_at_70%_35%,#6f111655,transparent_45%),linear-gradient(120deg,#090909_30%,#241313)] pb-24 pt-40">
        <div className="grain absolute inset-0" />

        <div className="container relative">
          <p className="eyebrow">Uma coleção de histórias reais</p>

          <h1 className="display mt-5 max-w-4xl text-5xl leading-[.95] text-paper sm:text-7xl lg:text-8xl">
            O futebol tem história.
            <br />
            <em className="text-gold">Nós voltamos no tempo</em> para contá-la.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-paper/65">
            Viaje pelos momentos, personagens e acontecimentos que ajudaram a
            transformar o futebol no esporte que conhecemos hoje.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <TrackedLink
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noreferrer"
              event="social_click"
              params={{ platform: "youtube", location: "hero" }}
              className="bg-blood px-6 py-4 text-xs uppercase tracking-widest text-paper hover:bg-[#9d1b23]"
            >
              Assistir no YouTube ↗
            </TrackedLink>

            <TrackedLink
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              event="social_click"
              params={{ platform: "instagram", location: "hero" }}
              className="border border-paper/30 px-6 py-4 text-xs uppercase tracking-widest text-paper"
            >
              Instagram ↗
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* HISTÓRIA DO FLAMENGO */}
      <section id="flamengo" className="py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div>
              <p className="eyebrow">Série especial</p>

              <h2 className="display mt-3 text-5xl text-paper md:text-6xl">
                História do Flamengo
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-paper/60">
                Uma viagem desde 1895 pelos acontecimentos que ajudaram a
                construir uma das histórias mais marcantes do futebol
                brasileiro.
              </p>

              <p className="mt-4 leading-7 text-paper/50">
                Das águas da Baía de Guanabara ao futebol, aos títulos e aos
                personagens que atravessaram gerações.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <TrackedLink
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noreferrer"
                  event="social_click"
                  params={{
                    platform: "youtube",
                    location: "flamengo_series",
                  }}
                  className="bg-blood px-6 py-4 text-xs uppercase tracking-widest text-paper hover:bg-[#9d1b23]"
                >
                  Assistir no YouTube ↗
                </TrackedLink>

                <TrackedLink
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  event="social_click"
                  params={{
                    platform: "instagram",
                    location: "flamengo_series",
                  }}
                  className="border border-gold/60 px-6 py-4 text-xs uppercase tracking-widest text-gold"
                >
                  Ver no Instagram ↗
                </TrackedLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTRAS HISTÓRIAS */}
      <section id="historias" className="bg-[#111] py-24">
        <div className="container">
          <p className="eyebrow">Muito além dos grandes jogos</p>

          <h2 className="display mt-3 max-w-3xl text-5xl text-paper md:text-6xl">
            O futebol está cheio de histórias.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/60">
            Curiosidades, grandes jogadores, regras, Copas, clubes, estádios e
            acontecimentos que ajudam a explicar por que o futebol se tornou o
            esporte que conhecemos hoje.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="border border-white/10 bg-white/[.03] p-7">
              <span className="text-xs uppercase tracking-[.2em] text-gold">
                Histórias
              </span>

              <h3 className="display mt-5 text-3xl text-paper">
                Curiosidades do futebol
              </h3>

              <p className="mt-4 leading-7 text-paper/55">
                As regras, objetos, competições e acontecimentos que mudaram o
                jogo.
              </p>
            </div>

            <div className="border border-white/10 bg-white/[.03] p-7">
              <span className="text-xs uppercase tracking-[.2em] text-gold">
                Personagens
              </span>

              <h3 className="display mt-5 text-3xl text-paper">
                Grandes jogadores
              </h3>

              <p className="mt-4 leading-7 text-paper/55">
                Personagens que deixaram sua marca e ajudaram a escrever a
                história do futebol.
              </p>
            </div>

            <div className="border border-white/10 bg-white/[.03] p-7">
              <span className="text-xs uppercase tracking-[.2em] text-gold">
                Investigação
              </span>

              <h3 className="display mt-5 text-3xl text-paper">
                A verdade por trás da história
              </h3>

              <p className="mt-4 leading-7 text-paper/55">
                Histórias famosas do futebol revisitadas com contexto,
                pesquisa e diferentes versões dos fatos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-28">
        <div className="container grid gap-10 md:grid-cols-[1fr_1.5fr]">
          <p className="eyebrow">Manifesto</p>

          <div>
            <h2 className="display text-4xl leading-tight text-paper md:text-6xl">
              Para entender o futebol, precisamos voltar no tempo.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-paper/60">
              O Viagem no Tempo Futebol transforma histórias reais do esporte
              em pequenas viagens pelo passado. Cada vídeo é uma oportunidade
              de descobrir como surgiram clubes, competições, regras,
              rivalidades, personagens e momentos que ficaram para sempre na
              história do futebol.
            </p>
          </div>
        </div>
      </section>

      {/* REDES SOCIAIS */}
      <section id="redes" className="border-y border-white/10 bg-blood py-20">
        <div className="container">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-paper/70">Continue a viagem</p>

              <h2 className="display mt-3 max-w-2xl text-5xl">
                A história continua nas nossas redes.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-paper/70">
                Siga o Viagem no Tempo Futebol e acompanhe novas histórias,
                curiosidades e viagens pelo passado do esporte.
              </p>
            </div>

            <div className="flex flex-wrap gap-5">
              {Object.entries(siteConfig.social).map(([name, url]) => (
                <TrackedLink
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  event="social_click"
                  params={{
                    platform: name,
                    location: "social_section",
                  }}
                  className="border border-paper/30 px-5 py-4 text-xs uppercase tracking-widest text-paper hover:border-paper"
                >
                  {name} ↗
                </TrackedLink>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARCERIAS */}
      <section id="parcerias" className="py-24">
        <div className="container max-w-3xl">
          <p className="eyebrow">Parcerias</p>

          <h2 className="display mt-3 text-5xl text-paper">
            Quer fazer parte dessa história?
          </h2>

          <p className="mt-6 text-lg leading-8 text-paper/60">
            O Viagem no Tempo Futebol está aberto a parcerias com marcas,
            projetos esportivos, criadores e empresas que queiram contar
            histórias de uma maneira diferente.
          </p>

          <a
            href={`mailto:${siteConfig.contact}`}
            className="mt-8 inline-block border border-gold px-6 py-4 text-xs uppercase tracking-widest text-gold"
          >
            Falar sobre uma parceria
          </a>
        </div>
      </section>
    </main>
  );
}