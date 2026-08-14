"use client";

import { useEffect, useState } from "react";

const phone = "5582993300457";

const whatsapp = (
  message = "Olá, Jajá! Quero conhecer os passeios de buggy em Maragogi.",
) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

type GalleryImage = {
  src: string;
  alt: string;
  route: "Litoral Norte" | "Litoral Sul";
  size: "feature" | "half" | "third" | "wide" | "small";
};

const northImages: GalleryImage[] = [
  {
    src: "/media/norte/norte-01.webp",
    alt: "Passeio de buggy na praia do Litoral Norte de Maragogi",
    route: "Litoral Norte",
    size: "feature",
  },
  {
    src: "/media/norte/norte-02.webp",
    alt: "Viajante aproveitando o buggy à beira-mar",
    route: "Litoral Norte",
    size: "half",
  },
  {
    src: "/media/norte/norte-03.webp",
    alt: "Viajante sorrindo durante o passeio de buggy",
    route: "Litoral Norte",
    size: "half",
  },
  {
    src: "/media/norte/norte-04.webp",
    alt: "Casal caminhando por uma praia de Maragogi",
    route: "Litoral Norte",
    size: "third",
  },
  {
    src: "/media/norte/norte-05.webp",
    alt: "Casal fotografado em uma parada do roteiro",
    route: "Litoral Norte",
    size: "third",
  },
  {
    src: "/media/norte/norte-06.webp",
    alt: "Buggy vermelho diante do mar de Maragogi",
    route: "Litoral Norte",
    size: "third",
  },
];

const southImages: GalleryImage[] = [
  {
    src: "/media/sul/sul-01.webp",
    alt: "Casal em uma parada à beira-mar no Litoral Sul",
    route: "Litoral Sul",
    size: "feature",
  },
  {
    src: "/media/sul/sul-02.webp",
    alt: "Viajante em um cenário histórico diante do mar",
    route: "Litoral Sul",
    size: "half",
  },
  {
    src: "/media/sul/sul-03.webp",
    alt: "Viajante se divertindo em um coqueiro na praia",
    route: "Litoral Sul",
    size: "half",
  },
  {
    src: "/media/sul/sul-04.webp",
    alt: "Casal conhecendo um ponto histórico do Litoral Sul",
    route: "Litoral Sul",
    size: "third",
  },
  {
    src: "/media/sul/sul-05.webp",
    alt: "Amigas posando sobre o buggy em Maragogi",
    route: "Litoral Sul",
    size: "third",
  },
  {
    src: "/media/sul/sul-06.webp",
    alt: "Viajante sobre o buggy vermelho diante do mar",
    route: "Litoral Sul",
    size: "third",
  },
  {
    src: "/media/sul/sul-07.webp",
    alt: "Casal em uma parada com arquitetura histórica",
    route: "Litoral Sul",
    size: "wide",
  },
  {
    src: "/media/sul/sul-08.webp",
    alt: "Casal no buggy durante o pôr do sol",
    route: "Litoral Sul",
    size: "wide",
  },
  {
    src: "/media/sul/sul-09.webp",
    alt: "Casal posando ao lado do buggy entre coqueiros",
    route: "Litoral Sul",
    size: "third",
  },
  {
    src: "/media/sul/sul-10.webp",
    alt: "Casal aproveitando uma parada junto ao mar",
    route: "Litoral Sul",
    size: "third",
  },
  {
    src: "/media/sul/sul-11.webp",
    alt: "Viajante em um balanço com vista para o mar",
    route: "Litoral Sul",
    size: "third",
  },
  {
    src: "/media/sul/sul-12.webp",
    alt: "Viajante se divertindo em um balanço sob o coqueiro",
    route: "Litoral Sul",
    size: "wide",
  },
];

const allImages = [...northImages, ...southImages];

function GallerySection({
  id,
  index,
  title,
  description,
  images,
  onOpen,
  tone,
}: {
  id: string;
  index: string;
  title: string;
  description: string;
  images: GalleryImage[];
  onOpen: (src: string) => void;
  tone: "light" | "sand";
}) {
  return (
    <section className={`gallery-section gallery-${tone}`} id={id}>
      <header className="gallery-heading">
        <div className="gallery-index" aria-hidden="true">
          {index}
        </div>
        <div>
          <p className="kicker">Rota de buggy</p>
          <h2>{title}</h2>
        </div>
        <p>{description}</p>
      </header>

      <div className="gallery-grid">
        {images.map((image, imageIndex) => (
          <figure
            className={`gallery-card size-${image.size}`}
            key={image.src}
          >
            <button
              type="button"
              onClick={() => onOpen(image.src)}
              aria-label={`Ampliar foto ${imageIndex + 1} de ${image.route}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
              />
              <span className="gallery-shade" />
              <figcaption>
                <span>{image.route}</span>
                <strong>{String(imageIndex + 1).padStart(2, "0")}</strong>
              </figcaption>
            </button>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? null : (current + 1) % allImages.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null
            ? null
            : (current - 1 + allImages.length) % allImages.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = selectedIndex === null ? "" : "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const openImage = (src: string) => {
    const index = allImages.findIndex((image) => image.src === src);
    setSelectedIndex(index >= 0 ? index : null);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Jajá Maragogi — início">
          <img src="/brand-white.png" alt="Jajá Maragogi" />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#rotas">Roteiros</a>
          <a href="#norte">Litoral Norte</a>
          <a href="#sul">Litoral Sul</a>
          <a href="#ponta-a-ponta">Ponta a Ponta</a>
          <a href="#sobre">A Jajá</a>
        </nav>

        <a
          className="header-cta"
          href={whatsapp()}
          target="_blank"
          rel="noreferrer"
        >
          Reservar <span>↗</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Navegação para celular"
        >
          <a href="#rotas" onClick={closeMenu}>Roteiros</a>
          <a href="#norte" onClick={closeMenu}>Litoral Norte</a>
          <a href="#sul" onClick={closeMenu}>Litoral Sul</a>
          <a href="#ponta-a-ponta" onClick={closeMenu}>Ponta a Ponta</a>
          <a href="#sobre" onClick={closeMenu}>A Jajá</a>
          <a href={whatsapp()} target="_blank" rel="noreferrer">Reservar pelo WhatsApp ↗</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy-panel">
          <p className="kicker kicker-light">Buggy • Maragogi, AL</p>
          <h1>
            Maragogi por outros <em>caminhos.</em>
          </h1>
          <p className="hero-copy">
            Escolha Norte, Sul ou viva os dois no Ponta a Ponta — com praias,
            paradas e fotos que ficam para sempre.
          </p>
          <div className="hero-actions">
            <a className="button button-orange" href="#rotas">
              Escolher roteiro <span>↓</span>
            </a>
            <a
              className="button-link"
              href={whatsapp()}
              target="_blank"
              rel="noreferrer"
            >
              Falar com Jajá ↗
            </a>
          </div>
          <div className="hero-meta" aria-label="Diferenciais do passeio">
            <span>Passeio privativo</span>
            <span>Atendimento local</span>
            <span>Paradas para fotos</span>
          </div>
        </div>

        <div className="hero-media">
  <img
    src="/media/foto-principal-hero.png"
    alt="Buggy vermelho em Maragogi"
  />
          <div className="hero-media-shade" />
          <p className="hero-location">08°59&apos;S • 35°13&apos;W</p>
          <div className="hero-seal">
            <span>Viva</span>
            <strong>o melhor de<br />Maragogi</strong>
          </div>
        </div>
      </section>

      <section className="experience-strip" aria-label="Sobre a experiência">
        <p><strong>01</strong> Litoral Norte</p>
        <p><strong>02</strong> Litoral Sul</p>
        <p><strong>03</strong> Ponta a Ponta</p>
      </section>

      <section className="route-selector" id="rotas">
        <header className="route-heading">
          <div>
            <p className="kicker">Escolha seu passeio</p>
            <h2>Qual Maragogi<br />você quer viver?</h2>
          </div>
          <p>
            Três formas de viver Maragogi, com cenários diferentes e o mesmo
            mar que faz todo mundo querer voltar.
          </p>
        </header>

        <div className="route-choices">
          <a className="route-choice" href="#norte">
            <img src="/media/norte/norte-01.webp" alt="Passeio pelo Litoral Norte" />
            <span className="route-shade" />
            <span className="route-count">6 fotos</span>
            <div>
              <small>Rota 01</small>
              <h3>Litoral Norte</h3>
              <p>Conhecer a galeria <span>↘</span></p>
            </div>
          </a>
          <a className="route-choice" href="#sul">
            <img src="/media/sul/sul-01.webp" alt="Passeio pelo Litoral Sul" />
            <span className="route-shade" />
            <span className="route-count">12 fotos</span>
            <div>
              <small>Rota 02</small>
              <h3>Litoral Sul</h3>
              <p>Conhecer a galeria <span>↘</span></p>
            </div>
          </a>
          <a className="route-choice route-choice-ponta" href="#ponta-a-ponta">
            <img
              src="/media/ponta-a-ponta/capa.webp"
              alt="Vista aérea do passeio Ponta a Ponta em Maragogi"
            />
            <span className="route-shade" />
            <span className="route-count">Vídeo • 33s</span>
            <div>
              <small>Rota 03</small>
              <h3>Ponta a Ponta</h3>
              <p>Assistir ao passeio <span>↘</span></p>
            </div>
          </a>
        </div>
      </section>

      <GallerySection
        id="norte"
        index="01"
        title="Litoral Norte"
        description="Praias abertas, mar azul e paradas que combinam aventura com fotografias inesquecíveis."
        images={northImages}
        onOpen={openImage}
        tone="light"
      />

      <GallerySection
        id="sul"
        index="02"
        title="Litoral Sul"
        description="Coqueiros, história e cenários naturais para viver Maragogi com outro olhar."
        images={southImages}
        onOpen={openImage}
        tone="sand"
      />

      <section className="ponta-a-ponta" id="ponta-a-ponta">
        <header className="ponta-heading">
          <div className="gallery-index" aria-hidden="true">03</div>
          <div>
            <p className="kicker">Rota completa</p>
            <h2>Ponta a Ponta</h2>
          </div>
          <p>
            Para quem quer ampliar a experiência e conhecer Maragogi de uma
            ponta à outra.
          </p>
        </header>

        <div className="ponta-showcase">
          <div className="ponta-video">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/media/ponta-a-ponta/capa.webp"
              aria-label="Vídeo do passeio Ponta a Ponta em Maragogi"
            >
              <source
                src="/media/ponta-a-ponta/ponta-a-ponta.mp4"
                type="video/mp4"
              />
              Seu navegador não conseguiu reproduzir este vídeo.
            </video>
            <span>Assista ao roteiro</span>
          </div>

          <div className="ponta-copy">
            <p className="ponta-eyebrow">Norte + Sul em uma experiência</p>
            <h3>Maragogi de uma ponta à outra.</h3>
            <p>
              Dê o play para sentir um pouco do caminho. Consulte duração,
              disponibilidade e paradas diretamente com a Jajá.
            </p>
            <div className="ponta-highlights">
              <span><strong>Mais Maragogi</strong>Um roteiro para aproveitar o dia</span>
              <span><strong>Do seu jeito</strong>Paradas alinhadas no atendimento</span>
            </div>
            <a
              className="button button-orange"
              href={whatsapp("Olá, Jajá! Quero saber mais sobre o passeio Ponta a Ponta.")}
              target="_blank"
              rel="noreferrer"
            >
              Saber mais pelo WhatsApp <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="about-media">
          <img
            src="/media/jaja-no-buggy.webp"
            alt="Jajá sentado sobre o buggy vermelho na praia de Maragogi"
            loading="lazy"
          />
          <span>Jajá Maragogi</span>
        </div>
        <div className="about-copy">
          <p className="kicker kicker-light">Quem conhece, leva melhor</p>
          <h2>
            Mais que um passeio. <em>Uma experiência local.</em>
          </h2>
          <p>
            Do primeiro contato ao último clique, a Jajá acompanha você com
            atendimento próximo, roteiro leve e tempo para aproveitar cada
            cenário.
          </p>
          <div className="about-points">
            <span><strong>3 opções</strong>Norte, Sul e Ponta a Ponta</span>
            <span><strong>Todos os dias</strong>Sob consulta</span>
            <span><strong>Maragogi, AL</strong>Atendimento local</span>
          </div>
          <a
            className="button button-orange"
            href={whatsapp("Olá, Jajá! Quero escolher a melhor rota de buggy para minha viagem.")}
            target="_blank"
            rel="noreferrer"
          >
            Escolher meu passeio <span>↗</span>
          </a>
        </div>
      </section>

      <section className="reserve">
        <div className="reserve-media">
          <img
            src="/media/sul/sul-12.webp"
            alt="Viajante se divertindo em um balanço sob o coqueiro"
            loading="lazy"
          />
          <p>Seu próximo dia favorito começa aqui.</p>
        </div>
        <div className="reserve-copy">
          <p className="kicker kicker-light">Pronto para viver?</p>
          <h2>Bora de <em>buggy?</em></h2>
          <p>
            Diga a data da viagem e quantas pessoas vão. A gente ajuda você a
            escolher a rota ideal.
          </p>
          <a
            className="button button-white"
            href={whatsapp()}
            target="_blank"
            rel="noreferrer"
          >
            Reservar pelo WhatsApp <span>↗</span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <a href="#inicio" aria-label="Voltar ao início">
          <img src="/brand-white.png" alt="Jajá Maragogi" />
        </a>
        <nav aria-label="Links do rodapé">
          <a href="#norte">Litoral Norte</a>
          <a href="#sul">Litoral Sul</a>
          <a href="#ponta-a-ponta">Ponta a Ponta</a>
          <a href={whatsapp()} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="https://instagram.com/jjmaragogibuggy" target="_blank" rel="noreferrer">Instagram</a>
        </nav>
        <div>
          <a href="tel:+5582993300457">(82) 99330-0457</a>
          <p>Maragogi — Alagoas</p>
        </div>
        <p className="copyright">
          © 2026 Jajá Maragogi • Passeios &amp; experiências • Desenvolvido por{" "}
          <a
            href="https://www.instagram.com/thalessmith.ai/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Thales Smith"
          >
            Thales Smith
          </a>
        </p>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsapp()}
        target="_blank"
        rel="noreferrer"
        aria-label="Reservar passeio pelo WhatsApp"
      >
        <span>✆</span> WhatsApp
      </a>

      {selectedIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada da galeria"
          onClick={(event) => {
            if (event.currentTarget === event.target) setSelectedIndex(null);
          }}
        >
          <button
            className="lightbox-close"
            type="button"
            aria-label="Fechar imagem"
            onClick={() => setSelectedIndex(null)}
          >
            ×
          </button>
          <button
            className="lightbox-arrow lightbox-prev"
            type="button"
            aria-label="Imagem anterior"
            onClick={() =>
              setSelectedIndex(
                (selectedIndex - 1 + allImages.length) % allImages.length,
              )
            }
          >
            ←
          </button>
          <figure>
            <img
              src={allImages[selectedIndex].src}
              alt={allImages[selectedIndex].alt}
            />
            <figcaption>
              <span>{allImages[selectedIndex].route}</span>
              <strong>
                {String(selectedIndex + 1).padStart(2, "0")} / {allImages.length}
              </strong>
            </figcaption>
          </figure>
          <button
            className="lightbox-arrow lightbox-next"
            type="button"
            aria-label="Próxima imagem"
            onClick={() =>
              setSelectedIndex((selectedIndex + 1) % allImages.length)
            }
          >
            →
          </button>
        </div>
      )}
    </main>
  );
}
