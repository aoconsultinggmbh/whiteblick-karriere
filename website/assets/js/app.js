/* app.js – Karriereseite: Navigation, Formularversand, Jahreszahl. Kein Framework, keine externen Abhängigkeiten. */
(function () {
  'use strict';

  document.querySelectorAll('[data-jahr]').forEach(function (el) { el.textContent = String(new Date().getFullYear()); });

  // Mobile Navigation
  var schalter = document.querySelector('.navi-schalter');
  var navi = document.querySelector('.hauptnavi');
  if (schalter && navi) {
    schalter.addEventListener('click', function () {
      var offen = navi.classList.toggle('offen');
      schalter.setAttribute('aria-expanded', offen ? 'true' : 'false');
    });
  }

  // FAQ: nur ein Eintrag offen
  document.querySelectorAll('.faq details').forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) document.querySelectorAll('.faq details[open]').forEach(function (o) { if (o !== d) o.open = false; });
    });
  });

  // Team-Videos: Poster mit Abspielknopf, Video startet erst auf Klick (kein Autoload, kein Fremd-Player)
  document.querySelectorAll('.stimme').forEach(function (fig) {
    var knopf = fig.querySelector('.abspielen'); var video = fig.querySelector('video');
    if (!knopf || !video) return;
    knopf.addEventListener('click', function () {
      fig.classList.add('laeuft'); video.setAttribute('controls', '');
      var p = video.play();
      if (p && p.catch) p.catch(function () { fig.classList.remove('laeuft'); knopf.setAttribute('aria-label', 'Video derzeit nicht verfügbar'); knopf.disabled = true; knopf.style.opacity = '.4'; });
    });
    video.addEventListener('error', function () { fig.classList.remove('laeuft'); knopf.disabled = true; knopf.style.opacity = '.4'; knopf.title = 'Video folgt'; });
  });

  // Bewerbungsformular
  var form = document.querySelector('.bewerbungsformular');
  if (!form) return;
  var meldung = form.querySelector('.formular-meldung');
  var knopf = form.querySelector('button[type="submit"]');
  var zeit = form.querySelector('input[name="zeit"]');
  if (zeit) zeit.value = String(Date.now());

  function zeige(text, fehler) {
    meldung.textContent = text;
    meldung.classList.toggle('fehler', !!fehler);
    meldung.classList.toggle('erfolg', !fehler);
  }

  function mailRueckfall(grund) {
    // Kein PHP (Vorschau auf GitHub Pages) oder Versand gescheitert: Mailprogramm öffnen – es geht keine Bewerbung verloren.
    var link = form.querySelector('a[href^="mailto:"]');
    if (!link) return zeige(grund, true);
    var daten = new FormData(form);
    var body = ['Name: ' + daten.get('name'), 'E-Mail: ' + daten.get('email'), 'Telefon: ' + daten.get('telefon'), '', daten.get('nachricht') || ''].join('\n');
    var href = link.getAttribute('href').split('&body=')[0] + '&body=' + encodeURIComponent(body);
    zeige(grund + ' Dein Mailprogramm öffnet sich mit Deinen Angaben – bitte dort noch den Lebenslauf anhängen.', true);
    window.location.href = href;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // zweite Prüfung der Pflichtfelder (erste: required im Browser, dritte: PHP)
    var pflicht = ['name', 'email', 'telefon'];
    for (var i = 0; i < pflicht.length; i++) {
      var f = form.elements[pflicht[i]];
      if (!f || !f.value.trim()) { f && f.focus(); return zeige('Bitte alle Pflichtfelder (*) ausfüllen.', true); }
    }
    if (!form.elements['datenschutz'].checked) return zeige('Bitte der Datenverarbeitung zustimmen.', true);
    var email = form.elements['email'].value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { form.elements['email'].focus(); return zeige('Bitte eine gültige E-Mail-Adresse angeben.', true); }
    var dateien = form.elements['unterlagen[]'] ? form.elements['unterlagen[]'].files : [];
    for (var j = 0; j < dateien.length; j++) {
      if (!/\.pdf$/i.test(dateien[j].name)) return zeige('Bitte nur PDF-Dateien anhängen.', true);
      if (dateien[j].size > 10 * 1024 * 1024) return zeige('Eine Datei ist größer als 10 MB.', true);
    }

    knopf.disabled = true;
    zeige('Wird gesendet …', false);
    fetch(form.getAttribute('action'), {
      method: 'POST', body: new FormData(form),
      headers: { 'Accept': 'application/json', 'X-Requested-With': 'fetch' }
    }).then(function (r) {
      var typ = r.headers.get('content-type') || '';
      if (typ.indexOf('application/json') === -1) throw new Error('kein-php');
      return r.json();
    }).then(function (d) {
      if (d.ok) { zeige(d.meldung, false); form.reset(); form.querySelectorAll('.feld, button, .hinweis-klein').forEach(function (el) { el.hidden = true; }); meldung.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      else { zeige(d.meldung, true); knopf.disabled = false; }
    }).catch(function (err) {
      knopf.disabled = false;
      if (err.message === 'kein-php') mailRueckfall('Der Online-Versand ist in der Vorschau noch nicht aktiv.');
      else mailRueckfall('Der Online-Versand hat gerade nicht geklappt.');
    });
  });
})();
