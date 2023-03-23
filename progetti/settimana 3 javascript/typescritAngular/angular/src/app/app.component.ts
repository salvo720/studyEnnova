import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import INewApi from './components/interface/inew-api';
import IArticle from './components/interface/iarticle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  items = ['pippo', 'pluto']
  count = 0;
  articoli: IArticle[] = [];

  InewsApiArticles: any = [
    {
      "source": {
        "id": null,
        "name": "Cointelegraph"
      },
      "author": "Gustavo Godoy",
      "title": "¿Puede Bitcoin solucionar el problema bancario?",
      "description": "\"Bitcoin fix this\". ¿La adopción masiva de Bitcoin realmente puede solucionar todos los problemas relacionados al crédito y a los bancos? Reflexionemos sobre el tema. \n \nMark Twain escribió en una oportunidad: “Un banquero es un tipo que te presta su paraguas…",
      "url": "https://es.cointelegraph.com/news/can-bitcoin-solve-the-banking-problem",
      "urlToImage": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2021-09/e85d2269-03fc-494f-a288-5c1736423e80.jpg",
      "publishedAt": "2023-03-22T15:30:00Z",
      "content": "Mark Twain escribió en una oportunidad: Un banquero es un tipo que te presta su paraguas cuando brilla el sol, pero lo quiere de vuelta en el momento en que comienza a llover.\r\nLos seres humanos tien… [+6573 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Leganerd.com"
      },
      "author": "Umberto Stentella",
      "title": "Microsoft sostiene che a Sony basterebbero 10 anni per creare un’alternativa a Call of Duty",
      "description": "Nel tentativo di persuadere gli antitrust di mezzo mondo a dare luce verde all’acquisizione di Activision Blizzard, costata oltre 70 miliardi di dollari, Microsoft ha siglato un patto decennale con Nintendo e alcune altre aziende, dove si obbliga a garantire …",
      "url": "https://leganerd.com/2023/03/22/microsoft-sostiene-che-a-sony-basterebbero-10-anni-per-creare-unalternativa-a-call-of-duty/",
      "urlToImage": "https://leganerd.com/wp-content/uploads/2022/01/microsoft-activision-blizzard-xbox.jpg",
      "publishedAt": "2023-03-22T15:27:54Z",
      "content": "Nel tentativo di persuadere gli antitrust di mezzo mondo a dare luce verde all’acquisizione di Activision Blizzard, costata oltre 70 miliardi di dollari, Microsoft ha siglato un patto decennale con N… [+1426 chars]"
    },
    {
      "source": {
        "id": "ansa",
        "name": "ANSA.it"
      },
      "author": "",
      "title": "Tv: Drag Race Italia sbarca su Paramount+",
      "description": "Drag Race Italia trasloca. La terza edizione del reality dedicato al mondo delle drag queen (fino ad ora trasmesso da Discovery ndr) sarà disponibile prossimante su Paramount+. (ANSA)",
      "url": "https://www.ansa.it/sito/notizie/cultura/tv/2023/03/22/tv-drag-race-italia-sbarca-su-paramount_ae65b84e-8b5f-43c5-be24-547913506cdb.html",
      "urlToImage": "https://www.ansa.it/webimages/img_700/2023/3/22/e131ec86972d63c4bfb2b05b324e8c96.jpg",
      "publishedAt": "2023-03-22T15:27:36Z",
      "content": "(ANSA) - ROMA, 22 MAR - Drag Race Italia trasloca. La terza\r\nedizione del reality dedicato al mondo delle drag queen (fino ad\r\nora trasmesso da Discovery ndr) sarà disponibile prossimante su\r\nParamou… [+1716 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "variety.com",
      "title": "Paramount+ Launches ‘Drag Race Italia,’ Talks Growth at Series Mania",
      "description": "LILLE, France — Paramount+ will be bowing “Drag Race Italia” Season 3 on the streaming service in Italy, followed by the U.S. and Latin America later this year. The Italian Season 3 follows on the recent announcement of three new “Drag Race” editions in Brazi…",
      "url": "https://biztoc.com/x/0411b4379140c66b",
      "urlToImage": "https://c.biztoc.com/p/0411b4379140c66b/og.webp",
      "publishedAt": "2023-03-22T15:26:08Z",
      "content": "LILLE, France Paramount+ will be bowing Drag Race Italia Season 3 on the streaming service in Italy, followed by the U.S. and Latin America later this year.The Italian Season 3 follows on the recent … [+303 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Leganerd.com"
      },
      "author": "Marco Lucio Papaleo",
      "title": "Renfield: trailer finale del film con Nicholas Hoult e Nicolas Cage",
      "description": "Manca circa un mese all’arrivo nelle sale (previsto per il 27 aprile per l’Italia, e il 14 per gli USA) di Renfield, singolare horror comedy che vedrà protagonisti Nicolas Cage nei panni del Signore delle Tenebre, Dracula in persona, e Nicholas Hoult in quell…",
      "url": "https://leganerd.com/2023/03/22/renfield-trailer-finale-del-film-con-nicholas-hoult-e-nicolas-cage/",
      "urlToImage": "https://leganerd.com/wp-content/uploads/2023/01/renfield-cover.jpg",
      "publishedAt": "2023-03-22T15:25:48Z",
      "content": "Manca circa un mese all’arrivo nelle sale (previsto per il 27 aprile per l’Italia, e il 14 per gli USA) di Renfield, singolare horror comedy che vedrà protagonisti Nicolas Cage nei panni del Signore … [+1119 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Ilpost.it"
      },
      "author": null,
      "title": "Il video del deputato Angelo Bonelli alla Camera con i sassi dell’Adige in secca",
      "description": null,
      "url": "https://www.ilpost.it/flashes/bonelli-sassi-adige-camera-dei-deputati/",
      "urlToImage": "https://www.ilpost.it/wp-content/uploads/2023/03/22/1679498043-20789135_medium.jpeg",
      "publishedAt": "2023-03-22T15:24:52Z",
      "content": "Mercoledì la presidente del Consiglio, Giorgia Meloni, è intervenuta alla Camera per le comunicazioni in vista del Consiglio europeo del 23 e 24 marzo a Bruxelles. Aveva fatto lo stesso martedì in Se… [+1383 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Everyeye.it"
      },
      "author": "Giovanni Panzano",
      "title": "Mighty Doom è arrivato: come scaricare il gioco gratis su iPhone e Android",
      "description": "Tutti i dettagli su come scaricare Mighty Doom su dispositivi mobile e ottenere tante ricompense gratis a tempo limitato.Da qualche ora è disponibile anche in Italia il nuovo Mighty Doom, il gioco gratis per dispositivi mobile che permette di controllare una …",
      "url": "https://www.everyeye.it/notizie/mighty-doom-arrivato-come-scaricare-gioco-gratis-iphone-android-641215.html",
      "urlToImage": "https://images.everyeye.it/img-notizie/mighty-doom-arrivato-come-scaricare-gioco-gratis-iphone-android-v3-641215.jpg",
      "publishedAt": "2023-03-22T15:24:00Z",
      "content": "Da qualche ora è disponibile anche in Italia il nuovo Mighty Doom, il gioco gratis per dispositivi mobile che permette di controllare una versione chibi del brutale protagonista dello sparatutto idSo… [+1082 chars]"
    },
    {
      "source": {
        "id": "ansa",
        "name": "ANSA.it"
      },
      "author": "",
      "title": "Naba per terzo anno migliore accademia di belle arti italiana",
      "description": "Naba, Nuova Accademia di Belle Arti è stata riconfermata per il terzo anno consecutivo, \"la migliore accademia di belle arti italiana\" nel QS World University Rankings by Subject 2023 comparendo tra le top 100 al mondo per i settori Art & Design. (ANSA)",
      "url": "https://www.ansa.it/sito/notizie/cultura/moda/2023/03/22/naba-per-terzo-anno-migliore-accademia-di-belle-arti-italiana_b1dc8c0a-ec98-4a77-a515-417df950d2b2.html",
      "urlToImage": "https://www.ansa.it/webimages/img_700/2023/3/22/bb8472322ed08ba6ac4c5c118f229dd1.jpg",
      "publishedAt": "2023-03-22T15:23:41Z",
      "content": "(ANSA) - ROMA, 22 MAR - Naba, Nuova Accademia di Belle Arti è\r\nstata riconfermata per il terzo anno consecutivo, \"la migliore\r\naccademia di belle arti italiana\" nel QS World University\r\nRankings by S… [+1110 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Corriere.it"
      },
      "author": "Gino Pagliuca",
      "title": "Mutui più cari e inflazione, perché nel 2023 caleranno le vendite di case (ma non i prezzi)",
      "description": "L’aumento del costo del denaro e dell’inflazione presentano il conto: tra 100 e 120 mila case vendute in meno in un anno, con un calo a due cifre rispetto alla vendite record (784 mila unità) del 2022",
      "url": "https://www.corriere.it/economia/mutui/23_marzo_22/mutui-piu-cari-inflazione-perche-2023-caleranno-vendite-case-ma-non-prezzi-d93d0a7e-c8bc-11ed-85b6-6207f76c958d.shtml",
      "urlToImage": "https://images2.corriereobjects.it/methode_image/2023/03/22/Economia/Foto-Economia-Trattate/Clipboard-0014-k0aC-U3410355490516cmF-656x492@Corriere-Web-Sezioni.jpg",
      "publishedAt": "2023-03-22T15:23:23Z",
      "content": "L’aumento del costo del denaro e dell’inflazione presentano il conto: tra 100 e 120 mila case vendute in meno in un anno, con un calo a due cifre rispetto alla vendite record (784mila unità) del 2022… [+3099 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "Spesa di 231 miliardi per 17,7 milioni di pensioni Inps: un terzo sono anticipate, il 22,8% assistenziali - Il Sole 24 ORE",
      "description": "<ol><li>Spesa di 231 miliardi per 17,7 milioni di pensioni Inps: un terzo sono anticipate, il 22,8% assistenziali  Il Sole 24 ORE\r\n</li><li>Pensioni, Inps: oltre il 55% è di importo inferiore a 750 euro  TGCOM\r\n</li><li>Inps, nel 2023 17,7 milioni pensioni, 2…",
      "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiiAFodHRwczovL3d3dy5pbHNvbGUyNG9yZS5jb20vYXJ0L3NwZXNhLTIzMS1taWxpYXJkaS1sZS0xNzctbWlsaW9uaS1wZW5zaW9uaS1pbnBzLXRlcnpvLXNvbm8tYW50aWNpcGF0ZS0yMjhwZXJjZW50by1hc3Npc3RlbnppYWxpLUFFcVN4SzhD0gEtaHR0cHM6Ly9hbXAyNC5pbHNvbGUyNG9yZS5jb20vcGFnaW5hL0FFcVN4SzhD?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      "urlToImage": null,
      "publishedAt": "2023-03-22T15:20:36Z",
      "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
    }
  ];

  constructor(private http: HttpClient) { }
  increment() {
    let div = document.querySelector("#rispostaServer")!;
    this.count += 1;
    console.log(this.count)
    const url = `https://newsapi.org/v2/everything?q=Italia&sortBy=publishedAt&apiKey=cea52831eed64f90961345afeec19f5e&page=${this.count}&pageSize=10`

    /*
    this.http.get<INewApi>(url).subscribe(
      (value: INewApi) => {
        console.log(value)
        // this.articoli = value.articles; //esercizio finito con api che workano

        console.log(this.articoli)
      });
      */
    this.articoli = this.InewsApiArticles; //esercizio con api statiche

    console.log(this.InewsApiArticles)

  }
  decrement() {
    this.count -= 1;
  }
}
