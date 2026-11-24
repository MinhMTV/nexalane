export type Language = 'de' | 'en';
export type PageKey = 'home' | 'services' | 'solutions' | 'process' | 'about' | 'contact' | 'legal';

const de = {
  nav: { home: 'Start', services: 'Leistungen', solutions: 'Lösungen', process: 'Vorgehen', about: 'Über AVERNODE', contact: 'Kontakt' },
  cta: 'Projekt besprechen',
  footerNote: 'Software Engineering & Automation · Wien, Österreich',
  pages: {
    home: {
      eyebrow: 'SOFTWARE ENGINEERING · WIEN', title: 'Weniger Handarbeit. Software, die passt.',
      intro: 'AVERNODE entwickelt interne Webanwendungen, Automatisierungen und Schnittstellen – damit Teams weniger doppelt erfassen, Systeme zusammenspielen und Arbeit nachvollziehbar bleibt.',
      primary: 'Lösungen ansehen', secondary: 'Problem besprechen',
      proof: 'Individuelle Software · Automatisierung · Systemintegration',
      sectionLabel: 'WAS AVERNODE UMSETZT', sectionTitle: 'Von Handarbeit zu einem Ablauf, der zusammenpasst.',
      sectionIntro: 'Sie erhalten eine konkrete technische Umsetzung: passende Software, verbundene Systeme oder automatisierte Schritte – abgestimmt auf Ihren Prozess und mit sauberer Übergabe.',
      services: [
        ['01', 'Individuelle Software', 'Interne Webanwendungen mit Rollen, Suche, Freigaben und Berichten – passend zu Ihrem tatsächlichen Ablauf.', 'custom'],
        ['02', 'Prozessautomatisierung', 'E-Mails, Formulare und Dokumente auswerten, Daten validieren und Ausnahmen sichtbar zur Prüfung vorlegen.', 'automation'],
        ['03', 'Systemintegration', 'APIs und Datenflüsse zwischen ERP, CRM, Datenbank und Shop verbinden – inklusive Fehlerbehandlung.', 'integration'],
        ['04', 'Modernisierung & Betrieb', 'Bestehende Anwendungen schrittweise stabilisieren, aktualisieren und leichter wartbar machen.', 'maintenance'],
      ],
      visualLabel: 'SYSTEME VERBINDEN', visualTitle: 'Ein Auftrag. Ein Datenfluss. Weniger Übergaben.',
      processLabel: 'VOM PROBLEM ZUR LÖSUNG', processTitle: 'Erst den Engpass lösen. Dann sinnvoll erweitern.',
      steps: [['01','Verstehen','Abläufe, Engpässe und Rahmenbedingungen gemeinsam klären.'],['02','Entwerfen','Umfang, Schnittstellen und einen realistischen ersten Schritt festlegen.'],['03','Umsetzen','In kurzen Etappen entwickeln, zeigen und anhand echter Rückmeldungen schärfen.'],['04','Betreiben','Übergabe, Dokumentation und Weiterentwicklung von Anfang an mitdenken.']],
      costTitle: 'Rechnet sich Automatisierung in Ihrem Ablauf?', costCopy: 'Schätzen Sie selbst ab, welchen jährlichen Spielraum weniger manuelle Arbeit schaffen könnte. Der Rechner nutzt Ihre Eingaben – er ist eine Orientierung, kein Einsparungsversprechen.',
      finalTitle: 'Wo verliert Ihr Team heute Zeit?', finalCopy: 'Schildern Sie einen konkreten Arbeitsschritt, der doppelt erfasst wird, regelmäßig liegen bleibt oder mehrere Systeme betrifft. Wir besprechen, was sich davon sinnvoll verbessern lässt.'
    },
    services: {
      eyebrow: 'LEISTUNGEN', title: 'Software, Automatisierung und Schnittstellen für Ihren Ablauf.', intro: 'Interne Webanwendungen, API-Verbindungen, Dokumentenautomatisierung und schrittweise Modernisierung. Der Umfang richtet sich nach dem konkreten Bedarf.',
      sections: [
        ['Individualsoftware','Ein Werkzeug, das Ihre Arbeitsschritte abbildet.','Wir bauen interne Webanwendungen, Portale und Werkzeuge – mit den Rollen, Suchfunktionen, Freigaben und Auswertungen, die Ihr Prozess tatsächlich braucht.','custom'],
        ['Automatisierung','Weniger kopieren. Ausnahmen gezielt prüfen.','Wir übernehmen Daten aus E-Mails, Formularen oder Dokumenten, validieren sie anhand definierter Regeln und zeigen unklare Fälle zur manuellen Prüfung.','automation'],
        ['Systemintegration','Daten zwischen Ihren Systemen zuverlässig bewegen.','Wir verbinden APIs und Datenflüsse zwischen ERP, CRM, Datenbank oder Shop. Protokollierung und Fehlerbehandlung machen Übertragungen nachvollziehbar.','integration'],
        ['Modernisierung & Wartung','Bestehende Anwendungen schrittweise verbessern.','Wir prüfen Code, Laufzeit und Schnittstellen, beheben konkrete Risiken und modernisieren in überschaubaren Etappen – ein kompletter Neubau ist nicht automatisch nötig.','maintenance'],
      ],
      noteTitle:'Die passende Lösung beginnt mit einer ehrlichen Prüfung.', noteCopy:'Manchmal ist eine vorhandene Plattform die bessere Wahl. Wir betrachten Lizenzmodell, Prozesspassung, Integrationsbedarf und laufenden Aufwand, bevor eine Richtung empfohlen wird.'
    },
    solutions: {
      eyebrow:'ALLTAGSAUTOMATISIERUNG', title:'Weniger abtippen. Mehr Arbeit erledigen.', intro:'Ob Ein-Personen-Betrieb oder kleines Team: Wir setzen bei den wiederkehrenden Handgriffen an, die Zeit kosten. Diese Lösungskonzepte zeigen, wie aus E-Mails, Belegen und Listen nachvollziehbare Abläufe werden.',
    },
    process: {
      eyebrow:'VORGEHEN', title:'Klarheit vor Code. Fortschritt in kleinen Schritten.', intro:'Ein gutes Ergebnis entsteht durch frühe Abstimmung, sichtbare Zwischenergebnisse und Entscheidungen, die auf Ihrem Arbeitsalltag beruhen.',
      steps:[['01','Abläufe verstehen','Wir erfassen Beteiligte, Systeme, Ausnahmen und die Stellen, an denen unnötiger Aufwand entsteht.'],['02','Lösung eingrenzen','Gemeinsam definieren wir Ziel, Prioritäten, technische Grenzen und einen sinnvollen ersten Lieferumfang.'],['03','Schrittweise entwickeln','Sie sehen früh lauffähige Ergebnisse. Feedback fließt in die nächste Etappe ein, bevor sich Annahmen verfestigen.'],['04','Sauber übergeben','Dokumentation, Zugriff, Betrieb und nächste Ausbaustufen gehören zur Lösung – nicht erst zu einem späteren Zeitpunkt.']],
      principleTitle:'Keine Blackbox-Projekte.', principleCopy:'Sie wissen, woran gearbeitet wird, welche Entscheidungen anstehen und was als Nächstes geliefert wird. Umfang und Tempo bleiben an Ihren Prioritäten ausgerichtet.'
    },
    about: {
      eyebrow:'ÜBER AVERNODE', title:'Technologie mit Verständnis für den Betrieb.', intro:'AVERNODE ist eine unabhängige österreichische Geschäftsmarke für individuelle Softwareentwicklung, Automatisierung und technische Integration.',
      copyTitle:'Software ist dann gut, wenn sie im Alltag trägt.', copy:'Dafür braucht es mehr als funktionierenden Code: ein klares Verständnis der Abläufe, eine passende technische Grundlage und Lösungen, die sich warten und weiterentwickeln lassen. AVERNODE verbindet diese Perspektiven – direkt, transparent und ohne unnötige Komplexität.',
      principles:[['Pragmatisch','Die Lösung orientiert sich am tatsächlichen Problem – nicht an einem Technologie-Trend.'],['Nachvollziehbar','Entscheidungen, Schnittstellen und Übergaben werden verständlich dokumentiert.'],['Langfristig gedacht','Sicherheit, Wartung und mögliche nächste Schritte fließen früh in die Planung ein.']],
      location:'Standort Wien. Zusammenarbeit in Österreich, Deutschland, der Schweiz und international.'
    },
    contact: {
      eyebrow:'KONTAKT', title:'Erzählen Sie, was besser laufen soll.', intro:'Ein kurzer Überblick zu Ihrem Prozess, den beteiligten Systemen und Ihrem Ziel reicht für den Anfang. Gemeinsam klären wir den sinnvollsten nächsten Schritt.',
        ready:'',
        booking:'',
        privacy:''
    },
    legal: {
        eyebrow:'RECHTLICHES', title:'Impressum', intro:'',
        note:''
    }
  }
};

const en = {
  nav: { home: 'Home', services: 'Services', solutions: 'Solutions', process: 'Approach', about: 'About AVERNODE', contact: 'Contact' },
  cta: 'Discuss a project', footerNote: 'Software Engineering & Automation · Vienna, Austria',
  pages: {
    home: {
      eyebrow: 'SOFTWARE ENGINEERING · VIENNA', title: 'Less manual work. Software that fits.',
      intro: 'AVERNODE builds internal web apps, workflow automation and system integrations—so teams enter less data twice, systems work together and work stays traceable.',
      primary: 'See what we build', secondary: 'Discuss a problem', proof: 'Custom software · Automation · System integration',
      sectionLabel: 'WHAT AVERNODE DELIVERS', sectionTitle: 'From manual work to a workflow that fits together.',
      sectionIntro: 'You get a concrete technical delivery: purpose-built software, connected systems or automated steps—shaped around your process and handed over properly.',
      services: [['01','Custom software','Internal web apps with roles, search, approvals and reporting shaped around your actual workflow.','custom'],['02','Process automation','Read emails, forms and documents, validate data and surface exceptions for review.','automation'],['03','System integration','Connect APIs and data between ERP, CRM, databases and online services—with error handling.','integration'],['04','Modernisation & maintenance','Stabilise, update and make existing applications easier to maintain, step by step.','maintenance']],
      visualLabel:'CONNECT YOUR SYSTEMS', visualTitle:'One order. One data flow. Fewer handoffs.',
      processLabel:'FROM PROBLEM TO SOLUTION', processTitle:'Fix the bottleneck first. Extend with purpose.',
      steps:[['01','Understand','Map workflows, bottlenecks and constraints together.'],['02','Shape','Agree scope, interfaces and a realistic first step.'],['03','Deliver','Build in short cycles and refine with real feedback.'],['04','Operate','Plan for handover, documentation and future changes from day one.']],
      costTitle:'Could automation pay off in your workflow?', costCopy:'Estimate the annual capacity that less manual work could free up. The calculator uses your inputs as a guide, not as a savings promise.',
      finalTitle:'Where does your team lose time today?', finalCopy:'Describe one step that is entered twice, regularly gets stuck or touches several systems. We can discuss what is worth improving.'
    },
    services: { eyebrow:'SERVICES', title:'Custom software, automation and integrations for your workflow.', intro:'Internal web apps, API connections, document automation and stepwise modernisation. Scope follows the specific need.', sections:[['Custom software','A tool built around your actual work.','Internal web apps, portals and tools with the roles, search, approvals and reporting your workflow needs.','custom'],['Automation','Less copying. Exceptions routed for review.','Read data from email, forms or documents, validate it against agreed rules and surface unclear cases for human review.','automation'],['System integration','Move data between systems reliably.','Connect APIs across ERP, CRM, databases or online stores. Logging and error handling keep data transfers traceable.','integration'],['Modernisation & maintenance','Improve the software you already rely on.','Review code, runtime and interfaces, address concrete risks, and modernise in manageable steps. A full rewrite is not the default.','maintenance']], noteTitle:'The right solution starts with an honest assessment.', noteCopy:'Sometimes an existing platform is the better choice. We consider licensing, process fit, integration needs and ongoing effort before recommending a direction.'},
    solutions: { eyebrow:'EVERYDAY AUTOMATION', title:'Less retyping. More work getting done.', intro:'Whether you work solo or in a small team, we start with the repetitive steps that consume time. These solution concepts show how emails, documents and spreadsheets can become traceable workflows.' },
    process: { eyebrow:'APPROACH', title:'Clarity before code. Progress in small steps.', intro:'Good outcomes come from early alignment, visible progress and decisions grounded in your day-to-day work.', steps:[['01','Understand the workflow','We map the people, systems, exceptions and points where unnecessary effort appears.'],['02','Define the solution','Together, we set goals, priorities, technical boundaries and a useful first delivery scope.'],['03','Build incrementally','You see working results early. Feedback shapes the next cycle before assumptions harden.'],['04','Hand over with care','Documentation, access, operations and next steps are part of the solution from the start.']], principleTitle:'No black-box projects.', principleCopy:'You know what is being worked on, which decisions are coming up and what will be delivered next. Scope and pace stay aligned with your priorities.'},
    about: { eyebrow:'ABOUT AVERNODE', title:'Technology grounded in how businesses operate.', intro:'AVERNODE is an independent Austrian business brand for custom software development, automation and technical integration.', copyTitle:'Software is good when it holds up in daily work.', copy:'That takes more than code that runs: a clear understanding of workflows, a suitable technical foundation and solutions that can be maintained and extended. AVERNODE brings these perspectives together—directly, transparently and without unnecessary complexity.', principles:[['Pragmatic','The solution follows the actual problem, not a technology trend.'],['Understandable','Decisions, interfaces and handovers are documented clearly.'],['Built for change','Security, maintenance and future steps are part of early planning.']], location:'Based in Vienna. Working across Austria, Germany, Switzerland and internationally.'},
      contact: { eyebrow:'CONTACT', title:'Tell us what should work better.', intro:'A brief outline of your process, the systems involved and your goal is enough to get started. Together, we can identify a useful next step.', ready:'', booking:'', privacy:''},
      legal: { eyebrow:'LEGAL', title:'Legal notice', intro:'', note:'' }
  }
};

export const content = { de, en };
export const slugs: Record<Language, Record<PageKey, string>> = {
  de: { home:'', services:'leistungen', solutions:'loesungen', process:'vorgehen', about:'ueber-uns', contact:'kontakt', legal:'impressum' },
  en: { home:'', services:'services', solutions:'solutions', process:'approach', about:'about', contact:'contact', legal:'legal' },
};
