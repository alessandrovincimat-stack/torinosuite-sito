/* Torino Suite — sito. Configurazione in alto, logica sotto. */
const CONFIG = {
  smoobu: 'https://booking.smoobu.com/9A362608',        // pagina diretta Smoobu (verificata 17/10/2026)
  contactEndpoint: '',                                  // es. 'https://.../api/contatto' ; se vuoto si apre la mail precompilata
  contactEmail: 'torinosuite@gmail.com',
  eventsUrl: 'events.json',                             // calendario eventi: lo aggiorna ogni settimana l'attivita' programmata
  whatsapp: '393482928606',                                         // numero con prefisso, senza + (es. '393331234567'); vuoto = pulsante WhatsApp nascosto
  analytics: ''                                         // es. 'https://cloud.umami.is/script.js|ID-SITO' (statistiche senza cookie); vuoto = nessuna statistica
};

const FIT = {'carlo-alberto':'Ideale per: coppie, soggiorni di lavoro','carlo-felice':'Ideale per: coppie, fino a 3 ospiti','vittorio':'Ideale per: coppie, chi ama cucinare, soggiorni più lunghi','san-carlo':'Ideale per: famiglie, piccoli gruppi','carignano':'Ideale per: famiglie, piccoli gruppi','borgone':'Ideale per: chi cerca un quartiere residenziale e tranquillo'};

/* Foto: n = numero di file img/<slug>-NN-l.jpg ; pick = ordine e selezione (indici 1-based) */
const ROOMS = [
  {id:1104946, slug:'carlo-alberto', name:'Carlo Alberto', tag:'Appartamento Standard', sz:'45 m²', n:16,
   desc:'Camera con letto matrimoniale e soggiorno con divano letto, cucina privata, aria condizionata e balcone. Il più raccolto del palazzo, perfetto per una coppia o per un soggiorno di lavoro.',
   chips:['Letto matrimoniale large','Divano letto','Cucina','Balcone','Aria condizionata']},
  {id:1953902, slug:'carlo-felice', name:'Carlo Felice', tag:'Appartamento con 1 camera da letto', sz:'50 m²', n:15,
   desc:'Camera matrimoniale separata e soggiorno luminoso con divano letto: spazio in più per respirare, a due passi da Piazza San Carlo.',
   chips:['Fino a 3 ospiti','Letto matrimoniale large','Divano letto','Cucina attrezzata','Aria condizionata']},
  {id:1104943, slug:'vittorio', name:'Vittorio', tag:'Appartamento con 1 camera da letto', sz:'50 m²', n:23,
   desc:'Elegante e silenzioso, con camera matrimoniale e zona giorno accogliente. Ideale per coppie, per chi ama cucinare o per soggiorni più lunghi.',
   chips:['Fino a 3 ospiti','Letto matrimoniale large','Divano letto','Cucina attrezzata','Aria condizionata']},
  {id:1104940, slug:'san-carlo', name:'San Carlo', tag:'Appartamento Superior', sz:'60 m²', n:14,
   desc:'Il respiro più ampio: camera, soggiorno con divano letto, bagno con doccia e bidet, cucina attrezzata e lavatrice. Pensato per famiglie e piccoli gruppi.',
   chips:['Camera + soggiorno','Divano letto','Lavatrice','Cucina attrezzata','Balcone','Aria condizionata']},
  {id:1953899, slug:'carignano', name:'Carignano', tag:'Appartamento Superior', sz:'60 m²', n:10,
   desc:'Gemello di San Carlo per spazi e dotazioni: ambienti ampi, arredi curati e la quiete del cortile interno nel cuore della città.',
   chips:['Camera + soggiorno','Divano letto','Cucina attrezzata','Balcone','Aria condizionata']},
  {id:1953905, slug:'borgone', name:'Casa Borgone', tag:'Via Borgone 63 · Altra zona di Torino', sz:'55 m²', n:10,
   desc:'Un appartamento ristrutturato a nuovo in un quartiere residenziale e tranquillo: camera matrimoniale, soggiorno con divano letto, cucina, balconcino e WiFi. Fermata dell\'autobus a 50 metri. Si trova in un\'altra zona di Torino, separata dal palazzo di Via Carlo Alberto: controlla l\'indirizzo prima di prenotare.',
   chips:['Camera + soggiorno','Cucina','Balcone','Aria condizionata','WiFi gratuito']}
];
/* Selezione e ordine delle foto per alloggio (se assente: tutte, in ordine). Modificabile. */
const PICK = {
  'carlo-alberto':[2,1,5,6,3,8,7,9,10],
  'carlo-felice':[1,3,6,4,11,12,14,8,10,7],
  'vittorio':[1,3,2,7,9,5,10,17,12],
  'san-carlo':[5,4,1,3,7,8,10,6,12],
  'carignano':[1,2,3,5,7,8,6,10]
};
/* Foto della testata (slug, indice) e immagini di contorno */
const HERO = [['esterni',7],['carlo-alberto',1],['san-carlo',5],['esterni',8],['carignano',2]];
const INTRO = {a:['carlo-alberto',6], b:['carlo-felice',4], direct:['san-carlo',5]};
const MARQ = [['esterni',7],['carlo-alberto',1],['esterni',8],['san-carlo',4],['esterni',3],['carignano',3],['esterni',9],['carlo-felice',11],['esterni',4],['vittorio',3],['esterni',2],['carlo-alberto',5]];

const EV_FALLBACK = {"updated": "2026-10-17", "note_it": "Date indicative, riprese da calendari pubblici: possono cambiare. I programmi aggiornati sono sui siti degli organizzatori e su turismotorino.org.", "note_en": "Dates are indicative, taken from public calendars, and may change. Check the organisers' websites and turismotorino.org for the latest programme.", "events": [{"start": "2026-10-29", "end": "2026-11-01", "cat": "music", "title": "Club to Club", "it": "Festival di musica elettronica e sperimentale, alle OGR e al Lingotto Fiere.", "en": "Electronic and experimental music festival at OGR and Lingotto Fiere."}, {"start": "2026-10-30", "end": "2026-11-01", "cat": "art", "title": "Artissima", "it": "La fiera internazionale d'arte contemporanea, all'Oval, Lingotto Fiere.", "en": "The international contemporary art fair, at the Oval, Lingotto Fiere."}, {"start": "2026-11-15", "end": "2026-11-22", "cat": "sport", "title": "Nitto ATP Finals", "it": "Il torneo di tennis dei migliori otto del mondo, all'Inalpi Arena.", "en": "The season-ending tennis tournament for the world's top eight, at the Inalpi Arena."}, {"start": "2026-11-24", "end": "2026-12-02", "cat": "cinema", "title": "Torino Film Festival", "it": "44ª edizione del festival di cinema; l'inaugurazione è al Teatro Regio.", "en": "44th edition of the film festival; the opening night is at the Teatro Regio."}, {"start": "2026-11-29", "end": "2026-11-29", "cat": "sport", "title": "Maratona di Torino", "it": "La corsa attraversa la città: la domenica si cammina tra tifosi e podisti.", "en": "The race runs through the city: on Sunday you stroll among fans and runners."}, {"start": "2026-11-01", "end": "2027-01-31", "cat": "city", "fmt": "month", "title": "Luci d'Artista", "it": "Installazioni luminose di artisti contemporanei lungo le vie e le piazze, da novembre a gennaio.", "en": "Light installations by contemporary artists along the streets and squares, from November to January."}, {"start": "2027-04-07", "end": "2027-04-11", "cat": "culture", "title": "Biennale Democrazia", "it": "Incontri e dibattiti pubblici con ospiti italiani e internazionali.", "en": "Public talks and debates with Italian and international guests."}, {"start": "2027-04-23", "end": "2027-05-01", "cat": "music", "title": "Torino Jazz Festival", "it": "Concerti in teatri, club e piazze della città.", "en": "Concerts in theatres, clubs and squares across the city."}, {"start": "2027-05-13", "end": "2027-05-17", "cat": "books", "title": "Salone Internazionale del Libro", "it": "Cinque giorni di libri, autori e incontri al Lingotto Fiere.", "en": "Five days of books, authors and meetings at Lingotto Fiere."}, {"start": "2027-06-24", "end": "2027-06-24", "cat": "city", "title": "Festa di San Giovanni", "it": "La festa del patrono di Torino, con i fuochi d'artificio sul fiume.", "en": "The feast of Turin's patron saint, with fireworks over the river."}]};

const CITY = [
  {k:'piazza-san-carlo', t:'Piazza San Carlo', d:'200 m', x:'Il salotto di Torino: due chiese gemelle, portici eleganti e caffè storici.'},
  {k:'museo-egizio', t:'Museo Egizio', d:'300 m', x:'Una delle più importanti collezioni di arte egizia al mondo.'},
  {k:'palazzo-carignano', t:'Palazzo Carignano', d:'450 m', x:'Capolavoro barocco, sede del Museo del Risorgimento.'},
  {k:'piazza-castello', t:'Piazza Castello', d:'650 m', x:'Il cuore monumentale: Palazzo Madama e Palazzo Reale.'},
  {k:'mole', t:'Mole Antonelliana', d:'1,1 km', x:'Il simbolo della città, con il Museo del Cinema e l\'ascensore panoramico.'},
  {k:'portici', t:'I portici', d:'a due passi', x:'Chilometri di portici per passeggiare con ogni tempo.'},
  {k:'monviso', t:'Le Alpi', d:'', x:'Nelle giornate limpide, il Monviso si staglia sopra i tetti della città.'},
  {k:'valentino', t:'Parco del Valentino', d:'', x:'Il grande parco sul Po, per una passeggiata lenta.'}
];

const SERV = [
 ['key','Check-in autonomo','Entri con un codice personale ricevuto prima dell\'arrivo: nessuna chiave da ritirare.','<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3"/>'],
 ['ac','Aria condizionata','Climatizzatore indipendente in ogni alloggio, più riscaldamento.','<path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9"/>'],
 ['kit','Cucina attrezzata','Piano cottura, frigorifero, microonde, utensili e macchina del caffè.','<path d="M6 3v8a2 2 0 002 2v8M10 3v8M8 3v8M17 21V3c-2 1-3 4-3 7s1 4 3 4"/>'],
 ['lift','Ascensore','I piani superiori sono raggiungibili in ascensore.','<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 10l3-3 3 3M9 15l3 3 3-3"/>'],
 ['moon','Silenzio','Pareti insonorizzate e affaccio sul cortile interno, in pieno centro.','<path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z"/>'],
 ['wifi','WiFi gratuito','Connessione inclusa in tutti gli appartamenti.','<path d="M2 9a15 15 0 0120 0M5 12.5a10 10 0 0114 0M8.5 16a5 5 0 017 0"/><circle cx="12" cy="19.5" r=".8"/>'],
 ['cup','Caffè e tè','Set per la colazione in casa, bollitore e macchina del caffè.','<path d="M4 8h13v6a5 5 0 01-5 5H9a5 5 0 01-5-5V8zM17 10h2a2 2 0 010 4h-2M8 3v2M12 3v2"/>'],
 ['wash','Lavatrice','Negli appartamenti Superior (San Carlo e Carignano), per i soggiorni lunghi.','<rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="13" r="4"/><path d="M8 6h.01M11 6h.01"/>'],
 ['drop','Bagno curato','Doccia e bidet, asciugamani, prodotti da bagno e asciugacapelli.','<path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z"/>'],
 ['bal','Balcone','Disponibile nella maggior parte degli appartamenti.','<path d="M3 11h18M5 11v10M19 11v10M9 11v10M15 11v10M3 21h18M8 11V4h8v7"/>'],
 ['baby','Per le famiglie','Seggiolone disponibile e culla su richiesta (10 € a notte).','<circle cx="12" cy="8" r="4"/><path d="M5 21c0-4 3-6 7-6s7 2 7 6"/>']
];

const DIST = [
 ['Palazzo Benso di Cavour','150 m',150],['Piazza San Carlo','200 m',200],['Museo Egizio','300 m',300],
 ['Palazzo Carignano · Museo del Risorgimento','450 m',450],['Piazza Castello','650 m',650],
 ['Stazione Porta Nuova (treno e metro)','700 m',700],['Palazzo Madama','800 m',800],['Palazzo Reale','1 km',1000],
 ['Mole Antonelliana · Museo del Cinema','1,1 km',1100],['Aeroporto Torino-Caselle','16 km',1100]
];

const BARS = [['Posizione',9.8],['Comfort',9.6],['Pulizia',9.5],['Personale',9.5],['Servizi',9.3],['Qualità/prezzo',8.9]];

/* Recensioni: testo ESATTO come pubblicato su Booking.com (lettura del 17/10/2026) */
const REV = [
 {q:'Una comoda soluzione per stare in centro e non rinunciare al confort. Letto comodissimo, camera molto silenziosa con affaccio su corte interna e cucina attrezzata. Proprietaria molto gentile e attenta.',n:'Loredana',c:'Italia',m:'ottobre 2026',s:'10'},
 {q:'A wonderful location, close to everything. A spacious, well-equipped, and well-maintained apartment (as is the entire property). Ideal conditions for anyone wanting a comfortable stay in a magnificent city like Turin. Excellent information provided by the owner.',n:'Dorota',c:'Polonia',m:'ottobre 2026',s:'10',l:'EN'},
 {q:'Appartamento molto accogliente e ben arredato in un bellissimo palazzo in pieno centro di Torino ma collocato in un cortile interno silenzioso',n:'Patrizia',c:'Italia',m:'settembre 2026',s:'9,0'},
 {q:'Beautiful apartment in the old house located in the downtown. Remote check-in, but the host was supernice and available online all time - thank you! There are plenty of cafes and two grocery shops right on the opposite and at the street corner. Definitely a place to stay and we will come back!',n:'Alexandra',c:'Federazione Russa',m:'maggio 2026',s:'10',l:'EN'},
 {q:'L\'appartamento, la pulizia ineccepibile, la cura dei particolari, la posizione perfetta.',n:'Carla',c:'Italia',m:'ottobre 2026',s:'10'},
 {q:'La posizione ottima!! Appartamento confortevole. Comodo il fatto che non ci siano chiavi per entrare ma solo un codice.',n:'Tiziana',c:'Italia',m:'giugno 2026',s:'10'},
 {q:'The apartment is in a great central location. It is well‑equipped, spacious, and very clean. The check‑in instructions were clear, and the host was helpful throughout my stay.',n:'Dávid',c:'Ungheria',m:'aprile 2026',s:'10',l:'EN'},
 {q:'posizione ottima in centro a Torino, è stato facile raggiungere i punti di interesse previsti per il nostro soggiorno. La struttura molto accogliente e curata ed il contatto di riferimento, la signora Cristina, davvero gentile e cortese',n:'Anna',c:'Italia',m:'maggio 2026',s:'9,0'},
 {q:'Clean comfortable quiet and very central',n:'Mark',c:'Regno Unito',m:'giugno 2026',s:'9,0',l:'EN'},
 {q:'location is wonderful. landlord are kind and thoughtful.',n:'Xiaoyu',c:'Francia',m:'luglio 2026',s:'10',l:'EN'},
 {q:'Molto pulito, tecnologico, durante la notte silenzioso, molto bello e confortevole',n:'Emanuela',c:'Italia',h:'Casa Borgone'},
 {q:'pregi: pulizia impeccabile; molto carino il balconcino; la posizione ed il contesto tranquilli; il fatto che l\'appartamento sia spazioso e ben attrezzato per ogni esigenza.',n:'Lorenza',c:'Italia',h:'Casa Borgone'}
];

const FAQ = [
 ['Come funziona il check-in?','Il check-in è autonomo, dalle 15:00 alle 21:00: prima dell\'arrivo ricevi le istruzioni e un codice personale per aprire la porta, senza chiavi da ritirare. Ti chiediamo di comunicarci l\'orario previsto. Il check-out è entro le 10:30.'],
 ['Come si prenota e si paga?','Scegli le date e l\'alloggio: il calendario mostra disponibilità e prezzo aggiornati. Il pagamento avviene online con carta, per l\'intero importo, al momento della prenotazione.'],
 ['Qual è la politica di cancellazione?','Per gli appartamenti di Via Carlo Alberto la cancellazione è gratuita fino a 5 giorni prima dell\'arrivo; per Casa Borgone fino a 14 giorni prima. Dopo questi termini viene addebitato l\'intero importo. Le condizioni definitive sono quelle mostrate in fase di prenotazione.'],
 ['La tassa di soggiorno è inclusa?','Sì, viene calcolata nel totale ed è indicata a parte nel riepilogo di prenotazione (3,80 € a persona a notte, salvo variazioni del Comune).'],
 ['Sono ammessi animali, fumatori, feste?','No: gli alloggi non sono fumatori, gli animali non sono ammessi e non sono consentiti feste o eventi. Silenzio dalle 23:00 alle 08:00. Età minima per prenotare: 18 anni.'],
 ['Serve un documento?','Sì. Per legge ogni ospite deve presentare un documento d\'identità valido al check-in, per la registrazione presso la Questura.'],
 ['Casa Borgone è nello stesso palazzo degli altri alloggi?','No. Casa Borgone è in Via Borgone 63, in un\'altra zona di Torino. Gli altri cinque appartamenti (Carlo Alberto, Carlo Felice, Vittorio, San Carlo, Carignano) sono tutti in Via Carlo Alberto 31, nel centro storico. L\'indirizzo è scritto in ogni scheda: controllalo prima di prenotare.'],
 ['Dove si parcheggia?','Per gli appartamenti di Via Carlo Alberto: il centro è in zona a traffico limitato. Nelle vicinanze ci sono parcheggi coperti a pagamento, raggiungibili in pochi minuti a piedi; la stazione Porta Nuova è a 700 metri.'],
 ['Avete culla o seggiolone?','Sì, il seggiolone è disponibile; la culla (0-2 anni) su richiesta a 10 € a notte. Non sono previsti letti supplementari.']
];

const DOCS = {
 condizioni:['Condizioni di soggiorno',`<p>Testo di sintesi: valgono le condizioni mostrate in fase di prenotazione.</p>
 <h4>Orari</h4><p>Check-in dalle 15:00 alle 21:00 (da comunicare in anticipo); check-out entro le 10:30. Silenzio dalle 23:00 alle 08:00.</p>
 <h4>Regole della casa</h4><p>Vietato fumare; animali non ammessi; feste ed eventi non ammessi; età minima 18 anni. Il numero di ospiti non può superare quello indicato per l'appartamento. Ogni ospite deve esibire un documento valido al check-in.</p>
 <h4>Pagamento e tassa di soggiorno</h4><p>Pagamento con carta, per l'intero importo, alla prenotazione. La tassa di soggiorno è inclusa nel totale e indicata a parte.</p>
 <h4>Cancellazione</h4><p>Via Carlo Alberto: gratuita fino a 5 giorni prima dell'arrivo. Casa Borgone: gratuita fino a 14 giorni prima. Oltre tali termini è addebitato l'intero importo.</p>
 <h4>Danni</h4><p>L'ospite risponde dei danni causati; non è richiesta cauzione.</p>`],
 privacy:['Informativa privacy',`<p><b>Titolare del trattamento:</b> Torino Suite Srl, Corso Rosselli 1, 10128 Torino, P.IVA 11270060012 — torinosuite@gmail.com.</p>
 <h4>Modulo di contatto</h4><p>Usiamo nome, email, telefono (facoltativo) e il contenuto del messaggio solo per risponderti. Base giuridica: tua richiesta (art. 6.1.b GDPR) e consenso. Conserviamo i dati per il tempo necessario a gestire la richiesta e, se segue una prenotazione, per gli obblighi di legge.</p>
 <h4>Prenotazioni</h4><p>La prenotazione avviene sul sistema Smoobu, nostro fornitore, che tratta i dati per nostro conto; i pagamenti sono gestiti da Stripe. Trovi le rispettive informative nelle pagine di prenotazione.</p>
 <h4>Mappa</h4><p>La mappa di Google viene caricata solo se premi «Mostra la mappa»; fino ad allora nessun dato è inviato a Google. Il sito non usa cookie di profilazione.</p>
 <h4>I tuoi diritti</h4><p>Puoi chiedere accesso, rettifica, cancellazione, limitazione, opposizione e portabilità scrivendo a torinosuite@gmail.com, e proporre reclamo al Garante per la protezione dei dati personali (garanteprivacy.it).</p>`]
};

/* ---------- utilità ---------- */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const nn = i => String(i).padStart(2,'0');
const src = (slug, i, t='m') => `img/${slug}-${nn(i)}-${t}.jpg`;
const fmt = d => `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;
const iso = d => new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,10);
const idxs = r => (PICK[r.slug] && PICK[r.slug].length) ? PICK[r.slug] : Array.from({length:r.n},(_,k)=>k+1);
const state = {arr:null, dep:null, ad:2};

/* ---------- header ---------- */
const header = $('#top');
const onScroll = () => {
  header.classList.toggle('solid', scrollY > 60);
  $('#sticky').classList.toggle('on', scrollY > innerHeight*.8);
};
addEventListener('scroll', onScroll, {passive:true}); onScroll();
$('#burger').onclick = () => { $('#nav').classList.toggle('open'); header.classList.toggle('menu-open'); };
$$('#nav a').forEach(a => a.addEventListener('click', () => { $('#nav').classList.remove('open'); header.classList.remove('menu-open'); }));
$('#yr').textContent = new Date().getFullYear();

/* ---------- hero ---------- */
(() => {
  const box = $('#heroSlides'), dots = $('#heroDots'); let cur = 0, timer;
  HERO.forEach(([s,i],k) => {
    const d = document.createElement('div'); d.className = 's' + (k===0?' on':'');
    d.innerHTML = `<img src="${src(s,i,'l')}" alt="" ${k?'loading="lazy"':'fetchpriority="high"'}>`;
    box.appendChild(d);
    const b = document.createElement('button'); b.setAttribute('aria-label','Immagine '+(k+1)); if(!k) b.className='on';
    b.onclick = () => go(k, true); dots.appendChild(b);
  });
  const go = (k, manual) => {
    const S = $$('.s', box), D = $$('button', dots);
    S[cur].classList.remove('on'); D[cur].classList.remove('on');
    cur = k; S[cur].classList.add('on'); D[cur].classList.add('on');
    if (manual) { clearInterval(timer); timer = setInterval(() => go((cur+1)%HERO.length), 6500); }
  };
  timer = setInterval(() => go((cur+1)%HERO.length), 6500);
})();

/* ---------- barra di ricerca ---------- */
(() => {
  const a = $('#dArr'), d = $('#dDep'), msg = $('#barMsg');
  const today = new Date(); today.setHours(0,0,0,0);
  a.min = iso(today);
  const t1 = new Date(today); t1.setDate(t1.getDate()+1); d.min = iso(t1);
  a.addEventListener('change', () => {
    if (!a.value) return;
    const n = new Date(a.value+'T00:00:00'); n.setDate(n.getDate()+1); d.min = iso(n);
    if (!d.value || d.value <= a.value) d.value = iso(n);
  });
  $('#bar').addEventListener('submit', e => {
    e.preventDefault();
    if (!a.value || !d.value) { msg.textContent = tt('Scegli le date di arrivo e di partenza.'); return; }
    const A = new Date(a.value+'T00:00:00'), D = new Date(d.value+'T00:00:00');
    if (A < today) { msg.textContent = tt('La data di arrivo è già passata.'); return; }
    if (D <= A) { msg.textContent = tt('La partenza deve essere dopo l\'arrivo.'); return; }
    state.arr = A; state.dep = D; state.ad = +$('#dAd').value;
    const nights = Math.round((D-A)/864e5);
    msg.textContent = tt(`${fmt(A)} → ${fmt(D)} · ${nights} ${nights>1?'notti':'notte'} · ${state.ad} ${state.ad>1?'ospiti':'ospite'} — scegli l'alloggio per vedere prezzo e disponibilità.`);
    $('#aptsNote').textContent = tt('Le tue date sono già selezionate: premi «Prenota» sull\'alloggio che preferisci.');
    refreshButtons();
    $('#alloggi').scrollIntoView({behavior:'smooth'});
  });
})();

const bookUrl = r => {
  let u = `${CONFIG.smoobu}?apartmentId=${r.id}`;
  if (state.arr && state.dep) {
    u += `&arrivalDate=${encodeURIComponent(fmt(state.arr))}&departureDate=${encodeURIComponent(fmt(state.dep))}&adults=${state.ad}&children=0&loadForCurrentDate=true`;
  } else u += `&adults=${state.ad}`;
  return u;
};
function refreshButtons() {
  $$('[data-book]').forEach(b => {
    const r = ROOMS.find(x => x.id == b.dataset.book);
    b.querySelector('span').textContent = tt(state.arr ? `Prenota dal ${fmt(state.arr).slice(0,5)} al ${fmt(state.dep).slice(0,5)}` : 'Verifica date e prezzi');
    b.dataset.url = bookUrl(r);
  });
}

/* ---------- elenco alloggi + gallerie ---------- */
const ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">';
(() => {
  const list = $('#aptList'), sel = $('#cfApt');
  ROOMS.forEach((r,k) => {
    const el = document.createElement('article'); el.className = 'apt rv' + (r.n ? '' : ' borgone');
    const ids = idxs(r).filter(()=>r.n);
    const show = ids.slice(0, 8);
    let gal;
    if (r.n) {
      gal = `<div class="gal"><div class="track">${show.map((i,j)=>`<figure data-i="${j}"><img src="${src(r.slug,i,'m')}" srcset="${src(r.slug,i,'m')} 800w, ${src(r.slug,i,'l')} 1800w" sizes="(max-width:900px) 100vw, 56vw" alt="${r.name}, foto ${j+1}" ${k>1||j>0?'loading="lazy"':''}></figure>`).join('')}</div>
        <button class="arr prev" aria-label="Foto precedente">${ARROW}<path d="M15 5l-7 7 7 7"/></svg></button>
        <button class="arr next" aria-label="Foto successiva">${ARROW}<path d="M9 5l7 7-7 7"/></svg></button>
        <span class="cnt">1 / ${show.length}</span>
        <button class="all">Tutte le foto (${ids.length})</button></div>`;
    } else {
      gal = `<div class="gal"><div><img src="img/mark-sand.png" alt=""><p>Via Borgone 63 · Torino</p></div></div>`;
    }
    el.innerHTML = `${gal}<div>
      <span class="tag">${r.tag}</span><h3>${r.name}</h3><div class="sz">${r.sz}</div>${FIT[r.slug]?`<div class="fit">${FIT[r.slug]}</div>`:''}
      <div class="where${r.slug==='borgone'?' far':''}"><svg viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.4"/></svg>${r.slug==='borgone'?'Via Borgone 63 · fuori dal palazzo di Via Carlo Alberto, in un\'altra zona di Torino':'Via Carlo Alberto 31 · centro storico, stesso palazzo'}</div>
      <p>${r.desc}</p>
      <div class="chips">${r.chips.map(c=>`<span>${c}</span>`).join('')}</div>
      <div class="cta"><button class="btn btn-dark" data-book="${r.id}"><span>Verifica date e prezzi</span></button></div></div>`;
    list.appendChild(el);
    const opt = document.createElement('option'); opt.textContent = r.slug==='borgone' ? r.name+' (Via Borgone 63)' : r.name; opt.value = r.name; sel.appendChild(opt);
    if (r.n) {
      const track = $('.track', el), cnt = $('.cnt', el), W = () => track.clientWidth;
      const upd = () => { cnt.textContent = `${Math.round(track.scrollLeft/W())+1} / ${show.length}`; };
      track.addEventListener('scroll', upd, {passive:true});
      $('.prev', el).onclick = () => track.scrollBy({left:-W(), behavior:'smooth'});
      $('.next', el).onclick = () => { if (track.scrollLeft + W() >= track.scrollWidth - 4) track.scrollTo({left:0,behavior:'smooth'}); else track.scrollBy({left:W(), behavior:'smooth'}); };
      $$('figure', el).forEach(f => f.onclick = () => openLb(r.name, ids.map(i=>src(r.slug,i,'l')), ids.map(i=>src(r.slug,i,'m')), ids.indexOf(show[+f.dataset.i])));
      $('.all', el).onclick = () => openLb(r.name, ids.map(i=>src(r.slug,i,'l')), ids.map(i=>src(r.slug,i,'m')), 0);
    }
  });
  refreshButtons();
  $$('[data-book]').forEach(b => b.onclick = () => openFrame(b.dataset.url, tt('Prenota · ' + ROOMS.find(x=>x.id==b.dataset.book).name)));
})();

/* immagini di contorno */
(() => {
  const set = (id, [s,i], t='l') => { const e = $(id); if (e) e.src = src(s,i,t); };
  set('#introA', INTRO.a); set('#introB', INTRO.b,'m'); set('#directImg', INTRO.direct);
  const row = $('#marq');
  const html = MARQ.map(([a,b])=>`<img src="${src(a,b,'m')}" alt="" loading="lazy">`).join('');
  row.innerHTML = html + html;
})();

/* ---------- Torino: pannelli interattivi ---------- */
(() => {
  const box = $('#cityline'); if (!box) return;
  const items = CITY.slice();
  const check = u => new Promise(res => { const i = new Image(); i.onload = () => res(true); i.onerror = () => res(false); i.src = u; });
  Promise.all(items.map(c => check(`img/torino/${c.k}.jpg`))).then(ok => {
    const has = items.map((c,k)=>({...c, img: ok[k]}));
    const list = has.filter(c=>c.img).length >= 3 ? has.filter(c=>c.img) : has.filter(c=>c.d).slice(0,6);
    box.className = 'cityline ' + (has.some(c=>c.img) ? 'photos' : 'plain');
    box.innerHTML = list.map((c,k)=>`<div class="cp${k===0?' on':''}" tabindex="0" ${c.img?`style="background-image:url(img/torino/${c.k}.jpg)"`:''}>
      <div class="ov"><small>${c.d||'Torino'}</small><h4>${c.t}</h4><p>${c.x}</p></div></div>`).join('');
    const P = $$('.cp', box);
    P.forEach(p => { const on = () => { P.forEach(q=>q.classList.remove('on')); p.classList.add('on'); };
      p.addEventListener('mouseenter', on); p.addEventListener('focus', on); p.addEventListener('click', on); });
    fetch('img/torino/CREDITI.json').then(r=>r.ok?r.json():[]).then(j=>{ window.__credits = j; }).catch(()=>{});
  });
})();

/* ---------- servizi, distanze, barre, recensioni, faq ---------- */
$('#servGrid').innerHTML = SERV.map((s,k)=>`<div class="c rv d${k%3}"><svg viewBox="0 0 24 24">${s[3]}</svg><h4>${s[1]}</h4><p>${s[2]}</p></div>`).join('');
$('#dist').innerHTML = DIST.map(([n,t,m])=>`<li><span>${n}</span><b>${t}</b><i style="--w:${Math.max(6,Math.min(100,m/11))}%"></i></li>`).join('');
$('#bars').innerHTML = BARS.map(([n,v])=>`<div><span>${n}<b>${String(v).replace('.',',')}</b></span><i style="--w:${v*10}%"></i></div>`).join('');
$('#rtrack').innerHTML = REV.map(r=>`<div class="card"><q>${r.q}</q><div class="by"><div><b>${r.n}</b>${r.c}${r.m?' · '+r.m:''}${r.h?' · '+r.h:''}${r.l?`<span class="lg">${r.l}</span>`:''}</div>${r.s?`<div class="sc">${r.s}</div>`:''}</div></div>`).join('');
$('#faqList').innerHTML = FAQ.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('');
(() => {
  const t = $('#rtrack'), step = () => Math.min(440, t.clientWidth*.86)+22;
  $('#rPrev').onclick = () => t.scrollBy({left:-step(), behavior:'smooth'});
  $('#rNext').onclick = () => { if (t.scrollLeft+t.clientWidth >= t.scrollWidth-6) t.scrollTo({left:0,behavior:'smooth'}); else t.scrollBy({left:step(), behavior:'smooth'}); };
  let auto = setInterval(()=>$('#rNext').click(), 7000);
  ['pointerdown','mouseenter','touchstart'].forEach(e=>t.addEventListener(e,()=>clearInterval(auto),{passive:true}));
  let down=false,sx=0,sl=0;
  t.addEventListener('pointerdown',e=>{ if(e.pointerType==='mouse'){down=true;sx=e.clientX;sl=t.scrollLeft;t.style.cursor='grabbing';t.style.scrollSnapType='none';} });
  addEventListener('pointerup',()=>{ if(down){down=false;t.style.cursor='';t.style.scrollSnapType='';} });
  addEventListener('pointermove',e=>{ if(down) t.scrollLeft = sl-(e.clientX-sx); });
})();

/* ---------- mappa su consenso ---------- */
$('#mapBtn').onclick = () => {
  $('#map').innerHTML = '<iframe loading="lazy" title="Mappa" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=Via+Carlo+Alberto+31,+Torino&z=16&output=embed"></iframe>';
};

/* ---------- reveal e contatori ---------- */
(() => {
  const io = window.__io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) {
    e.target.classList.add('in');
    if (e.target.classList.contains('proof')) countUp();
    io.unobserve(e.target);
  }}), {threshold:.14});
  $$('.rv, #dist, #bars, .proof, .cityline').forEach(e=>io.observe(e));
  /* rete di sicurezza: qualsiasi .rv già raggiunto dallo scroll diventa visibile */
  const sweep=()=>{ const h=innerHeight; $$('.rv:not(.in)').forEach(e=>{ const r=e.getBoundingClientRect(); if(r.top<h*0.98) e.classList.add('in'); }); };
  addEventListener('scroll',sweep,{passive:true}); addEventListener('resize',sweep); setInterval(sweep,600);
  function countUp(){ $$('[data-count]').forEach(el=>{ const to=+el.dataset.count, dec=+el.dataset.dec||0, t0=performance.now();
    const f=t=>{ const p=Math.min(1,(t-t0)/1600), v=to*(1-Math.pow(1-p,3)); el.textContent=v.toFixed(dec).replace('.',','); if(p<1) requestAnimationFrame(f); }; requestAnimationFrame(f); }); }
})();

/* ---------- modal ---------- */
const modal = $('#modal'), frame = $('#mFrame'), mdoc = $('#mDoc');
function openFrame(url, title) {
  $('#mTitle').textContent = title; $('#mExt').href = url; $('#mExt').style.display = '';
  mdoc.hidden = true; frame.hidden = false; frame.src = url;
  modal.classList.add('on'); document.body.style.overflow = 'hidden';
}
function openDoc(k) {
  if (k === 'crediti') {
    const c = (window.__credits || []).map(x => ({...x, soggetto: (GALLERY.find(g=>g[0]===x.soggetto)||[0,x.soggetto])[1]}));
    DOCS.crediti = ['Crediti fotografici', `<p>Fotografie degli appartamenti e degli esterni: © Torino Suite Srl.</p>` +
      (c.length ? '<h4>Immagini di Torino</h4>' + c.map(x=>`<p>${x.soggetto}: «${x.titolo}», ${x.autore}, ${x.licenza} — <a href="${x.url_pagina}" target="_blank" rel="noopener">fonte</a></p>`).join('') : '')];
  }
  const d = DOCS[k]; if (!d) return;
  $('#mTitle').textContent = d[0]; $('#mExt').style.display = 'none';
  frame.hidden = true; frame.src = 'about:blank'; mdoc.innerHTML = d[1]; mdoc.hidden = false;
  modal.classList.add('on'); document.body.style.overflow = 'hidden';
  applyLang(mdoc); $('#mTitle').textContent = tt($('#mTitle').textContent);
}
function closeModal() { modal.classList.remove('on'); frame.src = 'about:blank'; document.body.style.overflow = ''; }
$('#mClose').onclick = closeModal;
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
$$('[data-open-all]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); openFrame(CONFIG.smoobu, tt('Disponibilità e prenotazione')); }));
$$('[data-doc]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); openDoc(b.dataset.doc); }));

/* ---------- lightbox ---------- */
const lb = $('#lb'); let L = {t:'', big:[], th:[], i:0};
function openLb(title, big, th, i) {
  L = {t:title, big, th, i}; lb.classList.add('on'); document.body.style.overflow = 'hidden';
  $('#lbT').textContent = title;
  $('#lbTh').innerHTML = th.map((u,k)=>`<img src="${u}" alt="" data-k="${k}">`).join('');
  $$('#lbTh img').forEach(im => im.onclick = () => showLb(+im.dataset.k));
  showLb(i);
}
function showLb(i) {
  L.i = (i + L.big.length) % L.big.length;
  const im = $('#lbI'); im.src = L.big[L.i]; im.alt = `${L.t}, foto ${L.i+1}`;
  $('#lbC').textContent = `${L.i+1} / ${L.big.length}`;
  $$('#lbTh img').forEach((t,k)=>t.classList.toggle('on', k===L.i));
  const on = $$('#lbTh img')[L.i]; if (on) on.scrollIntoView({inline:'center', block:'nearest', behavior:'smooth'});
}
function closeLb() { lb.classList.remove('on'); document.body.style.overflow = ''; }
$('#lbX').onclick = closeLb; $('#lbL').onclick = () => showLb(L.i-1); $('#lbR').onclick = () => showLb(L.i+1);
let tx = 0; const stage = $('.stage', lb);
stage.addEventListener('touchstart', e => tx = e.changedTouches[0].clientX, {passive:true});
stage.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) showLb(L.i + (dx<0?1:-1)); });
stage.addEventListener('click', e => { if (e.target === stage) closeLb(); });
addEventListener('keydown', e => {
  if (lb.classList.contains('on')) { if (e.key==='Escape') closeLb(); if (e.key==='ArrowLeft') showLb(L.i-1); if (e.key==='ArrowRight') showLb(L.i+1); }
  else if (modal.classList.contains('on') && e.key==='Escape') closeModal();
});

/* ---------- modulo contatto ---------- */
$('#cf').addEventListener('submit', async e => {
  e.preventDefault();
  const f = e.target, ok = $('#cfOk'); ok.className = 'ok'; ok.style.display = 'block';
  if (f.sito.value) return;                                    // honeypot
  if (!f.nome.value.trim() || !/^\S+@\S+\.\S+$/.test(f.email.value) || !f.messaggio.value.trim() || !f.privacy.checked) {
    ok.className = 'ok err'; ok.textContent = tt('Compila nome, email e messaggio e accetta l\'informativa privacy.'); return;
  }
  const data = Object.fromEntries(new FormData(f)); delete data.sito;
  if (CONFIG.contactEndpoint) {
    try {
      const r = await fetch(CONFIG.contactEndpoint, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)});
      if (!r.ok) throw 0;
      ok.textContent = tt('Grazie! Il messaggio è stato inviato: ti rispondiamo al più presto.'); f.reset(); return;
    } catch (_) { ok.className = 'ok err'; ok.textContent = tt('Invio non riuscito. Riprova o scrivici a ') + CONFIG.contactEmail; return; }
  }
  const body = `Nome: ${data.nome}\nEmail: ${data.email}\nTelefono: ${data.tel||'-'}\nAlloggio: ${data.alloggio||'-'}\nArrivo: ${data.arrivo||'-'}  Partenza: ${data.partenza||'-'}\n\n${data.messaggio}`;
  location.href = `mailto:${CONFIG.contactEmail}?subject=${encodeURIComponent('Richiesta dal sito Torino Suite')}&body=${encodeURIComponent(body)}`;
  ok.textContent = tt('Si apre il tuo programma di posta con il messaggio già compilato: premi «Invia» per completare.');
});


/* ---------- eventi: si aggiornano da soli (events.json) ---------- */
const EV_CAT = {music:['Musica','Music'],art:['Arte','Art'],sport:['Sport','Sport'],cinema:['Cinema','Cinema'],city:['Città','City'],culture:['Cultura','Culture'],books:['Libri','Books'],food:['Gusto','Food'],family:['Famiglia','Family'],theatre:['Teatro','Theatre']};
const esc = s => String(s==null?'':s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function renderEvents() {
  const data = window.__events, box = $('#evList'); if (!data || !box) return;
  const en = LANG === 'en', loc = en ? 'en-GB' : 'it-IT';
  const D = s => new Date(s + 'T00:00:00');
  const today = new Date(); today.setHours(0,0,0,0);
  const dm = new Intl.DateTimeFormat(loc, {day:'numeric', month:'short'});
  const my = new Intl.DateTimeFormat(loc, {month:'short', year:'numeric'});
  const dmy = new Intl.DateTimeFormat(loc, {day:'numeric', month:'short', year:'numeric'});
  const cap = s => s.replace(/\.$/,'').replace(/^./, c=>c.toUpperCase());
  const evs = data.events.filter(e => e && e.title && /^\d{4}-\d\d-\d\d$/.test(e.start||'') && D(e.end||e.start) >= today)
    .sort((x,y) => D(x.start) - D(y.start)).slice(0, 10);
  if (!evs.length) {
    box.innerHTML = `<li><div class="t"><p>${en?'The calendar is being updated: write to us and we will suggest what to see.':'Il calendario è in aggiornamento: scrivici e ti consigliamo cosa vedere.'}</p></div></li>`;
  } else box.innerHTML = evs.map(e => {
    const s = D(e.start), f = D(e.end || e.start), same = +s === +f;
    let big, small;
    if (e.fmt === 'month') { big = cap(new Intl.DateTimeFormat(loc,{month:'short'}).format(s)); small = cap(my.format(f)); }
    else { big = dm.format(s).replace(/\.$/,''); small = same ? String(s.getFullYear()) : dmy.format(f).replace(/\.$/,''); }
    const days = Math.round((s - today) / 864e5);
    let badge = '';
    if (s <= today) badge = en ? 'Now on' : 'In corso';
    else if (days <= 45) badge = en ? `In ${days} days` : `Tra ${days} giorni`;
    const c = EV_CAT[e.cat] ? EV_CAT[e.cat][en?1:0] : (e.cat || '');
    const txt = (en && e.en) ? e.en : (e.it || e.en || '');
    const link = /^https:\/\//.test(e.url||'') ? `<a href="${esc(e.url)}" target="_blank" rel="noopener">${en?'Official site':'Sito ufficiale'} ↗</a>` : '';
    const go = `<button type="button" class="evgo" data-s="${esc(e.start)}" data-e="${esc(e.end||e.start)}" data-m="${e.fmt==='month'?1:0}">${en?'Find an apartment for these dates':'Cerca alloggio per queste date'} →</button>`;
    return `<li class="in"><div class="d"><b>${esc(big)}</b><span>${esc(small)}</span></div><div class="t"><h4>${esc(e.title)}${badge?`<em class="soon">${esc(badge)}</em>`:''}</h4><p>${esc(txt)} ${link}</p>${go}</div><span class="k">${esc(c)}</span></li>`;
  }).join('');
  let upd = ''; if (data.updated) { const u = D(data.updated); if (!isNaN(u)) upd = (en ? ' Last updated: ' : ' Ultimo aggiornamento: ') + `${String(u.getDate()).padStart(2,'0')}/${String(u.getMonth()+1).padStart(2,'0')}/${u.getFullYear()}.`; }
  $('#evNote').textContent = ((en ? data.note_en : data.note_it) || '') + upd;
}
$('#evList').addEventListener('click', ev => {
  const b = ev.target.closest('.evgo'); if (!b) return;
  const D = s => new Date(s + 'T00:00:00'), add = (d,k) => { const x = new Date(d); x.setDate(x.getDate()+k); return x; };
  const today = new Date(); today.setHours(0,0,0,0);
  const s = D(b.dataset.s), f = D(b.dataset.e), long = b.dataset.m === '1' || (f - s) / 864e5 > 10;
  let arr = long ? (s > today ? s : today) : add(s, -1), dep = long ? add(arr, 2) : add(f, 1);
  if (arr < today) arr = today; if (dep <= arr) dep = add(arr, 1);
  const A = $('#dArr'), P = $('#dDep'); A.value = iso(arr); A.dispatchEvent(new Event('change')); P.value = iso(dep);
  $('#bar').requestSubmit();
});
(async () => {
  window.__events = EV_FALLBACK; renderEvents();
  try {
    const r = await fetch(CONFIG.eventsUrl + '?v=' + Math.floor(Date.now()/36e5), {cache:'no-cache'});
    if (r.ok) { const j = await r.json(); if (j && Array.isArray(j.events) && j.events.length) { window.__events = j; renderEvents(); } }
  } catch (_) {}
})();

/* ---------- itinerari ---------- */
(() => {
  const tabs = $$('#itTabs button'), days = $$('#itDays .day');
  const show = n => { tabs.forEach(b => { const on = +b.dataset.n === n; b.classList.toggle('on', on); b.setAttribute('aria-selected', on); });
    days.forEach(d => { d.hidden = +d.dataset.d > n; d.classList.add('in'); }); };
  tabs.forEach(b => b.onclick = () => show(+b.dataset.n)); show(1);
})();

/* ---------- barra di avanzamento + statistiche opzionali + dati strutturati FAQ ---------- */
(() => {
  const p = $('#prog'); const f = () => { const h = document.documentElement.scrollHeight - innerHeight; p.style.transform = `scaleX(${h>0?Math.min(1,scrollY/h):0})`; };
  addEventListener('scroll', f, {passive:true}); f();
  if (CONFIG.analytics) { const [u, id] = CONFIG.analytics.split('|'); if (/^https:\/\//.test(u)) { const s = document.createElement('script'); s.defer = true; s.src = u; if (id) s.dataset.websiteId = id; document.head.appendChild(s); } }
  const ld = document.createElement('script'); ld.type = 'application/ld+json';
  ld.textContent = JSON.stringify({'@context':'https://schema.org','@type':'FAQPage',mainEntity:FAQ.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))});
  document.head.appendChild(ld);
})();



/* ---------- Torino in foto + stagioni ---------- */
const GALLERY = [['mole','Mole Antonelliana'],['piazza-san-carlo','Piazza San Carlo'],['museo-egizio','Museo Egizio'],['palazzo-madama','Palazzo Madama'],['superga','Basilica di Superga'],['porta-palatina','Porta Palatina'],['piazza-castello','Piazza Castello'],['murazzi','Murazzi sul Po'],['venaria','Reggia di Venaria'],['galleria-subalpina','Galleria Subalpina'],['portici','I portici'],['sacra','Sacra di San Michele'],['quadrilatero','Quadrilatero Romano'],['monviso','Il Monviso'],['palazzo-carignano','Palazzo Carignano'],['gran-madre','Chiesa della Gran Madre'],['porta-palazzo','Mercato di Porta Palazzo'],['valentino','Castello del Valentino'],['borgo-medievale','Borgo Medievale'],['museo-automobile','Museo dell\'Automobile']];
(() => {
  const box = $('#mas'); if (!box) return;
  box.innerHTML = GALLERY.map(([k,t],i)=>`<figure class="rv in" data-i="${i}"><img src="img/torino/m/${k}.jpg" alt="${esc(t)}" loading="lazy"><figcaption>${esc(t)}</figcaption></figure>`).join('');
  $$('figure', box).forEach(f => f.onclick = () => { const i = +f.dataset.i;
    openLb(tt('Torino in foto'), GALLERY.map(g=>`img/torino/${g[0]}.jpg`), GALLERY.map(g=>`img/torino/m/${g[0]}.jpg`), i); });
  const m = new Date().getMonth() + 1;
  $$('.sx').forEach(s => { if (s.dataset.m.split(',').map(Number).includes(m)) s.classList.add('now'); });
})();


/* ---------- prenotare di piu': recensioni in evidenza, WhatsApp, richieste ---------- */
function renderQuote(i) {
  const box = $('#qstrip'); if (!box) return;
  const pool = REV.filter(r => !r.h && r.q.length < 135);
  window.__qi = (i == null ? (window.__qi || 0) : i) % pool.length; const r = pool[window.__qi];
  box.innerHTML = `<q>${esc(r.q)}</q><span>${esc(r.n)}, ${esc(tt(r.c))}${r.s?` · ${esc(r.s)}/10`:''} · Booking.com</span>`;
}
(() => {
  renderQuote(0); const box = $('#qstrip');
  setInterval(() => { box.classList.add('fade'); setTimeout(() => { renderQuote((window.__qi||0) + 1); box.classList.remove('fade'); }, 450); }, 7000);
  const num = (CONFIG.whatsapp || '').replace(/\D/g, '');
  if (num) {
    const link = () => `https://wa.me/${num}?text=${encodeURIComponent(tt('Buongiorno, vorrei informazioni sugli appartamenti Torino Suite.'))}`;
    ['#wa', '#waLink'].forEach(s => { const e = $(s); if (e) { e.hidden = false; e.onclick = () => { e.href = link(); }; e.href = link(); } });
    document.body.classList.add('has-wa');
  }
  $$('[data-ask]').forEach(b => b.addEventListener('click', () => {
    const t = $('#cf textarea[name=messaggio]'); if (t && !t.value.trim()) t.value = tt('Buongiorno, vorrei una proposta per un soggiorno lungo o per un gruppo. Periodo: … Numero di ospiti: … Alloggi di interesse: …');
  }));
  const hs = $('#heroSlides'), reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (hs && !reduce) addEventListener('scroll', () => { if (scrollY < innerHeight) hs.style.transform = `translateY(${scrollY*.22}px)`; }, {passive:true});
})();

/* ---------- lingua ---------- */
i18nInit();
