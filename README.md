## ArchiVista
ArchiVista pubblica le descrizioni archivistiche prodotte con Archimista.

## Requisiti
* Ruby 2.1.5
* Rails 4.2.1
* Sphinx 2.2.10 (motore di ricerca testuale)
* Database Archimista 2.1.0 in MySQL >= 5.1
* Webserver configurato per applicazioni Rails

## Installazione
Creare un file di configurazione per il database: config/database.yml.
Installare le dipendenze Rails:
* bundle install

Attivare il motore di ricerca testuale:
* rake ts:configure
* rake ts:rebuild

## Crediti
ArchiVista 3 è sviluppato da INGLOBA360 s.r.l., ed è un'evoluzione di ArchimistaWeb 1.0.
Modifiche ed aggiornamenti da parte dell'Ufficio Archivio della PRovincia di Lucca

## Autori
Codex Società Cooperativa, Pavia
* [http://www.codexcoop.it](http://www.codexcoop.it)

TAI S.a.s.

* [http://www.taisas.com](http://www.taisas.com)

Lo sviluppo attuale di ArchiVista è curato da INGLOBA360 s.r.l.
* [http://www.ingloba360.it](http://www.ingloba360.it)

Modifiche
* [Provincia di Lucca](http://bibliolucca.it/SebinaOpacLUA/article/rete-archivistica-lucchese-sezione-archivi/archivi)

## Licenza
ArchiVista è rilasciato sotto licenza GNU General Public License v2.0 o successive.

## Immagine virtualizzata
E' stata resa disponibile anche una immagine virtualizzata utilizzabile in ambiente Docker o Kubernetes prelevabile all'indirizzo 
cisco74/provincia_lucca:archivista-3.1.1-8