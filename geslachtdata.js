/* PlantenTrainer — profielen per geslacht.
   Dit is wat je op het makkelijkste niveau te zien krijgt zodra je een groep kiest:
   eerst leren waaraan je het geslacht herkent, daarna pas de soorten uit elkaar houden.

   "herkenning" = wat je in het veld ziet en betast.
   "kenmerken"  = wat het geslacht als groep nodig heeft en doet. */

const GESLACHTDATA = {

  "Acer": {
    nl: "Esdoorn", familie: "Sapindaceae", omvang: "ruim 130 soorten wereldwijd",
    ezelsbrug: "Tegenoverstaand blad plus helikoptertjes: dan zit je bij Acer.",
    herkenning: [
      "Bladeren staan <b>tegenover elkaar</b> aan de twijg. Dat sluit al meteen het grootste deel van onze bomen uit.",
      "Blad meestal handvormig gelobd met 3, 5 of 7 punten. Uitzonderingen bestaan: <i>A. negundo</i> heeft samengesteld blad, <i>A. davidii</i> een ongelobd blad.",
      "De vrucht is onmiskenbaar: twee gevleugelde nootjes aan elkaar, de bekende helikoptertjes. De hoek tussen de vleugels verschilt per soort en helpt je determineren.",
      "Ook de knoppen staan tegenover elkaar, met schubben die kruisgewijs over elkaar liggen."
    ],
    kenmerken: [
      "Bomen en grote struiken, vrijwel allemaal bladverliezend.",
      "Bloei vroeg in het voorjaar, klein en geelgroen tot rood — je ziet ze pas als je kijkt.",
      "Veel soorten zijn gekozen om hun herfstkleur; die komt het sterkst op licht zure grond.",
      "Volle zon tot halfschaduw, doorlatende grond. De Japanse soorten willen beschutting tegen wind en late vorst.",
      "Let op verticilliumverwelking: een tak die plots verdort, is bij Acer bijna altijd deze schimmel."
    ]
  },

  "Buxus": {
    nl: "Buxus / palmboompje", familie: "Buxaceae", omvang: "ongeveer 70 soorten, waarvan een handvol in de handel",
    ezelsbrug: "Klein glanzend blad tegenover elkaar, groene vierkante twijg, en die typische geur.",
    herkenning: [
      "Klein, leerachtig en glanzend blad van 1 tot 3 cm, <b>tegenoverstaand</b>. Bij <i>B. sempervirens</i> is de bladtop licht ingedeukt.",
      "Jonge twijgen zijn groen en duidelijk vierkantig tot gevleugeld — rol er een tussen je vingers.",
      "Extreem dichte, fijne vertakking: daar dankt hij zijn geschiktheid voor vormsnoei aan.",
      "De geur. Op een warme dag ruikt een buxushaag scherp en onmiskenbaar; vakmensen noemen het kattengeur."
    ],
    kenmerken: [
      "Bladhoudende struiken die zeer traag groeien — reken op 10 tot 15 cm per jaar.",
      "Van volle zon tot diepe schaduw, en hij houdt van kalkrijke grond.",
      "Onovertroffen knipvast: hij loopt uit op elk punt, ook uit ouder hout.",
      "Alle delen zijn giftig.",
      "Vandaag riskant door buxusmot en de schimmel <i>Cylindrocladium</i>. Volwaardige vervangers: <i>Ilex crenata</i>, <i>Taxus baccata</i> en <i>Lonicera nitida</i>."
    ]
  },

  "Prunus": {
    nl: "Prunus / kers, pruim, laurierkers", familie: "Rosaceae", omvang: "ongeveer 250 soorten",
    ezelsbrug: "Twee kliertjes op de bladsteel: dat is Prunus, en niets anders.",
    herkenning: [
      "Kijk naar de <b>bladsteel vlak onder het blad</b>: daar zitten twee kleine kliertjes (nectarien). Dat is hét kenmerk van het geslacht.",
      "Blad staat <b>verspreid</b> langs de twijg, is enkelvoudig en heeft een gezaagde rand.",
      "Bloem met vijf kroonbladen en een bos meeldraden, wit tot roze, vaak vóór of met het blad.",
      "Vrucht is een steenvrucht: één harde pit in vlezig vruchtvlees.",
      "Bij de kersen loopt de schors in horizontale streepjes (lenticellen) rond de stam."
    ],
    kenmerken: [
      "Bomen én struiken. De meeste verliezen hun blad, maar <i>P. laurocerasus</i> en <i>P. lusitanica</i> zijn wintergroen.",
      "Volle zon tot halfschaduw, normale doorlatende tuingrond.",
      "Blad en pitten bevatten blauwzuurverbindingen en zijn giftig.",
      "Snoei bij voorkeur in de zomer. Snoei je in de winter, dan riskeer je loodglans en bacteriekanker.",
      "Vroege bloeiers zijn belangrijk voor bijen die net uit de winter komen."
    ]
  },

  "Viburnum": {
    nl: "Sneeuwbal", familie: "Viburnaceae", omvang: "ongeveer 165 soorten",
    ezelsbrug: "Tegenoverstaand blad plus een plat scherm met grotere randbloemen.",
    herkenning: [
      "Blad staat <b>tegenover elkaar</b>.",
      "De bloeiwijze is een vlak of bolvormig scherm van veel kleine bloempjes. Bij verschillende soorten zit er een krans grotere, onvruchtbare lokbloemen omheen.",
      "Vrucht is een steenvrucht die van rood naar zwart verkleurt; vaak hangen beide kleuren tegelijk in de struik.",
      "<i>V. lantana</i> heeft naakte knoppen zonder schubben — een handig winterkenmerk binnen het geslacht."
    ],
    kenmerken: [
      "Struiken, sommige bladverliezend, andere wintergroen.",
      "Zon tot halfschaduw op gewone tuingrond; weinig veeleisend.",
      "Bij <i>V. carlesii</i>, <i>V. × burkwoodii</i> en <i>V. × bodnantense</i> is de geur de reden waarom je ze plant.",
      "Let op het viburnumhaantje: dat kevertje kan <i>V. opulus</i> in enkele weken kaalvreten.",
      "Sinds de herziening van de plantenstamboom hoort Viburnum in de Viburnaceae, niet meer bij de Caprifoliaceae."
    ]
  },

  "Hydrangea": {
    nl: "Hortensia", familie: "Hydrangeaceae", omvang: "ongeveer 75 soorten",
    ezelsbrug: "Die vier 'bloemblaadjes' zijn geen bloemblaadjes maar schutbladen.",
    herkenning: [
      "Groot, gezaagd blad dat <b>tegenover elkaar</b> staat.",
      "De opvallende delen van de bloeiwijze zijn <b>steriele lokbloemen</b>: gekleurde schutbladen zonder meeldraden. De echte bloemetjes zijn klein en zitten ertussen.",
      "Dikke, holle, weinig vertakte scheuten — breek er eens een oude af en je ziet het merg.",
      "De vorm van de bloeiwijze verraadt de soort: bol (<i>macrophylla</i>), pluim (<i>paniculata</i>), plat scherm (<i>serrata</i>, <i>aspera</i>)."
    ],
    kenmerken: [
      "Struiken, bladverliezend, met een hoge waterbehoefte — de naam komt van het Griekse <i>hydor</i>, water.",
      "Halfschaduw zonder hete middagzon, humusrijke grond die blijvend vochtig blijft.",
      "Snoei hangt af van de soort, en dat is de meestgemaakte fout: <i>macrophylla</i> en <i>serrata</i> bloeien op hout van vorig jaar, <i>paniculata</i> en <i>arborescens</i> op nieuw hout.",
      "Bij <i>macrophylla</i> en <i>serrata</i> bepaalt de bodem de kleur: zuur met opneembaar aluminium geeft blauw, kalkrijk geeft roze.",
      "Voor insecten tellen alleen de vormen met echte bloemetjes aan de rand; de volle bollen zijn steriel en waardeloos."
    ]
  },

  "Cotoneaster": {
    nl: "Dwergmispel", familie: "Rosaceae", omvang: "meer dan 300 soorten",
    ezelsbrug: "Klein gaafrandig blad en geen enkele doorn — dat scheidt hem van Berberis en Pyracantha.",
    herkenning: [
      "Blad staat <b>verspreid</b>, is klein en heeft een <b>gladde rand zonder tanden</b>. Dat gaafrandige blad is het snelste onderscheid.",
      "<b>Geen doorns.</b> Voelt het stekelig, dan heb je Pyracantha of Berberis beet.",
      "Kleine vijftallige bloempjes, wit tot roze, vaak half gesloten.",
      "Kleine appelvruchtjes, rood of zwart, die tot diep in de winter blijven hangen.",
      "<i>C. horizontalis</i> heeft een takstructuur als een visgraat — die herken je van ver."
    ],
    kenmerken: [
      "Struiken en bodembedekkers; blad-, half- en wintergroen door elkaar.",
      "Zon tot halfschaduw, verdraagt droogte en arme grond. Daarom staat hij overal in openbaar groen.",
      "Zeer goede drachtplant: de bloei zoemt letterlijk. Bessen voor merel en lijster.",
      "Waardplant voor bacterievuur (<i>Erwinia amylovora</i>). In fruitteeltgebied is dat een echte overweging bij plantkeuze."
    ]
  },

  "Euonymus": {
    nl: "Kardinaalsmuts", familie: "Celastraceae", omvang: "ongeveer 130 soorten",
    ezelsbrug: "Die roze doosvrucht die openspringt met oranje zaad erin: alleen Euonymus doet dat.",
    herkenning: [
      "Blad staat <b>tegenover elkaar</b>.",
      "Twijgen zijn vaak groen en vierkantig; <i>E. alatus</i> heeft er echte kurklijsten op staan, als vleugels.",
      "De vrucht is het sterkste kenmerk: een vierlobbige roze doosvrucht die openspringt en oranje zaden toont. Vandaar de naam kardinaalsmuts.",
      "Bloemen zijn onopvallend groengeel, vier kroonblaadjes, plat uitgespreid."
    ],
    kenmerken: [
      "Struiken, bodembedekkers én zelfhechtende klimmers — <i>E. fortunei</i> doet alle drie, afhankelijk van hoe je hem zet.",
      "Zon tot schaduw, weinig eisen aan de grond. Een dankbare plant voor lastige plekken.",
      "De bladverliezende soorten geven een felle herfstkleur, vaak vuurrood.",
      "Alle delen zijn giftig.",
      "Kan hevig aangetast worden door de kardinaalsmutsstippelmot, die hele struiken in spinsel hult. Lelijk, maar de plant loopt weer uit."
    ]
  },

  "Salix": {
    nl: "Wilg", familie: "Salicaceae", omvang: "ongeveer 350 soorten",
    ezelsbrug: "Eén knopschub als een kapje over de knop: dat heeft geen enkele andere boom.",
    herkenning: [
      "De knop heeft <b>één enkele schub</b> die er als een kapje overheen zit. Uniek in onze flora en het zekerste kenmerk, ook in de winter.",
      "Blad meestal smal en lancetvormig, verspreid langs de twijg.",
      "Katjes vóór of samen met het blad. Wilgen zijn <b>tweehuizig</b>: mannelijke en vrouwelijke katjes zitten op aparte planten.",
      "Twijgen zijn opvallend buigzaam en bij veel soorten gekleurd — geel, rood of violet."
    ],
    kenmerken: [
      "Bomen en struiken met een zeer snelle groei; sommige schieten een meter per jaar.",
      "Houden van vochtige tot natte grond en volle zon. Op droge grond kwijnen ze weg.",
      "Stekken extreem makkelijk: een tak die je in vochtige grond steekt, wortelt gewoon. Daarom de klassieke knotwilg.",
      "Zeer hoge ecologische waarde: de eerste stuifmeel- en nectarbron van het jaar, en waardplant voor honderden insectensoorten.",
      "Wortels zoeken water en kunnen rioleringen en drainage binnendringen — niet te dicht bij leidingen planten."
    ]
  },

  "Quercus": {
    nl: "Eik", familie: "Fagaceae", omvang: "ongeveer 500 soorten",
    ezelsbrug: "Een eikel in een napje, en een bundeltje knoppen aan het takuiteinde.",
    herkenning: [
      "De <b>eikel in een napje</b> is onmiskenbaar. Vorm en beharing van dat napje onderscheiden de soorten.",
      "Blad staat <b>verspreid</b> en is meestal gelobd. Let op de uitzonderingen: <i>Q. ilex</i> heeft stekelig hulstachtig blad, <i>Q. phellos</i> een smal gaafrandig blad.",
      "Aan het uiteinde van elke twijg zit een <b>bundeltje knoppen</b> bij elkaar in plaats van één eindknop.",
      "Oudere stammen hebben een diep gegroefde, grove schors."
    ],
    kenmerken: [
      "Grote, langlevende bomen. Een zomereik van 400 jaar is geen uitzondering.",
      "Meestal bladverliezend; <i>Q. ilex</i> en <i>Q. suber</i> zijn wintergroen.",
      "Volle zon, diep wortelend en daardoor goed bestand tegen droogte.",
      "De hoogste ecologische waarde van al onze bomen: honderden insectensoorten leven van de inheemse eik alleen al.",
      "Traag tot matig groeiend — je plant een eik niet voor jezelf."
    ]
  },

  "Lonicera": {
    nl: "Kamperfoelie", familie: "Caprifoliaceae", omvang: "ongeveer 180 soorten",
    ezelsbrug: "Lange buisbloem met twee lippen die 's avonds geurt: nachtvlinderwerk.",
    herkenning: [
      "Blad staat <b>tegenover elkaar</b>. Bij de klimmende soorten zijn de bovenste twee bladeren vaak rond de stengel vergroeid tot één schijf — kijk daar altijd naar.",
      "De bloem is <b>lang buisvormig en tweelippig</b>, vaak met ver uitstekende meeldraden.",
      "Vruchten zijn bessen, rood of zwart, dikwijls twee aan twee samen.",
      "De struikvormige soorten zoals <i>L. nitida</i> hebben juist heel klein blad; die lijken in niets op de klimmers, maar de tegenoverstaande stand blijft."
    ],
    kenmerken: [
      "Zowel struiken als klimplanten, blad- en wintergroen door elkaar.",
      "Zon tot schaduw; de klimmers willen het liefst hun voet in de schaduw en hun kop in de zon.",
      "Klassieke nachtvlinderbloem: lange buis, witte tot gele kleur en geur die pas 's avonds vrijkomt, afgestemd op pijlstaartvlinders.",
      "Bessen zijn voedsel voor vogels, maar van verschillende soorten giftig voor mensen.",
      "<i>L. japonica</i> gedraagt zich in delen van Europa invasief — bewust mee omgaan."
    ]
  }
};
