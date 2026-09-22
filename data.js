/* PlantenTrainer — plantendata (pilot)
   Wetenschappelijke namen geverifieerd tegen de GBIF-backbone (api.gbif.org/v1/species/match).
   Vaste woordenschat, zodat de meerkeuzevragen kloppende afleiders kunnen maken:
     standplaats : Volle zon | Zon tot halfschaduw | Halfschaduw | Halfschaduw tot schaduw |
                   Zon tot schaduw | Schaduw
     water       : Droog | Droog tot normaal | Normaal | Normaal tot vochtig | Vochtig
     blad        : Bladverliezend | Bladhoudend | Halfbladhoudend
     groeivorm   : Boom | Heester | Vaste plant | Siergras | Klimplant | Conifeer |
                   Bodembedekker | Bolgewas
*/

const PLANTEN = [
/* ---------- BOMEN ---------- */
{
  id: "acer-palmatum", familie: "Sapindaceae", geslacht: "Acer", soort: "palmatum",
  nl: "Japanse esdoorn", groep: "Boom",
  standplaats: "Halfschaduw", water: "Normaal tot vochtig",
  hoogte: "4–6 m", breedte: "3–5 m", blad: "Bladverliezend",
  bloeitijd: "April–mei", bloeikleur: "Onopvallend roodbruin",
  groeivorm: "Boom", groei: "Traag",
  gebruik: ["Solitair", "Border", "Pot", "Japanse tuin"],
  kenmerk5: "Trage, breed uitgroeiende kleine boom voor een beschutte halfschaduwplek; vraagt een vochthoudende, goed doorlatende, licht zure bodem en is vooral gewild om zijn vuurrode herfstkleur.",
  weetje: "Wil beschut staan: felle ochtendzon na nachtvorst en droge wind verbranden het jonge blad. De herfstkleur komt het sterkst op licht zure grond.",
  cultivars: ["'Atropurpureum'", "'Bloodgood'", "'Dissectum'", "'Orange Dream'"],
  ecologie: "Beperkte waarde; levert wat vroege nectar. Uitheems (Japan, Korea, China).",
  giftig: false
},
{
  id: "betula-pendula", familie: "Betulaceae", geslacht: "Betula", soort: "pendula",
  nl: "Ruwe berk", groep: "Boom",
  standplaats: "Volle zon", water: "Droog tot normaal",
  hoogte: "15–25 m", breedte: "6–10 m", blad: "Bladverliezend",
  bloeitijd: "April", bloeikleur: "Geelgroene katjes",
  groeivorm: "Boom", groei: "Snel",
  gebruik: ["Solitair", "Bosschage", "Laanboom"],
  kenmerk5: "Snelgroeiende pionierboom met witte schors en overhangende twijgen; neemt genoegen met arme, droge zandgrond en wil volle zon.",
  weetje: "De witte schors dankt hij aan betuline, een waslaag die de stam tegen opwarming beschermt. Als pionier is hij vaak de eerste boom op een braakliggend terrein.",
  cultivars: ["'Youngii' (treurvorm)", "'Dalecarlica'", "'Fastigiata'"],
  ecologie: "Zeer hoge waarde: waardplant voor honderden insectensoorten, zaden zijn winterkost voor sijs en barmsijs. Inheems.",
  giftig: false
},
{
  id: "carpinus-betulus", familie: "Betulaceae", geslacht: "Carpinus", soort: "betulus",
  nl: "Haagbeuk", groep: "Boom",
  standplaats: "Zon tot schaduw", water: "Normaal",
  hoogte: "15–20 m (haag 1–4 m)", breedte: "8–12 m", blad: "Bladverliezend",
  bloeitijd: "April", bloeikleur: "Groene katjes",
  groeivorm: "Boom", groei: "Normaal",
  gebruik: ["Haag", "Laanboom", "Solitair"],
  kenmerk5: "Zeer knipvaste haag- en laanboom die zowel volle zon als schaduw verdraagt en goed omgaat met zware leemgrond.",
  weetje: "Ondanks de naam geen familie van de beuk (Fagus, Fagaceae) maar van de berk. Als haag geknipt houdt hij zijn bruine blad de hele winter vast — dat heet marcescentie.",
  cultivars: ["'Fastigiata' (zuilvorm)", "'Frans Fontaine'", "'Lucas'"],
  ecologie: "Dichte haag geeft uitstekende nestgelegenheid en dekking; nootjes voor vinken. Inheems.",
  giftig: false
},
{
  id: "amelanchier-lamarckii", familie: "Rosaceae", geslacht: "Amelanchier", soort: "lamarckii",
  nl: "Krentenboompje", groep: "Boom",
  standplaats: "Zon tot halfschaduw", water: "Droog tot normaal",
  hoogte: "4–8 m", breedte: "3–5 m", blad: "Bladverliezend",
  bloeitijd: "April", bloeikleur: "Wit",
  groeivorm: "Boom", groei: "Normaal",
  gebruik: ["Solitair", "Kleine tuin", "Vogelbosje", "Meerstammig"],
  kenmerk5: "Meerstammige kleine boom voor zon tot halfschaduw op doorlatende, licht zure grond; heeft in alle vier de seizoenen iets te bieden.",
  weetje: "Een vierseizoenenplant: witte bloei met bronskleurig jong blad in april, eetbare bessen in juni die naar krenten smaken, en oranjerode herfstkleur. Botanisch een hybride (Amelanchier × lamarckii).",
  cultivars: ["'Robin Hill'", "'Ballerina'", "'Rainbow Pillar'"],
  ecologie: "Zeer hoge waarde: vroege nectar voor bijen en volop bessen voor merel, lijster en spreeuw. Ingeburgerde exoot.",
  giftig: false
},
{
  id: "magnolia-stellata", familie: "Magnoliaceae", geslacht: "Magnolia", soort: "stellata",
  nl: "Stermagnolia", groep: "Boom",
  standplaats: "Zon tot halfschaduw", water: "Normaal tot vochtig",
  hoogte: "2,5–3 m", breedte: "2,5–3 m", blad: "Bladverliezend",
  bloeitijd: "Maart–april", bloeikleur: "Wit",
  groeivorm: "Heester", groei: "Traag",
  gebruik: ["Solitair", "Kleine tuin", "Beschutte plek"],
  kenmerk5: "Trage, breed vertakte struik die op een humusrijke, licht zure en vochthoudende bodem hoort; bloeit stervormig wit nog vóór het blad verschijnt.",
  weetje: "Magnolia's zijn evolutionair ouder dan de bijen en werden oorspronkelijk door kevers bestoven — vandaar de stevige, vlezige bloembladen. De bloemknoppen zijn gevoelig voor late nachtvorst.",
  cultivars: ["'Royal Star'", "'Waterlily'", "'Rosea'"],
  ecologie: "Vroege stuifmeelbron in maart, als er nog weinig bloeit. Uitheems (Japan).",
  giftig: false
},

/* ---------- HEESTERS ---------- */
{
  id: "hydrangea-macrophylla", familie: "Hydrangeaceae", geslacht: "Hydrangea", soort: "macrophylla",
  nl: "Boerenhortensia", groep: "Heester",
  standplaats: "Halfschaduw", water: "Vochtig",
  hoogte: "1–2 m", breedte: "1–1,5 m", blad: "Bladverliezend",
  bloeitijd: "Juli–september", bloeikleur: "Roze of blauw",
  groeivorm: "Heester", groei: "Normaal",
  gebruik: ["Border", "Pot", "Beschutte plek"],
  kenmerk5: "Bolvormige heester voor halfschaduw zonder hete middagzon, op een humusrijke bodem die altijd vochtig blijft — hij verbruikt veel water.",
  weetje: "De bloemkleur hangt af van de bodem: op zure grond met opneembaar aluminium wordt hij blauw, op kalkrijke grond roze. Let op bij het snoeien — hij bloeit op het hout van vorig jaar, dus in het voorjaar hard terugknippen kost je de hele bloei. Uitzondering: remonterende cultivars zoals 'Endless Summer' bloeien óók op nieuw hout en vergeven een snoeifout.",
  cultivars: ["'Endless Summer'", "'Nikko Blue'", "'Bouquet Rose'"],
  ecologie: "De bolvormige types zijn steriel en dus waardeloos voor insecten; de platte 'lacecap'-vormen leveren wél nectar en stuifmeel.",
  giftig: true
},
{
  id: "buxus-sempervirens", familie: "Buxaceae", geslacht: "Buxus", soort: "sempervirens",
  nl: "Palmboompje / buxus", groep: "Heester",
  standplaats: "Zon tot schaduw", water: "Normaal",
  hoogte: "1–5 m", breedte: "1–2 m", blad: "Bladhoudend",
  bloeitijd: "Maart–april", bloeikleur: "Onopvallend geelgroen",
  groeivorm: "Heester", groei: "Traag",
  gebruik: ["Vormsnoei", "Lage haag", "Randbeplanting", "Pot"],
  kenmerk5: "Zeer trage, dichtvertakte bladhoudende heester die zowel zon als schaduw aankan en door zijn fijne vertakking uitermate geschikt is voor vormsnoei.",
  weetje: "De buxusmot en de schimmelziekte Cylindrocladium maken hem vandaag riskant om nog aan te planten. Volwaardige vervangers zijn Ilex crenata, Taxus baccata en Lonicera nitida.",
  cultivars: ["'Suffruticosa' (lage randjes)", "'Rotundifolia'", "'Blauer Heinz'"],
  ecologie: "Bloeit onopvallend maar sterk geurend in maart en trekt dan veel bijen. Blad is giftig.",
  giftig: true
},
{
  id: "cornus-alba", familie: "Cornaceae", geslacht: "Cornus", soort: "alba",
  nl: "Witte kornoelje", groep: "Heester",
  standplaats: "Zon tot halfschaduw", water: "Normaal tot vochtig",
  hoogte: "2–3 m", breedte: "2–3 m", blad: "Bladverliezend",
  bloeitijd: "Mei–juni", bloeikleur: "Wit (vlakke schermen)",
  groeivorm: "Heester", groei: "Snel",
  gebruik: ["Massief", "Oeverbeplanting", "Winterinteresse", "Haag"],
  kenmerk5: "Breed uitstoelende, snelgroeiende heester die natte grond goed verdraagt en in de winter opvalt door felrode twijgen.",
  weetje: "Hoe jonger de twijg, hoe feller de rode kleur. Zet hem daarom elke twee à drie jaar in maart hard af tot net boven de grond — dan krijg je elke winter maximaal kleur.",
  cultivars: ["'Sibirica' (fel rood)", "'Elegantissima' (bont)", "'Kesselringii' (zwartrood)"],
  ecologie: "Nectar in het voorjaar en witte bessen voor vogels; verdraagt natte oevers en is er goede oeverversteviging.",
  giftig: false
},
{
  id: "viburnum-tinus", familie: "Viburnaceae", geslacht: "Viburnum", soort: "tinus",
  nl: "Sneeuwbal", groep: "Heester",
  standplaats: "Zon tot halfschaduw", water: "Normaal",
  hoogte: "2–3 m", breedte: "1,5–2,5 m", blad: "Bladhoudend",
  bloeitijd: "November–april", bloeikleur: "Wit uit roze knop",
  groeivorm: "Heester", groei: "Normaal",
  gebruik: ["Haag", "Scherm", "Pot", "Winterbloei"],
  kenmerk5: "Dichte bladhoudende heester voor zon of halfschaduw op doorlatende grond, bijzonder omdat hij midden in de winter bloeit.",
  weetje: "Een van de weinige struiken die van november tot april doorbloeit. Wel oppassen met de winterhardheid: bij strenge vorst onder −12 °C vriest hij terug, dus geef hem een beschutte plek.",
  cultivars: ["'Eve Price'", "'Gwenllian'", "'Lucidum'"],
  ecologie: "Belangrijke winternectar voor hommels op zachte dagen, en blauwzwarte bessen voor vogels. Let op: Viburnum hoort sinds de herziening in de familie Viburnaceae, niet meer bij de Caprifoliaceae.",
  giftig: false
},
{
  id: "weigela-florida", familie: "Caprifoliaceae", geslacht: "Weigela", soort: "florida",
  nl: "Weigelia", groep: "Heester",
  standplaats: "Zon tot halfschaduw", water: "Normaal",
  hoogte: "1,5–2,5 m", breedte: "1,5–2,5 m", blad: "Bladverliezend",
  bloeitijd: "Mei–juni", bloeikleur: "Roze trompetjes",
  groeivorm: "Heester", groei: "Normaal",
  gebruik: ["Border", "Vogelbosje", "Solitair"],
  kenmerk5: "Makkelijke heester met overhangende takken voor zon tot halfschaduw op normale, niet te droge grond; bloeit uitbundig met roze trompetbloemen.",
  weetje: "Bloeit op tweejarig hout: snoei dus meteen ná de bloei de uitgebloeide takken weg, niet in het voorjaar. Doe je het omgekeerd, dan knip je de hele bloei eraf.",
  cultivars: ["'Bristol Ruby'", "'Nana Variegata'", "'Alexandra'"],
  ecologie: "De trompetvormige bloemen zijn in trek bij hommels en dagvlinders.",
  giftig: false
},
{
  id: "prunus-laurocerasus", familie: "Rosaceae", geslacht: "Prunus", soort: "laurocerasus",
  nl: "Laurierkers", groep: "Heester",
  standplaats: "Zon tot schaduw", water: "Normaal",
  hoogte: "2–6 m", breedte: "2–4 m", blad: "Bladhoudend",
  bloeitijd: "April–mei", bloeikleur: "Witte trossen",
  groeivorm: "Heester", groei: "Snel",
  gebruik: ["Haag", "Scherm", "Massief"],
  kenmerk5: "Snelgroeiende bladhoudende heester met groot leerachtig blad, die van volle zon tot diepe schaduw overal gedijt op normale, doorlatende grond.",
  weetje: "Dit is géén keukenlaurier — dat is Laurus nobilis. Blad en zaden bevatten blauwzuurverbindingen en zijn giftig. Snoei hem met een snoeischaar in plaats van een heggenschaar: doorgeknipte bladeren worden bruin en lelijk.",
  cultivars: ["'Otto Luyken'", "'Rotundifolia'", "'Novita'", "'Caucasica'"],
  ecologie: "Levert nectar en bessen, maar verwildert via vogels in bossen en duinen en verdringt daar de inheemse onderbegroeiing — in natuurgebied ongewenst.",
  giftig: true
},

/* ---------- VASTE PLANTEN ---------- */
{
  id: "lavandula-angustifolia", familie: "Lamiaceae", geslacht: "Lavandula", soort: "angustifolia",
  nl: "Echte lavendel", groep: "Vaste plant",
  standplaats: "Volle zon", water: "Droog",
  hoogte: "40–60 cm", breedte: "50–70 cm", blad: "Bladhoudend",
  bloeitijd: "Juni–augustus", bloeikleur: "Violetblauw",
  groeivorm: "Vaste plant", groei: "Normaal",
  gebruik: ["Randbeplanting", "Droge tuin", "Pot", "Geurtuin"],
  kenmerk5: "Grijsbladige halfheester die volle zon eist en een schrale, kalkrijke, zeer goed doorlatende bodem; verdraagt droogte uitstekend maar geen natte voeten.",
  weetje: "Natte winterse grond is doodsoorzaak nummer één. Snoei elk jaar meteen na de bloei terug tot in het jonge hout — knip je in het oude kale hout, dan loopt hij daar nooit meer uit.",
  cultivars: ["'Hidcote'", "'Munstead'", "'Dwarf Blue'"],
  ecologie: "Topplant voor bijen, hommels en dagvlinders; de bloei valt precies in de zomerse schraalperiode.",
  giftig: false
},
{
  id: "echinacea-purpurea", familie: "Asteraceae", geslacht: "Echinacea", soort: "purpurea",
  nl: "Rode zonnehoed", groep: "Vaste plant",
  standplaats: "Volle zon", water: "Normaal",
  hoogte: "80–120 cm", breedte: "45–60 cm", blad: "Bladverliezend",
  bloeitijd: "Juli–september", bloeikleur: "Purperroze",
  groeivorm: "Vaste plant", groei: "Normaal",
  gebruik: ["Prairieborder", "Snijbloem", "Border"],
  kenmerk5: "Stevige rechtopstaande vaste plant voor volle zon op voedzame, doorlatende grond die in de winter niet nat mag blijven staan.",
  weetje: "Laat de zaadhoofden na de bloei staan: ze zijn prachtig in de rijp en distelvinken halen er de hele winter zaad uit. Pas in maart terugknippen.",
  cultivars: ["'Magnus'", "'White Swan'", "'Green Jewel'"],
  ecologie: "Zeer veel nectar, een van de beste vlinderplanten voor de late zomer; zaad voor vogels in de winter.",
  giftig: false
},
{
  id: "hosta-sieboldiana", familie: "Asparagaceae", geslacht: "Hosta", soort: "sieboldiana",
  nl: "Hartlelie", groep: "Vaste plant",
  standplaats: "Halfschaduw tot schaduw", water: "Vochtig",
  hoogte: "60–80 cm", breedte: "90–120 cm", blad: "Bladverliezend",
  bloeitijd: "Juni–juli", bloeikleur: "Bleeklila",
  groeivorm: "Vaste plant", groei: "Normaal",
  gebruik: ["Schaduwborder", "Onder bomen", "Vijverrand", "Pot"],
  kenmerk5: "Bladplant voor schaduw en halfschaduw op humusrijke, blijvend vochtige grond; vormt een breed pakket blauwgroen, sterk geribd blad.",
  weetje: "Slakken zijn de grootste vijand, maar niet elke hosta is even kwetsbaar: de dikbladige blauwe types zoals deze zijn duidelijk slakresistenter dan de dunbladige groene.",
  cultivars: ["'Elegans'", "'Frances Williams'", "'Sum and Substance'"],
  ecologie: "De trechterbloemen worden druk bezocht door hommels.",
  giftig: false
},
{
  id: "salvia-nemorosa", familie: "Lamiaceae", geslacht: "Salvia", soort: "nemorosa",
  nl: "Bossalie", groep: "Vaste plant",
  standplaats: "Volle zon", water: "Droog tot normaal",
  hoogte: "40–60 cm", breedte: "40–50 cm", blad: "Bladverliezend",
  bloeitijd: "Juni–juli", bloeikleur: "Violetblauw",
  groeivorm: "Vaste plant", groei: "Normaal",
  gebruik: ["Border", "Prairietuin", "Rozenbegeleider"],
  kenmerk5: "Compacte vaste plant met rechtopstaande bloemaren, voor volle zon op droge tot normale, goed doorlatende grond.",
  weetje: "Knip hem na de eerste bloei terug tot ongeveer tien centimeter: eind augustus of september krijg je dan een volwaardige tweede bloei.",
  cultivars: ["'Caradonna'", "'Ostfriesland'", "'Mainacht'"],
  ecologie: "Zeer geliefd bij hommels en bijen; de lipbloem is precies op hommels afgestemd.",
  giftig: false
},
{
  id: "geranium-macrorrhizum", familie: "Geraniaceae", geslacht: "Geranium", soort: "macrorrhizum",
  nl: "Rotsooievaarsbek", groep: "Vaste plant",
  standplaats: "Halfschaduw tot schaduw", water: "Droog tot normaal",
  hoogte: "30–40 cm", breedte: "50–60 cm", blad: "Halfbladhoudend",
  bloeitijd: "Mei–juni", bloeikleur: "Roze",
  groeivorm: "Bodembedekker", groei: "Snel",
  gebruik: ["Bodembedekker", "Onder bomen", "Droge schaduw", "Talud"],
  kenmerk5: "Sterke bodembedekker met kruipende wortelstokken die het zeldzame kunststuk levert: gedijen in droge schaduw onder bomen.",
  weetje: "Droge schaduw onder een boom is de lastigste standplaats die er is — deze geranium is een van de weinige planten die er een gesloten tapijt vormt. Wrijf over het blad: het geurt sterk aromatisch.",
  cultivars: ["'Spessart'", "'Czakor'", "'Ingwersen's Variety'"],
  ecologie: "Levert nectar in mei–juni en sluit onkruid uit zonder chemie of doek.",
  giftig: false
},
{
  id: "rudbeckia-fulgida", familie: "Asteraceae", geslacht: "Rudbeckia", soort: "fulgida",
  nl: "Zonnehoed", groep: "Vaste plant",
  standplaats: "Volle zon", water: "Normaal tot vochtig",
  hoogte: "60–80 cm", breedte: "45–60 cm", blad: "Bladverliezend",
  bloeitijd: "Augustus–oktober", bloeikleur: "Goudgeel met zwart hart",
  groeivorm: "Vaste plant", groei: "Normaal",
  gebruik: ["Prairieborder", "Massief", "Snijbloem"],
  kenmerk5: "Late bloeier voor volle zon op voedzame, niet te droge grond; vormt met de jaren brede horsten goudgele bloemen.",
  weetje: "Zijn waarde zit in het moment: hij begint pas in augustus, net als de rest van de border op is, en gaat door tot de eerste vorst.",
  cultivars: ["var. sullivantii 'Goldsturm'", "'Little Goldstar'"],
  ecologie: "Late nectar voor vlinders en bijen, daarna zaad voor vogels als je hem laat staan.",
  giftig: false
},

/* ---------- SIERGRASSEN ---------- */
{
  id: "miscanthus-sinensis", familie: "Poaceae", geslacht: "Miscanthus", soort: "sinensis",
  nl: "Prachtriet", groep: "Siergras",
  standplaats: "Volle zon", water: "Normaal",
  hoogte: "1,5–2,5 m", breedte: "1–1,5 m", blad: "Bladverliezend",
  bloeitijd: "Augustus–oktober", bloeikleur: "Zilverroze pluimen",
  groeivorm: "Siergras", groei: "Snel",
  gebruik: ["Solitair", "Scherm", "Prairietuin", "Massief"],
  kenmerk5: "Forse, rechtopstaande siergraspol voor volle zon op normale grond; groeit als een nette horst en woekert niet.",
  weetje: "Een warmtegras (C4-type): hij loopt pas laat uit, vaak niet vóór half mei — niet panikeren in april. Knip hem pas in maart af, niet in de herfst: de winterstand is decoratief en er overwinteren insecten in.",
  cultivars: ["'Gracillimus'", "'Malepartus'", "'Kleine Fontäne'", "'Zebrinus'"],
  ecologie: "Belangrijke winterschuilplaats voor insecten. In tegenstelling tot bamboe vormt hij geen uitlopers.",
  giftig: false
},
{
  id: "calamagrostis-x-acutiflora", familie: "Poaceae", geslacht: "Calamagrostis", soort: "× acutiflora",
  nl: "Struisriet", groep: "Siergras",
  standplaats: "Zon tot halfschaduw", water: "Normaal",
  hoogte: "1,5–1,8 m", breedte: "50–60 cm", blad: "Bladverliezend",
  bloeitijd: "Juni–juli", bloeikleur: "Beige rechtopstaande pluimen",
  groeivorm: "Siergras", groei: "Snel",
  gebruik: ["Verticaal accent", "Rij", "Moderne tuin", "Massief"],
  kenmerk5: "Strak verticaal siergras met smalle pol, voor zon tot halfschaduw; verdraagt ook zwaardere grond en bloeit vroeger dan Miscanthus.",
  weetje: "Een steriele hybride: hij zet geen kiemkrachtig zaad en zaait zich dus nergens uit. Precies daarom is hij zo betrouwbaar in strakke aanleg.",
  cultivars: ["'Karl Foerster'", "'Overdam' (bont)"],
  ecologie: "Geeft dekking voor kleine dieren; als koelseizoensgras (C3) loopt hij juist vroeg uit.",
  giftig: false
},
{
  id: "festuca-glauca", familie: "Poaceae", geslacht: "Festuca", soort: "glauca",
  nl: "Blauw schapengras", groep: "Siergras",
  standplaats: "Volle zon", water: "Droog",
  hoogte: "20–30 cm", breedte: "25–30 cm", blad: "Bladhoudend",
  bloeitijd: "Juni", bloeikleur: "Beige aartjes",
  groeivorm: "Siergras", groei: "Traag",
  gebruik: ["Rotstuin", "Randbeplanting", "Grindtuin", "Pot"],
  kenmerk5: "Compact blauw graspolletje voor volle zon op schrale, zeer goed doorlatende grond; blijft het hele jaar door blauw.",
  weetje: "De blauwe kleur is een waslaagje dat het blad tegen uitdroging beschermt — in de schaduw verdwijnt die kleur. Na drie à vier jaar sterft het hart af: scheuren of vervangen.",
  cultivars: ["'Elijah Blue'", "'Intense Blue'"],
  ecologie: "Beperkte waarde voor insecten, maar uitstekend voor schrale, droge situaties zonder bewatering.",
  giftig: false
},

/* ---------- KLIMPLANTEN ---------- */
{
  id: "hedera-helix", familie: "Araliaceae", geslacht: "Hedera", soort: "helix",
  nl: "Klimop", groep: "Klimplant",
  standplaats: "Zon tot schaduw", water: "Normaal",
  hoogte: "10–20 m klimmend", breedte: "2–5 m", blad: "Bladhoudend",
  bloeitijd: "September–oktober", bloeikleur: "Groengeel",
  groeivorm: "Klimplant", groei: "Snel",
  gebruik: ["Muurbegroeiing", "Bodembedekker", "Groen scherm", "Onder bomen"],
  kenmerk5: "Zelfhechtende bladhoudende klimplant die met hechtwortels klimt en het van diepe schaduw tot volle zon overal doet op vrijwel elke bodem.",
  weetje: "Hij heeft twee levensfasen: jong klimmend blad is gelobd, volwassen bloeiend blad is ruitvormig zonder lobben. Pas in die tweede fase bloeit hij. Hij is géén parasiet en wurgt geen gezonde boom — hij gebruikt de stam alleen als steun.",
  cultivars: ["'Goldheart'", "'Hibernica'", "'Woerner'"],
  ecologie: "Sleutelsoort. Levert in oktober de allerlaatste nectar van het jaar (onder meer voor de klimopbij) en in februari bessen wanneer vogels niets anders vinden; daarbij dichte nestgelegenheid. Inheems.",
  giftig: true
},
{
  id: "clematis-montana", familie: "Ranunculaceae", geslacht: "Clematis", soort: "montana",
  nl: "Bergbosrank", groep: "Klimplant",
  standplaats: "Volle zon", water: "Normaal tot vochtig",
  hoogte: "6–10 m", breedte: "3–5 m", blad: "Bladverliezend",
  bloeitijd: "Mei", bloeikleur: "Wit tot roze",
  groeivorm: "Klimplant", groei: "Snel",
  gebruik: ["Pergola", "Grote muur", "Door een oude boom", "Scherm"],
  kenmerk5: "Sterk groeiende klimplant die zich vastgrijpt met windende bladstelen; wil de kop in de zon en de voet koel en vochtig.",
  weetje: "Snoeigroep 1: hij bloeit op het hout van vorig jaar. Snoeien mag dus alleen meteen na de bloei in juni — wie hem in het voorjaar snoeit, heeft dat jaar geen enkele bloem.",
  cultivars: ["'Rubens'", "'Grandiflora'", "'Mayleen'"],
  ecologie: "Massale nectarbron gedurende enkele weken in mei; de begroeide structuur geeft nestgelegenheid.",
  giftig: false
},

/* ---------- CONIFEREN ---------- */
{
  id: "taxus-baccata", familie: "Taxaceae", geslacht: "Taxus", soort: "baccata",
  nl: "Venijnboom / taxus", groep: "Conifeer",
  standplaats: "Zon tot schaduw", water: "Normaal",
  hoogte: "10–15 m (haag 1–3 m)", breedte: "5–8 m", blad: "Bladhoudend",
  bloeitijd: "Maart", bloeikleur: "Onopvallend; rode zaadmantel",
  groeivorm: "Conifeer", groei: "Traag",
  gebruik: ["Haag", "Vormsnoei", "Topiary", "Solitair"],
  kenmerk5: "Trage naaldheester die als enige conifeer ook diepe schaduw verdraagt, op doorlatende grond die niet nat mag zijn; onovertroffen als strakke haag.",
  weetje: "De enige conifeer die je hard in het oude, kale hout mag terugzetten en die daar gewoon weer uitloopt. Alles is zwaar giftig behalve het rode vruchtvlees — de zaadjes erin dan weer wel.",
  cultivars: ["'Fastigiata' (Ierse taxus)", "'Repandens'", "'Hillii'"],
  ecologie: "Bessen voor lijsters, dichte nestgelegenheid en een enorme levensduur — taxussen van meer dan duizend jaar oud zijn geen uitzondering. Inheems.",
  giftig: true
},
{
  id: "thuja-occidentalis", familie: "Cupressaceae", geslacht: "Thuja", soort: "occidentalis",
  nl: "Westerse levensboom", groep: "Conifeer",
  standplaats: "Zon tot halfschaduw", water: "Normaal tot vochtig",
  hoogte: "10–15 m (haag 1,8–3 m)", breedte: "3–4 m", blad: "Bladhoudend",
  bloeitijd: "Maart", bloeikleur: "Onopvallend; kleine kegeltjes",
  groeivorm: "Conifeer", groei: "Snel",
  gebruik: ["Haag", "Scherm", "Rij"],
  kenmerk5: "Snelgroeiende zuilvormige conifeer met schubvormig blad voor zon tot halfschaduw; wil een bodem die niet uitdroogt.",
  weetje: "Het spiegelbeeld van taxus: Thuja loopt níét meer uit uit oud kaal hout. Snoei je te laat of te diep, dan blijft die plek permanent bruin. Wrijf het blad fijn — het ruikt naar appel.",
  cultivars: ["'Smaragd' (traag, blijft wintergroen)", "'Brabant' (sneller)", "'Danica'"],
  ecologie: "Geeft nestgelegenheid en wind­beschutting, maar voedt weinig insecten. Blad is giftig.",
  giftig: true
},

/* ---------- BODEMBEDEKKER ---------- */
{
  id: "pachysandra-terminalis", familie: "Buxaceae", geslacht: "Pachysandra", soort: "terminalis",
  nl: "Schaduwkruid", groep: "Bodembedekker",
  standplaats: "Halfschaduw tot schaduw", water: "Normaal tot vochtig",
  hoogte: "20–30 cm", breedte: "30–40 cm", blad: "Bladhoudend",
  bloeitijd: "April", bloeikleur: "Witte aartjes",
  groeivorm: "Bodembedekker", groei: "Normaal",
  gebruik: ["Bodembedekker", "Onder bomen", "Talud in schaduw"],
  kenmerk5: "Bladhoudende bodembedekker die zich met ondergrondse uitlopers verspreidt tot een gesloten tapijt, op humusrijke, licht zure grond in de schaduw.",
  weetje: "Kijk naar het glanzende, leerachtige blad: hij hoort in dezelfde familie als de buxus (Buxaceae). Een van de weinige planten die diepe schaduw écht dichtgroeit.",
  cultivars: ["'Green Carpet'", "'Variegata'"],
  ecologie: "Weinig nectar, maar sluit onkruid volledig uit en houdt de bodem bedekt — geen kale grond, geen erosie.",
  giftig: false
},

/* ---------- BOLGEWAS ---------- */
{
  id: "allium-giganteum", familie: "Amaryllidaceae", geslacht: "Allium", soort: "giganteum",
  nl: "Reuzensierui", groep: "Bolgewas",
  standplaats: "Volle zon", water: "Droog tot normaal",
  hoogte: "100–150 cm", breedte: "30 cm", blad: "Bladverliezend",
  bloeitijd: "Juni", bloeikleur: "Paarse bol",
  groeivorm: "Bolgewas", groei: "Normaal",
  gebruik: ["Border", "Verticaal accent", "Tussen vaste planten"],
  kenmerk5: "Bolgewas voor volle zon op goed doorlatende grond — in natte grond rot de bol weg — met paarse bloembollen van tien tot vijftien centimeter op lange kale stelen.",
  weetje: "Het blad staat er al slap en geel bij als de bol in bloei komt. Plant hem daarom tussen grassen of vaste planten die dat verbergen. Laat uitgebloeide bollen staan: ze blijven decoratief tot in de winter.",
  cultivars: ["'Globemaster'", "'Ambassador'", "'Mount Everest'"],
  ecologie: "Trekt zeer veel bijen en hommels aan; bloeit in juni, net tussen de voorjaars- en zomerbloei in.",
  giftig: false
}
];

/* Vaste woordenschat — wordt gebruikt om meerkeuze-afleiders te maken */
const WOORDEN = {
  standplaats: ["Volle zon", "Zon tot halfschaduw", "Halfschaduw", "Halfschaduw tot schaduw",
                "Zon tot schaduw", "Schaduw"],
  water: ["Droog", "Droog tot normaal", "Normaal", "Normaal tot vochtig", "Vochtig"],
  blad: ["Bladverliezend", "Bladhoudend", "Halfbladhoudend"],
  groeivorm: ["Boom", "Heester", "Vaste plant", "Siergras", "Klimplant", "Conifeer",
              "Bodembedekker", "Bolgewas"]
};
