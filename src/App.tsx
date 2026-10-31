import { useEffect, useState, type AnchorHTMLAttributes } from 'react'

type Artwork = {
  title: string
  place: string
  year: string
  technique: string
  size: string
  edition: string
  image: string
  position?: string
  description: string
}

const artworks: Artwork[] = [
  {
    title: 'La luce del Foro',
    place: 'Foro Romano',
    year: '2025',
    technique: 'Olio e terre naturali su tela',
    size: '100 × 140 cm',
    edition: 'Opera unica',
    image:
      'https://images.unsplash.com/photo-1603199766980-fdd4ac568a11?auto=format&fit=crop&w=1200&q=90',
    description:
      'Le rovine emergono da una luce calda e sospesa. Un omaggio alla materia, al tempo e al silenzio della Roma antica.',
  },
  {
    title: 'Ottobre, Trastevere',
    place: 'Trastevere',
    year: '2024',
    technique: 'Olio su lino',
    size: '80 × 110 cm',
    edition: '1 di 3',
    image:
      'https://images.unsplash.com/photo-1569230516306-5a8cb5586399?auto=format&fit=crop&w=1200&q=90',
    description:
      'Una strada vissuta, colta nell’ora in cui le voci si accendono e le facciate restituiscono il calore del giorno.',
  },
  {
    title: 'Acqua di Roma',
    place: 'Fontana di Trevi',
    year: '2025',
    technique: 'Pigmenti e grafite su tavola',
    size: '120 × 90 cm',
    edition: 'Opera unica',
    image:
      'https://images.unsplash.com/photo-1529154036614-a60975f5c760?auto=format&fit=crop&w=1200&q=90',
    position: 'center',
    description:
      'Marmo, acqua e movimento diventano una sola trama. Un’opera costruita per velature, segni e riflessi.',
  },
  {
    title: 'Roma, ora d’oro',
    place: 'Cupola di San Pietro',
    year: '2024',
    technique: 'Olio e cera su tela',
    size: '90 × 130 cm',
    edition: '2 di 3',
    image:
      'https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=90',
    description:
      'Il Tevere accompagna lo sguardo verso la cupola. Una Roma quieta, dipinta tra il giorno che finisce e la sera.',
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

function AppLink({
  href = '#',
  className = '',
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  )
}

export default function App() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = selectedArtwork ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedArtwork])

  return (
    <div className="site-shell">
      <header className="site-header">
        <AppLink href="#inizio" className="wordmark" aria-label="Domus Roma, torna all’inizio">
          <span>DOMUS</span>
          <span>ROMA</span>
        </AppLink>

        <nav className="desktop-nav" aria-label="Navigazione principale">
          <AppLink href="#collezione">Collezione</AppLink>
          <AppLink href="#atelier">L’atelier</AppLink>
          <AppLink href="#come-funziona">Come acquistare</AppLink>
        </nav>

        <AppLink href="#contatti" className="header-cta">
          Richiedi una chiamata
        </AppLink>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Navigazione mobile">
          <AppLink href="#collezione" onClick={() => setMenuOpen(false)}>
            Collezione
          </AppLink>
          <AppLink href="#atelier" onClick={() => setMenuOpen(false)}>
            L’atelier
          </AppLink>
          <AppLink href="#come-funziona" onClick={() => setMenuOpen(false)}>
            Come acquistare
          </AppLink>
          <AppLink href="#contatti" onClick={() => setMenuOpen(false)}>
            Richiedi una chiamata
          </AppLink>
        </nav>
      )}

      <main>
        <section className="hero" id="inizio">
          <div className="hero-copy">
            <p className="eyebrow">Atelier indipendente · Roma</p>
            <h1>
              Roma,
              <br />
              <em>dipinta per</em>
              <br />
              restare.
            </h1>
            <p className="hero-intro">
              Quadri originali in edizione limitata. Storie di pietra, luce e vita romana,
              create nel nostro atelier per chi ama questa città.
            </p>
            <AppLink href="#collezione" className="text-link">
              Scopri le opere <ArrowIcon />
            </AppLink>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1555992828-35627f3b373f?auto=format&fit=crop&w=1600&q=90"
                alt="Veduta aerea del Colosseo e dei tetti di Roma"
              />
            </div>
            <div className="hero-caption">
              <span>Collezione 01</span>
              <span>Roma Aeterna</span>
            </div>
            <span className="edition-mark">I / V</span>
          </div>

          <p className="vertical-note">Dipinto e rifinito a mano in Italia</p>
        </section>

        <section className="collection" id="collezione">
          <div className="section-heading">
            <div>
              <p className="eyebrow">La collezione</p>
              <h2>Pochi quadri.<br />Scelti uno a uno.</h2>
            </div>
            <p>
              Non inseguiamo la quantità. Ogni opera nasce da una ricerca lenta ed è disponibile
              in un solo esemplare o in una tiratura massima di tre.
            </p>
          </div>

          <div className="art-grid">
            {artworks.map((artwork, index) => (
              <article className={`art-card art-card-${index + 1}`} key={artwork.title}>
                <button
                  className="art-image"
                  type="button"
                  onClick={() => setSelectedArtwork(artwork)}
                  aria-label={`Scopri ${artwork.title}`}
                >
                  <img
                    src={artwork.image}
                    alt={`${artwork.place}, soggetto dell’opera ${artwork.title}`}
                    style={{ objectPosition: artwork.position }}
                  />
                  <span className="view-label">Vedi opera</span>
                </button>
                <div className="art-meta">
                  <div>
                    <h3>{artwork.title}</h3>
                    <p>{artwork.place} · {artwork.year}</p>
                  </div>
                  <p>{artwork.edition}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="manifesto" id="atelier">
          <div className="manifesto-image">
            <img
              src="https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=1400&q=90"
              alt="Roma vista dall’alto con Piazza San Pietro al centro"
            />
          </div>
          <div className="manifesto-copy">
            <p className="eyebrow light">Il nostro sguardo</p>
            <blockquote>
              “Non dipingiamo monumenti. Dipingiamo quello che Roma lascia dentro.”
            </blockquote>
            <p>
              Camminiamo, osserviamo, raccogliamo tracce. Ogni quadro nasce da un luogo reale e
              viene reinterpretato nel nostro atelier attraverso pigmenti, materia e memoria.
            </p>
            <p>
              Le piccole imperfezioni sono parte dell’opera: raccontano la mano, il tempo e
              l’unicità di ogni pezzo.
            </p>
          </div>
        </section>

        <section className="process" id="come-funziona">
          <div className="section-heading process-heading">
            <div>
              <p className="eyebrow">Un acquisto personale</p>
              <h2>Dall’atelier<br />a casa tua.</h2>
            </div>
            <p>
              Nessun carrello impersonale. Conosciamo chi sceglie le nostre opere e seguiamo ogni
              passaggio in prima persona.
            </p>
          </div>

          <div className="process-list">
            <article>
              <span>01</span>
              <div>
                <h3>Scegli ciò che ti emoziona</h3>
                <p>Esplora la collezione e raccontaci quale opera ha catturato il tuo sguardo.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Conosciamoci</h3>
                <p>
                  Durante una breve chiamata ti mostriamo dettagli, materiali e storia dell’opera.
                </p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Ci occupiamo di tutto</h3>
                <p>
                  Concordiamo insieme pagamento, imballaggio e spedizione assicurata, interamente
                  gestita dal nostro atelier.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="contact" id="contatti">
          <p className="eyebrow light">Inizia da una conversazione</p>
          <h2>Quale Roma<br />vuoi portare con te?</h2>
          <p>
            Prenota una chiamata conoscitiva senza impegno. Ti guideremo nella scelta dell’opera
            e risponderemo a ogni tua domanda.
          </p>
          <AppLink
            href="mailto:atelier@domusroma.it?subject=Richiesta%20chiamata%20conoscitiva"
            className="contact-button"
          >
            Richiedi la tua chiamata <ArrowIcon />
          </AppLink>
          <div className="contact-footnote">
            <span>Risposta entro 1 giorno lavorativo</span>
            <span>Spedizione assicurata in Italia e in Europa</span>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <span>DOMUS</span>
          <span>ROMA</span>
        </div>
        <p>Quadri originali dedicati alla città eterna.</p>
        <div className="footer-links">
          <AppLink href="mailto:atelier@domusroma.it">Email</AppLink>
          <AppLink href="#inizio">Torna su ↑</AppLink>
        </div>
        <p className="copyright">© 2025 Domus Roma Atelier</p>
      </footer>

      {selectedArtwork && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelectedArtwork(null)}>
          <section
            className="art-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="artwork-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedArtwork(null)}
              aria-label="Chiudi dettagli opera"
            >
              <CloseIcon />
            </button>
            <div className="modal-image">
              <img src={selectedArtwork.image} alt={selectedArtwork.title} />
            </div>
            <div className="modal-content">
              <p className="eyebrow">{selectedArtwork.place} · {selectedArtwork.year}</p>
              <h2 id="artwork-title">{selectedArtwork.title}</h2>
              <p className="modal-description">{selectedArtwork.description}</p>
              <dl>
                <div>
                  <dt>Tecnica</dt>
                  <dd>{selectedArtwork.technique}</dd>
                </div>
                <div>
                  <dt>Dimensioni</dt>
                  <dd>{selectedArtwork.size}</dd>
                </div>
                <div>
                  <dt>Disponibilità</dt>
                  <dd>{selectedArtwork.edition}</dd>
                </div>
              </dl>
              <AppLink
                href={`mailto:atelier@domusroma.it?subject=${encodeURIComponent(`Informazioni su ${selectedArtwork.title}`)}`}
                className="modal-cta"
              >
                Chiedi informazioni <ArrowIcon />
              </AppLink>
              <p className="price-note">
                Prezzo, pagamento e consegna vengono concordati durante la chiamata conoscitiva.
              </p>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
