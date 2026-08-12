const phone = "5582993300457";
const whatsapp = (message = "Olá, Jajá! Quero consultar os passeios em Maragogi.") =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

const tours = [
  {
    tag: "Experiência completa",
    title: "Buggy ponta a ponta",
    text: "Conheça diferentes paisagens do litoral de Maragogi em um passeio feito para aproveitar e fotografar.",
    meta: "Capacidade e valor sob consulta",
    image: "https://static.wixstatic.com/media/1ccf9f_bc9dd56dc28640adbc5437b4a82d36d1~mv2.jpg/v1/fill/w_800%2Ch_534%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_auto/1ccf9f_bc9dd56dc28640adbc5437b4a82d36d1~mv2.jpg",
  },
  {
    tag: "Rota de buggy",
    title: "Buggy — Litoral Sul",
    text: "Descubra as belezas do litoral Sul em uma rota de buggy com paradas para curtir a paisagem.",
    meta: "Rota, disponibilidade e valor sob consulta",
    image: "https://static.wixstatic.com/media/1ccf9f_bc9dd56dc28640adbc5437b4a82d36d1~mv2.jpg/v1/fill/w_800%2Ch_534%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_auto/1ccf9f_bc9dd56dc28640adbc5437b4a82d36d1~mv2.jpg",
  },
  {
    tag: "Rota de buggy",
    title: "Buggy — Litoral Norte",
    text: "Viva o litoral Norte de Maragogi em uma rota de buggy cercada por praias e cenários inesquecíveis.",
    meta: "Rota, disponibilidade e valor sob consulta",
    image: "https://tourmaragogi.com.br/wp-content/uploads/2022/04/passeio-quadriciclo-maragogi-alagoas-11.jpeg",
  },
  {
    tag: "Aventura",
    title: "Passeio de quadriciclo",
    text: "Duas horas de trilhas, natureza e aventura para deixar sua viagem ainda mais inesquecível.",
    meta: "Duração aproximada: 2h • referência: R$ 250 • valor a confirmar",
    image: "https://tourmaragogi.com.br/wp-content/uploads/2022/04/passeio-quadriciclo-maragogi-alagoas-11.jpeg",
  },
  {
    tag: "Mar cristalino",
    title: "Piscinas naturais",
    text: "Navegue até as piscinas naturais e aproveite as águas transparentes de Maragogi.",
    meta: "Saída conforme a maré • valor sob consulta",
    image: "https://www.maremaragogi.com.br/images/blog/blog_piscinas_maragogi_lua-cheia.png",
  },
  {
    tag: "Rota ecológica",
    title: "São Miguel dos Milagres",
    text: "Conheça a famosa rota ecológica de São Miguel dos Milagres em uma experiência especial pelo litoral.",
    meta: "Rota, disponibilidade e valor sob consulta",
    image: "https://www.jaraguaturismo.com/wp-content/uploads/2016/12/1780964_10152662613626867_1164462738213624273_o.jpg",
  },
];

const routes = tours.map((tour) => tour.title);

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="brand" href="#inicio" aria-label="Jajá Maragogi - início">
          <img src="/jaja-logo.png" alt="Jajá Maragogi" />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#passeios">Passeios</a>
          <a href="#roteiros">Roteiros</a>
          <a href="#sobre">Quem somos</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <a className="button button-small" href={whatsapp()} target="_blank" rel="noreferrer">Reservar agora <span>↗</span></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow light"><span /> Seu melhor dia em Maragogi começa aqui</p>
          <h1>Mar azul,<br />aventura e <em>histórias.</em></h1>
          <p className="hero-copy">Passeios selecionados para você viver Maragogi do seu jeito — com segurança, leveza e atendimento de quem conhece cada paraíso.</p>
          <div className="hero-actions">
            <a className="button button-orange" href={whatsapp()} target="_blank" rel="noreferrer">Quero reservar meu passeio <span>↗</span></a>
            <a className="text-link" href="#passeios">Conhecer experiências ↓</a>
          </div>
        </div>
        <div className="hero-note">
          <strong>Atendimento local</strong>
          <span>Planejamento simples, experiência inesquecível.</span>
        </div>
      </section>

      <section className="trust-strip" aria-label="Diferenciais">
        <div><b>01</b><span><strong>Experiência local</strong>Quem conhece, indica melhor</span></div>
        <div><b>02</b><span><strong>Atendimento direto</strong>Do primeiro contato ao passeio</span></div>
        <div><b>03</b><span><strong>Experiências completas</strong>Mar, trilha e aventura</span></div>
      </section>

      <section className="section tours" id="passeios">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Escolha sua experiência</p><h2>Qual Maragogi<br />você quer viver?</h2></div>
          <p>Do mar cristalino às rotas de aventura. Selecione seu passeio e fale com a gente para confirmar disponibilidade, condições e valor.</p>
        </div>
        <aside className="price-notice"><strong>Valores sob consulta</strong><span>Todos os valores apresentados são referências e devem ser confirmados diretamente pelo WhatsApp antes da reserva.</span></aside>
        <div className="tour-grid">
          {tours.map((tour, index) => (
            <article className={`tour-card ${index === 0 ? "featured" : ""}`} key={tour.title}>
              <img src={tour.image} alt={tour.title + " em Maragogi"} />
              <div className="tour-shade" />
              <div className="tour-top"><span>{tour.tag}</span><b>0{index + 1}</b></div>
              <div className="tour-info">
                <h3>{tour.title}</h3><p>{tour.text}</p><small>{tour.meta}</small>
                <a href={whatsapp(`Olá, Jajá! Tenho interesse em ${tour.title}. Pode confirmar o roteiro, a disponibilidade e o valor?`)} target="_blank" rel="noreferrer" aria-label={`Consultar ${tour.title}`}>Consultar passeio <span>↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="private-tour">
        <div className="private-photo" />
        <div className="private-content">
          <p className="eyebrow light"><span /> Experiência exclusiva</p>
          <h2>Seu ritmo.<br />Seu roteiro.<br /><em>Seu Maragogi.</em></h2>
          <p>Tenha uma lancha reservada para viver o litoral com mais liberdade, conforto e privacidade.</p>
          <ul><li>Roteiro personalizado</li><li>Paradas para banho e fotos</li><li>Opções para casais, famílias e grupos</li></ul>
          <a className="button button-orange" href={whatsapp("Olá, Jajá! Quero consultar um passeio privativo de lancha. Pode confirmar a disponibilidade e o valor?")} target="_blank" rel="noreferrer">Consultar passeio privativo <span>↗</span></a>
        </div>
      </section>

      <section className="section routes" id="roteiros">
        <div className="section-heading compact">
          <div><p className="eyebrow"><span /> Por onde vamos passar</p><h2>Roteiros que viram memória.</h2></div>
          <p>Escolha uma experiência e confirme pelo WhatsApp os detalhes do roteiro, a disponibilidade e o valor atualizado.</p>
        </div>
        <div className="route-grid">
          {routes.map((route, i) => <article className="route-card" key={route}><div className="route-number">0{i + 1}</div><div><p>EXPERIÊNCIA JAJÁ</p><h3>{route}</h3><a className="route-consult" href={whatsapp(`Olá, Jajá! Quero saber os detalhes de ${route}. Pode confirmar o roteiro e o valor?`)} target="_blank" rel="noreferrer">Confirmar roteiro e valor ↗</a></div></article>)}
          <article className="route-call"><p>Não sabe qual escolher?</p><h3>Conte como é a sua viagem. A gente indica o passeio ideal.</h3><a href={whatsapp()} target="_blank" rel="noreferrer">Falar com Jajá <span>↗</span></a></article>
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="about-image"><div className="seal">JAJÁ<br /><small>MARAGOGI</small></div></div>
        <div className="about-copy"><p className="eyebrow light"><span /> Quem vai com você</p><h2>Mais que um passeio.<br /><em>Uma recepção de verdade.</em></h2><p>A Jajá Maragogi nasceu para apresentar o melhor desse litoral com proximidade, cuidado e alegria. Aqui, você não recebe só um roteiro: recebe orientação antes, acompanhamento durante e boas histórias para levar para casa.</p><div className="about-points"><span><b>Maragogi, AL</b>Atendimento local</span><span><b>Todos os dias</b>Sob consulta</span></div></div>
      </section>

      <section className="section testimonials">
        <div className="section-heading compact"><div><p className="eyebrow"><span /> Quem viveu, recomenda</p><h2>Dias felizes,<br />lembranças reais.</h2></div><div className="rating"><b>5,0</b><span>★★★★★</span><small>Avaliações de viajantes</small></div></div>
        <div className="testimonial-grid">
          {[['“Atendimento maravilhoso do começo ao fim. O roteiro foi lindo e tivemos tempo para aproveitar cada parada.”','Camila R.','São Paulo, SP'],['“O passeio de buggy foi o ponto alto da viagem. Pontual, divertido e com fotos incríveis!”','Rafael M.','Belo Horizonte, MG'],['“Nos ajudaram a escolher o melhor dia por causa da maré. Isso fez toda a diferença nas piscinas naturais.”','Juliana A.','Brasília, DF']].map(([quote,name,city]) => <blockquote key={name}><span>★★★★★</span><p>{quote}</p><footer><b>{name}</b><small>{city}</small></footer></blockquote>)}
        </div>
      </section>

      <section className="section faq" id="duvidas">
        <div><p className="eyebrow"><span /> Antes de embarcar</p><h2>Dúvidas<br />frequentes.</h2><p>Se sua dúvida não estiver aqui, fale diretamente com a gente.</p><a className="text-link dark" href={whatsapp()} target="_blank" rel="noreferrer">Chamar no WhatsApp ↗</a></div>
        <div className="faq-list">
          {[
            ["Como faço para reservar?", "Clique em qualquer botão de reserva, informe a data da viagem, o número de pessoas e os passeios desejados. Confirmamos a disponibilidade pelo WhatsApp."],
            ["Os passeios dependem da maré?", "As piscinas naturais e algumas paradas dependem da tábua de marés. A equipe orienta o melhor dia e horário para sua experiência."],
            ["Crianças podem participar?", "Sim. A indicação pode variar conforme o passeio e a idade. Avise na reserva para receber a orientação correta."],
            ["Quais são as formas de pagamento?", "As formas de pagamento e as condições de reserva são informadas no atendimento."],
            ["Os valores exibidos são finais?", "Não. Todos os valores são referências e devem ser confirmados no atendimento, pois podem variar conforme data, disponibilidade, maré, quantidade de pessoas e condições do passeio."],
          ].map(([q,a], i) => <details key={q} open={i === 0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}
        </div>
      </section>

      <section className="cta">
        <div><p className="eyebrow light"><span /> Sua viagem merece esse dia</p><h2>Bora viver<br /><em>Maragogi?</em></h2></div>
        <div><p>Fale com a gente, consulte a disponibilidade e confirme o valor atualizado da sua experiência.</p><a className="button button-orange" href={whatsapp()} target="_blank" rel="noreferrer">Planejar meu passeio <span>↗</span></a></div>
      </section>

      <footer className="footer">
        <img src="/jaja-logo-white.png" alt="Jajá Maragogi" />
        <div><h4>Navegue</h4><a href="#passeios">Passeios</a><a href="#roteiros">Roteiros</a><a href="#sobre">Quem somos</a><a href="#duvidas">Dúvidas</a></div>
        <div><h4>Contato</h4><a href={whatsapp()} target="_blank" rel="noreferrer">(82) 99330-0457</a><a href="https://instagram.com/jjmaragogibuggy">@jjmaragogibuggy</a><span>Maragogi — Alagoas</span></div>
        <div className="footer-end"><p>© 2026 Jajá Maragogi</p><p>Passeios & experiências</p></div>
      </footer>
      <a className="floating-whatsapp" href={whatsapp()} target="_blank" rel="noreferrer" aria-label="Reservar pelo WhatsApp">✆<span>Reservar</span></a>
    </main>
  );
}
