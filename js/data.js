'use strict';
const KATEGORIER = [
  { id: 'riktlinjer',    namn: 'Riktlinjer',       beskrivning: 'Neurologiska riktlinjer per diagnos', ikon: '📋', farg: 'kategori-riktlinje' },
  { id: 'ms',            namn: 'MS',                beskrivning: 'Multipel skleros – MR-konsensus och anti-CD20-behandling', ikon: '🧠', farg: 'kategori-riktlinje', parent: 'riktlinjer' },
  { id: 'parkinson',     namn: 'Parkinson',         beskrivning: 'Riktlinjer för utredning och behandling av Parkinsons sjukdom', ikon: '🫀', farg: 'kategori-prognos', parent: 'riktlinjer' },
  { id: 'tremor',        namn: 'Tremortillstånd',   beskrivning: 'Svenska riktlinjer för utredning och behandling av tremortillstånd', ikon: '〰️', farg: 'kategori-akut', parent: 'riktlinjer' },
  { id: 'myasteni',      namn: 'Myasteni',          beskrivning: 'Myastenia Gravis – svenskt konsensusprogram', ikon: '💪', farg: 'kategori-riktlinje', parent: 'riktlinjer' },
  { id: 'polyneuropati', namn: 'Polyneuropati',     beskrivning: 'Polyneuropati – vårdprogram Karolinska', ikon: '🔬', farg: 'kategori-prognos', parent: 'riktlinjer' },
  { id: 'akutkort',      namn: 'Akutkort',          beskrivning: 'Neurologiska akutkort för akuta situationer', ikon: '⚡', farg: 'kategori-akut' },
  { id: 'prognos',       namn: 'Prognos & PM',      beskrivning: 'Prognosverktyg och lokala PM', ikon: '📊', farg: 'kategori-prognos' },
  { id: 'kalkylatorer',  namn: 'Kalkylatorer',       beskrivning: 'Kliniska beräkningsverktyg', ikon: '🧮', farg: 'kategori-prognos' },
  { id: 'fass', namn: 'FASS', beskrivning: 'Läkemedelsinformation – öppnar fass.se', ikon: '💊', farg: 'kategori-akut', externalUrl: 'https://fass.se/health' }
];

const DOKUMENT = [
  {
    id: 'mr-konsensus',
    titel: 'Nationella rekommendationer för MR vid neuroinflammation (v3.1, 2025)',
    kategori: 'ms',
    pdf: 'riktlinjer/Konsensusdokument_MR_3.1_2025-10-10.pdf',
    markdownUrl: 'riktlinjerMarkdown/Konsensusdokument_MR_3.1_2025-10-10.md',
    graphicalAbstract: 'graphical_abstract_mr.html',
    innehall: [
    {
      rubrik: 'Rekommenderad MR-användning – i vilka situationer bör MR göras?',
      text: `Rekommenderad MR-användning vid neuroinflammation
I vilka situationer bör MR göras?
Det finns ett flertal situationer vid vilka en person med misstänkt eller känd neuroinflammation bör
genomgå MR-undersökning. De dominerande skälen är nydiagnostik och monitorering av
sjukdomsaktivitet. Exempel på typsituationer och rekommenderat MR-protokoll framgår av Tabell 1.
Tabell 1. Typsituationer när MR bör utföras och val av lämpligt MR-protokoll.
Situation
Syftet med MR
Protokoll
Utredning vid
misstänkt
neuroinflammation
• Bedöma om MR-fynden är typiska för MS, i
sådana fall bedömning av spridning i rum och
tid
• Bedöma om MR-fynden är typiska för annat
neuroinflammatoriskt tillstånd
• Erhålla en uppfattning om grad av
sjukdomsaktivitet (antal lesioner, antal
kontrastladdande lesioner) och ev. atrofi
(förekomst redan vid diagnos, vilka
områden?)
• Påvisa/utesluta differentialdiagnoser
MR hjärna
Neuroinflammation

Ev. MR rygg
Neuroinflammation
Rutinkontroll vid MS
• Påvisa sjukdomsaktivitet
(nya/förstorade/kontrastladdande lesioner)
för ställningstagande till förändring av
behandling
• Påvisa tecken till biverkningar (t.ex. PML)
• Bedöma om atrofi tillkommit
MR hjärna MS-
rutinkontroll

(överväg att begära
med kontrastmedel)
Kontroll inför/efter
insättande/förändring
av terapi
Uppföljning av RIS/CIS
eller annat neuro-
inflammatoriskt
tillstånd (t.ex. NMOSD,
MOGAD, eller dylikt)
• Påvisa sjukdomsaktivitet
(nya/förstorade/kontrastladdande lesioner)
för ställningstagande till förändring av
behandling.
• Påvisa tecken till biverkningar (PML)
Bedöma om atrofi tillkommit
MR hjärna
Neuroinflammation

Ev. MR rygg
Neuroinflammation
Skov eller oförutsedd
försämring*
• Påvisa sjukdomsaktivitet
(nya/förstorade/kontrastladdande lesioner)
för ställningstagande till förändring av
behandling
• Påvisa/utesluta differentialdiagnoser
• Påvisa tecken till biverkningar (t.ex. PML)
MR hjärna
Neuroinflammation

Ev. MR rygg
Neuroinflammation
*Särskilt när differentialdiagnostiken gentemot pseudoskov (nya/förvärrade symtom av annan orsak
än sjukdomsaktivitet såsom samtidig infektion) är svår. Skovbehandling bör ej fördröjas av väntan på
MR. CIS = kliniskt isolerat syndrom (clinically isolated syndrome), RIS = radiologiskt isolerat syndrom
(radiologically isolated syndrome).`
    },
    {
      rubrik: 'Vilka delar av CNS bör undersökas?',
      text: `Vilka delar av centrala nervsystemet bör undersökas?
Vid utredning och rutinuppföljning av MS och annan neuroinflammation bör alltid hjärnan undersökas.
MR av ryggmärgen kan ge ytterligare information men har begränsad nytta vid MS-rutinkontroller för
att detektera subklinisk sjukdomsaktivitet eftersom ryggmärgslesioner i större utsträckning ger
symtom/skov än lesioner i hjärnan. Vid några situationer föreligger särskild indikation för MR av
ryggmärgen (se Tabell 2 nedan). Tabellen är en fri översättning från MAGNIMS rekommendationer.1
Rekommenderade protokoll för MR hjärna
Rekommenderade MR-protokoll av hjärnan för specificeras i Bild 1. De rekommenderade protokollen
utgör en föreslagen minimi-nivå för att erhålla adekvat information i typfallet och kan kompletteras
med ytterligare sekvenser. Vid undersökning av individ med MS där det finns misstanke om icke-MS-
relaterad patologi bör protokollen justeras utifrån aktuell frågeställning.
Bild 1. Rekommenderade protokoll för MR hjärna.

DWI = diffusionsviktad bild, FLAIR = fluid-attenuated inversion recovery, STIR = Short Tau Inversion
Recovery, SWI = susceptibilitetsviktad bild, WI = viktad bild.
Kommentarer
•
Nytt: Protokollet ”MR hjärna MS-diagnostik” byter namn till ”MR hjärna Neuroinflammation”.
•
Nytt: Protokollet ”MR hjärna Neuroinflammation” innehåller rutinmässigt undersökning av
synnerven.
•
Nytt: Vid ”MS-rutinkontroll” tas kravet på T2-viktade bilder bort då det bedöms ha begränsat
diagnostiskt mervärde. Det rekommenderas att behålla den 3D T1-viktade sekvensen oavsett
om kontrastmedel begärs eller inte för att:
1. Underlätta planeringen av körning/bokning när samma sekvenser används. Det är särskilt
viktigt för att undvika att 3D T1-viktad sekvens missas efter given kontrastdos (om man
annars normalt inte använder sekvensen vid rutinuppföljning).
MR hjärna Neuroinflammation
Ett bredare protokoll som syftar till att påvisa
fynd talande för neuroinflammation samt
utesluta differential-diagnoser. Används även
vid oväntad försämring hos patient med känd
neuroinflammation.
1. 3D T2-FLAIR
2. 3D T1WI
3. STIR synnerver
Kontrastmedelsadministration
4. SWI
5. DWI
6. T2WI
7. 3D T1WI
 MR hjärna MS-rutinkontroll
Ett smalare protokoll som syftar till att påvisa
sjukdomsaktivitet och atrofiprogress och är
huvudsakligen avsett för planerade kontroller.
(Kontrastmedelsadministration, endast på
begäran)
1. 3D FLAIR
2. 3D T1WI`
    },
    {
      rubrik: 'Rekommenderade protokoll för MR hjärna',
      text: `Vilka delar av centrala nervsystemet bör undersökas?
Vid utredning och rutinuppföljning av MS och annan neuroinflammation bör alltid hjärnan undersökas.
MR av ryggmärgen kan ge ytterligare information men har begränsad nytta vid MS-rutinkontroller för
att detektera subklinisk sjukdomsaktivitet eftersom ryggmärgslesioner i större utsträckning ger
symtom/skov än lesioner i hjärnan. Vid några situationer föreligger särskild indikation för MR av
ryggmärgen (se Tabell 2 nedan). Tabellen är en fri översättning från MAGNIMS rekommendationer.1
Rekommenderade protokoll för MR hjärna
Rekommenderade MR-protokoll av hjärnan för specificeras i Bild 1. De rekommenderade protokollen
utgör en föreslagen minimi-nivå för att erhålla adekvat information i typfallet och kan kompletteras
med ytterligare sekvenser. Vid undersökning av individ med MS där det finns misstanke om icke-MS-
relaterad patologi bör protokollen justeras utifrån aktuell frågeställning.
Bild 1. Rekommenderade protokoll för MR hjärna.

DWI = diffusionsviktad bild, FLAIR = fluid-attenuated inversion recovery, STIR = Short Tau Inversion
Recovery, SWI = susceptibilitetsviktad bild, WI = viktad bild.
Kommentarer
•
Nytt: Protokollet ”MR hjärna MS-diagnostik” byter namn till ”MR hjärna Neuroinflammation”.
•
Nytt: Protokollet ”MR hjärna Neuroinflammation” innehåller rutinmässigt undersökning av
synnerven.
•
Nytt: Vid ”MS-rutinkontroll” tas kravet på T2-viktade bilder bort då det bedöms ha begränsat
diagnostiskt mervärde. Det rekommenderas att behålla den 3D T1-viktade sekvensen oavsett
om kontrastmedel begärs eller inte för att:
1. Underlätta planeringen av körning/bokning när samma sekvenser används. Det är särskilt
viktigt för att undvika att 3D T1-viktad sekvens missas efter given kontrastdos (om man
annars normalt inte använder sekvensen vid rutinuppföljning).
MR hjärna Neuroinflammation
Ett bredare protokoll som syftar till att påvisa
fynd talande för neuroinflammation samt
utesluta differential-diagnoser. Används även
vid oväntad försämring hos patient med känd
neuroinflammation.
1. 3D T2-FLAIR
2. 3D T1WI
3. STIR synnerver
Kontrastmedelsadministration
4. SWI
5. DWI
6. T2WI
7. 3D T1WI
 MR hjärna MS-rutinkontroll
Ett smalare protokoll som syftar till att påvisa
sjukdomsaktivitet och atrofiprogress och är
huvudsakligen avsett för planerade kontroller.
(Kontrastmedelsadministration, endast på
begäran)
1. 3D FLAIR
2. 3D T1WI

2. 3D T1-viktad sekvens är särskilt lämplig för att bedöma/bekräfta lesioner i bakre
skallgropen och i/vid kortex samt områden där T2-viktade bilder är behäftade med
artefakter.
3. 3D T1-viktad sekvens används för volumetri och forskning i Fas 5-studier som de flesta
patienter med nya läkemedel medverkar i.
•
Nytt: Vid ”Neuroinflammation” bör Susceptibility-Weighted Imaging (SWI) användas och
fasbilden sparas för att underlätta detektionen av centrala venoler i vitsubstansförändringarna
samt förekomst av ev. paramagnetisk ”rim”.
•
Nytt: Vid ”Neuroinflammation” bör SWI utföras direkt efter kontrast då det ökar sensitivitet för
centrala venoler i MS-lesioner (särskilt vid 1,5 Tesla). Det är bra att ha i åtanke att SWI innehåller
en T1-viktning, varför kontrastuppladdning ibland kan ses även på SWI. SWI kan utföras på olika
sätt (gradienteko eller echo planar imaging) och har olika namn på olika tillverkare (SWAN på
GE, SWIp på Philips och SWI på Siemens). Vilken SWI-sekvens som är lämpligast beror på
tillgänglighet och inställningar. Mer specifika tekniska rekommendationer kan erhållas av
kontaktpersonen vid behov. SWI-sekvensen kräver en licens på kameran som är en förutsättning
för att kameran ska vara lämplig för att utföra detta protokoll.
•
Undersökning vid uppföljning bör genomföras så tekniskt jämförbart med föregående
undersökning som möjligt för att underlätta jämförelse mellan undersökningar. Strävan bör vara
att så långt det är möjligt använda samma kamera och samma vinkling av snitten (främre-bakre
kommissuren rekommenderas).
•
Eftersom individer med MS genomgår upprepade kontrastmedelsförstärkta undersökningar ska
endast makrocykliskt kontrastmedel väljas.
•
Vid uppföljningsundersökning måste alltid den aktuella undersökningen jämföras med
föregående undersökning(ar) för att se ev. tillkomst av nya lesioner. Då diskreta sjukdoms-
förändringar ibland kan vara svåra att detektera mellan två konsekutiva undersökningar kan det
vara en fördel att jämföra aktuell undersökning även med undersökning längre tillbaka i tiden
än den direkt föregående. Subtraktionsteknik kan övervägas för ökad sensitivitet för
nya/förstorade lesioner.

Rekommenderade protokoll för MR rygg

Tabell 2. Indikationer för MR rygg.
Situation
Syfte med MR-undersökningen
Nydiagnostik
•
Detektera både symtomatiska och kliniskt tysta lesioner.
•
Öka sensitivitet och specificitet för MS-diagnos.
•
Påvisa alternativa diagnoser.
•
Etablera baslinje för framtida undersökningar
Försämring
•
Detektera nya lesioner.
•
Påvisa alternativa diagnoser.
•
Påvisa ev. atrofiutveckling.`
    },
    {
      rubrik: 'Rekommenderade protokoll för MR rygg',
      text: `2. 3D T1-viktad sekvens är särskilt lämplig för att bedöma/bekräfta lesioner i bakre
skallgropen och i/vid kortex samt områden där T2-viktade bilder är behäftade med
artefakter.
3. 3D T1-viktad sekvens används för volumetri och forskning i Fas 5-studier som de flesta
patienter med nya läkemedel medverkar i.
•
Nytt: Vid ”Neuroinflammation” bör Susceptibility-Weighted Imaging (SWI) användas och
fasbilden sparas för att underlätta detektionen av centrala venoler i vitsubstansförändringarna
samt förekomst av ev. paramagnetisk ”rim”.
•
Nytt: Vid ”Neuroinflammation” bör SWI utföras direkt efter kontrast då det ökar sensitivitet för
centrala venoler i MS-lesioner (särskilt vid 1,5 Tesla). Det är bra att ha i åtanke att SWI innehåller
en T1-viktning, varför kontrastuppladdning ibland kan ses även på SWI. SWI kan utföras på olika
sätt (gradienteko eller echo planar imaging) och har olika namn på olika tillverkare (SWAN på
GE, SWIp på Philips och SWI på Siemens). Vilken SWI-sekvens som är lämpligast beror på
tillgänglighet och inställningar. Mer specifika tekniska rekommendationer kan erhållas av
kontaktpersonen vid behov. SWI-sekvensen kräver en licens på kameran som är en förutsättning
för att kameran ska vara lämplig för att utföra detta protokoll.
•
Undersökning vid uppföljning bör genomföras så tekniskt jämförbart med föregående
undersökning som möjligt för att underlätta jämförelse mellan undersökningar. Strävan bör vara
att så långt det är möjligt använda samma kamera och samma vinkling av snitten (främre-bakre
kommissuren rekommenderas).
•
Eftersom individer med MS genomgår upprepade kontrastmedelsförstärkta undersökningar ska
endast makrocykliskt kontrastmedel väljas.
•
Vid uppföljningsundersökning måste alltid den aktuella undersökningen jämföras med
föregående undersökning(ar) för att se ev. tillkomst av nya lesioner. Då diskreta sjukdoms-
förändringar ibland kan vara svåra att detektera mellan två konsekutiva undersökningar kan det
vara en fördel att jämföra aktuell undersökning även med undersökning längre tillbaka i tiden
än den direkt föregående. Subtraktionsteknik kan övervägas för ökad sensitivitet för
nya/förstorade lesioner.

Rekommenderade protokoll för MR rygg

Tabell 2. Indikationer för MR rygg.
Situation
Syfte med MR-undersökningen
Nydiagnostik
•
Detektera både symtomatiska och kliniskt tysta lesioner.
•
Öka sensitivitet och specificitet för MS-diagnos.
•
Påvisa alternativa diagnoser.
•
Etablera baslinje för framtida undersökningar
Försämring
•
Detektera nya lesioner.
•
Påvisa alternativa diagnoser.
•
Påvisa ev. atrofiutveckling.

Bild 2. Rekommenderat MR-protokoll för ryggmärg.

STIR = Short Tau Inversion Recovery.
Kommentarer
•
Sagitella bilder ska utföras som två överlappande bildfält (cervikalt och thorakalt) med en
snittjocklek om maximalt 3 mm.
•
Axiella T2-viktade bilder ska utföras med en snittjocklek om maximalt 4 mm.
•
Sagitella T1-viktade bilder kan med fördel köras som fett-undertryckt sekvens.
•
Bildtagningen ska inkludera conus.
Kontrastmedelsanvändning
Information om huruvida någon lesion uppvisar kontrastladdning är central vid diagnos av MS och
kontrastmedel ingår därför som rutin i ”MR hjärna Neuroinflammation” och ”MR rygg
Neuroinflammation”. Vid MS-rutinkontroll är dock betydelsen av denna information lägre än vid
diagnostisk undersökning, varför kontrastmedel vid MS-rutinkontroller enbart utförs med
kontrastmedel på begäran. Kontrastmedel vid rutinkontroll kan begäras exempelvis efter hos en
individ som uppvisat klinisk/radiologisk aktivitet vid föregående kontroller.
7 Tesla MR hjärna
•
Remiss kan skrivas för 7 Tesla MR vid hög MS-misstanke men icke-uppfyllda kriterier.
•
Patienten ska ha genomgått adekvat klinisk och paraklinisk utredning.
•
Syftet är att detektera kortikala lesioner, centrala venoler och lesioner med ”paramagnetisk
rim” i enlighet med de reviderade kriterierna.
•
Remiss för klinisk 7 Tesla MR emottages från hela landet vid Karolinska Universitetssjukhuset
i Huddinge. Undersökning görs enbart av hjärnan, ej rygg.

MR rygg Neuroinflammation
Används vid nydiagnostik eller försämring.
1. Sag STIR
Kontrastmedelsadministration
2. Ax T2WI
3. Sag T1WI`
    },
    {
      rubrik: 'Kontrastmedelsanvändning',
      text: `Bild 2. Rekommenderat MR-protokoll för ryggmärg.

STIR = Short Tau Inversion Recovery.
Kommentarer
•
Sagitella bilder ska utföras som två överlappande bildfält (cervikalt och thorakalt) med en
snittjocklek om maximalt 3 mm.
•
Axiella T2-viktade bilder ska utföras med en snittjocklek om maximalt 4 mm.
•
Sagitella T1-viktade bilder kan med fördel köras som fett-undertryckt sekvens.
•
Bildtagningen ska inkludera conus.
Kontrastmedelsanvändning
Information om huruvida någon lesion uppvisar kontrastladdning är central vid diagnos av MS och
kontrastmedel ingår därför som rutin i ”MR hjärna Neuroinflammation” och ”MR rygg
Neuroinflammation”. Vid MS-rutinkontroll är dock betydelsen av denna information lägre än vid
diagnostisk undersökning, varför kontrastmedel vid MS-rutinkontroller enbart utförs med
kontrastmedel på begäran. Kontrastmedel vid rutinkontroll kan begäras exempelvis efter hos en
individ som uppvisat klinisk/radiologisk aktivitet vid föregående kontroller.
7 Tesla MR hjärna
•
Remiss kan skrivas för 7 Tesla MR vid hög MS-misstanke men icke-uppfyllda kriterier.
•
Patienten ska ha genomgått adekvat klinisk och paraklinisk utredning.
•
Syftet är att detektera kortikala lesioner, centrala venoler och lesioner med ”paramagnetisk
rim” i enlighet med de reviderade kriterierna.
•
Remiss för klinisk 7 Tesla MR emottages från hela landet vid Karolinska Universitetssjukhuset
i Huddinge. Undersökning görs enbart av hjärnan, ej rygg.

MR rygg Neuroinflammation
Används vid nydiagnostik eller försämring.
1. Sag STIR
Kontrastmedelsadministration
2. Ax T2WI
3. Sag T1WI`
    },
    {
      rubrik: '7 Tesla MR hjärna',
      text: `Bild 2. Rekommenderat MR-protokoll för ryggmärg.

STIR = Short Tau Inversion Recovery.
Kommentarer
•
Sagitella bilder ska utföras som två överlappande bildfält (cervikalt och thorakalt) med en
snittjocklek om maximalt 3 mm.
•
Axiella T2-viktade bilder ska utföras med en snittjocklek om maximalt 4 mm.
•
Sagitella T1-viktade bilder kan med fördel köras som fett-undertryckt sekvens.
•
Bildtagningen ska inkludera conus.
Kontrastmedelsanvändning
Information om huruvida någon lesion uppvisar kontrastladdning är central vid diagnos av MS och
kontrastmedel ingår därför som rutin i ”MR hjärna Neuroinflammation” och ”MR rygg
Neuroinflammation”. Vid MS-rutinkontroll är dock betydelsen av denna information lägre än vid
diagnostisk undersökning, varför kontrastmedel vid MS-rutinkontroller enbart utförs med
kontrastmedel på begäran. Kontrastmedel vid rutinkontroll kan begäras exempelvis efter hos en
individ som uppvisat klinisk/radiologisk aktivitet vid föregående kontroller.
7 Tesla MR hjärna
•
Remiss kan skrivas för 7 Tesla MR vid hög MS-misstanke men icke-uppfyllda kriterier.
•
Patienten ska ha genomgått adekvat klinisk och paraklinisk utredning.
•
Syftet är att detektera kortikala lesioner, centrala venoler och lesioner med ”paramagnetisk
rim” i enlighet med de reviderade kriterierna.
•
Remiss för klinisk 7 Tesla MR emottages från hela landet vid Karolinska Universitetssjukhuset
i Huddinge. Undersökning görs enbart av hjärnan, ej rygg.

MR rygg Neuroinflammation
Används vid nydiagnostik eller försämring.
1. Sag STIR
Kontrastmedelsadministration
2. Ax T2WI
3. Sag T1WI`
    },
    {
      rubrik: 'Hur ofta bör MR göras vid MS?',
      text: `Hur ofta bör MR göras vid MS?
Det saknas evidens för att definiera exakta uppföljningsintervall för MR vid MS/neuroinflammation.
Nedanstående bild är ett praktiskt exempel på undersökningsintervall som kan användas både den
första tiden samt långsiktigt. Frekvensen av MR är initialt angiven som intervall, där det kortare
tidsintervallet bör väljas vid tecken till hög sjukdomsaktivitet medan det längre intervallet kan
användas om förväntad sjukdomsaktivitet är låg.
Rekommenderade intervall kan behöva anpassas utifrån individuell sjukdomsaktivitet. Detta
diskuteras vidare i avsnittet ”När kan undersökningarna begränsas eller MR-monitoreringen
avslutas?”.
Bild 2. Exempel på MR-uppföljningsintervall.

Kommentarer
•
Vid byte av terapi rekommenderas MR inför bytet samt 3-12 månader efter, beroende av hur
inflammatoriskt aktiv sjukdomen bedömts vara innan terapibytet. Ett specialfall är byte från
natalizumab till annan terapi hos JCV-positiv patient, där utveckling av PML kan uppkomma
även efter att natalizumab-behandling avslutats, varvid undersökning med vigilans för PML
rekommenderas 3 och 6 månader efter terapibytet.
•
Under pågående behandling med natalizumab hos JCV-positiv individ bör undersökning göras
mer frekvent för att eftersöka tidiga tecken till PML. Evidens för hur frekvent MR bör göras
saknas, men ett praktiskt förslag är att göra MR var 3:e till 6:e månad, utifrån individuell
riskvärdering. Inklusion även av DWI vid MR-kontroll kan öka sensitiviteten ytterligare för PML.
Långsiktig MR-uppföljning
MR var 12:e månad, kan på sikt glesas ut till var 18-24:e månad om stabilt förlopp
Andra MR-kontroll
MR 6-12 månader efter föregående
Första MR-kontroll
MR 3-6 månader efter diagnos
Utredning av misstänkt neuroinflammation
MR baseline

När kan undersökningarna begränsas eller MR-uppföljningen avslutas vid MS?
Den med MR detekterbara fokala inflammatoriska aktiviteten vid MS är som högst mellan cirka 20 och
40 års ålder, vilket också är det åldersintervall inom vilket de flesta debuterar med första kliniska
symtom. Den inflammatoriska aktiviteten som kan detekteras med MR går sedan generellt ned med
stigande ålder men kan ibland förekomma även i högre ålder. Det saknas tyvärr vetenskapliga studier
som kan slå fast när MR-uppföljning kan trappas ut eller avslutas. Nedanstående förslag och exempel
är baserade på klinisk erfarenhet.
Som regel bör patienter med inflammatoriskt aktiv MS och/eller pågående sjukdomsmodulerande
behandling  följas med upprepade MR. Individuell riskfaktorvärdering kan motivera såväl högre som
lägre frekvens av undersökningar och förnyad riskfaktorvärdering bör göras om förutsättningar ändras,
t.ex. vid tillkomst av sjukdomsaktivitet. Faktorer som bör vägas in är förloppstyp, ålder, samt tidigare
och aktuell klinisk och radiologisk inflammatorisk sjukdomsaktivitet.
Exempel på situationer som kan motivera lägre frekvens av MR inkluderar:
•
MS som varit skovfri och radiologiskt stabil under uppföljning utan någon terapiändring och
där prognosen bedöms vara gynnsam.
•
RIS eller CIS som varit kliniskt och radiologiskt stabil under en uppföljning om 3-5 år utan
immunomodulerande behandling.
Exempel på situationer där avslut av MR-uppföljningen kan övervägas inkluderar situationerna nedan.
Innan MR-monitorering avslutas bör ett noggrant individuellt riskavvägande göras.
•
MS i högre ålder (>55-60 år) som varit skovfri och radiologiskt stabil utan immunomodulerande
behandling under en längre tids uppföljning och där den individuella kliniska riskbedömningen
är gynnsam.
•
RIS eller CIS som varit skovfri och radiologiskt stabil under en längre tids uppföljning utan
immunomodulerande behandling.`
    },
    {
      rubrik: 'När kan MR-uppföljningen begränsas eller avslutas?',
      text: `När kan undersökningarna begränsas eller MR-uppföljningen avslutas vid MS?
Den med MR detekterbara fokala inflammatoriska aktiviteten vid MS är som högst mellan cirka 20 och
40 års ålder, vilket också är det åldersintervall inom vilket de flesta debuterar med första kliniska
symtom. Den inflammatoriska aktiviteten som kan detekteras med MR går sedan generellt ned med
stigande ålder men kan ibland förekomma även i högre ålder. Det saknas tyvärr vetenskapliga studier
som kan slå fast när MR-uppföljning kan trappas ut eller avslutas. Nedanstående förslag och exempel
är baserade på klinisk erfarenhet.
Som regel bör patienter med inflammatoriskt aktiv MS och/eller pågående sjukdomsmodulerande
behandling  följas med upprepade MR. Individuell riskfaktorvärdering kan motivera såväl högre som
lägre frekvens av undersökningar och förnyad riskfaktorvärdering bör göras om förutsättningar ändras,
t.ex. vid tillkomst av sjukdomsaktivitet. Faktorer som bör vägas in är förloppstyp, ålder, samt tidigare
och aktuell klinisk och radiologisk inflammatorisk sjukdomsaktivitet.
Exempel på situationer som kan motivera lägre frekvens av MR inkluderar:
•
MS som varit skovfri och radiologiskt stabil under uppföljning utan någon terapiändring och
där prognosen bedöms vara gynnsam.
•
RIS eller CIS som varit kliniskt och radiologiskt stabil under en uppföljning om 3-5 år utan
immunomodulerande behandling.
Exempel på situationer där avslut av MR-uppföljningen kan övervägas inkluderar situationerna nedan.
Innan MR-monitorering avslutas bör ett noggrant individuellt riskavvägande göras.
•
MS i högre ålder (>55-60 år) som varit skovfri och radiologiskt stabil utan immunomodulerande
behandling under en längre tids uppföljning och där den individuella kliniska riskbedömningen
är gynnsam.
•
RIS eller CIS som varit skovfri och radiologiskt stabil under en längre tids uppföljning utan
immunomodulerande behandling.`
    },
    {
      rubrik: 'Remisstext och remissvar – rekommenderat innehåll',
      text: `Vad bör remisstext och remissvar innehålla?
Remisstext och remissvar är centrala kommunikationsverktyg i samarbetet mellan neurolog, radiolog
och övrig MR-personal. Nedan framgår exempel på information som är av vikt i kommunikationen vid
diagnostisk utredning samt kontroll av patient med känd neuroinflammation. Delar av informationen
i remisstexten kan med fördel inhämtas via andra sätt utifrån lokala rutiner, t.ex. genom frågeformulär
som patienten tar med till undersökning eller skickar in i förväg eller genom att uppgifter automatiskt
överförs mellan journalsystem.

Utredningsundersökning
Kontrollundersökning
Remisstext
Syftet med texten är att förmedla den information
som radiolog och omhändertagande personal
behöver för att kunna prioritera och planera
undersökningen samt att ge korrekt sammanhang för
radiologen att tolka undersökningen inom.

Viktig information i remisstexten inkluderar:
•
Kliniska symtom och under vilken tidsrymd
de utvecklats
•
Kliniska differentialdiagnoser
•
Önskad tidpunkt för undersökningen
•
Vilka delar av CNS som är aktuella att
undersöka
•
Komorbiditet
•
Särskilda behov: svårt rörelsehandikapp,
klaustrofobi, tolkbehov, lång resväg
•
Aktuellt kreatininvärde
•
Ev. känd kontrastmedelsallergi
Syftet med texten är att förmedla aktuellt läge
avseende sjukdomen samt beskriva ev. ny klinisk
information. Vid kliniskt stabil sjukdom utan
komplicerande faktorer hos patient som är känd
sedan tidigare kan remisstexten vara mycket
kortfattad.

Viktig information i remisstexten inkluderar:
•
Diagnos: MS/CIS/RIS/NMOSD/MOGAD, etc.
•
Kliniska tecken till sjukdomsaktivitet
•
Pågående behandling
•
Önskad tidpunkt för undersökningen
•
Vilka delar av CNS som är aktuella att
undersöka
•
Om tecken till PML särskilt bör eftersökas
•
Särskilda behov: svårt rörelsehandikapp,
klaustrofobi, tolkbehov.
•
Aktuellt kreatininvärde
•
Ev. känd kontrastmedelsallergi
Remissvar
Syftet med texten är att förmedla den radiologiska
information som neurologen behöver för att planera
den fortsatta handläggningen samt ställa eller avstå
från att ställa MS-diagnos.

Viktig information i remissvaret* inkluderar:
•
Vilka delar av CNS som undersökts och
huruvida kontrastmedel getts
•
Ev. tekniska problem med undersökningen
som påverkar tolkningen
•
Beskrivning av undersökningsfynd och vilka
differentialdiagnoser som är aktuella utifrån
radiologisk bild
•
Om det finns lesioner av demyeliniserande
utseende bör antal, lokal och ungefärlig
storleksfördelning av dessa anges.
•
Föreligger kontrastladdande lesioner? Antal?
•
Uppfylls radiologiskt McDonaldkriterierna
avseende spridning i tid och rum?
Syftet med texten är att förmedla den radiologiska
information som neurologen behöver för att planera
den fortsatta handläggningen.

Viktig information i remissvaret* inkluderar:
•
Vilka delar av CNS som undersökts och
huruvida kontrastmedel getts
•
Ev. tekniska problem med undersökningen
som påverkar tolkningen
•
Om något i bilden förändrats jämfört tidigare
undersökningar, ange datum för den eller de
tidigare undersökning(ar) som använts för
jämförelse
•
Beskrivning av antal, lokal och ungefärlig
storleksfördelning av ev. nytillkomna lesioner
Föreligger kontrastladdande lesioner? Antal?
Tabell 3. Rekommenderat innehåll i remisstext och remissvar`
    },
    {
      rubrik: 'Svarsmallar (MR hjärna neuroinflammation, MS-rutinkontroll, MR rygg)',
      text: `Svarsmallar
MR HJÄRNA NEUROINFLAMMATION
MR hjärna [utan|utan och med] i.v. kontrastmedel på [1,5 Tesla|3 Tesla|7 Tesla]

Föregående MR-undersökning: [Ingen tidigare undersökning för jämförelse|datum, utförare, utförd på X Tesla]
Antal lesioner i hjärnan: [0|1-9|10-20|>20]
Lokalisation:
- Periventrikulärt: [Ja|Nej]
- Infratentoriellt: [Ja|Nej] (kommentera särskilt ev. engagemang av area postrema och periakveduktal grå substans)
- Juxtakortikalt/kortikalt: [Ja|Nej]
- Synnerv: [Ja|Nej] (kommentera lokalisation, om mer än halva synervens längd och/eller chiasma är engagerad)
- Ryggmärg (om undersökt): [-|Ja|Nej] (kommentera särskilt ev. långsträckta förändringar, 3+ kotkroppssegment)
Antal nytillkomna/tydligt förstorade lesioner i hjärna: [Ingen tidigare undersökning|antal, lokalisation]
Antal kontrastladdande lesioner i hjärna: [Kontrast ej given|antal, lokalisation]
Antal lesioner med central venol: [0|1-5|≥6] (minst 6 lesioner krävs)
Antal lesioner med paramagnetisk ring: [0|≥1] (minst 1 lesion krävs)
Uppfyllelse av de radiologiska McDonald-kriterierna:
- Spridning i rum: [Ja|Nej]
- Spridning i tid: [Ja|Nej]
BEDÖMNING:
(Är bilden förenlig med MS eller finns det skäl att överväga exempelvis ADEM, NMOSD eller MOG-antikroppsmedierad
sjukdom med tanke på kommentarer enligt ovan?). OBS: Denna mall ska enbart användas när fynden talar för
neuroinflammation.

MR HJÄRNA MS RUTINKONTROLL
MR hjärna [utan|med] i.v. kontrastmedel på [1,5 Tesla|3 Tesla|7 Tesla]
Föregående MR-undersökning: [datum, utförare, utförd på X Tesla]
Antal nytillkomna/tydligt förstorade lesioner i hjärna: [Ingen tidigare undersökning|antal, lokalisation]
Antal kontrastladdande lesioner i hjärna: [Kontrast ej given|antal, lokalisation]
Brain Parenhymal Fraction: [Ej tillgänglig|mätvärde i %] (om tillgängligt)
BEDÖMNING:
[Inga nytillkomna lesioner.|Nya lesioner enligt ovan.]

MR RYGG NEUROINFLAMMATION
MR ryggmärg [utan|utan och med] i.v. kontrastmedel.

Föregående MR-undersökning: [Ingen tidigare undersökning för jämförelse|datum, utförare, utförd på X Tesla]

Antal lesioner i ryggmärgen: [antal, lokalisation]
Antal nytillkomna lesioner i ryggmärg: [Ingen tidigare undersökning för jämförelse|antal, lokalisation]
Antal kontrastladdande lesioner i ryggmärg: [Ingen tidigare undersökning för jämförelse|antal, lokalisation]
BEDÖMNING:
[Inga nytillkomna lesioner.|Nya lesioner enligt ovan.] (Kommentera särskilt ev. långsträckta förändringar, 3+
kotkroppssegment)
Remissmall
Diagnos:
Aktuell behandling:
Önskad tid för undersökning:
Särskilda behov: (t.ex. tolk, patientlyft, sedering)`
    },
    {
      rubrik: 'Remissmall',
      text: `MR RYGG NEUROINFLAMMATION
MR ryggmärg [utan|utan och med] i.v. kontrastmedel.

Föregående MR-undersökning: [Ingen tidigare undersökning för jämförelse|datum, utförare, utförd på X Tesla]

Antal lesioner i ryggmärgen: [antal, lokalisation]
Antal nytillkomna lesioner i ryggmärg: [Ingen tidigare undersökning för jämförelse|antal, lokalisation]
Antal kontrastladdande lesioner i ryggmärg: [Ingen tidigare undersökning för jämförelse|antal, lokalisation]
BEDÖMNING:
[Inga nytillkomna lesioner.|Nya lesioner enligt ovan.] (Kommentera särskilt ev. långsträckta förändringar, 3+
kotkroppssegment)
Remissmall
Diagnos:
Aktuell behandling:
Önskad tid för undersökning:
Särskilda behov: (t.ex. tolk, patientlyft, sedering)`
    },
    {
      rubrik: 'Appendix 1: Diagnostiska kriterier vid MS (McDonald 2024)',
      text: `Appendix 1: Diagnostiska kriterier vid MS
De senast reviderade diagnostiska kriterierna för MS, senaste versionen av de s.k. McDonald-
kriterierna, presenterades vid ECTRIMS 2024 och publicerades 2025.2 Liksom tidigare bygger
diagnostiken på påvisande av inflammatorisk sjukdomsaktivitet på olika lokaler i CNS (spridning i rum)
samt vid olika tidpunkter (spridning i tid). Kriterierna sammanfattas här nedan i Tabell 4.
Nytt i denna revision är att MS ej kan ställas enbart på klinisk grund, således krävs paraklinisk diagnostik
för att erhålla en MS-diagnos, företrädesvis med MR. I vissa fall utgör RIS numera MS, således är det
möjligt att erhålla MS-diagnos utan typiska MS-symtom.
Tabell 4. McDonaldkriterierna för spridning i tid och rum vid MR.
Spridning i rum
Lesioner på minst 2 av de 5 lokalerna:
•
Periventrikulärt
•
Juxtakortikalt/kortikalt
•
Infratentoriellt
•
Ryggmärg
•
Synnerv
Spridning i tid
Antingen:
•
Förekomst av både kontrastladdande
lesion(er) och icke-kontrastladdande
lesioner.
•
Nytillkommen/kontrastladdande
lesion vid uppföljande MR.
•
Påvisande av minst 6 lesioner med
central venol.
•
Påvisande av minst 1 lesion med
paramagnetisk ring.

Liksom tidigare kan även oligoklonala band ersätta klinisk/radiologisk spridning i tid. I tillägg kan nu
kFLC (Kappa Free Light Chain) alternativt användas istället för oligoklonala band.
Förutom radiologisk avbildning av synnerven kan även OCT (Optical Coherence Tomography) eller VEP
(Visual Evoked Potential) användas.`
    }
    ]
  },

  {
    id: 'hypogamma',
    titel: 'Handläggning av hypogammaglobulinemi och late-onset neutropeni vid anti-CD20',
    kategori: 'ms',
    pdf: 'riktlinjer/Handlaggning-av-hypogammaglobulinemi-och-late-onset-neutropeni.pdf',
    markdownUrl: 'riktlinjerMarkdown/Handlaggning-av-hypogammaglobulinemi-och-late-onset-neutropeni.md',
    graphicalAbstract: 'graphical_abstract_hypogamma.html',
    innehall: [
    {
      rubrik: 'Bakgrund – hypogammaglobulinemi vid anti-CD20-behandling',
      text: `Handläggning av hypogammaglobulinemi och late-onset neutropeni vid anti-CD20-behandling
Anders Svenningsson
Handläggning av hypogammaglobulinemi
och late-onset neutropeni vid anti-CD20-
behandling
Anti-CD20-behandling (rituximab, ocrelizumab, ofatumumab, ublituximab) leder till långvarig
B-cellsdepletion.  De är monoklonala antikroppar som riktar sig mot olika epitoper av CD20-
receptorn på B-lymfocyter från pre-B-celler till plasmablaster, men inte plasmaceller (1, 2).
Risken för infektioner är ökad vid anti-CD20-behandling jämfört med andra MS-behandlingar.
I den svenska prospektiva COMBAT- kohorten var hazardkvoten 1.7 för en
behandlingskrävande infektion för MS-patienter behandlade med rituximab jämfört med
interferon och glatirameracetat (3).  Det finns flera tänkbara faktorer som påverkar
infektionsbenägenhet vid anti-CD20-behandling: tidigare immunmodulerande behandling,
sekundär immunbrist (hypogammaglobulinemi, neutropeni, lymfopeni), försämrat vaccinsvar
samt aktivering av latenta infektioner (1, 4-6). Förutom läkemedelsbehandlingen
predisponerar hög ålder och hög EDSS-nivå för ökad risk att drabbas av
behandlingskrävande infektioner (7).
Hypogammaglobulinemi
I befolkningen är immunglobulinnivåer stabila från sena tonåren, ligger något högre hos
kvinnor och ökar långsamt med stigande ålder (8). Normalt intervall för immunglobulin G
(IgG) varierar lite mellan laboratorier men brukar anges till ca 7–15 g/L. Under en graviditet
sker en övergående sänkning av moderns immunglobulinnivåer på grund av ökad blodvolym
och aktiv transport till fostret under tredje trimestern (9).
Vid behandling med rituximab och ocrelizumab finns en dokumenterad risk för sjunkande
immunglobulinnivåer. I en metaanalys angavs att 11% av MS-patienter som fått anti-CD20-
behandling utvecklade hypogammaglobulinemi och att risken var något högre vid rituximab-
behandling än vid ocrelizumab och ofatumumab (6). I några studier var personer över 50 år
och de med lågt initialt IgG mer benägna att utveckla hypogammaglobulinemi (10, 11). Den
ökade infektionsbenägenheten vid anti-CD20-behandling förklaras bara delvis av sjunkande
immunglobulinnivåer (10). I en svensk kohort med rituximab-behandlade MS-patienter sjönk
IgG-nivån med 0,27 g/L per år och totalt sett var risken för hypogammaglobulinemi lägre
(8,8%) jämfört med tidigare studier, vilket kan bero på strategier med dosreduktion och längre
dosintervall (12). Det finns en betydande individuell variation i tid till återkomst av B-lymfocyter
efter behandling med rituximab. I COMBAT-kohorten var mediantiden 12 månader för att
återfå naiva B-lymfocyter och 16 månader för minnes-B-celler (13, 14).  Längre
doseringsintervall utifrån grad av B-cells depletion var i en studie associerat till mindre risk för
hypogammaglobulinemi (15).

Praktisk handläggning och strategier för att undvika sjunkande immunglobulinnivåer
under rituximab-behandling:
- För in värden under lab-fliken i SMSreg för att få överblick över trender i IgG-nivåer.

Handläggning av hypogammaglobulinemi och late-onset neutropeni vid anti-CD20-behandling
Anders Svenningsson
- Det viktigaste är att förebygga hypogammaglobulinemi vid snabbt sjunkande IgG-värden
samt vid upprepade infektioner genom dosreduktion/förlängt doseringsintervall. Studier och
erfarenhet har visat att risken för återkomst av inflammatorisk MS-aktivitet är låg även vid
utglesning av doser/dosminskning samt vid återkomst av B-celler innan nästa dos (14).
- Behandla med minsta effektiva dos. Preliminära data från RIDOSE-studien samt klinisk
erfarenhet indikerar att man i de flesta fall kan övergå till 500 mg årligen redan efter ett års
behandling med bibehållen effekt på skovfrekvens och bildningen av nya MR-lesioner.
 - Om IgG ändå sjunker med mer än 0,4 g/L per år eller om IgG sjunker under nedre
referensgränsen bör rituximabregimen modifieras ytterligare. I en ännu opublicerad
observationsstudie har man funnit att en långsam återkomst av B-celler är associerad med
snabbare sänkning av IgG (Kallin et al, opubl). Dessutom föreligger ett dos-
responsförhållande mellan given dos anti-CD20 antikroppar och repopulation av B-celler
(16). Dessa samband leder till att man kan överväga följande:
- Utglesning: Invänta stabilisering av IgG-nivåer samt återkomst av B-lymfocytnivå till ca
2%/0,04 x 109/L. Om tillgång till utvidgad B-lymfocytanalys, invänta återkomst av
mätbara nivåer av switchade minnes-B-celler (CD27+IgD-IgM-).
- Dosreduktion: Om det tar lång tid för B-celler att återkomma (≥ 18 månader) ges
lämpligen en reducerad dos, men först vid konstaterad repopulation enligt ovan (t ex
100 mg rituximab).
- Utsättning: Överväg utsättning av behandling vid infektionsproblematik, ålder över 50
år eller högre EDSS.

Strategier för att minska risken för infektioner
- Genomför vaccinationer innan patienten börjar med anti-B-cells behandling. Se SMSS
rekommendationer rörande vaccinationer.
- Infektionsanamnes rörande långvariga, frekventa eller atypiska infektioner. Kontrollera att
patienten inte har någon Ig-brist innan start av behandling. Om något av detta föreligger bör
man överväga annan behandling än anti-B-cells behandling.
- Ge råd om handhygien och att hålla avstånd till infekterade personer.
- Följ IgG inför varje infusion och tätare om tendens till att IgG sjunker snabbt.

Åtgärder vid frekventa bakteriella infektioner (framför allt sinuiter, otiter, pneumonier,
buk/gyn infektioner), eller svåra infektioner (sepsis, pneumonier, bukabscesser,
encefaliter) med eller utan hypogammaglobulinemi
- Avsluta anti-CD20 behandlingen`
    },
    {
      rubrik: 'Praktisk handläggning – strategier för att undvika sjunkande IgG',
      text: `Handläggning av hypogammaglobulinemi och late-onset neutropeni vid anti-CD20-behandling
Anders Svenningsson
- Det viktigaste är att förebygga hypogammaglobulinemi vid snabbt sjunkande IgG-värden
samt vid upprepade infektioner genom dosreduktion/förlängt doseringsintervall. Studier och
erfarenhet har visat att risken för återkomst av inflammatorisk MS-aktivitet är låg även vid
utglesning av doser/dosminskning samt vid återkomst av B-celler innan nästa dos (14).
- Behandla med minsta effektiva dos. Preliminära data från RIDOSE-studien samt klinisk
erfarenhet indikerar att man i de flesta fall kan övergå till 500 mg årligen redan efter ett års
behandling med bibehållen effekt på skovfrekvens och bildningen av nya MR-lesioner.
 - Om IgG ändå sjunker med mer än 0,4 g/L per år eller om IgG sjunker under nedre
referensgränsen bör rituximabregimen modifieras ytterligare. I en ännu opublicerad
observationsstudie har man funnit att en långsam återkomst av B-celler är associerad med
snabbare sänkning av IgG (Kallin et al, opubl). Dessutom föreligger ett dos-
responsförhållande mellan given dos anti-CD20 antikroppar och repopulation av B-celler
(16). Dessa samband leder till att man kan överväga följande:
- Utglesning: Invänta stabilisering av IgG-nivåer samt återkomst av B-lymfocytnivå till ca
2%/0,04 x 109/L. Om tillgång till utvidgad B-lymfocytanalys, invänta återkomst av
mätbara nivåer av switchade minnes-B-celler (CD27+IgD-IgM-).
- Dosreduktion: Om det tar lång tid för B-celler att återkomma (≥ 18 månader) ges
lämpligen en reducerad dos, men först vid konstaterad repopulation enligt ovan (t ex
100 mg rituximab).
- Utsättning: Överväg utsättning av behandling vid infektionsproblematik, ålder över 50
år eller högre EDSS.

Strategier för att minska risken för infektioner
- Genomför vaccinationer innan patienten börjar med anti-B-cells behandling. Se SMSS
rekommendationer rörande vaccinationer.
- Infektionsanamnes rörande långvariga, frekventa eller atypiska infektioner. Kontrollera att
patienten inte har någon Ig-brist innan start av behandling. Om något av detta föreligger bör
man överväga annan behandling än anti-B-cells behandling.
- Ge råd om handhygien och att hålla avstånd till infekterade personer.
- Följ IgG inför varje infusion och tätare om tendens till att IgG sjunker snabbt.

Åtgärder vid frekventa bakteriella infektioner (framför allt sinuiter, otiter, pneumonier,
buk/gyn infektioner), eller svåra infektioner (sepsis, pneumonier, bukabscesser,
encefaliter) med eller utan hypogammaglobulinemi
- Avsluta anti-CD20 behandlingen`
    },
    {
      rubrik: 'Strategier för att minska infektionsrisk',
      text: `Handläggning av hypogammaglobulinemi och late-onset neutropeni vid anti-CD20-behandling
Anders Svenningsson
- Det viktigaste är att förebygga hypogammaglobulinemi vid snabbt sjunkande IgG-värden
samt vid upprepade infektioner genom dosreduktion/förlängt doseringsintervall. Studier och
erfarenhet har visat att risken för återkomst av inflammatorisk MS-aktivitet är låg även vid
utglesning av doser/dosminskning samt vid återkomst av B-celler innan nästa dos (14).
- Behandla med minsta effektiva dos. Preliminära data från RIDOSE-studien samt klinisk
erfarenhet indikerar att man i de flesta fall kan övergå till 500 mg årligen redan efter ett års
behandling med bibehållen effekt på skovfrekvens och bildningen av nya MR-lesioner.
 - Om IgG ändå sjunker med mer än 0,4 g/L per år eller om IgG sjunker under nedre
referensgränsen bör rituximabregimen modifieras ytterligare. I en ännu opublicerad
observationsstudie har man funnit att en långsam återkomst av B-celler är associerad med
snabbare sänkning av IgG (Kallin et al, opubl). Dessutom föreligger ett dos-
responsförhållande mellan given dos anti-CD20 antikroppar och repopulation av B-celler
(16). Dessa samband leder till att man kan överväga följande:
- Utglesning: Invänta stabilisering av IgG-nivåer samt återkomst av B-lymfocytnivå till ca
2%/0,04 x 109/L. Om tillgång till utvidgad B-lymfocytanalys, invänta återkomst av
mätbara nivåer av switchade minnes-B-celler (CD27+IgD-IgM-).
- Dosreduktion: Om det tar lång tid för B-celler att återkomma (≥ 18 månader) ges
lämpligen en reducerad dos, men först vid konstaterad repopulation enligt ovan (t ex
100 mg rituximab).
- Utsättning: Överväg utsättning av behandling vid infektionsproblematik, ålder över 50
år eller högre EDSS.

Strategier för att minska risken för infektioner
- Genomför vaccinationer innan patienten börjar med anti-B-cells behandling. Se SMSS
rekommendationer rörande vaccinationer.
- Infektionsanamnes rörande långvariga, frekventa eller atypiska infektioner. Kontrollera att
patienten inte har någon Ig-brist innan start av behandling. Om något av detta föreligger bör
man överväga annan behandling än anti-B-cells behandling.
- Ge råd om handhygien och att hålla avstånd till infekterade personer.
- Följ IgG inför varje infusion och tätare om tendens till att IgG sjunker snabbt.

Åtgärder vid frekventa bakteriella infektioner (framför allt sinuiter, otiter, pneumonier,
buk/gyn infektioner), eller svåra infektioner (sepsis, pneumonier, bukabscesser,
encefaliter) med eller utan hypogammaglobulinemi
- Avsluta anti-CD20 behandlingen`
    },
    {
      rubrik: 'Åtgärder vid frekventa eller svåra infektioner',
      text: `Handläggning av hypogammaglobulinemi och late-onset neutropeni vid anti-CD20-behandling
Anders Svenningsson
- Överväg immunglobulinsubstitution: 100 mg/kg kroppsvikt/vecka, t ex IVIG 20-30 gram per
månad under 6-12 månader. Gör därefter uppehåll minst 6 månader och utvärdera effekt på
infektionsbenägenhet. Om infektionsbenägenheten kvarstår trots att Ig-substitution givit god
effekt på IgG nivån, kvarstår troligen behov av varaktig Ig-substitution som då i första hand
bör ges subkutant.

Vid svår hypogammaglobulinemi (IgG <3,0 g/L) oavsett infektionsbenägenhet
- Avsluta anti-CD20 behandlingen (om inte detta är gjort redan)
- Samråd med immunbristenhet
- Intravenös eller subkutan immunglobulinsubstitution vid infektionsbenägenhet, eventuellt
förebyggande

Late-onset neutropeni (LON)
Late-onset neutropeni (LON) är en ovanlig biverkan till anti-CD20-behandling där
neutrofilvärdet sjunker under referensvärdet <1,5 x 109 minst en månad efter en dos anti-
CD20 läkemedel. LON finns beskrivet vid MS-behandling med rituximab, ocrelizumab,
uppskattningsvis 2-4% av patienterna, och i enstaka fall, ofatumumab (17-19). I den hittills
största publicerad kohorten omfattande 1850 patienter med rituximab-behandling vid MS eller
NMOSD beräknades incidensen av LON till 0,66 per 100 behandlingsår med en mediantid till
normalisering av neutrofilvärdet på 11 dagar (20). LON anses vara en effekt av
läkemedelsklassen anti-B-cellsterapier där några föreslagna mekanismer är anti-
neutrofilantikroppar, Fc-receptorpolymorfism samt reaktion på virusinfektioner (21). I studier
från reumatologin i samband med rituximab-behandling var mediantiden till LON ca 40-100
dagar efter dos (21, 22), risken var något större under det första behandlingsåret, och risken
för återkomst av neutropeni vid ny anti-CD20-behandling (rechallenge) var ca 20% (23).
LON är ofta mild och självbegränsande. I ovanligare fall med svår neutropeni kan
behandlingskrävande infektioner som neutropen feber och sepsis uppkomma med behov av
sjukhusvård, antibiotikabehandling och behandling med G-CSF (granulocyt-
kolonistimulerande faktor) (24). Det finns dock enstaka fallrapporter där G-CSF har orsakat
MS-skov (25, 26).
Nedan förslag på monitorering och åtgärder vid olika grader av LON är inte evidensbaserade
men kan tjäna som underlag vid individuella ställningstaganden.
Monitorering av late-onset neutropeni:

Patienten skall informeras om tillståndet och att söka akut vid tecken på allvarlig
infektion med hög feber och allmänpåverkan. Diagnostik via provtagning med
blodstatus inklusive ”differentialräkning”.

Vid lindrig neutropeni (1,0-1,5 x 109): Anti-CD20-behandling kan ofta fortsätta efter
samråd med patienten. Ingen ytterligare specifik provtagning indicerad.`
    },
    {
      rubrik: 'Late-onset neutropeni (LON) – monitorering och åtgärder',
      text: `Handläggning av hypogammaglobulinemi och late-onset neutropeni vid anti-CD20-behandling
Anders Svenningsson
- Överväg immunglobulinsubstitution: 100 mg/kg kroppsvikt/vecka, t ex IVIG 20-30 gram per
månad under 6-12 månader. Gör därefter uppehåll minst 6 månader och utvärdera effekt på
infektionsbenägenhet. Om infektionsbenägenheten kvarstår trots att Ig-substitution givit god
effekt på IgG nivån, kvarstår troligen behov av varaktig Ig-substitution som då i första hand
bör ges subkutant.

Vid svår hypogammaglobulinemi (IgG <3,0 g/L) oavsett infektionsbenägenhet
- Avsluta anti-CD20 behandlingen (om inte detta är gjort redan)
- Samråd med immunbristenhet
- Intravenös eller subkutan immunglobulinsubstitution vid infektionsbenägenhet, eventuellt
förebyggande

Late-onset neutropeni (LON)
Late-onset neutropeni (LON) är en ovanlig biverkan till anti-CD20-behandling där
neutrofilvärdet sjunker under referensvärdet <1,5 x 109 minst en månad efter en dos anti-
CD20 läkemedel. LON finns beskrivet vid MS-behandling med rituximab, ocrelizumab,
uppskattningsvis 2-4% av patienterna, och i enstaka fall, ofatumumab (17-19). I den hittills
största publicerad kohorten omfattande 1850 patienter med rituximab-behandling vid MS eller
NMOSD beräknades incidensen av LON till 0,66 per 100 behandlingsår med en mediantid till
normalisering av neutrofilvärdet på 11 dagar (20). LON anses vara en effekt av
läkemedelsklassen anti-B-cellsterapier där några föreslagna mekanismer är anti-
neutrofilantikroppar, Fc-receptorpolymorfism samt reaktion på virusinfektioner (21). I studier
från reumatologin i samband med rituximab-behandling var mediantiden till LON ca 40-100
dagar efter dos (21, 22), risken var något större under det första behandlingsåret, och risken
för återkomst av neutropeni vid ny anti-CD20-behandling (rechallenge) var ca 20% (23).
LON är ofta mild och självbegränsande. I ovanligare fall med svår neutropeni kan
behandlingskrävande infektioner som neutropen feber och sepsis uppkomma med behov av
sjukhusvård, antibiotikabehandling och behandling med G-CSF (granulocyt-
kolonistimulerande faktor) (24). Det finns dock enstaka fallrapporter där G-CSF har orsakat
MS-skov (25, 26).
Nedan förslag på monitorering och åtgärder vid olika grader av LON är inte evidensbaserade
men kan tjäna som underlag vid individuella ställningstaganden.
Monitorering av late-onset neutropeni:

Patienten skall informeras om tillståndet och att söka akut vid tecken på allvarlig
infektion med hög feber och allmänpåverkan. Diagnostik via provtagning med
blodstatus inklusive ”differentialräkning”.

Vid lindrig neutropeni (1,0-1,5 x 109): Anti-CD20-behandling kan ofta fortsätta efter
samråd med patienten. Ingen ytterligare specifik provtagning indicerad.

Handläggning av hypogammaglobulinemi och late-onset neutropeni vid anti-CD20-behandling
Anders Svenningsson

Vid måttlig neutropeni (0,5-1,0 x 109): Monitorera förloppet med nya neutrofilvärden
veckovis till normalisering, informera patienten att söka sjukvård vid
infektionssymptom. Fortsatt behandling inte kontraindicerad men alternativ bör
övervägas.

Vid svår neutropeni (<0,5 x 109): Konsultera infektionsläkare, utredning vid
akutsjukhus med relevant provtagning för antibiotika och ställningstagande till G-CSF.
Vidare behandling med anti-CD20 terapi bör undvikas.

Referenser:
1. Carlson AK, Amin M, Cohen JA. Drugs Targeting CD20 in Multiple Sclerosis: Pharmacology,
Efficacy, Safety, and Tolerability. Drugs. 2024;84(3):285-304.
2. Cotchett KR, Dittel BN, Obeidat AZ. Comparison of the Efficacy and Safety of Anti-CD20 B Cells
Depleting Drugs in Multiple Sclerosis. Mult Scler Relat Disord. 2021;49:102787.
3. Luna G, Alping P, Burman J, Fink K, Fogdell-Hahn A, Gunnarsson M, et al. Infection Risks Among
Patients With Multiple Sclerosis Treated With Fingolimod, Natalizumab, Rituximab, and Injectable
Therapies. JAMA Neurol. 2020;77(2):184-91.
4. Alvarez E, Longbrake EE, Rammohan KW, Stankiewicz J, Hersh CM. Secondary
hypogammaglobulinemia in patients with multiple sclerosis on anti-CD20 therapy: Pathogenesis, risk
of infection, and disease management. Mult Scler Relat Disord. 2023;79:105009.
5. Athni TS, Barmettler S. Hypogammaglobulinemia, late-onset neutropenia, and infections following
rituximab. Ann Allergy Asthma Immunol. 2023;130(6):699-712.
6. Elgenidy A, Abdelhalim NN, Al-Kurdi MA, Mohamed LA, Ghoneim MM, Fathy AW, et al.
Hypogammaglobulinemia and infections in patients with multiple sclerosis treated with anti-CD20
treatments: a systematic review and meta-analysis of 19,139 multiple sclerosis patients. Front Neurol.
2024;15:1380654.
7. Hu Y, Frisell T, Alping P, Song H, Pawitan Y, Fang F, et al. Hospital-Treated Infections and Risk of
Disability Worsening in Multiple Sclerosis. Ann Neurol. 2024;96(4):694-703.
8. Gonzalez-Quintela A, Alende R, Gude F, Campos J, Rey J, Meijide LM, et al. Serum levels of
immunoglobulins (IgG, IgA, IgM) in a general adult population and their relationship with alcohol
consumption, smoking and common metabolic abnormalities. Clin Exp Immunol. 2008;151(1):42-50.
9. Zhang T, Hu Y, Xiang Z. Changes of serum immunoglobulin level in healthy pregnant women and
establishment of its reference interval. Zhong Nan Da Xue Xue Bao Yi Xue Ban. 2021;46(1):53-9.
10. Mears V, Jakubecz C, Seeco C, Woodson S, Serra A, Abboud H. Predictors of
hypogammaglobulinemia and serious infections among patients receiving ocrelizumab or rituximab for
treatment of MS and NMOSD. J Neuroimmunol. 2023;377:578066.
11. Perriguey M, Maarouf A, Stellmann JP, Rico A, Boutiere C, Demortiere S, et al.
Hypogammaglobulinemia and Infections in Patients With Multiple Sclerosis Treated With Rituximab.
Neurol Neuroimmunol Neuroinflamm. 2022;9(1).
12. Hallberg S, Evertsson B, Lillvall E, Boremalm M, de Flon P, Wang Y, et al.
Hypogammaglobulinaemia during rituximab treatment in multiple sclerosis: A Swedish cohort study.
Eur J Neurol. 2024:e16331.
13. Ellwardt E, Ellwardt L, Bittner S, Zipp F. Monitoring B-cell repopulation after depletion therapy in
neurologic patients. Neurol Neuroimmunol Neuroinflamm. 2018;5(4):e463.
14. Starvaggi Cucuzza C, Longinetti E, Ruffin N, Evertsson B, Kockum I, Jagodic M, et al. Sustained
Low Relapse Rate With Highly Variable B-Cell Repopulation Dynamics With Extended Rituximab
Dosing Intervals in Multiple Sclerosis. Neurol Neuroimmunol Neuroinflamm. 2023;10(1).
15. Schuckmann A, Steffen F, Zipp F, Bittner S, Pape K. Impact of extended interval dosing of
ocrelizumab on immunoglobulin levels in multiple sclerosis. Med. 2023;4(6):361-72 e3.
16. Bar-Or A, Grove RA, Austin DJ, Tolson JM, VanMeter SA, Lewis EW, et al. Subcutaneous
ofatumumab in patients with relapsing-remitting multiple sclerosis: The MIRROR study. Neurology.
2018;90(20):e1805-e14.`
    }
    ]
  },

  {
    id: 'parkinson-riktlinjer',
    titel: 'Riktlinjer för utredning och behandling av Parkinsons sjukdom (v10, 2025)',
    kategori: 'parkinson',
    pdf: 'riktlinjer/Riktlinjer-for-utredning-och-behandling-av-Parkinsons-sjukdom-10-2025.pdf',
    markdownUrl: 'riktlinjerMarkdown/Riktlinjer-for-utredning-och-behandling-av-Parkinsons-sjukdom-10-2025.md',
    graphicalAbstract: 'graphical_abstract_parkinson.html',
    innehall: [
    {
      rubrik: 'IV. Definitioner, diagnostik och utredningsgång',
      text: `IV. 
Definitioner, diagnostik och utredningsgång 
vid Parkinsons sjukdom 
Definitioner 
Parkinsonism 
Skador och sjukdomar som påverkar dopaminnervcellernas funktion i de basala ganglierna ger upphov till 
karakteristiska symtom som bradykinesi (långsamma rörelser, avtagade amplitud och/eller frekvens vid 
upprepade rörelser), muskulär rigiditet (stelhet, otillräcklig relaxation), och tremor (skakningar). Varje lesion på 
dopaminsystemet, oavsett orsak eller mekanism, kan ge upphov till dessa och andra symtom – vilka med ett 
samlingsnamn ofta kallas parkinsonism (något som liknar PS). Ett 50-tal olika sjukdomar kan i någon fas av 
sjukdomen ge upphov till parkinsonism. Feldiagnostik är vanligt tidigt i förloppet, mellan 5 och 20 % (för 
respektive specialist och allmänläkare). 
Parkinsons sjukdom (G 20.9) 
Är en benämning på en progressiv neurodegenerativ sjukdomsprocess som ger upphov till en relativt typisk 
sjukdomsbild. Patienter bör meddelas att det är på sannolika grunder som diagnosen ställs initialt och att det är 
ett förlopp som måste följas innan klar diagnos kan fastställas. Diagnosen kan senare komma att behöva 
revideras. 
Sekundär parkinsonism (G 21) 
Är benämning på parkinsonism med känd annan mekanism än idiopatisk PS eller Parkinsonism med känd genetisk 
mekanism. Typexempel är: 
 
neuroleptikaframkallad parkinsonism (G 21.1), 
 
post-global ischemisk parkinsonism, kolmonoxid- eller cyanidframkallad parkinsonism (G 21.2), 
 
vaskulär parkinsonism (G 21.4), 
 
cerebral infarkt orsakad av icke specificerad stenos eller ocklusion i cerebrala artärer (lakun) (I 63.5), 
 
progressiv vaskulär leukoencefalopati (I 67.3), 
 
boxningsframkallad parkinsonism (G 21.8). 
 
Atypisk parkinsonism (tidigare benämning Parkinson plus) 
Är en beteckning på andra sjukdomar som ger parkinsonism plus andra neurologiska symtom och fynd där dessa 
inte är förenliga med diagnosen PS – därav beteckningen atypisk parkinsonism. Begreppet innefattar flera 
distinkta sjukdomar i basala ganglierna: 
 
progressiv supranukleär pares (ICD10 oftalmoplegi),PSP (G 23.1), 
 
multipel systematrofi – parkinsonistisk form, MSA-P (G23.2, tidigare benämnd striatonigral  
degeneration), 
 
multipel systematrofi – cerebellär form MSA-C (G 23.3, med tidigare beteckning  olivopontinocerebellär 
degeneration), 
 
annan specificerad sjukdom i basala ganglierna, till exempel kortikobasal degeneration (CBD) (G 23.8) 
eller MSA-A (tidigare Shy-Drager, G23.8), 
 
demens med Lewyinklusionskroppar, DLB (G 31.8), 
 
annan ospecificerad sjukdom i basala ganglierna (G 23.9). 
 
Att notera är att Multipel System Degeneration (G 90.3) avser multipla dysautonomier utan andra neurologiska 
symtom, s.k. Primary (Pure) Autonomic Failure (tidigare Bradbury-Egglestons syndrom). 
 
Diagnostik och utredning 
Diagnoskriterier 
För de större sjukdomsgrupperna med parkinsonism finns det definierade diagnoskriterier med inklusions- och 
exklusionskriterier och de senaste upplagorna finns under rubriken Bilaga I: Diagnoskriterier.   


Movement Disorder Society publicerade 2015 kliniska diagnoskriterier som i mycket bygger på de äldre 
varianterna för användning i kliniska studier (Postuma et al. 2015). Dessa kan också användas som klinisk 
praktisk vägledning till diagnos och tar till skillnad från tidigare kriterier även hänsyn till förekomst av 
ickemotoriska symtom efter en tids sjukdom. 
I diagnoskriterierna för PS finns det aspekter på ”progress” och ”stegvis utvecklande”, ”symtomduration”, 
”avsaknad av symtom under viss tidsperiod” och ”bestående dopaminverkande medicineringseffekt”. Detta 
innebär att diagnosen PS blir säkrare med kunskap om förlopp, utveckling över tid och efter observation av 
behandling. Det är en vanlig missuppfattning att symtom som lindras av ett behandlingsförsök med 
dopaminverkande medicinering är liktydigt med att symtomen orsakas av PS. Patienter med atypiska 
parkinsonistiska tillstånd får ibland betydande symtomlindring av medicinering men effekterna avtar vanligen 
mer eller mindre snabbt. 
Sjukdomsprocesserna som orsakar PS är okända, men det är mycket sannolikt att de pågår flera år före debut av 
för patienter uppenbara symtom. Denna fas kan föreligga under flera år, och benämns prodromal fas, där 
enstaka symtom kan föreligga utan att det är möjligt att fastställa en diagnos. Kriterier för denna fas har tagits 
fram och används i forskningssammanhang för att beräkna risker för sjukdomsmanifestation, men dessa skall inte 
förväxlas med diagnoskriterier då de endast kan indikera sjukdomsutveckling.  
 
Sammanfattning av typiska symtom/statusfynd vid Parkinsons sjukdom 
Hypokinesi (rörelsefattighet) /bradykinesi (förlångsammade rörelser) 
Observera att förlust av amplitud och frekvens vid repetitiva rörelser (bradykinesi) är ett 
obligat symtom 
Vilotremor (tremor som finns när handen vilar i knäet eller hänger fritt vid gång och 
som försvinner/reduceras då aktiva rörelser utförs med handen) 
Rigiditet (otillräcklig muskulär agonist/antagonistrelaxation vid passiv rörelse, lika i 
hela rörelseomfånget) 
Unilateral symtomdebut 
 
Omvärdering av diagnosen bör ske regelbundet och diagnosen kan komma att behöva revideras. Tidigt i 
förloppet är symtomen ofta intermittenta och kan aggraveras tillfälligt vid uttröttning, annan sjukdom eller 
infektion och därför kopplas ofta symtomdebuten till denna händelse eller episod. Emellertid finns det goda 
grunder att tro att sjukdomen redan pågått flera år innan klinisk motorisk symtomdebut. 
 
Klinisk undersökning 
Statusfynd, till en början enstaka 
unilaterala och intermittenta, 
efterhand mer generella och konstanta 
Allmän rörelseförmåga: mimik, 
blinkfrekvens, tal, hållning, 
alternerande  rörelser 
(pronation/supination, fingertapping, 
fotstamp), skrivtest. 
Generellt få och långsamma rörelser, hypomimi, 
nedsatt blinkfrekvens, hypofont tal, flekterad 
hållning, successivt tilltagande förlångsamning 
och upphakningar vid alternerande rörelser, 
mikrografi. 
Uppresning från stol, gång: hastighet, 
medrörelser, steglängd, hållning. 
Svårigheter att resa sig, igångsättnings- 
svårigheter, långsam gång med korta 
hasande steg, nedsatta medrörelser, 
flexionshållning. 
Tremoranalys i vila, med 
framsträckta  armar och vid rörelse 
(finger-nästest). 
Vilotremor frekvens 4-6 Hz (som minskar eller 
försvinner vid aktiv volontär rörelse). 
Muskeltonus. 
Rigiditet med eller utan kugghjulsfenomen. 
Balansfunktion: Romberg, ”pull-test” 
(balansprovokation). 
Intakt Romberg och eventuellt nedsatta 
skyddsreflexer vid ”pull-test”. 


”Red flags”, faktorer som talar emot diagnos Parkinsons sjukdom (markering 
med * utgör absoluta uteslutningskriterier enl MDS kliniska kriterier 2015) 
• Bristande svar på adekvat dopaminverkande behandling 
• Snabb progress 
• Cerebellär påverkan* 
• Tidig falltendens 
• Tidig svår ortostatism (första fem åren) 
• Anterocollis (under första 10 åren) 
• Reflexstegring 
• Uttalad urogenital dysautonomi (inkontinens, blåspares första fem åren) 
• Symmetrisk symtomdebut 
• Tidig demens 
• Kortikala bortfallssymtom: afasi, apraxi, neglekt, kortikal sensorisk defekt* 
• Tidig hallucinos 
• Blandad dysartri (hypokinetisk, spastisk, cerebellär) 
• Uttalad dysfagi första fem åren 
• Vertikal blickpares* 
• Stridorös andning 
• Avsaknad av typiska ickemotoriska symtom trots 5 års sjukdom (måttlig 
kardiovaskulär, enteral  eller urogenital dysautonomi, hyposmi, sömnstörning, 
kognitiv/affektiv påverkan) 
 
 
 


Undersökningsfynd 
CSF protein 
MR 
SPECT/PET 
Låg betaamyloid-halt:  
Talar för Alzheimer profil 
 
Hög neurofilament, NFL: 
Förekommer vid 
Alzheimer, PSP, MSA och 
annan hjärnskada 
 
Hög Tau och/eller fosfoTau: 
Förekommer vid PSP och 
CBD 
 
Positiv Synuclein 
seeding 
amplification assay 
(SAA):  
Ännu inte klart 
med specificitet 
och sensitivitet för 
PS, gentemot MSA, 
och DLB. 
I tidig fas finns inga säkra 
MR fynd som entydigt kan 
skilja PS från MSA, PSP, 
CBD eller DLB, och 
Alzheimers. 
 
I mer avancerade faser 
finns för MSA typiska fynd 
(cerebellär atrofi, striatal 
glios och hypointensitet) i 
basala ganglielesioner. 
 
Vid PSP förekommer atrofi 
av pons/mesencefalon 
(kolibritecken) och 
cerebellum. 
Kan påvisa nedsatt mängd dopamin-
nervterminaler. Kan användas för att 
differentiera parkinsonistisk tremor 
från essentiell  tremor respektive 
dyston tremor. 
 
Kan inte differentiera mellan olika 
diagnoser med dopaminbrist (PS, 
MSA, PSP, CBD, LBD). Vid 
läkemedelsutlöst parkinsonism är 
upptaget normalt, men vid känd 
läkemedelsexponering kan 
underliggande degeneration av 
dopaminneuron påvisas. 
 
MIBG – noradrenerg innervering av 
hjärtat har använts för att skilja 
MSA från PS i framskridet skede, 
men värdet är osäkert i tidig fas. 
 
FDG-PET - Metoden ger indirekt 
information om mönster av blodflöde 
och metabolism i hjärnan. Det finns 
begränsad vetenskaplig  evidens för 
att metoden kan skilja PS från olika 
former av atypisk Parkinsonism med 
hög sensitivitet och specificitet, men 
automatiserade algoritmer är inte  
allmänt använda och 
reproducerbarhet av visuella 
bedömningar är oklar. 
rCBF 
Sonogram 
Neuropsykologi 
Bild typisk för Alzheimers 
sjukdom, skiljer sig från PS 
Järninlagring i substantia 
nigra. 
Individberoende metod, 
inga mätvärden som kan 
standadiseras. 
Reproducerbarhet, 
specificitet och sensitivitet 
är oklara. 
Parkinsonrelaterad demens – 
påverkad visuospatial funktion. 
Förlångsamning 
Påverkat klocktest  
Bevarat minne, och språk 
 
Utredningsgång/diagnostik/tidpunkt/var/vem? 
Diagnostiken av basalgangliesjukdomar är till stor del klinisk – igenkännande och påvisande av symtom– brady-
/hypokinesi, rigiditet eller vilotremor och bör leda till vidare undersökning med avseende på ytterligare symtom 
och orsaksfaktorer. Patienterna bör undersökas upprepade gånger, dels med avseende på progress (om 
progressen inte är uppenbart typisk från anamnes), dels efter behandlingsförsök, med uppföljning av 
effekter.När parkinsonism konstateras eller misstänks bör patienten bedömas av läkare med erfarenhet av PS. 
Fullständigt neurologiskt status skall göras och anamnes inhämtas för att identifiera parkinsonism och 
exklusionskriteriefynd, samt stödjande och motsägande faktorer, för PS. 
Inga enskilda undersökningar eller laboratorieprover kan entydigt fastställa PS. Flera undersökningar görs främst 
för att utesluta andra tillstånd. 


MR bör enligt nationella riktlinjer användas för att utesluta strukturell sekundär parkinsonism (prioritet 4, 
PD4)  
 
Ett flertal MR-protokoll har föreslagits ge diagnostisk information avseende andra parkinsonistiska tillstånd men 
inget möter idag upp till EBM-krav på att i tidigt förlopp kunna identifiera PS i relation till andra tillstånd. 
Ultraljudsbestämning av ekogenicitet i mellanhjärnan är en teknik under utveckling men som inte har validerats 
fullt ut. Enligt en nyligen genomförd EBM litteraturgenomgång finns det fortsatt inte underlag för att inkludera 
metoden i rutinklinik och metoden räcker ännu inte för att ställa diagnos. Då metoden är enkel, billig och med 
potentiellt stort användningsområde pågår studier vad gäller sensitivitet och specificitet. 
SPECT-undersökning kan göras för att avgöra om störning av det presynaptiska dopaminsystemet och/eller det 
postsynaptiska systemet föreligger. Pre-synaptisk SPECT (exv DaTSCAN) undersökning kan differentiera PS mot 
ET. Vid frågeställning DLB mot Alzheimers sjukdom är SPECT-analysen också diskriminativ. Hos en symtomatisk 
patient talar en normal presynaptisk SPECT undersökning emot PS och annan degenerativ parkinsonism. I dessa 
fall kan symtomen förklaras till exempel av läkemedelsframkallade tillstånd, vaskulär parkinsonism eller 
normaltryckshydrocefalus. Analys av lateralitet och selektiv degeneration i putamen kan ge viss indikation på PS 
i kontrast till atypiska parkinsonism-tillstånd men sensitiviteten är relativt låg och i praktiken bidrar 
presynaptisk dopaminerg avbildning inte nämnvärt till diagnostik vid misstanke om atypisk parkinsonism utan bör 
förbehållas situationer där det är svårt att kliniskt värdera om det finns parkinsonism med degenerativ orsak. 
Det prediktiva värdet av postsynaptisk undersökning med SPECT är lågt efter någon form av dopaminverkande 
behandling. 
De nationella riktlinjerna betonar att värdet av presynaptisk SPECT framför allt finns vid kliniskt svårvärderade 
symtom (NR PD6): Hälso- och sjukvården bör erbjuda FP-CIT-SPECT-undersökning för att mäta aktiva 
dopaminnervceller till personer med kliniskt svårvärderat parkinsonsyndrom. 
 
PET kan kvantitativt mäta enzymaktivetet (18F-fluorodopa) och dopamintransportörer (DAT, 18F-/11C-PE- 21). 
Regional glukosanvändning (18F-FGD-PET) kan vara av värde för att diagnostisera atypisk parkinsonism. MSA-p/-c 
har typiskt med FDG-PET påvisbar sänkning av signal i cerebellum, striatum, och mellanhjärnan (tidigare än MR 
förändringar). Vid MSA ses ofta sänkt upptag i putamen, där det vid PS ofta istället är normalt eller ökat, och för 
CBD/Kortikobasalt syndrom (CBS) är unilateral kortikal minskning kring centralfåran en viktig relativt tidig 
signaländring. 
Undersökning med FDG-PET vid misstanke om atypisk parkinsonism bedöms vara av så stort värde att den har 
fått prioritet 3 i de nationella riktlinjerna (NR PD5). Tillgången till undersökningen har varit begränsad men 
ökar. 
 
Utveckling av PET undersökningar för 18F/11C--Tau, 18F/11C-Amyloid pågår med syfte att diagnosticera andra 
neurodegenerativa sjukdomar med inlagring av felveckat protein. PET för alfa-synuklein är inte tillgängligt ännu.  
MIBG-SPECT kan användas för att mäta grad av innervering av noradrenerga fibrer i hjärtat och kan skilja MSA 
från PS, vanligen dock först vid mer avancerad sjukdom. Värdet av undersökningen för tidig diagnostik är inte 
klarlagt. 
Likvordiagnostik för nervskademarkörer (tau, fosfo-tau, neurofilament, beta-amyloid) kan bidra till diagnostik av 
atypiska former av parkinsonism, eftersom patologiska nivåer av nervskademarkörerna talar för annan diagnos 
än PS. Falskt negativa fynd kan dock förekomma tidigt i sjukdomarna, och för PS har inga markörer varit 
påvisbara. Analys av alfa-synuklein i CSF har de senaste åren genomgått en snabb utveckling. alfa-Synuklein 
seeding amplification assay (SAA) uppvisar en hög sensitivitet och specifitet för att skilja PS ifrån friska 
kontrollpersoner. SAA ingår i förslag för biomarkör baserad diagnostik av PS, men används inte i klinisk rutin. 
Kinetiken för SAA skiljer mellan PS och MSA, men ytterligare validering för denna differentialdiagnostik krävs. 


För diagnostik av atypisk Parkinsonism anses neurofilament i likvor ge värdefull information för 
differentialdiagnostik mot PS och undersökningen har prioritet 4 i NR (NR PD7). 
 
Ett akut levodopa-, eller apomorfintest har använts för att påvisa medicineringseffekt. Ett flertal 
parkinsonliknande sjukdomsstillstånd förbättras i akuta farmakologiska test och testet är i sig inte 
diagnostiskt.Ett test kan vara falskt negativt tidigt i förloppet och akut levodopa-, eller apomorfintest i 
diagnostiskt syfte är därför ”icke-göra” enligt de Nationella Riktlinjerna (NR PD2). 
 
Däremot kan ett levodopatest med cirka 200 mg levodopa (dosen anpassad efter individ) senare i sjukdomsfasen 
tillföra kliniskt värdefull information om profilen av svar och dess omfattning, och kan också vara prediktivt för 
effekten av subtalamisk deep brain stimulation. 
Två-tre månaders behandling med dopaminverkande medel har högre prediktivt värde jämfört med ett akut 
endos-test tidigt i förloppet. 
Defekt luktsinne är överrepresenterat, 25-97%, vid basalgangliesjukdomar men för närvarande är det inte 
prediktivt för specifik sjukdom inom gruppen. 
Påvisande av REM Sleep Behaviour Disorder, RBD, anamnestiskt eller via riktad undersökning styrker misstankar 
om basalgangliesjukdom. Prevalens av RBD är upp till 50% vid PS och mer än 90% vid MSA och CBD, men det är 
inte prediktivt för någon specifik sjukdom inom gruppen. 
Genetisk testning vid Parkinsons sjukdom/Parkinsonism 
PS har en betydande genetisk komponent och ett större antal genetiska risk- och även skyddsfaktorer har 
identifierats som i kombination med varandra och med miljöfaktorer antas förklara varför en person utvecklar 
sjukdomen. Omkring 10-20 % av alla personer med PS har minst en första- eller andragradssläkting som också har  
PS. Förekomst av PS är ökad hos tvillingar till personer med PS. 
Inom sjukvården kan det – dock enbart för särskilda patientgrupper – vara indicerat att genomföra gentestning. 
Sådan gentestning avser inte ovan nämnda genetiska riskfaktorer utan monogenetiska former av PS. Det finns ett 
fåtal etablerade monogenetiska former av PS, med recessivt och dominant nedärvningsmönster. Överlag är alla 
dessa sällsynta eller mycket sällsynta. Frågeställningarna nedan redovisar vid vilken klinisk bild gentestning kan 
vara indicerad. Mer detaljer finns i bilaga IV, bland annat om vilka test som rekommenderas, och huruvida 
testresultatet kan påverka den kliniska handläggningen. 
Allmän genetisk screening av alla Parkinsonpatienter rekommenderas däremot inte idag. Inte heller 
rekommenderas idag gentest som stöd för val av avancerad terapi. 
När gentesta? 
Symtombild och förlopp skiljer sig mellan de enskilda monogenetiska formerna av PS. Om sådan form 
identifieras kan bättre information om långsiktiga prognosen kan ges och utredning och uppföljning bli mer 
målinriktad. Läkemedelsbehandlingen kan anpassas, och för en specifik form vanliga delsymtom kan adresseras 
tidigare. Även ärftlighetsgången skiljer sig; patient och familj kan få information om sjukdomen riskera 
överföras till nästa generation eller inte. Kliniska behandlingsstudier pågår i olika stadier även i syfte att 
påverka LRRK2 funktion eller ackumulering av alfa-synuklein proteinet. 
I bilaga IV finns råd om genetisk provtagning och rådgivning av vikt att ta ställning till innan utredning påbörjas.`
    },
    {
      rubrik: 'V. Läkemedelsöversikt',
      text: `V. Läkemedelsöversikt 
Levodopa  
Levodopa ges alltid i fast kombination med en perifert verkande dekarboxylashämmare och är den mest 
effektiva medicinen mot PS. Detta bekräftas av omfattande klinisk erfarenhet och ett antal jämförande 
studier med levodopa och andra preparatgrupper. 
Behandling med levodopa har mycket stor effekt på viktiga effektmått såsom motorisk funktion och aktiviteter 


i dagliga livet och har prioritet 1 vid behandling av Parkinsons sjukdom från och med tidig fas (NR, PD11). 
 
Farmakologiska egenskaper 
Levodopa är en prekursor till dopamin och kan till skillnad från dopamin passera blod-hjärnbarriären. Av en 
peroral dos är det ca 10% som passerar blod-hjärnbarriären när levodopa ges med dekarboxylashämmare. 
Halveringstiden i plasma är kort, ca 1,5-2h. Tiden till tillslag varierar beroende på beredningsform. Inhalerat 
levodopa (Inbrija®) kan ge effekt inom 5-10 min. Dispergerat levodopa (Madopark Quick® och Flexilev®) kan ge 
effekt inom 20 minuter och nå maximal effekt inom en timme efter intag, medan effektstart kan dröja upp till 
en timme med vanliga tabletter. Upptaget av levodopa sker huvudsakligen i tunntarmen och kan fördröjas vid 
sen ventrikeltömning. Eftersom upptaget sker genom aktiv transport med aminosyratransportörer kan samtidig 
proteinrik måltid hämma upptaget med ca 30% vilket är signifikant för vissa patienter. Det har dock inte 
betydelse för alla patienter, och generella råd om tid mellan levodopa-intag och mat kan därför vara en onödig 
inskränkning i vardagslivet. Utöver dekarboxylering till dopamin kan levodopa brytas ned av enzymet COMT. 
Levodopa (och dopaminagonister) har utöver direkt-effekt också en långtidseffekt (long duration response), som 
uppstår efter veckors behandling, och avtar inom veckor efter att man slutar tillföra preparatet. 
Beredningsformer/preparatöversikt 
Det finns konventionella tabletter, dispergerbara tabletter, depot-tabletter, och depotkapslar. Europeiskt 
godkännade finns också för en inhalationsberedning (Inbrija®). Levodopa/karbidopa kan också ges kontinuerligt 
som enteral gel direkt i tunntarm via en perkutan gastro-jejunal sond (Duodopa® eller Lecigon®), eller som 
levodopa/karbidopa prodrug foslevodopa/foskarbidopa (ProDuodopa®) subkutant, till patienter med besvärliga 
symtomfluktuationer. För patienter med lågt dygnsbehov av levodopa och samtidigt förekomst av besvärande 
fluktuationer finns även möjlighet till individualiserad oral dosering med mikrotabletter levodopa/karbidopa 
(Flexilev®) som administreras från en dosautomat upp till 16 ggr per dygn.  
Praktiska råd angående farmakologisk behandling med levodopa 
Behandling med levodopa ökar den förväntade livslängden hos patienter genom att följdtillstånd till PS kan 
undvikas, men behandlingen bidrar också till utveckling av terapikomplikationer, särskilt dyskinesier. 
Förutom tabletter med levodopa/dekarboxylashämmare finns det två depotvarianter med benserazid respektive 
karbidopa (Madopark Depot®, Levocar®). Dessa används huvudsakligen för att åstadkomma längre effekt 
nattetid eftersom biotillgängligheten av dessa preparat är för variabel för att fungera tillförlitligt dagtid. 
Därutöver finns det dispergerbar levodopa (Madopark Quick® och Flexilev®). De lösliga tabletterna har, när de 
intas upplösta i vätska, en kortare anslagstid, men trots det en snarlik verkningstid. De kan användas som vid-
behovs-terapi och för att åstadkomma en snabb effekt på morgonen eller under natten. Snabbt upptag av 
levodopa kan gynnas av kolsyrad vätska.Inhalationsbehandling med levodopa (Inbrija®) är avsedd som 
tilläggsbehandling för tillfälliga OFF-episoder och förutsätter behandling med dekarboxylashämmare. En 
inhalator medföljer i varje förpackning av Inbrija®. Dosen per OFF-episod är 84 mg, som administreras via två 
kapslar som vardera innehåller 42 mg levodopa. Vid varje OFF-episod ska båda kapslarna inhaleras direkt efter 
varandra, vilket resulterar i en total inhalerad dos på 66 mg levodopa (2×33 mg). Den maximala 
plasmakoncentrationen är snabbare än med levodopa/karbidopa i konventionell peroral beredning.Den perorala 
levodopabehandlingen påbörjas vanligen med 50 mg per dos och den dagliga dosen höjs sedan långsamt (50-100 
mg/v) till lägsta effektiva dos. Undvik dispergerbar beredning som startbehandling eller regelbunden 
behandling.  
I tidiga sjukdomsstadier ligger den lägsta effektiva dosen1 vanligen mellan 150 och 600 mg per dag och fördelas 
på 3-4 dagsdoser. Innan man konstaterar avsaknad av levodopa-svar bör ett behandlingsförsök med upp till 800 
mg per dag under minst tre månader genomföras. Ytterligare diagnostiska tester kan behövas för att exv 
konstatera MSA eller annan basalgangliesjukdom. I senare sjukdomsstadier kan det bli nödvändigt att ge över 
1000 mg. 
 
 
 
 
1 Levodopa doseras vanligen inte i relation till kroppsvikt, men vid mycket låg eller hög vikt kan dos behöva anpassas. 300 mg motsvarar för 
en 70 kg man drygt 4 mg/kg, men samma dos till en 45 kg kvinna motsvarar ca 6,7 mg/kg/dygn. Tröskelvärden för dyskinesier har 
uppskattats till 10±4 mg/kg för män, medan kvinnor tycks ha signifikant lägre tröskel 8±4 mg/kg (Sharma et al. 2008)


Det är viktigt att även yngre patienter får effektiv tidig behandling, men eftersom yngre patienter har större risk 
för motoriska fluktuationer bör höga enskilda doser av levodopa undvikas. Uppkomst av motoriska fluktuationer 
kan fördröjas men inte förhindras med dopaminagonister, men användande av depot-beredningar eller tillägg av 
entacapon har inte visats fördröja motorfluktuationer. 
Levodopas vanligaste biverkningar vid nyinsättning är illamående och ortostatisk hypotension. För att undvika 
detta kan man långsamt trappa in levodopa med lägsta möjliga dos, och/eller utnyttja den perifert verkande 
dopamin-receptorantagonisten domperidon, Domperidon Ebb ® 10mg 3 ggr dagligen. En kort tids behandling (en 
vecka) är vanligen tillräckligt för att dessa obehag skall reduceras. Domperidon har kopplats till ökad risk för 
allvarliga hjärtrytm-rubbningar. Därför rekommenderas numera max 10 mg 3 gånger dagligen och bara en kort 
behandlingstid. EKG bör utföras inför insättning. Domperidon ska ej ges till personer som har risk för, eller redan 
har, förlängd hjärtöverledningstid, hjärtsjukom, behandlas med potenta CYP3A4-inhibitorer, eller har allvarlig 
leversjukdom. Andra medel som metoklopramid ger vanligen alltför kraftig anti-dopaminverkande effekt varför 
det är olämpligt. Förutom dyskinesier, ortostatism och fluktuationer är psykiska biverkningar det största 
problemet vid behandling av avancerad sjukdom, framför allt hallucinationer och andra psykotiska reaktioner (se 
Bilaga II: Praktiska handlingsplaner vid akuta tillstånd).Vid behandling med inhalerat levodopa är 
andningssymtom såsom hosta, färglöst sputum, irritation i halsen och yrsel är de mest frekvent rapporterade 
biverkningarna. Träning av patient och anhöriga i rätt inhalationsteknik kan minska risken för andningssymtom 
och öka behandlingseffekten 
Levodopabaserad infusionsterapi 
Subkutan administration av levodopa/karbidopa prodrug foslevodopa/foskarbidopa (Produodopa®) eller 
intrajejunal administration av levodopa/karbidopa-gel (Duodopa®) alternativt levodopa/karbidopa/entakapon-
gel (Lecigon®) via PEG med bärbar pump kan övervägas  hos patienter i fluktuationsfas som har besvärande 
symtomfluktuationer trots optimerad peroral terapi. Därigenom uppnås en mer konstant plasmakoncentration av 
levodopa jämfört med peroral terapi, vilket kan leda till stabilisering av symtombilden. För mer information om 
dessa behandlingar se avsnittet ”VIII. Avancerad behandling ” eller ScandMODIS konsensusdokument för 
användning av Duodopa® på www.swemodis.se. 
Dopaminagonister 
Dopaminagonister rekommenderas för behandling av tidig Parkinsons sjukdom (prioritet 3, NR PD10) 
 
Risken att utveckla dyskinesier är låg under monoterapi med agonister men den symtomatiska effekten  är lägre 
än med levodopa. Uppkomst av dyskinesier förhindras inte av dopaminagonister och behandlingen har större 
biverkningsfrekvens än levodopa. Tillägg av dopaminagonist när patienter med Parkinsons sjukdom börjar erfara 
symtomfluktuationer kan reducera off-tid, förbättra Activities of Daily Living (ADL), motorsymtom och 
reducera behovet av levodopa (prioritet 2, NR PD17) 
 
Farmakologiska egenskaper 
Dopaminagonister stimulerar dopaminreceptorer genom en direkt agonistisk effekt. Effekten är inte selektiv för 
centrala nervsystemet (CNS) och perifera biverkningar tenderar att vara mer uttalade än med levodopa. 
Preparat har inte lika stor antiparkinsoneffekt som levodopa. Effekten av olika preparat är likartad, med 
undantag av apomorfin som kan ha bättre effekt än övriga agonister. Dopaminagonisterna har effekt i 
monoterapi. I randomiserade kontrollerade studier med olika dopaminagonister har man inte funnit bevis för 
neuroprotektiva effekter. Dopaminagonisterna har en relativt likartad antiparkinsoneffekt, men det finns 
individuella variationer i kliniska effekter och biverkningar mellan olika preparat. 
Viktiga skillnader mellan preparaten är galenisk frisättningsegenskap, biologisk halveringstid och olika effekter 
på dopaminreceptorerna, med potentiellt olika kliniska effekter. En annan viktig skillnad gäller kemisk struktur – 
tidiga generationer av dopaminagonister med ergotstruktur (bromokriptin, kabergolin) kan orsaka fibrotiska 
förändringar i lungvävnad, lungsäckar, hjärtklaffar samt retroperitonealt. Det är sannolikt affinitet av 
ergotstrukturen till en serotininreceptorsubtyp som leder till fibroblasttillväxt. Ergot-medlen rekommenderas 
inte längre.  
Dopaminagonister används både som monoterapi (ofta till yngre patienter) och som kombinationsterapi med 
levodopa vid fluktuationer för att reducera tid i ”off”. Förutsatt att levodopadoserna kan reduceras, uppnås en 


förbättring avseende fluktuationerna vid tillägg av agonister. 
Beredningsformer/preparatöversikt 
Rotigotin tillförs med plåster perkutant; apomorfin ges som subkutan injektion eller infusion; övriga agonister 
ges peroralt. Rotigotin subventioneras endast för patienter med PS som behöver dopaminagonister och som inte 
kan ta tabletter. 
Terapi med penna/pump: Apomorfin 
Apomorfin är den dopaminagonist som har en antiparkinsoneffekt som är mest jämförbar med endogent  
dopamin. Apomorfinbehandling kan ges som subkutana injektioner med injektionspenna (apomorfin hydroklorid 
10 mg/mL Apo-go Pen®, Dacepton®) eller subkutan infusion med infusionspump (apomorfinhydroklorid 5 mg/mL 
infusionsvätska Apo-Go Pumpfill ®, Apomorfin PharmSwed ®, Dacepton®). För indikationer och mer information 
se avsnitt ”VIII. Avancerad behandling ” samt ScandMODIS detaljerade behandlingsråd för apomorfinanvändning 
(www.swemodis.se). 
Översikt över dopaminagonistpreparat 
Preparat 
Försäljningsnamn 
t ½ (h) 
Typ 
Apomorfin 
Apo-go Pen® 
Dacepton® 
0.5 
non-ergot 
Apomorfin 
Apo-Go Pumpfill® 
Apomorfin PharmSwed® 
Dacepton® 
Infusion 
non-ergot 
Pramipexol 
Sifrol® m fl generika 
8 - 12 
non-ergot 
Pramipexol 
Sifrol® (depottablett) 
8 - 12, men med fördröjd 
frisättning 
non-ergot 
Ropinirol 
Requip® m fl generika 
non-ergot 
Ropinirol 
Requip Depot® m fl 
generika 
6, men med fördröjd 
frisättning 
non-ergot 
Rotigotin 
Neupro® 
6 - 8  
non-ergot 
 
Biverkningar 
Dopaminagonister har gemensamma perifera biverkningar: illamående, ortostatisk hypotension, yrsel och 
perifera ödem. Risken för CNS-biverkningar som hallucinos är större än med levodopa.Särskilda 
säkerhetsaspekter vid dopaminagonistterapi som också bör beaktas är impulskontrollstörningar, trötthet, och om 
de äldre ergotpreparaten används även fibros, framför allt lungfibros och hjärtklaffsfibros. 
Impulskontrollstörning 
Kan uppstå vid all dopaminverkande behandling, men risken är större vid behandling med dopaminagonister än 
med med levodopa. Impulskontrollstörningar kan ta sig uttryck som okontrollerat spelande, shopping, 
hetsätning, ökat sexuellt intresse och utagerande, internet-användande  och kan även vara förenat med 
samlarmani, städmani, hobbyism. Risken för någon form av impulskontrollstörning vid behandling med 
dopaminagonister har uppskattats till 10 - 15% vid prevalens- undersökningar. Prospektiva studier har visat att 
nära 50 % av patienter som sätts in på dopaminagonister utvecklar impulskontrollstörning någon gång inom 5 år 
och att förekomsten av impulskontrollstörning sjunker efter utsättning av dopaminagonist. Det är mycket viktigt 
att identifiera impulskontrollproblematik tidigt, eftersom tillståndet obehandlat kan få förödande konsekvenser 
för ekonomi och samliv. Man ska  därför informera även  anhöriga om dessa möjliga  biverkningar eftersom de 
sällan rapporteras av patienten förrän symtomen fått långtgående konsekvenser. Risken för 
impulskontrollstörningar ökar med högre doser dopaminagonister och långvarig behandling. Risken har också 
kopplats till yngre ålder, debut av Parkinson i ung ålder, att vara ensamstående, manligt kön, personlig eller 
familje-anamnes på spelberonde eller  alkoholism, impulsiva personlighetsdrag, pågående eller tidigare rökning 
och hos kaffedrickare. 
Trötthet 
Sömnstörningar är ofta förekommande vid PS (se avsnitt Sömnrubbningar). Behandling med antiparkinson-


mediciner kan förstärka dessa problem. 
Om sömnrubbning korrigeras före start av behandling med agonist kan problemen minskas. 
Det finns ett samband mellan dopaminagonistterapi och trötthet under dagen. Hos en del patienter kan denna 
trötthet bli uttalad. När dopaminagonisterna kombineras med annan parkinsonmedicin förstärks ibland 
tröttheten. När man startar dopaminagonistterapi och när doserna höjs ska patienterna därför informeras om 
denna risk, inklusive att risken för att ofrivilligt somna under dagen är ökad. Framför allt bör man informera om 
risken för plötsliga sömnattacker. Om sådana uppträder ska patienten inte framföra motorfordon. Risken för 
trötthet är möjligen något högre med apomorfin, pramipexol och ropinirol, men finns vid behandling med alla 
dopaminagonister och även annan dopaminverkande medicinering, inklusive levodopa. Patienter som uppvisar 
påtaglig somnolens och/eller plötsliga sömnattacker skall informeras om att de bör avstå från bilkörning och 
andra aktiviteter där sänkt uppmärksamhet kan utsätta dem själva eller andra för risker. När denna typ av 
trötthet uppträder kan det löna sig att sänka dosen eller att prova en dopaminagonist med annan kemisk 
struktur. 
Varningstriangelmärkning har tagits bort från alla läkemedel och det är läkarens ansvar att informera, och 
patientens ansvar vid framförande av fordon att bedöma om sin lämplighet att framföra fordon vid varje 
tillfälle, se avsnitt XII Körkort. 
Dopamine Agonist Withdrawal Syndrome (DAWS) 
Om det finns behov av att reducera eller sätta ut en dopaminagonist på grund av biverkningar finns risk för 
DAWS. Det är ett utsättningssyndrom som liknar abstinens och kan yttra sig med psykiska symtom av dysfori, 
ångest, depression, suicidtankar, agitation/konfusion och kroppsliga symtom i form av illamående, 
blodtrycksfall, generaliserad smärta och RLS. Syndromet är i de flesta fall övergående men kan vara mycket 
långdraget och kan då lindras genom återinsättande av en låg dos av den aktuella agonisten. Att istället höja 
levodopadosen hjälper inte mot DAWS. Störst risk att drabbas av DAWS anses personer med 
impulskontrollstörning ha. 
Utsättning av agonister bör ske gradvis. I de fall detta inte är möjligt och DAWS uppstår går det ofta att 
återinsätta en låg dos av agonisten, men man måste då vara uppmärksam på risken att biverkan återkommer, 
särskilt om det är en impulskontrollproblematik. 
Praktiska råd 
De långverkande formerna av pramipexol, ropinirol och rotigotin har främst fördelar vad avser 
läkemedelshantering och sannolikt förbättrad compliance. De har föreslagits medföra mindre tendens till 
impulskontrollstörning jämfört med kortverkande agonistberedningar, men det vetenskapliga underlaget är 
otillräckligt. 
Försiktighet bör iakttas om patienten är äldre och/eller har kardiovaskulär dysautonomi. Likaså om patienten 
har en tidigare känd spelproblematik, eller annan impulskontrollstörning. 
En vanlig observation är att insättning av agonister har en humörhöjande effekt, och pramipexol var det första 
preparatet som i RCT visades ha effekt på depression vid PS. 
Insättning av dopaminagonister bör ske långsamt för att reducera biverkningarna. Illamående brukar upphöra 
efter en tids behandling, medan blodtrycksfall och perifera ödem ofta kvarstår. Om patienten har svårt att 
tolerera insättning av agonist kan domperidon (Domperidon Ebb®) 10-mg x 3 användas en kort period under 
beaktande av kardiella risker. 
Det är god praxis att lämna skriftlig information om nyinsatta läkemedel och möjliga biverkningar och detta kan 
vara särskilt viktigt när biverkningarna kommer smygande och kan misstolkas, vilket är fallet med 
impulskontrollstörningar. 
Domperidon 
Domperidon är en perifer dopaminerg antagonist, som inte passerar blod-hjärnbarriären (i doser <100 mg), och 
kan användas för att att minska dopaminreceptormedierade biverkningar. Den numera rekommenderade dosen 
är 10 mg x 3, medan tidigare rekommenderades upp till 20 mg x 3. 
Domperidon behövs vanligen endast under begränsad tid. 
Ett antal fall av hjärtarytmier orsakade av domperidon har rapporterats och preparatet har därför belagts med 
restriktioner avseende doser och behandlingstid. Domperidon är registrerat i Sverige men subventioneras bara 
för patienter med PS. 
EKG bör kontrolleras före insättning av domperidon för att utesluta långt QTc-intervall, samt under 


behandlingen. Använd inte metoklopramid, som kan försämra parkinsonsymtomen. 
 
COMT-hämmare  
COMT-hämmare kan användas för att förstärka effekten av levodopamedicinering. Tiläggsbehandling med COMT-
hämmare till patienter som har motoriska fluktuationer trots optimal behandling med levodopa har hög prioritet 
(Prioritet 2, NR, PD19). 
 
Farmakologiska egenskaper 
COMT-hämmare bromsar metabolismen av levodopa och dopamin och förlänger därigenom effekten (L-dopa 
ekvivalensdosen räknas vanligen upp upp med 33 % vid tillägg av entakapon och med 50% vid tillägg av tolkapon 
eller opikapon till L-dopa terapi) samt ökar levodopakoncentrationen i hjärnan. För entakapon och opikapon är 
effekten övervägande perifer, medan tolkapon även passerar blodhjärnbarriären och utövar viss central effekt. 
COMT- hämmare minskar antal off-fluktuationer och tid i ”off”, samt ökar tid i ”on”. Avseende behandling av 
dyskinesier med COMT-hämmare är evidensen otillräcklig. En direkt jämförelse av entakapon och tolkapon 
visade ingen signifikant skillnad i effekt avseende detta. COMT-hämning tidigt i förloppet, hos patienter som 
ännu inte har fluktuationer, har inte visats förebygga utvecklingen av dyskinesier eller fluktuationer. 
Beredningsformer/preparatöversikt 
Entakapon, Tolkapon och opikapon är de tre COMT-hämmare som är registrerade i Sverige eller centralt i Europa 
via Europeiska läkemedelsmyndigheten (European Medicines Agency, EMA). Fasta kombinationer av levodopa, 
karbidopa och entakapon finns på marknaden i form av tabletter (Stalevo®, Sastravi® mfl samt generika) och en 
intestinal gel (Lecigon®). Opikapon (Ongentys®) är registrerat men ingår ej i läkemedelsförmånen. 
Praktiska råd 
Vid insättning av COMT-hämmare bör man beakta att max-koncentrationen av levodopa stiger, vilket kan leda 
till ökade levodopa-relaterade biverkningar. Justering neråt av den totala dagliga 
levodopadosen kan därför behövas. Detta kan uppnås genom sänkning av enskilda levodopadosers storlek 
och/eller genom förlängning av doseringsintervallet. Beräkning av levodopa-ekvivalenta doser (LED) kan göras 
med hjälp av webkalkylator som finns på SWEMODIS hemsida. 
Vanliga biverkningar av COMT-hämmare är diarré (något vanligare med tolkapon än entakapon, och minst vanligt 
med opikapon), men även förstoppning förekommer, därtill illamående, trötthet, hallucinationer och ortostatisk 
hypotension. 
Entakapon 200 mg kan tas tillsammans med varje levodopados, antingen separat eller som fasta 
kombinationspreparat levodopa/karbidopa/entakapon. Kombinationspreparaten ger en praktisk fördel genom 
färre tabletter och doseras efter levodopainnehållet. Ackumulering av entakapon vid upprepad dosering kan ske. 
Den maximala rekommenderade dosen är 2000 mg/dygn. Tillägg till befintliga levodopadoser sker med fördel 
successivt. Entakapon färgar urin och svett rödbrun. 
Tolkapon doseras 100 mg 3 gånger dagligen. Det har en viss hepatotoxicitet, och är därför ett andrahandsmedel. 
En förutsättning för tolkaponanvändning är att patienten inte svarat på eller är intolerant mot entakapon. 
Transaminaser måste kontrolleras före start samt varannan vecka under de första 12 månaderna, därefter var 
4:e vecka under 6 månader och därefter var 8:e vecka. 
Opikapon doseras 50 mg en gång dagligen och kan enklast tas till natten tillsammans med sista levodopadosen. I 
produktmonografin avrådes från att  ta opikapon tillsammans  med levodopa  men det saknas någon bra 
motivering till detta. Samtidigt matintag försämrar opikaponupptaget. Den totala dagliga levodopadosen kan 
behöva sänkas när opikapon sätts in, även vid byte från entakapon. 
MAO-B-hämmare  
MAO-B-hämmare bromsar nedbrytningen av dopamin i CNS och har en viss egen symtomlindrande effekt, i alla 
fall så länge man har en endogen produktion av dopamin.  


Vid tidig Parkinsons sjukdom bör vården erbjuda behandling med MAO-B-hämmare som monoterapi (Prioritet 3, 
NR, PD9).  
 
Även användning av MAO-B-hämmare i kombination med levodopa i tidig fas av sjukdomen är rekommenderat 
(Prioritet 5, NR, PD13). 
 
Hos patienter med fluktuationer uppnås en stabilisering av symtomatologin med reducerad tid i ”off” med MAO-
B hämmare. Denna reduktion är jämförbar med effekten hos COMT-hämmare (entakapon och rasagilin 
jämförda). Användning av MAO-B-hämmare vid Parkinsons sjukdom med fluktuationer har prioritet 2 (NR, PD16). 
 
Farmakologiska egenskaper 
MAO-hämmare hämmar enzymet monoamin oxidas som bryter ner aminer. Isoformen MAO-A har större affinitet 
för serotonin och noradrenalin, medan dopamin har likartad affinitet till MAO-A och MAO-B. Substanser som 
hämmar MAO kan vara irreversibla eller reversibla, och mer eller mer selektiva för respektive isoform av 
enzymet. Irreversibla hämmare med betydande effekt på MAO-B har högre risk för biverkningar genom den så 
kallade tyramin-effekten och för uppkomst av serotonergt syndrom. För behandling av PS används de irreversibla 
MAO-B-hämmarna selegilin och rasagilin, samt sedan en tid även den reversibla MAO-B-hämmaren safinamid.  
Safinamid utvecklades ursprungligen för behandling av epilepsi och kan genom affinitet till spänningskänsliga 
natriumkanaler även påverka glutamatfrisättning. Man har därför framfört hypotesen att safinamid kan reducera 
dyskinesier, men den kliniska betydelsen av detta är inte fastställd. 
Beredningsformer/preparatöversikt 
Selegilin (Eldepryl®) finns sedan tidigt 90-tal på marknaden. Rasagilin är liksom selegilin är registrerat för 
monoterapi och tilläggsterapi.. Safinamid (Xadago®) är till skillnad från selegilin och rasagilin en reversibel 
MAO-B hämmare och är endast registrerat som tilläggspreparat till levodopa. 
Praktiska råd 
Såväl rasagilin (1 mg/d) som selegilin (5 - 10 mg/d) och safinamid (50 - 100 mg/d) kan ges en gång dagligen. Med 
selegilin och rasagilin byggs den MAO-B hämmande effekten upp gradvis under de första 7 - 14 dagarnas 
behandling. Detta beror på en successiv irreversibel inbindning till MAO-B. En praktisk konsekvens av detta är att 
biverkningar som uppkommer efter en tids behandling oftast inte går över spontant. Omedelbara biverkningar 
som erfars timmarna efter dosintag i början av behandlingen kan dock vara övergående genom 
toleransutveckling. 
Under metabolismen av selegilin uppstår amfetaminprodukter som kan ge upphov till en del av dessa snabba och 
tidiga biverkningar, framför allt avseende blodtryck, puls och psykiska biverkningar. 
Rasagilin har inte dessa nedbrytningsprodukter och därför inte dessa biverkningar, vilket gör att rasagilin kan 
användas till patienter där selegilin inte är möjligt, även hos äldre. Rasagilin har också mindre risk för 
blodtrycksfall, men kan hos enstaka patienter ge upphov till angina-liknande symtom som går i regress efter 
utsättning. En direkt jämförelse av effekten av selegilin och rasagilin är inte genomförd. Effekten av rasagilin 
vid tilläggsbehandling är i paritet med entakapon. 
Vanliga biverkningar av MAO-B hämning är illamående, ortostatisk hypotension och konfusion/hallucinos. En 
ovanlig biverkan av samtidig användninga av serotonergt verkande läkemedel och MAO-B hämmare är 
serotonergt syndrom. Detta är beskrivet för selegilin som därför inte skall kombineras med SSRI, SNRI, tricyklika, 
petidin eller tramadol. Risken för serotonergt syndrom vid samtidig behandling med selegilin och antidepressiva 
har retrospektivt uppskattats till 0,24%. Det finns mindre data för rasagilin och safinamid men dessa är båda mer 
selektiva och risken är troligen mindre. De interaktionsvarningar som finns mellan dessa läkemedel och 
fluoxetin, fluvoxamin och petidin bygger på observationer med selegilin. För safinamid saknas helt publicerade 
fallrapporter av serotonergt syndrom även om det finns misstänkta fall rapporterade som biverkningar enligt 
WHO.  Sammantaget är risken för serotonergt syndrom med rasagilin eller safinamid liten om än inte helt 


försumbar om de kombineras med antidepressiva. Safinamid är att föredra vid kombination med antidepressiva 
eftersom  den reversibla hämningen innebär att biverkningar upphör snabbare efter utsättning.  
Patienterna bör informeras om att effekten av irreversibla MAO-B hämmare avtar successivt under flera veckor 
efter utsättning. 
Det finns experimentella data som talar för neuroprotektiva och sjukdomsmodifierande effekter av MAO-B-
hämmare. För närvarande är neuroprotektion inte bevisad. Efter 5.5 år har tidigt insatt rasagilin visat bättre 
symtomlindring än om behandlingen initierats senare. Långtidsstudier med selegilin som tillägg till L-dopa har 
visat långsammare symtom-utveckling, lägre L-dopabehov och mindre dyskinesi- utveckling, jämfört med 
placebotillägg. 
 
Antidyskinesiläkemedel (NMDA-antagonister) 
Amantadin verkar via NMDA antagonism och ev ytterligare mekanismer. Det finns evidens för en mild till måttlig 
symtomatisk antiparkinsoneffekt av amantadin, både i monoterapi och i kombination med andra 
parkinsonläkemedel. Det finns också evidens för att amantadin reducerar levodopa-associerade dyskinesier, och 
amantadin används idag framför allt som antidyskinetikum. Doseringen varierar mellan 100 och 300 mg/d. 
Amantadin elimineras till 90 % renalt. Hos patienter med nedsatt njurfunktion finns risk för ackumulering och 
biverkningar. Vanliga biverkningar är hypotension, konfusion och psykos hos äldre, bensvullnad och livedo 
retikularis (vidgade, ibland ömmande ytliga spindelnätsliknande kapillärer framför allt på benen). 
Amantadin är registrerat i Sverige (Dinetrel®) som 100 mg kapslar, och kan erbjudas som tilläggsbehandling vid 
motoriska fluktuationer (Prioritet 5, NR PD18). Om en patient har sväljningssvårighter eller får biverkningar av 
100 mg doser, så kan amantadin förskrivas på licens som brytbara tabletter och ordineras som 50 mg doser. 
 
På marknaden finns även memantin (Ebixa®), en NMDA-receptor-antagonist, utan antikolinerg effekt, som är 
registrerat för mild-måttlig demens av Alzheimertyp. Det finns mycket begränsade data avseende om memantin 
reducerar levodopainducerade dyskinesier, och det är i nuläget inte heller registrerat för användning vid 
Parkinsondemens. Den kliniska erfarenheten är att läkemedlet kan fungera vid båda indikationerna, men att 
utfallet är mer variabelt än med de mer etablerade behandlingarna amantadin, respektive 
acetylkolinesterashämmare. 
 
Antikolinergika 
Centralt verkande antikolinergika (biperiden, Akineton® och orfenadrin, Norflex® samt trihexyfenidul, Artane , 
licensmedel) tillhör de äldsta parkinsonläkemedlen.Det saknas moderna kontrollerade studier rörande deras 
effekter. Klinisk erfarenhet talar för att de kan ha värdefulla sådana, framför allt hos patienter med 
tremordominant symtomatologi eller dystoni. På grund av risken för perifera och centrala biverkningar är 
användbarheten emellertid mycket begränsad och antikolinergika bör endast övervägas vid tremordominant 
symtomatologi respektive svåra dystona tillstånd där annan terapi inte varit effektiv. På grund av den ökade 
risken för psykiska biverkningar (framför allt konfusion), men även muntorrhet, ackomodationsstörning och 
urinretention skall man vara försiktig med antikolinergika till äldre patienter. Detta avspeglas i de nationella 
riktlinjerna där dessa preparat föreslås användas i undantagsfall (Prioritet 8, NR, PD 15) vid tidig sjukdom med 
tremor.  
 
Antikolinerga medel kan försämra gångförmågan med ökad ”freezing of gait” (FOG), och det finns rapporter med 
långtidsuppföljningar av patienter som behandlats med antikolinerga medel för PS som visar en ökad risk för att 
få en demens-diagnos, och där utsättning av dessa medel inte har lett till en förbättring av det kognitiva 
tillståndet.  
 


Vanliga interaktioner  
Läkemedel med dopaminreceptorhämmande effekt 
Neuroleptika: Hela gruppen N05A förutom N05AH02 klozapin och N05AH04 kvetiatipin är kontraindicerade på 
grund av extrapyramidal biverkan. 
Övriga medel med dopaminreceptorhämmande effekter: Metoklopramid, Propavan® (propiomazin). 
Medel som ger sämre upptag eller annan minskad levodopa effekt 
Framförallt vid regelbundet bruk. Information till patienten är viktig men det finns inga generella 
kontraindikationer. 
Antacida: Gaviscon®, Novalucol®, Novaluzid®, taget under lång tid. 
Järn: Peroral järnmedicinering kan försämra det intestinala upptaget av levodopa. Problemet kan till viss del 
minskas genom att peroralt järn administreras till natten eller med intag så långt i tid skilt från levodopaintag 
som möjligt. Alternativt ges intravenös eller imtramuskulär beredningsform av järn. 
Exempelvis: Injektion Venofer® 20 mg/mL, 5 mL intravenöst x 5 - 10, eller Cosmofer 50 mg/mL, 2 mL 
intravenöst eller intramuskulärt. 
Medel som kan förstärka parkinsonsymtom eller biverkningar av 
antiparkinsonläkemedel 
Läkemedel mot benign prostathyperplasi: Alla alfa-1-receptorblockerande medel (alfuzosin, doxazosin, 
terazosin) har en blodtryckssänkande effekt som kan bli symtomgivande vid PS med kardiovaskulär dysautonomi. 
Läkemedel med oklar/osäker effekt på parkinsonism 
Vid försämring av symtom i samband med insättning av annat läkemedel kan man misstänka läkemedelsorsakad 
parkinsonism. Vanligast är då att läkemedlet har dokumenterad dopaminreceptorblockerande effekt eller 
hämmar syntes/lagring av dopamin (exv reserpin, tetrabenazin, alfametyldopa). 
En del preparat kan utlösa eller förstärka parkinsonism av mer oklara skäl. Hit räknas exempelvis de äldre 
kalciumblockerade läkemedlen cinnarizine och flunarizine som inte är registrerade i Sverige. Det finns ett antal 
fallrapporter som beskriver läkemedelsutlöst parkinsonism vid behandling med litium, oftast vid intoxikation, 
men det har beskrivits även vid terapeutiska nivåer. 
Valproat har också rapporterats kunna inducera parkinsonism, liksom fenytoin och det finns enstaka rapporter 
även om levetiracetam-utlöst parkinsonism. En viss risk kan också finnas för verapamil. 
Speciella interaktioner 
Ropinirol-warfarin: Ropinirol kan öka effekten av warfarin (C1-interaktion). 
Ciprofloxacin-Ropinirol: Ciprofloxacin kan hämma nedbrytning av ropinirol (CYP2A1) och leda till 
överdoseringssymtom. (C1-interaktion). 
Östrogen-ropinirol: Östrogen kan hämma ropinirols metabolism (CYP2A1) och ger eventuellt högre 
koncentration av ropinirol. Betydelsen är oklar (B0-interaktion). 
MAO-B-hämmare-serotonerga preparat: Risk för serotonergt syndrom. Se avsnitt om MAO-B-hämmare ovan. 
Kombinationen bör undvikas eller monitoreras noga. Selegilin har högst risk. 
Rökning: Rökning minskar exponeringen för bland annat rasagilin, propranolol, klozapin, duloxetin. Detta har 
troligen störst betydelse vid rökavvänjning. 
Amitriptylin: Kan potentiera den blodtryckshöjande effekten av sympatikomimetiska preparat som etilefrin, 
fenylefrin och noradrenalin, men även av perifert dopamin som bildas av levodopa. 
Läkemedel med varningar av liten eller obefintlig betydelse 
Pyridoxin: Pyridoxin (vitamin B6) har kategori C4 interaktion med levodopa, men endast om levodopa ges 
ensamt utan perifer dekarboxylashämmare (benserazid eller karbidopa) och interaktionen saknar i praktiken 
därför betydelse. 
Kolinesterashämmare: Donepezil (Aricept®), och rivastigmin (Exelon® mfl), kan ge parkinsonism hos patienter 


som inte har pågående antiparkinson-medicinering, men med pågående dopaminverkande behandling ses 
vanligen ingen försämring och eftersom effekten av dessa läkemedel har klinisk betydelse vid Parkinsondemens 
bör man inte avhålla sig från att använda dem av oro för ökad parkinsonism. 
 
Levodopa-ekvivalenta dygnsdoser  
Vid tillägg av andra dopaminverkande läkemedel än levodopa eller helt eller delvis byte av terapeutisk strategi 
kan det vara värdefullt att ha en uppfattning om hur stor den totala dopaminverkande effekten blir. 
Ett mått på dopaminverkande behandlingsintensitet är LED, levodopa-ekvivalenta doser och måttet LEDD, 
levodopa-ekvivalenta dygnsdoser. Beräkningar av LED och LEDD baserar sig en metaanalys från 2023 (Jost et al. 
2023). En sammanställning av beräkningsfaktorer finns tabellen nedan. 
Det finns individuella variationer i hur patienter reagerar på dopaminagonister, MAO-B hämmare och COMT-
hämmare varför beräkningarna endast utgör uppskattningar. 
LED-beräkningsfaktorer 
Preparat 
Omräkningsfaktor1 
Levodopa/karbidopa (Sinemet®, Flexilev®) 
Levodopa/benserazid (Madopark®) 
Levodopa Depotpreparat ( Madopark Depot®) 
0,75 
Levodopa inhalationspulver (Inbrija®) 
0,69 
Levodopa/karbidopa intestinal gel (Duodopa®) 
1,11 
Levodopa/karbidopa/entakapon intestinal gel (Lecigon®) 
1,462 
Foslevodopa/foskarbidopa,sc (Produodopa®) 
0,753 
Levodopa+entakapon 
1,334 
Levodopa+tolkapon 
1,55 
Levodopa+opikapon 
1,56 
Pramipexol (mg bas) 
Ropinirol 
Rotigotin 
Rasagilin 
1007 
Selegilin 
Safinamid 
+ 150 mg107 
Amantadin 
Apomorfin 
1) Multipliceras med mängden aktiv substans för att beräkna LED 
2) För total programmerad/given dos efter avdrag av 60 mg (3 ml) per ny förfylld spruta 
3) Avseende mg foslevodopa 
4) Multipliceras med LED för varje dos levodopa som ges inom 4h efter 200 mg entakapon (oftast totalt dos levodopa/dygn). 
5) Multipliceras med LED för total dos levodopa som ges vaken tid. 
6) Multipliceras med LED för total levodopados under dygnet. 
7) Reguljär dygnsdos av rasagilin eller selegilin har en egeneffekt motsvarande ca 100 mg och safinamid motsvarande 150 mg 
när det ges i tidig sjukdomsfas som monoterapi. I kombination med levodopa kan effekten sannolikt bli mer 
proportionerlig till given levodopados eftersom MAO-B I har liknande effektivitet som COMT hämmare vid tilläggsterapi till 
levodopa. 
8) Vid kontinuerlig infusionsbehandling med apomorfin blir omräkningsfaktor mer osäker.`
    },
    {
      rubrik: 'VI. Behandling av motoriska symtom',
      text: `VI. Behandling av motoriska symtom  
Terapi tidig fas 
Bakgrund 
All behandling vid PS är symtomlindrande. Det finns ännu ingen kausal behandling som övertygande visats 
upphäva eller dämpa nervcellsbortfallet. Tidpunkt för initiering av behandling har varit föremål för långvarig 
diskussion. Det finns belägg för negativa kompensatoriska mekanismer som utvecklas under den tidiga 
sjukdomsfasen, och tidig terapi, som ökar tillgängligheten av dopamin minskar denna negativa kompensation och 
är gynnsam. Den nu förhärskande uppfattningen är därför att det inte gynnar patienten att fördröja 
behandlingsstart och att behandling därför bör initieras så snart patienten uppvisar behandlingsbara motoriska 
symptom med negativ effekt på livskvalitet. Hypokinesi är vanligen det mest handikappande symtomet, medan 
vilotremor ofta stör anhöriga mer än patienter. 
Flera studier har gjorts för att utvärdera om det har betydelse vilken behandling man startar med. Sammantaget 
förefaller det som att start med levodopa har ett totalt sett något mer gynnsamt utfall när patienter 
randomiseras mellan olika läkemedel. Man bör i detta sammanhang dock påpeka att de studier som finns har 
studiepopulationer i lite högre åldrar och för riktigt unga patienter finns inte god evidens för vilket val som är 
bäst. En rimlig generell princip är dock att välja tidig behandling och att vara öppen för att levodopa i allmänhet 
har bredast symtomlindrande effekt. 
Det är en vanlig missuppfattning bland patienter och vårdpersonal att antiparkinsonmedel endast hjälper under 
några år. Detta är inte korrekt. Patienter med idiopatisk PS har även efter många år  gynnsam effekt mot 
parkinsonismen, om än inte lika god som initialt.  Den enskilda dosens effekt blir däremot vanligen kortare och 
marginalen till biverkningar minskar med sjukdomens progress. Det terapeutiska fönstret blir smalare med tiden, 
men stängs inte vid PS, till skillnad från vad som är fallet vid vissa atypiska parkinsonismtillstånd. Vanligen 
börjar symtomfluktuationer uppträda efter 3-7 år av sjukdom och det man först kan notera är off-symtom vid 
uppvaknande och dosglapp 5-6 timmar efter intagen levodopa-dos. Inom loppet av några år kan detta utveckla 
sig till kortare effektduration (nedåt knappa 2 timmar). Samtidigt med utveckling av dosglapp ökar också risken 
för utveckling av hyperkinetiska, koreatiska dyskinesier (”överrörlighet”). Prediktorer för detta är låg 
debutålder, låg kroppsvikt, kvinnligt kön, sjukdomsduration >3 år och högre levodopa-doser såsom doser över 
450 mg per dag. 
I Parkinsonsammanhang är av hävd en  patient ung som insjuknar före 50 års ålder, och en äldre >75 år, med en 
mellangrupp mellan 51-74 år. Gränserna är arbiträra. 
Terapiråd – yngre patient (<50 år) 
Diagnostik och terapistart av mycket unga patienter (<40 år) med misstänkt PS bör ske av läkare med speciell 
förtrogenhet med denna grupp av patienter, i första hand neurolog med specialintresse för PS. 
Är symtomen lindriga kan förstahandsmedlet vara en dopaminagonist, MAO-B-hämmare eller levodopa i låg dos. 
Valet av behandling skall styras av vilka symtom som besvärar patienten mest, och risken för komplikationer på 
sikt. Hos unga patienter skall man vara medveten om att risken är relativt hög för att utveckla hyperkinesier vid 
levodopa behandling och impulskontrollstörning vid dopaminagonistbehandling. För bästa effekt av 
farmakologisk behandling rekommenderas att den kombineras med riktad rehabilitering, särskilt fysioterapi och 
fysisk träning, redan tidigt. 
En strategi är att starta med ett medel, och relativt tidigt börja med kombinationsbehandling med 
dopaminagonist, levodopa med COMT-I och MAO-B-I, med var för sig relativt låga doser, men med farmakologiskt 
överlappande halveringstider och behandlingseffekter. Någon EBM-information om att denna strategi är 
framgångsrik i att minska riskerna för utvecklandet av komplikationer respektive i att bevara funktionen finns 
inte, men i en studie (PD-MED, Lancet 2014) där denna princip tillämpats var frekvensen av hyperkinesier klart 
lägre än i tidigare historiska material med mer monoterapi levodopa. 
Hypokinesi/bradykinesi är vanligen det mest handikappande symtomet. När symtom som förorsakas av 
hypokinesi (till exempel nedsatt finmotorik i handen, bristande medrörelser av armen, korta steg) går i regress, 
indikerar detta en lämplig första medicineringsnivå för levodopa. Tremor kan då fortfarande kvarstå i viss mån, 
men dessa besvär minskar erfarenhetsmässigt med tiden även om behandlingen inte ändras. Är tremor mycket 
besvärande kan tillägg av dopaminagonist göras. DBS bör övervägas vid farmakologiskt terapiresistent tremor. 
 
 


Förslag till behandlingsstart för ung patient 
Vid föga funktionshämmande 
symtom 
Vid funktionshämmande symptom 
Start med MAO-B-I 
Start med dopaminagonist 
Start med levodopa 
Selegilin, 5-10 mg/dag, med tillägg 
av levodopa eller dopaminagonist 
när så krävs för mer effektiv 
symtom-lindring. 
Rasagilin, 1 mg/dag Safinamid  50-
100 mg/dag, Några studier i 
monoterapi i tidig fas föreligger 
inte och subventionering utgår f n 
inte. 
MAO-B-hämmare har svagare 
antiparkinson-effekt än övriga 
alternativ. 
pramipexol, 1-2 mg/dag eller 
ropinirol, 3-12 mg/dag, 
upptrappning enligt FASS. 
Har generellt något lägre 
symtomlindrande effekt och större 
risk för biverkningar (illamående, 
trötthet, benödem, psykisk 
påverkan, impulskontrollproblem) 
än levodopa. Vid tidig sjukdom kan 
effekten av dopaminagonister 
gynnas av  att det även finns 
endogen dopaminstimulering. 
Flera preparat kan behöva prövas. 
Dostitrera försiktigt. Utvärdera 
effekten – tillräcklig symtomlindring 
för patienten? 
Överväg tidigt komplettering MAO- B-
I eller levodopa, ev med COMT-I. 
Patient och anhörig skall 
återkommande informeras om risk för 
impulskontrollstörning eftersom 
risken ökar med längre användning 
och högre doser. 
Starta med 50 mg på morgonen 
och öka var tredje dag med 
tillägg av 50 mg tills dosen 50-
100 mg x 3-4 har uppnåtts. 
(lägre dos vid låg kroppsvikt 
och till kvinnor.) 
Utvärdera effekten efter en 1 
månad. Var medveten om att 
effekten kan fortsatta att 
förbättras över flera månader 
på samma dos. Fortsatt 
upptitrering av doserna bör ske 
med försiktighet med tanke på 
risk för dyskinesier. 
Överväg tidigt komplettering med 
COMT-I, MAO B-I eller 
dopaminagonist. 
Undvik ”Quick-beredningar” 
som regelbunden behandling 
(utom vid sent anslag av 
medicin på morgonen). 
 
Terapiråd – patient i åldersmässigt mellanperioden (50-75 år) 
Redan lindriga symtom bör föranleda farmakologisk behandling eftersom de oftast redan har någon negativ 
effekt på livskvalitet. Man bör beakta att icke-motoriska symtom också kan förbättras av behandling och att 
dessa ofta har stor effekt på livskvalitet. Förstahandsmedel är ofta levodopa i låg dos (≤400 mg delat på 3-4 
doser). Beroende på symtomprofil och förutsatt avsaknad av riskfaktorer för beteende- eller kognitiv påverkan 
kan dopaminagonist vara ett likvärdigt alternativ. Även MAO-B- hämmare kan användas som första behandling 
vid milda symptom. 
 
 
 


Förslag till behandlingsstart för medelålders patient 
Vid föga 
funktionshämmande 
symtom 
Vid funktionshämmande symtom 
Start med MAO B-I 
Start med levodopa 
Start med dopaminagonist 
Selegilin, 5-10mg/dag, 
Rasagilin, 1 mg/dag  
Fördela dygnsdosen 
levodopa på 3-4 tillfällen. 
Titrera upp dosen till 
klinisk effekt eller till 300 
mg och invänta därefter 
effekt som kan ta flera 
veckor att utvecklas. I 
enstaka fall kan doser 
uppåt 600 mg under ett par 
månader krävas. Vid 
intolerans kan takten i 
upptrappningen sänkas. 
Pramipexol, 1-2 mg/dag, 
Ropinirol 3-12 mg/dag, 
upptrappning enligt FASS. Vid 
intolerans (illamående, 
Safinamid 50-100 mg/dag, 
Några studier i monoterapi i 
tidig fas föreligger inte och 
subventionering utgår f n inte. 
trötthet, ortostatism), sänk 
takten i dosupptrappningen 
eller byt preparat. 
MAO-B-hämmare har svagare 
antiparkinsoneffekt än övriga 
alternativ. 
Tillägg av dopaminagonist 
Tillägg av levodopa skall 
kan prövas om man inte 
erbjudas vid otillräcklig 
uppnår tillräcklig symtom- 
symtomreduktion med 
reduktion med levodopa 
dopaminagonist. 
enligt ovan. 
Levodopadosen kan då 
ofta sänkas något. 
 
Uppmuntra till fysisk träning och anti-stressteknik. Hänvisa patient till fysio- och arbetsterapi och undersök 
eventuellt hjälpmedelsbehov. Om svag eller utebliven effekt - ta ställning till om det finns depressiva besvär 
som hindrar effekt och omvärdera även diagnosen. 
Terapiråd – äldre patient (> 75 år) 
Diagnostik av PS hos äldre patienter bör enligt rekommendationer i de nationella riktlinjerna främst handläggas 
av neurolog eller geriatriker, om man har erfarenhet av sjukdomen. Samsjuklighet tilltar med stigande ålder och 
är ett problem som måste beaktas både vid diagnostik och behandling av en äldre patient som misstänks ha PS. 
De differentialdiagnostiska problemen beskrivs nedan, men diagnostiska problem kan också uppstå hos en äldre 
person med stela leder, ospecifik tremor, avtagande minnesfunktioner mm. 
Läkemedel mot PS kan ha god effekt också i högre åldrar under förutsättning att man beaktar de ökade riskerna 
för biverkningar och interaktioner. 
Hypokinesirelaterade symtom är de mest funktionshindrande hos äldre liksom hos yngre. God rörelseförmåga kan 
vara helt avgörande för möjligheten till en oberoende livsföring, särskilt påtagligt för den äldre patienten. Av 
alla tillgängliga läkemedel mot PS har levodopa störst möjlighet att reducera hypokinesi och vanligen lägre risk 
för biverkningar än övriga farmaka. 
Behandlingen i tidig fas hos en äldre parkinsonsjuk patient med funktionsinskränkande hypokinesi bör därför vara 
monoterapi med levodopa. För en patient med mild symtomatologi kan även terapistart med MAO-B-hämmare 
eller dopaminagonist övervägas med beaktande av att risken för många av biverkningarna är högre hos den äldre 
patienten. 
Man bör starta med en låg dos levodopa, 50 mg x 1, en dos som sedan successivt ökas till 3-4 doser per dag, 
varefter de enskilda doserna ökas till cirka 100 mg. På en dygnsdos av cirka 300 mg efter 1-2 månaders 
upptrappning ses ofta en god effekt på parkinsonsymtomen. Vid otillräcklig effekt på hypokinesisymtom, utan 
besvärande biverkningar, kan levodopadosen ökas, dock sällan över 600 mg/dygn. I ett senare stadium med 
fluktuationer får ställning tas till kombination med andra antiparkinsonmedel. 
Den största risken för biverkningar hos äldre är konfusion, även om risken är mindre för levodopa än för andra 
antiparkinsonmedel. Hos en vulnerabel patient kan konfusion uppträda redan vid en låg dos. 


Risken är framför allt relaterad till patientens kognitiva funktionsnivå – en patient med avtagande 
minnesfunktioner är i riskzonen. Hallucinationer kan vara biverkan till levodopa men då måste man också beakta 
möjligheten av DLB med spontant uppkomna hallucinationer, som kan svara på behandling med 
kolinesterashämmare. Patient och anhöriga bör vara uppmärksamma på uppträdande av nytillkomna psykiska 
symtom och informeras om att dessa är reversibla efter dosjusteringar. 
Levodopa kan orsaka eller accentuera en befintlig benägenhet för blodtryckssänkning i stående eller sittande. 
Risken är dock mindre för levodopa och rasagilin än för dopaminagonister och för MAO-B-hämmare (främst 
selegilin). Blodtrycksmätning i liggande och i stående (direkt och efter 2-5 minuter) bör utföras före och 
regelbundet under all PS-behandling. En ortostatisk hypotension har störst konsekvenser för en patient med 
kardiovaskulär sjukdom, där behandlingarna av hypertoni och PS bör ske med viss försiktighet. Om uttalade 
ortostatiska blodtrycksfall förekommer tidigt i förloppet bör diagnosen omprövas. 
 
Terapi vid begynnande symtomfluktuation 
Bakgrund 
Symtomfluktuationer innebär att parkinsonsymtomen återkommer periodvis under dygnet i form av dosglapp 
(engelsk terminologi ”wearing off”). Dosglapp är nästan uteslutande kopplade till behandling med levodopa som 
har snabb farmakokinetik. För de flesta patienter börjar symtomfluktuationer uppträda 3-5 år efter PS-diagnos. 
Första symtomet är ofta ökad parkinsonism före intag av morgondos, men det gäller inte patienter som har god 
sömneffekt (ca 30 % av patienterna). De upplever inte sällan att de istället mår som bäst när de vaknat. Det inte 
alltid uppenbart för patienten att symtom under dagen är dosglapp. Inte sällan rapporteras bara att de upplever 
mer trötthet under dagen. Ett bra sätt att efterfråga dosglapp är att höra om de upplever att något förbättras 
inom en timme efter att de tagit levodopa. Mätning med aktigrafi (PKG, se bilaga) kan i vissa fall detektera 
symtomfluktuationer innan de uppmärksammas av patienten. Hyperkinesier är en annan typ av 
symtomfluktuation som i allmänhet inte uppkommer förrän patienterna haft diagnosen i mer än 3-5 år och först 
när hjärnans lagringskapacitet för dopamin har reducerats så mycket att patienten också börjat få dosglapp. 
Uppkomsten av hyperkinesier beror också på med vilken dos levodopabehandling pågått, då denna leder till 
postsynaptiska förändringar som ökar känsligheten för läkemedlet. I början är hyperkinesier något som 
uppträder när läkemedelseffekten slår till och särskilt om dosen är onödigt hög. Med tiden kan hyperkinesier 
också uppkomma när patientens tillstånd övergår till ”off” och man ser då mycket snabba växlingar mellan 
hyperkinesier och stelhet/långsamhet/tremor (s.k. on-off). 
Behandling av dosglapp 
Om underdoseringssymtom uppkommer sällan och oförutsägbart (högst en eller ett par gånger per dag) kan 
tillfälliga extradoser av snabblösligt levodopapreparat (T. Madopark Quick Mite®, 25-50 mg) provas för att 
motverka underdoseringssymtomen när dessa uppträder. Även intermittent behandling med 
apomorfininjektioner kan övervägas. Patienten bör dock uppmanas att vara restriktiv med extradoser för att 
undvika motoriska eller psykiska överdoseringssymtom. 
När dosglapp uppträder mer regelbundet bör läkemedelsregimen modifieras enligt någon av strategierna nedan: 
 
 


Behandlingsförslag: Dosglapp 
Fraktionering 
Enzymhämmare 
Dopaminagonister 
Nattbehandling 
Fördela dygnsdosen 
levodopa över fler 
medicineringstillfällen 
(dosfraktionering). 
Detta bör göras med 
beaktande av hur 
länge den aktuella 
dosen har effekt, 
vilket innebär att 
dygnsdosen kan 
behöva ökas något. Vid 
dosering tätare än 4 
timmar behöver 
morgondosen ofta vara 
högre än övriga doser 
(t.ex. 125%) 
Lägg till enzym- hämmare 
(COMT-I, MAO-B-I). Risk 
för ortostatism och 
psykisk påverkan. Vid  ca  
400 mg  levodopa/dygn 
sällan behov för 
dosreduktion, men vid 
600-800 mg/dygn ofta 
behov av sänkning för att 
undvika 
hyperkinesier/överdoseri 
ngssymtom. 
Använd gärna 
beräknade LED för 
vägledning, se bilaga. 
Tillägg eller dosökning 
av långverkande 
dopaminagonist kan 
prövas, levodopa- dosen 
kan då samtidigt 
behöva sänkas för att 
undvika hyperkinesier 
och andra 
överdoseringssymtom. 
Intermittent apomorfin- 
injektion vid behov. 
Vid återkomst av 
parkinsonism 
(underdoserings- 
symtom) nattetid. 
Prova tillägg av depot- 
levodopapreparat till 
natten, 100-200 mg, 
eller lägg till COMT-I 
till natten enbart. En 
långverkande enskild 
dos av dopamin- 
agonist, kan också 
vara effektivt. 
Insatser av fysioterapi och/eller arbetsterapi bör erbjudas. 
Behandling av hyperkinesier 
Första åtgärd vid hyperkinesier som besvärar patienten är att försöka sänka enskilda doser av levodopa och 
farmakologiskt eftersträva så jämn dopaminstimulering som möjligt. Detta kan ske genom  reduktion av 
levodopadoser och ersättande av en del av levdopadosen med dopaminagonist om det är möjligt. Amantadin i 
doser om 50-100 mg 2-3 ggr per dag reducerar överrörlighet för många, men tolereras ofta sämre av äldre 
patienter. Amantadin kan minska dagtrötthet, men medför en ökad risk för konfusion p.g.a. antikolinerga 
effekter. Insättning bör ske långsamt (minst en vecka mellan dosökningar) och utsättning skall inte ske abrupt 
eftersom detta av oklara skäl kan leda till ett utsättningssyndrom med delirium och/eller malignt hyperpyrexi-
syndrom. 
Uttalade fluktuationer när avancerad behandling inte är lämplig 
För en andel av patienterna blir det gradvis svårare att få stabil behandlingseffekt. Om man behöver ge 5 doser 
levodopa eller mer per dag, sjukdomen har pågått i mer än 3 år och pat har >1-2 timmar besvärande off per dag 
bör man överväga avancerad behandling. I de fall detta inte är aktuellt kan situationen ändå optimeras i någon 
mån med justering av konventionella terapier, eller med mikrotabletter av levodopa. I dessa fall är det viktigt 
att även systematiskt värdera förekomsten av åtgärdbara icke-motoriska problem vilka ofta har stor betydelse 
för livskvalitet, t.ex. sömnstörning, obstipation, urinblåsestörning, ortostatism, depression/ångest, smärtor och 
kognitiv påverkan (se respektive avsnitt). Följande åtgärder kan motverka problem med uttalade 
symtomfluktuationer: 
 
 


Behandlingsförslag vid svårbehandlade symtomfluktationer då avancerad 
behandling ej är lämplig 
Alternativ 
Alternativ 
Alternativ 
Alternativ 
Vid uttalade motoriska ”on-off” problem 
Vid förekomst av 
besvärandende 
hyperkinesier 
Fördela levodopa- doserna 
till varannan timme under 
dagen (”hyperfraktionerad 
dosering”). Kortare 
intervall och mycket små 
doser är sällan 
meningsfullt. Ge 
stödmedicinering till eller 
under natten vid behov. 
För patienter som behöver 
låga doser levodopa kan 
finjustering med 
vattenlösliga 
minitabletter, (Flexilev ®) 
och användning av 
dosautomat som påminner 
om intagstider vara ett 
alternativ till pump.  
Flexilev subventioneras till 
patienter där 
konventionell 
tablettbehandling med 
levodopa inte längre är 
tillräckligt för kontroll av 
motoriska fluktuationer 
och där avancerad 
behandling inte är lämplig. 
Ge tillägg av 
enzymhämmare 
(entakapon, tolkapon, 
rasagilin, safinamid). 
Selegilin   har ökad 
biverkningsrisk vid 
avancerad sjukdom 
och är svårt att 
använda/tolerera. 
Prova vattenlöslig 
levodopa eller apo- 
morfinpenna som 
”räddningsmedicine 
ring” 
Uteslut överdosering. 
Tillägg av amantadin 
kan övervägas om 
ordinarie medicinering 
inte kan sänkas. 
Amantadin ökar risken  
för hallucinos. 
Vissa patienter är 
hjälpta av memantin 
som sällan försämrar 
kognition, men kan ge 
trötthet. 
Vid frånvaro av kognitiva problem 
Vid kognitiva problem 
Prova att minska levodopadosen och öka 
dopaminagonistdosen. Agonistdoserna kan 
behöva fördelas över dygnet, alternativt ges 
transdermalt som rotigotinplåster. 
Minska medicinering (agonister, 
enzymhämmare). Sätt ut preparat med 
antikolinerg effekt. Överväg 
demensbehandling. 
 
Terapi mot svårbehandlade motoriska symtom 
Tremor 
Behandlingen av tremor bör inrikta sig på faktiska funktionshinder för arbete, störningar i ADL-funktioner   
eller sömn. Man bör diskutera med patient och anhöriga vad som utgör problemet. Tremor som generande 
symtom utan funktionshinder, bör man vara försiktig med insatser emot, då detta kan leda till överbehandling 
i förhållande till andra funktioner med risk för snabbare utveckling av komplikationer. Tillfälliga belastningar 
och stressframkallande episoder med tremor kan eventuellt behandlas med tillfälliga, icke-dopaminverkande 
medel. 
 
 


Intermittent tremor 
Permanent tremor 
men  intermittent 
funktionsstörning 
Svår funktionsstörning 
β-blockad 
(propranolol/atenolol - 
metoprolol har ingen 
känd effekt på tremor), 
bensodiazepin. 
dopaminagonist, ev 
intermittent 
apomorfininjektion, 
antikolinergika kan 
övervägas hos patienter 
med intakt  kognition. 
Ta ställning till DBS. Om 
intermittent dos Apomorfin är 
gynnsammt kan pumpbehandling 
övervägas. Klozapin kan ha god 
effekt. Effekt av Klozapin kommer 
snabbt och man kan därför göra 
”screening-test” med 6,25 – 12,5 – 
25 mg innan man bestämmer sig 
för kontinuerlig behandling. 
 
Hypokinesi/rigiditet 
Behandlingen bör inrikta sig på faktiska funktionshinder för arbete, ADL - funktioner eller sömn. Man bör 
diskutera med patient och anhöriga vad som utgör problemet. Tillfälliga belastningar och stressframkallande 
symtom bör särskiljas. Förutsägbara dosglapp bör identifieras. 
Intermittenta 
symtom 
Frekventa symtom 
med intermittent 
funktionsnedsättning 
Svår funktionsnedsättning 
Prova vattenlöslig 
levodopa eller 
apomorfinpenna som 
”räddningsmedicin”. 
Prova vattenlöslig levodopa 
eller apomorfinpenna som 
”räddningsmedicin”. Ge 
tillägg av nedbrytnings- 
hämmare (entakapon, 
tolkapon, rasagilin). Lägg 
till dopamin-agonist. 
Öka respektive medel.  
Förtäta doser om inte redan gjort. 
Överväg andra tillstånd. 
Överväg annan behandlings- 
strategi, t ex DBS, 
apomorfininfusion, eller 
levodopa-gel parenteralt om 
annan behandling inte är 
framgångsrik. 
Dystoni 
Med dystoni menas en ihållande kontraktion av en eller flera muskelgrupper. Dystonin är ofta smärtsam och kan 
vara ett tidigt symtom vid PS eller förekomma under medicinvilan nattetid. Dystoniproblem är vanligare hos 
yngre patienter. Dystoni svarar oftast väl på dopaminverkande behandling. I senare faser av sjukdomen kan 
dystoni komma att provoceras av levodopabehandling. Om smärtsamma dystonier förekommer kan 1-4 
injektioner per år, av botulinumtoxin fokalt i de dystona musklerna, vara effektivt. 
Antikolinerga läkemedel, exv Artane ® (licensmedel) eller Norflex® kan lindra dystonier, men biverkningsrisker 
måste beaktas. I svåra fall bör avancerade behandlingar som pump eller DBS övervägas. 
Gångsvårigheter, ”freezing of gait” (FOG) och balansosäkerhet 
Fenomenet är vanligt i senare fas av sjukdomen och då oftast som ”off-fenomen” under dosglapp, inte sällan 
under en period strax efter det patienten tagit nästa medicindos. Här kan fraktionering eller övergång till mer 
snabbverkande, vattenlöslig levodopa eller tillägg av apomorfinpenna övervägas. 
FOG kan dock även förekomma som ett icke levodopa-responsivt symtom och är då svårbehandlat. Symtomet är 
då ofta kopplat till vissa situationer, t ex passage genom dörröppningar. Det finns rapporter om att MAO-B-I har 
en speciellt gynnsam effekt på ”freezing of gait” (FOG). Behandling med memantin och 
acetylkolinesterashämmare har också i enskilda fall varit framgångsrikt. Fysioterapeuter kan ofta identifiera 
visuella och ibland auditiva ”trick” som kan vara effektiva för att komma ur ”freezing” och som kan reducera 
medicinbehovet. Det finns EBM fysioterapeutiska metoder som kan tillämpas. Arbetsterapeuter kan i hemmet 
och på arbetet också identifiera situationer som ibland ger upphov till ”freezing” och som kan åtgärdas med 
enkla medel, t ex handtag och markering med linjer på golvet.`
    },
    {
      rubrik: 'VII. Sömnrubbningar',
      text: `Sömnrubbningar  
Sömnstörningar är vanligare vid PS än i jämförbara kontrollgrupper. Olika undersökningar talar för en prevalens 
mellan 60 och 98 %. Flera faktorer medverkar till detta. Det handlar om direkt parkinsonrelaterade orsaker, 
andra åldersrelaterade orsaker, parallella sömnstörningar och depression, men också om biverkningar av 
läkemedel. Till de vanligare sömnproblemen hör REM-sleep behavior disorder (RBD, ca 40 %), insomni (40 %), 
mardrömmar (30 %), snarkningar (40 %), restless legs-symtom (RLS, 20 %) och somnambulism (5 %). Trötthet 
under dagen är vanligare än i kontrollpopulationer och kan förstärkas av antiparkinson-läkemedel. Plötsligt 
insomnande (Sudden onset of sleep) förekommer och kan förstärkas av antiparkinson-läkemedel. I vissa fall 
handlar det om ett narkolepsiliknande fenomen (SOREM – Sudden Onset of REM sleep) där patienten plötsligt 
somnar utan föregående trötthet, men vanligare är att patienten somnar efter en stunds trötthet. Dessa 
fenomen bidrar till en ökad risk för att somna vid ratten under bilfärd (21 % hos patienter med PS, jämfört med 
10 % i kontrollgrupper). Patienter med uttalad dagtrötthet eller insomningsattacker ska inte köra motorfordon. 
Insomni 
Åtgärder: Rådgivning om sömnhygien bör alltid övervägas. Vid insomni hos PS-patienten bör man analysera 
möjliga orsaker och rikta terapin därefter. Är orsaken nattliga parkinsonsymtom kan man överväga 
långverkande levodopapreparat och/eller dopaminagonister till natten, ev med fördel för långverkande 
beredningar. Dopaminverkande medicinering kan motverka insomning och doserna kan därför behöva minskas 
före sänggående. Selegilin ger upphov till uppiggande amfetaminliknande metaboliter, men är ett allt mer 
sällan använt preparat. 
Vid depression kan insomni vara ett symtom, men vanligare är tidigt uppvaknande. Antidepressivum med sedativ 
effekt bör övervägas vid insomni kopplad till depression, t.ex. mianserin 10-30 mg  eller mirtazapin 7.5-15 mg på 
kvällen.  
Vid mardrömmar kan det vara indicerat att minska antiparkinson-medicineringen kvällstid i första hand. Ibland 
kan mardrömmar vara förenade med somnambulism och nattlig konfusion eller nattliga hallucinationer. I dessa 
fall kan behandling med atypiska neuroleptika som kvetiapin eller klozapin vara av värde. Låga doser räcker ofta 
(t.ex. 25-50 mg kvetiapin eller 12,5-25 mg klozapin). 
Vid insomningsvårigheter utan tydlig åtgärdbar genes kan man vid tillfälliga besvär överväga kortverkande 
bensodiazepinlika preparat som zopiklon. För längre tids behandling kan en låg dos mirtazapin (7.5-15 mg) eller 
lågdos Mianserin 10 mg ½- 1 tablett till natten övervägas. Ett alternativ som ofta tolereras bra är melatonin. 
Melatonin är registrerat utan förmånsberättigande för vuxna under flera preparatnamn med med stor pris 
skillnad och som ett depot preparat  med varunamn Circadin®. 
Symtomatisk Restless Legs Syndrome, RLS 
RLS definieras kliniskt som en obehagskänsla, i extremiteter, som kommer när personen ligger/sitter still, 
framför allt under kväll/natt och förbättras vid rörelse. RLS kan vara en primär sjukdom eller uppstå sekundärt 
till andra tillstånd. Symtomen är vanligen sekundära  vid PS. Det är inte klarlagt om förekomsten av primär RLS 
egentligen är högre hos Parkinsonpatienter. Patofysiologin vid klassisk RLS tycks involvera låga järn-nivåre i CNS, 
medan PS snarare uppvisar det motsatta mönstret. Det finns inga belägg för att RLS-patienter har ökad risk att 
utveckla PS. En sekundär orsak till RLS-symtom är att dopaminverkande läkemedel går ur kroppen och RLS kan 
då närmast betraktas som ett abstinens-problem. Det faktum att RLS symtom startar senare i livet för PS-
patienter och att förekomsten av RLS-symtom är korrelerad till hur länge man haft parkinsonmedicinering talar 
för att problemet ofta är sekundärt till PS och PS-behandling. 
Åtgärder: RLS vid PS kan behandlas som RLS i övrigt, men med hänsyn till att RLS kan utgöra ett ”off”- symtom. 
Järnbrist eller lågt S-Ferritin ska uteslutas och vid behov ges järn (vid samtidig levodopabehandling kan 
parenteral behandling med fysiologiskt järn övervägast.ex. inj. Monofer® 100 mg/mL im eller iv eller inj. 
Venofer® 20 mg/mL iv). Om farmakologisk behandling behövs rekommenderas dopaminagonister till kvällen, 
eventuellt i kombination med levodopa, med beaktande av att RLS i viss mån kan vara ett ”off”-symtom vid PS. 
Perorala järn tabletter är mindre effektiva pga dess mindre fysiologiska egenskaper och har betydande 
interaktion med L-dopa preparat. 
I besvärliga fall kan gabapentin övervägas liksom pregabalin. Dessa har till skillnad från kombinationen 
oxykodon/naloxon (Targiniq®) inte registrerad indikation RLS, men är sannolikt säkrare att använda. En strategi 
för att undvika RLS är att uppnå snabb insomning, och för detta ändamål kan zopiklon fungera, eller i svårare 


fall mer långverkande alternativ som t.ex. klonazepam (Iktorivil®). 
REM-sleep behaviour disorder, RBD 
REM-sleep behaviour disorder representerar ett tillstånd med intensiv motorisk aktivitet i form av rörelser i 
extremiteter, tal och rop i sömnen, ofta i samband med hotfulla drömmar nattetid. Aktiviteten kan vara 
kraftfull nog att orsaka skador på sängpartners, eller att man faller ur sängen, men i övrigt vid RBD lämnar 
patienten inte sängen. Man har funnit att RBD är betydligt vanligare i samband med synucleinopatier, som PS, 
MSA och DLB. Prevalensen av RBD vid PS ligger kring 30-50%. RBD-symtomen kan komma flera år före de 
motoriska och kognitiva symtomen vid dessa sjukdomar. Flera studier har visat att >50% av personer med 
idiopatisk RBD utvecklar neurodegenerativ sjukdom med synukleinopati inom 10-12 år. 
Det strikta definitionen av RBD är sömnlaboratoriepåvisad avsaknad av muskulär atoni under REM sömnfasen. Det 
finns frågeformulär för RBD, men överenstämmelsen mellan en enkel anamnes på utlevelse av drömmar med 
motorisk aktivitet och verifierad RBD med avsaknad atoni, är mycket låg, ca 25%. Det förekommer livliga 
drömmar och drömaktivitet under flera olika faser av sömncykeln som kan misstas för RBD. 
Åtgärd: Man bör först utesluta att det rör sig om sekundär läkemedelsulöst RBD. Detta kan uppträda efter 
nyinsättning av betablockerare, SSRI eller SNRI-preparat. Mirtazapin® eller Mianserin®  kan prövas, men kan 
liksom andra SSRI/SNRI-preparat också aggravera symtomen, vanligen vid högre doser 30 mg eller mer av 
respektive medel. 
Det preparat som är bäst dokumenterat för behandling av RBD-symtom vid PS är klonazepam, Iktorivil® (0.25-1 
mg till natten). Nackdelen med klonazepam är en hög risk för konfusion och kognitiv påverkan. Ett säkrare, men 
mindre effektivt alternativ är melatonin (se ovan). För vissa  patienter minskar RBD när man sätter in parkinson-
läkemedel som levodopa eller pramipexol, men de kan också öka.`
    },
    {
      rubrik: 'VII. Autonom dysfunktion',
      text: `Autonom dysfunktion 
Ortostatisk hypotension 
Definition: Ett systoliskt blodtrycksfall >20-30 mm Hg och ett diastoliskt blodtrycksfall >10-20 mm Hg i samband 
med lägesändring, från liggande till stående och efter 3 minuter i stående, med subjektiva symtom. Postprandial 
hypotension av motsvarande grad kan förekomma. Utebliven sympatikoton pulsfrekvensökning i samband med 
lägesändring talar för neurogen hypotension eller kardiovaskulär autonom dysfunktion. 
OBS! Ortostatiskt blodtryckfall kommer akut eller 2-5 min efter uppresning och kan missas om man bara mäter 
tryck direkt efter uppresning. Parkinsonpatienter med ortostatism har ofta variabla blodtryck och det kan krävas 
upprepade blodtrycksmätningar eller ett formellt tipp-test (görs av klinisk fysiologi eller klinisk neurofysiologi) 
för att diagnostisera dessa fall. 
Om signifikant ortostatisk hypotension förekommer tidigt i sjukdomen, kan detta vara tecken på atypisk 
parkinsonism. Bidragande orsaker kan vara hypovolemi och läkemedel. Försämring av ortostatism ses ofta vid 
infektion, särskilt UVI. 
Ickefarmakologisk behandling: Eliminera eller behandla förvärrande och utlösande faktorer såsom 
infektionssjukdomar, uttorkning och annat, följt av att se över samtidig medicinering (om 
blodtryckssänkande medel används, bör dosreduktion eller utsättande eftersträvas). Fysisk aktivitet är viktig, 
men av vikt är att man lär långsam uppstigning. Ökat saltintag. Små och mindre kolhydrathaltiga måltider. 
Höjd huvudända på sängen (10-20 grader). Drycker med isotona salter och långsamma kolhydrater. Viktigt 
med adekvat vätsketillförsel. Två glas vatten på morgonen kan påtagligt höja det systoliska blodtrycket och 
förbättra patientens symtom. Snabbt intag av ett par glas vatten har en ”rescue”-effekt som kommer inom 
10 minuter och varar i en timme. Stödstrumpor, eller hellre kompressionsbyxor, har bevisad effekt men kan 
vara svåra att använda i praktiken då de måste kläs på i liggande. Även maggördel kan ha gynnsam effekt. 
Undvik: Snabba uppresningar (från sittande/liggande). Värme, men också starkt solljus. Kraftig ansträngning. 
Stora/kraftiga måltider. Alkohol. 
Farmakologisk behandling: Undvik blodtryckssänkande medicin. Sympatikomimetikum (etilefrin, Effortil®), 
mineralkortikoider (fludrokortison, Florinef®), alfa-2-agonist (midodrin, 5 mg upp till 45 mg/dag). Bloddoping i 
extrema fall (transfusion), erytropoetin, med symtommiskning och EVF >45 % som riktvärde. I utvalda fall kan 
licensmedlet Droxidopa (L-DOPS, en noradrenalin prekursor) vara effektivt i doser 100-600 mg x 3. 
Pyridostigmin (Mestinon) kan förstärka ganglionär kolinerg transmission och därigenom förstärka den sympatiska 
blodtrycksreflexen. Startdos 30 mg x 2, kan ökas till 60 mg x 3. Pyridostigmin höjer inte supint tryck. 


Behandlingen har begränsad dokumentation och effekten är måttlig, men synergistisk effekt tillsammans med 
sympatikomimetika har beskrivits. Noradrenalinupptagshämmaren atomoxetin har liksom pyridostigmin främst 
effekt när patienten inte har uttalad sympatisk perifer denervation (t.ex. vid MSA) och ökar inte heller risken för 
höga blodtryck i liggande. Atomoxetin har främst studerats i dosen 18 mg x 2. För läkemedelsbehandling av 
nattlig hypertoni i liggande kan kvällsadministrering av klonidin, eplerenon, losartan, nitroglycerin (Imdur®) 
eller sildenafil övervägas. 
I de nationella riktlinjerna har etilefrin och midodribehandling av ortostatism prioritet 3 (NR, PD37) 
Behandling med fludrokortison har prioritet 5 
 
och behandling med droxidopa prioritet 8 (kan erbjudas i undandtagsfall). 
Värmereglering/Svettningar 
Bakgrund: Hos patienter med PS förekommer besvär av ”excessive sweating” och då oftast relaterat till den 
drabbade kroppssidan eller dominerande i huvud-nackparti. Parkinsonpatienter har sannolikt inlagring av 
Lewy-inklusionskroppar och cellförlust i hypothalamus som medverkar till störd värmereglering. Svettningarna 
är medierade via efferenta sympatiska kolinerga fibrer. Oftast är svettningarna inte så uttalade men det 
förekommer ”utbrott” av svettning som kräver flera klädbyten per dag hos drabbade patienter. 
Behandling: Då besvären ofta är relaterade till ”off”-fas innebär en justering av levodopados eller DA- agonist, 
med minskade fluktuationer, även en lindring av besvären med svettningar. Antikolinergika kan reducera 
besvären eftersom den autonoma innervationen av svettkörtlarna sker via kolinerga postganglionära 
sympatiska fibrer. Erfarenhetsmässigt är dock effekten relativt liten. Svettattackerna mildras med propranolol 
(beta-adrenerga blockare) särskilt vid besvär i ”peak-dose”-fas. SNRI- preparatet mirtazapin med dess 
antihistamineffekt har visat sig kunna lindra besvär med svettningar vid PS. Vissa läkemedel, såsom venlafaxin, 
har hyperhidros som vanlig biverkan. Det är väl värt att undersöka om patienten står på något läkemedel som 
har svettningar som vanlig biverkan. 
Oral hälsa 
Bakgrund: Parkinsons sjukdom innebär en funktionsnedsättning som kan påverka munhälsa. Omfattas både av 
motoriska och icke motoriska symtom såsom käksmärta, salivering, muntorrhet, nattligt sötsug, digestion, 
försvagad tuggförmåga, viktnedgång, svårighet att rengöra/borsta tänder pga nedsatt finmotorik el dyskinesier, 
illasittande protes mm. 
Behandling och åtgärd: Tidig kontakt med tandläkare och/eller tandhygienist och dietist för förebyggande 
tandvård och regelbunden kontroll för att behålla den orala hälsan, förebygga karies, öka välbefinnandet, 
bevara tuggmöjlighet, få kostråd och förhindra viktnedgång. Få råd om hjälpmedel vid tandborstning och råd om 
tandvårdsstöd. 
Dregling, salivering 
Bakgrund: Svalgmuskulaturen är som alla andra muskler dopaminberoende för optimal koordination och 
funktion. Upprepade sväljningsrörelser kan leda till uttröttning och mera symtom. Vid långvarig sjukdom hos 
patienter med PS kan degeneration i hjärnstamskärnor intill substantia nigra bidra till sväljningssvårigheter och 
påverkan av den autonoma innervationen av spottkörtlar leder till salivansamling, som inte sväljs undan ger en 
ökad mängd saliv i munhålan och ofrivilligt rinnande saliv ur mungipan. 
Behandling: Analys av när besvären kommer, oftast i ”off”. Optimerad antiparkinsonmedicinering är den 
vanligen mest effektiva behandlingen. Remiss till logoped rekommenderas för bedömning 
Och rådgivning/behandling. Kolsyrad dryck stimulerar gommens sväljningreflex, och råd att inte tala under 
födointag underlättar motoriken. Genom att tugga tuggummi ökar sväljningsprocessen och det kan minska 
obehaget ibland. När det inte går att justera medicineringen optimalt kan man pröva antikolinergika ev 
lokalt i munhålan för att minska salivproduktionen, i form av ögondroppar Atropin 1% 1 – 3 droppar under 


tungan inför måltider. Amantadin i doserna 100-200 mg dagligen, kan utöver minskade motoriska 
fluktuationer reducera salivering genom antikolinerg verkan, men är förknippat med risk för konfusion.  
Behandling med botulinumtoxin mot salivering har i nationella riktlinjer fått hög prioritet (4, NR, PD32). 
 
Botulinumtoxininjektion i parotis- och submandibulariskörtlarna reducerar salivproduktionen och kan ha god 
effekt på dreglingsproblematik. Injektionen ges med hjälp av ultraljudsguidning och upprepas inte oftare än var 
16e vecka.  Xeomin® har till skillnad från övriga botulinumtoxinpreparat på svenska marknaden indikationen 
kronisk hypersalivering till följd av neurologiska sjukdomar. Den dos som föreslås framgår ur FASS. Effekten mot 
salivering blir effektivare när både parotis och submandibulariskörtlar behandlas. Man måste beakta risken för 
dysfagi.  
Dysfagi 
Bakgrund: Sväljningssvårigheter är en normal utveckling av PS, med ökade besvär ju längre sjukdomen varar. 
Svalgmuskulaturen är som alla andra muskler dopaminberoende för optimal koordination och funktion. 
Patienter med PS uppvisar först en oförmåga att föra födan genom munnen till svalget och vidare till 
matstrupen. Sedan tillkommer bristande koordination, av svalgets muskulatur, som initialt leder till lätt 
tendens till att vätska kan komma fel – tyst/overt aspiration – senare kan total svalgpares utvecklas. Upprepade 
rörelser kan leda till uttröttning och mera symtom. Vid långvarig sjukdom kan degeneration i hjärnstamskärnor 
intill substantia nigra bidra till sväljningssvårigheter. 
Behandling: Analys av om och när besvär kommer. Optimering av antiparkinsonmedicinering. I vissa fall kan 
apomorfininjektioner hjälpa tillfälligt. Kontakt med dysfagiteam; röntgen av sväljningsakt, logoped- och 
dietistbedömning, samt eventuell fiberendoskopisk undersökning kan ge vägledning om eventuell lokal 
behandling. Kolsyrad dryck, kostomläggning och passerad kost, eventuellt mjukgörande och geltillsats, för 
bättre konsistens kan underlätta. Ställningstagande till PEG-sond. 
Fyllnadskänsla i mag-tarmkanalen 
Bakgrund: Hos många patienter med PS uppträder snart subjektivt obehag med känsla av överfylld magsäck till 
följd av nedsatt peristaltik i mag-tarmkanalen. Ventrikeltömningen påverkas av storleken på måltiden och 
kostinnehållet, framför allt fettinnehållet. Hög levodopados påverkar också tömningsförmågan. Vid avanceradPS 
förkommer också gastropares. 
Behandling: Kostråd: minska fettinnehållet, skilj tablett- och måltidsintag; ta medicinen minst 30 minuter före 
måltid. Sätt ut antikolinergika. Minska enskilda levodopadoser. Lägg till COMT-hämmare. Överväg att ge 
domperidon (Domperidon®), 10 mg  inför måltid, som reducerar perifera dopaminverkande effekter. Minska 
hyperaciditet med protonpumpshämmare eller histaminantagonist. Vid gastropares bör ovan bidragande faktorer 
justeras. Erytromycin kan övervägas. Fördröjd ventrikeltömning bidrar till symtomfluktuationer vid 
levodopabehandling och kan därför utgöra indikation för avancerad terapi med kontinuerlig infusionsbehandling.  
Obstipation 
Bakgrund: Obstipation är vanligt förekommande bland äldre personer, men ses i ökad frekvens hos 
parkinsonpatienter. Den är sannolikt uttryck för en kombination av faktorer som nedsatt allmän rörlighet och 
reducerat vätskeintag, som leder till uttorkning av tarminnehållet. Grundsjukdomen påverkar det 
gastroenteriska nervsystemet lokalt och medför nedsatt tarmmotilitet och längre intervall mellan avföringar. 
Antikolinergika och vissa andra läkemedel kan vara bidragande. 
Behandling: Fysisk aktivitet. Rikligt med dryck. Fiberrik kost. Tillägg av makrogol (Movicol® med flera) 
alternativt osmotiskt verkande eller bulklaxantia. Om patienten trots mjuk konsistens besväras av ofullständig 
tarmtömning kan intermittent behandling med tarmirriterande medel som pikosulfat (exv Cilaxoral®) vara 
användbart. Hukande position på toaletten med fötterna på pall (squatting) underlättar tömning. Lavemang 
kan behövas. Eliminera/minska antikolinergika. 
Differentialdiagnostik: Fekalom, subileus, ileus, volvolus. 
Täta trängningar, ofullständig blåstömning, nokturi 
Bakgrund: Det är vanligt med miktionsstörning hos parkinsonpatienter, såväl män som kvinnor. Vid uttalade 


besvär kan inkontinens bli resultat, ibland pga svårigheter att hinna fram i tid till toalett. Risk för 
urinvägsinfektioner finns vid residualurin. Till följd av grundsjukdomen ses en detrusorhyperreflexi och 
nedsatt bäckenbottenrelaxation i anslutning till miktion. Mer än två vattenkastningar/natt är avvikande. 
Ofullständigt tömd urinblåsa är alltid patologiskt. Imperativa trängningar under dygnet kan vara normalt, men 
om långsam tömning eller ofullständig tömning förekommer är det patologiskt. Män kan dessutom ha 
prostatahyperplasi vilket förvärrar symtomen. 
Behandling: Uteslut prostataproblem hos män. Minska vätskeintaget efter kl. 18. Höjning av sängens huvudända 
10 grader (hela sängen skall luta så att hjärtat är i ett plan högre än njurarna) kan minska urinproduktionen upp 
till 500 mL/natt. Läkemedel: Välinställd dopaminverkande stimulering med levodopa/dopaminagonister kan 
reducera nattliga symtom av täta trängningar, eftersom urinblåsan är delvis dopaminergt innerverad. Ett flertal 
antikolinergika, som anses likvärdiga, finns bl.a. Detrusitol®, Emselex®, Vesicare®, och Betmiga® som minskar 
detrusorhyperaktiviteten alternativt kan lågdos tricykliskt antidepressivum prövas, men vid kognitiv svikt kan 
konfusion och förvärrad kognition uppträda. I undantagsfall kan lågdos ADH-preparat som desmopression 
(Minirin®) övervägas för att minska urinproduktionen under natten, men elektorlytrubbningar kan ofta bli 
följden. Det är viktigt med vätskerestriktion vid Minirinbehandling och att noggrannt följa elektrolytstatus. 
I de nationella riktlinjerna framhålls att perifera antikolinergika kan erbjudas (prioritet 6, NR PD36). 
Vid farmakologiskt refraktära urinträningar kan även injektion av botulinumtoxin i blåsvägg erbnjudas (görs 
oftast av urolog, prioritet 7, NR PD36).`
    },
    {
      rubrik: 'VII. Beteendestörningar',
      text: `Beteendestörningar 
Dopaminerga dysregleringssyndromet 
Dopamin har en i vid mening viktig roll för rörelsekontrollen, men också för inlärnings- och belöningsfunktioner, 
och farmakologisk behandling med dopaminverkande medel är inte nödvändigtvis diskriminativ i effekter, även 
om nervbanor med en pågående degeneration kan antas vara känsligare för medicineringseffekter jämfört med 
intakta bansystem. Ett begrepp ”det dopaminerga dysregleringssyndromet” har myntats. Det karakteriseras av 
eskalerande intag av dopaminverkande medel, främst kortverkande medel, men den totala anti-parkinson 
medicineringen bidrar. Det är främst yngre, med ett plastiskt nervsystem, som drabbas men alla patienter kan i 
princip utveckla syndromet. 
Dysregleringen av intaget kan leda till flera olika beteendestörningar, som i sig kan vara oberoende av 
receptordysreglering. Ett exempel är ”punding” som betecknar meningslösa stereotypa beteenden med 
upprepade rörelser och handlingar. 
Någon specifik behandling finns inte, men man bör misstänka att tillståndet kan ha uppkommit om patienten har 
tilltagande förbrukning av kortverkande medel. Vid misstanke om doseskalering bör skärpt behandlingskontroll, 
rådgivning och remiss till motorikteam på specialistklinik ske. 
Impulskontrollförlust: Hypomana tillstånd, överdrivna köp- och 
spelberoende, samt hypersexualitet 
Impulskontrollförlust (Impulse Control Disorder) är kopplat till, men inte obligat förenat med, det dopaminerga 
dysregleringssyndromet. Det förekommer vid all anti-parkinson medicinering men har betydligt högre frekvens 
för dopaminagonister än levodopa och MAO-B-I och tar sig uttryck i socialtmycket avvikande och kompulsiva 
beteenden, såsom excessivt ätande,köp- och  spelberoende, samt hypersexualitet. Vid pramipexol- och 
ropinirol-terapi anges prevalensen till cirka 17%, vid rotigotinterapi möjligen något lägre. Det är oklart huruvida 
risken är dos-beroende. 
Symtomen kan komma snabbt, oväntat och närsomhelst i sjukdomsförloppet, varför patienter och anhöriga 
redan vid initiering av  behandling med dopaminverkande medel bör informeras om att det kan uppkomma. 
Risken för   
impulskontrollförlust ökar med långvarig behandling och upp till 50% drabbas någon gång under behandlingen. 
Informationen bör därför upprepas med viss regelbundenhet. Risken är särskilt hög hos yngre patienter och 


framför allt yngre män. 
Förebyggande vaksamhet och information om tillståndet, för såväl patient, familj och vårdgivare är av vikt. 
Förekomst av impulskontrollstörningar bör alltid efterfrågas, särskilt hos patienter med dopaminagonistterapi. 
Patienter berättar ofta inte spontant om problemen och kan ibland även dölja dess förekomst, varför även 
medföljande anhöriga/vänner kan ge värdefull information. Särskilt i riskgrupper kan skalor för 
impulskontrollstörningar vara av värde - den hittills enda validerade skalan är QUIP-RS. 
Behandlingen innefattar reduktion och helst utsättande av den misstänkt orsakande 
antiparkinsonmedicineringen, särskilt dopaminagonister. Samtidig depression bör uppmärksammas och 
behandlas. Beteendeterapi vid exv  spelmissbruk kan vara framgångsrik. Vid reduktion av agonister löper ca en 
femtedel av patienterna risk  för ett utsättningssyndrom (dopamine agonist withdrawal syndrome, DAWS) som 
kan vara handikappande och i enstaka fall långdraget eller kroniskt (se avsnitt om dopaminagonister). Risken för 
DAWS är särskilt hög vid samtidiga impulskontrollstörningar. 
Impulskontrollstörningar förbättras ofta när man övergår till pump eller DBS behandling, särskilt om peroral 
dopaminagonistbehandling kan sättas ut.  
Vid kvarstående problem trots att genomförbar medicinreduktion gjorts är behandlingsalternativen få och 
inte väl studerade. Kognitiv beteendeterapi har enligt Nationella riktlnjer prioritet 8, d.v.s kan erbjudas i 
undantagsfall och behandling med naltrexon har studerats i en RCT-studie med cross-over design. Prioritet 
för naltrexonbehandling är för närvarande låg prioritet 9 (NR, PD38). 
Hypersexualitet 
Sexualdrift, libido, styrs från flera CNS-centra, men även limbiska centra spelar stor roll och en ökad 
dopaminverkande stimulering, t.ex. hos parkinsonpatienter, i dessa områden ger en ökad libido, framför allt vid 
en samtidig degeneration i motsvarande områden. Symtomet kan bli mycket besvärande och ställa till 
situationer som komplicerar det vidare sociala umgänget. I sin extrema form skall det betraktas som ett 
psykoslikande tillstånd. Symtomet har förekommit i samband med all dopaminverkande medicinering 
inkluderande dopaminagonister, levodopa och MAO-B-I. 
Gradering: Lätta fall: ökad, normal libido, ibland som återgång till normal libido efter en period av 
minskad libido. Svåra fall: ökad, onormal libido med negativa sociala konsekvenser. Extrema fall: att 
jämställa med vanföreställningar och psykos. 
Behandling: Information. Lätta former: Sänkt dos av antiparkinsonmedicinering eller byte av preparat. 
Utsättning av läkemedel, i första hand utsättning eller dosminsknng av dopaminagonist, men man kan 
också överväga justera ner MAO-B-I, COMT-I, antikolinerga medel. Noggrann monitorering krävs.`
    },
    {
      rubrik: 'VII. Kognitiv svikt',
      text: `Kognitiv svikt  
Nedsättning av kognitiva funktioner vid PS är inte ovanligt. Efter 10 års sjukdom har kognitionen visats 
försämrad hos två tredjedelar av patienterna, mestadels av relativt lindrig grad, medan cirka en tredjedel av 
dem kan ha utvecklat demens. I studier av personer med ”Mild Cognitiv Impairment” (MCI), mild kognitiv svikt, 
ses att en viss andel utvecklar demens inom några år och sannolikt kan nedsatta kognitiva funktioner ses som ett 
observandum för senare demensutveckling även vid PS. Å andra sidan skall man tänka på att nedsatt kognition 
kan vara en konsekvens av uttalad sömnrubbning, samtidig depression eller otillräcklig behandling med 
dopaminverkande läkemedel. Den preliminära definitionen av MCI vid PD innebär att det skall finnas en varaktig 
sänkning (d.v.s. inte varierande med medicineffekter) av en högre kortikal domän av 5 möjliga; visuospatial 
funktion, språk, minne, uppmärksamhet och omdöme, och som påverkar ADL/livsföring. En patient med MCI 
löper större risk för ogynnsamma reaktioner på läkemedel varför medicinering bör ske varsamt. Det har också 
visats att PS patienter redan vid diagnostillfället kan ha subtil kognitiv påverkan som dock inte alltid märks för 
patienten eller dess närstående. 
Konfusion 
Vid PS, och med stigande ålder, föreligger reduktion av ett flertal neurotransmittorer, inklusive acetylkolin. 
Kolinerg dysfunktion har sannolikt stor betydelse för uppkomsten av konfusion. Risken för  konfusion är mycket 
stor vid behandling med antikolinerga läkemedel givna till patienter med försämrad kognition, särskilt om 
demens utvecklats. Risk för konfusion föreligger med alla antiparkinsonmedel och både läkemedelsdos och grad 


av kognitionsnedsättning är av betydelse. Andra läkemedel kan ockå utlösa konfusion och det kan också uppstå 
på grund av nytillkommen annan sjukdom, t ex infektion, hjärtsvikt, elektrolytrubbning, dåligt reglerad 
diabetes, urinretention. 
Antikolinergika skall inte ges till äldre med PS, bland annat pga att de har flera riskfaktorer för konfusion  och 
då antikolinergika har mindre antiparkinsoneffekt än andra medel. 
Konfusion debuterar plötsligt under timmar till dagar och kan minska och upphöra under loppet av en längre tid. 
Avvakta därför ca 6 mån innan bedömning av om patienten har demens. 
Konfusion är i princip ett reversibelt tillstånd om behandlingen riktas mot den orsakande faktorn. En lugn  miljö, 
adekvat bemötande och god omvårdnad är viktiga faktorer vid konfusionsbehandling, se Bilaga II: Praktiska 
handlingsplaner vid akuta tillstånd, avsnitt Handlingsplan om konfusion vid PS eller andra sjukdomar i basala 
ganglier. 
Illusioner 
Omtolkningar av synintryck som ändrar karaktär, ofta i speciella situationer eller tillfällen. Illusioner vid 
sömn/vakenhetsändringar är benigna och kan minskas med medicinjusteringar, t.ex. dosminskning av 
dopaminverkande preparat och läkemedel som är sederande eller sänker reaktionsförmågan. 
Acetylkolinesterashämmare kan reducera förekomsten av illusioner när det finns en underliggande kognitiv svikt. 
Synfenomen i perifera synfältet är ofta off-symtom. 
Neuroleptikabehandling är olämplig. 
Hallucinationer 
Hallucinationer är sinnesintryck som uppkommer utan något sensoriskt stimulus. Risken för hallucinationer  ökar 
med kognitiv svikt – längre sjukdomsduration, och ålder/samsjuklighet. 
Syn- och hörselhallucinationer kan förekomma som biverkan vid behandling med samtliga antiparkinsonfarmaka. 
Hörselhallucinationer förekommer framför allt vid depression eller psykos. Det är  ovanligt med känsel eller lukt 
sensationer. 
Förekomsten av hallucinationer kan vara relaterad till läkemedelsanvändning och är då ofta dosberoende och i 
princip reversibla. Vid behandlingsrefraktära eller spontana synhallucinationer  hos en patient med parkinsonism 
skall DLB misstänkas (se nedan). Symtomen kan initieras av tillstötande medicinska orsaker, t.ex. infektioner. 
Behandlingen vid hallucinationer består i första hand i att åtgärda ev. förekommande medicinsk orsak och 
åtgärda en utlösande farmakologisk orsak, t.ex. reducera dosen eller avbryta behandlingen med det misstänkta 
läkemedlet. Om ökningen av de motoriska symtomen då blir besvärande kan återgång till det aktuella anti-
parkinsonmedlet övervägas men med tillägg av ett atypiskt neuroleptikum, dock med viss risk att 
parkinsonsymtomen då åter accentueras. 
OBS – Undvik i det längsta att ge klassiska neuroleptika till patienter med parkinsonism, i synnerhet vid samtidig 
demens (exv DLB, Parkinsondemens) eftersom dessa har en särskild risk för livshotande hypokinesirelaterade 
symtom, se Bilaga II: Praktiska handlingsplaner vid akuta tillstånd, Handlingsplan för hyperpyrexisyndrom vid 
Parkinsons sjukdom. 
Demens 
Kombinationen parkinsonism och demens leder till differentialdiagnostiska problem, såsom PS med demens, 
Alzheimers sjukdom, progressiv supranukleär pares (PSP) och demens med Lewy-inklusionskroppar (DLB), se 
avsnitt om Atypisk parkinsonism (tidigare benämning Parkinson plus)samt diagnoskriterier i Bilaga I: 
Diagnoskriterier. Vidare finns risk för förväxling av konfusion med demens och behandling med antikolinergika 
kan ge psykiska biverkningar med symtom som liknar demens. Den generella demensdefinitionen med 
varaktighet över 6 månader och en nedsättning av den kognitiva funktionen som leder till störning i den dagliga 
livsföringen är viktig att ha i åtanke i differentialdiagnostiskt hänseende. 
Prevalensen demens vid PS varierar mycket i olika studier, bland annat beroende på ålder och sjukdomsfas hos 
patientpopulationen. Efter långvarig PS och vid hög ålder har 30-40 % befunnits vara dementa. En kumulativ 
prevalens på upp till 80 % har också rapporterats, variationen beror på bl a vilka definitioner som använts för 
demens, och grad av utredning. 
Orsaken till demens vid PS diskuteras. Liknande neurokemiska förändringar som vid AD har rapporterats, med 
amyloida plack och neurofibrillära nystan, vilket systematiska patologiska studier påvisat. Lewy- 
inklusionskroppar förekommer i riklig mängd vid PS, särskilt kortikalt, och frågan är om lokalisation och 


kvantitet av Lewy-inklusionskroppar är avgörande för om demens utvecklas eller om PS och DLB är olika 
tillstånd. Med begreppet Lewy body demens avses antingen DLB eller Parkinson demens. Vid demens är 
reduktion av den kolinerga funktionen framträdande och också dopaminverkande dysfunktion skulle kunna vara 
en komponent i demens vid PS. 
Vid demenssymtom är justering av läkemedelsbehandlingen viktig  så att konfusion undviks, men med 
bibehållande av åtminstone någon effekt på parkinsonsymtomen. Förbättring av kognitiva funktioner och 
hallucinationer har rapporterats med tillägg av kolinesterashämmare. Rivastigmin(Exelon®) har indikationen 
demens vid PS. Hos en del patienter kan parkinsonsymtomen öka och en avvägning mellan de olika effekterna 
får göras. En studie visar gynnsamma effekter vid PS med demens och DLB med memantin, Ebixa®, som är 
registrerat för måttlig till svår demens vid Alzheimers sjukdom. 
Behandling med kolinesterashämmare vid Parkinsondemens har i de nationella riktlinjerna prioritet 4 (NR, 
PD31a) baserat på stor svårighetsgrad av symtom, måttlig vetenskaplig evidens och rimlig behandlingskostnad. 
Memantin har betydligt lägre prioriet (9, NR, PD31b) då studier visat motsägelsefulla resultat och  
behandlingen föreslås erbjudas i undantagsfall.`
    },
    {
      rubrik: 'VII. Psykos',
      text: `Psykos  
Psykos hos en patient med PS är mycket vanligt – i riktade undersökningar har förekomst hos upp till 50% av 
patienterna registrerats. De psykotiska symtomen kan bestå av livliga drömmar, hallucinationer (visuella 
vanligast, men alla typer av hallucinationer förekommer) samt vanföreställningar. Ofta börjar det med mildare 
former, såsom livliga drömmar på natten och illusioner, men risken är stor att de progredierar om inga åtgärder 
företas. Risken för psykotiska symtom är förhöjd vid samtidig demensutveckling. Symtomen är nästan alltid 
läkemedelsförvärrade, varför den rationella behandlingen i första hand utgörs av utsättande av det misstänkta 
läkemedlet (se Handlingsplan vid psykos). Preparat sätts normalt sett ut i följande ordning: antikolinergika – 
amantadin – dopaminagonister – MAO-B-hämmare – COMT-hämmare. Man går således i riktning monoterapi med 
lägsta tolererbara dos L-dopa. Skulle detta inte vara tillräckligt får ytterligare åtgärder övervägas. 
Demensläkemedel, såsom rivastigmin, kan ha en viss antipsykotisk  effekt. Om neuroleptika bedöms nödvändigt 
skall i första hand klozapin (Clozapine®) eller kvetiapin (Seroquel®)  väljas. Bäst effekt har klozapin, men 
behandlingen kräver att man följer blodbilden enligt instruktion i FASS, och läkemedlen kan vara mycket 
sederande samt förvärra ortostatism. Vid livshotande depression med suicidbenägenhet eller katatoni är ECT 
indicerad, vilket också har den fördelen att gynnsam effekt på parkinsonsymtomen kan ses (se avsnitt om 
behandling depression, ECT). 
Även  psykosbehandling har prioriterats i de nationella riktlinjerna (NR, PD30) och klozapin har prioritet 3 (bör 
erbjudas), 
kvetiapin prioritet 7 (kan erbjudas) 
 
medan atypiska neuroleptika, inklusive olanzapin, är ”icke-göra”`
    },
    {
      rubrik: 'VII. Apati',
      text: `Apati 
Apati definieras som en avsaknad av motivation som leder till minskat målorienterat beteende och minskade 
emotionella uttryck. Apati leder ofta till ökad belastning för anhöriga/vårdgivare och har ofta negativ effekt på 


behandling och långtidsprognos  i samband med neurologisk  sjukdom. Prevalensen för apati vid PS är hög och 
ligger kring 40%. Apati är associerat med högre ålder, sämre kognition, depression och svårare motoriskt 
handikapp. Förekomsten av apati hos PS patienter utan depression och kognitiva svårigheter ligger vid 20%. Apati 
kan uppträda efter insatt djupelektrodstimulering i Nucleus Subthalamicus (STN-DBS). Att diagnosticera apati vid 
PS är ofta inte lätt, inte minst på grund av att andra tillstånd som depression och kognitiva problem ofta 
förekommer samtidigt. ”Apathy Evaluation Scale” och ”Apathy Scale” har visat sig ha hög sensitivitet och 
specificitet för apati vid PS. Apati är ett av de symtom som har tycks ha starkast negativ effekt på patientens 
livskvalitet och som starkast ökar belastningen för anhöriga/vårdgivare. Avseende behandling av apati vid PS 
finns mycket ringa evidens. I vissa fall kan apatin förbättras med ökad dopaminerg stimulation (höjda doser L-
dopa och/eller dopaminagonist). Bäst evidens för effekt föreligger för rivastigmin som i en mindre kontrollerad 
studie visade sig effektiv (hos patienter som inte hade depression eller kognitiva svårigheter). Piribedil 
(licenspreparat, dopaminagonist) har bedömts möjligen vara effektivt vid apati efter STN-DBS. Antidepressiva 
(ex v Venlafaxin, Nortriptylin) och icke-farmakologisk terapi med fysisk  och kognitiv träning har föreslagits ha 
effekt.`
    },
    {
      rubrik: 'VII. Depression',
      text: `Depression 
Bakgrund 
Depressiv symtomatologi förekommer under sjukdomsförloppet för många patienter med PS och kräver ofta 
någon form av specifik behandlingsåtgärd. 
Depressiva besvär kan uppträda flera år innan de motoriska störningarna vid PS noteras och missförstås sedan 
ofta av såväl patient som läkare med underbehandling som följd. 
Riskfaktorer är yngre ålder, akinetisk-rigid symtombild, tidiga fluktuationer och familjär förekomst av 
depression. Endast ca 10% har en klinisk bild förenlig med djup depression, enligt DSM V, utan mycket av den 
depressiva symtomatologi som uppträder vid PS är associerad med grundsjukdomen och kan förenklat indelas i 
några huvudgrupper: 
Reaktiva symtom på diagnos och konsekvens av sjukdomen 
Åtgärd: Insikts- och stödsamtal med patient och anhöriga. 
Led i Parkinsons sjukdom och dess behandling 
Depressiva symtom kan också vara uttryck för icke-motoriska fluktuationer.  Dessa kan, menbehöver inte, 
samvariera med motoriska fluktuationer. Dessa viker ofta när patienten kommer i motorisk ”on”-fas. 
Åtgärd: Registrering av fluktuationer samt optimering av dopaminverkande läkemedel, överväg direktverkande 
dopaminagonist med D3-receptor selektivitet (pramipexol, Sifrol®) som kan ha en god antidepressiv effekt. 
Depression som är förenlig med kriterierna för DSM – V 
Det finns inget klart samband mellan parkinsonsjukdomens svårighetsgrad och depressionens vanlighet eller 
djup. 
Åtgärd: Känna igen symtomen – ta hjälp av depressionsskala (MADRS, MADRS-S, S=självskattning eller Geriatric 
Depression Scale, GDS). 
Behandling  
Hälso- och sjukvården bör erbjuda behandling till personer med depression vid PS. Läkemedelsbehandling har 
prioritet 2 i de reviderade nationella riktlinjerna  
Interaktioner mellan läkemedel för behandling av PS (MAO-B hämmare) och depression kan föreligga och 
komplicerar valet. Likaså har den äldre patienten ofta en etablerad polyfarmaci som man måste ta hänsyn 
till. Här är det den enskilde läkarens kunskap och erfarenhet av depressionsbehandling, samt inte minst vilka 
möjligheter det finns att följa upp patienten, som är avgörande. 
Oavsett val av preparat är det viktigt att starta med låga doser och öka gradvis. Individer med 
depressionsinsjuknande i hög ålder har en ökad risk för återinsjuknande, Behandlingen bör vara minst 6 
månader. Vid komorbida sömnstörningar och avsaknad av RBD kan mirtazapin (Mirtazapin®,), 30-45 mg, ha en 
god effekt. Se avsnittet om sömn. Vid svår depression och där långvarig läkemedelsbehandling är ett tveksamt 


alternativ eller ger otillräcklig effekt, kan ECT-behandling övervägas. 
SSRI, selektiva serotonin-återupptagshämmare är bättre tolererade av patienter med PS men 
behandlingseffekten kommer senare, oftast först efter 4-6 veckor med övergående försämring initialt. Ibland 
kan ogynnsamma bieffekter med ökad tremor ses. I dubbelblinda studier har varierande behandlingseffekt 
erhållits. Exempel: paroxetine med start 10 mg upp till 40 mg dagligen.  
SNRI, selektiva såväl serotonin- som noradrenalin-återupptagshämmare har kliniskt visat sig vara mer verksamma 
hos parkinsonsjuka patienter. Vid komorbid smärta kan duloxetine (60-120 mg dagligen) användas. De har färre 
biverkningar än TCA. Exempel: venlafaxin med långsam upptitrering till 75 mg x 2.  
TCA, tricykliskt antidepressiva farmaka har visat sig effektiva men förenat med begränsande, främst 
antikolinerga, effekter och biverkningar. Exempel: nortryptilin (Sensaval®) med start 25 mg upp till 75-100 mg, 
eller klomipramin (Anafranil®, Klomipramin®) 10-150 mg. Vid komorbid smärta, sömnstörning eller dregling i 
kognitivt intakta patienter kan amitriptylin (Saroten®) användas med start 10 mg upp till 75-100 mg.  
KBT, Kognitiv beteendeterapi, har visat god antidepressiv effekt hos PS patienter i en större kontrollerad studie 
samt i flera mindre studier. Till skillnad ifrån läkemedelsbehandlingarna så finns det inga biverkningar med KBT. 
Behandling med KBT har prioritet 2 i de reviderade nationella riktlinjerna. 
ECT 
ECT har visats ha inte bara en antidepressiv utan också en möjlig antiparkinsonistisk effekt vid PS, men EBM 
studier saknas. I de fall som prövats har ECT givits unipolärt och med en frekvens liknande den som ges vid 
depression, till kognitivt intakta patienter med PS med typisk men avancerad sjukdom. 
 
Patienterna har alltid behållit sin tidigare farmakologiska behandling. Praktiskt taget alla har fått minskade 
parkinsonsymtom efter ECT. I vissa fall har antiparkinsoneffekten varit mycket kortvarig, upp till några dagar. I 
andra fall har antiparkinsoneffekten bestått under mycket lång tid, upp till ett år. I de fall ECT-perioderna 
upprepats har förnyat god effekt setts i vissa fall. 
Risken vid ECT är konfusion i anslutning till ECT, varför utsträckt övervakning post-ECT är viktig. I några fall har 
ökning av hyperkinesier setts, men de har minskat om levodopadosen reducerats, men då med bibehållen god 
effekt på parkinsonsymtomen. 
Orsaken till den långa antiparkinsoneffekten är oklar. Ökad dopaminsyntes och/eller ökad receptorsensibilitet 
skulle kunna vara åtminstone delförklaringar. 
ECT har givits vid DBS-behandling men IPG måste stängas av i samband med behandlingarna och åter sättas på 
efter varje enskild ECT-behandling. ECT vid samtidig DBS-behandling rekommenderas inte av de företag som 
marknadsför DBS-utrustning.`
    },
    {
      rubrik: 'VII. Ångest och panikattacker',
      text: `Ångest och panikattacker 
Bakgrund 
Ångestsymtom är vanliga vid PS. Uppträder hos minst 25-40 % av patienterna d v s i högre frekvens än vid andra 
kroniska sjukdomar som diabetes eller reumatoid artrit. Ångest kan vara alltifrån ängslan och oro till fruktan och 
panik. Vanligen ses tecken på autonom överaktivitet (t ex andnöd, hjärtklappning, svettning, yrsel och 
illamående) samt också muskulär anspänning (t ex tremor, rastlöshet, värk och trötthet). 
Mycket talar för att ångesten hos patienter med PS inte enbart är en  psykologisk reaktion på 
sjukdomstillståndet utan mera en följd av den underliggande sjukdomen. Många gånger ses framträdande 
ångestsymtom, ofta i förening med depression, långt innan den motoriska störningen kan konstateras. 
Led i Parkinsons sjukdom och dess behandling 
Ångestsymtom kan vara en följd av svängningar i motoriska och limbiska nätverk som förstärks via 
läkemedelseffekter och uppträder såväl under ”peak-dose”-fas som under ”off”-period. Man kan se en uttalad 


rastlöshet under ”peak-dose”-toppen som tar sig uttryck i mental överaktivitet, t.o.m. mani. 
Detta är sannolikt ett rent dopaminerg fenomen då man sett att dopaminagonister kunnat ge mani även i 
frånvaro av PS. Under ”off”-fas uppträder ofta en ångestbild, liknande den vid panikattacker, ofta förenad med 
depressiv symtomatologi. Det biologiska underlaget är förutom förlust av dopaminerga bansystem även en 
pågående degeneration av noradrenerga kärnor med, som följd, en brist på noradrenalin. Dessutom ses en 
farmakologisk effekt av att levodopa blockerar noradrenalinfrisättning. 
Åtgärd: Registrering av fluktuationer samt optimering av dopaminverkande läkemedelsbehandlingen. Insikts- och 
stödsamtal med patient och anhöriga. 
Del i kognitiv nedsättning 
Ångest kan också vara en följd av tilltagande kognitiva svårigheter som gör att man får svårare att klara tidigare 
inlärda situationer. Detta förstärks av en minskad  psykomotorisk flexibilitet. Allt medverkar till nedsatt kontroll 
av känslouttryck med, som följd, oro, ångest eller apati. 
Åtgärd: Screeningtest av typ MMSE, MoCA eller Cognistat. Vid tveksamhet remitteras patienten till specifik 
”kognitiv mottagning / minnesmottagning” för utvidgad bedömning. 
Diagnostik/Gradering 
Det är viktigt med en utförlig anamnes, gärna kompletterad med uppgifter från anhöriga, personal m fl. Det är 
värdefullt att komplettera med så kallade ”ångestskalor” för diagnostik, svårighetsgrad eller behandlingseffekt, 
t ex HAM-A (Hamilton-Anxiety scale). Det finns också kombinationsskalor för ångest och depression (t ex Hospital 
Anxiety and Depression Scale, HADS). 
Behandling 
Det finns inga stora placebokontrollerade studier av terapi mot ångest vid PS. 
KBT har generellt sett en god effekt vid olika ångesttillstånd och bör prövas även i avsaknad av EBM. SNRI, 
eventuellt SSRI, sedativa tricykliska antidepressiva medel, låga doser av bensodiazepiner. 
Pregabalin, 150-600 mg/dag, har indikation generell ångest men litteraturen på detta medel vid ångest i 
samband med PS, är begränsad. Interaktionerna är dock få och ur farmokologisk synpunkt kan medlet 
kombineras med de flesta medel vid PS.`
    },
    {
      rubrik: 'VII. Smärta',
      text: `Smärta 
Smärta förekommer hos 70-80% av patienterna. Det är vanligare hos kvinnor och vid samtidig depression. 
Förekomsten ökar med ökad sjukdomsduration, men det är viktigt att tänka på att det är ett av de icke-
motoriska symtomen som uppfattas som mest besvärande även av patienter i tidig sjukdom. 
Neurofysiologiska studier på personer med PS med och utan smärta visar att hos dem som har smärta är 
smärttröskeln sänkt och smärttoleransen lägre. Orsaken till det är inte klarlagd, men det kan bero på en 
påverkan på smärtmodulering och den direkta smärtprocessen genom de dopaminerga, serotonerga och 
kolinerga förändringarna som sjukdomen medför. 
Smärta vid Parkinsons sjukdom kan klassificeras enligt nedan 
Muskuloskeletal smärta: Vanligaste orsaken till smärta och finns hos upp till 70% av patienterna. Ensidig 
axelsmärta är ett vanligt debutsymtom. Kan vara direkt sjukdomsrelaterad, orsakad av rigiditet, bradykinesi, 
dyskinesier, camptocormi och skolios och/eller sekundär till komorbiditeter såsom artros, degenerativ 
ryggsjukdom eller osteoporos med kotkompressioner. 
Dyston smärta: Förekommer hos ca 40% av patienterna. Kan förekomma både som on-dystoni samt off-dystoni. 
Vanligast hos yngre patienter. 
Radikulär-perifer neuropatisk smärta: Polyneuropati är mer vanligt förekommande hos personer med PS och är 
troligen en effekt av l-dopamedicineringen. Det är viktigt att kontrollera homocystein regelbundet. Radikulär 
smärta förekommer hos ca 13% av patienterna och är ofta underbehandlad. 
Central smärta: Förekommer hos ca 15% av patienterna.Ter sig diffus och kan ge upphov till konstant molande 
smärta eller obehagskänsla. 
Akatisi: Känslan av inre rastlöshet och ett behov av att röra sig.  
Sensoriska off-fenomen: ’Burning mouth’ och genital smärta kan vara sensoriska off-fenomen. 


”Coat hanger neck pain” Smärta i nacke och skuldror som förvärras i stående. Förekommer vid ortostatisk 
hypotension och orsakas av nedsatt blodflöde till muskulaturen i nacken och övre delen av ryggen. 
Behandling 
Innan man behandlar smärta är det viktigt att noggrant kartlägga vilken typ av  smärta det rör sig om samt när 
den uppkommer. The King's Parkinson's Pain Scale är en smärtskala som är validerad vid PS. Med hjälp av den 
kan man utvärdera smärttyp och smärtans svårighetsgrad och man kan med fördel använda den för att få stöd i 
sin smärtanamnes. 
Variationer i förekomst av smärta eller smärtintensitet under dygnet kan vara fluktuationsorsakade. 60-100% av 
patienterna med motoriska fluktuationer har även icke-motoriska fluktuationer och smärta är ett vanligt OFF-
symtom. Tänk på att de icke-motoriska fluktuationerna inte alltid tidsmässigt överensstämmer med de motoriska 
och att smärta hos vissa patienter kan vara det dominerande OFF-symtomet.  
Den första åtgärden ska alltid vara att överväga fluktuationer som orsak till symtomen och optimera den 
dopaminerga medicineringen. Det finns i dagsläget inte vetenskapligt stöd för att rekommendera enskilda 
preparat, medicinförändringarna görs utifrån den enskilda patientens situation och förutsättningar. 
Det är också viktigt att patienten uppmuntras till fysisk aktivitet och får bedömning och fortsatt stöd av 
fysioterapeut, gärna med erfarenhet av neurologiska sjukdomar. Multimodalt omhändertagande är viktigt för de 
svårast drabbade patienterna. 
Nociceptiv smärta- Behandling med COX-hämmare i kombination med Paracetamol under kortare perioder. Vid 
svår opioidkrävande smärta rekommenderas i första hand oxycodon-naloxon.  
Neuropatisk smärta- Antiepileptika och/eller antidepressivt läkemedel.I första hand Gabapentin och/eller 
Duloxetin.  
Smärtsamma dystonier: Optimera den dopaminerga medicineringen. Hos vissa patienter kan man se en 
förbättring av att reducera dopaminagonistdosen. Om ihållande dystoni överväg botoxbehandling. Vid svårare 
dystona besvär överväg DBS. 
Smärtsamma dyskinesier: Överväg insättning av Amantadin (Dinetrel). 
”Burning mouth” och genital smärta lindras genom optimerad dopaminerg medicinering.`
    },
    {
      rubrik: 'VII. Avancerad behandling – Apomorfin',
      text: `Avancerad behandling 
Begreppet avancerad, eller kontinuerlig, behandling brukar förbehållas djupelektrodstimulering (behandlas i 
avsnittet Neurokirurgisk behandling) och behandling med bärbara pumpar (apomorfin, levodopa- karbidopa 
intestinal gel, (LCIG, Duodopa®), levodopa- entakapon-karbidopa intestinal gel (LECIG, Lecigon®) och 
foslevodopa-foskarbidopa (Produodopa®)). Ibland har även behandling med injektionspenna (apomorfin) räknats 
in i denna kategori. I det följande beskrivs penn- och pumpbehandlingarna. 
Apomorfin 
Apomorfin är det enda preparat som har potentiellt lika god effekt som L-dopa mot Parkinsonsymtom. 
Apomorfin ges som injektion eller infusion i underhuden, för det mesta i bukens underhud. Därigenom når man 
ett mycket snabbt upptag till blodet och en snabb effekt. Halveringstiden i distributionsfas efter en injektion är 
cirka 5 minuter och halveringstiden i eliminationsfas cirka 33 minuter. Den genomsnittliga tiden till effekt efter 
en injektion är 10 minuter (5-15 minuter) och effekten är kortvarig, mestadels cirka 45 minuter (30-90 minuter). 
Det gör att apomorfin är lämpligt som vid behovsterapi (med injektionspennor), men också som infusionterapi 
(med bärbara pumpar). 
Apomorfins effekt är individuell och man bör testa vilken dos den enskilda patienten behöver separat för varje 
patient, exempelvis i form av ett apomorfintest. Men när man en gång fastställt lägsta effektiva dos, kan 
patienten mestadels fortsätta att använda denna dos under många år. Apomorfinet har en ”antingen-eller” 
effekt och det lönar sig inte att öka dosen över den lägsta effektiva dos som man fastställt. 
Apomorfintest: 3 dagar före teststart startas peroralt domperidon 10 mg tre gånger dagligen. Parkinsonterapin 
avbryts kvällen före Apomorfin-testet. 1 mg apomorfin injiceras s.c., medan effekt och biverkningar 
monitoreras. Detta upprepas med tidsintervall på 1-1 ½ timme. Apomorfindosen stegras stegvis med 1 eller 1,5 
mg, till en god klinisk effekt eller oacceptabla biverkningar uppträder. Normalt är det inte relevant att ge mer 
än 7-8 mg apomorfin per injektion. (Det här beskrivna apomorfintestet är en av många alternativa 
procedurer). 


Patientens övriga orala medicinering hålls vanligtvis oförändrad. Den initiala terapeutiska 
apomorfininjektionsdosen rekommenderas vara hälften av tröskeldosen som konstaterades under 
Apomorfintestet. Om inget apomorfintest har utförts kan det vara lämpligt att börja med en injektion av 1 mg 
apomorfin. Följande apomorfininjektionsdoser ökas sedan, typiskt med 1 mg/dag, tills en optimal dos uppnås. 
Den optimala dosen (vanligen 2-5 mg) skall vara den lägsta apomorfindos, som ger en "full" antiparkinson effekt. 
Injektionerna administreras i patientens bukhud eller lårets utsida vid de första tecknen på en off episod. 
Domperidon (10 mg TID) ges 1-3 dagar före och under de första behandlingsdagarna, varefter det hos de flesta 
patienter kan trappas ut. Patienterna instrueras att känna igen tidiga tecken eller symtom av off -perioder och 
att injicera så snart sådana symtom uppträder. Om mer än 5 injektioner per dag behövs bör omställning av den 
perorala terapin alternativt initiering av pump-terapi eller DBS övervägas. 
Effekt av intermittent apomorfinbehandling 
Effekten av injektionsterapi med apomorfin har studerats i ett stort antal studier, även placebo-kontrollerade 
sådana. Man har sett att patienten kan reducera sin off-tid med över 50% om man lägger till apomorfin som vid 
behovsbehandling. En stor fördel är också att patienten, genom den pålitliga effekten av injektionerna, får 
bättre kontroll över sina parkinsonsymtom. 
Indikation/Penna 
De patienter som har mest glädje av apomorfin, är de som just har börjat märka fluktuationer i medicineffekt 
och där omställning av tablettbehandlingen är otillräcklig för att uppnå en god effekt. Av särskilt stort värde är 
Apomorfinpenna för personer med dosglapp som förekommer enstaka gånger per dag. 
Patienten måste förstå terapiprincipen, framför allt när och hur han/hon ska ta sina injektioner. Har patienten 
komplicerade eller ofta förekommande fluktuationer, eventuellt också med perioder av dyskinesier, så är 
pumpterapi eller djupelektrodstimulering mestadels ett bättre alternativ. 
Biverkningar/Penna 
Den vanligaste biverkningen är en lokal reaktion på injektionsstället. Detta är dock sällan av klinisk betydelse 
vid injektionsbehandling. Illamående förekommer hos ca 15% av patienterna, men kan i de flesta fall behandlas 
effektivt med domperidon, och försvinner vanligtvis om behandlingen fortsätter. Patienter som injicerar sig i låg 
frekvens kan uppleva fortsatta problem med illamående och ortostatisk hypotoni. En kort period av sedation 
efter en apomorfininjektion är relativt vanlig. I sällsynta fall kan hallucinationer induceras och risken för detta 
verkar vara relaterad till det totala antalet givna injektioner per dag. I de flesta fall är en sådan  psykos snabbt 
övergående. En viktig biverkan är förlängd QT-tid med ökad risk för hjärtarytmi särskilt i kombination med 
domperidon (+ kvetiapin). EKG skall kontrolleras före behandlingsstart och efter en tids behandling. Andra 
biverkningar inkluderar sömnstörningar, förvirring, eosinofili, rinorré, diarré och yrsel. Sömnattacker har 
rapporterats i några fall. Effekter på libido och erektil funktion har hittills inte varit noggrant studerat. I 
händelse av tidigare dopaminergt dysregleringssyndrom, är initiering av intermittent apomorfin kontraindicerat. 
Ökat antal injektioner eller ökande doser per injektion är anledning till observans. De biverkningar som oftast 
leder till att behandlingen avslutas är illamående, kräkningar, yrsel och somnolens. 
Apomorfin pumpbehandling 
Apomorfinbehandling med pump kan användas för patienter som har besvärande fluktuationer i 
medicineffekten. Patienten får en bärbar pump som ansluts till en tunn kateter som mynnar i en liten plastkanyl 
som sticks in i underhuden, mestadels på buken, ibland på lår, överarmar eller rygg. Kateter och kanyl byts 1-2 
gånger om dagen. 
Patienten bör förbehandlas med domperidon 10 mg tre gånger dagligen i 1-3 dagar före infusionsterapin. Det 
finns ett flertal olika metoder för att starta apomorfininfusion, vanligen görs det enligt följande: Efter reduktion 
av anti-Parkinson-behandlingen med cirka 50% initieras infusionen av apomorfin med en hastighet av 1 mg / h. 
Denna dos höjs sedan i steg om 0,5-1 mg / h tills en optimal effekt uppnås. Infusionsdosen ska inte höjas med 
mer än 1 mg / h / dag. Därefter görs titreringen av bolusdosen på samma sätt som vid injektionsbehandlingen. 
För att starta behandlingen och utbilda patienterna och vårdgivarna behövs vanligtvis 1-2 veckors behandling på 
sjukhus. Vissa centra startarbehandlingen ambulant och ett alternativ är då att göra långsam upptrappning 
ungefär som när man sätter in perorala agonister första gången. Efter några veckor eller månader av behandling 
kan en ytterligare minskning av den perorala anti-Parkinson-behandlingen försökas. De flesta patienter 
behandlas endast dagtid, men Apomorfin kan ges även under natten om de nattliga Parkinson-symtomen inte 
kan behandlas tillfredsställande på annat sätt. 
Effekt av apomorfinpump 
Apomorfinpumpens effekter har kartlagts i ett stort antal mindre studier. Den första större kontrollerade 
studien, Toledo, publicerades 2018. Man har kunnat se att en typisk effekt av apomorfinpump är att patienten 


blir av med ungefär 60 % av sin off-tid. Man ser ofta också en förbättring avseende dyskinesier hos de patienter 
som har sådana. Även icke-motoriska symtom kan förbättras – exempelvis kan  psykiska symtom, som depression, 
ångest och apati, men även sömn – bli bättre med apomorfinpump. 
Biverkningar pump 
Den vanligaste biverkningen av infusionsbehandling är uppkomsten av lokala noduli och hudirritation, som 
förekommer hos nästan alla användare. Ultraljud eller lokal massage verkar vara effektivt som behandling av 
noduli. Observera att ultraljudsbehandling är kontraindicerad hos patienter som behandlas med DBS och 
hjärtpacemaker. För att minska bildandet av noduli, bör högre koncentration än 5 mg / ml apomorfin undvikas 
och infusionsstället ska bytas minst två gånger per dag. Det finns rapporter om att infusion i övre delen av 
ryggen orsakar mindre hudreaktion. En viss sederande effekt är vanlig. Hallucinationer och andra  psykotiska 
biverkningar kan inträffa, men risken är inte högre än för andra agonistbehandlingar. Dopaminergt 
dysregleringssyndrom förekommer och man bör monitorera för detta. Hemolytisk anemi uppträder hos upp till 1 
% av användarna och Hb bör därför kontrolleras på vida indikationer. Coombs test (Direkt Antiglobulin Test, DAT) 
kan användas för att bekräfta hemolytisk mekanism. 
Indikation pump 
Lämplig för apomorfinpump är en patient som trots optimerad behandling med tabletter och/eller plåster har 
signifikanta problem med fluktuationer i verkan av medicineringen och/eller överrörlighet. Man bör först ha 
prövat alla ordinarie behandlingar (L-dopa (minst 5 dagliga doser), dopaminagonister, COMT-hämmare och MAO-
B hämmare).`
    },
    {
      rubrik: 'VII. Avancerad behandling – Duodopa',
      text: `Duodopa® 
Metod 
Duodopa® levereras till första delen av tunntarmen, där det snabbt kan tas upp till blodet. Öppningen till 
magsäcken, en perkutan endoskopisk gastrostomi (PEG) med innersond till duodenum/jejunum (PEG-J) görs 
mestadels av gastroenterologer och ingreppet kan göras i lokalbedövning eller lätt sedering. PEG-anläggning bör 
göras av någon med god kompetens, för att undvika biverkningar och komplikationer. En allvarlig komplikation 
är peritonit. Hos centra med hög kompetens ligger risken för peritonit under 1 %. 
Ofta prövar man först effekten av Duodopa® med en nasoduodenal sond, innan den definitiva lösningen med 
PEG-J etableras, men det är inte obligatoriskt. 
Tillförseln av Duodopa® består av 3 doser: 1. Den kontinuerliga infusionshastigheten: Denna ställs först in på bas 
av de doser som patienten haft som tablettbehandling och finjusteras sedan för att få optimal effekt. 
Mestadels ligger dosen mellan 20 och 200 mg L-dopa per timme och pumpflödet är då 1-10 ml/h 
(levodopainnehållet är 20 mg/ml). 2. En morgondos, vanligen 5-10 ml (100-200 mg), som syftar till att snabbt nå 
adekvata blodkoncentrationer L-dopa och därmed effekt. 3.Bolusdos, i regel 0,5-2 ml (10-40 mg), som titreras in 
efter effekt och som patienten kan ta genom att trycka på en knapp när effekten av den kontinuerliga 
infusionen är otillräcklig. Effekten av en sådan bolusdos kommer i regel snabbt, efter 10-20 minuter. 
Duodopa® kan ges som monoterapi, dvs. all annan Parkinsonbehandling kan sättas ut, men det går också bra att 
kombinera med andra Parkinsonläkemedel.. Behandlingen ges antingen enbart dagtid, cirka 16 timmar/dag, 
eller även på natten (som 24 timmars infusion). På natten räcker det i regel med lägre doser – typiskt är att man 
reducerar infusionshastigheten med cirka 30 % relativt dag-dosen. Vid 16 timmars terapi ges ofta långverkande 
L-dopatabletter och/eller dopaminagonister sen kväll för att täcka behovet nattetid. Tillägg av COMT-hämmare 
möjliggör dosreduktion av Duodopa® med 20-40% och trots detta jämförbar effekt. 
Amantadin kan läggas till för att minska överrörlighet hos patienter som har problem med detta under 
pumpbehandling. 
Effekt 
Den mest väldokumenterade effekten av Duodopa® är att tiden i off reduceras. Detta har visats i både små och 
stora studier, även randomiserade placebo-kontrollerade studier. En typisk effekt när man går från 
tablettbehandling till pumpbehandling med Duodopa® är att tiden i ”off” reduceras med cirka 65 % eller 4-5 
timmar. I motsvarande utsträckning ökar tiden som patienten är i on utan dyskinesier. Det finns flera studier 
som visar att även överrörlighet förbättras Duodopa®jämfört med tablettbehandling. 
Även många icke-motoriska symtom tycks förbättras när en patient byter från tablettbehandling till pump. För 
Duodopa® gäller detta inte minst sömn, men även problem med exempelvis urin och mage- tarm. Också vad 
gäller hallucinationer, koncentrationssvårigheter och depression kan man ofta registrera förbättringar. 


Biverkningar och komplikationer 
De vanligaste problemen med Duodopa® är relaterade till de tekniska aspekterna av behandlingen, såsom 
dislokation av tunntarmskatetern, som förekommer hos 3-4 % av patienterna. Förskjutning av kateterspetsen till 
magsäcken leder till att fluktuationerna återkommer. I sådana fall kan kateterpositionen behöva korrigeras 
under radiografisk kontroll, men ofta kan sondspetsen vandra åter till tunntarm spontant. 
Katetern kan också bli blockerad eller knickas. Blockering kan vanligtvis elimineras genom att spola katetern 
med kranvatten eller introducera styrtråd. Knickbildningar kan emellertid behöva elimineras genom att katetern 
repositioneras. I sällsynta fall kan PEG eller innersond lossna. Om den inre katetern lossnar kommer  den i 
normala fall ut med avföring utan problem. En trasig PEG medför risk för komplikationer, såsom perforering i 
mage eller tarm, vilket kan kräva operation. I så fall måste en gastroenterolog konsulteras. Vid långvarig 
buksmärta, ska en gastroskopi utföras. Om tecken på gastrointestinal infektion finns bör antibiotika ges enligt 
kliniskt tillstånd och lokala riktlinjer. 
Stomat läker vanligtvis utan komplikationer. Det kan emellertid förekomma buksmärta, infektion och läckage av 
magsaft strax efter operationen. I sällsynta fall uppstår bakteriell peritonit i samband med PEG-applikationen 
(hos <1 % av  patienterna). De vanligaste  kroniska lokala komplikationerna  är utsöndring och bildandet av 
hypertrofisk granulationsvävnad (”svallkött”). Lokal infektion runt stomat behandlas med rengöring, eventuellt 
desinfektionsmedel, medan antibiotikabehandling sällan är nödvändig. Hypertrofisk granulationsvävnad kan 
behandlas med klass 1-3-steroidsalva. 
Viktnedgång förekommer hos en del patienter och vikten bör monitoreras. Inte så få patienter tycks utveckla 
polyneuropati. Det är fortfarande oklart i vilken utsträckning som polyneuropatierna beror på Duodopa® 
specifikt, eller om den sammanhänger med L-dopabehandling i allmänhet och kanske även Parkinsonsjukdomen i 
sig. Mekanismen bakom är okänd men i många fall har det noterats att homocystein i blod har stigit hos de 
patienter som fått dessa biverkningar. Supplementering med B- vitaminer (B12 och folsyra i första hand) 
rekommenderas med fortsatt monitorering av homocystein som bör normaliseras. Remission av symtomen kan 
ske men bestående men har förekommit. Vid insättning av Duodopa® rekommenderas kontroll av homocystein 
före behandlingsstart samt rutinmässig insättning av B12 och folsyra. Homocystein bör kontrolleras efter 1 
månad, 3 månader, 6 månader och därefter minst årligen. Vid stigande homocystein överväg komplettering med 
vitamin B6 / injektionsbehandling med vitamin B12, utvärdera ev. uppkomst av neuropati och överväg 
reduktion/utsättning av Duodopa®. 
Indikationer 
Lämplig för Duodopa®- är en patient som trots optimerad behandling med tabletter och/eller plåster har 
signifikanta problem med fluktuationer i verkan av medicineringen och/eller överrörlighet. Man bör först ha 
prövat alla ordinarie behandlingar (L-dopa (minst 5 dagliga doser), dopaminagonister, COMT-hämmare och MAO-
B hämmare).`
    },
    {
      rubrik: 'VII. Avancerad behandling – Lecigon',
      text: `Lecigon®  
Metod 
Lecigon® tillförs via bärbar pump och PEG-J-sond på samma sätt som Duodopa® (se avsnittet ovan). Då Lecigon® 
utöver L-dopa och karbidopa även innehåller entakapon kan L-dopadosen sänkas med ca 30-50 %. Tillförseln av 
Lecigon® består, likt Duodopa®, av 3 delar: 1. Den kontinuerliga infusionshastigheten: Denna ställs först in på 
basen av de doser som patienten haft som tablettbehandling och finjusteras sedan för att få optimal effekt. 
Mestadels ligger dosen mellan 15 och 100 mg L-dopa per timme och pumpflödet är då 0,75-5 ml/h 
(levodopainnehållet är 20 mg/ml). Lecigon®-pumpen kan ställas in på tre olika flöden, om patienten har behov 
av olika flöden under dygnet. 2. En morgondos, vanligen 5-10 ml (100-200 mg, bör inte överstiga 300 mg), som 
syftar till att snabbt nå adekvata blodkoncentrationer L-dopa och effekt. Observera att de förfyllda sprutorna 
innehåller 47 ml och att pumpen som är anpassad för 50 ml infusion därför inte levererar något läkemedel under 
de första 3 ml efter byte av spruta. För morgondos behöver man därför räkna med att 6 ml behöver ges innan 
patientens i praktiken morgondos startar. 3. Bolusdoser, i regel 0,5-2 ml (10-40 mg), som titreras efter effekt 
och som patienten kan ta när effekten av den kontinuerliga infusionen är otillräcklig. Effekten av en bolusdos 
kommer efter 10-20 minuter. Maximal rekommenderad dygnsdos är 100 ml dvs. 2000 mg L-dopa. Lecigon® kan 
ges som monoterapi, dvs. all annan Parkinsonbehandling kan sättas ut. Behandlingen ges antingen enbart dagtid, 
cirka 16 timmar/dag, eller även nattetid (24 timmars infusion). På natten räcker det oftast med lägre doser – 
cirka 50-70 % jämfört med dag-dosen. Vid 16 timmars-behandling ges ofta långverkande L- dopa tabletter 
och/eller dopaminagonister på kvällen för att täcka behovet nattetid. Lecigon® kan också kombineras med andra 
Parkinsonmediciner. En del patienter mår bra av kombination med dopaminagonister. Amantadin kan läggas till 
för att minska överrörlighet. 


Effekt 
Den kliniska erfarenheten är att effekten av Lecigon® är att den har jämförbar effekt med Duodopa®.. Vid byte 
mellan Duodopa® och Lecigon® skall man ta hänsyn till LEDD.  
På samma sätt som vid Duodopa®-behandling medför en trasig PEG risk för komplikationer och behandlas enligt 
beskrivningen ovan. Det är fortfarande ännu okänt om polyneuropatier även associeras med Lecigon®. Eftersom 
mekanismen bakom polyneuropatier vid PS är okänd rekommenderas monitorering av homocystein som bör 
normaliseras och supplementering med B-vitaminer (B12 och folsyra i första hand). Vid insättning av Lecigon® 
rekommenderas kontroll av homocystein före behandlingsstart samt rutinmässig insättning av B12 och folsyra. 
Homocystein bör kontrolleras efter 1 månad, 3 månader, 6 månader och därefter minst årligen. Vid stigande 
homocystein överväg komplettering med vitamin B6 / injektionsbehandling med vitamin B12, utvärdera ev. 
uppkomst av neuropati och överväg reduktion/utsättning av Lecigon®. 
Indikationer 
Lecigon® är lämplig att testa för patienter med otillfredsställande effekt med signifikanta fluktuationer eller 
biverkningar trots optimerad behandling med tabletter och/eller plåster eller annan pumpbehandling. Man bör 
först ha prövat alla ordinarie behandlingar (L-dopa (minst 5 dagliga doser), dopaminagonister, COMT-hämmare 
och MAO-B hämmare). Det är särskilt viktigt att testa oral behandling med entakapon före start av Lecigonpump 
då upp till 20 % av patienter kan få besvärande diarré av denna substans. 
Produodopa® 
Metod 
Produodopa® består av en prodrug till levodopa, foslevodopa och en prodrug till karbidopa, foskarbidopa i en 
högkoncentrerad lösning som kan ges subkutant. Produodopa® defosforyleras i kroppen via alkaliskt fosfatas och 
har något högre biotillgänglighet än oralt givet levodopa/karbidopa. Lösningen innehåller 240 mg/ml 
foslevodopa vilket motsvarar 180 mg oralt givet levodopa med dekarboxylashämmare.  
Produodopa® är främst studerat med 24h infusion och det är inte klarlagt om samma dosering skall användas 
dygnet runt. Det finns möjlighet att programmera pumpen för ett basflöde, ett lägre flöde som kan användas 
nattetid och ett högre flöde för perioder när behovet är högre. Liksom med Duodopa® och Lecigon® kan man 
också ge extradoser som kan varieras mellan 0,05 och 0,30 ml (motsvarande ca 10 till 55 mg levodopa). 
Upptaget av subkutana extradoser förefaller vara långsammare än enterala extradoser. Om pumpen står still 3h 
eller mer behöver man ge en bolusdos subkutant eller peroralt för att snabbt nå stabil terapeutisk 
koncentration. Det subkutana infusions-setet är godkänt att användas tre dygn utan byte. Det är av stor 
betydelse att patienten är tränad i god renlighet för att minska risken för hudinfektioner och abscesser. När 
behandlingen introduceras bör nålbyten ske dagligen för att påskynda inlärningskurvan och undvika onödiga 
hudinfektioner. Om infusionssetet tolereras väl kan byte ske varannan dag och man har då ett dygn på sig om 
byte glöms bort. Det är vanligt med ett visst läkemedelsläckage från stickkanalen när infusionssetet avlägnsas. 
Detta problem kan reduceras genom att låta det gamla setet sitta kvar några timmar efter byte till nytt. Det 
vanligaste infusionsstället är på buken, men även överarmar, axlar, flank och lår kan användas. Man bör av 
infektionsskäl inte sätta infusionssetet närmare naveln än 5 cm och inte återvända till samma infusionsställe 
förrän efter två veckor. 
Produodopa® ersätter ofta annan levodopabehandling. Andra dopaminerga läkemedel kan ersättas med 
Produodopa® när det bedöms gynnsamt. Undvik snabb utsättning av höga agonist-doser pga risk för DAWS 
(Dopamine agonist withdrawal syndrome). Amantadin kan användas för att minska överrörlighet hos patienter 
som har problem med detta under  pumpbehandling. 
Utprovning av Produodopa® kan ske polikliniskt om patienten har god kognitiv och finmotorisk förmåga i ”on”, 
men inneliggande utprovning är att föredra om man förutser behov av stöd från hemsjukvården. Vid poliklinisk 
utprovning skall patienten kunna observeras över minst 4h efter pumpstart och bedömas igen inom ett dygn, 
efter 1-2 veckor och därefter vid behov. Medianantalet dosjusteringar innan man hade en stabil dos i två veckor 
eller mer var 3,5 st i registreringsstudien, men för 1/3 av patienterna behövdes ingen dosjustering alls. 
Patienten behöver vara medveten om att majoriteten behöver flera dosjusteringar innan god effekt uppnås. 
Effekt 
Produodopa® bedöms ha ungefär samma effekt på off-tid under dagen som de andra infusionsbehandlingarna och 
DBS, dvs ungefär en 4h reduktion av off-tid för patienter som i genomsnitt har 6h off dagligen. Det finns inte 
stor erfarenhet av behandling av svåra dyskinesier, men i registreringsstudierna reducerades också lätta till 
måttliga dyskinesier. En effekt av Produodopa® som är bättre dokumenterad än med de andra behandlingarna är 
den goda effekten på nattliga off-symtom och off-symtom vid uppvaknande.  


Biverkningar och komplikationer 
Tröskeln för att starta Produodopa® är lägre än för intestinala infusioner eftersom inget kirurgiskt ingrepp krävs, 
men liksom med den andra subkutana behandlingen apomorfin är det också vanligare att behandlingen avbryts. 
Orsakerna kan vara att det är svårt att finna rätt dos, att de besvärligaste symtomen inte är 
behandlingsresponsiva, för höga förväntningar, eller biverkningar. 
De flesta patienter som använder kontinuerlig subkutan infusion får någon form av hudbiverkan, nästan oavsett 
vilket läkemedel som ges. Produodopa® ger oftast lindriga hudbesvär, som infusionsrelaterat obehag/smärta 
eller svullnad vid infusionsstället och dessa tenderar att minska med tiden. En hudbiverkan som är vanligare än 
med apomorfininfusion är hudinfektion av typ abscess eller cellulit och det har rapporterats hos mellan 10% och 
23% av patienter under första behandlingsåret. Om man misstänker infektion skall infusionssetet avlägsnas 
snarast och ersättas med nytt i opåverkad hud. Om patienten är opåverkad och det är en begränsad reaktion kan 
man expektera något dygn utan antibiotika och avstå om det förbättras spontant. I annat fall krävs peroral eller 
intravenös antibiotika med täckning för hudbakterier och vid abscess kirurgisk tömning. Problemen med 
hudinfektioner tycks kunna reduceras väsentligt genom god hygien och frekventa nålbyten, möjligen även av att 
undvika höga doser. En annan biverkan som tycks vara vanligare än i studierna av 16h intestinal levodopainfusion 
och subkutan apomorfininfusion är hallucinationer/ psykos. Orsaken till detta är oklar, men för hög nattlig 
behandling hos känsliga personer är en hypotes och man har funnit en ökad risk hos de som behåller 
dopaminagonistbehandling. Det finns på grund av detta goda skäl att avsluta agonistbehandling om den inte 
behövs och att titrera nattlig behandling till lägsta möjliga som ändå ger god nattsömn och möjliggör att man 
vaknar on eller snabbt blir on på morgonen.  
Viktnedgång liksom polyneuropati förekommer under Produodopa®behandling liksom vid LCIG/LECIG. Vikten och 
B-vitaminstatus bör därför monitoreras och i förekommande fall substitueras enligt samma principer som vid 
dessa behandlingar, dvs kontroll av homocystein före behandlingsstart samt rutinmässig insättning av B-12 och 
folsyra. Homocystein bör kontrolleras efter 1 månad, 3 månader, 6 månader och därefter minst årligen. Vid 
problematisk viktnedgång eller stigande homocystein överväg att utreda avseende malabsorption, komplettera 
med vitamin B6-behandling, ev injektions-behandling med vitamin B-12, utvärdera ev. uppkomst av neuropati 
och överväg reduktion/utsättning av Produodopa®. 
Indikationer 
Lämplig för Prouodopa® är en patient som trots optimerad behandling med tabletter och/eller plåster har 
signifikanta problem med fluktuationer i verkan av medicineringen och/eller överrörlighet trots att ordinarie 
behandlingar (L-dopa (minst 5 dagliga doser), dopaminagonister, COMT-hämmare och MAO-B hämmare) prövats 
eller bedömts vara kontraindicerade.`
    },
    {
      rubrik: 'VII. Neurokirurgisk behandling / DBS / MRgFUS',
      text: `Neurokirurgisk behandling 
Metoder, biverkningar 
Neurokirurgisk stereotaktisk behandling av rörelserubbningar har lång tradition i Sverige. Pallidotomi och 
thalamotomi föregick effektiv farmakologisk behandling vid sjukdomar med rörelserubbning. Den lesionella 
neurokirurgin var till en början empirisk och innebar att centrala kärnor lederades genom upphettning av 
spetsen av en i hjärnan införd elektrod. Lesionell neurokirurgi har i stor utsträckning ersatts av högfrekvent 
elektrostimulering i hjärnan (Deep Brain Stimulation, DBS). DBS har fördelar genom att endast orsaka obetydlig 
hjärnparenkymskada och genom att vara justerbar i relation till individuell symtomatologi och 
symtomutveckling. DBS är en neurokirurgisk rutinmetod för behandling av PS, och dystoni-symtom. 
DBS-tekniken innebär att elektroder implanteras i basalganglieområdet och ansluts till impulsgivare 
(pacemaker). Impulsgivaren är programmerbar för variation av det elektriska fältets konfiguration. 
Elektrostimuleringens styrka, impulsfrekvens och impulsvidd kan varieras efter behov genom extern 
programmerare. Mekanismen för effekten är inte helt klarlagd. 
 
 


Målpunkter för DBS 
Indikationer 
Kontra- 
indikationer 
Förväntade 
Effekter 
Stimulerings- 
biverkningar4 
Ventrolaterala 
thalamus 
Nucleus 
Ventralis 
intermedius, 
(VIM), zona 
incerta 
Medicinresistent 
tremor vid PS 
Relativa: 
Hjärtpacemaker 
Ålder >70 år 
 
Talrubbning 
(måttlig- 
uttalad) 
 
Kognitiv svikt 
70-90 % 
tremorreduktion 
Domningar/ 
Parestesier 
 
Talpåverkan 
Nucleus 
subthalamicus 
(STN) 
Levodopa 
responsiv PS i 
komplikationsfas 
med 
fluktuationer 
(”on-off”-
svängningar) 
 
Medicinresistent 
tremor 
 
Absoluta: 
Demens 
Uttalad 
hjärnatrofi 
Relativa:  
Hjärtpacemaker 
 
Uttalade 
autonoma 
symtom   
 
Psykossymtom 
 
Kognitiv svikt 
 
Talrubbning 
(måttlig- 
uttalad). 
 
Ålder >70 år 
Jämnare 
rörlighet 
med minskade 
fluktuationer  
 
Tremorreduktion 
 
Minskat 
medicinbehov 
med ca 50-60 % 
 
Symtom-
förbättring i ”off” 
med ca 50 % 
 
Minskade 
dyskinesier 
Dyskinesier  
 
Tal- och 
sväljsvårigheter  
 
Ögonmotorik 
symtom   
 
Försämring av 
kognitiva och 
emotionella 
symtom 
 
Gång- och 
balansrubbning 
Globus 
pallidus 
internus 
(GPi) 
Levodopa 
responsiv PS i 
komplikationsfas 
med 
fluktuationer 
(”on-off”-
svängningar) 
  
Uttalade 
dyskinesier/ 
dystonier,speciellt 
bifasiska symtom 
Som vid DBS i 
STN. 
Minskade 
dyskinesier och 
dystonier 
 
Tremorreduktion 
 
Symtomförbättri 
ng i ”off” med ca 
30 % 
 
Ingen medicin- 
reduktion 
Synfälts- 
påverkan  
 
Liten risk för 
kognitiv 
försämring 
Kirurgisk komplikationsrisk vid DBS-kirurgi är låg: symtomgivande blödning <1 %; infektion <3 %. Batteriet varar, 
som regel, i 3-5 år beroende på använda stimulatorinställningar och laddningsbara enheter är tillgängliga. DBS-
biverkningar är till stora delar beroende på hur patienter selekteras och hur väl placerad elektroden är, 
optimering av inprogrammeringen samt den postoperativa medicineringens injustering. I stora serier från erfarna 
centra är biverkningsfrekvensen låg. 
Biverkningar: En direkt stimuleringsbiverkan karaktäriseras av att den försvinner om DBS stängs av och 
återkommer vid aktivering av DBS. Man behöver också beakta att sänkt Parkinsonmedicinering i sig kan ge 
upphov till biverkningar, ex apati och dystymi. Det är vanligt med viktuppgång efter STN-DBS. Generellt är 
biverkningsrisken störst vid DBS i den subthalamiska kärnan och hos äldre patienter och som regel är dessa 
biverkningar accentuering av preoperativt förekommande symtom. 
 
4 Biverkningar av själva stimuleringen är reversibla och försvinner om stimuleringen avbryts. Eventuella 
stimuleringsbiverkningar kan minskas genom omprogrammering av polaritet och övriga stimulator-inställningar. 
 


Indikationer – kontraindikationer 
Generellt är neurokirurgisk behandling vid PS indicerad när medicinsk behandling inte längre ger 
tillfredsställande funktionellt resultat i det individuella fallet. Allmänna riktlinjer för användande av DBS finns 
utfärdade av ScandModis, www.swemodis.se. 
Absoluta kontraindikationer för operation är få, men kroniska infektioner som osteit och andra infektioner, som 
kan leda till infektion av elektrod och impulsgivare utgör ett absolut hinder, liksom vissa typer av förmaksstyrda 
hjärtpacemakerar. 
Relativa kontraindikationer är pågående behandling med antikoagulantia och pågående behandling med icke-
förmaksstyrd pacemakerbehandling. Speciella överväganden och åtgärder behövs och i vissa fall utgör det hinder 
för operation. 
I övrigt utgör kognitiv svikt den vanligaste kontraindikationen och, med anledning av associerade sjukdomar och 
risk för kognitiv påverkan, hög ålder. För vissa målpunkter utgörs de av talrubbning (måttlig-uttalad), uttalade 
autonoma symtom och psykossymtom. 
Postoperativ medicinering och elektrostimulering 
Innebär en kombinationsbehandling där medicinering måste balanseras med stimulatorinställning. Båda 
behandlingarna påverkar varandra och för optimalt resultat, både avseende biverkningar och symtomreduktion, 
krävs specialisterfarenhet med samverkan mellan neurokirurgi och neurologi. Av stor vikt är att känna till att 
paradoxala reaktioner med ökad stelhet och parkinsonsymtom kan uppträda som en följd av för kraftig 
kombinationseffekt mellan stimulering och medicinering. Sådana symtom kan identifieras genom att IPG 
tillfälligt stängs av och symtomen värderas. Stor förtrogenhet med DBS och symtomanalys behövs och därför 
ligger ett huvudansvar för behandlingskontroller och adekvat uppföljning hos de neurokirurgiska/neurologiska 
teamen vid universitetsklinikerna, som inlett behandlingen. Individuella arrangemang måste därefter upprättas 
med andra kliniker. 
Speciellt handhavande 
Vid EKG stängs impulsgivarna av och startas efteråt. 
Kontraindikationer och varningar (DBS). Ett DBS-system innehåller elektroniska komponenter, som kan påverkas 
av och även påverka annan elektronik. Alla patienter får information om detta. 
1. 
Hjärtpacemaker kan vara kontraindicerat, framför allt förmaksstyrd pacemaker som teoretiskt, genom 
interferens skulle kunna bli påverkad av DBS-inställd frekvens. Vissa inställningar av DBS kan dock 
användas tillsammans med pacemaker. 
2. 
MR-undersökningar kan endast ske under speciella förutsättningar, se IX 
3. 
Kirurgisk diatermi kan ske med vissa begränsningar, se IX 
4. 
Terapeutiskt ultraljud (ultraljud med värmande eller mekanisk effekt) är kontraindicerat för DBS- 
användare. Gäller även ultraljudsbehandling av apomorfin-noduli. 
MRguidat Fokuserat Ultraljud (MRgFUS)  
Högfrekvent magnetkamera guidat fokuserat ultraljud finns nu tillgänglig i i Sverige med en utrustning i Umeå. 
Indikationen  är främst medicinresistent tremorsymtom vid Essentiell tremor och då endast på den mest 
drabbade sidan (Mortezaei et al. 2024). Det är för närvarande endast ett fåtal patienter med svårbehandlad 
tremor vid PS som har genomgått behandling och studier pågår över långtidseffekter hos patienter med en 
progressiv sjukdom som PS (Monterio et al. 2024). 
Tekniken med fokuserat ultraljud är under snabb utveckling och den har bla tillämpats för funktionell 
neurokirurgi vid PS och Essentiell tremor. Behandlingsprinciperna är desamma som för annan lesionskirurgi med 
en lokal påverkan för att inhibera ett överaktivt kretslopp, och för ”gamma-knivs / strålkanons” behandling, 
med multipla strålningskällor som riktas mot en liten volym som tar upp given energi som termiskt lederas. Det 
är 1024 ultraljudsgeneratorer men en hög frekvens om 620-740kHz som ger hög energi i målpunkten som hettas 
upp. 
Förutsättningarna för MR-g FUS är en mycket nära kontakt med huden med generatorerna och komplett 
hårrakning måste ske. Behandlingen sker utan penetration av skallbenet och sker i en kombinerad MR / FUS 
kamera, med en specialiserad stereotaktisk ram. 
Med MRgFUS är det möjligt att behandla sköra patienter som bedöms ha svårt att klara av exv DBS operation 
eller som bedöms ha svårt att hantera DBS tekniken. Det möjliggör operation av äldre Parkinson eller Essentiell 
tremorpatienter med uttalad tremor som kraftigt påverkar ADL funktion och som kräver höga medicindoser. 


Uppföljningarna är också färre och mindre omfattande. Utrecklingen av behandlingen av andra målpunkter för 
symtom lindring vid PS pågår men är ännu inte en etablerad behandling utandför studier. 
Nackdelen är, som för andra lesionsmetoder, dels tidsbegränsade effekter pga plastisk kompensation i de 
neuronala kretsloppen som genererar symtom, och risk för bestående biverkningar som balansrubbningar, 
parestesier och talpåverkan. Det krävs att patienten kan medverka under det långa ingreppet och inte kräver 
sedering i MR kameran. 10-20% av patienterna kan inte genomgå ingreppet pga för hög täthet av skallbenet.  
DBS, Duodopa® och Apomorfin i Nationella Riktlinjerna 
I Socialstyrelsens nationella riktlinjer för PS, som kom ut i december 2016, har alla 3 avancerade terapier fått 
hög prioritet (Rad PD23-PD25); 
DBS har högsta prioritet för behandling vid otillfredsställande effekt av oral, transdermal eller intermittent 
subkutan läkemedelsbehandling, 1 (av 10), 
DBS har prioritet 3 vid mycket svår tremor, resistent mot farmakologisk behandling. 
 
Duodopa® har prioritet 3 vid otillfredsställande effekt av oral, transdermal eller intermittent subkutan 
läkemedelsbehandling. 
och Apomorfinpump prioritet 4 på samma indikation. 
 
Prioritet 1-4 betyder att behandlingen bör erbjudas till alla patienter i landet som skulle kunna ha glädje av 
behandlingen. Socialstyrelsen anser att det finns en underanvändning av terapierna, åtminstone i delar av 
landet. I en hälsoekonomisk analys har man fastställt att de avancerade terapierna visserligen är relativt dyra, 
men totalt sett ändå är kostnadsneutrala och ekonomiskt inte innebär en belastning för landet (detta på grund 
av det faktum att när patienten förbättras blir han/hon mindre beroende av stöd och hjälp och kan ofta stanna 
längre i yrkeslivet). 
När skall man överväga avancerad terapi? 
I en konsensusdiskussion med över 100 Parkinsonspecialister (”Navigate PD” studien) enades man om att när 
patienten trots minst 5 dagliga doser av L-dopa och trots att han/hon prövat de övriga gängse 
tablettbehandlingarna vid Parkinson (COMT-hämmare, MAO-B-hämmare och dopaminagonister), tillbringar mer 
än 1-2 timmar i ”off” eller med överrörlighet per dag, så ska man överväga avancerad Parkinsonbehandling. En 
viktig förutsättning är att patienten fortfarande har en effekt av L-dopa. Vilken av de tre avancerade 
behandlingarna som en enskild patient bör erbjudas beror på en rad faktorer; för DBS finns det en del 
kontraindikationer (biologisk ålder över 70-75 år, demens och mer uttalad depression) – för dessa patienter är 
pumpbehandling fortfarande möjlig. För pumpbehandlingarna är den viktigaste kontraindikationen oförmåga att 
handha en pump-terapi, d.v.s det är viktigt att patient, anhöriga eller den som vårdar patienter klarar att sköta 
en pumpbehandling. 
Behandlingskonferens 
Patienter bör bli föremål för så kallad behandlingskonferens inför avancerad Parkinsonbehandling när det 
föreligger otillräcklig effekt av peroral, transdermal eller intermittent subkutan läkemedelsbehandling. En 
bedömning vid en behandlingskonferens med hälso- och sjukvårdspersonal som har specialistkunskap om 
rörelsestörningssjukdomar och erfarenhet av alla aktuella åtgärder (DBS, pumptillförsel av levodopa-karbidopa-
gel och apomorfinpump) inför beslut om avancerad behandling har hög prioritet i Socialstyrelsens Nationella 
riktlinjer för vård vid MS och Parkinsons sjukdom (NR PD27, Prioritet 2). 


I enlighet med Socialstyrelsens riktlinjer bör således inte pumpbehandling startas på patient förrän patienten i 
fråga fått en bedömning via behandlingskonferens. Vanligen finns den nödvändiga kompetensen på 
regionsjukhusnivå. Blir bedömningen vid behandlingskonferensen att någon av pumpbehandlingarna är det bästa 
behandlingsalternativet så kan själva uppstarten av pumpbehandling ske på lokalsjukhuset om 
kunskap/intresse/resurser finns för detta. 
Någon exakt definition finns inte för ”otillräcklig effekt …”, men som en tumregel bör man överväga remiss för 
behandlingskonferens innan man doserar L-DOPA fler än fem doser dagligen, hos patienter som har mer än två 
timmar besvärande off per dag, besvärande fluktuationer eller terapiresistent tremor.`
    },
    {
      rubrik: 'VIII. Behandlingssvikt och palliativ vård',
      text: `VIII. Behandlingssvikt och palliativ vård 
Vid avancerad sjukdom kan en del patienter förefalla att inte längre ha någon effekt av antiparkinson- 
behandlingen, utan är gravt hypokinetiska, med en viss fluktuation i symtomatologin och med psykiska symtom 
som oro och konfusion. För denna grupp patienter kan det trots allt finnas ett visst utrymme för levodopa att 
reducera symtomen  om  man  utsätter eller minskar dosen av  andra antiparkinsonläkemedel och andra 
läkemedel, som kan bidra till de psykiska symtomen. Levodopa bör inte helt utsättas då risken för successiv 
utveckling av komplett akinesi är stor. Här är det viktigt att notera att det kan ta åtskilliga dagar innan 
försämring av tillståndet manifesterar sig. En viss effekt av dopaminerg medikation kvarstår hos de flesta 
patienter livet ut. Även om effekt på motorik inte ses kan det finnas effekt på icke-motoriska symtom. Alla 
patienter i sena sjukdomsstadier bör därför ha en tillräcklig dopaminerg terapi intill livets slut.En strategi som 
används ibland är att koncentrera medicineringen under ett antal timmar under dagen/dygnet med 
tillfredställande symtomlindring under denna period och avstå från att försöka ge behandling under ett helt dygn 
vilket ofta leder till besvärande bieffekter. Lågdos apomorfininjektion eller Produdopa® injektioner inför måltid 
och förflyttning förespråkas också av en del och kan ibland ges utan kognitiva bieffekter. Detta förutsätter att 
patienten finns i någon vårdinstans som kan bedöma behandlingseffekt och när injektion kan ges. På 
motsvarande sätt kan upplöst L-dopa (MQM) användas. 
För denna grupp patienter är det särskilt viktigt att beakta att tillstötande annan sjukdom, inte sällan en 
infektion, temporärt kan accentuera parkinsonsymtomen. En gravt sjuk parkinsonpatient har begränsad 
möjlighet att själv påverka sitt tillstånd och är därför i det närmaste helt beroende av den vård och anpassad 
stimulans som omgivningen ger. 
I sena sjukdomsstadier ändras fokus i behandlingen ofta till de icke-motoriska symtomen – ex v depression, 
psykos, demens, sömn, dagtrötthet och smärta – detta för att uppnå bästa möjliga livskvalitet. Att behandla 
sjukdomen optimalt i dessa stadier kräver hög grad av erfarenhet och expertis och patienten bör om möjligt ha 
fortsatt kontakt med Parkinson-kunniga läkare, sköterskor och terapeuter. Man bör i god tid och återkommande 
ta upp till diskussion vilka vårdinsatser patient och anhöriga önskar när livets slutskede närmar sig. Ett nära 
samarbete mellan specialistvård, palliativmedicinsk expertis, primärvård och kommun är av värde. 
I detta avsnitt ges praktiska råd och handläggningsförslag vid situationer som kan bli aktuella när 
Parkinsonpatienter vårdas på grund av andra sjukdomar. 
 
Medicinering i samband med elektiv kirurgi 
Några helt generella råd kan inte ges och hänsyn behöver tas till såväl operationsindikation som typ av narkos 
och förväntat tillstånd efter operation. 
Diskussion med narkosläkare, operatör, respektive behandlande läkare kan vara av värde. Nedan följer råd som 
oftast är tillämpliga i syfte att undvika per- och postoperativa komplikationer, däribland uttalad stelhet inför 
operation, som dels kan försvåra sövning och intubering, dels medföra ökad risk för aspiration. Postoperativa 
risker som stelhet med pneumoni  på grund  av  atelektasbildning,  hallucinos och svår överrörlighet som skulle 
kunna äventyra sårläkning och ev. protesers hållfasthet. 
De flesta inhalationsnarkosmedel potentierar antiparkinsonmedel med risk för kraftigare effekter postoperativt. 
Neuroleptanalgesi kan framkalla akinesi samt konfusion eller hallucinos i samverkan med dopaminverkande 
medel. 
För interaktioner, bl a MAO-B-I och Petidin® samt vissa antibiotika, se Vanliga interaktioner. 
Vid speciella operationer (total gastrektomi eller omfattande tarmoperationer) kan subkutan Produodopa® 
infusion eller intermittenta subkutana injektioner av Produodopa® användas (se bilaga X).   


Vid främst elektivt gastrointestinalt ingrepp med förväntad längre påverkan av tarmmotoriken, kan ett tillfälligt 
byte av behandling inför operationen vara gynnsam. Produodopa® är även då ett alternativ som kan övervägas. 
Vid relativt låga levodopaekvivalenta doser (<500 mg) och om det inte är en skör patient kan man också 
tillfälligt ersätta peroral behandling med transkutan behandling med rotigotinplåster. Perkutant upptag påverkas 
inte av ingrepp, och byte till rotigotin ett par dygn före ingreppet kan göras. Dosen rotigotin avpassas till den 
dos L-dopa som ska ersättas och behandlingstiden anpassas till dess att normalt upptag i tarm kan förväntas. 
Agonister kan ersättas mg för mg med stöd av omvandlingstabell för levodopaekvivalenta doser, i praktiken 
motsvarar 4 mg rotigotin ca 4 mg ropinorol. Det är en fördel att man inte överdoser under operation, för att 
undvika de av narkosmedel för hallucinos potentierande effekterna. Ofta kan 4- 12 mg rotigotin vara en effektiv 
dygnsdos i och kring operationsdagarna och ordinarie behandling återstartas efterhand. 
Vid funktionella neurokirurgiska ingrepp för behandling av PS gäller andra förhållanden då effekten av 
behandling nödvändiggör stora medicinreduktioner. Detta sker i samråd mellan neurokirurg och neurolog i 
motorikteam i samband med operationerna, se avsnitt Neurokirurgisk behandling. 
Operationsdagen, preoperativt 
Om det tar tid innan operationen kommer till stånd, kan man ge T. Madopark Quick Mite® 50 mg, 1-2 st upplöst i 
liten mängd vätska och ge under tungan i 5 mL spruta. Om man förväntar sig att ventrikel/tarmar påverkas kan 
man med fördel sätta en V-sond peroperativt och ge medicineringen postoperativt i liten mängd vätska. 
Operationsdagen, postoperativt 
Ge endast levodopa-medicineringen och ge första dosen efter uppvaknandet i form av Madopark Quick®, 50-100 
mg eventuellt i sond eller under tungan om sväljning inte är möjlig. Kan ges så snart patienten kan ta emot 
medlet. Om det dröjer mer än 4h tills patienten kan svälja kan Produodopa® ges som enstaka subkutana doser 
(0,6 ml motsvarar ca 100 mg LED). Följ i övrigt ordinarie levodopadosering som från motsvarande 
doseringstillfälle före operationsdagen. Gör uppehåll med alla övriga medel. 
Första post-operativa dygnet 
Ge ordinarie levodopa från morgonen men inte övriga typer antiparkinsonmedicinering. 
Andra post-operativa dygnet 
Ge ordinarie doser från morgonen av alla typer antiparkinsonmedicinering. 
Vid hallucinos eller oro 
Undvik att ge mer levodopa. Cave alla former av neuroleptika! Vid behov av sedering, ge bensodiazepiner eller 
Heminevrin® 300-600 mg. 
Medicinering som kan ges i sond – För aktuell information se rubriken ”Delbarhet” för respektive 
läkemedel på FASS.se 
 
DBS - praktiskt handhavande vid diagnostiska undersökningar och 
kirurgi 
Diagnostiska undersökningar 
1. 
Vid EKG stängs impulsgivarna av och startas efteråt. Ofta har patienten en egen programmerare som 
kan användas för detta. 
2. 
Helkropps-MR kan göras med vissa godkända impulsgivare och elektroder. I praktiken gäller detta 
endast patienter som fått ett helt nytt system inopererat efter ca 2010. En del äldre pulsgeneratorer är 
godkända för MR med head-coil endast. Kontrollera kompatibilitet med tillverkare av DBS- utrustning. 
Risken med MR är dels att inducerade strömmar skadar pulsgeneratorn, men framför allt att 
magnetinducerad ström i elektroderna värmer upp elektroden i hjärnan och ger upphov till irreversibla 
skador i hjärnan. För att MR skall kunna genomföras måste systemet vara intakt (inga kabelbrott). 
3. 
Diagnostiskt ultraljud ska inte utföras direkt över utrustningen, men är ofarligt använda på avstånd 
från utrustningen. 
4. 
Röntgenutrustning kan i sällsynta fall påverka stimuleringen. Kontrollera att systemet är påslaget 
efter undersökning. 
 
 


Terapeutiska åtgärder 
1. 
Terapeutiskt ultraljud (värmebehandling och behandling av apomorfinorsakade noduli) skall 
inte användas någonstans på kroppen om patienten har ett DBS-system. 
2. 
Operationer av patienter med DBS. Ur narkossynpunkt finns inga kontraindikationer. 
3. 
Kirurgisk diatermi skall användas med eftertanke. Det finns ingen kontraindikation mot bipolär 
diatermi, men vid ingrepp i ansikte och på hals skall energinivån hållas så låg som möjligt. Relativ 
kontraindikation finns mot monopolär diatermi. Måste monopolär diatermi användas skall neutralplattan 
placeras på sådant sätt att det elektriska fältet inte direkt kommer att omfatta DBS- dosan eller området 
för kabel mellan dosa och hjärnelektrod. Risken är dels skador på utrustningen, och om systemet inte är 
intakt kan läckströmmar ge temperaturökning I hjärnan. 
 
Akuta tillstånd vid Parkinsons sjukdom och andra 
basalgangliesjukdomar 
Vid plötsliga försämringar i Parkinsonsymtom eller nytillkommen förvirring bör akut somatisk sjukdom eller 
bristande följsamhet till medicinering uteslutas. För detaljerade handlingsplaner vid konfusion, psykos eller 
hyperpyrexisyndrom, se handlingsplaner i avsnitt 0.`
    },
    {
      rubrik: 'IX. Diagnostik och behandling av parkinsonliknande tillstånd',
      text: `IX. Diagnostik och behandling av 
parkinsonliknande tillstånd 
Sekundär parkinsonism 
Läkemedelsutlöst parkinsonism 
Symtom: Misstänk diagnos vid symmetrisk debut, relativt snabbt påkommet tillstånd och inkomplett symtombild 
samt atypiskt förlopp. Misstänk diagnos sekundär parkinsonism vid känd psykiatriskt respektive psykoorganiskt 
demenstillstånd, som innebär ökad risk. Misstänk läkemedelsutlöst påverkan vid abrupt påkomna symtom eller 
försämring av annars välfungerande och välbehandlad patient med kändPS. Läkemedelsframkallad parkinsonism 
är vanligen reversibel vid utsättning av det misstänkta medlet, men i ca 10%  av  parkinsonism framkallad av  
anti-dopaminerga  medel är  symtomen bestående. Utredning: Noggrann läkemedelsanamnes, minst 6 månader 
tillbaka. Samtliga läkemedel är av intresse, men speciellt kan nämnas anti-emetika, neuroleptika, litium, 
valproat, kolinesterashämmare, kalciumflödeshämmare. DaTSCAN kan vara av värde för att bedöma ev. 
degeneration av dopaminsystemet. 
Behandling: Vid neuroleptikaframkallad parkinsonism: 1. Utsättning eller sänkt dos av misstänkt medel om 
möjligt. 2. Byt till ”atypiskt” neuroleptikum. 3. Eventuellt akut behandling med antikolinergika. 4. I samråd med 
psykiatriker kan lågdos levodopa eller agonist övervägas. 
Vid kolinesterashämmareframkallad parkinsonism: 1. Utsättning eller sänkt dos av misstänkt medel om möjligt. 
2. Byt medel inom gruppen. 3. Lågdos levodopa. 4. Memantin, vilket kan ge bättre rörelseförmåga. 
Vid övriga medel bör utsättning eller byte till annan klass av läkemedel vara möjlig. 
Läkemedelsutlöst tremor 
Symtom: Misstänk diagnos vid symmetrisk debut av tremor och samtidig behandling med farmaka (t.ex. 
antidepressiva, valproat, kolinesterashämmare, tyroideamedel och astma/KOL-behandling). Misstänk diagnos vid 
långvarig behandling med litium. Tremorkarakteristika är vanligen förstärkt fysiologisk tremor med finvågig, 
högfrekvent kinetisk och positionell tremor, men vilotremor kan förekomma. Utredning: Noggrann 
läkemedelsanamnes, minst 6 månader tillbaka. Mät eventuell litiumhalt. 
Behandling: 1. Utsättning eller sänkt dos av misstänkt medel om möjligt. 2. Betablockerare om inte astma/KOL 
hindrar detta. 3. Antikolinergika vid neuroleptikaframkallad tremor. 4. Lågdos levodopa eller agonist. 
Läkemedelsutlösta demenssymtom 
Symtom: Misstänk vid kognitiva symtom (nedsatt minne, vakenhet, kortikala defekter) vid PS och samtidig 
behandling med t.ex. opioidanalgetika, antikolinerga läkemedel mot urinträngningar, vissa antidepressiva, 


valproat och andra antiepileptika. 
Utredning: Noggrann läkemedelsanamnes. 
Behandling: Dosminskning eller utsättning av misstänkt medel om möjligt. 
Vaskulär parkinsonism 
Symtom: Stegvis insjuknande eller relativt abrupt försämring, men långsam progress kan förekomma. 
Gångsvårigheter, bredspårig gång och med initieringsproblem, beskrivet som ”magnetiska fötter”, ”de små 
stegens march” (”marche à petit pas”), eller parkinsonism som drabbar nedre kroppshalvan. Oftast mindre 
symtom av rigiditet respektive tremor i armar. Vid progressiv vaskulär leukoencefalopati kan långsam 
progression ske till demens. Utredning: Fastställande av associerade sjukdomar, inkluderande nedsatt 
glukostolerans och intermittent hypertoni. MR hjärna med påvisande av periventrikulära lesioner i vit substans. 
Utredning om progressiv vaskulär leukoencefalopati föreligger. Observera att PS kan föreligga även hos patienter 
med cerebrovaskulär komorbiditet. 
Behandling: Optimera kontroll av grundsjukdomar. Om inga kontraindikationer finns, bör olika medicinering 
under minst 4 veckor vardera prövas och utvärderas. Levodopa upp till 400 mg dagligen kan prövas, alternativt 
en dopaminagonist i relativt låg dos, exv Requip Depot® ca 4 mg eller Sifrol Depot ® motsv. 0.26-0.52 eller mg 
0.18 mg 1 x 3. I vissa fall är amantadin effektivt i doser upp till 200 mg/ dygn. 
Den förväntade effekten är långsamt insättande förbättring, som eventuellt inte blir kliniskt tydlig förrän efter 
utsättande. Effekten är inte dramatisk, men kan innebära skillnad mellan behov av gånghjälpmedel och 
självständigt gående. Risk för konfusion finns. Till ett behandlingsförsök hör atteffekten skall kunna utvärderas 
och följas upp vilket förutsätter observationsmöjlighet. En gynnsam effekt kan vara notabel först efter 
insättning och utsättning, exv vad gäller gångförmåga. 
 
Essentiell tremor 
Symtom: Tremor, rytmisk oscillation av en kroppsdel, orsakad av alternerande eller synkrona sammandragningar 
av reciprokt innerverade antagonistiska muskelgrupper. Bilateral positionell tremor med eller utan kinetisk 
tremor, främst i armar. Huvudtremor kan förekomma. OBS! Påtaglig risk för förväxling med dyston tremor, var 
särskilt observant på tecken till dystoni. Vid utebliven/dålig effekt på behandlingsförsök bör remiss avgå till 
motorikream vid regionsjukhus. 
Utredning och behandling: Se Swemodis Tremorriktlinjer. 
 
Dystoni 
Symtom: Samtidig kontraktion av muskler (agonist/antagonist) kring en led leder till förlängda kontraktioner, 
vridningar, repetetiva rörelser eller tremor och kan vara smärtsamt. Dystoni kan förekomma vid PS eller vara 
sekundär till annan sjukdom. Utredning: Kliniskt status, MR hjärna för påvisande av ev fokal lesion i basala 
ganglierna. SPECT för påvisande av dopaminbrist. Eventuellt gentest för lågpenetrerande dystonigener (DYT 1, 
5, eventuellt 7, 11, 12). Vid debut i vuxen ålder och utan familjanamnes är det ovanligt med positiva genetiska 
fynd. 
Behandling: Fokala dystonier behandlas med botulinumtoxin. Generella dystonier behandlas med 
antikolinergika. Levodopa eller dopaminagonister bör prövas, särskilt hos yngre. Vid svåra symtom kan 
elektrostimulering i globus pallidus övervägas. 
 
Atypisk parkinsonism (se även Bilaga I: Diagnoskriterier) 
Multipel systematrofi (MSA) 
Symtom: En progressiv, sporadisk neurodegeneration som karakteriseras av autonom dysfunktion, parkinsonism, 
ataxi och pyramidbanesymtom i vilken kombination som helst. Symtom kan innefatta ortostatisk hypotension, 
urininkontinens, inkomplett blåstömning och erektil dysfunktion, bradykinesi, rigiditet, dysartri, 
blickriktningsnystagmus, Babinskis tecken, postural instabilitet samt ataktisk gång. Utredning: MR med avseende 
på putamen, pons, hjärnstam och cerebellära pedunklar (mellersta). Likvoranalys (neurofilament), urodynamisk 
undersökning och ortostatiska test. FDG-PET kan användas. 


Behandling: Information. Levodopa (upp till 1000 mg/dag) och dopaminagonist i adekvata doser som kan ha 
god effekt som dock är avtagande i sjukdomsförloppet och kan förvärra blodtrycksproblematiken. Amantadin 
bör prövas med 200-300 mg dagligen. Blodtryckshöjande medel kan behövas, se Ortostatisk hypotension. KAD 
eller suprapubiskateter kan krävas. Vid stridor kan C-PAP eller tracheostomi övervägas. Överväg PEG vid 
sväljningssvårigheter/ aspirationsrisk. 
Progressiv supranukleär pares (PSP) 
Symtom: Hypokinesi och rigiditet, ofta symmetriskt och axialt. Tidiga balanssvårigheter och fallrisk, ofta bakåt. 
Långsamt tilltagande dysartri och sväljningssvårigheter. Förlångsamning av kognitiva, frontala funktioner. 
Ögonsymtom med låg blinkfrekvens, blefarit och förlångsammade sackader samt tilltagande vertikal blickpares 
vilken långsamt utvecklas till supranukleär blickparalys. Ögonlocksdyspraxi. Nedsatt frontal inhibition.  
Utredning: MR med avseende på atrofi av mesencephalon (kolibri-tecken), cerebellum, pons, övre cerebellära 
pedunklar. Likvor med förhöjt neurofilament. 
Behandling: Information om hög fallrisk, samt hög risk för aspiration. Tidigt insatta gånghjälpmedel och tidigt 
insatt logopedbedömning av aspirationsrisken. Levodopa upp till 1000 mg dagligen samt Amantadin 200-300 mg 
dagligen kan prövas försiktigt med hänsyn till konfusionsrisken. 
Osteoporosbehandling (kalk + D3-vitamin eller bifosfonat) vid fallrisk. Behandling med ögonsalva mot blefarit och 
botulinumtoxin vid ögonlocksdyspraxi.  
Kortikobasal degeneration (CBD), kortikobasalt syndrom (CBS) 
Den histopatologiska termen kortikobasal degeneration omfattar även andra sjukdomsbilder (fenotyper), med 
bl.a. primär progressiv afasi där språkliga kortikala regioner är involverade, men vanligen går formerna inte över 
i varandra. Långvariga förlopp för CBD finns beskrivna. 
Symtom: Progressiv, mer eller mindre asymmetrisk hypokinesi och rigiditet, med kortikala defekter (motorisk 
apraxi, afasi, parafrasi, kortikal sensorisk defekt, m.m.). Myoklonier, ”alien limb”-symtom (främmande 
extremitet) och relativt snabbt uppkomna dystonier och kontrakturer. Dåligt levodopasvar. 
Utredning: MR undersökning med avseende på unilateral kortikal atrofi. Blodflödesmätning av kortex med 
avseende på selektiva defekter. Likvoranalys av parenkymskademarkörer. 
Behandling: Låg dos levodopa och låg dos dopaminagonist bör prövas. Amantadin kan ha gynnsam effekt och bör 
prövas. 
Demens med Lewy-inklusionskroppar (DLB) 
Symtom: Progressiv kognitiv degeneration, som interfererar med dagligt liv, som inte nödvändigtvis omfattar 
minnesproblem. Uppmärksamhets- och fronto-subkortikal samt visuospatial dysfunktion med fluktuerande 
symtom. Återkommande visuella hallucinationer, som karakteristiskt är detaljerade och väl beskrivbara. 
Motoriska parkinsonsymtom inom ett år från kognitiv svikt. Dysautonomi med ortostatism föreligger ofta tidigt.  
Utredning: Klinisk bild. Neuro psykologiska tester. Likvoranalys med lågt beta- amyloid. MR, DaTSCAN (om 
parkinsonism ännu ej föreligger). 
Behandling: Information och stöd. DLB-patienter har ofta en allmänt hög känslighet för läkemedel. 
Kolinesterashämmare kan ha god effekt. Levodopa kan övervägas i låg dos vid funktionshämmande parkinsonism. 
Neuroleptika är kontraindicerade då de kan ge livshotande biverkningar. 
Normaltryckshydrocefalus (NPH) 
Symtom: Typiska symtom är långsamt progressiv gångrubbning med bredbasig och bakåtlutad gång, 
psykomotorisk förlångsamning och minnesstörning samt tillkomst av inkontinens. En DT eller MR- undersökning 
visar vidgade ventriklar utan uppenbar atrofi och ibland bild som vid ödem periventrikulärt.  
Utredning: DT eller MR, likvortapptest och lumbalt infusionstest. 
Behandling: Shuntning av liquor. 
Övriga tillstånd – t.ex. Alzheimers sjukdom 
Symtom: Överväg Alzheimers sjukdom vid psykoorganiskt demenstillstånd och kortikala bortfallsymtom, samtidig 
parkinsonism och frontala dysexekutiva symtom eller konfusion och parkinsonism.  
Utredning: Om inte känd demenstyp, utredning med avseende på etiologi.`
    },
    {
      rubrik: 'Bilaga I: Diagnoskriterier (MDS-PS, MCI, Demens, MSA, PSP, DLB, CBD)',
      text: `Bilaga I: Diagnoskriterier 
(ej validerade översättningar från engelska) 
 
Diagnostiska kriterier för PS uppdateras över tiden. I tidigare versioner av dessa riktlinjer har vi presenterat 
NINDS Diagnostic Criteria for Parkinson Disease (Gelb DJ, Oliver E, Gilman S. Diagnostic criteria for Parkinson 
Disease. Arch Neurol 1999: 56 (1):33-39) och UK Parkinson’s Disease Society Brain Bank diagnostiska kriterier 
(Gibb WR, Lees AJ. The relevance of the Lewy body to the pathogenesis of idiopathic Parkinson's disease. J 
Neurol Neurosurg psychiatry 1988; 51: 745-52). MDS har relativt nyligen kommit ut med nya diagnostiska 
kriterier som allmännt accepterats och vi har därför valt att endast redogöra för dem. 
MDS Kliniska diagnostiska kriterier för Parkinsons sjukdom 
Postuma RB, Berg D, Stern M et al. Movement Disorders, Vol. 30, No. 12, 2015 
 
Sammanfattning av Diagnostiska kriterier för PS enligt MDS (2015): 
Nödvändigt kriterium är parkinsonism, vilket definieras som förekomst av bradykinesi* i extremitet i 
kombination med minst 1 av vilotremor och rigiditet. Undersökning avseende alla kardinaltecken ska 
utföras som beskrivet i MDS-Unified Parkinson Disease Rating Scale. Efter att ha fastställt att 
patienten har parkinsonism krävs för diagnos av: 
Kliniskt etablerad PS: 
1. Frånvaro av absoluta uteslutningskriterier (se tabell nedan) 
2. Åtminstone två stödjande kriterier (se tabell nedan) 
3. Inga röda flaggor 
Kliniskt trolig PS: 
1. Frånvaro av absoluta uteslutningskriterier. 
2. Om ”röda flaggor” förekommer balanseras de av stödjande kriterier. Närvaro av en ”röd 
flagga” balanseras av minst ett stödjande kriterium; Närvaro av två ”röda flaggor” kan 
balanseras av minst två stödjande kriterier. Om det finns mer än två ”röda flaggor” kan 
diagnosen kliniskt trolig PS inte ställas. 
*) Bradykinesi = avtagande amplitud och/eller frekvens vid upprepade rörelser. 
 
MDS kriterie-tabell 
Stödjande kriterier 
Otvetydigt god effekt av dopaminverkande behandling. När behandling startades återfick 
patienten normal eller nästan normal funktion. Om sådan god effekt inte har dokumenterats 
kan effekten av dopaminverkande behandling ändå betraktas som otvetydigt god om: 
a) Det har uppstått tydlig förbättring när dosering ökas eller tydlig försämring när dos 
minskas. Med tydlig förbättring menas antingen >30% förbättrad UPDRS III eller ett 
övertygande vittnesmål om förbättring enligt patient eller anhörig. 
b) Dokumenterade on/off-fluktiationer som i något skede innefattat förutsägbara wearing-
off mot slutet av dosintervall. 
Förekomst av levodopautlösta dyskinesier. 
Vilotremor i extremitet synlig vid klinisk undersökning (aktuell eller tidigare dokumenterad 
observation). 
Förlust av luktsinne eller kardiell sympatisk denervation som dokumenterats med MIBG-
scintigrafi 


Absoluta exklusionskriterier 
Otvetydiga cerebellära avvikelser, som t.ex. cerebellär gångstörning, ataxi i extremitet eller 
cerebellär påverkan på ögonmotorik (ihållande blickriktnings-nystagmus, square-wave 
nystagmus, hypermetriska sackader). 
Vertikal blickpares vid blick nedåt eller förlångsammade sackader vid sackad nedåt. 
Inom fem år från symtomdebut uppfyller patienten diagnostiska kriterier för trolig 
frontotemporal demens (av frontalt beteende-typ) eller primär progressiv afasi. 
Parkinsonism är begränsad till nedre extremiteter även efter minst 3 år med symtom. 
Behandling med dopaminreceptorhämmande läkemedel eller dopamin-uttömmande  
läkemedel  i doser  och med tidsförlopp förenliga med läkemedelsutlöst parkinsonism. 
Avsaknad av observerbar effekt av höga doser l-dopa trots minst måttliga parkinsonsymtom. 
Otvetydiga kortikala bortfallssymtom såsom avsaknad av grafestesi och stereognosi (trots 
bevarade primära sensoriska funktioner), förekomst av ideomotor apraxi eller progressiv afasi. 
Normal funktionsavbildning av det presynaptiska dopaminsystemet (med t.ex. PET eller SPECT). 
Förekomst av annan dokumenterad förklaring till parkinsonism där det är troligt att detta 
orsakar patientens symtom, eller om läkare med stor erfarenhet av parkinsondiagnostik anser 
att det är mer troligt att orsaken till patientens symtom är en annan än Parkinsons sjukdom. 
Röda flaggor 
Snabb utveckling av gångstörning som leder till behov av rullstol inom 5 år. 
Fullständig avsaknad av progress av symtom eller statusfynd inom 5 år om förklaringen till detta 
inte är behandling. 
Tidig bulbär dysfunktion: Svår dysfoni eller dysartri (oförståeligt tal mesta del av tiden) eller 
svår dysfagi (krävs minst timbalkost eller NG-sond/PEG) inom de första 5 åren. 
Inspiratorisk andningspåverkan: inspiratorisk stridor dagtid och/eller nattetid eller frekventa 
inspiratoriska djupa suckar 
Svår autonom dysfunktion inom de första 5 åren av sjukdomen, t.ex: 
a) Ortostatisk hypotension, >30 mm systoliskt eller >15 mm diastoliskt efter 3 minuter i 
stående. Observera att detta förutsätter avsaknad av dehydrering eller andra orsaker 
till ortostatism, såsom annan sjukdom eller medicinering. 
b) Uttalad blåsretention eller urininkontinens (dock ej om mycket lång anamnes på detta 
eller om det är lindrig ansträngningsinkontinens hos kvinnlig patient). Blåsretention 
skall inte kunna förklaras av prostatasjukdom och måste hos män vara associerad med 
erektil dysfunktion. 
Upprepade fall (>1 per år) på grund av nedsatt balans inom de första 3 åren. 
Oproportionerlig antecollis (dyston) eller kontrakturer i händer/fötter inom 10 år av sjukdom. 
Inget av de vanliga ickemotoriska symtomen föreligger trots minst 5 års sjukdom. Vanliga 
ickemotoriska symtom avser: sömnstörning (fraktionerad sömn, dagsomnolens, REM-
sömnstörning), autonom dysfunktion (förstoppning, urinträngningar, symtomgivande 
ortostatism), hyposmi eller psykatriska symtom som depression, ångest, hallucinationer. 
Pyramidbanebortfall (central svaghet eller reflexstegring) som inte kan förklaras av annan 
sjukdom/skada. Lindrig reflexassymmetri och isolerat Babinskis tecken inkluderas inte i 
detta. 
Bilateral symmetrisk parkinsonism. Patient eller anhörig uppger att symtom startat bilateralt 
och utan sidoskillnad och man finner ingen sidoskillnad vid klinisk undersökning. 


Kliniska diagnostiska kriterier för mild kognitiv svikt, MCI, vid 
Parkinsons sjukdom  
Litvan I, Goldman JG, Tröster AI, et al. Diagnostic criteria for mild cognitive impairment in Parkinson’s 
disease: Movement Disorder Society Task Force Guidelines. Mov Disord 2012;27:349-56 
Movement Disorder Society preliminära diagnostiska kriterier för PD-MCI. Avser 
test med validerade och specificerade instrument. 
Nivå I – PD-MCI (låg grad av stöd i tester för diagnos) Montreal 
Cognitive assessment (MoCa), 
Parkinson’s Disease Cognitive Rating Scale (PD-CRS), Scales for Outcomes in Parkinson’s Disease- Cognition 
 
PD-MCI diagnostiseras om minst två neuro psykologiska test visar nedsatt funktion vid användande 
av ett testbatteri med bara ett test per kognitiv domän eller ett testbatteri som täcker mindre än 
fem kognitiva domäner. 
Nivå II PD-MCI 
 
Den säkrare diagnosen grad kräver ett testbatteri som innehåller minst två tester för var och en av 
följande fem kognitiva domäner: uppmärksamhet och arbetsminne, exekutiv funktion, språk, minne, 
samt visuospatial funktion. 
 
Nedsatt funktion i minst två tester krävs för PD-MCI diagnos. Om nedsatt funktion påvisas i en eller 
flera olika domäner kan undergruppering ske i PD-MCI en domän eller PD-MCI multipla domäner. 
 
DIAGNOSTISKA KRITERIER FÖR PD-MCI 
Inklusionskriterier 
 
Diagnosen PS enligt UK PD Brain Bank kriterier 
 
Gradvis kognitiv försämring enligt patient eller annan person eller behandlande läkare 
 
Kognitiv svikt enligt neuro psykologiska tester eller ett globalt kognitivt test 
 
Den kognitiva svikten ger ingen påtaglig effekt på den funktionella självständigheten 
Exklusionskriterier 
1. Parkinson demens (se nedan) 
2. Annan förklaring till kognitiv störning (delirium, depression, läkemedelsbiverkning mm) 
3. Andra parkinsonsymtom som kan ge kognitiv svikt (svår ångest, depression, psykos, ökad 
dagtrötthet mm) 
 
Kliniska diagnostiska kriterier för demens vid Parkinsons sjukdom 
Emre M, Aasland D, Brown R et al. Clinical Diagnostic Criteria for Dementia Associated with Parkinson’s 
Disease. Movem. Dis. 2007; 12: 1689-1707. 
Kliniska huvudkarakteristiska: 
1. PSs diagnos enligt UKQS Brain Bank kriterier 
2. Långsamt progredierande och smygande insättande demens-syndrom inom ramen för en klarlagd  PS, 
diagnostiserat genom anamnes och kliniska och neuro psykologiska undersökningar, definierat genom: 
 
Nedsatt kognitiv funktion i mer än en domän. 
 
Nedsättning jämfört med en pre-morbid nivå. 
 
Nedsättning av en nivå som påverkar dagliga funktioner/livsföring (socialt, yrkesmässigt eller 
personlig ADL) oberoende av motoriska eller dysautonoma symtom. 


Associerade kliniska tecken 
3. Kliniska tecken på kognitiva störningar 
 
Uppmärksamhet: Nedsatt. Nedsättning av spontan och fokuserad uppmärksamhet, låg prestation i 
uppmärksamhetstest; variation av uppmärksamhetsfunktioner under dagen och mellan dagar. 
 
Exekutiva funktioner: Nedsatt. Nedsättning i funktioner som kräver initiering, planering, 
konceptbildning, mentala regelbildningar, mentala ramar och rambyten, mental flexibilitet eller 
mental stabilitet, nedsatt mental hastighet (bradyfreni) 
 
Visuo-spatiala funktioner: Nedsatt. Nedsatt funktion där visuo-spatial orienteringsförmåga, 
perception eller konstruktion krävs. 
 
Minnesfunktioner: Nedsatt. Nedsättning av fri händelsehågkomst, eller nyinlärning av material. 
Minnet förbättras av påminnelser, igenkänning bättre än spontan fri hågkomst. 
 
Språkfunktioner: Språkfunktionerna är vanligen intakta. Nedsättning av ordåtkomst och 
förståelse av komplexa meningar kan förekomma. 
4. Kliniska tecken på beteenderubbningar 
 
Apati: nedsatt spontanitet; motivations- och intresseförlust för aktivteter som kräver 
engagemang. 
 
Personlighetsförändring och stämningsläge, inkluderande depression och ångest. 
 
Hallucinationer: vanligen visuella och komplexa med människor, djur eller föremål. 
 
Vanföreställningar: vanligen paranoida, som underlägsenhet, intrångsidéer (främmande 
inneboende person), omtolkningar. 
 
Betydande dagtrötthet. 
 
Kliniska tecken som inte utesluter PDD, men som inger diagnostisk tveksamhet 
 
Samtidig närvaro av ett onormalt tillstånd som i sig kan ge upphov till kognitiv svikt, men som inte 
bedöms vara orsak till demensen, t ex förekomst av hjärnavbildningstecken på vaskulär(a) lesion(er). 
 
Okänt tidsintervallet mellan uppkomst rörelsesymtom och kognitiva symtom. 
 
Kliniska tecken som indikerar annan orsak eller sjukdom som ger upphov till kognitiv påverkan 
som, om närvarande omöjliggör en tillförlitlig PDD diagnos 
 
Kognitiva svikt- och beteende-störningar som endast kan relateras till situationer och tillstånd som 
karakteriseras av: 
- 
Akut konfusion som beror på: 
o Systemiska sjukdomar 
o Läkemedelsreaktion 
o Djup depression enligt DSM IV 
 
Kliniska tecken på ”möjlig vaskulär demens” enligt NINDS-AIREN kriterier. 
(demens som kan relateras  till cerebrovaskulär  sjukdom genom påvisande  av  fokala neurologiska 
tecken vid neurologisk status-undersökning, t ex hemipares, sensoriska defekter och påvisande av 
relevanta tecken till cerebrovaskulär sjukdom vid hjärnavbildning, OCH ett samband mellan dessa två 
tillstånd genom att en av följande gäller: debut av demens inom 3 månader efter ett stroke-
insjuknande, plötslig försämring av kognitiva funktioner eller fluktuerande, stegvis progredierande 
försämring av kognitiva funktioner. 
 
Kliniska diagnoskriterier PDD 
OBS! notera ordningsföljd – starkare diagnoskriterier först: 
Sannolik demens vid Parkinsons sjukdom 
A: Kliniska huvudkarakteristika 
Bägge skall vara uppfyllda 


B: Associerade kliniska tecken: 
o 
Typisk profil av kognitiv profil, defekter med nedsättning av minst 2 av de 4 
kärndomänerna (nedsatt uppmärksamhet, som kan fluktuera, nedsatta exekutiva 
funktioner, nedsatta visuo-spatiala funktioner och nedsatt fri hågkomst, som vanligen 
förbättras av påminnelse). 
o 
Närvaro av minst ett beteende-symtom (apati, depressions- eller ångesttillstånd, 
hallucinationer, vanföreställningar, betydande dagtrötthet) stärker diagnosen ”sannolik 
demens vid Parkinsons sjukdom”, men frånvaro av beteende-symtom utesluter inte 
diagnosen. 
 
C: Ingen av grupp III-symtom uppfylls. D: 
Ingen av grupp IV-symtom uppfylls. 
 
Möjlig demens vid Parkinsons sjukdom 
A: Kliniska huvudkarakteristika 
Bägge skall vara uppfyllda 
B: Associerade kliniska tecken: 
o 
Atypisk profil av kognitiv påverkan inom en eller flera kognitiva domäner, t.ex betydande eller 
impressiv (s k flytande) afasi, eller renodlad impräglingsrelaterad minnespåverkan (med 
avsaknad av gynnsam effekt av påminnelse eller i tester med igenkänningsuppgifter) med 
bevarad vakenhet. 
o 
Beteende-störningar kan, men behöver inte förekomma. 
ELLER 
C: Ett eller flera av grupp III-symtom uppfylls. 
D: Ingen av grupp IV-symtom uppfylls. 
 
 


MDS Kliniska diagnostiska kriterier för Multipel systematrofi (MSA) 
Wenning GK, Stankovic I, Vignatelli L, Fanciulli A et al. The Movement Disorder Society Criteria for the Diagnosis 
of Multiple System Atrophy. Mov Disord. 2022 Jun;37(6):1131-1148. 
 
Uppdelning i kliniskt etablerad MSA-P eller MSA-C enligt ett övervägande 
motoriskt syndrom 
Essentiellt 
kärnsymtom 
En sporadisk, progressiv sjukdom hos vuxna (>30 år). 
Kliniskt etablerad MSA 
Kliniskt sannolik MSA 
Kritiska kliniska 
tecken/symtom 
1. Autonom dysfunktion definierad som 
(minst en krävs): 
 
Oförklarliga 
urintömningssvårigheter med  
urinrestvolym ≥100 mL 
 
 
Oförklarlig 
urinträngningsinkontinens 
 
 
Neurogen OH (≥20/10 mmHg 
blodtrycksfall) inom 3 minuter 
efter stående eller tilt-test 
 
och minst en av 
 
2. Dåligt L-dopa-känslig parkinsonism 
3. Cerebellärt syndrom (minst två av 
gångataxi, extremitetsataxi, 
cerebellär dysartri eller 
okulomotoriska symtom) 
Minst två av: 
1. Autonom dysfunktion definierad 
som (minst en krävs): 
 
 
Oförklarliga 
tömningssvårigheter med 
urinrestvolym 
 
 
Oförklarlig 
urinträngningsinkontinens 
 
 
Neurogen OH (≥20/10 mmHg 
blodtrycksfall) inom 
10 minuter efter stående 
eller tilt-test 
 
2. Parkinsonism 
 
3. Cerebellärt syndrom (minst en av 
gångataxi, extremitetsataxi, 
cerebellär dysartri eller 
okulomotoriska symtom) 
Stödjande 
kliniska (motor 
eller icke-
motoriska) 
tecken/symtom 
Åtminstone två 
Åtminstone ett 
MRI 
förändringar 
Åtminstone ett 
Krävs ej 
Exklusion 
kriteria 
Saknas 
Saknas 
 
Stödjande kliniska tecken/symtom  
Stödjande motor 
tecken/symtom 
Snabb progression inom 3  år 
efter motorisk debut 
Stödjande icke-
motoriska 
tecken/symtom  
Stridor 
Måttlig till svår postural 
instabilitet inom 3  år efter 
motorisk debut 
Suckandning 
Kraniocervikal dystoni 
inducerad eller förvärrad av 
Kalla missfärgade händer och 


L-dopa i frånvaro av 
extremitetsdyskinesi 
fötter 
Allvarlig talstörning inom 3  
år efter motorisk debut 
Erektil dysfunktion (under 
60 årsåldern för kliniskt trolig 
MSA) 
Svår dysfagi inom 3 år efter 
motorisk debut 
Patologiskt skratt eller gråt 
Oförklarligt Babinski tecken 
Myoklonisk postural eller 
kinetisk tremor 
Posturala deformiteter 
MRI förändringar vid kliniskt etablerad MSA 
Varje påverkad hjärnregion, vilket framgår av antingen atrofi eller ökad diffusivitet, räknas som en 
MRI-markör. 
För MSA-P 
• Atrofi av: 
o Putamen (och signalminskning på järnkänsliga sekvenser) 
o Mellersta lillhjärnepedunkeln  
o pons 
o Cerebellum 
 
• "Hot cross bun sign". 
 
• Ökad diffusivitet av: 
o Putamen 
o Mellersta lillhjärnepedunkeln 
För MSA-C 
• Atrofi av: 
o Putamen (och signalminskning på 
järnkänsliga sekvenser) 
o Infratentoriella strukturer (pons 
och lillhjärnepedunkeln) 
 
• "Hot cross bun sign". 
 
• Ökad diffusivitet av:o Putamen 
Exklusionskriterier 
Betydande och ihållande terapeutiskt svar på dopaminerga mediciner 
Oförklarlig anosmi vid lukttestning 
Fluktuerande kognition med uttalad variation i uppmärksamhet och vakenhet och tidig nedgång i 
visuoperceptuella förmågor 
Återkommande synhallucinationer som inte induceras av läkemedel inom 3 år efter sjukdomsdebut 
Demens enligt DSM-V inom 3 år efter sjukdomsdebut 
Nedåtriktad supranukleär pares eller förlängsamning av vertikala saccader 
MR-fynd som tyder på en alternativ diagnos (t.ex.PSP, multipel skleros, vaskulär parkinsonism, 
symptomatisk cerebellär sjukdom, etc.) 
Dokumentation av ett alternativt tillstånd (MSA-liknande, inklusive genetisk eller symtomatisk ataxi 
och parkinsonism) som är känt för att orsaka autonomt dysunktion, ataxi eller parkinsonism och 
troligtvis kopplat till patientens symtom 
 
 
 


Progressiv Supranukleär Pares (PSP) 
Höglinger GU, Respondek G, Stamelou M et al. Movement Disorder Society-endorsed PSP Study Group. Clinical 
diagnosis of progressive supranuclear palsy: The movement disorder society criteria. Mov Disord. 2017 
Jun;32(6):853-864.  
Grundläggande karakteristika 
Grundläggande egenskaper måste föreligga hos en patient för att en diagnos av PSP skall kunna övervägas, 
oberoende av vilken fenotyp och i vilket stadium patienten uppvisar (tabell 1). Obligatoriska inklusionskriterier 
(tabell 1, B1): förekomst av en sporadisk, i vuxen ålder (> 40 år) debuterande, gradvis progressiv 
neurodegenerativ sjukdom.  
Obligatoriska uteslutningskriterier (tabell 1, B2): dessa utesluter PSP och gäller för alla patienter. 
Kontextberoende uteslutningskriterier (tabell 1, B3): dessa utesluter också PSP, men bör endast tillämpas på 
patienter med antydda, ovanliga kliniska egenskaper som motiverar ytterligare utredning. 
Kärnfunktioner 
Fyra centrala funktions domäner med karakteristiska kliniska manifestationer av PSP (okulär motorisk 
dysfunktion [O], postural instabilitet [P], akinesi [A] och kognitiv dysfunktion [C]; Tabell 2). Inom varje domän, 
föreligger ytterligare tre karakteristiska centrala kliniska egenskaper, stratifierade efter nivåer av säkerhet (1 
[hög], 2 [medel] och 3 [låg]) bidrar till diagnosen PSP (tabell 2). 
Stödjande kliniska fynd 
Stödjande kliniska fynd (tabell 3) är prediktiva sjukdomsyttringar, men är otillräckliga för att vara diagnostiska 
kännetecken. De kan ge användbara kompletterande underlag med ökad diagnostisk säkerhet. Dessa klassificeras 
som kliniska fynd (CC1–CC4) och avbildningsfynd (IF1, IF2). 
Operationaliserade definitioner 
De centrala kliniska egenskaperna, stödjande kliniska ledtrådar och stödjande avbildningsfynd 
operationaliserades i ett försök att standardisera tillämpningen av MDS-PSP-kriterierna (tabell 4). 
Grad av diagnostisk säkerhet 
Fyra nivåer av diagnostisk säkerhet:  
Definitiv PSP utgörs av neuropatologiska sjukdomsentitet, oavsett dess kliniska presentation.  
Sannolik (trolig) PSP diagnostiseras i närvaro av en kombination av kliniska egenskaper med hög specificitet.  
Möjlig PSP diagnostiseras i närvaro av kliniska egenskaper som anses avsevärt öka känsligheten för PSP.  
Misstänkt PSP, utgörs av kliniska syndrom som tyder på PSP, och som uppvisar fynd som ensamma eller i 
kombination kan utgöra tidiga, subtila bevis för PSP men med litet, men likväl positivt prediktivt värde för 
diagnosisstanke.  
Förekommer ytterligare av avbildningsfynd (IF1 eller IF2) förenligt med PSP medför detta ett tillägg av ”diagnos 
misstanke med avbildnings stöd”. 
Kliniska typer 
Kliniska dominanstyper bestäms baserat på kombinationen av kliniska egenskaper (tabell 5): 
PSP-RS (Richardson Syndrom),  
PSP-OM (oculomotor),  
PSP-PI (posturla instbilitet),  
PSP-P (Parkinonism),  
PSP-F (frontallobssymtom),  
PSP-PGF (progressiv freezing of gait),  
PSP-CBS (corticobasal syndrom) och  
PSP-SL (tal och språk). 
Patienter med möjlig PSP SL eller PSP-CBS kvalificerar också för diagnosen ”trolig 4R-tauopati”. 


Demens med Lewy-inklusionskroppar (DLB) 
McKeith IG, Boeve BF, Dickson DW et al. Diagnosis and management of dementia with Lewy bodies: Fourth 
consensus report of the DLB Consortium. Neurology. 2017 Jul 4;89(1):88-100.  
Reviderade kriterier för den kliniska diagnosen sannolik och möjlig demens med Lewy kroppar (DLB) 
En diagnos av DLB karkateriseras av demens, definierad som en progressiv kognitiv försämring av tillräckligt 
omfattning för att störa normala sociala eller yrkesmässiga funktioner, eller vanliga dagliga aktiviteter.Melior 
Blanketter funktioner).  
Framträdande eller ihållande minnesstörning behöver inte föreligga i tidiga faser, men blir vanligtvis uppenbara 
med progression.  
Nedsatt uppmärksamhet, nedsatta exekutiv funktion, och nedsatt visuoperceptuell förmåga kan vara särskilt 
framträdande och uppträda tidigt. 
Centrala kliniska egenskaper: 
(De första 3 inträffar vanligtvis tidigt och kan kvarstå under hela sjukdomsfasen) 
Fluktuerande kognition med uttalade variationer i uppmärksamhet och vakenhet. 
Återkommande visuella hallucinationer som vanligtvis är välformade och detaljerade. 
REM-sömnbeteendestörning, som kan föregå kognitiv försämring. 
Ett eller flera spontana kardinaldrag av parkinsonism:  
bradykinesi (definierad som långsamma rörelser och minskning av amplitud eller hastighet),  
vilotremor 
rigiditet / stelhet. 
Stödjande kliniska egenskaper 
Uttalad känslighet för anti psykotiska medel (som medför allvarlig försämring av rörlighet eller kognition) 
postural instabilitet;  
upprepade fall;  
synkope 
övergående episoder av bristande respons;  
allvarlig autonom dysfunktion, t.ex. förstoppning, ortostatisk hypotoni, urininkontinens; hypersomni; hyposmi;  
hallucinationer utöver visuella, som omfattar andra sensoriska modaliteter;  
systematiserade vanföreställningar;  
apati, ångest och depression. 
Indikativa biomarkörer 
Minskat upptag av dopamintransportörer i basala ganglier demonstreras av SPECT eller PET. 
Onormal (lågt upptag) 123jod-MIBG myokardscintigrafi. 
Polysomnografisk bekräftelse av REM-sömn utan atoni. 
Stödjande biomarkörer 
Relativt bevarande av mediala temporallobsstrukturer på CT/MRI-skanning. 
Generaliserat lågt upptag på SPECT/PET perfusion/metabolism scan med reducerad occipital aktivitet och 
nedsatt aktivitet i insula/ gyrus cingulus på FDG-PET-avbildning. 
Framträdande bakre långsamvågsaktivitet på EEG med periodiska fluktuationer i pre-alfa/ 
theta intervall. 


Trolig DLB kan diagnostiseras om: 
a. Två eller flera centrala kliniska egenskaper hos DLB föreligger, med eller utan närvaro av indikativa 
biomarkörer, eller 
b. Endast en central klinisk egenskap föreligger, men tillsammans med en eller flera indikativa biomarkörer. 
Trolig DLB bör inte diagnostiseras enbart på basis av biomarkörer. 
Möjlig DLB kan diagnostiseras om: 
a. Endast en central klinisk egenskap hos DLB föreligger, utan indikativa biomarkörbevis, eller 
b. En eller flera indikativa biomarkörer föreligger men centrala kliniska egenskaper saknas. 
DLB är mindre sannolikt: 
a. I närvaro av någon annan fysisk sjukdom eller hjärnsjukdom inklusive cerebrovaskulär sjukdom, med en 
omfattning som kan förklara delvis eller delvis den kliniska bilden. 
Även om dessa överiga lesioner inte gör utesluter en DLB-diagnos, kan de indikera bland form eller flera multipla 
patologier som bidrar till den kliniska presentationen, eller 
b. Om parkinsoniska drag är det enda centrala kliniska kännetecknet och uppträder för första gången i ett 
stadium av svår demens. 
DLB ska diagnostiseras när demens inträffar före eller samtidigt med parkinsonism.  
Termen PSs demens (PDD) bör användas för att beskriva demens som uppstår i kontext av väletablerad PS.  
I en klinisk verksamhet är en generisk term ”Lewy Body Disease”, ”Lewy bodysjukdom” tillämpbar, men i en 
forskningssituation där det är av intresse att skilja mellan DLB och PDD gäller fortsatt 1 år regeln mellan 
uppkomst av demens symtom och parkinonism.  
 
 


Kortikobasal degeneration (CBD), kortikobasalt syndrom (CBS) 
Histopatologiskt verifierad kortikobasal degeneration (CBD) uppvisar heterogen klinik och det har varit svårt att 
etablera kliniska diagnostiska kriterier. Det mest uppdaterade systemet (Armstrong et al. 2013)5 är baserat på en 
genomgång av 267 histopatologiskt verifierade fall av CBD och identifierar fem kliniska syndrom vid CBD: (1) 
kortikobasalt syndrom (CBS); (2) spatiellt/frontalt syndrom; (3) agrammatisk variant av primär progressiv afasi; 
(4) progressiv supranukleär pares-syndrom; samt (5) ett Alzheimerlikt demenssyndrom. Risken för 
överdiagnosticering av CBD vid Alzheimerlik demens bedöms dock stor och endast de fyra första syndromen bör 
därför ligga till grund till CBD diagnos. Två uppsättningar diagnostiska kriterier kan användas – den första har 
forskningsinriktning och identifierar CBD med större specificitet men sämre sensitivitet medan den andra 
identifierar kliniskt möjlig CBD, som kan orsakas av CBD men även av andra tauopatier. 
 
Diagnostiska kriterier för kortikobasal degeneration (CBD) enligt 
Armstrong et al. 2013a 
Kliniska forskningskriterier för 
sannolik CBD 
Kliniska kriterier för möjlig 
CBDb 
Förlopp 
Smygande debut och med successiv försämring 
Duration 
Minst ett år 
Debutålder (år) 
≥ 50 
Ingen begränsning 
Hereditet 
(2 
eller 
fler 
släktingar) 
Ej tillåtet 
Tillåtet 
Fenotyper 
1) Troligt CBS eller 2) SFS/APPA plus 
minst ett CBS-symtom (a-f) 
1) Möjligt CBS eller 2) SFS/APPA eller
3)PSP + minst ett CBS-symtom (b-f) 
Tau-mutation 
Ej tillåtet 
Tillåtet 
 
 
5 Armstrong, M.J., et al. Criteria for the diagnosis of corticobasal degeneration. Neurology, 2013. 80(5): p. 496-503 
 
 


Kliniska syndrom som kan förekomma vid CBD-patologi 
Syndrom 
Karaktäristiska symtom 
Troligt 
kortikobasalt 
syndrom (CBS) 
Asymmetrisk debut av två av: a) rigiditet eller akinesi i 
extremitet, b) dystonia i extremitet, c) myoklonus i extremitet; 
samt två av: d) orobuckal apraxi eller apraxi i extremitet, e) 
kortikalt sensoriskt bortfall, f) alien limb fenomen (inte bara 
involuntärt lyft) 
Möjligt kortikobasalt 
syndrom (CBS) 
Asymmetrisk/symmetrisk debut av någon av: a) rigiditet eller 
akinesi i extremitet, b) dystonia i extremitet, c) myoklonus i 
extremitet; samt någon av: d) orobuckal apraxi eller apraxi i 
extremitet, e) kortikalt sensoriskt bortfall, f) alien limb fenomen 
(inte bara involuntärt lyft) 
Spatiellt/Frontalt 
syndrom (SFS) 
Två av: a) exekutiv nedsättning, b) beteende eller 
personlighetsförändring, c) visuospatiell nedsättning 
Agrammatisk 
primär progressiv 
afasi (APPA) 
Mödosamt agrammatiskt tal plus minst en av: a) nedsatt 
förståelse av meningsbyggnad/grammatisk konstruktion med 
relativt bevarad förståelse för enstaka ord, eller b) trevande, 
förvrängt tal (tal-apraxi) 
Progressiv 
supranukleär pares 
(PSP) 
Tre av: a) axial eller symmetrisk rigiditet i arm/ben eller akinesi, 
b) postural instabilitet eller fall, c) inkontinens, d) 
beteendeförändring, 
e) supranukleär vertikal blickpares eller sänkt vertikal 
sackadhastighet 
a) Exklusionskriterier för både trolig CBD (kliniska forskningskriterier) och för möjlig CBD (kliniska 
kriterier): 
Tecken till Lewy-kroppssjukdom: klassisk 4 Hz Parkinsontremor, utmärkt och bestående levodoparespons eller 
hallucinationer 
Tecken till multisystematrofi: dysautonomi eller framträdande cerebellära bortfall. 
Tecken till amyotrofisk lateral skleros: förekomst av symtom på både övre och nedre motorneuronskada. 
Semantisk eller logopen variant av primär progressive afasi. 
Strukturell lesion talande för fokal genes. 
-Granulin-mutation eller låga nivåer av plasma-progranulin (frontotemporal demens); TDP-43 mutationer (ALS); 
FUS- mutationer (ALS). 
Tecken på Alzheimerdemens (exkluderar vissa fall med CBD med samtidig amyloidinlagring): (1) CSF- fynd som 
talar starkt för Alzheimer såsom låg CSF betaamyloid/tau kvot; (2) positiv 11C–Pittsburgh compound B PET; eller 
(3) genetisk mutation talande för AD. 
b) Möjlig CBD innebär ett kliniskt syndrom som är förenligt med CBD men som också kan överlappa 
med andra tau-patier. 
 
Essentiell Tremor (ET) 
För diagnoskriterier se SWEMODIS terapiriktlinjer/praktiska råd för Tremor.`
    },
    {
      rubrik: 'Bilaga II: Praktiska handlingsplaner vid akuta tillstånd',
      text: `Bilaga II: Praktiska handlingsplaner vid akuta 
tillstånd 
Handlingsplan om konfusion vid PS eller andra sjukdomar i basala 
ganglier 
Konfusion (Delirium-Akut konfusion–Akut psykoorganiskt syndrom) F05.9 
Karakteristika/symtom: Störd uppmärksamhet och koncentrationsförmåga. Omtolkning av 
sinnesintryck. Motorisk hypo- eller hyperaktivitet. Nutid och förfluten tid, minnen och framtid blandas 
samman. Patienten kan uppleva sig vara på flera olika platser samtidigt. 
Utredning: Uteslut urinretention. Mycket vanliga utlösande faktorer är farmaka, intoxikation, metabola 
rubbningar (diabetes, elektrolytrubbningar), skalltrauma, infektioner (UVI, ÖLI, pneumoni, sepsis, meningit 
och encefalit), CNS-lesion och störd cirkulation. En ovanlig men mycket allvarlig orsak till konfusion är också 
det maligna syndromet (hyperpyrexi, se nedan). 
Behandling: Kontrollera saturation och cirkulation. Sänk alltid eventuell feber. God omvårdnad i lugn miljö 
och försök undvika ljud i angränsade utrymmen: Ljus i rummet men ej skarpt ljus. Ta bort överflödiga föremål 
eller föremål som kan ge upphov till feltolkningar, lagom mycket stimuli. Lämna inte patienten ensam längre 
perioder. Undvik onödiga förflyttningar. Begränsa antalet personer som har med patienten att göra. Sök 
ögonkontakt vid samtal och presentation vid varje ny kontakt, med information om var patienten befinner sig 
och varför. ”Jag-stödjande” förhållningssätt. Informera i varje steg om vad som skall ske vid eventuella 
ingrepp och förflyttningar. Tala tydligt, konkret och en sak i taget. 
 
Uteslut alla läkemedel som är möjliga att undvara: Nyinsatta farmaka som ofta är utlösande är 
antikolinergika, analgetika (särskilt tramadol och opioider), antiparkinsonmedel (särskilt amantadin, 
dopaminagonister, MAOBhämmare), antiepileptika, antihistaminer, benzodiazepiner, betablockerare, 
digitalis, diuretika, kortison, NSAID, neuroleptika, antidepressiva. Nyinsatta Parkinsonläkemedel bör 
sättas ut. Undvik dock snabb och fullständig utsättning av dopaminverkande läkemedel. Levodopa 
tolereras ofta bäst, men kan behöva reduceras (se rekommendation under ”Handlingsplan vid psykos” 
nedan). 
 
Behandla orostillstånd/sömnrubbning/lätt agitation: Bekräfta patienten – ”följ” patienten i förvirringen. 
Argumentera eller diskutera inte. Unvik konfrontation och aggressioner. 
 
Behandla psykotiska symtom: Se nedan. Anhöriga informeras om att tillståndet kan hävas och att 
innehållet i konfusionen är ointressant. 
Uppföljning: Patienterna kan ha fragmentariska minnen av konfusionen vilket är fortsatt förvirrande och 
skrämmande. Patienter kan uppleva oro för vad som hänt med skamkänslor, ofta skuldkänslor, och fortsatt 
rädsla för framtiden. 
Handlingsplan vid psykos 
Organisk hallucinos (F06.0 + Y 46.7 utlöst av antiparkinsonmedel) 
Karakteristika/symtom: Typiskt med förstadier: Livliga drömmar, mardrömmar, illusioner, systematiska 
vanföreställningar och hallucinos. Konfusion kan föregå psykos, ibland ses övergångsfaser. 
Synhallucinoser är vanligen ljudlösa, mycket tydliga och välformade (bilder och filmer som spelas upp). 
Hörselhallucinos är mest typiskt för depression och inte antiparkinson-farmakaframkallat. Underliggande 
riskfaktorer är hos yngre sömnrytmrubbning och parasomnier som REM-sömnsbeteenderubbning (RBD), hög 
antiparkinson-medicinering, depression och polyfarmaci. Hos äldre är det lång sjukdomsduration och 
svårighetsgrad, samt förekomst av kognitiv svikt och demensriskfaktorer. 
 Utredning: Följ samma principer som vid konfusion. Underliggande orsaker eftersöks, identifieras och 
behandlas: Uteslut infektion, elektrolytrubbning, annan somatisk åkomma. Kontrollera saturation och 
cirkulation. Mycket vanliga faktorer är farmaka, intoxikation, metabola rubbningar (diabetes, 


elektrolytrubbningar), skalltrauma, infektioner (UVI, ÖLI, pneumoni, sepsis, meningit, encefalit), CNS- lesion 
och störd cirkulation. 
Behandling: Eliminera förvärrande faktorer och minska antiparkinson-medicinering men avsluta den inte helt 
(se nedan). Sänk alltid eventuell feber. Uteslut urinretention. 
 
God omvårdnad i lugn miljö: Som vid konfusion. 
 
Uteslut alla läkemedel som är möjliga att undvara: Vanliga utlösande farmaka, om nyinsatta, är 
antiparkinsonmedel, analgetika, antikolinergika, antiepileptika, antihistaminer, benzodiazepiner, 
betablockerare, digitalis, diuretika, kortison, NSAID, neuroleptika och tricykliska antidepressiva. 
 
Minska antiparkinsonmedicinering: Minska dosen eller sätt ut i följande ordning (var uppmärksam på 
utveckling av malignt syndrom): 1. antikolinergika, 2. amantadin, 3. MAO-B-hämmare, 4. 
dopaminagonister, 5. COMT-hämmare. Om otillräcklig effekt inom något dygn: 6. halvera 
levodopadosen. 
 
Behandla kvarvarade hallucinos och psykos: Om mycket orolig ge inj. eller T. Stesolid 5 mg. OBS! 
Undvik injicerbara neuroleptika som potentiellt kan ge hyperpyrexisyndrom. 
 
Om svårhanterad hallucinos: Kvetiapin (Seroquel, Quetiapin) 25 mg till natten (1:a hand), T. 
Leponex (klozapin) 25 mg (2:a hand). Injektionsform av Leponex finns som licensmedel. 
Alternativ 1: Kvetiapin 
Börja med 25 mg, vanlig slutdos är 50-150 mg. Sedativ och anti psykotisk effekt. Ibland ses försämring av 
motorisk funktion vid doser >100 mg och hos dementa. Cirka en tredjedel av patienterna har ingen eller 
otillräcklig effekt, då lönar det sig att pröva klozapin. Biverkningar: sedering, hypotension. 
Alternativ 2: Klozapin 
Börja med 6.25-12.5 mg till natten, vanlig slutdos är 25-50 mg. Kan ges i endosförfarande på denna 
indikation (annan dosering än i FASS). Effektivt, förvärrar ej motoriska symtom. Undvik kombination 
med andra potentiellt benmärgstoxiska preparat. Biverkningar: Risk för leukopeni, agranulocytos 0.4-
2 %. Regelbundna blodprovskontroller är nödvändiga – se FASS. I övrigt sedering, hypotension, 
hypersalivation, konfusion och myokardit. Eosinofil myocardit har rapporterats och regelbundna EKG-
undersökningar rekommenderas i FASS. Man bör inleda behandling på sjukhus p.g.a risk för mycket 
uttalad sedering som kan förekomma vid engångsdoser redan på 6.25–12.5 mg. 
Andra farmaka: 
Kolinesterashämmare (Aricept®, Exelon®) kan vara effektiva på hallucinos vid samtidig demens, 
studier pågår. 
OBS: Zyprexa (olanzapin) och Risperdal (risperidon) ger försämrad motorisk funktion och användning 
av dessa vid psykos är ”icke-göra” enligt nationella riktlinjer. 
Uppföljning: Anhöriga informeras om att tillståndet kan hävas och att innehållet i psykosen är irrelevant. 
Patienterna kan ha fragmentariska minnen av psykosen vilket är fortsatt förvirrande och skrämmande. Patienter 
kan uppleva oro för vad som hänt med skamkänslor, ofta skuldkänslor, och fortsatt rädsla för framtiden. 
 
Handlingsplan för hyperpyrexisyndrom vid Parkinsons sjukdom 
Tillståndet är ekvivalent med malignt neuroleptika-syndrom och i det mest uttalade fallen karaktäriseras det 
av hög feber, medvetandepåverkan, stelhet och muskelsönderfall med höga värden av CK, och myoglobulin i 
blod och ev urin. Hos Parkinsonpatienter kan hyperpyrexisyndrom (malignt syndrom) uppkomma också vid 
utsättning av dopaminverkande läkemedel eller t.o.m. avstängning av DBS. Risken för malignt syndrom ökar 
också vid samtidig infektion och vid uttorkning. Om konfusion uppträder hos Parkinsonpatient bör således inte 
all dopaminverkande behandling utsättas.


Typiska symtom (alla behöver inte föreligga) 
 
Feber 
 
Uttalad rigiditet 
 
Mental påverkan - konfusion, medvetandesänkning / agitation 
 
Autonom påverkand (tachykardi, tachypné, salivering, svettning) 
 
Myoklonier (särskilt vid serotonergt syndrom), dystoni 
 
Ataxi, nystagmus, okulogyra reaktioner 
 
Positiv Babinski 
I de mindre uttalade fall kan konfusion, feber, muskelstelhet i exv benen men inte armarna förekomma och man 
ser då lägre värden av CK/myoglobulin i blod och ev urin. 
Laboratiefynd: Förhöjd halt CK, kreatinin, myoglobulin (serum/urin), vita blodkroppar, leverenzymer 
(ASAT/ALAT), urea, proteinuri. Sänkta nivåer av kalcium, magnesium. 
Behandling: Om neuroleptikum givits, skall detta sättas ut. OBS! Det är ofta långa kliniska halveringtider och 
lång biologisk effekt på receptorer trots kortare halveringstid i blod. 
Ett utvecklat syndrom är en medicinsk akut situation och oftast är intensivvård nödvändig. Eventuella 
infektioner behandlas, men feber behandlas med paracetamol, och nedkylning, samt elektrolytrubbningar med 
adekvat vätskeersättning IV. 
Muskelrelaxation kan uppnås med med bensodiazepiner po eller IV, alternativt med det perifert verkande 
medlet dantrolen 10 mg/kg IV x 2 – 3 (som vid malign hypertermi). 
Bäst dokumentation föreligger för dopaminersättning med bromokriptin - som ges i doserna 2.5 - 5 mg x 3 till 
dess effekt uppnås (maximalt 60 mg/ dygn). Amantadin kan ges i doser100 mg x 2- 3. 
Vid framgångsrik behandling reverseras feber och uttalad rigiditet inom ca ett dygn. CK bör minska inom ett par 
dygn och autonom påvekan inom några dygn.`
    },
    {
      rubrik: 'Bilaga III: Accelerometri/PKG',
      text: `Bilaga III: Accelerometri/aktigrafi för 
utvärdering av motoriska symtom vid Parkinsons 
sjukdom – Parkinson Kinetigraph, PKG 
Objektiv rörelsemätning med bärbara sensorer (wearables) för utvärdering av rörelsestörningar har möjliggjorts 
genom senare års miniatyrisering av elektronik och förbättrad datahantering och analys. Det finns för 
närvarande fyra system som har regulatoriska godkännanden och som har bedömts av National Institute for 
Health and Care Excellence, NICE, dels Kinesia360 ™ /Kinesia U (Great Lakes NeuroTechnologies, godkänt av 
FDA),dels Parkinson Kinetigraph, PKG (Global Kinetics Corporation), dels PDMonitor (PD Neurotechnology) och 
dels STAT-ON (Sense4care), varav de tre sista också har CE-märkning. I Sverige används främst PKG och STAT-
ON.  
Bakgrund:  
PKG är en handledsburen aktigraf som mäter spontant rörelsemönster under upp till 6 dygn. Mätdata uttolkas 
baserat på tre parkinsonrelaterade rörelsemått, Bradykinesi-index (BK), Dyskinesi-index (DK) och tremor-
episoder. Med hjälp av BK beäknas också inaktivitet och  sömnlik immobilitet som kan ge en uppfattning om 
sömnmönster. Variation i BK och DK sammanfattas i ett motoriskt variabilitetsmått, fluktuationsdyskinesiscore 
(FDS) som samvarierar med graden av motoriska fluktuationer. Det finns referensvärden för BK, DK och FDS 
baserade på en normalpopulation och föreslagna målnivåer för god behandlingskontroll.  
STAT-ON är en dosa som bärs vid midja/höft och som dels ger ett objektivt mått på gångstörning (stride fluidity) 
och dels utifrån patientjusterade algoritmer anger perioder i ON, OFF och förekomst av dyskinesi. STAT-ON 
detekterar också freezing of gait och fall. Utrustningen förutsätter att patienten är gångare eftersom det främst 
är gångrelaterade signaler som analyseras. Med STAT-ON erhålls ingen information om tremor eller sömn. 
Vid genomförande av ambulatorisk rörelsemätning kan åtgärdskod AN100 Långtidsregistrering av 
aktivitet/rörelse användas. 
Indikationer för ambulatorisk rörelsemätning:  
Rörelsemätning med bärbara enheterär ett komplement till sedvanlig anamnes och är av störst värde när 
patientens anamnestiska uppgifter är svåra att tolka, om patienten har svårt återge eller komma ihåg sina 
symtom och/eller när det är svårt att få tillförlitliga uppgifter från anhöriga/omvårdnadspersonal. Indikation kan 
finnas när patient eller läkare misstänker läkemedelsrelaterade symtomfluktuationer. Ett annat tänkbart 
användningsområde är utvärdering inför och efter start av  avancerad behandling  och under  dostitreringar. 
Screening  med PKG för att upptäcka motoriska fluktuationer och annan suboptimal behandlingseffekt har 
diskuterats men evidens för screening saknas ännu. Det finns begränsad evidens för att styrning av 
Parkinsonbehandling mot PKG-mål ger bättre kontroll av rörelsesymtom. Det är dock inte visat i studier att 
användning av PKG leder till förbättrade resultat i form av livskvalitet. Ett rimligt antagande är att denna typ av 
mätningar får störst effekt för patienter vars behandlande läkare träffar relativt få Parkinsonpatienter. 
Mätning och uttolkning:  
PKG-mätningar görs vid de flesta Universitetssjukhus i Sverige och kan oftast genomföras utan att patienten 
kommer till kliniken eftersom apparaturen kan sändas fram och åter med post. Vid mätning bör man notera 
vilken arm som PKG-dosan bärs på. 
Mätningar kan ske med eller utan läkemedelspåminnelser. Patienter med nedsatt kognitiv  förmåga kan bli 
stressade av läkemedelspåminnelser och ha svårt att kvittera dem. 
Mätning med STAT-ON kan också utföras utan besök, men initieras bättre vid ett klinikbesök då utrustningen kan 
startas och programmeras med patientens benlängd och H&Y. Utrustningen används bara dagtid. STAT-ON har 
fördelar framför PKG när patienten främst har gångrelaterade fluktuationer, FOG eller axial dyskinesi, fenomen 
som är svårt eller omöjligt att detektera med PKG. 
Allmänna rekommendationer om uttolkning av rörelsmätningar:  
SWEMODIS rekommenderar att uttolkning sker av person med betydande erfarenhet av att tolka PKG-rapporter. 
Efter mätning bör resultaten diskuteras med patient/anhörig för att undvika att aktivitetsrelaterade artefakter 
tolkas som motoriska fluktuationer. 
Exempelvis kan regelbundna vanor med fysisk aktivitet/träning/promenad annars misstolkas som dyskinesi-
episoder och regelbunden läsning av morgontidning eller regelbunden middagslur kan misstolkas som off-


fluktuation. 
Återkoppling till patienten är också viktig av pedagogiska skäl 
Uttolkning av STAT-ON rapporter är enklare och den utrustningen kan därför vara att föredra om man gör få 
mätningar eller om patientens symtom är övervägande axiala. 
Användning av PKG-mått som målvärden för behandling 
I allmänhet är bradykinesi det viktigaste symtomet som skall behandlas. Följande målnivåer har föreslagits (Odin 
et al. 2018)6, men är ännu inte tillräckligt utvärderade kliniskt: 
 
Bradykinesi 
Optimal kontroll 
Median-BK < 23 
Acceptabel kontroll 
Median-BK ≥ 23 och ≤ 25 
Okontrollerad 
Median-BK > 25 
Dyskinesi 
Optimal kontroll 
Median-DK <7 och FDS <10.8 
Acceptabel kontroll 
Median-DK 7-9 och FDS <13 utan tydliga dosrelaterade 
fluktuationer 
Okontrollerad 
Median-DK >9 
Tremor 
Optimal kontroll 
Ingen påvisbar tremor = <1% av dagen med 
tremorepisoder 
Acceptabel kontroll 
Ej fastställt 
Okontrollerad 
Påvisbar tremor (≥ 1%) som stör patienten 
 
Det är viktigt att framhålla att PKG-mått alltid måste tolkas mot bakgrund av kliniska omständigheter. Exv. kan 
en person som sitter i rullstol inte förväntas nå normala BK-värden oavsett hur välbehandlad hen är. Likaledes 
kan BK vara högt p.g.a suboptimalt levodopa-svar eller på grund av inaktivitet relaterat till depression. Vid 
okontrollerat högt BK kan dosökning förstås också vara kontraindicerad 
p.g.a ortostatism eller hallucinationer och de faktiska behandlingsmålen är som alltid individuella. 
 
 
6 Odin et al., NPJ Parkinsons Dis. 2018; 4: 14., https://dx.doi.org/10.1038%2Fs41531-018-0051-7`
    },
    {
      rubrik: 'Bilaga IV: Klinisk genetisk utredning',
      text: `Bilaga IV: Klinisk genetisk utredning och 
genetisk vägledning 
Allmänna aspekter 
I tidigare språkbruk betecknades en genetisk variant som “mutation” när man höll den ansvarig för en sjukdom 
och som ”polymorfism” när man menade att den inte var kopplad till en sjukdom. Man föredrar numera det 
neutrala uttrycket ”variant” (”genvariant”, ”genetisk variant”) som betonar att det finns ett kontinuerligt 
spektrum av varianter från mycket hög till låg eller ingen effekt på sjukdomsrisken. Genetiska varianter delas 
enligt vedertagna kriterier in i 5 klasser: patogena – sannolikt patogena – av oklar signifikans (Engelska: VUS, 
variant of unknown significance) – sannolikt godartade – godartade. 
Penetrans är kvoten av antalet anlagsbärare med sjukdom delad med antalet av alla anlagsbärare. PS 
manifesteras inte vid födseln utan senare under livet, och penetransen av genetiska varianter för PS är därför 
alltid åldersberoende. Vid flera av de kända monogenetiska Parkinsonformerna är penetransen ofullständig, 
vilket innebär att inte alla anlagsbärare kommer att insjukna, även om de lever länge. Detta är särskilt uttalad 
vid den totalt sett vanligast förekommande monogenetiska Parkinsonformen orsakad av en heterozygot variant 
p.Gly2019Ser i LRRK2 genen, och måste tas i beaktande när information ges till patienten eller anhöriga. 
Beteckningen av genetiska varianter har förändrats genom tiden och äldre och nyare litteratur kan innehålla 
olika beteckningar för samma variant. Idag används som regel följande delar för att på ett entydigt sätt beskriva 
en variant: Genens namn (exv. LRRK2), varianten på nukleotidnivå (c.6055G>A) och på proteinnivå 
(p.(Gly2019Ser) – där parentesen markerar att detta är beräknad och inte observerad i DNA analysen), samt 
minst en av följande: absolut position på kromosomet och vilket referensgenom man refererar till (exv. 
chr12:40340400 (GRCh38.p12) or 12-40734202-G-A (GRCh37) eller entydig beteckning av gentranskript (exv. 
NM_198578.4 eller ENST00000298910.7). Dessa uppgifter bör journalföras – de brukar finnas med på 
originalutlåtandet från genetisk undersökning och behöver kunna återfinnas senare eftersom nomenklaturen 
tyvärr ändras genom åren. 
Patienter med symtomdebut innan 30 – 35 års ålder 
Gentestning avseende recessiv PS anses indicerad för personer med ovanligt tidig symtomdebut, upp till 30-35 
års ålder. Gentest bör omfatta både sekvensanalys av PRKN, PINK1 eller DJ1, och analys avseende 
kopietalsvariationer (deletioner, duplikationer av en eller flera exon) av dessa gener. Detta erbjuds som 
standardtest av de flesta genetiska laboratorierna. Vissa laboratorier genomför testning i en logisk ordning 
eftersom PRKN variationer är vanligast, följt av PINK1 och sedan DJ1. Numera blir det dock allt vanligare med 
nya generationens gensekvensering (NGS) där alla frågeställningar besvaras  med samma analys. Recessiv 
sjukdom uppstår när patogena varianter finns på båda allel (bi-alleliska varianter: homozygota eller sammansatt 
heterozygota). 
Personer med dessa tre recessiva Parkinsonformerna brukar ha ett gott svar på levodopa och långvarigt god 
effekt av DBS operation. De utvecklar sällan autonoma symtom och verkar inte ha en ökad risk för kognitiv 
funktionsnedsättning eller demens. Den patologiska processen förblir - så långt bekant idag - begränsad till övre 
hjärnstammen och verkar inte involvera kortex eller andra CNS områden, inte heller perifera eller autonoma 
nervsystemet. För patienten och familjen kan det vara en lättnad att få veta att sjukdomen inte brukar föras 
vidare till nästa generation (så länge inte partnern råkar bära på en patogen variant i samma gen, vilket kan 
uppträda genom slump men är vanligare vid konsanguinitet!). 
Lik alla andra former av PS med mycket tidig debut uppvisar dessa former en hög förekomst av dystoni och 
dyskinesier. Om den kliniska bilden sedan symtomdebut är den av dystoni-Parkinsonism, så bör även andra 
genetiska former av detta syndrom undersökas, i första hand genom tillägg av genanalys för de dopa-responsiva 
dystonierna. Se även avsnittet om kombinerade syndrom med Parkinsonism nedan. 
Patienter med minst två första- eller andragradssläktingar med PS, med karakteristisk klinisk bild 
eller som härstammar från särskilda populationer 
Flera missensevarianter i LRRK2 och SNCA, genduplikation och -triplikation av SNCA, och en enda 
missensevariant i VPS35 är etablerade orsaker till dominant PS. Varianter i ett flertal övriga gener har de senare 
åren föreslagits som ytterligare orsaker till dominant PS, men de flesta anser att dessa rön behöver replikeras 
innan dessa övriga gener kan användas för gentestning inom sjukvården. För testning avseende dominanta 
Parkinsongener behöver LRRK2, VPS35 och SNCA analyseras avseende missensevarianter, exempelvis genom 
riktad genpanel eller helexomsekvensering. Vid negativa fynd behöver kopietalsanalys för SNCA genomföras, 
eftersom duplikationer i SNCA är näst vanligast förekommande i Sverige med en större regional anhopning från 


minst en stor släkt med rötter i Blekinge där över 40 personer har insjuknat. 
Den vanligast förekommande mutation i LRRK2, p.(Gly2019Ser), uppvisar en mycket hög förekomst i den 
ashkenazi- och serafijudiska befolkningen samt bland nordafrikanska araber. I dessa populationer har upp till 
40% av alla Parkinsonpatienter denna mutation. Den förekommer världen över men är mycket mera sällsynt i de 
flesta befolkningarna. En stor screeningstudie av över 2200 svenska patienter fann denna variant enbart hos 
0.54% av patienterna. Enbart 20-70% av de som bär denna mutation utvecklar PS vid 80 års ålder; detta innebär 
att den biologiska effekten av denna variant är begränsad; trots att denna variant räknas till de ”monogenetiska 
orsakerna” till PS intar den snarast en mellanställning mellan genetisk riskfaktor och monogenetisk ”orsak” till 
sjukdomen. Andra faktorer bidrar till att sjukdomen utvecklas. Detta förklarar varför den kliniska bilden vid 
denna mutation är varierande och snarlik den av vanlig ”idiopatisk” PS. Omhändertagandet av patienter med 
dessa varianter inom sjukvården skiljer sig inte från i PS, men vissa familjer kan få en förklaring till varför flera 
medlemmar har utvecklat sjukdomen. De andra vedertagna patogena varianter i LRRK2 har högre biologisk 
effekt och är förenade med något svårare sjukdom med något tidigare debutålder. Av dessa har särskilt LRRK2 
p.(Asn1437His) har påvisats hos svenska och norska patienter. 
I genen VPS35 är än så länge enbart en enda variant, p.(Asp620Asn), bekräftat som orsak dominant PS; även 
denna variant har identifierats i Sverige. Den kliniska bilden är lik den av idiopatisk PS men med avsevärt 
tidigare debutålder mellan 34 och 68, i medel 51, års ålder. Symtom från autonoma nervsystemet är ofta inte 
framträdande vid denna form. 
De patogena varianterna i SNCA-genen (som koderar för alfa-synukleinproteinet) leder däremot till en relativ 
karakteristisk klinisk bild med en kombination av Parkinsonism, tidig kognitiv funktionsnedsättning, markant 
dysautonomi ofta med ortostatism, och i senare skede myoklonus och demensutveckling hos de svårast 
drabbade. Även här varierar dock den kliniska svårigheten och de flesta men inte alla anlagsbärare utvecklar 
sjukdom. I den kliniska bilden kan kognitiva symtom (främst exekutiva) eller även  psykiatriska symtom ( psykos, 
beteendeförändring) dominera, och patienterna kan uppfylla kriterier för DLB eller även  psykiatrisk sjukdom 
snarare än för PD. Neuropatologiskt ser man en ökad – ibland massiv – inlagring av alfa-synuklein i diffus 
fördelning i centrala samt i perifera, främst autonoma, nervsystemet. Patologin uppvisar även gliala inklusioner 
av alfa-synuklein, liknande (men inte lik) de vid MSA. Dessa patienter uppvisar generellt ett minst måttligt 
levodopasvar men har ökat benägenhet till hallucinationer och försämring av ortostatiska blodtrycksfall under 
dopaminerg stimulering. 
Parkinsonismen är sällan det mest framträdande problemet. Många behöver blodtryckshöjande behandling, och 
stöd i vardagen på grund av nedsatt exekutiv funktion. Läkemedelsbehandling som vid DLB kan provas. 
En specifik variant RAB32 Ser71Arg har beskrivits hos personer med PS med förhållandevis tidig debut, kring 55 
år, inkluderande i flera familjer. Penetransen var även här nedsatt. Kunskapsläget om denna variants effekt är 
än så länge förhållandvis begränsad.  
MSA i familjär anhopning 
MSA anses generellt vara en sporadisk sjukdom och uppträdandet av MSA hos två eller fler släktingar bör 
föranleda omprövning av diagnoserna och testning för SNCA varianter, som beskrivet ovan. Vid misstänkt MSA-C 
med hereditet rekommenderas testning för genetiska ataxisjukdomar. 
PSP i familjär anhopning 
Även detta är mycket ovanligt men flera familjer med Richardsons syndrom (eller snarlik fenotyp) i autosomal 
dominant nedärvning har haft mutationer i MAPT eller GRN (gener för frontotemporal demenssjukdom, FTD). 
Som regel fanns dock även kognitiv påverkan som vid FTD. 
Parkinsonism i kombination med andra neurologiska/neuro psykiatriska symtom 
Ett flertal neurologiska sjukdomar kan leda till Parkinsonism som ett mer eller mindre framstående delsymtom i 
en komplex symtombild. Många olika kombinationer finns men vanligare kombinationer inkluderar ataxi-
parkinsonism syndromet, dystoni-parkinsonism syndromet, Parkinsonism med epilepsi eller utvecklingsstörning, 
eller andra komplexa sjukdomar med Parkinsonism och andra symtom som debuterar i barndom, ungdomsår eller 
tidiga vuxenlivet. Hos sådana svårare syndrom är sannolikheten stor att man med helgenomsekvensering 
identifierar en kausal genetisk variant. En noggrann klinisk kartläggning med sjukdomsanamnes och 
familjehistorik är essentiell för att kunna välja rätt genetisk analys och tolka eventuella positiva eller oklara 
svar (se nedan). Remiss till specialiserad enhet (oftast inom universitetssjukvården) rekommenderas. 
Att tänka på inför gentest 
Genetisk utredning med genpanel-/helexom-/helgenomundersökning kan relativt ofta leda till fynd som inte är 
helt entydiga. Detta kan föranleda ytterligare kliniska eller genetiska utredningar. En noggrann beskrivning av 


den kliniska bilden är en essentiell förutsättning för ett korrekt testresultat. De flesta neurologer är inte 
specialinriktade på genetik och de flesta läkare i klinisk genetik är inte neurologer; direktkontakt och goda 
lokala rutiner för samarbete kan behövas för optimal kommunikation. Genetiska utredningar leder ibland till  
psykologiska reaktioner inom familjen och beredskap för detta bör finnas. Krisreaktioner som uppstår kring 
genetiska frågeställningar hanteras vanligen genom primärvårdens krisbearbetning, med  psykologer och andra 
som har erfarenhet av krishantering, men som saknar kunskap om den enskilda sjukdomen ifråga. Faktakunskap 
vad gäller frågeställning sjukdomen och genfyndet behöver tillhandahållas från den som beställt genanalysen 
och som förmedlar kontakt med krishanteringsenheten. 
När genetiska testresultatet erhållits 
Gentestresultatet måste vägas in i en helhetsbedömning och andra undersökningsfynd. Patienten kan vara 
bärare av en genetisk variant men även ha symtom av annan sjukdom. Gentestning av släktingar med eller utan 
liknande symtom kan öka sannolikheten att en variant är orsaken till patientens sjukdom, men om enbart ett 
fåtal familjemedlemmar kan testas blir beviskraften av sådan ”kosegregation av genotyp och fenotyp” inom ett 
släktträd ofta relativt begränsad. 
Positiva genetiska fynd meddelas som regel genom personligt samtal med läkare vid ett återbesök. Skriftlig 
sammanfattning ska ges till patienten. Originalsvaret från gentestningen bör skannas till patientens journal, och 
exakt genvariant även skrivs in i patientens journal för senare referens. Positiva genetiska fynd avser en genetisk 
variant har påvisats och som bedöms orsaka patientens sjukdom. De flesta genetiska diagnoser är sällsynta 
sjukdomar där aktuellt och detaljerad information finns i databaserna www.omim.org eller 
www.genereviews.org. Översiktlig information om ärftlighetsgången kan ges, men remiss till Klinisk genetik bör 
erbjudas för mer ingående information till patient, släktmedlemmar, anhöriga. Remiss för krishantering kan 
behövas även senare i förloppet. 
Genetisk undersökning även med modern NGS teknologi kan leda till negativt gentestresultat trots att 
sjukdomen är genetiskt orsakat – exempelvis 
 
eftersom bakomliggande gen inte är upptäckt ännu, 
 
eftersom genen inte var med i aktuell genpanel, 
 
eftersom relevant klinisk information inte nått fram till genetiker som valde ut analysmetoden 
 
på grund av tekniska faktorer vid analysen, eller 
 
eftersom man valde att genomföra enbart en undersökning av proteinkoderande genomdelar (exon – 
helexomsekvensering) och inte hela genomet (helgenomsekvensering) och den sjukdomsorsakande 
genvarianten ligger utanför exonerna. 
Negativa genetiska testsvar kan meddelas per brev eller vid nästa personliga kontakt med patienten. Ett 
negativt genetiskt test behöver inte innebära att sjukdomen i fråga inte har någon genetisk orsak eller inte är 
ärftlig. Det är sjukdomsmanifestationen i sig och familjeanamnesen som bestämmer om det finns en klar 
hereditet eller en sjukdomsmanifestation som vid genetisk sjukdom. Det kan fortfarande vara (mycket) 
sannolikt att sjukdomen har en genetisk orsak även om den i nuvarande testning inte kunnat fastställas än. 
Vid hög misstanke på genetisk orsak kan förnyade eller fördjupade genetiska analyser med bla bioinformatisk 
analys genomföras vid Kliniska genetiska kliniker eller inom klinisk forskning. 
Remiss till klinisk genetik 
Vid positiv gentest: patient (proband) och familjemedlemmar bör erbjudas mer ingående information till 
patient, släktmedlemmar, anhöriga och vidare familjeutredning. Om gentestningen har genomförts på externt 
labb så är det viktigt att en kopia av originalutlåtandet skickas med. 
Vid negativ gentest och fortsatt hög misstanke på genetisk orsak kan förnyade eller fördjupade genetiska 
analyser med bla bioinformatisk analys begäras.`
    }
    ]
  },

  {
    id: 'tremor-riktlinjer',
    titel: 'Svenska riktlinjer för utredning och behandling av tremortillstånd (v3, 2026)',
    kategori: 'tremor',
    pdf: 'riktlinjer/Tremor-riktlinjer-SWEMODIS-2026.pdf',
    markdownUrl: 'riktlinjerMarkdown/Tremor-riktlinjer-SWEMODIS-2026.md',
    graphicalAbstract: 'graphical_abstract_tremor.html',
    innehall: [
    {
      rubrik: 'B. Definitioner, klassificering, diagnostik och utredningsgång',
      text: `B. Definitioner, klassificering, diagnostik och utredningsgång vid 
tremor 
Definitioner 
1. Tremor 
Ofrivillig, rytmisk oscillation av en kroppsdel. 
2. Vilotremor 
Tremor som framkommer när en extremitet har stöd och inte motverkar gravitationen. 
Aktivitet minskar tremorn prompt, men kan återkomma (re-emerging tremor;”återkommen 
(vilo-) tremor”) i ett nytt viloläge eller posturalt. 
3. Aktionstremor 
Kinetisk tremor 
Tremor som framkommer i rörelse. 
 
Enkel kinetisk tremor 
Kinetisk tremor som är likartad under hela rörelsen. 
 
Intentionstremor 
Tremor som uppkommer vid inställningen av rörelser mot ett mål, i den sista delen av rörelsen 
när en kinetisk komponent samverkar med en positionell komponent ofta med en större 
amplitud än respektive tremor i tidigare fas av rörelse. 
 
Aktivitetsspecifik tremor 
Tremor som endast uppstår vid en viss och specifik aktivitet. 
 
Postural tremor 
Tremor som framkommer vid en viss hållning av en kroppsdel, med statisk aktivering av 
muskelgrupper 
 
Positionsoberoende tremor  
 
Positionsberoende tremor 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
Tremor som endast uppstår vid en viss och specifik hållning. 
 
Isometrisk tremor 
Tremor vid ökad muskelspänning i muskler exv hållningsmuskler vid ortostatisk tremor och 
fysiologisk sträckreflexmedierad tremor över en flekterad led under spänning. 
Klassifikation 
Den senaste klassificeringen av tremorsyndrom infördes 2018 (Bhatia et al. 2018), uppbyggd 
likt andra sjukdomsklassifikationer som den för dystoni (Albanese et al. 2013). 
Essentiell tremor (ET) delas i två grupper; essentiell tremor och essentiell tremor 
plus, vilket avser ET-patienter som har ytterligare symtom förutom kinetisk eller 
postural tremor. 
För diagnostik av tremor karakteriseras de kliniska egenskaperna, axel 1 (figur 1), kända 
etiologier enligt axel 2 (figur 2) och huvudtypen av tremor enligt figur 3. Därefter kan vanligen 
tremorsyndromet identifieras enligt figur 4. Det poängteras i klassificeringen att det är avsett att 
vara ett dynamiskt instrument och att en patient kan klassificeras olika efter hand som olika 
fenomen uppstår. 
Figur 1. Axel 1 för tremorklassificering. 
 
 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
Figur 2: Översikt av etiologi till tremor, axel 2. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Figur 3: Indelning av tremorformer. 
 
 
 
         
        
         
         
       
     
    
               
          
                 
      
          
      
     
       
        
Axel 2: etiologi 
 
Förvärvad 
 
Genetisk 
Idiopatisk 
Familjär 
Sporadisk 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
Figur 4: Tremorsyndrom och underformer. 
 
Övergripande diagnostisk strategi 
Varje observation av en tremoraktivitet – i väntrum, under samtal eller formell undersökning är 
giltig och tillräcklig för att fastställa förekomst av tremor; det är vanligt att vissa symtom 
medvetet eller omedvetet kan undertryckas under vissa omständigheter varför anamnestiska 
uppgifter kan vara av avgörande betydelse för att bestämma typ av tremor. 
Efterfråga specifika funktioner som att föra mat till munnen, dricka eller bära saker i en hand 
som en kopp, eller två händer som en bricka mm. Andra vanliga situationer som kan ge 
information om påverkad funktion är telefonsamtal, skriva respektive finmotoriska göromål. 
Det är av vikt att fastställa huvudsaklig fenomenologi av tremor – främst förekomst av 
vilo-, postural, och/eller kinetisk tremor. Kartlägg den anatomiska utbredningen och 
eventuella specifika rörelser eller funktioner som påverkar förekomsten av tremor. 
Neurologiskt och somatiskt status ger upplysningar om ev andra sjukdomstillstånd som kan 
komplicera behandlingen, eller ger vägledning om diagnos. 
Fullständig läkemedelshistorik och eventuella effekter på tremor av olika stimulantia, 
som alkohol, koffein och nikotin, är av diagnostiskt intresse. 
För att styra behandlingen är det ofta av intresse att kontrollera blodtryck och EKG, samt 
förekomst av eventuell luftvägsobstruktivitet, eller astmatendens. Allergier påverkar ibland 
möjligheter att ge behandling. 
 
 
     
      
      
              
        
  
      
      
          
      
        
           
       
      
              
          
        
      
      
           
      
         
      
           
      
         
        
      
       
           
      
          
      
        
          
      
      
         
            
      
        
          
        
      
            
          
      
             
    
          
      
          
             
       
            
             
          
             


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
Undersökningsteknik 
 
 
Enkelt standardiserat tremortest: 
1. Vilotremor: Patienten får sitta i stol, och avlastar armarna på karmar eller i knät. Patienten 
skall ha händerna fria, och bör avledas för att lättare framhäva tremor. 
2. Hållning och positionstest: Armarna hålls utsträckta med handflatan mot golvet (pronerad) i 
minst 10 s. Därefter vrids handflatorna från det pronerade läget till att handflatorna är mot 
varandra. 
3. Hållning och positionstest: Armarna hålls flekterade i armbågsleden och handflatorna mot 
varandra med ca 1 – 2 dm mellanrum. 
4. Hållning och positionstest och målinriktat test: Armbågarna lyfts till axelhöjd och händerna 
hålls i höjd med halsen. Efter det kan pekfingrarna hållas mot varandra, med ca 5 cm avstånd. 
5. Rörelsetremor: En stor rörelse med hela armen så att rörelse genereras i axel-, armbågs- och 
handlederna. Om rörelsen sker med öppna ögon och mot ett rörligt mål testar man integrationen 
mellan synfunktionen och de basala ganglierna och detta förstärker ofta tremor. Ett klassiskt 
finger-näs test med slutna ögon testar specifikt cerebellum och är lämpligt för att påvisa ataxi, 
men är mindre lämpligt för specifik tremoranalys. 
Under testet observeras eventuell tremor och effekterna av olika rörelser och hållningar. 
Det kan vara svårt att identifiera vilken som är den dominerande tremorkomponenten. 
Exempelvis kan en tremor som finns när patienten har handen mot armstödet på stolen, och ser 
ut som en sann vilotremor, ändå vara en positionell tremor utlöst av att det finns kvar en 
anspänning i kroppsdelen. Därför är det värdefullt att undersöka vad som händer med tremorn 
vid rörelse från ett viloläge 
 
Följande frågor bör besvaras: 
Föreligger vilotremor – vilken kroppsdel är drabbad? 
Vad händer med tremor vid rörelse från ett viloläge? 
Tilltar tremorn, talar det för en dominerande kinetisk tremorkomponent. 
Minskar tremorn, talar det för dominerande vilotremor, och basala ganglieorsak. 
Föreligger positionell tremor? 
Finns det muskelhypertrofi, smärta, eller avtar tremor i samband med att andra muskler kopplas in vid 
vridning av handled eller motsvarande (s.k. noll-läge)? Talar för dyston tremor. 
Minskar tremorn av ett sensoriskt trick – ”geste antagoniste”? Talar för dyston tremor. 
Finns det tecken till dystoni i annan kroppsdel? 
Föreligger kinetisk tremor (regelbundenhet, rytmiskt)? 
Föreligger ataxi (oregelbundenhet vid rörelse)? 
 
 
 
 
 
 
 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
Rit/skrivtest 
 
 
Testet utförs med instruktionen att patienten skall hålla i pennan, men får inte avlasta armen mot 
underlaget eller på annat sätt låsa armen / handen. Arkimedes spiral ritas vanligen inifrån ut, och för 
de tre linjerna börjar man vanligen med det bredaste mellanrummet. Bägge händerna prövas. Ett 
skrivprov med en fullständig valfri mening kompletterar - detta kan genomföras med stöd mot 
underlaget för att dokumentera eventuella kompensationer mot tremor som patienten har funnit vara 
effektiva. 
Muggtest 
Två muggar/glas (helst hårda) med en del vatten hålls med utsträckta armar och vattnet hälls mellan 
kärlen. Försök till att föra kärlet till munnen som för att dricka. 
Videodokumentation 
Om patient och teknik tillåter är en kort videoinspelning av stort värde. Bedömning av tremor 
för diagnostik och för att följa behandlingseffekt lämpar sig mycket väl för dokumentation med 
video. Ett standardiserat test enligt ovan 1-2 som tar ca 1 – 2 minuter att genomföra ger 
vanligen en mycket god bild som speglar funktionell påverkan och ger hållpunkter för 
tremortyp. 
Diagnoskoder 
När en specifik tremorform kan diagnostiseras används en G-kod; 
G 20.9 Parkinsons sjukdom 
G 21.1 Annan läkemedelsutlöst sekundär parkinsonism 
G 24.8 Andra specificerade dystonier 
G 24.9 Dystoni, ospecificerad 
G 25.0 Essentiell tremor 
G 25.1 Läkemedelsframkallad tremor med tillägg av Y kod och ATC koden för läkemedlet, eller 
G 25.2 Andra specificerade former av tremor 
Symtomdiagnos 
R 25.1 Ospecifik tremor 
Differentialdiagnostik - fenomenologi 
Ataxi 
Tremor kan misstas för ataxi och tvärtom. Definitionsmässigt är ataxi oregelbunden, och inte 
oscillerande. Ataxi förekommer i extremiteter, men också bål. Samtidig förekomst av nystagmus är 
ett observandum och talar för ataxi eller två samtidiga tillstånd. Ataxi kan vara ett delfenomen i 
essentiell tremor plus-tillstånd, och kan utgöra ett svårbehandlat resttillstånd efter framgångsrik 
behandling mot en kinetisk och/eller positionell tremorkomponent exv vid DBS-behandling. 
Dystoni 
En svår differentialdiagnos till essentiell tremor är dyston tremor. Tremor vid samtidig 
förekomst av dystoni, i samma eller annan del av kroppen, är vanligen dyston tremor. 
Isolerad nack-/huvudtremor utan tremor i armar är vanligen dystont orsakad. Essentiell tremor i 
nacke är positionell och avtar i liggande, vilket vanligen inte sker för dyston nacktremor. 
Dyston nacktremor är också förenad andra dystona symtom, som huvudvridning eller -tippning, 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
eller förekomst av ett sensoriskt trick. 
Patofysiologi 
1. Översikt – neurobiologiskt underlag 
De patofysiologiska mekanismerna skiljer sig åt för olika tremorformer. Såväl perifera faktorer 
som faktorer i det centrala nervsystemet medverkar till att tremor uppstår. 
Förenklat kan sägas att tremor som sjukdomsbegrepp uppstår när faktorer samverkar så att 
ett elektrofysiologiskt oscillerande tillstånd uppstår, och att sjukdom uppstår när en normal 
rörelsekontroll och funktion störs. 
Perifera faktorer som bidrar är rent mekaniska trögheter i hud, senapparater och muskler, i 
kroppsdelen fortplantade hjärt- och kärlpulsationer, samt reflexer på muskel- och spinalnivå. 
De sistnämnda är mest involverade i fysiologisk och förstärkt fysiologisk tremor. 
Centrala mekanismer som medverkar är taktgivare eller resonansfenomen i kretslopp mellan 
olika regioner i hjärnan som ger upphov till olika typer av tremor och tremorfrekvenser. Det 
finns flera hypoteser för att förklara parkinsonistisk vilotremor; att den drivs av talamiska 
taktgivare; av pallido-talamisk resonans; av cerebello-talamo-kortikal resonans, eller av 
patologisk synkronisering av neuron i globus pallidus. Gemensamt för dessa modeller är att de 
tänkta resonansfenomenen påverkas direkt eller indirekt av dopaminreceptor-aktivitet. 
Dopaminreceptoraktivitet utgör således ett neurobiologiskt underlag som förklarar 
parkinsonistisk vilotremor och neuroleptikaframkallad tremor. 
Andra neurobiologiska mekanismer bakom de empiriskt kända farmakologiska klasserna av 
läkemedelmedel som kan avhjälpa tremorsymtom är en kolinerg rytmisk mekanism i pons och 
hjärnstam samt i striatum, och en gabaerg/betaadrenerg mekanism i talamus samt i cerebellum. 
Dessa taktgivare ger upphov till rytmicitet som är åldersberoende och frekvensen kan 
moduleras med en rad olika farmaka och olika stimulantia som alkohol, koffein och nikotin. 
Om en patient har en benägenhet, förvärvad eller genetiskt betingad, kan dessa motstridiga 
sensoriska och motoriska impulser leda till ett självsvängande, oscillerande, elektrofysiologiskt 
system i hjärnan med tremor som följd. Behandlingar som bryter dessa fenomen är effektiva 
mot tremor. 
De centrala tremormekanismerna är elektrofysiologiska system där läkemedel kan 
frekvensmodulera taktgivare.  
Översikt – farmakologi 
Anatomiska intracerebrala taktgivare och deras farmakologi: 
 
NEUROTRANSMITTOR FARMAKOLOGISKA GRUPPER 
TREMOR 
Acetylkolin 
Antikolinergika minskar aktivitet i pontin 
taktgivare 
Minskar 
Kolinergika ökar tremor, t.ex. 
kolinesterashämmare 
Ökar 
Dopamin 
Dopaminerga medel ökar impulstrafiken genom 
basala ganglierna, och minskar tremor 
Minskar 
Anti-dopaminerga medel minskar impulstrafiken 
och ökar tremor 
Ökar 
GABA 
Medel som minskar aktivitet i talamiska kärnor ger 
mindre tremor. Alkohol, bensodiazepiner och vissa 
antiepileptika, och övriga sedativa 
Minskar 
Beta-Adrenergika 
Betablockerare minskar frekvens i talamiska 
kärnor och minskar tremor 
Minskar 
Betastimulerande medel ökar frekvens och ökar 
tremor 
Ökar 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
Farmakologiska observationer 
Alkohol i små mänger kan ha en unik effekt på essentiell tremor – som kan minska på 1 – 2 cl 
starksprit. Större mängder alkohol har en allmänt sederande effekt och kan då ha en tremor- 
reducerande effekt t.ex. på Parkinsontremor. Anamnestiskt är det en (mycket) låg dos av 
alkohol med tremorreduktion som är intressant. 
Vid obehandlad Parkinsons sjukdom med hypokinesi och rigiditet är det inte ovanligt att 
tremor framträder efter start av behandling med dopaminersättning. Denna tremor är att 
betrakta som ett avslappningsfenomen från muskelrigiditet/kontraktioner som motverkar 
vilotremor. Patienter bör informeras om att tremor inte speglar Parkinsonsjukdomens 
svårighetsgrad. 
Vid start av behandling med kolinesterashämmare kan tremor uppstå, men avtar vanligen 
efter en tid. Detta kan betraktas som en kompensation av en ”tremorfaktor” som kan motverkas, 
och individen har således en kompensatorisk kapacitet. Om en patient redan har ett 
dopaminersättande läkemedel tex vid Parkinsons sjukdom och behandling med 
kolinesterashämmare inleds, är det ovanligt att tremor påverkas eller utvecklas. 
Behandling med olika betaadrenerga stimulerande medel ökar ofta tremor. 
Funktionsinskränkning på grund av tremor 
Tremor är också ett visuellt symtom, och det är inte ovanligt att patienter är själva omedvetna 
om att de har tremor eller inte uppfattar tremorn som störande, medan anhöriga och andra 
omgivande personer är mer störda. Den reella funktionsinskränkningen, inklusive patientens 
upplevelse av stigma, bör analyseras, och inte eventuell grad av missprydande symtom. Det är 
viktigt att klargöra för vems skull utredning och eventuell behandling görs. 
Icke-farmakologiska behandlingar 
Information 
Information om vad tremor står för och dess orsaker och möjliga behandlingar är 
grundläggande för att hjälpa patienter med många former av tremor. 
De flesta former av tremor ökar i amplitud och tremorfrekvens av olika former av 
stimulantia som koffein och nikotin. Om detta är tydligt är en effektiv behandling att eliminera 
så mycket av dessa faktorer som möjligt. 
Läkemedel med potentiell tremorframkallande effekt kan elimineras eller dosreduceras. 
De flesta former av tremor ökar vid muskulär och mental trötthet. Faktorer som minskar 
detta i form av bättre ergonomi, anpassade arbetsuppgifter, eller sömnförbättrande åtgärder kan 
ha effekt. 
Stressreduktion 
Många tremorformer ökar vid vissa situationer och patienter kan vittna om att försök till att 
aktivt undertrycka tremor motverkar sitt syfte; tremorn ökar ofta istället. 
Det finns dock metoder att hantera stressituationer som kan undertrycka tremor effektivt. 
Mental och fysisk träning inför situationer när normal anspänning förekommer, kan minimera 
tremor och åtgärder mot tremorförstärkande faktorer kan initieras när de identifieras. 
Patienter med kinetisk eller positionell tremor kan i görligaste mån minska de mest 
påverkande situationerna; tex att hålla rörelserna närmare kroppen istället för med 
utsträckta armar; att använda tyngre föremål som inte påverkas lika mycket av tremor som 
lätta. 
Hjälpmedel 
En arbetsterapeut kan bedöma om hjälpmedel kan avhjälpa svårigheter pga tremor, med 
anpassning av arbetsställningar. Vissa hjälpmedel, som tyngre bestick kan vara effektiva. Det 
finns också högteknologiska hjälpmedel som skedar och pennor med inbyggda mekaniska eller 
elektroniska tremordämpningsystem som kan reducera tremoreffekter 
 
 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
Referenser 
Albanese, A et al. Phenomenology and Classification of Dystonia: A Consensus Update. Movement 
Disorders, 2013; 28: 7, 863-873.Bhatia, KP, et al for the Tremor Task Force of the International Parkinson 
and Movement Disorder Society. Consensus statement on the classification of tremors. Movement 
Disorders, 2018; 33: 1, 75-87. 
Hallett M. Tremor: Pathophysiology. Parkinsonism Related Disord, 2014; 20: S118-S122. 
Louis, ED. Essential tremor: a nuanced approach to the clinical features. Pract Neurol 2019;19:389–398.`
    },
    {
      rubrik: 'C. Fysiologisk tremor (förstärkt)',
      text: `C. Tremortillstånd 
Förstärkt fysiologisk tremor 
Förekomst 
Tillståndet är vanligt och delvis åldersberoende. Prevalensen uppskattas till 10% av personer 
över 50 års ålder. 
Etiologi 
Alla friska individer har en knappt synlig fysiologisk tremor och det är ett normaltillstånd. 
Fysiologisk tremor kan påvisas över alla leder, och är en del av den normala kontrollen av 
rörelser och hållning. En normal biologisk fördelningsdistribution för synlig tremor föreligger, 
och är vanligen tydligast i mindre leder, med högfrekvent, lågamplitudig tremor. Större leder 
har lägre frekvens. 
Förstärkning av den fysiologiska tremorn kan ske genom förstärkta perifert verkande 
reflexer, eller en påverkan av de centrala oscillatorerna (taktgivare). 
Primär form 
Utan identifierbar (icke-fysiologisk) faktor: 
Kyla 
Muskulär uttröttning 
Anspänning 
Stress 
Oro 
 
Sekundär form 
Med identifierbar (yttre eller endogen) faktor: 
Enkla stimulantia 
Koffein/teofyllin 
Nikotin 
 
Annan sjukdom eller annat tillstånd 
Hypoglykemi 
Hypertyreos 
Hypokalcemi 
Vitamin B12 brist  
Njurinsufficiens  
Alkoholabstinens 
 
Övriga stimulantia 
Amfetamin 
 
 
Läkemedelsutlöst se även separat avsnitt 
Betaadrenerga medel Adrenalin 
Symtom 
Bilateral extremitetstremor med relativt hög frekvens, finvågig men kan ha hög amplitud. 
Övergående. Kan finnas i ansikte och stämband. Vanligen intermittent och utlöst av entydiga 
situationer (köld, muskeluttröttning, tillfällig anspänning - rampfeber, tillfällig stress - rädsla, 
skräck): 
Vid mer frekventa, men situationsbetingade och konstanta symtom bör utredning ske med 
avseende på sekundära former, främst läkemedelsutlöst eller betingad av endokrina faktorer. 
Vid unilateral tremor, vid entydiga upprepade situationer, bör en patofysiologisk mekanism 
eftersökas, som en mindre lesion/skada som antingen bidrar till tremor på ena sidan, eller slår 
ut tremor på andra sidan. Lesionen kan vara central eller perifer. 
 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
Differentialdiagnostik 
Utredning av sekundära former bör ske, då kausal behandling kan finnas. 
Diagnostik 
Anamnes 
Neurologiskt status 
Allmänt somatiskt status 
Provtagning efter riktad anamnes 
Individuellt inriktad utredning med undersökningar och provtagning baserat på anamnes och 
symtom. 
Provtagning som kan övervägas 
Hypertyreos 
T4/TSH eller annan rekommenderad lokal utredningstradition 
Hypoglykemi 
Glukos, HbA1c 
Hypokalcemi 
Ca, albumin 
Njurinsufficiens 
eGFR, kreatinin 
B12 brist 
homocystein, kobalamin samt folsyra 
Alkohol 
PEth, CDT 
Behandling 
Kausal behandling är indicerad för de sekundära formerna. 
Ospecifik symtomlindrande behandling (t.ex. betablockad, intermittent om möjligt) fram 
till kausal behandling är genomförd. Om man inte får tillräcklig effekt av behandlingen av 
grundorsaken kan kompletterande icke-farmakologisk och farmakologisk tilläggsbehandling 
minska symtom. 
Icke-farmakologisk 
Tydlig information om tillståndet är viktig för att skapa förståelse för tillståndet. Analys av 
situationer, funktionsinskränkningar av reell tremor bör tas upp till diskussion. 
För stressutlösta symtom kan stresshantering, ev situationsbetingad, och annan målinriktad 
behandling vara effektiv. 
Farmakologisk 
Är sällan indicerad, men om inga kontraindikationer föreligger för betablockad är vanligen 
propranolol effektivt (doser mellan 10-320 mg) intermittent eller kontinuerligt. 
Om mer selektiv betablockad har bättre tolerabilitet kan atenolol också ha effekt. 
Det är värt att notera att metoprolol enligt kontrollerade studier inte har tillräcklig effekt. 
Om kontraindikation till betablockad föreligger kan gabapentin, intermittent eller 
kontinuerligt ha effekt. 
Kirurgisk 
Kirurgisk behandling är aldrig aktuell mot förstärkt fysiologisk tremor. Ifrågasätt diagnos om 
tremorn är så uttalad att kirurgi övervägs.`
    },
    {
      rubrik: 'C. Läkemedelsframkallad tremor',
      text: `Läkemedelsframkallad tremor 
Epidemiologi 
Tremor är en vanlig läkemedelsbiverkan. 
Generella riskfaktorer för läkemedelsframkallad tremor är: 
ålder 
nedsatt njurfunktion, med nedsatt läkemedelsclearance 
leversjukdom med nedsatt läkemedelsclearance 
förekomst av hjärnlesioner 
polyfarmaci med interaktioner 
 
Tremorkarakteristik 
Alla typer av tremor kan förekomma; vilotremor, positionell och kinetisk tremor, ofta med 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
blandformer. Vanligen symmetrisk. 
Diagnostik 
Läkemedelsanamnesen är viktig för att kartlägga samband mellan tremorförekomst och ändrad 
läkemedelsbehandling. 
Utsättningsförsök ger ofta ledtrådar. 
Glöm inte att i diagnossättande ange Y-kod. 
Vanliga läkemedelsgrupper som kan ge upphov till tremor 
Anti-astmatiska / beta-adrenerga medel 
Neuroleptika / antidopaminerga medel  
Levotyroxin  
Glykosider 
Litium 
Antidepressiva: SSRI, SNRI 
Antiepileptika: valproat, karbamazepin, fenytoin, lamotrigin. 
Kolinesterashämmare 
Immunofiliner, cyklosporin, tacrolimus, sirolimus 
Cytostatika t ex vinkristin, onkovin mfl 
Diagnoskoder 
G25.1 Läkemedelsutlöst tremor 
G25.2 Andra specificerade former av 
tremor R 25.1 Ospecifik tremor 
Y40-Y59 Ogynnsam effekt av droger, läkemedel och biologiska substanser i terapeutiskt bruk`
    },
    {
      rubrik: 'C. Essentiell tremor och essentiell tremor plus',
      text: `Essentiell tremor och essentiell tremor plus 
Definition 
Essentiell tremor (ET), är i regel ett godartat och oftast mycket långsamt progressivt 
neurologiskt tillstånd som främst uttrycks som bilateral aktionstremor i övre extremiteter, 
och mer sällan uttrycks i andra kroppsdelar som huvud, ben, bål, eller i rösten/stämbanden.  
I stillasittande eller stående är skakningarna ofta inte synliga men de ökar vid aktivering av 
de påverkade muskelgrupperna. 
I den senaste MDS-klassifikationen är ET definierad utifrån det kliniska syndromet i axel 1. 
Axel 1 definitionen är 
1) Isolerad bilateral aktionstremor i övre extremiteter med 
2) minst 3 års varaktighet och 
3) med eller utan tremor i andra delar av kroppen (huvud, röst, nedre extremiteter) samt 
4) avsaknad av andra neurologiska fynd som dystoni, ataxi, parkinsonism. 
Om det utöver ET-syndromet finns smärre neurologiska fynd som inte i sig är tillräckliga för 
att ställa en annan diagnos så betecknas tillståndet ET-plus. Detta begrepp infördes i MDS- 
klassifikationen 2018 och har varit föremål för en del diskussion, men kan betraktas ur 
perspektivet att ET är ett heterogent tillstånd med viss dynamik i symtomatologin. Till exempel 
utvecklar många patienter inslag av lindrig ataxi med tiden. I vissa material är ET-plus 
betydligt vanligare än ren ET och ET-plus kan också vara en övergång mellan ET och någon 
annan tremordiagnos. 
Exklusionkriterier för både ET och ET-plus är isolerad huvud- eller rösttremor, ortostatisk 
tremor (>12Hz), positions- och aktivitetsspecifik tremor samt plötslig debut, eller stegvis 
insjuknande. Om durationen är mindre än 3 år klassificeras ET-lik tremor som odefinierbar 
tremor tills denna tid förlöpt. I nuläget finns ingen känd etiologi till ET och ET-plus och Axel 2 
klassifikation saknas därför. Även om etiologin är okänd är familjära former vanliga och 
hereditet skall därför efterfrågas. 
Vid ET söker patienten ofta inte förrän sent i förloppet när skakningarna börjat bli ett 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
påtagligt handikapp i vardagen. En vanlig oro hos patienter och anhöriga är att det är 
Parkinsons sjukdom och osäkerhet i diagnostiken kan motivera bedömning av neurolog, även 
om ET i sina mildare former ofta kan handläggas inom primärvård. 
Epidemiologi 
ET och ET-plus förekommer i alla folkslag och drabbar bägge könen i ungefär samma 
utsträckning. Förekomsten är uppskattad till 0,4% av populationen. Förekomsten av ET och 
ET-plus ökar successivt med åldern och hos personer över 65 års ålder har man funnit en 
prevalens på 4.6%. De familjära formerna debuterar före 40 års ålder och ET som debuterar 
efter 60-65 års ålder kan misstänkas ha annan genes och vara associerad med sämre prognos. 
Diagnos 
Diagnosen ställs baserat på anamnes och neurologisk kroppsundersökning. Vid ET skall 
neurologisk undersökning vara normal frånsett tremor i händerna. Tremor uppstår/ökar när 
armarna sträcks fram eller belastas, samt under målriktade rörelser som när patienten uppmanas 
placera fingertoppen på nästippen (kinetisk tremor). ET är oftast bilateral inom en relativt kort 
tid efter debut, men kan vara unilateral under den första tiden. Förekomst av lindriga andra 
neurologiska statusfynd av oklar signifikans, som t.ex. nedsatt tandemgång (balans), svag 
misstanke om dyston felställning eller lindrig kognitiv påverkan är förenligt med ET plus. När 
tremor är svårbedömd och det är svårt att utesluta parkinsonism kan undersökning med 
isotopavbildning av DAT ofta särskilja ET från Parkinsons sjukdom eftersom personer med ET 
har normal undersökning. Diagnoskriterier i bilaga H. 
Patofysiologi 
Den patofysiologiska mekanismen bakom skakningarna vid ET är okänd. Många 
experimentella fynd talar för en abnormt ökad aktivitet i nervbanor mellan talamus, 
hjärnstammen och lillhjärnan. Studier med positronemissionstomografi talar för en sänkt 
aktivitet i hämmande GABA-transmission i dessa bansystem. Små lesioner i talamus ventro-
intermedius-kärna, liksom elektrostimulering där (DBS), kan kraftigt reducera amplituden på 
skakningarna. Det är också känt att alkohol redan i små mängder kan ha en dämpande 
inflytande på skakningarna. 
Etiologi 
ET är en dominant ärftlig sjukdom i ca 60% av fallen vilket medför att risken för patientens 
barn att få sjukdomen är 50%. Man har dock ej funnit enskilda gener som förklarar familjär 
ET. I en mycket omfattande studie fann man association till vissa polymorfismer, men de 
genetiska orsakerna till ET är fortfarande oklara.  
Behandling 
När skakningarna ger upphov till funktionsinskränkning (motoriskt och/eller socialt) kan 
behandling övervägas. Bäst evidens finns för propranolol i doser upp till 240-360 mg/d som 
leder till klar förbättring hos ca 50-70% av personer med ET. Även andra oselektiva 
betablockerare kan ha tremordämpande effekt vid ET men har sämre evidens. Primidon är en 
barbiturat-prodrug som kan förskrivas med licens i dosen 50 eller 250 mg, eller extempore i 
dosen 25 mg. 
Det finns god evidens för att primidon har effekt på ET i doser mellan 150-750 mg/d och 
troligen med något bättre effekt än propranolol även om biverkningsbilden är mindre 
fördelaktig. Sedation och yrsel är vanligt men kan reduceras genom långsam upptrappning från 
låg dos, t.ex. 25-50 mg x 1. Psykiatriska och kognitiva biverkningar bör beaktas. 
Både propanolol och primidon kan påverka hjärtöverledning och det är motiverat att 
kontrollera EKG både före och efter insättning.  
Andra antiepileptiska läkemedel som kan ha tremordämpande effekter är topiramat och 
gabapentin. Läkemedel leder dock sällan till mer än 50% reduktion av tremor, vilket är bra att 
informera patienten om för att sätta rimliga förväntningar. 
Mycket effektiv symtomlindrande behandling är DBS eller lesionell behandling såsom 
MRgFUS i talamus. 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
En patientorganisation (Riksföreningen för Essentiell Tremor; https://essentielltremor.se/ ) 
kan erbjuda information och stöd. 
Referenser 
Louis ED and Ferreira JJ. How common is the most common adult movement disorder? Update on the worldwide 
prevalence of essential tremor. Mov. Disord. 2010; 25: 534–541 
Bain PG et al. A study of hereditary essential tremor. Brain 1994; 117 (Pt 4): 805–824. 
Larsson T, Sjögren T. Essential tremor: a clinical and genetic population study. Acta Psychiatr. Scand. 1960; 
Suppl. 36: 1–176. 
Deuschl, G, Petersen I, Lorenz D, Christensen K. Tremor in the elderly: Essential and aging-related tremor. 
Mov. Disord. 2015; 30: 1327–1334. 
Ferreira JJ. et al. MDS evidence-based review of treatments for essential tremor. Mov. Disord. 2019; 34: 950–958 
Deuschl G, Raethjen J, Hellriegel H, Elble, R. Treatment of patients with essential tremor. Lancet Neurol. 2011; 
10: 148–161. 
Louis ED. Tremor. Continuum 2019; 25 (4, Movement Disorders): 959-975. 
Louis ED. Diagnosis and management of tremor. Continuum 2016; 22 (4, Movement Disorders): 1143-1158. 
Skuladottir et al GWAS meta-analysis reveals key risk loci in essential tremor pathogenesis. Commun Biol. 
2024;7(1):504.`
    },
    {
      rubrik: 'C. Cerebellär tremor',
      text: `Cerebellär tremor 
Denna tremor är oftast oregelbunden, har hög amplitud och ses inte i vila men både posturalt 
och under rörelse, särskilt som intentionstremor med frekvens på 3-5 Hz. Huvud, bål och 
händer påverkas oftast. De vanligaste orsakerna är stroke i bakre cirkulationen och 
degenerativa sjukdomar. Man bör i första hand behandla bakomliggande sjukdom men 
propranolol, klonazepam, karbamazepin och topiramat har visats ha effekt. 
Referens 
Lenka A, Louis ED. Revisiting the Clinical Phenomenology of "Cerebellar Tremor": Beyond the Intention 
Tremor. Cerebellum. 2019;18(3):565-574.`
    },
    {
      rubrik: 'C. Ortostatisk tremor',
      text: `Ortostatisk tremor 
Fenomenologi 
Ortostatisk tremor (OT) är en ofta förbisedd diagnos som yttrar sig som en högfrekvent (13-18 
Hz) tremor i stående position vilket ger en känsla av ostadighet som kan vara mer påtaglig än 
känslan av skakning. Tremorn drabbar framför allt benen och bålen men även armar och 
ansiktsmuskulatur kan involveras. Tremorn är alltid bilateral och uppkommer efter några 
sekunder till minuter i stående. Om patienten lutar sig mot något eller sätter sig ner minskar 
tremorn signifikant i amplitud eller upphör helt. Så länge patienten är i rörelse kan tremorn ofta 
avvärjas. Patienterna besväras påtagligt av en ostadighetskänsla och beskriver rädsla för att 
ramla. Fallincidensen ökar dock inte i proportion med obehaget, även om det finns en ökad 
fallrisk och en försämrad balansförmåga 
Man skiljer mellan primär OT (13-18 Hz och avsaknad av andra neurologiska symtom), 
långsam OT (under 10 Hz) och OT plus. Vid OT plus kan bland annat vaskulär parkinsonism, 
Parkinsons sjukdom eller Willis-Ekboms sjukdom förekomma. 
Utredning 
Tremorn vid OT kan vara svår att se och neurologiskt status kan vara invändningsfritt vilket 
gör att diagnosen ofta fördröjs. Även om tremorn kan registreras visuellt, palperas och 
auskulteras med stetoskop (”helicopter sign”), bör EMG i stående göras för att säkert kunna 
diagnosticera OT. Det typiska EMG-fyndet är en tremorös aktivitet med en frekvens runt 16 
Hz. OT kan ofta påvisas på balansplatta. 
Etiologi 
Då tremorn är synkroniserad och alltid uppkommer bilateralt är den sannolikt utlöst på central 
nivå. Patofysiologin är oklar. Det diskuteras om det finns ett centrum som fungerar som en 
central oscillator på hjärnstams- eller spinal nivå, eller om tremor orsakas av en störning i det 
cerebello-thalamo-kortikala nätverk som justerar rörelser för att bibehålla balans. 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
Behandling 
OT har visat sig vara svår att behandla med läkemedel. En del patienter svarar dock på 
klonazepam eller bensodiazepiner. Även gabapentin har visats ge symtomlindring i två små 
placebokontrollerade studier. Alkohol kan ha en lindrande effekt. Enstaka patienter har 
svarat på propranolol, antikolinergika, baklofen, primidon, perampanel, zonisamid, 
levodopa och dopaminagonister, eller kombinationer av ovanstående preparat.  
 
Kirurgisk behandling som ryggmärgsstimulering och DBS har visat sig ha positiv effekt 
hos vissa med OT. Bilateral DBS i VIM talamuskärnan har visats förbättra tremorn hos 
patienter med behandlingsrefraktär OT, vilket stärker tesen att det finns en störning i det 
cerebello-talamo-kortikala nätverket. Effekten är dock inte lika stor som vid behandling av ET, 
vilket tyder på att den primära patologin vid OT inte är belägen i VIM. 
Referens 
Rigby HB, Rigby MH, Caviness JN. Orthostatic tremor: a spectrum of fast and slow frequencies or distinct 
entities? Tremor Other Hyperkinet Mov 2015; 5-11. 
Tremor vid idiopatisk Parkinsons sjukdom 
Patofysiologi 
Vilotremor, bradykinesi och rigiditet vid Parkinsons sjukdom orsakas primärt av nigrostriatal 
degeneration. Tremor beror på oscillerande neuronal aktivitet i centrala nervsystemet och anses 
inte vara kopplad till några perifera faktorer. Talamus har en särskild betydelse i kontakten 
mellan basala ganglier och motorcortex och är därför ett lämpligt mål för DBS vid 
tremordominant sjukdom. 
Klinisk bild 
Vid idiopatisk Parkinsons sjukdom är vilotremor typisk, men inte patognomon. Skakningarna 
uppträder i vila – vid debuten oftast i en arm – och kan vara det symtom som för patienten till 
sjukvården. Unilateral symtomdebut är typiskt för idiopatisk Parkinsons sjukdom, men 
förekommer vid andra tillstånd. 
Den karakteristiska vilotremorn talar starkt för idiopatisk Parkinsons sjukdom – diagnosen 
är korrekt i över 90 % av fallen om den baseras just på vilotremor. Frekvensen av skakningen 
är omkring 4-6 Hz och kan se ut som "pillertrillartremor" i fingrarna. Ibland kan frekvensen 
vara högre tidigt i förloppet. Tremorn upphör eller reduceras påtagligt vid rörelse, men vid 
armar-framåt-sträck kan den återkomma kort efter att den nya handpositionen nåtts (re- 
emergent tremor, återkommen tremor). 
Vilotremor är oftast inte fysiskt funktionshindrande men kan upplevas socialt besvärande. 
Vid tremor kan kugghjulsrigiditet noteras vid undersökning. Stress och oro kan framkalla 
tremor, ett faktum som gör att man kan provocera fram tremor om den just vid 
undersökningstillfället saknas. Om man vill undersöka tremorförekomst i övre extremiteterna 
ska patienten sitta med händerna vilande mot knäna och koncentrera sig på t.ex. huvudräkning. 
Gång kan ofta framkalla vilotremor i en hand när den hänger avslappnad under annan aktivitet. 
Vilotremor förekommer oftast i arm/hand/fingrar, men kan också ses i nedre extremiteterna, 
bålen, hakan och läpparna. Käktremor förekommer mest vid öppen mun, medan vid ET 
förekommer tremor i käken främst vid stängd mun. 
Postural tremor och aktionstremor kan förekomma, men tidigt i sjukdomsförloppet är det 
ovanligt. Tremorn kan då störa aktiviteter, men intentionstremor förekommer inte vid 
idiopatisk Parkinsons sjukdom. Vilotremor dominerar. 
Tremor vid Parkinsons sjukdom är vanligen’off’-relaterad, dvs uppträder bara i perioder av 
suboptimal behandlingseffekt. Tremor kan också förekomma i en ”on-liknande” fas. Efter start 
av dopaminersättning kan tremor ibland framträda tydligare som en effekt av att rigiditeten 
minskar. Det är viktigt att skilja tremor från dyskinesier som induceras av dopaminerga 
läkemedel, eftersom de båda tillstånden vanligen behandlas på diametralt motsatta sätt. Typiskt 
är att tremor är mer regelbundna, alternerande rörelser och med lägre amplitud. 
Tremordominant Parkinsons sjukdom är vanligare bland yngre personer, medan äldre oftare 
har en akinetisk-rigid variant. Den tremordominanta varianten anses ha långsammare progress 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
och anses vara mer lättbehandlad men också förenad med mer motoriska fluktuationer. Det är 
något vanligare med tremor bland kvinnor med Parkinsons sjukdom. I sena stadier av 
sjukdomen kan tremor avta och bradykinesi blir dominerande. 
Differentialdiagnostik 
Monosymtomatisk vilotremor; 
Parkinsons sjukdomsdiagnos kan inte ställas förrän bradykinesi och rigiditet tillkommer, vilket 
kan dröja många år. Isotopavbildning kan påvisa dopaminerg denervation hos dessa patienter 
och man kan alltså betrakta det som ett förstadium till Parkinsons sjukdom. 
Essentiell tremor – Essentiell tremor plus. 
Dyston tremor. 
Begreppet SWEDD (scans without evidence of dopamine deficiency) avser patienter med 
unilateral tremor och bl.a. hypokinesi, men med normal dopaminavbildning, orsakas ofta av 
dyston tremor. Upp till 10% av patienter som bedömts ha tidig Parkinsons sjukdom som har 
deltagit i studier med tidigt debuterande sjukdomstillstånd, men dominerande tremor som 
symtom, har efter utredning bedömts vara SWEDD. 
Behandling 
Tremor vid idiopatisk Parkinsons sjukdom behandlas i första hand med dopaminerga läkemedel 
(L-DOPA, dopaminagonister, MAO-B-hämmare). Effekten kan dröja veckor till månader tidigt 
i sjukdomsförloppet men är sedan i regel god, precis som effekten på bradykinesi. 
Om parkinson-läkemedlen har otillräcklig effekt trots dosoptimering kan behandling med 
antikolinergika övervägas, dock med risk för kognitiva biverkningar. 
DBS i talamus VIM-kärna, eller zona incerta är effektiva behandlingar mot parkinsontremor. 
Unilateral talamusstimulering kan ges vid ensidig tremordominant sjukdom, men bilateral 
stimulering kan också användas vid mer omfattande tremor. Talamusstimulering har i princip 
ersatt talamotomi. Bilateral DBS mot subthalamicus-kärnorna (STN) är också effektiv mot 
tremor och används när fler symtom än tremor är besvärande. STN-DBS är därför vanligare än 
VIM-DBS. 
Läkemedel som ges vid essentiell tremor används sällan vid parkinsontremor, såvida inte 
patienten har båda sjukdomarna samtidigt, vilket kan förekomma. Det har också beskrivits att 
propranolol kan lindra parkinsontremor. Klozapin, ett atypiskt neuroleptikum, kan lindra 
parkinsontremor, men kräver monitorering av leukocyter pga risk för agranulocytos. 
Zonisamide i låga doser (≤ 50 mg) kan också lindra parkinsontremor i vissa fall.  
 
Från SWEMODIS Terapiråd vid Parkinsons sjukdom 2025 version 10 
Tremor 
Behandlingen av tremor bör inrikta sig på faktiska funktionshinder för arbete, störningar i 
ADL-funktioner eller sömn. Man bör diskutera med patient och anhöriga vad som utgör 
problemet. Tremor som generande symtom utan funktionshinder, bör man vara försiktig med 
insatser emot, då detta kan leda till överbehandling i förhållande till andra funktioner med risk 
för snabbare utveckling av komplikationer. Tillfälliga belastningar och stressframkallande 
episoder med tremor kan eventuellt behandlas med tillfälliga, icke-dopaminverkande medel. 
 
 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
Intermittent tremor 
Permanent tremor 
men intermittent 
funktionsstörning 
Svår funktionsstörning 
β-blockad 
(propranolol/atenolol - 
metoprolol har ingen 
känd effekt på tremor), 
bensodiazepin. 
dopaminagonist, ev 
intermittent 
apomorfininjektion, 
antikolinergika kan 
övervägas hos patienter 
med intakt kognition. 
Ta ställning till DBS. 
Om intermittent dos apomorfin är 
gynnsammt kan pumpbehandling 
övervägas. Klozapin kan ha god 
effekt. Effekt av Klozapin kommer 
snabbt och man kan därför göra 
”screening-test” med 6,25 – 12,5 – 25 
mg innan man bestämmer sig för 
kontinuerlig behandling. 
Dyston tremor och tremor associerad med dystoni 
Fenomenologi 
Dyston tremor är tremor i en kroppsdel som även uppvisar tecken till dystoni. Om dystoni 
saknas i den tremordrabbade kroppsdelen men förekommer i annan kroppsdel heter tillståndet 
tremor associerad med dystoni. 
Dystoni definieras som upprepade, ihållande samtidiga kontraktioner av motverkande muskler 
kring en led som leder till onormal hållning eller repetitiva rörelser. Ett vanligt exempel är 
dyston huvudtremor hos en patient med cervikal dystoni. 
Dyston tremor kan vara unilateral eller bilateral, vara positionell eller relaterad till 
muskelaktivitet (aktion) men finns sällan i vila. Nacktremor vid ET avtar i liggande, men kan 
bestå vid dyston tremor. 
Dyston tremor kan vara oregelbunden, med plötsliga exacerbationer (”flurries”) och kan 
försvinna i vissa lägen (”null point”) där musklerna slappnar av. 
Dystoni-inslaget kan ibland vara svårt att upptäcka. Det finns flera fenomen associerade med 
dystoni som man kan titta efter: 
geste antagoniste 
mirror dystonia 
overflow dystonia 
aktionsdystoni vid initiering av rörelser 
dystona inslag som bara förekommer i samband med svårare motoriska eller kognitiva uppmaningar 
Isolerad kinetisk och positionstremor, som enbart förekommer vid mycket specifika 
aktiviteter (t ex skrivtremor, rösttremor) är föremål för diskussion, huruvida den är en dyston 
tremor eller en helt unik, isolerad tremor. 
Dyston tremor kan förväxlas med essentiell tremor om det dystona inslaget är diskret och 
kan missas. Den kan ibland även förväxlas med tremor vid Parkinsons sjukdom. 
Etiologiska och utredningsmässiga aspekter 
Liksom dystoni kan dyston tremor vara idiopatisk, sekundär till andra sjukdomar [t.ex. Wilsons 
sjukdom (kontrollera leverstatus, ceruloplasmin, S-koppar, mm)], sporadisk eller ärftlig 
(överväg genetiska tester t ex DYT1). 
Behandling 
Behandlingen är i princip densamma som vid dystoni, där följande alternativ kan övervägas 
utifrån symtombild: 
• levodopa (om levodopa responsiv dystoni, främst hos unga) 100 mg x 3, eller högre doserantikolinergika
 trihexyfenidyl 3-15 mg/dag 
• orfenadrin (100 mg x 2-3, ett antikolinergt och antihistaminergt medel) 
• betablockerare 
propanolol 120-240 mg/dag 
• benzodiazepiner klonazepam 1,5-6 mg/dag 
• gabaerg 
baklofen 15-60 mg/dagl. 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
• VMAT-hämmare tetrabenazine 25-75 mg/dag 
• botulinumtoxin utvalda muskler 
• djup hjärnstimulering (DBS) – i första hand i globus pallidus (GPi). 
Referenser 
Bhatia KP, Bain P, Bajaj N, Elble RJ, Hallett M, Louis ED, Raethjen J, Stamelou M, Testa CM, Deuschl G; 
Tremor Task Force of the International Parkinson and Movement Disorder Society. Consensus Statement on the 
classification of tremors. from the task force on tremor of the International Parkinson and Movement Disorder 
Society. Mov Disord. 2018 Jan;33(1):75-87. 
Louis ED. Tremor. Continuum (Minneap Minn). 2019 Aug;25(4):959-975.`
    },
    {
      rubrik: 'C. Neuropatisk tremor',
      text: `Neuropatisk tremor 
Fenomenologi 
Postural och kinetisk tremor som liknar förstärkt fysiologisk eller essentiell tremor, med en 
frekvens på 6-8 Hz. 
Etiologi 
Kan misstänkas vid gradvis uppkommande tremor hos en patient med säkerställd polyneuropati 
som vid 
IgM-paraproteinemi 
Chronic inflammatory demyelinating polyneuropathy (CIDP) 
Guillain-Barré syndrom 
Multifokal motorisk neuropati (MMN) 
Hereditär polyneuropati 
Checkpointhämmare 
Behandling 
Kausal behandling av den underliggande neurologiska sjukdomen 
Symptomatisk behandling med sedvanliga tremorpreparat (propanolol, primidon, gabapentin) 
Om behandling av smärtsam polyneuropati är indicerat välj preparat som kan ha gynnsam 
effekt på tremorkomponenten och undvik tremorförstärkande preparat 
VIM-DBS har prövats. 
Referens 
Becktepe JS, Goevert F, Deuschl G. Rare tremor syndromes. Nervenarzt 2018; 89(4): 386-393.`
    },
    {
      rubrik: 'C. Palatal tremor',
      text: `Palatal tremor (Tremor i mjuka gommen) 
Fenomenologi 
I. Primär palatal tremor (mjuka gomstremor, gomtremor) – (engelska ”essential palatal 
tremor”) 
Enbart isolerade, 1-3 Hz rytmiska kontraktioner av m. tensor veli palatini, vilket orsakar 
klickljud i örat. Inga övriga neurologiska symptom. 
II. Sekundär (symtomatisk) gomsegeltremor 
1-3 Hz rytmiska kontraktioner av m. levator veli palatini, vilket orsakar ofrivilliga, oftast 
symmetriska rörelser i mjuka gommen och i farynx. Klickljud i örat kan förekomma men är 
mindre vanligt än vid den primära formen. Även andra rörelsefenomen kan uppträda till 
följd av påverkan på hjärnstams- och spinalinnerverade muskler samt på cerebellum: 
(1) rörelser i ansiktet 
(2) rörelser i ögonmusklerna (okulär myoklonus, pendular nystagmus) – 
kombinationen kallas okulopalatal tremor 
(3) tremor i bål- och extremitetsmuskulaturen 
(4) ataxi 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
Etiologi 
Den primära formen är idiopatisk. 
De sekundära formerna kan ha olika etiologi: 
(1) förvärvade skador: lesioner i tractus dentato-rubro-olivarius (Guillain-Mollarets triangel) till följd av stroke 
(oftare hemoragisk än ischemisk), trauma, demyelinisering, tumör 
(2) hereditär och sporadisk neurodegeneration som visar sig som gomsegeltremor, progredierande ataxi, 
nystagmus och andra neurologiska störningar 
Alexanders sjukdom 
Polymeras gamma-mutationer 
Spinocerebellär ataxi 20, neurodegeneration kan vara associerad med cerebellär atrofi 
Utredning 
Viktigt att utreda bakre skallgropen med tanke på möjlig etiologi. 
MR-hjärna; fynd: hypertrofisk degeneration av oliva inferior, dock ej alltid förekommande. 
En viktig differentialdiagnos är funktionell palatal tremor som kännetecknas av fenomenet 
”entrainment”, vilket innebär att tremorfrekvensen antar samma frekvens som annan 
aktivitet, t ex handknytning. 
Behandling 
Bilateral botulinumtoxininjektion i mm. tensor och levator veli palatini. Rapporter finns om 
trihexyfenidyl, gabapentin och memantin (de två sista för nystagmuskomponenten). 
Referenser 
Tilikete C, Desestret V. Hypertrophic Olivary Degeneration and Palatal or Oculopalatal Tremor. Front Neurol. 
2017; 8: 302. 
Khoyratty F, Wilson T. The dentato-rubro-olivary tract: clinical dimension of this anatomical pathway. Case Rep 
Otolaryngol. 2013; 934386.`
    },
    {
      rubrik: 'C. Holmes tremor och talamisk tremor',
      text: `Holmes tremor och talamisk tremor 
Klinisk bild 
Följande kriterier kännetecknar Holmes-tremor: 
Vilo- och intentionstremor. En postural tremor kan förekomma. 
Tremorn är ofta inte lika rytmisk som andra former av skakningar. 
Låg tremorfrekvens, mestadels under 4,5 Hz, och hög amplitud 
Om en hjärnskada kan identifieras (t ex hjärnstamsinfarkt), är det vanligtvis en latens (4 veckor 
till 2 år) mellan lesionen och debut av tremor. 
Talamisk tremor uppträder efter lesioner i dorsolaterala talamus. 
Kliniskt kan man vid båda tillstånden finna en variabel kombination av vilo-, postural, och 
intentions-tremor samt dystoni, och endast radiologiska undersökningar möjliggör 
differentialdiagnos. 
Behandling 
Farmakoterapi är sällan framgångsrik vid dessa former av tremor. 
I enskilda fall fungerar: 
Levodopa (<1200 mg/dag), som vid terapisvar kan kombineras med 
dopaminagonister  
Trihexifenidyl (2-12 mg/dag) 
Klonazepam (0,5-4 mg/dag) 
Klozapin (<75 mg/dag) 
Levetiracetam (upp till 3000 mg/dag) 
Det finns fallrapporter kring framgångsrika stereotaktiska behandlingar (VIM-stimulering eller 
talamotomi). Om läkemedelsbehandling inte lyckas och patienten uppvisar en allvarlig 
funktionsnedsättning kan detta övervägas. 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
Behandling av talamus-tremor med djup hjärnstimulering är särskilt svår, eftersom VIM ligger i 
det skadade området. 
Referens 
Deuschl G, Bain P, Brin M. Consensus statement of the Movement Disorder Society on Tremor. Ad Hoc 
Scientific Committee. Mov Disord. 1998;13 Suppl 3:2-23.`
    },
    {
      rubrik: 'C. Funktionell tremor',
      text: `Funktionell tremor  
 
Att ställa denna diagnos kräver god förtrogenhet med rörelsestörningar. Tremor är ett av de vanligaste 
funktionella motoriska symtomen, men de flesta motorikstörningar har en funktionell motsvarighet. 
Funktionella motoriska symtom är onormala rörelser, eller avsaknad av rörelser, i den viljemässiga 
motoriken, som upplevs som ofrivilliga. De karaktäriseras av extern påverkbarhet - de minskar med 
distraktion och ökar med uppmärksamhet. Symtomen är inkonsistenta och inte kongruenta med andra 
neurologiska orsaker.  
Fenomenologi 
Akut debut är vanligt, ibland vid en speciell händelse såsom panikattack. Funktionell tremor kan 
uppkomma varsomhelst i kroppen, till och med som palatal tremor. Det är vanligast att den sitter i 
övre extremiteter, ofta med stor amplitud, men den brukar inte sitta i fingrar. Diagnosen baseras på en 
sammanvägning av typiska karaktäristika med positiva funktionella statusfynd – det är inte en 
uteslutningsdiagnos. Funktionella motoriska symtom, inklusive tremor, kan förekomma samtidigt 
med annan sjukdom, så kallad ”funktionell pålagring”. Ofta förekommer olika funktionella symtom 
hos samma person, och ibland är de delsymtom i somatiseringssyndrom. Andra funktionella 
neurologiska symtom är sensoriska, kognitiva, och icke-epileptiska anfall. 
Personer med funktionella symtom har ökad förekomst av depression, ångest och stressorer. Dessa 
faktorer behöver inte dock inte finnas för diagnos, och orsakssamband är inte bevisat. Bland annat 
därför är termen funktionell bättre än den äldre termen psykogen. 
I status observeras variabilitet och påverkbarhet vid funktionell tremor (som vid andra funktionella 
motorikstörningar). Variabiliteten ses i tremorns frekvens, riktning, amplitud och vid vilket 
aktiveringsstatus samt var i kroppen den uppkommer. Påverkbarheten ses genom att tremor ökar med 
uppmärksamhet och upphör eller minskar vid en samtidig annan motorisk eller kognitiv uppgift 
(avledbarhet). Den kan också fås att anta samma frekvens som en annan rörelse, som patienten utför i 
takt med undersökaren (entrainment). Andra karaktäristiska fynd är tonisk ko-kontraktion vid 
tremorstart och att när undersökaren fixerar den skakande kroppsdelen, sprider sig tremorn till en 
annan kroppsdel (”whack-a-mole sign”).  
Etiologi / patofysiologi 
Etiologin är ofullständigt kartlagd, men det rör sig om en störning i cerebrala nätverk som inkluderar 
motorisk kontroll, prediktiv kodning, uppmärksamhet, emotionella processer, interoception, och 
påverkad känsla av ”agency”, det vill säga känslan att man själv är upphovet till handlingar (och att 
dessa inte bara händer en). Denna nätverksstörning påverkas av biopsykosociala faktorer: individuell 
sårbarhet, utlösande faktorer, samsjuklighet och vidmakthållande faktorer.  
Exempel på sårbarhetsfaktorer är andra funktionella tillstånd (exempelvis IBS, smärtsyndrom), andra 
neurologiska och medicinska tillstånd, psykologisk påverkan av stressande livshändelser, ångest, 
depression, barndomstrauma, genetiska riskfaktorer. Ibland identifieras ingen sårbarhetsfaktor.  
Exempel på utlösande faktorer är fysisk skada, psykologiskt trauma, läkemedelsbiverkning, 
panikångest, PTSD, dissociation, depression.  
Exempel på samsjuklighet är psykologiska /psykiatriska tillstånd med ångest, depression, PTSD, 
emotionell instabilitet, annan neurologisk eller medicinsk sjukdom andra funktionella syndrom, 
exempelvis IBS, kronisk smärta, eller fatigue.  
Exempel på vidmakthållande faktorer är diagnostisk osäkerhet, feldiagnos som annat tillstånd, 
bristfällig kommunikation, avsaknad av behandling för funktionellt tillstånd, onödiga utredningar, 
behandlingar, eller operationer, sederande läkemedel eller opioider, olika hinder för tillfrisknande, 
undvikandebeteende och låg motivation för tillfrisknande.  
  


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
Epidemiologi 
Funktionella neurologiska tillstånd är vanliga, men det finns betydande osäkerhet i epidemiologiska 
studier, där incidens har beräknats till minst 10-22/100 000, och prevalens minst 80-140/100 000. 
Svenska och skotska studier anger incidens av motoriska funktionella symtom till 4-5 /100.000 och 
funktionell tremor anges till 40 – 50% av dessa.  
Behandling 
Behandlingens första steg är att patienten och närstående ska förstå och lita på diagnosen. Det görs 
genom noggrann undersökning i kombination med att man etablerar en tillitsfull och empatisk 
patient-läkarrelation, som inger trygghet och gör patienten delaktig i behandling och planering. 
Berätta att diagnosen är funktionell tremor och förklara att funktionella neurologiska symtom är 
vanliga. Försäkra att funktionell tremor inte innebär fejkade eller inbillade symtom. Förevisa gärna de 
positiva funktionella undersökningsfynden. Förmedla en individuellt anpassad och begriplig 
förklaring om uppkomst, inkluderande både mekanismer och biopsykosociala aspekter. Föreslå 
behandlingsstrategi. Ibland kommer man långt bara genom att patienten förstår tillståndet, men ofta 
används fysioterapeutiska rörelseövningar inklusive biofeedback, där man utnyttjar tremorns 
avledbarhet och entrainment, i kombination med avslappningsövningar med mera. Behandla och 
beakta eventuell samtidig psykiatrisk / psykologisk samsjuklighet och vidmakthållande faktorer. 
Multidisciplinära team-insatser kan vara värdefulla. 
Differentialdiagnoser 
Alla andra orsaker till tremor. De positiva funktionella statusfynden skiljer tillståndet från dessa.  
 
Simulering (Z76.5, engelskans ”malingering”) är uppvisande av symtom, fysiska eller psykiska, som 
sker i syfte att uppnå fördelar med det simulerade symtomet/sjukdom. Fenomenologiskt kan det på 
individnivå ännu inte skiljas ifrån funktionell tremor.   
 
Fysiologisk faciliterad sträckreflex. Vanligast i knä-/fotleden är inte funktionell tremor, utan ett 
vanligt normalt tillstånd med tremor i benet, som uppstår vid belastning mot underlaget och med 
tonus över lederna. Kan även uppstå i övre extremitet.  
 
 
Diagnos 
ICD-10 kod: F 44.4W Annan specificerad psykogen motorisk störning 
Referenser 
Bartl M, Kewitsch R, Hallett M, Tegenthoff M, Paulus W. Diagnosis and therapy of functional tremor a systematic review 
illustrated by a case report. Neurol Res Pract. 2020;2:35. 
Finkelstein SA, Diamond C, Carson A, Stone J. Incidence and prevalence of functional neurological disorder: a systematic 
review. J Neurol Neurosurg Psychiatry. 2025;96(4):383–95. 
Hallett M, Aybek S, Dworetzky BA, McWhirter L, Staab JP, Stone J. Functional neurological disorder: new subtypes and 
shared mechanisms. Lancet Neurol. 2022;21(6):537–50. 
Perez DL, Nicholson TR, Asadi-Pooya AA, Begue I, Butler M, Carson AJ, et al. Neuroimaging in Functional Neurological 
Disorder: State of the Field and Research Agenda. Neuroimage Clin. 2021;30:102623. 
Schwingenschuh P, Espay AJ. Functional tremor. J Neurol Sci. 2022;435:120208. 
Stamelou M, Saifee TA, Edwards MJ, Bhatia KP. Psychogenic palatal tremor may be underrecognized: reappraisal of a 
large series of cases. Mov Disord. 2012;27(9):1164–8.


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026`
    },
    {
      rubrik: 'D. Neurokirurgisk behandling av tremor (DBS, MRgFUS)',
      text: `D. Neurokirurgisk behandling av tremor 
Metoder, biverkningar 
Neurokirurgisk behandling av rörelserubbningar har lång tradition i Sverige. Stereotaktisk 
lesionell behandling med bl a pallidotomi och talamotomi föregick effektiv farmakologisk 
behandling vid sjukdomar med rörelserubbning. Med hjälp av en i hjärnan införd elektrod  
lesionerades centrala kärnor genom upphettning av elektrodspetsen – ofta dock efter att 
elektrostimulering nyttjats för att hos vaken patient värdera effekten. 
Sedan mitten av 1990-talet har emellertid de tidigare lesionella neurokirurgiska teknikerna 
ersatts av högfrekvent elektrostimulering i hjärnan (Deep Brain Stimulation, DBS, djup 
hjärnstimulering). 
DBS har flera fördelar gentemot lesionella tekniker: orsakar endast obetydlig 
hjärnparenkymskada, genom att vara justerbar i relation till individuell symtomatologi och 
symtomutveckling, samt genom metodens reversibilitet. 
DBS är numera en neurokirurgisk rutinmetod för behandling av tremor och andra 
rörelserubbningar. Lesionella tekniker nyttjas fortfarande. På senare tid har dessutom 
lesionella tekniker tillkommit som inte kräver att skallbenet öppnas. 
DBS – Deep brain stimulation, djup hjärnstimulering 
Operation med DBS görs antingen med patienten vaken eller sövd. Förbättrad pre- och 
intraoperativ radiologisk avbildningsteknik har inneburit att man på senare år på många centra 
kunnat övergå till operation med sövd patient. Vanligen krävs inte helrakning för DBS- 
operation. 
DBS-tekniken innebär att permanenta elektroder, ≈1.3 mm i diameter, implanteras med hög 
precision i basalganglieområdet och ansluts till en impulsgivare (IPG/Implantable Pulse 
Generator). Impulsgivaren är programmerbar för variation av det elektriska fältets 
konfiguration. Elektroderna har multipla elektrodytor/poler som kan kopplas på eller av 
individuellt. 
Elektrostimuleringens styrka, impulsfrekvens och impulsvidd kan varieras efter behov 
genom extern programmerare. Patienter kan också erhålla egna kontrollenheter, som kan 
möjliggöra för användaren att göra modifieringar av inställningar och vid behov koppla på eller 
av stimuleringen. 
Mekanismen för effekten är inte helt klarlagd, men i huvudsak utnyttjas en blockerande 
effekt på sekundär neuronal överaktivitet antingen direkt genom depolarisationsblockad eller 
indirekt genom stimulering av inhibitoriska neuron. På så sätt uppnås liknande effekter som vid 
lesionskirurgi. I likhet med farmakologisk behandling är den neurokirurgiska behandlingen 
symtomatisk och målet är att förbättra patientens funktionstillstånd till en högre grad av 
oberoende. 
Kirurgisk komplikationsrisk vid DBS-kirurgi är låg: symtomgivande blödning <1 %; 
infektion <3 %. Elektroniska fel i utrustningen kan förekomma, men är sällsynta. Behov av 
reoperation, exempelvis till följd av brott på elektrod eller förlängningskabel, kan uppstå. 
Batteriet varar, som regel, i 4–7 år beroende på använda stimulatorinställningar. Externt 
återladdningsbara batterier är nu tillgängliga och har betydligt längre total hållbarhet, uppemot 
10–15 år. Å andra sidan kräver de återladdningsbara enheterna att patienten själv eller med stöd 
av medhjälpare återkommande genomför återladdningsproceduren. 
Biverkningar av DBS är till stora delar beroende på hur patienter selekteras och hur väl 
placerad elektroden är samt optimering av stimuleringsinställningarna. En direkt 
stimuleringsbiverkan karaktäriseras av att den försvinner om DBS stängs av och återkommer 
vid aktivering av DBS. 
Biverkningsprofilen varierar något mellan de olika målen, men är tämligen likartad. Generellt 
är biverkningsrisken störst vid DBS hos äldre patienter och vid bilaterala operationer. Vanliga 
stimuleringsutlösta biverkningar är: 
1. Talrubbning (dysartri); 
2. Cerebellära symtom som ataxi, dysmetri, gång- och balanspåverkan. 
3. Sensoriska fenomen (parestesier). 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
4. Motorisk rubbning med kontralateral fokal dystoni, alternativt muskelsvaghet. 
 
Motorisk påverkan, inklusive dysartri, kan orsakas av spridning av strömmen till capsula interna. 
Motorisk påverkan med dystoni, samt cerebellära symtom, inklusive dysartri uppkommer dock ofta i 
själva målområdet. Det är av vikt att skilja på dessa situationer, då det ofta sker en habituering i det 
senare fallet, något som kan möjliggöra en gradvis ökning av stimuleringen. 
Indikationer – kontraindikationer 
Generellt är neurokirurgisk behandling vid tremor indicerad när läkemedelsbehandling inte ger 
tillfredsställande funktionellt resultat i det individuella fallet, med inskränkningar i patientens 
vardagliga livsföring och livskvalitet som följd. 
Stor vikt bör fästas vid patientens upplevda handikapp. Indikationen för kirurgi varierar 
vidare med tremortyp. Således bör en mer frikostig attityd råda gällande ET, PD och dystona 
tremorformer, där sannolikheten för ett gott postoperativt resultat är hög, medan en mer 
försiktig hållning bör intas gällande övriga tremorformer, där effekten av DBS ofta är 
begränsad. 
Ur operationsteknisk synpunkt kan anatomiska varianter i det intrakraniella rummet 
eventuellt utgöra hinder för okomplicerad kirurgi och förutom neurologisk diagnostisk 
utredning fordras därför preoperativ neuroradiologisk utredning med MRT och DT. För att 
komma ifråga för kirurgisk behandling skall patienten remitteras till de multidisciplinära DBS- 
team, som finns vid universitetssjukhusen. 
Absoluta kontraindikationer för operation är få, men kroniska infektioner som osteit och 
andra infektioner, som kan leda till infektion av elektrod och impulsgivare utgör ett absolut 
hinder, liksom anatomiska anomalier som omöjliggör åtkomlighet till aktuella mål. T. ex. kan 
förekomst av AVM eller annan kärlanomali innebära att målområden är operativt otillgängliga. 
Relativ kontraindikation är pågående behandling med antikoagulantia, något som kan hanteras 
om denna kan pausas i anslutning till ingreppet. Pågående behandling med pacemaker (eller 
annan inopererad elektrisk anordning) kan också vanligtvis hanteras, men kräver noggrann 
genomgång av implantatens kompatibilitet. 
I övrigt utgör kognitiv svikt den vanligaste kontraindikationen. Hög ålder är inte en absolut 
kontraindikation, men med anledning av ökad risk för associerade sjukdomar och kognitiv 
påverkan måste åldern tas i beaktande. 
Vidare måste det beaktas att svårare psykiatriska tillstånd, inklusive beroendesyndrom, kan 
minska möjligheterna till en framgångsrik behandling. Riskerna med att en eventuell 
existerande balans- eller talrubbning kan förvärras måste också vägas mot vinsterna av 
ingreppet. 
Målpunkter för DBS 
För närvarande används främst följande målpunkter vid behandlingen av ET: nucleus 
ventralis intermedius thalami (VIM) och posterior subthalamic area (PSA) som innefattar zona 
incerta (ZI) och radiatio prelemniscalis. Användning av nucleus subthalamicus (STN) som 
målpunkt för tremorbehandling har också studerats. En analys av de olika områdenas relativa 
meriter försvåras av deras närhet till varandra. 
VIM är den etablerade målpunkten vid ET, men ofta har elektroden under operationen förts 
ned i PSA, som ligger direkt under VIM, och ett flertal studier av vad som uppfattats VIM-DBS 
har visat att den bästa effekten vanligen erhållits från djupare belägna kontakter, i PSA. Ett fåtal 
studier har utförts där målpunkten valts direkt i PSA, och resultaten har här varit mycket goda. 
Utifrån det aktuella kunskapsläget förefaller det bästa alternativet vara att identifiera 
målpunkterna i PSA och i VIM, varefter elektrodbanan planeras så att två kontakter placeras 
preliminärt i PSA och två i VIM, varvid det exakta djupet avgörs under den peroperativa 
utvärderingen. STN utgör ffa ett alternativ när VIM /PSA till följd av exempelvis lesioner ej är 
lämpligt. 
Uni- eller bilateral kirurgi 
Bilateral kirurgi ger naturligtvis den största symtomreduktionen hos bilateralt påverkade 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
patienter. Dock medför bilateral kirurgi en större risk för biverkningar, som exempelvis dysartri 
och balanspåverkan. Risken förefaller öka med stigande ålder, varför bilateral kirurgi bör 
utföras allt mer restriktivt med tilltagande ålder. 
DBS-effekter vid olika tremorformer 
Tremor vid Parkinsons sjukdom: DBS vid PS behandlas i ”Svenska riktlinjer för utredning 
och behandling vid Parkinsons sjukdom”. I korthet är resultaten väl dokumenterade och 
mycket goda avseende tremorkomponenten vid såväl STN/GPi DBS som VIM/PSA DBS. 
Essentiell tremor: Effekten är väl dokumenterad och god. VIM/PSA utgör 
förstahandsalternativet, men STN är ett möjligt alternativ. 
Tremor vid dystoni, dyston tremor samt aktivitetsspecifik tremor: Tremor hos patienter där 
det dominerande symtomet är av dyston natur svarar vanligen väl på GPi stimulering. 
Dyston tremor samt aktivitetsspecifik tremor torde i praktiken ofta förväxlas med ET. 
Resultaten av DBS i VIM/PSA är i dessa fall goda. 
Ortostatisk tremor: Enstaka fallbeskrivningar föreligger där bilateral VIM DBS givit en 
värdefull effekt. 
Cerebellär tremor (inklusive MS-tremor): Begränsat material. Den stora svårigheten ligger i att 
urskilja vad som är ataxi och vad som är tremor, då en förbättring endast kan förväntas 
gällande den senare komponenten. Avseende VIM DBS kan en tremor-reduktion om ca 30% 
förväntas. Dock föreligger stora individuella skillnader. Det har föreslagits att effekten är klart 
bättre hos patienter med en tremorfrekvens över 3 Hz.  
Holmes tremor (rubral tremor): Begränsat material, men med resultat som förefaller vara 
jämförbara med cerebellär tremor. 
Neuropatisk tremor: Enstaka fall av sannolik neuropatisk tremor finns beskrivna där 
VIM/PSA DBS gav en måttlig effekt. Sannolikt torde ingen större effekt kunna förväntas 
avseende eventuell associerad ataxi. 
Postoperativ medicinering och elektrostimulering 
För optimalt resultat krävs specialisterfarenhet med samverkan mellan neurokirurg och 
neurolog. Stor förtrogenhet med DBS och symtomanalys behövs, särskilt vid misstanke om 
stimuleringsinducerade biverkningar, och därför ligger ett huvudansvar för 
behandlingskontroller och adekvat uppföljning hos de neurokirurgiska/neurologiska teamen vid 
universitetsklinikerna, som inlett behandlingen. Individuella arrangemang måste därefter 
upprättas med andra kliniker. 
Speciellt handhavande 
Vid EKG-undersökning stängs impulsgivarna av och startas efteråt. 
Kontraindikationer och varningar (DBS) 
Ett DBS-system innehåller elektroniska komponenter, som kan påverkas av och även påverka 
annan elektronik. Alla patienter får information om detta. De tillverkare som levererar 
utrustning för DBS har alla representation i Sverige. Med kännedom om vilken tillverkare som 
levererat utrustning för den enskilda patienten kan kontakt tas med tillverkarens representanter 
för eventuella tekniska frågor. 
1. Hjärtpacemaker utgör en relativ kontraindikation, framför allt förmaksstyrd pacemaker, 
som teoretiskt, genom interferens skulle kunna bli påverkad av DBS-inställd frekvens. 
DBS kan dock programmeras så att detta problem ej uppkommer. 
2. Numera används DBS-system som har villkorad MR-kompatibilitet (MRI Conditional). 
Om patienten har ett sådant system kan magnetkameraundersökningar genomföras säkert 
under beaktande av de villkor som föreligger för det enskilda DBS-systemet. De olika 
tillverkarna tillhandahåller information om villkoren för deras egna DBS-system och om 
dessa följs kan alltså MR-undersökning genomföras.  För DBS-system som saknar 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
villkorad MR-kompatibilitet är rutinundersökning med MRT kontraindicerad. Den starka 
magneten i MR kan påverka DBS-inställningarna och ändra dessa med svåra biverkningar 
som följd alternativt förstöra stimulatorns elektronik. Det finns en risk att inopererade 
kablar fungerar som radioantenner, med elektromagnetiska fält från MR, som överför 
kraftig energi till den inopererade elektroden. Elektrodens poler kan då värmas upp till ett 
gradtal som leder till termisk hjärnparenkymskada. Eventuell MRT under sådana 
omständigheter utförs endast efter beslut och direkt övervakning av DBS-teamet. 
3. Operationer av patienter med DBS. Ur narkossynpunkt finns inga kontraindikationer. Att 
tänka på är att DBS-frekvensen kan uppfattas på EKG och ge en störning med den 
frekvensen (vanligen 130-185 Hz) stimulatorn är inställd på. Problemet kan lätt lösas 
genom att ändra placeringen av EKG-elektroderna eller genom att ha DBS avstängd. 
Kirurgisk diatermi skall användas med eftertanke. Det finns ingen kontraindikation mot 
bipolär diatermi, men vid ingrepp i ansikte och på hals skall energinivån hållas så låg som 
möjligt. Relativ kontraindikation finns mot monopolär diatermi. Måste monopolär diatermi 
användas skall DBS vara avstängd och neutralplattan placeras på sådant sätt att det 
elektriska fältet inte direkt kommer att omfatta DBS-dosan eller området för kabel mellan 
dosa och hjärnelektrod. Konsekvenserna är likartade dem vid MRT. 
Lesionella tekniker 
Stereotaktisk termolesion: Genomförs som stereotaktiskt ingrepp – vanligtvis på vaken patient 
– genom att kärnområde i hjärnan (vanligtvis Vim-delkärnan av talamus) lederas med graderad 
upphettning av spetsen på en lesionselektrod. Lesionell behandling nyttjas vanligtvis endast på 
en sida – väsentligen aldrig bilateralt, pga ökad risk för irreversibla bieffekter. Lesionell 
behandling är framför allt aktuell om svårigheter finns för patienten att ha implanterat material, 
som kan vara fallet om t ex cancerbehandling kan vara aktuell och involvera tänkta områden 
för implantation. 
Stereotaktisk Gammalesion – stereotaktisk lesion erhålls genom riktad fokal strålning och 
kräver inte borrhål eller införande av lesionselektrod i hjärnan. Metodiken är dock inte justerbar 
och det finns exempel på sent uppkomna strålningseffekter med större utbredning med 
utveckling av komplicerade symtom. Tekniken kan dock vara aktuell i mycket speciella fall. 
Stereotaktiskt riktat ultraljud (Focal Ultra Sound – FUS) är en metod som fått stor spridning 
under det senaste decenniet och kräver inte heller borrhål eller införande av lesionselektrod.  
MRgFUS-talamotomi som behandling av tremor 
MRgFUS, magnetic resonance imaging guided focused ultrasound, även kallad high frequency 
focused ultrasound (HIFU), är en relativt ny metod att utföra stereotaktisk lesionskirurgi där 
talamotomi mot tremor är den mest välstuderade behandlingen. I Sverige finns FUS tillgänglig vid 
NUS i Umeå sedan 2024. 
 
FUS är en CE-märkt och i USA FDA-godkänd behandlingsmetod för essentiell tremor (ET) och 
Parkinsontremor. Talamuskärnan Vim är det huvudsakliga och vanligast använda målet vid 
behandling med FUS.  
 
Inför ställningstagande till FUS-behandling bör patienten ha genomgått en MR-undersökning av 
hjärnan för att utesluta strukturella kontraindikationer samt en riktad DT-undersökning enligt särskilt 
protokoll, vg. se bilaga nedan, för analys av skallbensdensitet, SDR (skull density ratio). Beräkningen 
av SDR sker på MRgFUS-centra men DT-undersökningen kan göras på hemorten. Uppskattningsvis 
30% av befolkningen uppfyller inte kraven på SDR för behandling. 
 
Remittering sker efter bedömning på regional högspecialiserad rörelseenhet för bekräftelse av 
diagnos, värdering av andra behandlingars effekter, grad av symtompåverkan och behandlingsmål. 
 
Indikationen för behandling prövas på samma sätt som för DBS-kirurgi, men MRgFUS är incisions- 
och implantatfri, görs utan narkos och är i de flesta fall ett engångsingrepp utan vidare justering av 
den specifika behandlingen. MRgFUS är mindre belastande, varför äldre, skörare patienter kan 
komma i fråga för behandlingen. Risken för infektions- och blödningskomplikationer relaterade till 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
det operativa ingreppet är liten, och behandlingstiden och återhämtningstiden är vanligen kort.  
 
Indikationer 
ET med symtom till den grad att skakningarnas inverkan på livskvalitet överväger riskerna med 
ingreppet och där läkemedel ej tolererats, kontraindicerade eller ej givit önskvärd effekt.  
 
Avseende PS-tremor kan FUS övervägas hos främst äldre patienter med medicinskt refraktär tremor-
dominant sjukdom, och där DBS bedömts vara ej lämplig.  
 
För de flesta patienter är det enbart aktuellt för unilateral behandling men för utvalda patienter kan det 
bli aktuellt för bilateral behandling men då bör det gå minst 9 månader mellan 
behandlingssessionerna. Risken för biverkningar är högre efter den andra talamotomin.  
 
Kontraindikationer för MRgFUS-behandling: 
• Icke MR-kompatibla implantat. Man bör även beakta mindre implantat: stentar och clips som kan 
påverka möjligheten till MRgFUS-behandlingen.   
• Patienter som inte klarar av att genomgå en MR-undersökning och MRgFUS-behandling utan 
lugnande läkemedel.  
• Patienter med epilepsi såvida de inte är mycket välkontrollerade och det har passerat många år 
sedan senaste anfallet.  
• Patienter som genomgått cerebrovaskulär händelse senaste 6 månader.  
• Patienter med okontrollerat högt blodtryck.  
• Patienter med koagulationsrubbningar, trombocythämmare eller antikoagulantia där man inte kan 
göra ett tillfälligt uppehåll inför behandlingen och upp till 2 veckor efter denna.  
• SDR <0.35 och väsentligen intakt skallben. 
• Patienter som behöver lyft för att flyttas till MR-bordet.  
Hur ingreppet går till: 
1. Patientens helrakas på huvudet; krävs för att optimera kontakt mellan ultraljudstransducers och 
skallben.  
2. Stereotaktisk ram skruvas fast i lokalbedövning med 4 skruvar på huvudet.  
3. Silikonhätta monteras på huvudet och därefter läggs patienten i MR-kamera där huvudet låses fast 
i MR-bordet via ramen.  
4. Ultraljudshjälmen fästs till silikonhättan vilket möjliggör att avjoniserat vatten cirkulerar runt 
skalpen för att skydda mot yttre upphettning.  
5. Patienten får genomgå flera testuppvärmningar (med övergående effekt) där symtom och 
biverkningar utvärderas med patienten på bordet för att sedan klargöra det optimala målet och 
skapa den permanenta lesionen. 
 
Det är således av största vikt att patienten klarar av att ligga still i MR-kameran under behandlingen 
samt kan medverka i genomförandet av olika tester. Patienten bör även ha en relativt konstant och 
tydligt synlig tremor för lättare kunna utvärdera testuppuppvärmningarnas effekt. Hela ingreppet tar 
ca 3-4 timmar i anspråk varav 2 timmar inne i MR-kameran. Varje uppvärmning tar 10-30 sekunder. 
Vanligen görs 4-8 uppvärmningar men fler kan behövas.  
 
Effekt 
Effekt och biverkningar som redovisas i litteraturen får tolkas med hänsyn till att flertalet studier 
genomförts när MRgFUS fortfarande var under utveckling. Med utveckling av såväl hårdvara, 
mjukvara och MR protokoll samt ökad erfarenhet är det sannolikt att effekten idag är något bättre och 
biverkningarna något färre, vilket delvis reflekteras av mindre studier med modernt material.  
 
Essentiell tremor 
Utifrån de studier som redovisat förbättring av tremor med hjälp av klinisk tremor skala 
(CTRS/Clinical Tremor Rating Scale) ger unilateral FUS talamotomi en förbättring på kontralateral 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
armtremor kring 70% och ADL kring 65% efter 6-12 månader. De fåtal långtidsstudier har visat en 
förbättring av specifikt postural armtremor kring 70% och ADL 35-45% upp till 5 år efter ingreppet.  
Referenser 
Cosgrove GR, Lipsman N, Lozano AM, et al. Magnetic resonance imaging-guided focused ultrasound 
thalamotomy for essential tremor: 5-year follow-up results. J Neurosurg. 2022;138(4):1028-1033.  
Ghanouni P, Krishna V, Eisenberg HM, et al. Unilateral magnetic resonance-guided focused ultrasound for 
medication-refractory essential tremor: 5-year continued access study. Front Neurol. 2025;16:1659203.  
 
Då FUS-behandling i första hand är ensidig och då metoden innebär att patienten är fastlåst i MR-
bordet är huvudtremor ingen behandlingsindikation.  
 
Parkinsontremor 
Resultaten varierar beroende på målområde där det finns tre randomiserade sham-kontrollerade 
blindade multicenterstudier som alla visade på positiv effekt av FUS av såväl Vim, STN och GPi 
jämfört med sham-behandling utifrån de definierade utfallsmått som valts. Vim är för närvarande det 
målområde som används i Sverige av flera skäl men kan komma att ändras med ökat kunskapsläge. 
Resultat från Vim-studier har visat på en cirka 60-70% förbättring av handtremor enligt CTRS 3 
månader efter ingreppet. Längre uppföljningar har något spridda resultat där vissa rapporterat 
ihållande lindring med upp emot 80% enligt CTRS 1 år efter ingreppet medan andra grupper 
redovisat en recidivfrekvens av Parkinsontremor kring 30% redan efter ett år.  
 
Biverkningar 
De flesta patienter upplever övergående biverkningar under själva ingreppet:  
- 
Smärta vid injektion av lokalbedövning/av skruvar från ramen  
- 
Huvudvärk/yrsel/illamående under uppvärmningen  
- 
Övergående sluddrigt tal, parestesi/hypestesi i ansikte/extremitet 
 
Behandlingen resulterar i ett perilesionellt ödem som i sig kan ge biverkningar, främst dysartri, 
parestesi, gång/balanspåverkan/ataxi eller lätt svaghet. Hos de flesta patienter går dessa i regress inom 
några veckor. Då behandlingen innebär permanent lesion finns dock en risk att dessa blir bestående, 
det vill säga ihållande >12 månader efter ingreppet. Förekomsten av bestående biverkningar stort men 
ligger i genomsnitt kring 30% i ET-studier och merparten klassas som milda. Erfarna internationella 
centra menar att den bestående biverkningsfrekvensen är närmare 5-10% med nuvarande teknik. 
 
Denna metod är ett värdefullt tillskott för de äldre och något skörare patienter som inte kan genomgå 
DBS-operation men man bör beakta risken för balansproblem. Patientens risk för ökade 
balansproblem bör vägas mot patientens besvär med tremor och dess påverkan på livskvalitet. Hos 
den yngre befolkningen kan en DBS-operation ha sina fördelar med bilateral operation och bättre 
dokumenterad långtidseffekt men patientens önskemål om behandlingsmetod bör vara styrande. 
 
Det finns inga randomiserade studier som direkt jämför effekten mellan DBS och MRgFUS-
behandling och det finns en diskrepans i antalet långtidsuppföljningar där kunskapsläget är sämre 
gällande FUS än för DBS. Patient-specifika faktorer såsom ålder, samsjuklighet, symtomgrad, 
gångförmåga med mera får styra vilken behandlingsmetod som är mest önskvärd/lämplig.`
    },
    {
      rubrik: 'E. Tremor vid andra tillstånd (MSA, DLB, PSP, CBD)',
      text: `E. Tremor vid andra tillstånd 
Multipel systematrofi (MSA) Tremorfenomenologi 
Tremor vid MSA-parkinsonism, kan vara identisk med den som föreligger vid Parkinsons 
sjukdom, och skiljer sig inte på ett avgörande sätt så att tremorkarakteristik kan användas 
differentialdiagnostiskt. 
Således kan första symtom vara unilateral vilotremor av samma typ som vid Parkinsons 
sjukdom. 
Vanligen längre fram i sjukdomen tillkommer ofta myoklonier ibland tillsammans med 
tremor. Tremor vid MSA-P kan svara på dopaminerg medicinering ibland i flera år. 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
Vid MSA-cerebellär form är tremor mindre vanligt, men ataxi i extremiteter och bål kan 
påvisas. Ataxin svarar vanligen inte på dopaminerg medicinering. 
Det är vanligt med blandformer av MSA-P/C där det kan förekomma både vilotremor och 
ataxi. Påvisande av ataxi är ett viktigt differentialdiagnostiskt fynd gentemot Parkinsons 
sjukdom. 
Demens med Lewy-inklusionskroppar (DLB) Tremorfenomenologi 
Tremor kan vara framträdande vid DLB också som debutsymtom och skiljer sig inte på ett 
avgörande sätt från den klassiska vilotremortypen vid Parkinsons sjukdom. Vilotremor svarar 
på dopaminerg behandling. 
Differentialdiagnostiskt är det andra symtom, främst kognitiva som är avgörande för att 
skilja från Parkinsons sjukdom i början av sjukdomen. 
Tidig insättning av kolinesterashämmare kan leda till att tremor tilltar eller bli kliniskt 
relevant. 
Senare i förloppet kan tremor bli ett motoriskt dominerande problem, och då det är 
begränsade möjligheter med att ge dopaminerga medel eller andra läkemedel med tanke på en 
uttalad läkemedelskänslighet, förekommer det att frågeställning om DBS-behandling väcks. 
Effekten av unilateral VIM/ZI/PSA-stimulering kan vara god och i utvalda fall kan detta vara 
möjligt. 
Progressiv supranukleär pares (PSP) Tremorfenomenologi 
Tremor kan förekomma vid främst en av de sju underformerna av PSP-syndromet. 
Den relativt ovanliga undergruppen PSP-parkinsonism där PSP sjukdomsprogressen med tau 
ansamling neuropatologiskt påverkar substantia nigra tidigt, kan manifesteras med vilotremor, 
som under en tid kan svara på L-dopa/dopaminerg stimulering, men även andra tremorformer 
kan förekomma. 
Vid den klassiska formen PSP-klassisk (Richardson) är tremor mera sällan framträdande 
medan rigiditet, balansstörning, tal och kognitiv påverkan dominerar. 
Vid de övriga kliniska undergrupperna av PSP sjukdomsprocessen (PSP-kortikobasalt 
syndrom, PSP-pure akinesia and freezing of gait, PSP-cerebellär form, PSP-primär lateral 
skleros, och PSP-frontotemporaldemens) är tremor ovanligt. 
Kortikobasal degeneration (CBD), kortikobasalt syndrom (CBS) Tremor 
fenomenlogi 
Tremor är ovanligt vid de olika undergrupperna av CBD. Dystoni och myoklonier förekommer 
i hög grad och kan misstas för tremor. Dopaminerg medicinering är sällan effektivt men bör 
prövas för andra symtom.`
    },
    {
      rubrik: 'G. Diagnoskriterier – Essentiell tremor',
      text: `G. Diagnoskriterier 
Essentiell Tremor (ET) 
Med den nya klassifikation av tremortillstånd från 2018, har diagnoskriterierna för Essentiell 
Tremor också modifierats, enligt nedan fria översättning. 
Det fanns sedan tidigare 2 kriterier, dels konsensus kriterier från 1998, sk TRIG kriterierna och 
de sk Washington Heights kriterierna från 1997. 
Referenser: 
Bhatia KP, Bain P, Bajaj N et al. Consensus Statement on the Classification of Tremors. From the Task Force on 
Tremor of the International Parkinson and Movement Disorder Society. Mov Disord . 2018; 33(1): 75–87. 
Tidigare kriterier och definitioner 
Deuschl G, Bain P, Brin M. et al. Consensus statement of the Movement Disorder Society on tremor. Ad hoc 
scientific committee. Movement Disord 1998; 13 (suppl 3): 2-23. 
Louis ED, Ottman R, Ford B, et al. The Washington Heights-Inwood Genetic Study of Essential Tremor: 
Methodologic issues in essential-tremor research. Neuroepidemiology 1997; 16: 124-133. 
Essentiell tremor 
1)Isolerad bilateral aktionstremor i övre extremiteter med 
2) minst 3 års varaktighet och 
3) med eller utan tremor i andra delar av kroppen (huvud, röst, nedre extremiteter t ex) samt 
4) avsaknad av andra neurologiska fynd som dystoni, ataxi, parkinsonism. 
Essentiell tremor plus 
Tremor som har de för Essentiell Tremor typiska karakteristiska, och har ytterligare neurologiska 
statusfynd av oklar signifikans, såsom nedsatt tandemgång, oklara dystona hållningar, nedsatta 
minnesfunktioner, eller andra oklara och milda neurologiska statusfynd som inte är av den grad att det 
går att klassificera fynden inom ett syndrom eller annan diagnos. Essentiell tremor med fynd av 
vilotremor är ett exempel på klassifikation inom Essentiell Tremor plus. 
 
 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026`
    },
    {
      rubrik: 'H. Bilagor – Behandlingsschema, remissmall, DT-specifikationer',
      text: `H. Bilagor 
Behandling av Tremor 
Tremorbehandling, övergripande effekter (gradering ingen – (+) viss effekt, + effekt, ++ klar 
effekt) 
 
Preparat 
Dos 
Vilotremor 
Aktionstremor 
Intentionstremor 
Betablockerare 
Propranolol 
10-320 mg 
 
++ 
(+) 
Anti-epileptika 
Primidon 
25-750 mg 
 
++ 
(+) 
Topiramat 
25-400 mg 
 
+ 
+ 
Gabapentin 
100-2400 mg 
 
+ 
 
Zonisamide 
25-50 mg 
+ 
 
 
Benzodiazepiner 
Klonazepam 
0.5-4 mg 
 
+ 
+ 
Atypiska neuroleptika mm 
Klozapin 
12.5-100 mg 
+ 
+ 
(+) 
Dopaminerga medel 
Levodopa 
50-600 mg 
++ 
 
 
Dopaminagonister  
++ 
 
 
Antikolinergika 
Trihexyfenidyl 
2-15 mg 
+ 
 
 
DBS/MRgFUS-behandling 
VIM 
 
++ 
++ 
++ 
PSA 
 
++ 
++ 
++ 
STN 
 
++ 
+ 
+ 
 
Modifierat ur Oertel, Deuschl och Poewe: "Parkinson-Syndrome und andere Bewegungsstörungen" 2012. 
Remissmall Tremor 
Vid remittering är det värdefullt att strukturera innehållet och söka ta ställning till vilken typ av 
tremor som dominerar, samt en kort sammanfattning funktionsinskränkning, samt medel som 
testats, gärna med uppgift om dos och duration samt orsak till att medlet satts ut (avsaknad av 
effekt eller biverkan). 
Beskriv tremor: 
 
Förekommer den vid rörelser (kinetisk tremor)? 
Förekommer vid postural aktivering? 
Förekommer den i vila och minskar vid rörelser (vilotremor)? 
Om båda formerna förekommer, eller är svåra att skilja ange vilken som dominerar i din 
mening. 
Aktuellt problem: 
Tidigare / Andra sjukdomar (ffa astma/obstruktivitet och hjärtarytmi/blodtryck): 
Hereditet om känd: 
Neurologiskt status: 
Behandlingsförsök: 


Svenska riktlinjer för utredning och behandling av tremor, version 3 2026 
Aktuella mediciner: 
Specifikationer av DT inför FUS  
Om patienten planeras för operation med fokuserat ultraljud (MRgFUS) krävs en 
skallbensdensitetsmätning (SDR). DT skall utföras utifrån specifikationerna nedan, varefter Umeå 
kommer att genomföra de nödvändiga beräkningarna. 
 Specifikationer för DT undersökning: 
• Siemens: H60s, H60f, Hr56f, Hr60f, Hr60s  
• Phillips: C o UC  
• GE: BonePlus  
• Toshiba/Canon: FC30RAW  
• Använd inga förstärkningsfilter vid DT  
• DT öppningen skall ej luta  
• Tjocklek: 0.625 till 1.25mm – Lika snitt tjocklek  
• Avstånd: 0mm  
• Upplöning: 512 x 512  
• Kontrast: Ingen  
• Omfattning: Komplett – måste täcka hela skallbenet  
• Orientering: Rekonstruera axiala DT bilder med AC-PC planet och perpendikulärt med mittlinjen. 
 
Rådata till DT-bilderna sparas i tre månader ifall en rekonstruktion av bilderna behövs senare.`
    }
    ]
  },

  {
    id: 'mg-konsensus',
    titel: 'Myastenia Gravis – Svenskt konsensusprogram 2024',
    kategori: 'myasteni',
    pdf: 'riktlinjer/MGkonsensus2024v2.pdf',
    markdownUrl: 'riktlinjerMarkdown/MGkonsensus2024v2.md',
    graphicalAbstract: 'graphical_abstract_mg.html',
    innehall: [
    {
      rubrik: 'Riktlinjer för MG – bakgrund och epidemiologi',
      text: `Riktlinjer för utredning och behandling av Myastenia Gravis (MG)
MG är en kronisk autoimmun neurologisk sjukdom, som karaktäriseras av abnorm
muskeluttröttbarhet, eller ibland övergående pares, i tvärstrimmig muskulatur och som lindras
av vila och kolinesterashämmare. Tillståndet kräver i olika faser av sjukdomen varierande
insatser från sjukvården. Stora framsteg har gjorts i den medicinska behandlingen under de
senaste decennierna och det finns idag ett flertal interventioner som på kort eller lång sikt kan
mildra det fortsatta sjukdomsförloppet. Behandling och omhändertagande av MG kräver
neurologisk expertis med relevant erfarenhet och det är därför väsentligt att personer med MG
snabbt och regelbundet har tillgång till specialiserad vård, framförallt tidigt i förloppet då
risken för allvarliga skov är som störst.
-För nyinsjuknade patienter rekommenderas klinisk kontroll med kvantitativ testning av
uttröttbarhetssymptom med antingen QMG eller MGC skalorna (och självskattningsskalorna
MG-ADL, MG-QoL och EQ-5D) två gånger per år under de första 2 till 5 åren, och därefter
anpassat efter sjukdomsförloppet (för skalorna, se: www.snema.se/dokument.html alt
neuroreg.se).
-För patienter som står på immunosuppressiv behandling minst årliga kontroller enligt ovan.
-Hos patienter med lindriga symptom utan sådan behandling kan kontrollerna glesas ut.
Personer med MG bör erbjudas registrering i det nationella MG registret
(https://www.neuroreg.se) för att skapa förutsättningar för långtidsuppföljning och kvalitativ
utvärdering av behandlingsutfall på både individuell och gruppnivå (för regionala
kontaktansvariga, se hemsidan, alternativt delregisteransvarig, fredrik.piehl@ki.se). De
främsta målgrupperna för MGreg är nyinsjuknade samt de som har behov av
immunomodulerande behandling, med registrering av pågående immunoterapi,
uttröttbarhetstest samt självskattningsskalor på årlig bas.
Prevalensen av MG i Sverige är omkring 25 per 100 000. Sjukdomen förekommer i flera olika
former, där det är vedertaget att stratifiera på ålder vid sjukdomsdebut; tidigt debuterande MG
(före 50 års ålder; early-onset MG; EOMG) med stark kvinnlig dominans, och sent
debuterande sjukdom (efter 50 års ålder; late-onset MG; LOMG) med viss manlig dominans.
Ytterligare ett åldersstratum har introducerats på senare år; väldigt sent debuterande sjukdom
(efter 65 års ålder; very late onset MG; VLOMG). MG förekommer också i en
paraneoplastisk form associerad med tymom. Dessa är antingen benigna eller maligna,
vanligen då med ett lokalt invasivt växtsätt. Antikroppar mot acetylkolinreceptor (AChR ak)
förekommer i samtliga tre former. Därutöver kan MG vara associerat med antikroppar mot

andra proteiner i den neuromuskulära ändplattan; MuSK respektive LRP4. Saknas samtliga
tre antikroppar, kallas tillståndet (trippel) seronegativ MG.
Ögonsymptom är vanligt vid sjukdomsdebuten och hos ca 20% förblir sjukdomen begränsad
till ögonen, okulär MG, medan sjukdomen är generaliserad hos ca 80%. Risken för
generalisering vid rent okulär MG är störst under de första två åren och är tydligt förhöjd vid
förekomst av AChR ak jämfört med de som saknar antikroppar. Vid generaliserad MG är
bulbära symptom i form av tal- och sväljsvårigheter, samt nacksvaghet vanligt
förekommande, särskilt vid MuSK-positiv MG. Symtomen behöver inte vara symmetriska
och kan vara begränsade till en viss muskelgrupp. Ett vanligt men inte alltid förekommande
fenomen vid MG är påtaglig symtomfluktuation över tid och att symtomen försämras under
dagen. Det är också vanligt att symtomen drastiskt kan försämras vid infektioner, särskilt hos
nyinsjuknade personer och de med kvarstående symtom trots behandling. Det är viktigt att
informera patienterna om detta för att de på ett tidigt stadium ska kunna söka vård.
Symtomen är initialt oftast smygande och progredierar med fluktuerande intensitet under
veckor till månader. Utöver infektion, kan emotionell stress, operation, graviditet samt vissa
mediciner snabbt försämra tillståndet. Sammantaget är prognosen svårbedömd under de första
åren, varefter tillståndet brukar stabiliseras, även om försämringar i senare faser kan
förekomma.

Utredning vid misstänkt MG
[1] Kliniska uttröttningstester (se bilaga 1): Kvantitativ testning av uttröttbarhetssymptom
med antingen QMG eller MGC skalorna är viktigt för att kunna värdera grad av
sjukdomspåverkan och för att på kort och lång sikt följa sjukdomsförloppet och utvärdera
effekt av behandlingar.

[2] Reversibilitetstester
-Edrofoniumtest (”Tensilontest”; sensitivitet ca 60%) kan göras om patienten har tydliga och
objektivt verifierbara uttröttbarhetssymtom (t ex ptos). Först ges Atropin 0,5 mg eller Robinul
0,2 mg för att minska risken kolinerg vagal reaktion med bradykardi. Efter 5 till 10 minuter
ges 2 mg edrofonium (kolinesterashämmare) i.v som testdos varefter man avvaktar några
minuter till innan ytterligare 8 mg administreras. Atropin och HLR utrustning ska finnas till
hands vid testet. Då edrofonium numera är ett licenspreparat kan detta bytas ut mot 0,5 mg`
    },
    {
      rubrik: 'Utredning vid misstänkt MG',
      text: `andra proteiner i den neuromuskulära ändplattan; MuSK respektive LRP4. Saknas samtliga
tre antikroppar, kallas tillståndet (trippel) seronegativ MG.
Ögonsymptom är vanligt vid sjukdomsdebuten och hos ca 20% förblir sjukdomen begränsad
till ögonen, okulär MG, medan sjukdomen är generaliserad hos ca 80%. Risken för
generalisering vid rent okulär MG är störst under de första två åren och är tydligt förhöjd vid
förekomst av AChR ak jämfört med de som saknar antikroppar. Vid generaliserad MG är
bulbära symptom i form av tal- och sväljsvårigheter, samt nacksvaghet vanligt
förekommande, särskilt vid MuSK-positiv MG. Symtomen behöver inte vara symmetriska
och kan vara begränsade till en viss muskelgrupp. Ett vanligt men inte alltid förekommande
fenomen vid MG är påtaglig symtomfluktuation över tid och att symtomen försämras under
dagen. Det är också vanligt att symtomen drastiskt kan försämras vid infektioner, särskilt hos
nyinsjuknade personer och de med kvarstående symtom trots behandling. Det är viktigt att
informera patienterna om detta för att de på ett tidigt stadium ska kunna söka vård.
Symtomen är initialt oftast smygande och progredierar med fluktuerande intensitet under
veckor till månader. Utöver infektion, kan emotionell stress, operation, graviditet samt vissa
mediciner snabbt försämra tillståndet. Sammantaget är prognosen svårbedömd under de första
åren, varefter tillståndet brukar stabiliseras, även om försämringar i senare faser kan
förekomma.

Utredning vid misstänkt MG
[1] Kliniska uttröttningstester (se bilaga 1): Kvantitativ testning av uttröttbarhetssymptom
med antingen QMG eller MGC skalorna är viktigt för att kunna värdera grad av
sjukdomspåverkan och för att på kort och lång sikt följa sjukdomsförloppet och utvärdera
effekt av behandlingar.

[2] Reversibilitetstester
-Edrofoniumtest (”Tensilontest”; sensitivitet ca 60%) kan göras om patienten har tydliga och
objektivt verifierbara uttröttbarhetssymtom (t ex ptos). Först ges Atropin 0,5 mg eller Robinul
0,2 mg för att minska risken kolinerg vagal reaktion med bradykardi. Efter 5 till 10 minuter
ges 2 mg edrofonium (kolinesterashämmare) i.v som testdos varefter man avvaktar några
minuter till innan ytterligare 8 mg administreras. Atropin och HLR utrustning ska finnas till
hands vid testet. Då edrofonium numera är ett licenspreparat kan detta bytas ut mot 0,5 mg

neostigmin i.v. Skillnaden mellan de båda är att effekten av edrofonium kommer snabbare och
avtar redan efter 5–10 minuter, medan effekten av neostigmin varar 1–2 timmar.
Ett alternativ till i.v kolinesterashämmare är att administrera 60 mg pyridostigmin (Mestinon)
peroralt, där effekten utvärderas efter en timme.
Vid tydlig ptos är istest ytterligare ett alternativ. Man placerar då krossad is i en
engångshandske som läggs över ögonlocket i 2 minuter varvid ptosen ska minska med ≥2 mm
för att testet skall betraktas som positivt. Hypotesen är att man hämmar endogen
kolinesterasaktivitet genom temperatursänkningen och att man på så sätt efterliknar
farmakologisk hämning. Notera att specificitet och sensitivitet är begränsad och därför kan
falla ut både som falskt positivt och negativt.

[3] Serum för analys av antikroppar
-Acetylcholinreceptorantikroppar (AChR-ak) detekteras hos ca 80% med generaliserad
MG och omkring hälften vid okulär MG. Nivåerna är normalt högst vid EOMG (50 till >200
nmol/L). Analys av AChR-ak görs på enheter för klinisk immunologi vid landets
universitetssjukhus samt på Wieslab (www.wieslab.se).
-Antikroppar mot muskelspecifikt tyrosinkinas (MuSK-ak) kan detekteras hos ca 40-70%
av AChR-seronegativa patienter i internationella studier. Förekomst av MuSK-ak är dock
betydligt lägre i nordisk befolkning än de med ursprung från Medelhavsområdet och
Mellanöstern. Analysen bör utföras hos alla AChR-seronegativa med generaliserade
symptom, särskilt vid mer uttalade okulobulbära symptom, då informationen påverkar den
vidare behandlingen. MuSK-ak analys görs bla av Karolinska Universitetssjukhuset och
Wieslab.
-Antikroppar mot Low density lipoprotein receptor–related protein 4 (LRP4-ak) har
beskrivits hos 2-50 % av dubbel seronegativ MG (saknar både AChR- och MuSK-ak), varav
de flesta har okulär eller lindrig generaliserad MG. LRP4-ak analys görs vid Wieslab.
-Antikroppar mot titin används ibland som komplement för att värdera sannolikheten av
tymom före en eventuell tymektomi. Det prediktiva värdet gäller dock enbart vid EOMG,
eftersom titin-antikroppar är relativt vanligt förekommande vid LOMG (Wieslab).

[4] Neurofysiologiska undersökningar
Dessa görs för att objektivt verifiera utbredning och grad av påverkad neuromuskulär
transmission och för att utesluta andra avvikelser som kan bidra till muskulära symtom, så
som myopati (EMG) eller störd nervkonduktion (ENG). Om patienten står på

kolinesterashämmare, t.ex pyridostigmin (Mestinon), ska medicineringen seponeras minst 12
timmar före undersökningen för att inte maskera undersökningsfynd.
-Repetitiv nervstimulering (RNS): Ytelektroder placeras över muskeln och det motoriska
svaret avläses vid 3 Hz aktivering i vila, liksom omedelbart och 1, 3 och 5 min efter 20 sek
maximal volontär muskelkontraktion. Reduktion (dvs dekrement) i amplitud av muskelsvaret
mellan 1:a och 4:e stimulering på ≥10% i vila indikerar transmissionstörning så som vid MG.
Direkt efter maximal volontär muskelkontraktion minskar dekrement till följd av så kallad
post-aktiverings facilitering. RNS har omkring 75% sensitiviteten vid generaliserad MG. Vid
okulär MG har omkring 50% avvikande fynd, vanligtvis i kranialnervsinnerverad muskulatur.
Vid misstanke om Lambert-Eatons Myastena Syndrom (LEMS) görs även högfrekvent RNS
(20 Hz; Obs, undersökningen kan upplevas som obehaglig), där man förväntas se ett
inkrement, dvs ökad amplitud. LEMS orsakas av antikroppar mot spännningsberoende
kalciumkanaler (VGCC; görs bla av Karolinska Universitetssjukhuset och Wieslab).
-Singel-Fiber elektromyografi (SFEMG): Analys av potentialer från två muskelfibrer
innerverade av samma motoriska enhet för att detektera temporal variabilitet, s.k “jitter”.
Undersökningen görs ofta i en ansiktsmuskel (t ex m. orbicularis oculi eller m. frontalis).
Sensitiviteten brukar anges till ca 95% vid både generaliserad och okulär MG, men är också
undersökarberoende och ska inte användas för screening eftersom specificiteten endast är ca
70%. Eventuella avvikelser är också inte helt specifika för MG, utan kan också ses vid t ex
ALS, polymyosit, LEMS och efter behandling med botulinumtoxin. Specificiteten förutsätter
också att det saknas avvikelser i rutin-EMG.

[5] DT-thorax med frågeställningen tymom eller tymusförstoring ska alltid göras vid
diagnostiserad MG, särskilt vid förekomst av AChR-ak. Specificiteten för att skilja mellan
hyperplasi och atrofisk tymus är dock låg, även vid MR, och det är ibland svårt att skilja
hyperplasi från tymom. Vanligen går det dock att identifiera ett tymom även på en
undersökning utan kontrast, vilket är att föredra hos personer med instabil generaliserad
symtombild pga. risk för akut försämring inducerad av kontrastmedel (se nedan).

[6] Övriga blodprover: Blodstatus, med blod diff, leverstatus, kreatinin, Na, K, fT4, TSH
som basprover, med tillägg av serum IgA, IgM och IgG nivåer samt FACS lymfocytprofil vid
misstanke om tymom (Good´s syndrom; kombinerad hypogammaglobulinemi associerat med
tymom) och inför insättning av all typ av immunosuppressiv behandling.`
    },
    {
      rubrik: '[1] Symtomatisk terapi – Kolinesterashämmare',
      text: `Behandling:
[1] Symtomatisk terapi
Kolinesterashämmare: Good practice point, evidensgrad 4.
Lätta till måttliga symtom: Symtomatisk behandling med pyridostigmin (Mestinon). Snabb
halveringstid gör att flerdos, vanligen 3 till 6 ggr dagligen, krävs. Ofta är det klokt att starta
med 20 mg x 3, och sedan, beroende på tolerabilitet och effekt, snabbt trappa upp till 60 mg
1x3, eller högre. Doser överstigande ca 500 mg/dygn ökar risken för s.k. kolinerg kris och
indikerar behov av immunomodulerande behandling. Tabletterna tas under vaken tid. GI-
biverkningar är vanliga och minskas om tabletterna tas i samband med måltid och/eller med
tillägg av anti-kolinergika, t ex ex tempore APL kapslar hyoscinhydrobromid 0.3mg 1x1-3; se
för övrigt rekommendationer om ersättningsmedel för Egazil på www.janusinfo.se.
Muskelfascikulationer och svettningar förekommer och är dosberoende.
Ambenon (Mytelase 10 mg, licenspreparat; 7,5 mg motsvarar ca 60 mg pyridostigmin) har en
något längre duration (5-8 timmar) än pyridostigmin (3-6 timmar). På individnivå
förekommer skillnader i hur man upplever balansen mellan positiv behandlingseffekt och
biverkningar mellan pyridostigmin och ambenon, varför preparatet kan prövas vid dålig
tolerabilitet för pyridostigmin. Muskarinerga biverkningar är mindre uttalade för ambenon,
varför överdoseringssymtom med fascikulationer och muskelsvaghet kan uppträda tidigare.
Neostigmin (2,5mg/ml) 0,5 mg iv eller 1,5 mg subkutant (motsvarar ca 60 mg pyridostigmin)
kan användas vid behov av parenteral dosering. GI biverkningar kan minskas med atropin
0,25-0,5 mg subkutant (en halv timme före) eller glykopyrronium (Robinul) 0,2 – 0,4 mg iv (i
direkt samband).
Notera att de med MuSK-ak vanligen svarar sämre på kolinesterashämning och även kan
uppleva muskulära överdoseringssymtom (muskelsvaghet och muskelkramper) vid lägre
doser än vad som angivits ovan.

[2] Immunoterapi
-Kortikosteroider: Good practice point, evidensgrad 2b
Tillägg av steroider bör övervägas vid måttliga till svåra myastena symtom och kan
administreras som pulskur eller som kontinuerlig per oral behandling.
Pulskurer: Metylprednisolon (Solu-Medrol) i doser upp till 30 mg/kg kroppsvikt per dag
alternativt prednison (Medrol 100 mg, licenspreparat) oralt i doser om 500 till 1000 mg per
dag under två på varandra följande dagar, beroende på svårighetsgrad av symptom.`
    },
    {
      rubrik: '[2] Immunoterapi – Kortikosteroider',
      text: `Behandling:
[1] Symtomatisk terapi
Kolinesterashämmare: Good practice point, evidensgrad 4.
Lätta till måttliga symtom: Symtomatisk behandling med pyridostigmin (Mestinon). Snabb
halveringstid gör att flerdos, vanligen 3 till 6 ggr dagligen, krävs. Ofta är det klokt att starta
med 20 mg x 3, och sedan, beroende på tolerabilitet och effekt, snabbt trappa upp till 60 mg
1x3, eller högre. Doser överstigande ca 500 mg/dygn ökar risken för s.k. kolinerg kris och
indikerar behov av immunomodulerande behandling. Tabletterna tas under vaken tid. GI-
biverkningar är vanliga och minskas om tabletterna tas i samband med måltid och/eller med
tillägg av anti-kolinergika, t ex ex tempore APL kapslar hyoscinhydrobromid 0.3mg 1x1-3; se
för övrigt rekommendationer om ersättningsmedel för Egazil på www.janusinfo.se.
Muskelfascikulationer och svettningar förekommer och är dosberoende.
Ambenon (Mytelase 10 mg, licenspreparat; 7,5 mg motsvarar ca 60 mg pyridostigmin) har en
något längre duration (5-8 timmar) än pyridostigmin (3-6 timmar). På individnivå
förekommer skillnader i hur man upplever balansen mellan positiv behandlingseffekt och
biverkningar mellan pyridostigmin och ambenon, varför preparatet kan prövas vid dålig
tolerabilitet för pyridostigmin. Muskarinerga biverkningar är mindre uttalade för ambenon,
varför överdoseringssymtom med fascikulationer och muskelsvaghet kan uppträda tidigare.
Neostigmin (2,5mg/ml) 0,5 mg iv eller 1,5 mg subkutant (motsvarar ca 60 mg pyridostigmin)
kan användas vid behov av parenteral dosering. GI biverkningar kan minskas med atropin
0,25-0,5 mg subkutant (en halv timme före) eller glykopyrronium (Robinul) 0,2 – 0,4 mg iv (i
direkt samband).
Notera att de med MuSK-ak vanligen svarar sämre på kolinesterashämning och även kan
uppleva muskulära överdoseringssymtom (muskelsvaghet och muskelkramper) vid lägre
doser än vad som angivits ovan.

[2] Immunoterapi
-Kortikosteroider: Good practice point, evidensgrad 2b
Tillägg av steroider bör övervägas vid måttliga till svåra myastena symtom och kan
administreras som pulskur eller som kontinuerlig per oral behandling.
Pulskurer: Metylprednisolon (Solu-Medrol) i doser upp till 30 mg/kg kroppsvikt per dag
alternativt prednison (Medrol 100 mg, licenspreparat) oralt i doser om 500 till 1000 mg per
dag under två på varandra följande dagar, beroende på svårighetsgrad av symptom.

Erfarenheten av per oralt betametason är begränsad och en ekvipotent dos (10 mg prednisolon
motsvarar 1,2 mg betametason) ger ett orimligt högt antal tabletter. Pulskurer ger snabbare
insättande effekt jämfört med kontinuerlig oral kortisonbehandling, men medför risk för en
initial försämringsfas under dag 2 till 3, varför behandlingen åtminstone första gången bör
utföras i slutenvård med regelbunden kontroll av kliniskt status inkl PEF. Vid PEF värde
<30% av förväntat värde bör fortsatt övervakning ske på intensivvårdsavdelning, där
respiratorvård snabbt kan initieras. Allvarlig försämring vid MG kan komma snabbt och
blodgasanalyser har begränsat värde för att bedöma hotande andningssvikt vid MG. Vid
svårare symtom bör man därför avstå från pulskurer och i stället starta med upptrappande
doser prednisolon (se nedan). Undantaget är om personen redan har respiratorvård.
Kontinuerlig oral prednisolon-behandling: Startdos 30 mg för att undvika risk för initial
försämring. Vid svårare symtom kan dosen sedan trappas upp till 60 mg/d över en vecka.
Denna dos behålls tills man ser en tydlig förbättring, varefter dosen successivt trappas ner
över flera månader. Vid måttliga symtom behåller man dosen 30 mg per dag och trappar på
liknande sätt ned i takt med symtomförbättring.
Vid okulär MG, där kolinesterashämmare är otillräckligt eller av andra skäl bör undvikas, kan
Prednisolon (initialt 20-30 mg/d med nedtrappning under några veckor/månader) alternativt
Medrol (t ex 500 mg/d i två dagar) prövas. Pga. biverkningsrisken med steroider bör
målsättningen vara att trappa ned dosen till 10 mg/d eller lägre inom 6 månader. Om tydliga
myastena symtom saknas och steroidsparande immunosupression har initierats, bör försök att
helt seponera steroider göras inom 1 till 2 år, eller helst tidigare.
Steroidbehandling bör kombineras med kalcium/D-vitamin, t ex Calcichew- D3 1x2, och
magskyddande läkemedel, t ex omeprazol. Hos personer med ökad risk för osteoporos (hög
ålder, kvinnor, låg kroppsvikt, rökare, ärftlighet) bör tillägg av bifosfonat från start övervägas.
Bentäthetsmätning bör göras på alla som påbörjar oral behandling med steroider.

-Immunosuppressiva läkemedel: Rituximab: evidensgrad: 1b; Azatioprin, ciklosporin,
takrolimus, cyklofosfamid: evidensgrad 2b; Mycofenolatmofetil, methotrexat: evidensgrad 3b
Per orala immunosuppressiva läkemedel i kombination med kortikosteroider har traditionellt
varit förstahandspreparat vid generaliserad MG, men ersätts av rituximab i denna version av
terapirekommendationer.`
    },
    {
      rubrik: '[2] Immunoterapi – Immunosuppressiva läkemedel (rituximab, azatioprin m.fl.)',
      text: `Erfarenheten av per oralt betametason är begränsad och en ekvipotent dos (10 mg prednisolon
motsvarar 1,2 mg betametason) ger ett orimligt högt antal tabletter. Pulskurer ger snabbare
insättande effekt jämfört med kontinuerlig oral kortisonbehandling, men medför risk för en
initial försämringsfas under dag 2 till 3, varför behandlingen åtminstone första gången bör
utföras i slutenvård med regelbunden kontroll av kliniskt status inkl PEF. Vid PEF värde
<30% av förväntat värde bör fortsatt övervakning ske på intensivvårdsavdelning, där
respiratorvård snabbt kan initieras. Allvarlig försämring vid MG kan komma snabbt och
blodgasanalyser har begränsat värde för att bedöma hotande andningssvikt vid MG. Vid
svårare symtom bör man därför avstå från pulskurer och i stället starta med upptrappande
doser prednisolon (se nedan). Undantaget är om personen redan har respiratorvård.
Kontinuerlig oral prednisolon-behandling: Startdos 30 mg för att undvika risk för initial
försämring. Vid svårare symtom kan dosen sedan trappas upp till 60 mg/d över en vecka.
Denna dos behålls tills man ser en tydlig förbättring, varefter dosen successivt trappas ner
över flera månader. Vid måttliga symtom behåller man dosen 30 mg per dag och trappar på
liknande sätt ned i takt med symtomförbättring.
Vid okulär MG, där kolinesterashämmare är otillräckligt eller av andra skäl bör undvikas, kan
Prednisolon (initialt 20-30 mg/d med nedtrappning under några veckor/månader) alternativt
Medrol (t ex 500 mg/d i två dagar) prövas. Pga. biverkningsrisken med steroider bör
målsättningen vara att trappa ned dosen till 10 mg/d eller lägre inom 6 månader. Om tydliga
myastena symtom saknas och steroidsparande immunosupression har initierats, bör försök att
helt seponera steroider göras inom 1 till 2 år, eller helst tidigare.
Steroidbehandling bör kombineras med kalcium/D-vitamin, t ex Calcichew- D3 1x2, och
magskyddande läkemedel, t ex omeprazol. Hos personer med ökad risk för osteoporos (hög
ålder, kvinnor, låg kroppsvikt, rökare, ärftlighet) bör tillägg av bifosfonat från start övervägas.
Bentäthetsmätning bör göras på alla som påbörjar oral behandling med steroider.

-Immunosuppressiva läkemedel: Rituximab: evidensgrad: 1b; Azatioprin, ciklosporin,
takrolimus, cyklofosfamid: evidensgrad 2b; Mycofenolatmofetil, methotrexat: evidensgrad 3b
Per orala immunosuppressiva läkemedel i kombination med kortikosteroider har traditionellt
varit förstahandspreparat vid generaliserad MG, men ersätts av rituximab i denna version av
terapirekommendationer.

Rituximab: Det immunosuppressiva alternativ för MG som på senare år har blivit det
vanligaste i Sverige är rituximab (evidensgrad 1b). Internationellt har man framförallt använt
ett hematologiskt doseringsprotokoll (375 mg/kvm kroppsyta en gång per vecka i fyra
veckor), eller i vissa fall det reumatologiska doseringsprotokollet (1000 mg upprepat efter två
veckor). I en svensk placebo-kontrollerad randomiserad studie i nydebuterad generaliserad
MG med minst måttliga symtom (LOMG dominerade i studiepopulationen), var rituximab
jämfört med placebo associerat med betydligt högre chans till milda symtom vid 4 och 6
månader utan behov av skovbehandling. Behandlingen gavs då som en engångsinfusion med
500 mg rituximab som tillägg till per oral kortisonbehandling. En tidigare retrospektiv
observationell studie har också indikerat bättre och snabbare effekt av lågdos rituximab (500
mg var 6:e månad) vid nydebuterad MG än vid behandlingsrefraktär sjukdom (ca 3 månader
mot 6-12 månader till minimala symtom). Vid behandling av nydebuterad MG var rituximab
också klart bättre än konventionell behandling med orala immunosuppressiva både sett till
effekt och tolerabilitet.
Den rekommenderade dosen rituximab vid måttlig- uttalad generaliserad myasteni är 500mg
utifrån ovan underlag. I klinisk praxis kan rituximab upprepas med 6 till 12-månaders
intervall utifrån kliniskt behov och effekt. Kontroll av CD19+ B celler bör göras inför varje
infusion, med kortare dosintervall vid tidig re-population. Serum IgG nivåer ska också
kontrolleras inför varje infusion för tidig upptäckt av tendens till hypogammaglobulinemi.
Över längre tid bör försök att glesa ut infusionsintervallen göras för att minska risken för
infektions-komplikationer. Vid otillräcklig effekt av rituximab trots eliminerade B celler över
1 till 2 år bör byte till annan behandling övervägas (se nedan).
Studier indikerar inte på förhöjd fostermissbildningsfrekvens vid behandling med rituximab,
men läkemedlet passerar över placenta ffa under sista trimestern, vilket kan leda till
elimination av B celler, ökad infektionsrisk och försämrat vaccinationssvar hos barnet. Man
bör därför avvakta minst tre månader efter given dos innan graviditet planeras. Hos
fullgångna barn som ammas förefaller inte rituximab leda till påverkade B celler.

Övriga immunosuppressiva
Azatioprin har fram tills nyligen varit förstahandspreparat (nu ersatt av rituximab) för
steroidsparande immunosuppression (rekommendationsgrad A), där behandlingen startas så
snart som möjligt efter att steroidbehandling inletts. Om tymektomi planeras bör man om
möjligt avvakta med immunosuppressiva läkemedel tills efter operationen. Dosen är 2 till 2.5
mg/kg kroppsvikt uppdelat på en eller två doser per dag (normalt 150 mg/d) och kräver

regelbunden övervakning av blodbild och leverfunktion (veckovis första månaden, månadsvis
första kvartalet, sedan 4 ggr per år så länge behandlingen fortgår). Effekt kan förväntas allra
tidigast efter 3 månader, men kan ibland dröja betydligt längre, upp till 1-1,5 år. En indikator
på farmakologisk effekt av given dos är en lätt ökning av MCV till övre eller strax över
referensvärdet. Biverkningar är relativt vanligt förekommande. Individer med genetisk
TPMT-brist utvecklar snabbt toxiska symtom med allmän sjukdomskänsla och förhöjning av
bl. a leverprover. På lite längre sikt är benmärgsdepression en allvarlig biverkan som
motiverar kontroll av blodbilden var tredje månad vid långtidsbehandling. Liksom all annan
oral immunosuppression ökar risken för infektioner, t ex bältros. På lång sikt kan risken för
hudcancer, ffa skivepitel, öka.
Om azatioprin inte tolereras eller har otillräcklig effekt kan man överväga behandling med
mykofenolatmofetil (CellCept; vanligen 1gx2), ciklosporin (Sandimmun; initialt 2 till 3
mg/kg/dag fördelat på två doser), takrolimus (Prograf; 0,05 till 0,1 mg/kg/dag) eller
metotrexat (7,5 till 20 mg/vecka) (rekommendationsgrad B). Effektlatensen för
mykofenolatmofetil och metotrexat är ungefär lika stor som för azatioprin, medan effekten av
ciklosporin och takrolimus brukar komma något tidigare, inom omkring 3 månader. För full
effekt kan det dröja ytterligare flera månader. De provtagningar som skall göras innan och
under behandlingarna anges i bilaga 2. Ciklosporinkoncentrationen i serum bör vara ca 70 till
150 ng/ml och takrolimuskoncentrationen 2 till 9 ng/ml (dalvärden före morgondosen).
Pulsativ cyklofosfamid (Sendoxan, 10 till 15mg/kg per kur vid 1 till 3 tillfällen;
rekommendationsgrad B), kan vara ett alternativ i svårare fall av generaliserad MG som inte
svarat på orala immunosuppressiva.

Observera att orala immunsuppressiva är teratogena, där risken för spontanabort och
missbildning förefaller vara högst för mykofenolatmofetil. Kvinnor i fertil ålder ska erhålla
adekvat information och råd om lämplig(a) preventivmetod(er).

Immunglobulin i.v (IVIG) och plasmaferes: Rekommendationsgrad A, evidensgrad 1b
Om steroidbehandling är olämplig eller otillräcklig och symptomen är så uttalade att man inte
kan invänta effekten av immunosuppressiva bör plasmaferes övervägas. Normalt genomförs 4
till 5 utbyten över 5 till 10 dagar. IVIG 1-2 g/kg kroppsvikt totalt administrerat över två till tre
dagar är ett alternativ till plasmaferes och upplevs normalt mindre belastande för patienten.
Det är oklart om dessa behandlingar är likvärdiga, men IVIG har fördelen att vara tillgänglig
inom allmän neurologisk verksamhet och normalt tolereras bättre än plasmaferes. Omkring`
    },
    {
      rubrik: 'IVIG och plasmaferes',
      text: `regelbunden övervakning av blodbild och leverfunktion (veckovis första månaden, månadsvis
första kvartalet, sedan 4 ggr per år så länge behandlingen fortgår). Effekt kan förväntas allra
tidigast efter 3 månader, men kan ibland dröja betydligt längre, upp till 1-1,5 år. En indikator
på farmakologisk effekt av given dos är en lätt ökning av MCV till övre eller strax över
referensvärdet. Biverkningar är relativt vanligt förekommande. Individer med genetisk
TPMT-brist utvecklar snabbt toxiska symtom med allmän sjukdomskänsla och förhöjning av
bl. a leverprover. På lite längre sikt är benmärgsdepression en allvarlig biverkan som
motiverar kontroll av blodbilden var tredje månad vid långtidsbehandling. Liksom all annan
oral immunosuppression ökar risken för infektioner, t ex bältros. På lång sikt kan risken för
hudcancer, ffa skivepitel, öka.
Om azatioprin inte tolereras eller har otillräcklig effekt kan man överväga behandling med
mykofenolatmofetil (CellCept; vanligen 1gx2), ciklosporin (Sandimmun; initialt 2 till 3
mg/kg/dag fördelat på två doser), takrolimus (Prograf; 0,05 till 0,1 mg/kg/dag) eller
metotrexat (7,5 till 20 mg/vecka) (rekommendationsgrad B). Effektlatensen för
mykofenolatmofetil och metotrexat är ungefär lika stor som för azatioprin, medan effekten av
ciklosporin och takrolimus brukar komma något tidigare, inom omkring 3 månader. För full
effekt kan det dröja ytterligare flera månader. De provtagningar som skall göras innan och
under behandlingarna anges i bilaga 2. Ciklosporinkoncentrationen i serum bör vara ca 70 till
150 ng/ml och takrolimuskoncentrationen 2 till 9 ng/ml (dalvärden före morgondosen).
Pulsativ cyklofosfamid (Sendoxan, 10 till 15mg/kg per kur vid 1 till 3 tillfällen;
rekommendationsgrad B), kan vara ett alternativ i svårare fall av generaliserad MG som inte
svarat på orala immunosuppressiva.

Observera att orala immunsuppressiva är teratogena, där risken för spontanabort och
missbildning förefaller vara högst för mykofenolatmofetil. Kvinnor i fertil ålder ska erhålla
adekvat information och råd om lämplig(a) preventivmetod(er).

Immunglobulin i.v (IVIG) och plasmaferes: Rekommendationsgrad A, evidensgrad 1b
Om steroidbehandling är olämplig eller otillräcklig och symptomen är så uttalade att man inte
kan invänta effekten av immunosuppressiva bör plasmaferes övervägas. Normalt genomförs 4
till 5 utbyten över 5 till 10 dagar. IVIG 1-2 g/kg kroppsvikt totalt administrerat över två till tre
dagar är ett alternativ till plasmaferes och upplevs normalt mindre belastande för patienten.
Det är oklart om dessa behandlingar är likvärdiga, men IVIG har fördelen att vara tillgänglig
inom allmän neurologisk verksamhet och normalt tolereras bättre än plasmaferes. Omkring`
    },
    {
      rubrik: 'Behandlingsalternativ vid terapirefraktär myasteni',
      text: `två tredjedelar förbättras markant inom en vecka, men effekten är kortvarig, varför
behandlingen bör kombineras med kortison och annan immunosuppressiv behandling. I
utvalda fall, t ex när steroider inte tolereras och adekvat sjukdomskontroll med
immunosuppressiv behandling ännu inte uppnåtts, kan övergående underhållsbehandling med
IVIG övervägas. Detta kan också vara aktuellt vid ökad infektionskänslighet, där MG
patienter ofta upplever påtaglig symtomförsämring. Behandling ges då som enstaka infusioner
(20 till 40g) med 4 till 12 veckors intervall.

Behandlingsalternativ vid terapisvikt på rituximab, steroider och andra
immunosuppressiva, dvs terapirefraktär myasteni
Om ovanstående behandlingar inte ger tillfredställande effekt eller ger oacceptabla
biverkningar kan man överväga behandling med eculizumab (Soliris; rekommendationsgrad
A), ravulizumab (Ultomiris; rekommendationsgrad A) eller efgartigimod (Vygart;
rekommendationsgrad A). Dessa behandlingar bör centraliseras på specialiserade enheter
regionalt.

Eculizumab är det första immunsuppressiva läkemedelt som erhållit formellt godkännande
för MG (terapirefraktär, ej tymomassocierad AChR-ak positiv MG). Eculizumab blockerar
komplementprotein C5a och inhiberar därmed komplementkaskaden. Godkännandet
baserades på en internationell fas III studie. Det primära utfallsmåttet var effekt på MG-ADL
skalan, där den aktiva behandlingsarmen uppvisade en gränssignifikant effekt. Effekten på
flera sekundära effektmått, bl. a kvantitativ MG skala, var dock signifikanta. Behandlingen är
förknippad med risker för allvarligare infektioner, där ffa risken för meningokockmeningit ska
uppmärksammas. Vaccinationsskyddet bör ses över innan behandling. Behandlingskostnaden
är också mycket hög, >1 miljon kr per patient och år. Mer nyligen har det relaterade preparatet
ravulizumab (Ultomiris) godkänts för generaliserad AChR-ak positiv MG. Medlet blockerar
också C5a men kan administreras mer sällan än eculizumab (varannan månad jämfört med
varannan vecka).

Efgartigimod är det andra läkemedlet som godkänts specifikt för AChR-ak positiv
generaliserad MG. Läkemedlet blockerar neonatal Fc-receptor, vilket leder till ökad endogen
selektiv destruktion av IgG, inkluderande AChR-ak. En fas III studie påvisade en signifikant
effekt på både MG-ADL och kvantitativ MG skala jämfört med placebo.

Nyare och experimentella behandlingar: Flera behandlingsstudier pågår med läkemedel
som delvis har nya verkningsmekanismer vid behandling av MG. Till dessa hör hämning av
interleukin-6 (satralizumab/Enspryng och tocilizumab/Roactemra), elimination av CD19+
celler (inebilizumab/Uplizna) och elimination av både B och T-celler (kladribin/Mavenclad).
För vissa av dessa finns begränsad klinisk emiprisk erfarenhet, t ex tocilizumab och kladribin,
vilket gör att de i vissa selekterade fall kan övervägas. Särskilt tocilizumab har en acceptabel
säkerhetsprofil och kan övervägas vid kvarstående symtom trots adekvata doser av rituximab
över 1 till 2 år. Vid mycket terapirefraktära symptom, men med tecken till reversibilitet vid
plasmaferes, kan även hematogen stamcellsbehandling (HSCT) komma ifråga. Beslut om
HSCT ska fattas inom ramen för nationell högspecialiserad vård (NHV), där terapirefraktär
MG rent allmänt även ingår i uppdraget.

[3] Tymektomi: Rekommendationsgrad A, evidensgrad 1b.
Tymektomi bör utföras tidigt vid generaliserad EOMG (rekommendationsgrad A) och
tymom-associerad MG (rekommendationsgrad A). Operationen kan vanligen genomföras
endoskopiskt (video-assisted thoracic surgery, VATS), vilket medför ett mindre trauma och
kortare konvalescens än öppen kirurgi med sternotomi. Faktorer associerade med god effekt
av tymektomi är kort sjukdomsduration, kvinnligt kön, förekomst av tymushyperplasi och
AChR-ak seropositivitet. Andelen som uppvisar tymushyperplasi på PAD sjunker successivt i
åldersintervallet 40-65 år, varför indikationen för operation vid sjukdomsdebut över 50 till 60
års ålder är svag, särskilt hos män. Tymektomi rekommenderas ej vid MuSK- eller LRP4-ak
seropositivitet, eller seronegativitet. Patientens MG symtom bör optimeras och vara stabila
inför operationen, vilket kan göras med titrering av kolinesterashämmare, steroider och/eller
IVIG. Om möjligt bör man avvakta med insättning av immunosuppressiva tills efter
operationen, men administration av en första dos rituximab kan övervägas för tidig
stabilisering av MG-symptom. Effekten av tymektomi är vanligen fördröjd och blir tydlig
först efter 1 till 2 år efter operationen.`
    },
    {
      rubrik: '[3] Tymektomi',
      text: `Nyare och experimentella behandlingar: Flera behandlingsstudier pågår med läkemedel
som delvis har nya verkningsmekanismer vid behandling av MG. Till dessa hör hämning av
interleukin-6 (satralizumab/Enspryng och tocilizumab/Roactemra), elimination av CD19+
celler (inebilizumab/Uplizna) och elimination av både B och T-celler (kladribin/Mavenclad).
För vissa av dessa finns begränsad klinisk emiprisk erfarenhet, t ex tocilizumab och kladribin,
vilket gör att de i vissa selekterade fall kan övervägas. Särskilt tocilizumab har en acceptabel
säkerhetsprofil och kan övervägas vid kvarstående symtom trots adekvata doser av rituximab
över 1 till 2 år. Vid mycket terapirefraktära symptom, men med tecken till reversibilitet vid
plasmaferes, kan även hematogen stamcellsbehandling (HSCT) komma ifråga. Beslut om
HSCT ska fattas inom ramen för nationell högspecialiserad vård (NHV), där terapirefraktär
MG rent allmänt även ingår i uppdraget.

[3] Tymektomi: Rekommendationsgrad A, evidensgrad 1b.
Tymektomi bör utföras tidigt vid generaliserad EOMG (rekommendationsgrad A) och
tymom-associerad MG (rekommendationsgrad A). Operationen kan vanligen genomföras
endoskopiskt (video-assisted thoracic surgery, VATS), vilket medför ett mindre trauma och
kortare konvalescens än öppen kirurgi med sternotomi. Faktorer associerade med god effekt
av tymektomi är kort sjukdomsduration, kvinnligt kön, förekomst av tymushyperplasi och
AChR-ak seropositivitet. Andelen som uppvisar tymushyperplasi på PAD sjunker successivt i
åldersintervallet 40-65 år, varför indikationen för operation vid sjukdomsdebut över 50 till 60
års ålder är svag, särskilt hos män. Tymektomi rekommenderas ej vid MuSK- eller LRP4-ak
seropositivitet, eller seronegativitet. Patientens MG symtom bör optimeras och vara stabila
inför operationen, vilket kan göras med titrering av kolinesterashämmare, steroider och/eller
IVIG. Om möjligt bör man avvakta med insättning av immunosuppressiva tills efter
operationen, men administration av en första dos rituximab kan övervägas för tidig
stabilisering av MG-symptom. Effekten av tymektomi är vanligen fördröjd och blir tydlig
först efter 1 till 2 år efter operationen.`
    },
    {
      rubrik: 'Myasten kris',
      text: `Myasten kris
Respiratorisk svikt orsakas av myasten svaghet i andningsmuskulaturen och kan vara
livshotande. Patienter som bedöms vara i riskzonen ska vårdas på intermediär- eller
intensivvårdsavdelning med möjlighet till kontinuerlig övervakning och behandling med icke-
invasiv ventilation (NIV) eller invasiv ventilatorbehandling. OBS! blodgaserna kan vara
normala fram tills dess att patienten slutar andas.
Immunomodulerande behandling: Plasmaferes eller IVIG ska sättas in tidigt för att vända
förloppet. Behandling med i.v neostigmin (se bilaga 5) rekommenderas då upptaget av
Mestinon är variabelt och kan påverkas av kolinerga bieffekter av behandlingen. Man startar
behandlingen med den Mestinon-ekvivalenta dos som patienten stod på och justerar utifrån
effekt. Enstaka doser om 0,5 mg neostigmin i.v (motsvarar 60 mg Mestinon) kan ges för att
testa om vidare doshöjning är meningsfull. Robinul (glykopyrron, ett antikolinergikum) bör
ges regelbundet för att motverka muskarinerga biverkningar, t ex 0,2 mg 3 till 4 ggr per dygn.
Alternativt kan färdig blandning Robinul/Neostigmin användas med dosering utifrån
neostigminschema. Steroider bör också övervägas om krisen inte är orsakad av akut infektion.
Vid insättning av högdossteroider ska risken för försämring dag 2 till 3 beaktas (se avsnitt
Kortikosteroider ovan). Hos äldre eller på annat vis sköra patienter kan dosen Prednisolon
ökas med 10 mg dagligen från en startdos av 20 mg för att minimera risken för andningssvikt
och respiratorbehov. Det är en stor vinst om respiratorbehandling kan undvikas, eftersom
särskilt äldre patienter riskerar andningsrelaterade komplikationer redan efter ett par dagars
respiratorbehandling. Om respiratorbehandling ändå inleds kan man pausa
kolinesterashämning och även utan risk administrera högdos kortikosteroider. Vid tecken till
snabbt försämrade MG symtom med risk för IVA-behov kan kortvarig insättning av
komplementhämning övervägas baserat på nyliga fallrapporter. Sannolikt kommer hämmare
av neonatal Fc-receptor på sikt att kunna bli ett alternativ till plasmaferes/IVIG.

Kolinerg kris
Överdosering av kolinesterashämmare kan medföra depolariserande blockering i den
neuromuskulära synapsen med muskelsvaghet liknande den vid MG. Det som skiljer från den
myastena krisen är framträdande kolinerga symtom; fascikulationer, muskelkramper, mios,
ökat tårflöde, salivering, bronksekretion, buksmärtor, illamånde, kräkningar, diarré, svettning
och bradykardi.`
    },
    {
      rubrik: 'Kolinerg kris',
      text: `Myasten kris
Respiratorisk svikt orsakas av myasten svaghet i andningsmuskulaturen och kan vara
livshotande. Patienter som bedöms vara i riskzonen ska vårdas på intermediär- eller
intensivvårdsavdelning med möjlighet till kontinuerlig övervakning och behandling med icke-
invasiv ventilation (NIV) eller invasiv ventilatorbehandling. OBS! blodgaserna kan vara
normala fram tills dess att patienten slutar andas.
Immunomodulerande behandling: Plasmaferes eller IVIG ska sättas in tidigt för att vända
förloppet. Behandling med i.v neostigmin (se bilaga 5) rekommenderas då upptaget av
Mestinon är variabelt och kan påverkas av kolinerga bieffekter av behandlingen. Man startar
behandlingen med den Mestinon-ekvivalenta dos som patienten stod på och justerar utifrån
effekt. Enstaka doser om 0,5 mg neostigmin i.v (motsvarar 60 mg Mestinon) kan ges för att
testa om vidare doshöjning är meningsfull. Robinul (glykopyrron, ett antikolinergikum) bör
ges regelbundet för att motverka muskarinerga biverkningar, t ex 0,2 mg 3 till 4 ggr per dygn.
Alternativt kan färdig blandning Robinul/Neostigmin användas med dosering utifrån
neostigminschema. Steroider bör också övervägas om krisen inte är orsakad av akut infektion.
Vid insättning av högdossteroider ska risken för försämring dag 2 till 3 beaktas (se avsnitt
Kortikosteroider ovan). Hos äldre eller på annat vis sköra patienter kan dosen Prednisolon
ökas med 10 mg dagligen från en startdos av 20 mg för att minimera risken för andningssvikt
och respiratorbehov. Det är en stor vinst om respiratorbehandling kan undvikas, eftersom
särskilt äldre patienter riskerar andningsrelaterade komplikationer redan efter ett par dagars
respiratorbehandling. Om respiratorbehandling ändå inleds kan man pausa
kolinesterashämning och även utan risk administrera högdos kortikosteroider. Vid tecken till
snabbt försämrade MG symtom med risk för IVA-behov kan kortvarig insättning av
komplementhämning övervägas baserat på nyliga fallrapporter. Sannolikt kommer hämmare
av neonatal Fc-receptor på sikt att kunna bli ett alternativ till plasmaferes/IVIG.

Kolinerg kris
Överdosering av kolinesterashämmare kan medföra depolariserande blockering i den
neuromuskulära synapsen med muskelsvaghet liknande den vid MG. Det som skiljer från den
myastena krisen är framträdande kolinerga symtom; fascikulationer, muskelkramper, mios,
ökat tårflöde, salivering, bronksekretion, buksmärtor, illamånde, kräkningar, diarré, svettning
och bradykardi.`
    },
    {
      rubrik: 'Överväganden gällande röntgenkontrastmedel',
      text: `Det enklaste sättet att skilja tillstånden åt är att tillfälligt sätta ut kolinesterashämmar-
behandlingen. Kolinerg kris är nästan alltid ett resultat av otillräcklig immunosuppression,
vilket gör att patienten tvingats höja dosen av kolinesterashämmare. Överväg därför
behandling så som för myasten kris/försämring. Patienter bör också informeras om att inte
själva höja dosen av pyridostigmin 60 mg över 6 till 8 tabletter per dag.

Överväganden gällande användning av röntgenkontrastmedel
Nuvarande nationella och internationella radiologiska riktlinjer anger att
kontrastmedelsundersökning endast ska göras efter särskilt övervägande och under adekvat
övervakning pga risk för försämring av MG symtom. Detta ställningstagande är baserat på ett
antal fallrapporter, men där systematiska sammanställningar indikerar en låg absolut risk,
särskilt för akut försämring i direkt anslutning till undersökningen. I befintliga
sammanställningar är det också svårt att med god säkerhet skilja ut vad som är orsakat av MG
från symtom relaterade till annan sjuklighet. Överdriven försiktighet kan också leda till
fördröjning eller underdiagnostik av behandlingsbar samsjuklighet. Av dessa skäl anser
SNEMA att;
-Inga restriktioner bör gälla för MR kontrastmedel (gadolinium).
-Undersökning med jodkontrast kan och ska göras om det är diagnostiskt relevant, men
undersökningen bör göras på sjukhus snarare än röntgenavdelning i öppenvård.
-Patienter med myasteni-associerade bulbära/respiratoriska symptom bör observeras
inneliggande ett dygn efter undersökning.
-Att informera patienten om att i tidigt skede ta kontakt med vården vid tecken till försämring.
-Vid frågor bör neurologbakjour kontaktas för second opinion.`
    },
    {
      rubrik: 'MG-behandlingsalgoritm',
      text: `MG- behandlingsalgoritm

Alternativ immunsuppression till rituximab: per orala immunosuppressiva, cyklofosfamid, eculizumab,
efgartigimod, tocilizumab, kladribin, hematogen stamcellsbehandling.
Notera att bulbära symtom utöver påverkan på ögonmotorik räknas som generaliserad sjukdom.
EOMG = Early-onset Myasthenia gravis
LOMG = Late-onset Myasthenia gravis`
    },
    {
      rubrik: 'Bilaga 1: Uttröttningstest',
      text: `Bilaga 1: Instruktioner för utförande av uttröttningstest
1. Tal: Be patienten säga sitt namn och sedan att räkna högt till hundra. Uppmärksamma
tecken till dysartri eller nasalt ljud. Be patienten säga sitt namn igen när han/hon räknat klart.
2. Ansiktsmotorik: Be patienten vissla alternativt truta med munnen och sedan göra 20
grimaser (omväxlande le stort och truta med munnen). Be sedan patienten blåsa upp kinderna
och testa med tryck om han/hon har svårt att inte läcka luft.
3. Käkstyrka: Be patienten bita ihop och se om det går att pressa ner underkäken. Be
patienten sen att gapa stort 20 gånger. Direkt därefter testas åter om underkäken går att pressa
ner.
4. Ögonmotorik och ptos: Be patienten titta på ditt finger i 2 minuter. Fingret hålls cirka 30
cm framför och ovanför patienten, så att han/hon tittar uppåt minst 45 grader. Be patienten att
inte blinka. Notera eventuell ptos uppträder och ögonlocket når pupillen, varefter testet kan
avbrytas. Patienten ska också ange eventuell dubbelseende (från det att fingret får en skugga).
Försök också notera objektiva fynd som att ögonaxlarna devierar. När 2 minuter har gått
kontrolleras ögonmotoriken i alla riktningar.Vid habituell ptos kan testet utföras genom blick i
lateralt ändläge under 2 minuter.
5. Nackstyrka: Patientenen ligger plant på en brits utan kudde. Be patienten lyfta upp
huvudet och titta ned mot fötterna. Applicera ett lätt tryck mot pannan och pressa patientens
huvud lätt ned mot britsen för att testa styrkan. Låt sedan patienten göra 30 huvudlyft. Notera
om amplituden på lyften minskar. Be sedan patienten lyfta upp huvudet och titta ned mot
fötterna och testa styrkan som tidigare. Observera, avbryt testet om patienten måste börja
använda ryggmusklerna för att få upp huvudet tillräckligt högt.
6. Armstyrka: Be patienten abducera båda armarna till 90 grader i axelleden. Kontrollera
kraften i armarna. Be patienten göra 40 armlyft , så att händerna möts ovanför huvudet.
Notera om amplituden sjunker. Kontrollera kraften efteråt. Alternativt kan statisk styrka testas
genom att be patienten abducera armarna till horisontell position i axelleden som ovan och
kontrollera kraften, be därefter patienten hålla kvar armarna i positionen i 180 sekunder och
kontrollera kraften efteråt. Testet avbryts om armarna börjar sjunka nedåt.
7. Fingerstyrka: Kontrollera kraften i ett korsvis handslag. Be därefter patienten i snabb takt
öppna och knyta handen 70 gånger. Notera om förmågan att sträcka ut fingrarna minskar.
8. Benstyrka: Patientenen liggande plant på en brits med/utan kudde. Ett ben i taget lyfts till
45-60 grader, där kraften att hålla emot kontrolleras. Be därefter patienten att lyfta benet 35
gånger 45-60 grader. Notera om amplituden sjunker. Vid rörelserelaterad smärta kan statisk
benstyrka testas istället. Då testas förmåga att hålla benet lyft till 45-60 grader under upp till
60 sekunder. Kontrollera kraften i benet efteråt.
9. Andning: Patienten får blåsa i en PEF-mätare 3 gånger. Tekniken är viktig; maximal
blåshastighet snarare än att tömma lungorna helt!`
    },
    {
      rubrik: 'Bilaga 2: QMG, MGC och PEF referensvärden',
      text: `Bilaga 2: Kvantitativt MG status (QMG)

Det maximala antalet repetitioner räknas som det antal patienten kan utföra ett korrekt sätt, det vill säga behålla
amplitud och med normalt rörelsemönster (t ex att enbart räkna huvudlyft som bara inbegriper nackmuskler men
inte om även ryggmusklerna måste användas). Vid statiska tester räknas tid till att den korrekta rörelsen inte kan
hållas längre

Bilaga 2 (forts): MG Kompositskala (MGC)

Bilaga 2 (forts): PEF`
    },
    {
      rubrik: 'Bilaga 3: Neostigmin- och istest',
      text: `Bilaga 3

Neostigmin test
Ge först Atropin 0,5 mg i.v (Atropin, 0,5 mg/ml, 1 ml) och vänta 5 till 10 minuter.
Informera om att muntorrhet eller lätt pulsstegring kan uppkomma.
Förklara att två olika substanser ska testas, men inte i vilken ordning.
Ge ”kontrollsubstans” NaCl i.v i samma volym som Neostigmin-lösningen. Utvärdera
effekten efter ca 5 minuter med lämpligt valt uttröttningsprov i den muskelgrupp som ska
utvärderas, t ex ögonlocksmuskler eller nacke. Fråga också om eventuella biverkningar.
Ge sedan Neostigmin 0,5 mg i långsam i.v injektion och spola med NaCl. Utvärdera effekt
efter som ovan och efterfråga biverkningar (ffa tarmobehag, yrsel).
Effekten förväntas sitta i 1 till 2 timmar efter att Neostigminet administrerats för att sedan
gradvis klinga av.

Istest
Om patienten har ptos kan istest utföras som ett alternativ/komplement till
edrofonium/neostigmin test.
Lägg krossad is i en engångshandske och applicera denna mot ögonlocket under 2 minuter.
Vid ett positivt test ska ptosen minska med ≥2 mm jämfört med hur det såg ut före testet.
Använd gärna patientens mobilkamera för att dokumentera effekten.`
    },
    {
      rubrik: 'Bilaga 4: Provtagningsrutiner',
      text: `Bilaga 4

Provtagningsrutiner
Rituximab
Före behandlingsstart: Blodstatus med diff, CRP, ALAT, Krea, U- sticka, LPK, neutrofiler, S-
IgG, S-IgM, Lymfocytprofil (T, B celler och NK celler), IGRA test på särskild indikation,
hepatitprover (HBs-Ag, anti-HBs AK, anti-HB AK). Överväg även relevant
virus/vaccinationsserologi (morbilli, varicella).
Före varje infusion: CRP, LPK, neutrofiler, S-IgG, Lymfocytprofil (T, B celler och NK
celler).

Azatioprin (Imurel)
Före behandlingsstart: Blodstatus med diff, CRP, Krea, ALAT, amylas och hepatitprover.
Behandlingsmonitorering: Blodstatus med diff, ALAT och amylas 1gång/vecka i 4 veckor,
därefter 1 gång/månad första kvartalet, därefter kvartalsvis.

Mykofenolatmofetil (CellCept)
Före behandlingsstart: Blodstatus med diff, ALAT, Krea och hepatitprover.
Behandlingsmonitorering: Blodstatus med diff. 2 ggr/mån första kvartalet, 1 gg/mån andra
kvartalet, därefter kvartalsvis.

Cyklofosfamid (Sendoxan)
Före behandlingsstart: Blodstatus med diff, krea, urinsticka, CRP ALAT, och hepatitprover.
Efter 10 dagar: Blodstatus med diff, krea, urinsticka, SR, CRP ALAT.

Ciklosporin (Sandimmun Neoral)
Före behandlingsstart: Blodstatus med diff, krea, urea, urat, elektrolyter, ASAT, amylas, CK,
myoglobin, blodfetter, hepatitprover, urinsticka. Blodtryck.
Behandlingsmonitorering: Blodstatus med diff, krea, urea, urat, elektrolyter, ASAT, amylas,
CK, myoglobin 1gång/vecka i 4 veckor, därefter 1 gång/månad första kvartalet, därefter
kvartalsvis. Blodtryck kvartalsvis. Blodfetter och urinsticka minst en gång per år.`
    },
    {
      rubrik: 'Bilaga 5: Schema för i.v. neostigmin vid myasten kris',
      text: `Bilaga 5

Tabell för i.v/s.c Neostigminbehandling vid myasten kris

Neostigmin i.v 0,5 mg eller s.c 1.5 mg motsvarar 60 mg pyridostigmin (Mestinon) respektive
7,5 mg ambenon (Mytelase).

Förbehandla alltid med antikolinergikum före kolinesterashämmare för att motverka kolinerga
biverkningar!
Atropin eller Robinul bör ges regelbundet för att motverka muskarinerga biverkningar, t ex
0,5 mg Atropin s.c eller i.v alternativt 0,2 mg Robinul i.m eller i.v 3 till 4 ggr per dygn.
Alternativt kan Robinul/ Neostigminlösning användas.

Neostigmin för 12 timmars infusion löses i 500 mL Nacl och ges med infusionspump.
Lämplig startdos vid myasten kris är att först ge 0,5 mg iv som injektion och därefter starta
dropp med hastighet 1 mg/12 tim.

Dosekvivalenter (60 mg
Mestinon tabletter/dygn)
Neostigmin/dygn (mg)
Neostigmin/tim (mg)
1,5
0,06
2,0
0,08
2,5
0,10
3,0
0,13
3,5
0,15
4,0
0,17
4,5
0,19
5,0
0,21`
    }
    ]
  },

  {
    id: 'polyneuropati',
    titel: 'Polyneuropati – Vårdprogram för slutenvård, Karolinska 2023',
    kategori: 'polyneuropati',
    pdf: 'riktlinjer/Polyneuropati Karolinska 2023v2.pdf',
    markdownUrl: 'riktlinjerMarkdown/Polyneuropati_Karolinska_2023v2.md',
    graphicalAbstract: 'graphical_abstract_polyneuropati.html',
    innehall: [
    {
      rubrik: 'Definition',
      text: `Polyneuropati

A. Medicinska aspekter

Definition

Polyneuropati innebär en rubbning i funktion av ett flertal perifera nervtrådar i kroppen. Dessa
nervtrådar ligger i den del av nervsystemet som ligger utanför hjärnan och ryggmärgen, och
omfattar även kranialnerverna III-XII.  Beroende på den typ av polyneuropati som man har kan man
få störning av funktion av motoriska-, sensoriska eller autonoma nervtrådar. Därmed är de
vanligaste symtomen vid polyneuropati störning av känseln, muskelsvaghet i benen och armarna,
balansstörning, och även störning av blodtrycksreglering, svettning, tarm- och urinblåsefunktion.

Symtom

Känselsymtom

De vanligaste symtomen vid polyneuropati är domningar och stickningar, ”sockerdricks-känsla”
och stramhet i fötterna, underbenen och ibland i händerna. Man kan även uppleva känselnedsättning
i fötterna, vilket upplevs som kuddkänsla under fötterna. Tidvis kan det även förekomma smärtor i
fötter och underben och ibland även i fingrarna. Smärtorna brukar vara av ilande, brännande och
svidande karaktär, men kan också vara molande. Känselstörningarna kan också uppträda i form av
spontan värme- eller köldkänsla i fötterna utan samband med temperaturväxlingar i omgivningen.
Överkänslighet för mekaniska stimuli såsom beröring, värme eller kyla, kan ge upphov till
stimulirelaterad smärta (allodyni). Vid fintrådsneuropati, kan känselstörning även upplevas på
ovanligare ställen, såsom munhålan eller hjässan.  De olika känselsymtomen vid polyneuropati
tilltar inte i samband med gång och är snarast värre då man vilar benen, som exempelvis på
nätterna.

Motoriska symtom

Tidiga symtom kan utgöras av tilltagande muskelkramper. Varierande grad av muskelsvaghet
noteras främst i fötter och underben samt ibland även i underarmar och händer. Svaghet i
underbenen medför att man blir stapplig och snubblig i fötterna vid gång. Ibland blir svagheten mer
omfattande i underbenen, vilket resulterar i utveckling av droppfot (oförmåga att lyfta upp
framfoten).  Svaghet i händerna leder till fumlighet varvid man lätt tappar saker ur händerna och
upplever nedsatt finmotorik. Om muskelsvagheten även drabbar lårmuskler blir det svårt att resa sig
upp från sittande och gå i trappor. Efter en tids sjukdom brukar man kunna se muskelatrofi i benen
och händerna.

Balanssymtom

Påverkan på känselnerver i benen kan även orsaka ostadighetskänsla. Typiskt är att
ostadighetskänslan förvärras av att blunda.  Man kan därtill behöva gå bredbent för att hålla
balansen (ataxi) och ta snedsteg vid gång.`
    },
    {
      rubrik: 'Symtom (känselsymtom, motoriska, balans, autonoma)',
      text: `Polyneuropati

A. Medicinska aspekter

Definition

Polyneuropati innebär en rubbning i funktion av ett flertal perifera nervtrådar i kroppen. Dessa
nervtrådar ligger i den del av nervsystemet som ligger utanför hjärnan och ryggmärgen, och
omfattar även kranialnerverna III-XII.  Beroende på den typ av polyneuropati som man har kan man
få störning av funktion av motoriska-, sensoriska eller autonoma nervtrådar. Därmed är de
vanligaste symtomen vid polyneuropati störning av känseln, muskelsvaghet i benen och armarna,
balansstörning, och även störning av blodtrycksreglering, svettning, tarm- och urinblåsefunktion.

Symtom

Känselsymtom

De vanligaste symtomen vid polyneuropati är domningar och stickningar, ”sockerdricks-känsla”
och stramhet i fötterna, underbenen och ibland i händerna. Man kan även uppleva känselnedsättning
i fötterna, vilket upplevs som kuddkänsla under fötterna. Tidvis kan det även förekomma smärtor i
fötter och underben och ibland även i fingrarna. Smärtorna brukar vara av ilande, brännande och
svidande karaktär, men kan också vara molande. Känselstörningarna kan också uppträda i form av
spontan värme- eller köldkänsla i fötterna utan samband med temperaturväxlingar i omgivningen.
Överkänslighet för mekaniska stimuli såsom beröring, värme eller kyla, kan ge upphov till
stimulirelaterad smärta (allodyni). Vid fintrådsneuropati, kan känselstörning även upplevas på
ovanligare ställen, såsom munhålan eller hjässan.  De olika känselsymtomen vid polyneuropati
tilltar inte i samband med gång och är snarast värre då man vilar benen, som exempelvis på
nätterna.

Motoriska symtom

Tidiga symtom kan utgöras av tilltagande muskelkramper. Varierande grad av muskelsvaghet
noteras främst i fötter och underben samt ibland även i underarmar och händer. Svaghet i
underbenen medför att man blir stapplig och snubblig i fötterna vid gång. Ibland blir svagheten mer
omfattande i underbenen, vilket resulterar i utveckling av droppfot (oförmåga att lyfta upp
framfoten).  Svaghet i händerna leder till fumlighet varvid man lätt tappar saker ur händerna och
upplever nedsatt finmotorik. Om muskelsvagheten även drabbar lårmuskler blir det svårt att resa sig
upp från sittande och gå i trappor. Efter en tids sjukdom brukar man kunna se muskelatrofi i benen
och händerna.

Balanssymtom

Påverkan på känselnerver i benen kan även orsaka ostadighetskänsla. Typiskt är att
ostadighetskänslan förvärras av att blunda.  Man kan därtill behöva gå bredbent för att hålla
balansen (ataxi) och ta snedsteg vid gång.

Autonoma symtom

Påverkan på icke-viljestyrda nerver tillhörande det sympatiska- eller parasympatiska nervsystemet,
kan leda till förstoppning, svårigheter med att kissa, yrsel och svimningskänsla vid uppresning,
hjärtklappning pga hjärtrytmstörning, muntorrhet, samt riklig- eller nedsatt svettningsförmåga.

Uppdelning av polyneuropati

Polyneuropatier kan delas upp enligt olika principer. Vid uppdelningen brukar man ta hänsyn till
den kliniska symtombilden samt resultat av den neurofysiologiska undersökningen. Vid den
kliniska uppdelningen behöver man ta hänsyn till följande:

1) Vilken del av perifera nervsystemet är engagerad enligt anamnes /statusfynden: Nervrot, plexus,
enskilda perifera nerver eller en diffus utbredning?  Spinala nerver, kranialnerver, både och?
2) Vad är tidsförloppet: Akut, subakut eller smygande debut. Kroniskt progressivt, eller
relapserande-remitterande förlopp?
3) Vilka symtom dominerar enligt anamnes/statusfynd: Motoriska, sensoriska eller autonoma.
4) Vad är de neurofysiologiska fynden: Demyeliniserande, axonal eller en blandad neuropati?
Påverkan på motoriska, sensoriska eller autonoma fibrer? Påverkan på grovkalibriga nervfibrer,
eller på de tunna, kutana sensoriska fibrerna (C-fibrer)?

Uppdelning av polyneuropati enligt dessa kriterier leder till en lättare identifiering av de
bakomliggande orsakerna till polyneuropatin; se Tabell 1 och även sektionen ”utredningsplan”.

Etiologi och patogenes

Ur etiologisk synvinkel delas polyneuropatier upp i de ärftliga och de förvärvade. De
polyneuropatier vars etiologi inte går att identifiera benämnes idiopatiska.

Uppdelning av polyneuropatier:

I)
Ärftliga polyneuropatier
a)   Mutationer av gener som ansvarar för bildande av perifer myelin eller axon (CMT mfl.).
b) Ärftliga sjukdomar där polyneuropati ingår som delsymtom, t.ex:
i. Rubbningar av lipidmetabolism (leukodystrofier)
ii. Mitokondriella sjukdomar
iii. Ärftlig transtyretinamyloidos (ATTRv-amyloidos) = Skelleftesjukan
iv. Spinocerebellära ataxier (SCA) och cerebellär ataxi neuropati vestibulär
areflexi syndromet (CANVAS)
v. Fragil-X associerad tremor och ataxi syndrom (FXTAS)

II)
Förvärvade polyneuropatier
a)   Systemiska sjukdomar
b)   Bristtillstånd
c)  Toxiska

d)   Infektioner

e)   Immunopatier`
    },
    {
      rubrik: 'Uppdelning av polyneuropati – etiologi och patogenes',
      text: `Autonoma symtom

Påverkan på icke-viljestyrda nerver tillhörande det sympatiska- eller parasympatiska nervsystemet,
kan leda till förstoppning, svårigheter med att kissa, yrsel och svimningskänsla vid uppresning,
hjärtklappning pga hjärtrytmstörning, muntorrhet, samt riklig- eller nedsatt svettningsförmåga.

Uppdelning av polyneuropati

Polyneuropatier kan delas upp enligt olika principer. Vid uppdelningen brukar man ta hänsyn till
den kliniska symtombilden samt resultat av den neurofysiologiska undersökningen. Vid den
kliniska uppdelningen behöver man ta hänsyn till följande:

1) Vilken del av perifera nervsystemet är engagerad enligt anamnes /statusfynden: Nervrot, plexus,
enskilda perifera nerver eller en diffus utbredning?  Spinala nerver, kranialnerver, både och?
2) Vad är tidsförloppet: Akut, subakut eller smygande debut. Kroniskt progressivt, eller
relapserande-remitterande förlopp?
3) Vilka symtom dominerar enligt anamnes/statusfynd: Motoriska, sensoriska eller autonoma.
4) Vad är de neurofysiologiska fynden: Demyeliniserande, axonal eller en blandad neuropati?
Påverkan på motoriska, sensoriska eller autonoma fibrer? Påverkan på grovkalibriga nervfibrer,
eller på de tunna, kutana sensoriska fibrerna (C-fibrer)?

Uppdelning av polyneuropati enligt dessa kriterier leder till en lättare identifiering av de
bakomliggande orsakerna till polyneuropatin; se Tabell 1 och även sektionen ”utredningsplan”.

Etiologi och patogenes

Ur etiologisk synvinkel delas polyneuropatier upp i de ärftliga och de förvärvade. De
polyneuropatier vars etiologi inte går att identifiera benämnes idiopatiska.

Uppdelning av polyneuropatier:

I)
Ärftliga polyneuropatier
a)   Mutationer av gener som ansvarar för bildande av perifer myelin eller axon (CMT mfl.).
b) Ärftliga sjukdomar där polyneuropati ingår som delsymtom, t.ex:
i. Rubbningar av lipidmetabolism (leukodystrofier)
ii. Mitokondriella sjukdomar
iii. Ärftlig transtyretinamyloidos (ATTRv-amyloidos) = Skelleftesjukan
iv. Spinocerebellära ataxier (SCA) och cerebellär ataxi neuropati vestibulär
areflexi syndromet (CANVAS)
v. Fragil-X associerad tremor och ataxi syndrom (FXTAS)

II)
Förvärvade polyneuropatier
a)   Systemiska sjukdomar
b)   Bristtillstånd
c)  Toxiska

d)   Infektioner

e)   Immunopatier

III)
Idiopatiska polyneuropatier

Ia) Ärftliga polyneuropatier orsakas av mutationer i myelin- eller axonkodande gener

Polyneuropati kan uppstå som resultat av en genskada, som orsakar en kvalitativ eller kvantitativ
störning i uttryck av komponenter i perifert myelin och axon. Det som kännetecknar ärftliga
polyneuropatier är att symtomen vanligen debuterar i tidiga åldrar (skolålder-tonåren), även fast
vissa ärftliga polyneuropatier kan debutera upp till 75 åå. Vidare, kan ärftliga polyneuropatier vara
associerade med fotdeformiteter (som pes cavus och hammartår), skelettdeformiteter (som skolios),
samt ibland även andra organmanifestationer såsom kardiell-, hörsel- och CNS-påverkan.
De ärftliga polyneuropatierna delas i sin tur upp i hereditär motorisk och sensorisk polyneuropati,
även kallad Charcot Marie Tooth – (CMT); ärftlig tryckkänslig neuropati (HNPP) samt hereditär
sensorisk och autonom neuropati (HSAN).  CMT som är den vanligaste formen av hereditär
neuropati, delas upp i demyeliniserande former (CMT1, CMT3= Dejerine-Sottas, CMT4 och CMT-
X), samt axonala former (CMT-2, CMT5 och CMT6). Var och en av dessa CMT-typer, har i sin tur
flera undergrupper.   Polyneuropati kan också ses som ett delfenomen i autosomalt dominanta
spinocerebellära ataxier, främst SCA 1,2,3 och 4, cerebellär ataxi neuropati vestibulär areflexi
syndromet (CANVAS) samt Fragil-X associerad Tremor och Ataxi syndrom (FXTAS).

Vid CANVAS förekommer vanligen en sensorisk axonal neuropati alt. neuronopati som den
dominerande symtom. Kronisk hosta är vanligt förekommande vid CANVAS.

Ib) Ärftliga polyneuropatier sekundärt till nedärvda metabola störningar

i.
Vid en rad inlagringssjukdomar orsakade av lysosomala eller peroxisomala
defekter, ses polyneuropati som en av manifestationerna av den metabola
rubbningen ifråga. Exempel på sådana sjukdomar är adrenomyeloneuropati,
metakromatisk leukodystrofi, Refsums-, Fabrys-, Krabbe- och Tangiers
sjukdom samt Abetalipoproteinemi. Polyneuropati kan också ingå i
symtombilden vid mitokondriella sjukdomar såsom Friedreichs ataxi
(FRA), Neuropati-Ataxi-Retinitis Pigmentosa (NARP) och mitokondriell
neurogastrointestinal encefalomyopati (MNGIE).

II) Förvärvade polyneuropatier beror på att perifera nerver under livets gång har skadats sekundärt
till andra sjukdomstillstånd i kroppen.  Förvärvade polyneuropatier uppdelas i sin tur enligt den
bakomliggande sjukdomsmekanismen. Dessa är systemiska sjukdomar, bristtillstånd, toxiska
tillstånd, infektioner och immunologiska sjukdomar.

IIa) Systemiska sjukdomar
Olika typer av förvärvade systemiska sjukdomar kan ha en skadande effekt på axon i det perifera
nervsystemet (PNS). Den vanligaste metabola orsaken till polyneuropati är diabetes mellitus. Vid
diabetes anses en hyperglykemirelaterad skada på blodkärl som försörjer perifera nerver orsaka en
ischemisk skada i axonen. Även andra mekanismer såsom störningar i nivåer av tillväxtfaktorer i
PNS har diskuteras kunna bidra till utveckling av diabetes-relaterad polyneuropati. Immunologiska
mekanismer anses spela roll hos diabetes patienter som har en snabbt progredierande motorisk
neuropati.

Ex. på övriga systemiska sjukdomar som kan utlösa polyneuropati är hematologiska sjukdomar med
paraproteinemi, uremi, paramalignitet, amyloidos, hypothyreos, critical-illness (sk. Intensivvårds-
neuropati), porfyri och akromegali.

IIb) Bristtillstånd
Vid brist på B vitaminerna Tiamin-B1, Riboflavin-B2, Niacin-B3, Pyridoxin-B6, Folacin-B9 och
Kobalamin-B12, uppstår en axonal polyneuropati där de sensoriska symtomen dominerar. Det bör
noteras att en överskott av B6 (genom kosttillskott) kan i sig leda till polyneuropati. Doser så lågt
som 200-500 mg/d har beskrivits utlösa neuropati efter en längre tids användning av Pyridoxin,
medan högre doser kan inducera neuropati inom några månader efter inlett behandling. Brist på B-
vitaminer kan uppstå vid olika malnutritions- och malabsorbtionstillstånd. Brist på B12 vitamin
uppstår framför allt hos extrema veganer, vid pernicös anemi och celiaki samt vid
alkoholöverkonsumtion, men kan även uppstå hos patienter som inte har tarmsjukdomar och som
äter en balanserad kost. En kraftigare brist även på E-vitamin som uppstår på hereditär basis
(familjär E-vitaminbrist), kan leda till polyneuropati. Brist på koppar kan inducera en ataktisk
myeloneuropati, vilket har stora likheter med B-12-brist myeloneuropatin.

IIc)  Toxiska tillstånd
Exponering för särskilda läkemedel, miljögifter inklusive alkohol, samt vissa industriella produkter
är en relativ vanlig, och oftast en förbisedd orsak till polyneuropati. Toxiska neuropatier
kännetecknas av att det oftast rör sig om en övervägande sensorisk och axonal polyneuropati med
ett stort inslag av fintrådsneuropati. Toxiska polyneuropatier debuterar under pågående exponering
för den toxiska substansen ifråga. Dock kan en försämring av symtomen ske upp till ett par månader
efter avslutad exponering , så kallad coasting fenomen. Detta sker främst vid cytostatikabehandling.

i)
Läkemedel som kan orsaka polyneuropati:
- Övervägande demyeliniserande: Amiodaron, tacrolimus, TNF- blockerande
läkemedel
- Övervägande axonal: Fenytoin, cellgifter*, disulfiram, daposon, anti-HIV medel,
isoniazid, nitrofurantoin, metronidazol, fenantoin, -interferon, pyridoxin, zinc, statiner,
L-Dopa
- Övervägande motorisk:  Amiodaron, Dapson (vid kutan behandling)
- Övervägande sensorisk: Cisplatin, metronidazol, pyridoxin, thalidomid, ciprofloxacin,
statiner, isoniazid, zinc, nitrofurantoin, anti-HIV medel, fenantoin, -interferon
- Akut debut (GBS-liknande): Amiodaron, nitrofurantoin, vinkristin
- Neuropati + myopati: Amiodarone, klorokin, kolchicin, penicillamin, vinkristin
- Neuropati + myotoni (neuromyotoni): Penicillamin, klofibrat, oxaliplatin

Neurotoxiska cellgifter*: Cisplatin, vinkristin, doxorubicin, carboplatin, oxaliplatin,
paclitaxel, docetaxal, isofosfamid och thalidomid.

ii)
Alkohol, tungmetaller och industriella lösningsmedel kan utlösa polyneuropati: Alkohol
(sensorimotorisk neuropati), akrylamid (sensorisk neuropati), arsenik (sensorisk, eller
motorisk-GBS-lik), cyanid (sensorimotorisk), tallium (övervägande sensorisk),
kvicksilver (sensorisk, motorisk eller blandad neuropati) och bly (motorisk neuropati).
Övriga ämnen som kan inducera en toxisk neuropati är organofosfater, n-hexan,
kolsvalva, nitros oxid (N2O), triortokresylfosfat (TOCP) mm.

IId)  Infektioner
Infektioner såsom HIV, Hepatit C, difteri och lepra kan utlösa polyneuropati. Vid HIV infektion,
uppträder polyneuropati dels vid serokonversion och dels i AIDS stadiet. Polyneuropati vid HIV
infektion kan vara av akut typ och likna Guillain-Barré syndrom (GBS), av kronisk inflammatorisk
demyeliniserande-, eller kronisk sensorisk axonal smärtsam typ. Den toxiska effekten av anti-HIV
medel är en bidragande faktor till utveckling av neuropati hos HIV patienter.  Den vanligaste
neuropatityp som är associerad med Hepatit C, är multipla mononeuiter. Difteri kan utlösa en GBS-
liknande neuropati. Borrelia infektion utlöser nervrotpåverkan (radikuliter), och/eller mononeuriter
såsom facialispares. Borreliainfektion kan orsaka en asymmetrisk polyradikulit, men enligt
skandinaviska studier kan den inte utlösa polyneuropati.

IIe)  Immunopatier
Perifera nerver kan utgöra måltavla för ett inflammatoriskt angrepp. Det inflammatorisk angreppet
är oftast riktad mot myelin i PNS, förutom neuropati sekundärt till vid vaskulit och
bindvävssjukdomar, där immunangreppet kan i vissa fall primärt kan vara riktade mot axonen. Vid
långdragen primär demyelinisering är det inte ovanligt med sekundära axonala skador.  Motoriska
nerver angrips hårdast, men en viss grad av sensorisk och autonom påverkan är inte ovanlig.
Det som kännetecknar immunmedierade polyneuropatier är ett akut eller subakut förlopp,
övervägande motoriska symptom (vaskulit-relaterade neuropatier undantagna då dessa kan vara rent
sensoriska), muskelsvaghet som drabbar även proximala muskelgrupper i benen, samt att symtomen
som regel svarar på immunoterapi.
Immunmedierade polyneuropatier delas upp i de akuta- respektive kroniska inflammatoriska
polyneuropatierna. Den akuta inflammatoriska demyeliniserande polyneuropatin (AIDP) som är den
vanligaste subtypen av Guillain-Barré syndrom (GBS), brukar ha ett mycket snabbt förlopp och
kunna leda till uttalade pareser av spinala och kraniala nerver, andningspåverkan samt autonom
dysfunktion. De kronisk inflammatoriska polyneuropatierna, delas upp i den kroniska
inflammatoriska demyelin-iserande polyneuropatin (CIDP), multifokal motorisk neuropati (MMN),
akuta- och kroniska autoimmuna nodopatier, polyneuropatier sekundärt till bindvävssjukdom och
systemiska vaskuliter samt neuropatier sekundärt till paraproteinemi. Övriga typer av
polyneuropatier där inflammatoriska processer anses ha en bidragande etiologisk roll är celiaki samt
paramaligna neuropatier.

III)  Idiopatiska polyneuropatier
Hos ca 25-50% av människor med polyneuropati kan man trots en omfattande utredning inte
identifiera en bakomliggande orsak. Idiopatiska polyneuropatier anses till större del bero på hittills
okända ärftliga faktorer och kroppsliga sjukdomstillstånd samt troligen inverkan av miljöfaktorer
som man ännu inte lyckats identifiera.

Förlopp

Förlopp av polyneuropati är beroende på typ av polyneuropati, dvs den etiologiska faktorn som
givit upphov till polyneuropatin. Som regel fortskrider hereditära polyneuropatier samt förvärvade
axonala neuropatier relativt långsamt under loppet av flertal år och orsakar ett begränsat handikapp.
Å andra sidan fortskrider förvärvade demyeliniserande polyneuropatier som regel relativt snabbt
under loppet av dagar – någon vecka vid GBS och panneurofascin autoimmun nodopati, eller 2-6
månader vid CIDP. Handikappsnivån vid inflammatoriska demyeliniserande polyneuropatier blir
oftast omfattande då symtombilden domineras av motoriska bortfallsymtom.`
    },
    {
      rubrik: 'Förlopp',
      text: `IId)  Infektioner
Infektioner såsom HIV, Hepatit C, difteri och lepra kan utlösa polyneuropati. Vid HIV infektion,
uppträder polyneuropati dels vid serokonversion och dels i AIDS stadiet. Polyneuropati vid HIV
infektion kan vara av akut typ och likna Guillain-Barré syndrom (GBS), av kronisk inflammatorisk
demyeliniserande-, eller kronisk sensorisk axonal smärtsam typ. Den toxiska effekten av anti-HIV
medel är en bidragande faktor till utveckling av neuropati hos HIV patienter.  Den vanligaste
neuropatityp som är associerad med Hepatit C, är multipla mononeuiter. Difteri kan utlösa en GBS-
liknande neuropati. Borrelia infektion utlöser nervrotpåverkan (radikuliter), och/eller mononeuriter
såsom facialispares. Borreliainfektion kan orsaka en asymmetrisk polyradikulit, men enligt
skandinaviska studier kan den inte utlösa polyneuropati.

IIe)  Immunopatier
Perifera nerver kan utgöra måltavla för ett inflammatoriskt angrepp. Det inflammatorisk angreppet
är oftast riktad mot myelin i PNS, förutom neuropati sekundärt till vid vaskulit och
bindvävssjukdomar, där immunangreppet kan i vissa fall primärt kan vara riktade mot axonen. Vid
långdragen primär demyelinisering är det inte ovanligt med sekundära axonala skador.  Motoriska
nerver angrips hårdast, men en viss grad av sensorisk och autonom påverkan är inte ovanlig.
Det som kännetecknar immunmedierade polyneuropatier är ett akut eller subakut förlopp,
övervägande motoriska symptom (vaskulit-relaterade neuropatier undantagna då dessa kan vara rent
sensoriska), muskelsvaghet som drabbar även proximala muskelgrupper i benen, samt att symtomen
som regel svarar på immunoterapi.
Immunmedierade polyneuropatier delas upp i de akuta- respektive kroniska inflammatoriska
polyneuropatierna. Den akuta inflammatoriska demyeliniserande polyneuropatin (AIDP) som är den
vanligaste subtypen av Guillain-Barré syndrom (GBS), brukar ha ett mycket snabbt förlopp och
kunna leda till uttalade pareser av spinala och kraniala nerver, andningspåverkan samt autonom
dysfunktion. De kronisk inflammatoriska polyneuropatierna, delas upp i den kroniska
inflammatoriska demyelin-iserande polyneuropatin (CIDP), multifokal motorisk neuropati (MMN),
akuta- och kroniska autoimmuna nodopatier, polyneuropatier sekundärt till bindvävssjukdom och
systemiska vaskuliter samt neuropatier sekundärt till paraproteinemi. Övriga typer av
polyneuropatier där inflammatoriska processer anses ha en bidragande etiologisk roll är celiaki samt
paramaligna neuropatier.

III)  Idiopatiska polyneuropatier
Hos ca 25-50% av människor med polyneuropati kan man trots en omfattande utredning inte
identifiera en bakomliggande orsak. Idiopatiska polyneuropatier anses till större del bero på hittills
okända ärftliga faktorer och kroppsliga sjukdomstillstånd samt troligen inverkan av miljöfaktorer
som man ännu inte lyckats identifiera.

Förlopp

Förlopp av polyneuropati är beroende på typ av polyneuropati, dvs den etiologiska faktorn som
givit upphov till polyneuropatin. Som regel fortskrider hereditära polyneuropatier samt förvärvade
axonala neuropatier relativt långsamt under loppet av flertal år och orsakar ett begränsat handikapp.
Å andra sidan fortskrider förvärvade demyeliniserande polyneuropatier som regel relativt snabbt
under loppet av dagar – någon vecka vid GBS och panneurofascin autoimmun nodopati, eller 2-6
månader vid CIDP. Handikappsnivån vid inflammatoriska demyeliniserande polyneuropatier blir
oftast omfattande då symtombilden domineras av motoriska bortfallsymtom.`
    },
    {
      rubrik: 'Diagnostik (anamnes, neurofysiologi, laboratorie)',
      text: `Diagnostik

Diagnostiken syftar till att a) fastställa att patientens symtom beror på polyneuropati samt b) försöka
identifiera den bakomliggande etiologiska mekanismen.

Anamnes och status
Grunden för diagnossättande är sjukhistorian och den kliniska neurologiska undersökningen. Som
regel bör diagnosen polyneuropati kunna sättas på grundval av dessa faktorer. Däremot kan det
uppstå tillfällen där symtombeskrivning i sjukhistorian talar för polyneuropati, utan att detta kan
stödjas av statusfynd (exempelvis avsaknad av reflexbortfall alternativt förekomst hyperreflexi i
benen trots omfattande symtom).  Under dessa omständigheter krävs det en neurofysiologisk
undersökning för att bekräfta att det rör sig om polyneuropati.

Neurofysiologisk undersökning
Neurofysiologisk utredning syftar i första hand till att klargöra huruvida polyneuropatin är
demyeliniserande, axonal, motorisk, sensorisk, autonom, samt om neuropatin drabbat de grov- eller
finkalibriga nervfibrerna. Som ovan nämnts, kan neurofysiologisk undersökning i andra hand även
användas för att bekräfta att patientens symtom verkligen beror på polyneuropati samt för att
utesluta en rad differentialdiagnoser till polyneuropati.
Den neurofysiologiska utredningen har en rad komponenter. Vid elektroneurografi (ENeG) kan
tecken till förlångsamning av nervledningshastigheter och/eller reduktion av amplituder av
nervaktionspotentialer bekräfta förekomst av en demyeliniserande resp. axonal polyneuropati.
Neurografin kan också avslöja om det föreligger konduktionsblockering. Komplettering av den
neurofysiologiska undersökningen med elektromyografi (EMG) är nödvändigt för att upptäcka
patologisk spontanaktivitet (fibrillationer/positiva sharp waves) och/eller neurogent bortfall som
tecken på pågående denervation resp. äldre axonala skador.  Vid misstanke på fintrådsneuropati
utförs  kvantitativa sensoriska testning (KST) för att mäta vibrations- samt värme- och köldtrösklar
i händer och fötterna.  Vid misstanke på autonom neuropati kan autonoma tester såsom mätning av
R-R intervall i EKG, sympatisk hudtest samt ortostatisk EKG alt. tilttest bidra till objektivisering av
en autonom dysfunktion.

Laboratorieundersökning
Syftet med laboratorieundersökning är att ta reda på bakomliggande etiologisk orsak till
polyneuropatin. Laboratorieunderökning kan delas upp i de basala blodproverna samt den utvidgade
utredningen. Basala blodprover som tar hänsyn till de i befolkningen vanligast förekommande
bakomliggande orsakerna till polyneuropati, bör ingå i utredning av samtliga patienter med
polyneuropati. Utvidgad utredning bör övervägas hos subgrupper av patienter med polyneuropati
där ärftliga, ovanliga metabola- och immunologiska bakomliggande faktorer misstänks föreligga (se
nedan!).

i)  Basala polyneuropatiprover

Blodstatus, SR, b-glukos och HBA1c, serum-elfores, B12, folat, plasma-
homocystein eller MMA, leverstatus, kreatinin, Na, K och TSH och fritt T4.

ii) Utvidgad utredning (se tabell 2 för detaljer!)

Lumbalpunktion (frikostigt)
Vid misstanke om inflammatorisk genes

och / eller då neurofysiologisk undersökning
visar ett inslag av demyelinisering.

Vaskulitutredning (blodprover)
Vid misstanke på inflammatorisk genes

Anti-gangliosid antikroppar i serum
S-anti-GM1 IgM antikroppar vid MMN

S-anti-GQ1b antikroppar vid MFS

S-anti-GD1b IgM antikroppar vid
CANOMAD (chronic ataxic neuropathy,
ophthalmoplegia, immunoglobulin M [IgM]
paraprotein, cold agglutinins, and disialosyl
antibodies).

S-anti-sulfatid antikroppar vid rent sensorisk
axonal eller demyeliniserande neuropati, alt
fintrådsneuropati hos patienter med IgM-
kappa paraprotein.

Anti-MAG antikroppar i serum
Vid IgM paraprotein-relaterad polyneuropati

Vascular endothelial growth factor (VEGF) i serum

Vid IgG eller IgA-lambda paraprotein och
misstanke om POEMS syndrom

Neurofascin (NF)-155, NF-186, Contactin-1 och CASPR1 antikroppar i serum
Vid misstanke om autoimmun nodopati

Celiakiutredning
Vid förekomst av malabsorbtion, anemi och
dermatitis herpetiformis plus polyneuropati,
eller oklar fintrådsneuropati.

Genetisk mutationsanalys
För CMT1a, HNPP, ATTRv amyloidos,
CANVAS, FXTAS, SCA.
Helgenomsekvensering (WGS) med filtrering

för samtliga kända neuromuskulära gener
görs genom remiss till avd för Klinisk
Genetik, Karolinska Solna (OBS! inkluderar
även duplikation/ deletion i PMP22 genen
samt RFC1 expansion- CANVAS).

Fett- resp. muskelbiopsi
Vid misstanke på amyloidos resp. vaskulit.

Nervbiopsi
Främst vid misstanke om vaskulit, alt
amyloidos trots redan genomförd utredning

Hudbiopsi
Vid stark misstanke om fintrådsneuropati
trots normal eller svårtolkad KST (termotest)`
    },
    {
      rubrik: 'Utredningsplan på neurologisk klinik – 7 kategorier',
      text: `Malignitetsutredning
Vid polyneuropati + oklar viktnedgång, eller
vid en subakut rent sensoriskt axonal
neuropati

Peroral glukosbelastning
Vid utredning av oklara fin- eller
övervägande sensoriska grovtrådsneuropatier

Metabol utredning
Vid misstanke på Fabry, SORD-neuropati,
adrenomyeloneuropati, metakromatisk
leukodystrofi, Refsums & Krabbes sjukdom
samt mitokondriell sjukdom.

Utredningsplan

a) På neurologisk klinik

Utredning av polyneuropatier försvåras av heterogeneciteten av den kliniska bilden och de
bakomliggande etiologiska faktorerna. Utredningen kan dock förenklas om man först lyckas
identifiera en rad någorlunda homogena polyneuropatimönster – eller sk. kategorier. Patienter som
har likadana kliniska symtom och förlopp anses kunna tillhöra en viss polyneuropatikategori (se
nedan samt Tabell 1), varför de kan utredas på ett relativt likartat sätt.  Uppdelning av
polyneuropatier i nedanstående 7 kategorier baseras på kliniska parametrar, dvs om polyneuropatin
övervägande är motorisk eller sensorisk, om progresstakten är snabb eller långsam samt om de
motoriska symtomen är enbart distalt utbredda i benen, eller även proximalt.

Dessa kategorier av polyneuropati är:

1) Sensorisk > motorisk, enbart distal utbredning
2) Sensorisk och motorisk, distal > proximal utbredning
3) Motorisk och sensorisk, med lika grad av distal som proximal utbredning
4) Rent motorisk
5) Rent sensorisk med areflexi i benen
6) Rent sensorisk utan areflexi i benen
7) Multipla mononeuriter

Kategori 1)
Sensorisk > motorisk symmetrisk polyneuropati med distal utbredning och mkt. långsam
progress

Klinisk bild: Debut oftast > 60 åå med en långsam progress. Symtomen som sällan brukar orsaka
något omfattande handikapp, består av parestesier distalt i fötter och underben samt ev. händerna.
Sensorisk ataxi är vanlig och svaghet och snubblighet i fötterna kan förekomma.

Vanliga statusfynd: Försvagade / bortfallna akillesreflexer, försvagade / normala patellareflexer,
nedsatt ytlig sensorik och vibrationssinne i fötterna samt en lätt – måttlig nedsättning av
fotmotoriken.

Trolig etiologi:
Axonal degeneration som är idiopatisk, hereditär, åldersrelaterad, eller sekundärt till diabetes, B-
vitaminbrist, alkohol eller toxiska faktorer.

Föreslagen utredning:
- Anamnes: Alkoholanamnes, yrkesanamnes, läkemedelsanamnes, hereditet.
- Basala blodprover
- ENeG / EMG bör göras i samtliga fall utom hos ”äldre-äldre” samt hos patienter med mycket
lindriga symtom trots många års anamnes. Om neurofysiologisk undersökning bekräftar förekomst
av en lätt-måttlig övervägande axonal sensorimotorisk polyneuropati, kan utredning avslutas efter
tagning av ”basala prover”.
- Utvidgad polyneuropatiutredning är inte indicerad.

Kategori 2)
Sensorisk och motorisk polyneuropati med distal > proximal utbredning och rel. långsam
progress

Klinisk bild: Denna polyneuropatiform är tämligen vanlig och ger ofta upphov till differential-
diagnostiska svårigheter. Debuterar oftast i medelåldern, men debut båda i barndomen, samt äldre-
vuxenåldern kan förekomma. Progresstakten kan vara allt ifrån mkt långsam till ett förlopp på 3-5
års tid. Det som framför allt skiljer denna polyneuropatikategori, från den föregående (kategori 1),
är att patienter i denna kategori når med tid en relativ omfattande handikappsnivå på grund båda av
motoriska- och sensoriska bortfallssymtom, samt ibland smärta. De ärftliga polyneuropatierna
platsar i denna kategori, där debut i barnaår eller tonåren talar oftast för hereditär motorisk och
sensorisk neuropati (CMT), även fast vissa former av hereditär neuropati kan debutera ända upp till
75 åå.

Sensoriska symtom inklusive neurogen smärta och sensorisk ataxi dominerar även här, men graden
av svaghet och muskelatrofi i benen är större än patienter tillhörande ”kategori 1”, och ibland klart
omfattande. Dessutom är det vanligt med viss påverkan på proximal muskulatur i benen. Denna
påverkan kan i vissa fall enbart vara subklinisk och behöva detekteras genom EMG-undersökning
av proximal muskulatur i benen. En tydlig asymmetri av statusfynd kan förekomma, vilket talar då
för bakomliggande vaskulit.

Vanliga statusfynd:  Areflexi i benen och ev. även i armarna, måttligt- uttalade pares och atrofi av
underben, handmuskler och ibland av lårmuskulatur. Pes cavus (höga fotvalv och hammartår) ses
främst vid CMT. En lätt-måttlig försvagning av lårmuskler kan oftast detekteras. Fascikulationer i
underben och tidvis även lårmuskler är inte ovanliga. Nedsättning av ytlig sensorik och
vibrationssinnet i benen är vanligt. Även autonom dysfunktion kan förekomma.

Troliga etiologier:
i.
Axonal degeneration med sekundär myelinskada, alt
primär demyelinisering med/utan sekundär axonal skada.
Trots att etiologin till polyneuropatier i denna kategori
oftast inte går att fastställa (vanligt med slutdiagnos
”idiopatisk neuropati”), kan man ibland med hjälp av en
utvidgad utredning identifiera en rad specifika etiolgiska
faktorer bakom denna typ av polyneuropati. Dessa
inkluderar CMT, Ärftlig transtyretinamyloidos (ATTRv-
amyloidos) = Skelleftesjukan, toxiska faktorer, systemiskt-
eller isolerad PNP-vaskulit, IgM paraproteinemi,
polyneuropati sekundärt till lymfom, samt senstadium av
CIDP där sekundär axonal degeneration överväger.

Utredning:
- Anamnes: Alkoholanamnes, yrkesanamnes, hereditet, tidig debut, fotdeformitet i ung ålder?
- Basala blodprover
- ENeG / EMG visar en måttlig-uttalad övervägande axonal, eller blandat demyeliniserande och
axonal polyneuropati med engagemang av distal, och oftast även proximal muskulatur. En rent
demyeliniserande sensorimotorisk neuropati ses vid demyeliniserande former av CMT (CMT1).
- Utvidgad utredning: Lumbalpunktion bör göras i samtliga fall, utom då ENeG /EMG visar en ren
axonal bild. Kvantitativt sensorisk mätning (KST) + autonoma tester vid autonoma symtom.
Relativt unga patienter med en snabb progress och uttalade symtom bör därefter utredas vidare.
Utredningen bör i dessa fall omfatta någon eller några av de följande undersökningarna: Vaskulit-
och paramalignitetsutredning (se kategori 5!), bukfettsbiopsi (amyloid), muskel- och ev. även
nervbiopsi (vaskulit? Amyloidos?), mutationsanalys för ATTRv-amyloidos, u-elfores och anti-
gangliosid antikroppar. Om insjuknandeåldern, kliniska bilden eller neurofysiologiska fynden
väcker misstankar om en hereditär motorisk och sensorisk neuropati, bör släktutredning samt
mutationsanalys för CMT övervägas.

*  För utredning, diagnostik och uppföljningsrutiner av patienter med ATTRv-amyloidos hänvisas till det
separata vårdprogrammet för FAP på Karolinska.

Kategori 3)
Motorisk > sensorisk polyneuropati med distal och proximal utbredning och relativt snabbt
förlopp

Klinisk bild: Debut i alla åldrar inklusive barn, med en akut- (< 4 veckor; Guillain-Barré syndrom
och panneurofascin autoimmun nodopati), eller subakut debut och progress under en 2-6 (-12)
månadersperiod (kronisk inflammatorisk demyeliniserande polyneuropati – CIDP och kronisk
autoimmun nodopati). Symtomen består av svaghet i distala, men även i proximala benmuskler
samt oftast även i underarmarna. Detta leder till gångsvårigheter, men även till svårigheter att resa

sig från sittande ställning. Muskelatrofi kan uppträda efter långvarig sjukdom. Smärtor, parestesier
och viss grad av ataxi kan förekomma i benen och i mindre grad, även i händerna.
Kranialnervpareser, inklusive bulbära symtom förekommer hos ca 50% vid GBS och hos ca 10 %
av patienter med CIDP. Autonoma symtom är relativt vanligt förekommande vid GBS, men kan
även i viss mån förekomma vid CIDP. Ytterligare ovanliga symtom beskrivna i samband med CIDP
är påverkan på diafragmal- och interkostal muskulatur med andningspåverkan som följd, samt
förekomst av finvågig tremor i armarna.
Postural och/eller cerebellär tremor samt ataxi är vanligt förekommande vid kronisk autoimmun
nodopati.

Vanliga statusfynd:  Måttligt- uttalade pareser av benmuskler, distalt och proximalt samt areflexi.
Autonoma tecken med patologisk variation av blodtryck och puls, arytmi och andningsmuskelpares
är relativt vanligt förekommande vid Guillain-Barré syndrom, men har även beskrivits vid CIDP.

Etiologi: Immunmedierad / inflammatoriskt angrepp av myelin i PNS.

Utredning:
- Anamnes: Förekomst av symtom talande för bindvävssjukdom eller andra inflammatoriska
autoimmuna sjukdomar i anamnesen, läkemedelsanamnesen, hematologisk sjukdom, malignitet.
- Basala blodprover
- ENeG / EMG: Syftet är att bekräfta att det rör sig om en övervägande demyeliniserande och
motorisk polyneuropati och där EMG bekräftar engagemang även av proximala muskler i benen.
Undantaget till den ”proximala” regeln, är IgM paraprotein-relaterad demyeliniserande neuropati
som kan engagera enbart distala delar av extremiteterna.
- Utvidgad utredning:
Lumbalpunktion i samtliga fall.
Imaging: ultraljud av perifera nerver alt MRT med kontrast av spinala nervrötter kan övervägas vid
CIDP misstanke där neurofysiologiska bilden inte är typisk.
Nervultraljud för att påvisa segmentell hypertrofi i perifera nerver kan användas i
svårdiagnostiserade fall.

Antikroppsanalyser:
--MAG-antikroppar i serum (Karolinska) vid förekomst av IgM paraprotein. Vid typisk fenotyp och
förekomst av IgM paraprotein (se sid 9), även anti-gangliosid (GD1b) antikroppar (Karolinska).
--Nodala serum antikroppar NF-155, NF-186, CNTN1 och CASPR1 vid autoimmun nodopati
(Karolinska).
--S-VEGF vid misstanke om POEMS (Kemlab Sahlgrenska).
--Vaskulitutredning bör göras enbart om anamnesen väcker misstankar om systemisk vaskulit, eller
som symtomen är klart asymmetriska.  Nervbiopsi är inte indicerad då den har en låg sensitivitet för
diagnostisering av CIDP.

Kategori 4)
Rent motorisk polyneuropati

Klinisk bild: Denna kategori består av patienter med övervägande motoriska symtom och som
neurofysiologiskt har engagemang enbart av motoriska nerver, dvs multifokal motorisk neuropati
(MMN). Debut >30 åå, med en subakut eller långsamt tilltagande förlopp. Symtomen består av
svaghet (som oftast är asymmetrisk) och startar vanligen först distalt. Hos 80% av patienterna börjar
svagheten distalt i ena armen, hos 5% av börjar svagheten proximalt och hos 10% börjar symtomen

först i benen. Ca 20% av patienterna upplever även lättare subjektiva sensoriska symtom, utan att ha
engagemang av sensoriska nerver på ENeG.

Vanliga statusfynd:  Måttligt- uttalade pareser samt normala, försvagade eller lätt livliga
senreflexer. Undantagsvis förekommer det även bulbär påverkan, inklusive tungatrofi eller
diafragmapares pga påverkan på n. phrenicus, med respiratorisk insufficiens som följd. Med tiden
ses även muskelatrofi och fascikulationer, men dessa symtom brukar saknas under den första tiden
trots en uttalad paresgrad.

Etiologi: Immunmedierat / inflammatoriskt angrepp av myelin på motoriska nerver i PNS.

Utredning:
- Basala prover
- ENeG / EMG: Syftet är att bekräfta att det rör sig om en rent motorisk demyeliniserande
polyneuropati med eller utan konduktionsblockering, vilket skulle tyda på MMN och utesluta
motorneuronsjukdom (progressiv spinal muskelatrofi-PSMA). Axonal påverkan med neurogent
bortfall och akuta denervationstecken brukar kunna ses i mer framskridna stadier av MMN.
Neurofysiologisk utredning krävs dessutom för att utesluta motorneuronsjukdom. Vid svårigheter
att neurofysiologiskt skilja mellan en avancerad MMN med sekundära axonala skador från PSMA
kan nervultraljud vara av värde.
- Imaging: MR av plexus brakioradialis och cervikala nervrötter med kontrast kan användas för att
påvisa nervhypertrofi och kontrastuppladdning i proximala nervsegment ifall det neurofysiologiska
svaret inte är konklusivt.
Nervultraljud för att påvisa segmentell hypertrofi i perifera nerver kan användas i
svårdiagnostiserade fall.
- Utvidgade prover: Lumbalpunktion. Vid klassisk MMN förekommer ingen albuminstegring i
likvor. Patologiskt stegrat likvoralbumin talar snarare för en övervägande motorisk CIDP. Anti-
gangliosid antikroppar i serum skickas till kemlab Karolinska (ca 40-80% av patienter med MMN
har förhöjning av anti-GM1 IgM antikroppar i serum).

Kategori 5)
Rent sensoriskt polyneuropati med areflexi i benen

Klinisk bild: Debut i alla åldrar, med en subakut eller långsamt tilltagande förlopp. Symtomen
består av parestesier och hypoestesi distalt i benen och armarna, och tidvis även proximalt, över
bålen och ansiktet.  Sensorisk ataxi är mycket vanlig och kan vara uttalad. Motoriska symtom
saknas.  Vid subakut debut av sensorisk ataxi och samtidig förekomst av oftalmoplegi, bör Miller-
Fisher Syndrom (MFS) misstänkas.

Vanliga statusfynd:  Måttligt- uttalat nedsatt ytlig sensorik och vibrationssinne i benen och
händerna, dysmetri samt areflexi i benen och oftast även i armarna.

Etiologi: Axonal degeneration i grova sensoriska nervfibrer inklusive proprioceptiva banor, eller i
dorsalroots ganglier (neuronopati). Bakomliggande orsaker är oftast bindvävssjukdom (oftast
Sjögren) eller paramalignitet, men därnäst hereditär främst Cerebellär Ataxi, Neuronopati,
Vestibulär Areflexi Syndrom (CANVAS), men även HSAN typ 1-III. Idiopatisk orsak är inte
ovanlig.

Utredning:
- Anamnes: Förekomst av symtom talande för bindvävssjukdom i anamnesen, symtom talande för
lung-, bröst-, gyn-, testis- eller koloncancer?
- Basala labprover
- ENeG / EMG: För att bekräfta att det rör sig om en rent sensorisk axonal neuropati, eller
neuronopati.
- Utvidgad utredning:
      A] Vid subakut debut (vaskulit / paraneoplasi)
     Vaskulitutredning: CCP, ANA, SS-A/SS-B, ANCA. Komplementbestämning i blod (kemlab).
     Kryoglobulinbestämning (kemlab). B-celler (diff). Virusserologi (Hepatit C, HIV).
     Ev. tårvätske- och salivmätning, läppslemhinnebiopsi (Sjögren?).
     Vid samtidig förekomst av IgM-paraprotein, ta anti-sulfatid antikroppar i serum (Karolinska).
     Malignitetsutredning:
     Paraneoplastiska anikroppar i blod och ev CSF. DT (alt PET-DT) thorax och DT buk
     (malignitet, lymfom?), mammografi, gynundersökning, u-ljud testis.
     Tumörmarkörer i blod CEA (colon), CA-125 (ovarial), CA-19-9 (pancreas, colon). F-Hb.
     Paraneoplastiska antikroppar, främst anti-Hu, Ri, CV2, Ma2/Ta, CASPR2 eller LGI1-ak.
     Vid samtidig oftalmoplegi, ta även GQ1b antikroppar i serum för Miller-Fisher Syndrom (beställ
     gangliosid antikroppsprov på kemlab Karolinska).
     Muskel- och ev. nervbiopsi med frågeställning vaskulit.

B] Vid kronisk långsam progress
Överväg helgenomsekvensering av gener som ingår i HSAN, i samråd med neuromuskulärt inriktad
kollega.
Vid förekomst av kronisk hosta, cerebellär atrofi eller vestibular dysfunktion (patol HIT) överväg
riktad sekvensering av RFC1 genen (CANVAS).

Kategori 6)
Rent sensorisk polyneuropati utan areflexi i benen- dvs. fintrådsneuropati

Klinisk bild: Debut i alla åldrar, med ett subakut eller långsamt tilltagande förlopp. En subakut
debut brukar kunna vara associerad med en inflammatorisk genes. Vanligaste symtom är konstanta
brännande/ huggande smärta (visst inslag av molande smärta kan även förekomma), symmetriskt
distalt i benen och armarna. Spontan köld- och värmekänsla kan kännas i fötterna. Attacker då
distala extremiteter blir röda, heta, svullna och värker (erytromelalgi), och där dessa symtom
förbättras av kyla, kan utgöra en ovanlig manifestation av fintrådsneuropati. Andra ovanliga
manifestationer av fintrådsneuropati är en fläckvis fördelning av dysestesi över hela kroppen,
inklusive ansiktet och hårbotten, samt brännande smärtor i munhålan (Burning Mouth Syndrome).
Om även parestesier, allodyni, eller påverkan på vibrationssinnet förekommer, bör ett samtidigt
engagemang av grovkalibriga sensoriska fibrer misstänkas. Ataxi och motoriska symtom saknas vid
fintrådsneuropati, men autonoma symtom är relativt vanliga.

Vanliga statusfynd: Neurologiskt status är väsentligen normal förutom nedsatt ytlig sensorik,
hyperestesi och ibland allodyni i fötter och händerna. Akillesreflexen är normal, eller lätt försvagad.
Asympatikoton ortostatism, vid autonom dysfunktion.

Trolig etiologi: Degeneration av de småkalibriga kutana sensoriska och autonoma C fibrerna. I de
flesta fall är fintrådsneuropatin idiopatisk. Identifierbara orsaker är metabola störningar såsom
nedsatt glukostolerans, diabetes mellitus, alkohol överkonsumtion, Fabry och Tangier sjd;

hereditära orsaker (HSAN I, IV-VI) och ATTRv-amyloidos; samt immunologiska (Sjögrens
syndrom, SLE, vaskulit, amyloidos och celiaki).

Utredning:
- Anamnes: Hereditet? Norrländsk-/Västerbottensk påbrå (ATTRv-amyloidos)? Alkohol- och
läkemedelsanamnes? förekomst av autonoma symtom? multiorgansymtom?
malabsorbtionssymtom?
- Basala prover, plus alkoholmarkören PeTH.
- ENeG och kvantitativ sensorisk testning (KST) i syfte till att bekräfta att det rör sig om en
fintrådsneuropati. Autonoma tester bör övervägas eftersom många fintrådsneuropatier är
associerade med autonom dysfunktion. Kombinationen normala resultat på ENeG och förhöjda
trösklar för värme och kyla i händer och fötterna talar för fintrådsneuropati. Sensitivitet av KST för
detektion av fintrådsneuropati är ca 70-80%, varför man i oklara fall med negativa eller svårtolkade
resultat av KST får gå vidare med hudbiopsi för en kvantitativ mätning av intradermal
nervfiberdensitet (denna metod är numera tillgänglig på Neurofysiologen Karolinska Huddinge).
- Utvidgad utredning: Någon eller några av följande undersökningar bör genomföras:
celiakiutredning (transglutaminas antikroppar, ev duodenal slemhinnebiopsi), Bukfettsbiopsi
(amyloidos), Sjögren / vaskulit utredning (se kategori 5!), alfa-galaktosidas koncentration i serum
vid misstanke om Fabrys sjd* hos män (remiss CMMS) och för plasma lyso-gb till Mölndal,
alternativt DNA analys vid Fabry-misstanke hos kvinnor; blodfettstatus (Tangiers sjd),
släktutredning (för HSAN) och ev. DNA-diagnostik för ATTRv-amyloidos.

*  För utredning, diagnostik och uppföljningsrutiner av patienter med ATTRv-amyloidos hänvisas till det
separata vårdprogrammet för ATTRv-amyloidos på Karolinska.

* Utredning för Fabrys sjukdom ska göras vid anamnes på neuropatisk smärta i händer och eller fötter med
antingen debut i barndom/tonår eller ett förlopp med pågående smärta som tydligt försämras i samband med
feber, fysisk aktivitet eller båda. Man får också överväga att utreda för Fabrys sjukdom om det finns annan
typisk organpåverkan såsom hjärta, njure, hud och hjärna.

Kategori 7)
Multipla mononeuriter

Klinisk bild: Debut i alla åldrar med ett akut, subakut eller långsamt förlopp. Symtomen består av
parestesier, neuralgisk smärta och lätt-måttlig svaghet i utbredning av 2-3 st. enskilda perifera
nerver oftast i armarna. Oftast är distributionen av symtom påtagligt asymmetrisk.

Vanliga statusfynd:  Karpaltunnelsyndrom, ulnarispares, radialispares, peroneuspares eller
kranialnervpareser. Hypo-/areflexi ses i den drabbade extremiteten.

Trolig etiologi:
A] Axonal skada sekundärt till bindvävssjukdom, vaskulit, Hepatit C infektion med
kryoglobulinemi samt diabetes
B] Myelinskada på inflammatorisk (CIDP varianten MADSAM) eller hereditär basis (hereditär
tryckkänslig neuropati-HNPP).

Utredning:
- Anamnes på bindvävssjukdom, hereditet?
- Basala blodprover

- ENeG / EMG med syfte till att bekräfta att det rör sig om multipla mononeuriter, en asymmetrisk
sensorimotorisk axonal-, eller demyeliniserande polyneuropati.
-Utvidgad utredning: LP; vaskulitutredning (se kategori 5!), ev mutationsanalys för HNPP, muskel-
och ev. även nervbiopsi (vaskulit?). Nervultraljud i vissa fall för att differentiera HNPP från
MADSAM.

Tabell 1. Sammanställning av neuropatikategorier med hänsyn till kliniska och neurofys-
iologiska parametrar

   PNP
Kategori
Vanligaste
orsak
Förlopp -
progress
Sens /
Motor/
Autonom
Utbredning Neurofysiologiska
fynd

Idiopatisk
 Mycket
långsamt
Sens >> Motor
Distal
Lätt axonal

Varierande:
Systemiska sjd /
CMT mm

Långsamt
Sens ≥  Motor;
ev autonom
Distal
>>Prox
Axonal eller
Axonal + demylin.
(Ren Demyelin.)
Immunologisk
GBS / CIDP /
Autoimmun
nodopati
   Akut
 Subakut
(långsamt)
Motor ≥ Sens,
ev autonom
Distal ≥ Prox
Demyelin. eller
Demyelin. + axonal

Immunologisk
MMN
 Subakut
Långsamt
Motor
Distal > Prox
Demyelin. eller
Demyelin. + axonal

Bindvävs sjd /
Paramalign.
 Subakut
Långsamt
Sens
Distal > Prox
Axonal

Idiopatisk
Fintrådsneurop.

Subakut
Långsamt
Sens, ev
autonom
Distal
Fintrådspåverkan

Vaskulit
Mononeuritis
Multiplex, HNPP
  Akut
 Subakut
Långsamt
Sens ≥  Motor
Distal
Axonal eller
Axonal + demylin.

Tid för debut av symtom till maximal-symtomnivå:  =Akut:  < 4 veckor;  =Subakut: ca 2 månader- 1 år (3 år);              -
Långsamt: ca 3-5 år;  =Mycket långsamt:  ca 6-15 år`
    },
    {
      rubrik: 'Utredningsplan inom primärvården',
      text: `b) Utredningsplan inom primärvården

Syfte med polyneuropatiutredning i primärvården föreslås vara: a) Verifiering att patientens
symtom beror på en polyneuropati, b) försök till identifiering av etiologisk orsak till polyneuropatin
för att man skall kunna erbjuda en specifik behandling samt c) identifiering av polyneuropatifall
som bör remitteras vidare till neurologisk klinik för fortsatt utredning.

Patienter som bör färdigutredas på primärvårdsnivå och inte remitteras vidare
Som regel skall patienter med en långsamt progressiv distalt symmetrisk polyneuropati där
sensoriska symtom överväger (dvs kategori 1), färdighandläggas inom primärvården. Detta gäller
majoriteten av polyneuropati-patienter som påträffas inom primärvården. Utredningen föreslås bestå
av basala blodproverna oavsett ålder samt ENeG /EMG för alla, utom hos äldre patienter som har
lindriga symtom trots en långvarig anamnes.

Patienter som bör remitteras vidare till neurologisk klinik är de som tillhör kategorierna 2-7. Dessa
patienter kännetecknas av följande:
a) Ung debutålder, med eller utan känd hereditet för neuropati
b) Övervägande motoriska symtom enligt anamnes eller status hos patienter ca < 85 åå
c) Ren sensoriska symtom enligt anamnes/status och helst även neurofysiologisk undersökning
hos patienter ca < 85 åå
d) Multipla mononeuriter
d)   Snabb progress av symtom

Differentialdiagnostisk utredning på neurologisk klinik

Den differentialdiagnostiska utredningen inriktas främst mot uteslutandet av behandlingsbara
åkommor som i vissa fall kan härma polyneuropati. De viktigaste av dessa är:

Lumbal spinal stenos: Bör uteslutas om symtomen förekommer enbart i benen trots en tids sjukdom
eller om pseudoclaudicatiosymtom förekommer.

Cervikal och lumbal spondylos: Spondylos orsakar en mekanisk kompression av nervrötter och kan
medföra sensoriska och motoriska symtom i extremiteterna, med viss radikulerande karaktär.
Diagnosen kan ställas med hjälp av MRT undersökning av ryggen och ibland även med hjälp av
neurofysiologisk underökning.

Neuroborrelios. Bör misstänkas om radikulerande smärtor, svaghet eller parestesier från
ryggområde ut i extremiteterna förekommer. Utredningen innefattar likvorundersökning med
celltal, äggviteinnehåll och borreliaserologi.

Restless legs syndrom: Vid idiopatisk RLS är neurologisk status i benen normal. Det bör noteras att
många patienter med idiopatiskt axonala polyneuropatier eller hereditär motoriska och sensoriska
polyneuropatier (främst CMT- II) upplever en viss förbättring av parestesier i benen vid gång och
vid fysisk aktivitet. Dock, till skillnad från patienter med idiopatisk RLS, brukar dessa
polyneuropatipatienter inte uppleva en total lindring av parestesierna när de är i rörlighet.
Polyneuropatipatienter med sekundär RLS kan ändå svara partiellt på sedvanlig farmakologisk RLS
behandling!`
    },
    {
      rubrik: 'Differentialdiagnostik',
      text: `b) Utredningsplan inom primärvården

Syfte med polyneuropatiutredning i primärvården föreslås vara: a) Verifiering att patientens
symtom beror på en polyneuropati, b) försök till identifiering av etiologisk orsak till polyneuropatin
för att man skall kunna erbjuda en specifik behandling samt c) identifiering av polyneuropatifall
som bör remitteras vidare till neurologisk klinik för fortsatt utredning.

Patienter som bör färdigutredas på primärvårdsnivå och inte remitteras vidare
Som regel skall patienter med en långsamt progressiv distalt symmetrisk polyneuropati där
sensoriska symtom överväger (dvs kategori 1), färdighandläggas inom primärvården. Detta gäller
majoriteten av polyneuropati-patienter som påträffas inom primärvården. Utredningen föreslås bestå
av basala blodproverna oavsett ålder samt ENeG /EMG för alla, utom hos äldre patienter som har
lindriga symtom trots en långvarig anamnes.

Patienter som bör remitteras vidare till neurologisk klinik är de som tillhör kategorierna 2-7. Dessa
patienter kännetecknas av följande:
a) Ung debutålder, med eller utan känd hereditet för neuropati
b) Övervägande motoriska symtom enligt anamnes eller status hos patienter ca < 85 åå
c) Ren sensoriska symtom enligt anamnes/status och helst även neurofysiologisk undersökning
hos patienter ca < 85 åå
d) Multipla mononeuriter
d)   Snabb progress av symtom

Differentialdiagnostisk utredning på neurologisk klinik

Den differentialdiagnostiska utredningen inriktas främst mot uteslutandet av behandlingsbara
åkommor som i vissa fall kan härma polyneuropati. De viktigaste av dessa är:

Lumbal spinal stenos: Bör uteslutas om symtomen förekommer enbart i benen trots en tids sjukdom
eller om pseudoclaudicatiosymtom förekommer.

Cervikal och lumbal spondylos: Spondylos orsakar en mekanisk kompression av nervrötter och kan
medföra sensoriska och motoriska symtom i extremiteterna, med viss radikulerande karaktär.
Diagnosen kan ställas med hjälp av MRT undersökning av ryggen och ibland även med hjälp av
neurofysiologisk underökning.

Neuroborrelios. Bör misstänkas om radikulerande smärtor, svaghet eller parestesier från
ryggområde ut i extremiteterna förekommer. Utredningen innefattar likvorundersökning med
celltal, äggviteinnehåll och borreliaserologi.

Restless legs syndrom: Vid idiopatisk RLS är neurologisk status i benen normal. Det bör noteras att
många patienter med idiopatiskt axonala polyneuropatier eller hereditär motoriska och sensoriska
polyneuropatier (främst CMT- II) upplever en viss förbättring av parestesier i benen vid gång och
vid fysisk aktivitet. Dock, till skillnad från patienter med idiopatisk RLS, brukar dessa
polyneuropatipatienter inte uppleva en total lindring av parestesierna när de är i rörlighet.
Polyneuropatipatienter med sekundär RLS kan ändå svara partiellt på sedvanlig farmakologisk RLS
behandling!

Motorneuronsjukdom: Behöver uteslutas vid rent motoriska symtom med muskelatrofi och
fascikulationer. Neurofysiologisk utredning är i de flesta fall adekvat för att differentiera multifokal
motorisk neuropati från motorneuronsjukdom.

Multipel skleros (MS): Bör uteslutas vid asymmetriskt utbredd känselrubbning och motoriskt
nedsättning i extremiteterna. Vid polyneuropati till skillnad från MS, förekommer inga cerebralt
utösta symtom eller pyramidbanefynd i status. Likvorundersökning med analys av celltal och
elektrofores samt MRI undersökning av hjärnan och ryggmärgen får användas i oklara fall för att
differentiera polyneuropati från MS.

Ryggmärgspåverkan (myelopati): Bör uteslutas om den kliniska bilden domineras av sensoriska
symtom i benen och ataxi. Förekomst av pyramidbanetecken i status talar då för att symtomen beror
på myelopati och inte polyneuropati. En ren sensorisk myelopati kan förekomma vid exempelvis
neurolues. MRT undersökning av ryggen och neurofysiologisk utredning (ENeG, EMG och sensory
Evoked Potentials-SEP), kan i oklara fall hjälpa till med differentiering av myelopati från
polyneuropati.

Funktionella/psykogena tillstånd: Patienter med depression, ångesttillstånd eller
konversionssyndrom kan uppleva stickningar och brännande smärtor fläckvis i hela kroppen. Dessa
symtom har en viss migrerande karaktär och fluktuerar i intensitet från dag till dag, till skillnad från
sensoriska symtom vid polyneuropati. Avsaknad av den typiska distalt symmetriska utbredningen,
och förekomst av normala statusfynd hjälper med differentiering av funktionella symtom från
polyneuropati.

Specifik behandling

Vid en rad förvärvade polyneuropatier samt enstaka hereditära polyneuropatier kan specifik
behandling erbjudas.

a) Hereditära polyneuropatier

-
Hereditär transtyretin amyloidos (ATTRv-amyloidos) sekundärt till Val30Met mutation.
Numera behandlingsbar med orala transtyretinstabiliserare samt genterapi. För detaljer se fö
vårdprogram om ATTRv-amyloidos (FAP) på Karolinska.

-
Hereditära metabola syndrom:
         Kost- eller enzymterapi kan erbjudas i vissa fall (ex. Fabrys sjd).

b) Systemiska sjukdomar

            Föreslagen behandling

  - Diabetes mellitus:
Optimal metabol reglering av blodsockret

Pankreastransplantation i de extrema fall
  - Uremi

Njurtransplantation (OBS! Neuropatin brukar progrediera trots dialys)
  - Hypothyreos
Hormonterapi
  - Celiaki

Glutenfri kost, ev immunomodulerande behandling

c)  Bristtillstånd
Vitaminersättning`
    },
    {
      rubrik: 'Specifik behandling',
      text: `Motorneuronsjukdom: Behöver uteslutas vid rent motoriska symtom med muskelatrofi och
fascikulationer. Neurofysiologisk utredning är i de flesta fall adekvat för att differentiera multifokal
motorisk neuropati från motorneuronsjukdom.

Multipel skleros (MS): Bör uteslutas vid asymmetriskt utbredd känselrubbning och motoriskt
nedsättning i extremiteterna. Vid polyneuropati till skillnad från MS, förekommer inga cerebralt
utösta symtom eller pyramidbanefynd i status. Likvorundersökning med analys av celltal och
elektrofores samt MRI undersökning av hjärnan och ryggmärgen får användas i oklara fall för att
differentiera polyneuropati från MS.

Ryggmärgspåverkan (myelopati): Bör uteslutas om den kliniska bilden domineras av sensoriska
symtom i benen och ataxi. Förekomst av pyramidbanetecken i status talar då för att symtomen beror
på myelopati och inte polyneuropati. En ren sensorisk myelopati kan förekomma vid exempelvis
neurolues. MRT undersökning av ryggen och neurofysiologisk utredning (ENeG, EMG och sensory
Evoked Potentials-SEP), kan i oklara fall hjälpa till med differentiering av myelopati från
polyneuropati.

Funktionella/psykogena tillstånd: Patienter med depression, ångesttillstånd eller
konversionssyndrom kan uppleva stickningar och brännande smärtor fläckvis i hela kroppen. Dessa
symtom har en viss migrerande karaktär och fluktuerar i intensitet från dag till dag, till skillnad från
sensoriska symtom vid polyneuropati. Avsaknad av den typiska distalt symmetriska utbredningen,
och förekomst av normala statusfynd hjälper med differentiering av funktionella symtom från
polyneuropati.

Specifik behandling

Vid en rad förvärvade polyneuropatier samt enstaka hereditära polyneuropatier kan specifik
behandling erbjudas.

a) Hereditära polyneuropatier

-
Hereditär transtyretin amyloidos (ATTRv-amyloidos) sekundärt till Val30Met mutation.
Numera behandlingsbar med orala transtyretinstabiliserare samt genterapi. För detaljer se fö
vårdprogram om ATTRv-amyloidos (FAP) på Karolinska.

-
Hereditära metabola syndrom:
         Kost- eller enzymterapi kan erbjudas i vissa fall (ex. Fabrys sjd).

b) Systemiska sjukdomar

            Föreslagen behandling

  - Diabetes mellitus:
Optimal metabol reglering av blodsockret

Pankreastransplantation i de extrema fall
  - Uremi

Njurtransplantation (OBS! Neuropatin brukar progrediera trots dialys)
  - Hypothyreos
Hormonterapi
  - Celiaki

Glutenfri kost, ev immunomodulerande behandling

c)  Bristtillstånd
Vitaminersättning`
    },
    {
      rubrik: 'Symtomatisk behandling (neurogen smärta, kramper, balans)',
      text: `d)  Toxiska
Eliminering av den skyldiga substansen, eller läkemedlet ifråga
e)  Virala infektioner          Anti-viral behandling, notera dock att dessa farmaka (ffa mot HIV) kan
ibland själva utlösa en toxisk neuropati.
f)  Immunmopatier
Immunoterapi med kortison, högdos intravenös immunoglobulin
(IVIg), plasmaferes, diverse cellgifter eller autolog hematopoietisk
stamcells transplantation (HSCT). Vid autoimmun nodopati används
rituximab företrädesvis.
g) Paramalignitet
En effektiv behandling av primärtumören till skillnad från immunterapi,
kan leda till förbättring av den paramaligna polyneuropatin.

Symtomatisk behandling

Avsaknaden av effektiv specifik behandling hos många patienter med polyneuropati ökar kraven på
ett effektivt utnyttjande av tillgängliga symtomatiska behandlingsalternativ. De symtom som i
varierande utsträckning är åtkomliga för behandling är:

Hereditära polyneuropatier: Ingen specifik behandling kan erbjudas. Däremot erbjuds
patienterna lämpliga ortoser och förflyttnings- hjälpmedel för att förbättra rörlighet. Vid HNPP kan
i förekommande fall karpaltunnelkirurgi, eller ulnarisneurolys övervägas för att avlasta
komprimerade perifera nerver. Genetisk information erbjuds alla patienter med verifierad mutation.

Neurogen smärta

I.  Antidepressiva läkemedel

   a) TCA - Tricykliska anti-depressiva:
Amitriptylin  (Saroten®) och Nortriptylin (Sensaval®) är TCA som hämmar återupptag av
noradrenalin och serotonin, blockerar Na+ kanaler samt har även en antikolinergisk effekt. Startdos
10-20 mg till natten. Dosen kan vid behov successivt trappas upp till 75-100 mg/dag, uppdelad på
1-2 dostillfällen. De vanligaste biverkningarna är trötthet, muntorrhet, förstoppning samt
urinstämma hos patienter med prostata förstoring. Hos äldre patienter, bör lägre doser användas pga
risk för kardiovaskulär påverkan samt förvirring. Nortriptylin anses vara något lättare att tåla än
Amitriptylin då den är mer selektiv och har mindre antikolinergisk verkan.

   b) SNRI - Serotonin-Noradrenalin återupptagshämmare:
Venlafaxin (Efexor /Efexor depot) och Duloxetin (Cymbalata®): Antidepressiva preparat som
hämmar återupptagning av serotonin och noradrenalin. Dessa preparat har en moderat effekt vid
behandling av neuropatismärta.  Venlafaxinets effekt vid behandling av neuropatismärta anses vara
något mildare jmf. TCA. Duloxetinets effekt mot smärtor i diabetesrelaterad neuropati är i nivå med
amitriptylin, men Duloxetin anses ha en lägre kardiovaskulär biverkningsrisk och kan lämpa sig för
behandling av patienter med kardiell sjukdom.
Venlafaxin doseras 75 mg per dag tagen som endos (depot). Upptrappning till 225 mg/d eller högre
får övervägas vid behov. Risk för CNS biverkningar minskas om depotförberedningen av Efexor
används. Duloxetin doseras 30-60 mg x1. Doser högre än 60 mg har inte visat sig ha en bättre effekt
än 60 mg mot neuropatismärta.   Vanliga biverkningar vid behandling med Venlafaxin är hypertoni
samt viktpåverkan. Duloxetin bör undvikas hos patienter med leversjukdom, eller som har risk för

utveckling av leverpåverkan (ex misstanke om etylöverkonsumtion, eller vid samtidig användning
av andra läkemedel som kan tänkas belasta levern).

II.  Antiepileptiska läkemedel (AED)

a)  Gabapentin (Gabapentin®): Anti-epileptiskt preparat med GABA-stimulerande verkan. Bör
trappas upp till höga doser för optimal effekt. Effekt märks inte sällan först då man kommit upp i
1800 mg/dag, men vissa patienter kräver doser upp till 3600 mg/dag uppdelade i tre-fyra
dostillfällen för att uppleva effekt. Är tämligen biverkningsfattig, men vissa patienter upplever
trötthet samt viktuppgång. Saknar interaktionsrisk med andra läkemedel.

b)  Pregabalin (Lyrica®): Verkningsmekanism som liknar gabapentinets, och med en ungefärlig
liknande analgestisk effekt, men vissa patienter kan svara bättre på pregabalin än gabapentin.
Biverkningarna består främst av trötthet och ataxi. Startdosen rekommenderas vara 50-75 mg x1
med långsam upptrappning. Bör trappas upp till minst 150 mg uppdelad på 1-2 dostillfällen, och
som max till 300 (-600) mg /d uppdelade på 2-3 dostillfällen. Doser understigande 150 mg/d har
inte visat sig ha någon större lindrande effekt mot neuropatismärta.

c)   Karbamazepin (Tegretol retard®): Karbamazepin har kemisk släktskap med tricykliska anti-
depressiva medel och tros utöva sin analgetiska effekt genom blockering av presynaptiska
spänningsberoende Na+ kanaler, vilket leder till en synaptisk blockering. Upptrappningsförfarande
till måldos på 400-600mg / dag uppdelad på två dostillfällen. Tegretolets användning begränsas ofta
av biverkningar såsom trötthet, allergiska reaktioner samt potential för interaktion med andra
läkemedel.

d) Övriga AED: Topiramat är en AED vars analgetiska verkningsmekanism är något oklar, men tros
utgöras av preparatets GABA-stimulerande och anti-glutaminerga effekt. Topiramat i dygnsdosen
100 mg har visar sig vara effektiv vid behandling av diabetes-relaterad smärtsam neuropati. Dosen
behöver trappas upp mycket långsamt. Användning av Topiramat begränsas av dess höga
biverkningsrisk (främst trötthet och talpåverkan). Lamotrigin är ytterligare en AED som har visat
sig vara effektiv vid smärtsam diabetes-relaterad neuropati. Inte heller är den analgetiska
verkningsmekanismen för Lamotrigin känd, men i viss mån tros denna verkan medieras via
preparatets förmåga att hämma spänningsberoende Na+ kanaler i neuronala cellmembran.
Lamotrigin får användas i dygnsdosen 200-400mg och brukar tålas väl, förutom huvudvärk och
tidvis även insomningssvårigheter.

III. Opiatanaloger och opiater

a) Opiater: Effekt av opioider har bekräftats i nya studier mot post-herpetisk neuralgi samt
smärtsam diabetesneuropati. Behandling bör helst erbjudas i form av depotpreparat (T.
Dolcontin, T. Oxycontin, Palexia depot, Norspan plåster), eller Metadon. Risk för
beroendeutveckling bör beaktas.

b) Tramadol retard (Tradolan retard ®): Opiatanalog som kan vara effektiv mot neuralgisk
smärta. Förutom att fungera som en opiatanalog, är tramadol en återupptagshämmare av
noradrenalin och serotonin. Tramadol bör helst användas i retardform för att minimera
toleransutvecklingen. Startdosen är 100 mg Tradolan retard x 1-2, med upptrappning vid
behov till 400 mg/dag uppdelade på två dostillfällen. Den vanligaste biverkan är fysisk eller
mental trötthet. OBS! Behäftad med en stor tillvänjningsrisk.

IV. Lokala medel för kutan bruk

a) Capsaisin (Qutensa®, Capsina®): Ger en lättare lindring av hyperestesi, men kan ibland ge en
övergående sveda strax efter applicering på huden. Salvans måste användas 3-4 gånger per dag
för att vara effektiv. Latens med ca 2 veckor till behandlingseffekt har beskrivits vid
regelbunden användning.  Användning av Capsina kräm begränsas av behov av behandling av
stora kroppsytor, samt av en övergående sveda som kan vara besvärande för patienter som
redan har smärta.

  b)  Lidokain lokalt (Versatis®), eller Xylocain (Xylocain®). Applicering av lokalanestetika på
huden har visat sig vara effektiv för behandling av allodyni och även övrig neuropatismärta.
Användning av Emla kräm begränsas av behov av behandling av stora kroppsytor.

Ovanstående preparat bör användas i följande prioritetsordning vid behandling av neuropatismärta.
Dessa evidensbaserade rekommendationer baseras på European Federation of Neurological Society
(EFNS) rekommendationer om behandling av neuropatisk smärta (Eur J Neurol., 2010):

Förstahandsmedel: TCA, gabapentin, pregabalin, duloxetin, venlaflaxin
Andrahandsmedel: Opiater (depot beredning). Ev Tramadol retard
Sistahandsmedel:   Karbamazepin, fenantoin, topiramat, capsina plåster, lidokain plåster, mexiletin
(antiarrytmikum på licens).

Patienter som inte svarar på ovannämnda farmakologiska smärtbehandlingar bör bli föremål för
bedömning på smärtkliniken, avseende lämplighet till behandling med baksträngsstimulator eller
intrathekal morfin.

Muskelkramper
Vid smärtsamma muskelkramper prövas i allmänhet benzodiazepiner, i särklass om kramperna
dominerar nattetid. Stesolid® i dosen 2.5 – 5 mg till natten kan användas med en god effekt.
Magnesium (Emgesan® ) i dosen 250 mg 1x1-2 dagligen. Alternativt kan låg dos nortriptylin eller
amitriptylin till natten också vara effektiv. Ett alternativ som kan prövas är Kinin® i måttliga (100
mg) dygnsdoser, alt T. Mexiletin (NaMuscla) 1x2 Risk för trombocytopeni bör dock beaktas vid
användning av Kinin och förlängning av QT-tiden vid användning av Mexiletin och Kinin.

Restless legs-liknande symtom
Sedvanlig behandling med dopaminagonister såsom Sifrol® eller Requip® (ev i depotform) till
natten kan prövas. Dosering som vid klassisk restless legs syndrom.

Motorisk svaghet
Fot- och handskenor kan stabilisera extremiteterna vid förekomst av droppfot och fingersvaghet och
leda till förbättring av gången resp. handfunktion. Vid mer omfattande bensvaghet bör lämpligt
förflyttningshjälpmedel erbjudas.

Balanssvårigheter
Ingen specifik behandling existerar. I lättare fall kan balansträning hos sjukgymnast prövas. I andra
fall bör lämpliga förflyttningshjälpmedel erbjudas för att stabilisera balansen och motverka fall.`
    },
    {
      rubrik: 'B. Paramedicinska insatser och hjälpmedelsaspekter',
      text: `B. PARAMEDICINSKA INSATSER OCH HJÄLPMEDELSASPEKTER

De paramedicinska insatserna i omhändertagandet av patienter med progressiv polyneuropati
innefattar insatser från sjukgymnaster, arbetsterapeuter, sjuksköterskor och i förekommande fall
även kuratorer.

Sjuksköterska med neurologisk specialinriktning
Sjuksköterskan har en mycket viktigt roll vid omhändertagande av patienter med kroniska
inflammatoriska polyneuropatier som erhåller intermittent immunomodulerande behandling i
öppenvård.  Sjuksköterskans roll är att administrera och övervaka behandlingen ifråga samt
rapportera ev. biverkningar till behandlande läkare. Sjuksköterskan kan även ha en rådgivande
funktion för patienter med polyneuropati i allmänhet.

Sjukgymnast
Sjukgymnastens uppgift är behovsidentifikation, utprovning och inträning av
förflyttningshjälpmedel och rörelsebehandling. I hjälpmedelsarbetet ingår uppgiften att tillsammans
med arbetsterapeuten lämna underlag för bostads- och arbetsplatsanpassning.  Rörelsebehandlingen
inriktas främst mot bibehållande av passiv rörlighet och upprätthållande av muskelkraften och
konditionen i det längsta mån.

Arbetsterapeut
Arbetsterapeutens uppgift är behovsidentifikation, utprovning och inträning av ADL hjälpmedel
samt att tillsammans med sjukgymnasten lämna underlag för bostads- och arbetsplatsanpassning.

Kurator
Kurators uppgift är dels social rådgivning om samhällets resurser och vägledning, dels terapeutisk
med inriktning mot krishantering för patient och anhöriga.

C. OMHÄNDERTAGANDE OCH VÅRDORGANISATION

För de allra flesta patienter med polyneuropati är omhändertagandenivån, av utredning och
behandling, tillräcklig i primärvården. Utredning av specifika subgrupper av patienter med
polyneuropati bör dock ske på en neurologisk klinik (se ”Utredningsplan på primärvården”!). Efter
genomgången utredning och diagnossättning av polyneuropatin på neurologisk klinik, kan många
icke-behandlingsbara polyneuropatier återremitteras till primärvården för fortsatt omhändertagande.
Dessa patienter behöver i första hand rekommendation om lämplig symtomatisk behandling, samt
fortsatt behov av kontakt med distriktssjukgymnast och arbetsterapeut. Däremot föreslås det
primära medicinska ansvaret för enstaka polyneuropatigrupper att ligga kvar på specialistnivå på
neurologisk klinik. Dessa subgrupper utgörs av patienter med kroniska inflammatoriska neuropatier
som är i behov av immunomodulerande terapi, patienter med hereditära polyneuropatier samt
patienter med hereditära metabola rubbningar med multiorgan engagemang där polyneuropati ingår
i symtomkomplexet.`
    },
    {
      rubrik: 'C. Omhändertagande och vårdorganisation',
      text: `B. PARAMEDICINSKA INSATSER OCH HJÄLPMEDELSASPEKTER

De paramedicinska insatserna i omhändertagandet av patienter med progressiv polyneuropati
innefattar insatser från sjukgymnaster, arbetsterapeuter, sjuksköterskor och i förekommande fall
även kuratorer.

Sjuksköterska med neurologisk specialinriktning
Sjuksköterskan har en mycket viktigt roll vid omhändertagande av patienter med kroniska
inflammatoriska polyneuropatier som erhåller intermittent immunomodulerande behandling i
öppenvård.  Sjuksköterskans roll är att administrera och övervaka behandlingen ifråga samt
rapportera ev. biverkningar till behandlande läkare. Sjuksköterskan kan även ha en rådgivande
funktion för patienter med polyneuropati i allmänhet.

Sjukgymnast
Sjukgymnastens uppgift är behovsidentifikation, utprovning och inträning av
förflyttningshjälpmedel och rörelsebehandling. I hjälpmedelsarbetet ingår uppgiften att tillsammans
med arbetsterapeuten lämna underlag för bostads- och arbetsplatsanpassning.  Rörelsebehandlingen
inriktas främst mot bibehållande av passiv rörlighet och upprätthållande av muskelkraften och
konditionen i det längsta mån.

Arbetsterapeut
Arbetsterapeutens uppgift är behovsidentifikation, utprovning och inträning av ADL hjälpmedel
samt att tillsammans med sjukgymnasten lämna underlag för bostads- och arbetsplatsanpassning.

Kurator
Kurators uppgift är dels social rådgivning om samhällets resurser och vägledning, dels terapeutisk
med inriktning mot krishantering för patient och anhöriga.

C. OMHÄNDERTAGANDE OCH VÅRDORGANISATION

För de allra flesta patienter med polyneuropati är omhändertagandenivån, av utredning och
behandling, tillräcklig i primärvården. Utredning av specifika subgrupper av patienter med
polyneuropati bör dock ske på en neurologisk klinik (se ”Utredningsplan på primärvården”!). Efter
genomgången utredning och diagnossättning av polyneuropatin på neurologisk klinik, kan många
icke-behandlingsbara polyneuropatier återremitteras till primärvården för fortsatt omhändertagande.
Dessa patienter behöver i första hand rekommendation om lämplig symtomatisk behandling, samt
fortsatt behov av kontakt med distriktssjukgymnast och arbetsterapeut. Däremot föreslås det
primära medicinska ansvaret för enstaka polyneuropatigrupper att ligga kvar på specialistnivå på
neurologisk klinik. Dessa subgrupper utgörs av patienter med kroniska inflammatoriska neuropatier
som är i behov av immunomodulerande terapi, patienter med hereditära polyneuropatier samt
patienter med hereditära metabola rubbningar med multiorgan engagemang där polyneuropati ingår
i symtomkomplexet.`
    }
    ]
  },

  {
    id: 'gcs',
    titel: 'GCS – Glasgow Coma Scale',
    kategori: 'akutkort',
    pdf: 'akutkort/GCS.pdf',
    innehall: [
    {
      rubrik: 'GCS – Glasgow Coma Scale',
      html: `<img src="images/akutkort/GCS_p1.png" alt="GCS – Glasgow Coma Scale" style="max-width:100%;display:block;margin:0 auto">`
    }
    ]
  },

  {
    id: 'ich',
    titel: 'ICH – Intracerebral blödning',
    kategori: 'akutkort',
    pdf: 'akutkort/ICH.pdf',
    innehall: [
    {
      rubrik: 'Sida 1',
      html: `<img src="images/akutkort/ICH_p1.png" alt="Sida 1" style="max-width:100%;display:block;margin:0 auto">`
    },
    {
      rubrik: 'Sida 2',
      html: `<img src="images/akutkort/ICH_p2.png" alt="Sida 2" style="max-width:100%;display:block;margin:0 auto">`
    }
    ]
  },

  {
    id: 'ivt-evt',
    titel: 'IVT/EVT – Trombolys och trombektomi',
    kategori: 'akutkort',
    pdf: 'akutkort/IVT_EVT.pdf',
    innehall: [
    {
      rubrik: 'Sida 1',
      html: `<img src="images/akutkort/IVT_EVT_p1.png" alt="Sida 1" style="max-width:100%;display:block;margin:0 auto">`
    },
    {
      rubrik: 'Sida 2',
      html: `<img src="images/akutkort/IVT_EVT_p2.png" alt="Sida 2" style="max-width:100%;display:block;margin:0 auto">`
    }
    ]
  },

  {
    id: 'nihss',
    titel: 'NIHSS – NIH Stroke Scale',
    kategori: 'akutkort',
    pdf: 'akutkort/NIHSS.pdf',
    innehall: [
    {
      rubrik: 'Sida 1',
      html: `<img src="images/akutkort/NIHSS_p1.png" alt="Sida 1" style="max-width:100%;display:block;margin:0 auto">`
    },
    {
      rubrik: 'Sida 2',
      html: `<img src="images/akutkort/NIHSS_p2.png" alt="Sida 2" style="max-width:100%;display:block;margin:0 auto">`
    },
    {
      rubrik: 'Sida 3',
      html: `<img src="images/akutkort/NIHSS_p3.png" alt="Sida 3" style="max-width:100%;display:block;margin:0 auto">`
    },
    {
      rubrik: 'Sida 4',
      html: `<img src="images/akutkort/NIHSS_p4.png" alt="Sida 4" style="max-width:100%;display:block;margin:0 auto">`
    }
    ]
  },

  {
    id: 'rls',
    titel: 'RLS – Reaction Level Scale',
    kategori: 'akutkort',
    pdf: 'akutkort/RLS.pdf',
    innehall: [
    {
      rubrik: 'RLS',
      html: `<img src="images/akutkort/RLS_p1.png" alt="RLS" style="max-width:100%;display:block;margin:0 auto">`
    }
    ]
  },

  {
    id: 'rutinnervstatus',
    titel: 'Rutinnervstatus',
    kategori: 'akutkort',
    pdf: 'akutkort/Rutinnervstatus.pdf',
    innehall: [
    {
      rubrik: 'Rutinnervstatus',
      html: `<img src="images/akutkort/Rutinnervstatus_p1.png" alt="Rutinnervstatus" style="max-width:100%;display:block;margin:0 auto">`
    }
    ]
  },

  {
    id: 'sbar',
    titel: 'SBAR – Kommunikationsverktyg',
    kategori: 'akutkort',
    pdf: 'akutkort/SBAR.pdf',
    innehall: [
    {
      rubrik: 'SBAR',
      html: `<img src="images/akutkort/SBAR_p1.png" alt="SBAR" style="max-width:100%;display:block;margin:0 auto">`
    }
    ]
  },

  {
    id: 'status-ep',
    titel: 'Status epilepticus',
    kategori: 'akutkort',
    pdf: 'akutkort/Status EP.pdf',
    innehall: [
    {
      rubrik: 'Sida 1',
      html: `<img src="images/akutkort/Status_EP_p1.png" alt="Sida 1" style="max-width:100%;display:block;margin:0 auto">`
    },
    {
      rubrik: 'Sida 2',
      html: `<img src="images/akutkort/Status_EP_p2.png" alt="Sida 2" style="max-width:100%;display:block;margin:0 auto">`
    }
    ]
  },

  {
    id: 'yrsel',
    titel: 'Yrsel – akut handläggning',
    kategori: 'akutkort',
    pdf: 'akutkort/Yrsel.pdf',
    innehall: [
    {
      rubrik: 'Sida 1',
      html: `<img src="images/akutkort/Yrsel_p1.png" alt="Sida 1" style="max-width:100%;display:block;margin:0 auto">`
    },
    {
      rubrik: 'Sida 2',
      html: `<img src="images/akutkort/Yrsel_p2.png" alt="Sida 2" style="max-width:100%;display:block;margin:0 auto">`
    }
    ]
  },

  {
    id: 'eiuh',
    titel: 'Neurologisk prognos efter hjärtstopp (EIUH-2)',
    kategori: 'prognos',
    pdf: 'prognos/EIUH-2.pdf',
    innehall: [
    {
      rubrik: 'Cerebral Performance Category (CPC)',
      text: `Läkartidningen
Volym 114
ÖVERSIKT
UPPDATERADE REKOMMENDATIONER FRÅN
SVENSKA HLR-RÅDETS EXPERTGRUPP
Bedömning av neuro­logisk
prognos efter hjärtstopp
Christian Rylander,
med dr, överläkare,
avdelningen för klinis­
ka vetenskaper, Sahl­
grenska akademin;
AnOpIVA, Sahlgrens­
ka universitetssjukhu­
set, Göteborg
b christian.rylander@
vgregion.se
Hans Friberg, pro­
fessor, överläkare,
Centrum för hjärt­
stopp, Lunds univer­
sitet; anestesi och
intensivvård, Skånes
universitetssjukhus,
Malmö
Elna-Marie Larsson,
professor, överläkare,
Uppsala universitet;
Bild- och funktions­
medicinskt centrum/
röntgen, Akademiska
sjukhuset, Uppsala
Lars Johan Lied-
holm, överläkare,
avdelningen för kli­
nisk neurofysiologi,
Neuro­centrum, Norr­
lands universitets­
sjukhus, Umeå
Sten Rubertsson,
professor, överläkare,
institutionen för kirur­
giska vetenskaper,
Uppsala universitet;
anestesi- och inten­
sivvårdskliniken, Aka­
demiska sjukhuset,
Uppsala
Tobias Cronberg,
docent, överläkare,
neurologi, institu­
tionen för kliniska
vetenskaper, Lunds
universitet; Skånes
universitetssjukhus,
Lund
Av de drygt 5 500 personer i Sverige som får hjärt–lung­
räddning (HLR) på grund av hjärtstopp utanför sjuk­
hus har antalet som läggs in levande på sjukhus ökat
de senaste åren till knappt 1 400 under 2015 [1]. För de
patienter som återfår stabil hjärtfunktion och cirku­
lation men som är fortsatt medvetslösa är graden av
hyp­oxisk/ischemisk hjärnskada avgörande för pro­
gnosen [2].
Svenska HLR-rådets arbetsgrupp för vård efter hjärt­
stopp har tidigare i Läkartidningen beskrivit vilka un­
dersökningsmetoder som bör finnas på olika sjuk­
hus och hur de kan tillämpas för att den neurologiska
prognosbedömningen ska bli så säker som möjligt [3].
Sedan dess har nya data och sammanställningar av en
europeisk expertgrupp modifierat bilden något [4].
Till de viktigaste nyheterna hör att det inte längre
finns stöd för att förlänga observationstiden om pa­
tienten behandlats med aktiv temperaturkontroll. Vi­
dare har utebliven motorisk smärtreaktion visat sig
vara ett osäkert tecken på dålig prognos, även 72 tim­
mar eller mer efter hjärtstoppet. Bortfall av pupillre­
flex och blinkreflex samt bortfall av kortikala svar på
stimulering (sensorisk reaktionspotential; SEP [sen­
sory evoked potentials]) är fortfarande de mest robus­
ta prediktorerna för dåligt neurologiskt utfall. »Sena
uppvaknanden«, som beskrivits bland patienter som
av olika skäl fått förlängd behandlingstid [5-7], under­
stryker vikten av att utesluta kvarvarande effekt från
sederande läkemedel.
European Resuscitation Council (ERC) gav nyligen
ut uppdaterade evidensbaserade riktlinjer för vård ef­
ter hjärtstopp, vilka även omfattar rekommendatio­
ner för individuell neurologisk prognosbedömning
[8]. Bra respektive dåligt neurologiskt utfall definieras
med hjälp av den s k CPC (Cerebral performance cate­
gories)-skalan (Fakta 1).
Syftet med denna artikel är att, baserat på de euro­
peiska rekommendationerna och av den svenska ar­
betsgruppen valda referenser, uppdatera HLR-rådets
rekommendationer för neurologisk prognosbedöm­
ning av den medvetslösa patienten efter hjärtstopp.
Artikeln kan med fördel läsas som en fortsättning på
den tidigare publikationen, där en del grundinforma­
tion om de olika metoderna återfinns [3].
Omständigheter kring hjärtstoppet
Tack vare ett stort antal analyser av data från pre­
hospitala register inklusive Svenska hjärt–lungrädd­
ningsregistret (www.hlr.nu) är omständigheter med
betydelse för prognos väl kända, och en systematisk
HUVUDBUDSKAP
b Antalet patienter som läggs in levande på sjukhus efter
hjärtstopp ökar.
b Graden av cerebral hypoxi/ischemi vid hjärtstoppet
är avgörande för prognosen för om övriga vitala organ
återfår stabil funktion.
b Europeiska rekommendationer anger att den neurolo-
giska prognosen inte bör bedömas förrän tidigast
3 dygn efter hjärtstoppet.
b Neurologisk prognosbedömning bör vila på undersök-
ningsmetoder som är oberoende av varandra: kliniska
och neurofysiologiska undersökningar, bilddiagnostik
och biomarkörer.
b Om prognosbedömningen 3–4 dygn efter hjärtstoppet
inte säkert indikerar dåligt neurologiskt utfall rekom-
menderas ytterligare något dygns exspektans med
förnyade undersökningar.
FAKTA 1. CPC-skalan
Neurologisk funk-
tion efter hjärtstopp
klassificeras enligt CPC
(Cerebral performance
categories)-skalan: 1–2
räknas vanligen som bra
utfall och 3–5 som dåligt
utfall [9].
CPC 1. God cerebral
funktion. Alert, har
förmåga att arbeta och
leva ett normalt liv. Kan ha
mindre psykologiska eller
neurologiska svårigheter
(lindrig dysfasi, icke-funk-
tionsnedsättande hemipa-
res eller mindre kranial-
nervsdysfunktion).
CPC 2. Måttlig cerebral
funktionsnedsättning.
Tillräcklig cerebral
funktion för deltidsarbete
i skyddad omgivning eller
självständigt vardagsliv
såsom påklädning, resa
med allmänna transport-
medel och matlagning.
Kan ha hemiplegi, kram-
per, ataxi, dysartri, dysfasi
eller kroniska minnessvå-
righeter eller mentala
svårigheter. Är orienterad
till tid och rum.
CPC 3. Svår cerebral
funktionsnedsättning. Vid
medvetande. Beroende
av andra för dagliga
aktiviteter på grund av
försämrad hjärnfunk-
tion (på institution eller
hemma med exceptionellt
familjestöd). Begränsad
uppfattningsförmåga.
Inkluderar ett brett
spektrum av cerebrala
nedsättningar.
CPC 4. Medvetslös. Omed-
veten om omgivningen.
Ingen uppfattningsför-
måga. Inget verbalt eller
psykologiskt samspel med
omgivningen.
CPC 5: Död.`
    },
    {
      rubrik: 'Tidslinje för prognosbedömning (ERC 2021)',
      text: `Läkartidningen
Volym 114
ÖVERSIKT
UPPDATERADE REKOMMENDATIONER FRÅN
SVENSKA HLR-RÅDETS EXPERTGRUPP
Bedömning av neuro­logisk
prognos efter hjärtstopp
Christian Rylander,
med dr, överläkare,
avdelningen för klinis­
ka vetenskaper, Sahl­
grenska akademin;
AnOpIVA, Sahlgrens­
ka universitetssjukhu­
set, Göteborg
b christian.rylander@
vgregion.se
Hans Friberg, pro­
fessor, överläkare,
Centrum för hjärt­
stopp, Lunds univer­
sitet; anestesi och
intensivvård, Skånes
universitetssjukhus,
Malmö
Elna-Marie Larsson,
professor, överläkare,
Uppsala universitet;
Bild- och funktions­
medicinskt centrum/
röntgen, Akademiska
sjukhuset, Uppsala
Lars Johan Lied-
holm, överläkare,
avdelningen för kli­
nisk neurofysiologi,
Neuro­centrum, Norr­
lands universitets­
sjukhus, Umeå
Sten Rubertsson,
professor, överläkare,
institutionen för kirur­
giska vetenskaper,
Uppsala universitet;
anestesi- och inten­
sivvårdskliniken, Aka­
demiska sjukhuset,
Uppsala
Tobias Cronberg,
docent, överläkare,
neurologi, institu­
tionen för kliniska
vetenskaper, Lunds
universitet; Skånes
universitetssjukhus,
Lund
Av de drygt 5 500 personer i Sverige som får hjärt–lung­
räddning (HLR) på grund av hjärtstopp utanför sjuk­
hus har antalet som läggs in levande på sjukhus ökat
de senaste åren till knappt 1 400 under 2015 [1]. För de
patienter som återfår stabil hjärtfunktion och cirku­
lation men som är fortsatt medvetslösa är graden av
hyp­oxisk/ischemisk hjärnskada avgörande för pro­
gnosen [2].
Svenska HLR-rådets arbetsgrupp för vård efter hjärt­
stopp har tidigare i Läkartidningen beskrivit vilka un­
dersökningsmetoder som bör finnas på olika sjuk­
hus och hur de kan tillämpas för att den neurologiska
prognosbedömningen ska bli så säker som möjligt [3].
Sedan dess har nya data och sammanställningar av en
europeisk expertgrupp modifierat bilden något [4].
Till de viktigaste nyheterna hör att det inte längre
finns stöd för att förlänga observationstiden om pa­
tienten behandlats med aktiv temperaturkontroll. Vi­
dare har utebliven motorisk smärtreaktion visat sig
vara ett osäkert tecken på dålig prognos, även 72 tim­
mar eller mer efter hjärtstoppet. Bortfall av pupillre­
flex och blinkreflex samt bortfall av kortikala svar på
stimulering (sensorisk reaktionspotential; SEP [sen­
sory evoked potentials]) är fortfarande de mest robus­
ta prediktorerna för dåligt neurologiskt utfall. »Sena
uppvaknanden«, som beskrivits bland patienter som
av olika skäl fått förlängd behandlingstid [5-7], under­
stryker vikten av att utesluta kvarvarande effekt från
sederande läkemedel.
European Resuscitation Council (ERC) gav nyligen
ut uppdaterade evidensbaserade riktlinjer för vård ef­
ter hjärtstopp, vilka även omfattar rekommendatio­
ner för individuell neurologisk prognosbedömning
[8]. Bra respektive dåligt neurologiskt utfall definieras
med hjälp av den s k CPC (Cerebral performance cate­
gories)-skalan (Fakta 1).
Syftet med denna artikel är att, baserat på de euro­
peiska rekommendationerna och av den svenska ar­
betsgruppen valda referenser, uppdatera HLR-rådets
rekommendationer för neurologisk prognosbedöm­
ning av den medvetslösa patienten efter hjärtstopp.
Artikeln kan med fördel läsas som en fortsättning på
den tidigare publikationen, där en del grundinforma­
tion om de olika metoderna återfinns [3].
Omständigheter kring hjärtstoppet
Tack vare ett stort antal analyser av data från pre­
hospitala register inklusive Svenska hjärt–lungrädd­
ningsregistret (www.hlr.nu) är omständigheter med
betydelse för prognos väl kända, och en systematisk
HUVUDBUDSKAP
b Antalet patienter som läggs in levande på sjukhus efter
hjärtstopp ökar.
b Graden av cerebral hypoxi/ischemi vid hjärtstoppet
är avgörande för prognosen för om övriga vitala organ
återfår stabil funktion.
b Europeiska rekommendationer anger att den neurolo-
giska prognosen inte bör bedömas förrän tidigast
3 dygn efter hjärtstoppet.
b Neurologisk prognosbedömning bör vila på undersök-
ningsmetoder som är oberoende av varandra: kliniska
och neurofysiologiska undersökningar, bilddiagnostik
och biomarkörer.
b Om prognosbedömningen 3–4 dygn efter hjärtstoppet
inte säkert indikerar dåligt neurologiskt utfall rekom-
menderas ytterligare något dygns exspektans med
förnyade undersökningar.
FAKTA 1. CPC-skalan
Neurologisk funk-
tion efter hjärtstopp
klassificeras enligt CPC
(Cerebral performance
categories)-skalan: 1–2
räknas vanligen som bra
utfall och 3–5 som dåligt
utfall [9].
CPC 1. God cerebral
funktion. Alert, har
förmåga att arbeta och
leva ett normalt liv. Kan ha
mindre psykologiska eller
neurologiska svårigheter
(lindrig dysfasi, icke-funk-
tionsnedsättande hemipa-
res eller mindre kranial-
nervsdysfunktion).
CPC 2. Måttlig cerebral
funktionsnedsättning.
Tillräcklig cerebral
funktion för deltidsarbete
i skyddad omgivning eller
självständigt vardagsliv
såsom påklädning, resa
med allmänna transport-
medel och matlagning.
Kan ha hemiplegi, kram-
per, ataxi, dysartri, dysfasi
eller kroniska minnessvå-
righeter eller mentala
svårigheter. Är orienterad
till tid och rum.
CPC 3. Svår cerebral
funktionsnedsättning. Vid
medvetande. Beroende
av andra för dagliga
aktiviteter på grund av
försämrad hjärnfunk-
tion (på institution eller
hemma med exceptionellt
familjestöd). Begränsad
uppfattningsförmåga.
Inkluderar ett brett
spektrum av cerebrala
nedsättningar.
CPC 4. Medvetslös. Omed-
veten om omgivningen.
Ingen uppfattningsför-
måga. Inget verbalt eller
psykologiskt samspel med
omgivningen.
CPC 5: Död.

Läkartidningen
2017
ÖVERSIKT
genomgång publicerades nyligen i Läkartidningen
[10]. Att den första observerade rytmen kunnat de­
fibrilleras och att avancerad HLR startats snabbt är de
viktigaste faktorerna som är kopplade till ökad över­
levnad. Obevittnat hjärtstopp och lång väntan på HLR
är kopplat till sämre överlevnad.
Tiden från hjärtstopp till återkomst av spontan cir­
kulation (ROSC; return of spontaneos circulation) är
en faktor som ofta diskuteras inför eventuell intensiv­
vård efter ett hjärtstopp. Även om tid till återkomst av
spontan cirkulation är kortare i gruppen som överle­
ver än i gruppen som avlider efter intensivvård [11] är
antalet patienter som överlever lång HLR alltför stort
[12, 13] för att tid till återkomst av spontan cirkulation
ska vara av säkert pro­gnostiskt värde på individnivå.
Under tiden fram till återkomst av spontan cirkula­
tion är sannolikt kvaliteten på utförd HLR mer avgö­
rande, dvs bröstkompressionernas djup och fre­kvens
och bröstkorgens återfjädrande förmåga samt mini­
mala avbrott [14]. Dessa parametrar är dock svåra att
skatta i det enskilda fallet.
Sammanfattningsvis är ingen av de i dag mätbara
faktiska omständigheterna kring plötsligt hjärtstopp
och dess initiala behandling tillräckligt robust som
ensam prediktor för senare neurologiskt utfall. Inte
heller de hittills publicerade riskpoängsystem som
bygger på kombinationer av faktiska omständighe­
ter och patientparametrar direkt efter återkomst av
spontan cirkulation [15, 16] ger tillräckligt säkert un­
derlag för individuell prognosbedömning.
Klinisk neurologisk undersökning
Observation av vakenhetsgrad och eventuella kram­
per samt daglig undersökning av hjärnstamsreflexer
är bland de viktigaste underlagen som ger en bild av
patientens möjligheter till återhämtning. Tidpunkten
för prognosbedömning är avgörande, eftersom utslag­
na hjärnstamsreflexer kan återkomma under de förs­
ta dygnen, både vid god och vid dålig prognos. Bilate­
ral avsaknad av både pupill- och kornealreflexer efter
72 timmar är en säker prediktor för dåligt utfall med
falskt positiv frekvens nära 0 procent men med låg
sensitivitet, kring 20 procent [4].
Hos ett litet antal patienter kan smärtreaktion och
hjärnstamsreflexer ha fallit bort permanent till följd
av total hjärninfarkt, vilken måste diagnostiseras en­
ligt lagstadgade kriterier.
Kramper efter hjärtstopp uppträder hos en tredjedel
av patienterna och är kopplade till dåligt neurologiskt
utfall [17]. Myoklona muskelryckningar i ansikte, bål
och extremiteter är vanligast, men även generalisera­
de tonisk-kloniska och fokala epileptiska anfall före­
kommer. Myoklonier som är uttalade och generalise­
rade under >30 minuter benämns myoklont status, vil­
ket är en klinisk diagnos. Om myoklont status uppträ­
der under de första 1–2 dygnen efter hjärtstopp talar
det starkt för dåligt utfall med falskt positiv fre­kvens
på 0 procent i systematiska översikter [4], men enstaka
patienter kan överleva med god funktion [18, 19].
Hos patienter utan kliniska kramper upptäcks
ibland vid EEG-undersökning pågående anfallsaktivi­
tet, s k elektrografiskt status epilepticus [20]. Det talar
vanligen för dåligt utfall, men en del patienter åter­
hämtar sig väl trots recidiverande anfallsaktivitet un­
der dagar till veckor [21]. Det är osäkert om behand­
ling av elektrografisk anfallsaktivitet förbättrar pro­
gnosen [22, 23].
Neurofysiologiska metoder
EEG-bilden förändras dagarna efter ett hjärtstopp
men påverkas föga av kroppstemperaturen. EEG-bak­
grundens utseende är tydligast kopplat till prognosen.
Återkomst av kontinuerlig bakgrundsaktivitet och
reaktivitet under det första dygnet är ett gynnsamt
tecken. Bland patienter som tidigt uppvisar konti­
nuerlig bakgrundsaktivitet men som senare utveck­
lar elektrografiskt status epilepticus finns en liten
grupp som får bra neurologiskt utfall [20]. Om man
inte använder kontinuerlig uppkoppling kan således
ett rutin-EEG under det första dygnet vara av värde
för jämförelse med ett rutin-EEG ca 3 dygn efter hjärt­
stoppet. Det senare ger dock det viktigaste underlaget
för prognosbedömning.
I nyare EEG-studier används ofta en standardiserad
tolkningsterminologi, som införts av American Clini­
cal Neurophysiology Society [24]. Bland 103 patienter i
TTM-studien [25] med rutin-EEG registrerat 2–4 dagar
efter hjärtstopp fann man att »högmalignt« mönster
(Figur 1) var kopplat till dåligt utfall med falskt positiv
frekvens på 0 procent och sensitivitet 50 procent [26].
Dessa mönster, som med varierande definition även
tidigare angivits som starkt förenade med dåligt ut­
fall [27], kan betraktas som säkra negativa prediktorer
om de uppträder inom detta tidsspann och om läke­
medelseffekt kan uteslutas.
Användning av sensorisk reaktionspotential (sen­
sory evoked potentials; SEP) förutsätter en tekniskt
korrekt undersökning och görs alltid bilateralt. Som
kvalitetsindikatorer ska svar finnas över plexus/låg
halsrygg (N10- respektive N13-potentialer; Figur 2),
och brusnivån kortikalt ska vara <0,25 μV, vilket vanli­
gen kräver muskelrelaxering och ibland nålelektroder.
Bedömning görs huruvida »svar finns«, »svar saknas
bilateralt« eller huruvida patienten tillhör en grupp
där registreringen är »obedömbar«, vilket innebär
Figur 1. »Högmalig-
na« EEG-mönster
som är associerade
med dåligt neuro-
logiskt utfall om de
registreras drygt 48
timmar efter hjärt-
stopp. A) helt flack/
supprimerad bak-
grund <10 μV, B) helt
flack/supprimerad
bakgrund med över-
lagrade periodiska
urladdningar, C) och
D) burst–suppression
med >50 procents
suppressionstid utan
(C) eller med (D)
överlagrade epilepti-
forma urladdningar.`
    },
    {
      rubrik: 'Kliniska prediktorer (72 timmar)',
      text: `Läkartidningen
2017
ÖVERSIKT
genomgång publicerades nyligen i Läkartidningen
[10]. Att den första observerade rytmen kunnat de­
fibrilleras och att avancerad HLR startats snabbt är de
viktigaste faktorerna som är kopplade till ökad över­
levnad. Obevittnat hjärtstopp och lång väntan på HLR
är kopplat till sämre överlevnad.
Tiden från hjärtstopp till återkomst av spontan cir­
kulation (ROSC; return of spontaneos circulation) är
en faktor som ofta diskuteras inför eventuell intensiv­
vård efter ett hjärtstopp. Även om tid till återkomst av
spontan cirkulation är kortare i gruppen som överle­
ver än i gruppen som avlider efter intensivvård [11] är
antalet patienter som överlever lång HLR alltför stort
[12, 13] för att tid till återkomst av spontan cirkulation
ska vara av säkert pro­gnostiskt värde på individnivå.
Under tiden fram till återkomst av spontan cirkula­
tion är sannolikt kvaliteten på utförd HLR mer avgö­
rande, dvs bröstkompressionernas djup och fre­kvens
och bröstkorgens återfjädrande förmåga samt mini­
mala avbrott [14]. Dessa parametrar är dock svåra att
skatta i det enskilda fallet.
Sammanfattningsvis är ingen av de i dag mätbara
faktiska omständigheterna kring plötsligt hjärtstopp
och dess initiala behandling tillräckligt robust som
ensam prediktor för senare neurologiskt utfall. Inte
heller de hittills publicerade riskpoängsystem som
bygger på kombinationer av faktiska omständighe­
ter och patientparametrar direkt efter återkomst av
spontan cirkulation [15, 16] ger tillräckligt säkert un­
derlag för individuell prognosbedömning.
Klinisk neurologisk undersökning
Observation av vakenhetsgrad och eventuella kram­
per samt daglig undersökning av hjärnstamsreflexer
är bland de viktigaste underlagen som ger en bild av
patientens möjligheter till återhämtning. Tidpunkten
för prognosbedömning är avgörande, eftersom utslag­
na hjärnstamsreflexer kan återkomma under de förs­
ta dygnen, både vid god och vid dålig prognos. Bilate­
ral avsaknad av både pupill- och kornealreflexer efter
72 timmar är en säker prediktor för dåligt utfall med
falskt positiv frekvens nära 0 procent men med låg
sensitivitet, kring 20 procent [4].
Hos ett litet antal patienter kan smärtreaktion och
hjärnstamsreflexer ha fallit bort permanent till följd
av total hjärninfarkt, vilken måste diagnostiseras en­
ligt lagstadgade kriterier.
Kramper efter hjärtstopp uppträder hos en tredjedel
av patienterna och är kopplade till dåligt neurologiskt
utfall [17]. Myoklona muskelryckningar i ansikte, bål
och extremiteter är vanligast, men även generalisera­
de tonisk-kloniska och fokala epileptiska anfall före­
kommer. Myoklonier som är uttalade och generalise­
rade under >30 minuter benämns myoklont status, vil­
ket är en klinisk diagnos. Om myoklont status uppträ­
der under de första 1–2 dygnen efter hjärtstopp talar
det starkt för dåligt utfall med falskt positiv fre­kvens
på 0 procent i systematiska översikter [4], men enstaka
patienter kan överleva med god funktion [18, 19].
Hos patienter utan kliniska kramper upptäcks
ibland vid EEG-undersökning pågående anfallsaktivi­
tet, s k elektrografiskt status epilepticus [20]. Det talar
vanligen för dåligt utfall, men en del patienter åter­
hämtar sig väl trots recidiverande anfallsaktivitet un­
der dagar till veckor [21]. Det är osäkert om behand­
ling av elektrografisk anfallsaktivitet förbättrar pro­
gnosen [22, 23].
Neurofysiologiska metoder
EEG-bilden förändras dagarna efter ett hjärtstopp
men påverkas föga av kroppstemperaturen. EEG-bak­
grundens utseende är tydligast kopplat till prognosen.
Återkomst av kontinuerlig bakgrundsaktivitet och
reaktivitet under det första dygnet är ett gynnsamt
tecken. Bland patienter som tidigt uppvisar konti­
nuerlig bakgrundsaktivitet men som senare utveck­
lar elektrografiskt status epilepticus finns en liten
grupp som får bra neurologiskt utfall [20]. Om man
inte använder kontinuerlig uppkoppling kan således
ett rutin-EEG under det första dygnet vara av värde
för jämförelse med ett rutin-EEG ca 3 dygn efter hjärt­
stoppet. Det senare ger dock det viktigaste underlaget
för prognosbedömning.
I nyare EEG-studier används ofta en standardiserad
tolkningsterminologi, som införts av American Clini­
cal Neurophysiology Society [24]. Bland 103 patienter i
TTM-studien [25] med rutin-EEG registrerat 2–4 dagar
efter hjärtstopp fann man att »högmalignt« mönster
(Figur 1) var kopplat till dåligt utfall med falskt positiv
frekvens på 0 procent och sensitivitet 50 procent [26].
Dessa mönster, som med varierande definition även
tidigare angivits som starkt förenade med dåligt ut­
fall [27], kan betraktas som säkra negativa prediktorer
om de uppträder inom detta tidsspann och om läke­
medelseffekt kan uteslutas.
Användning av sensorisk reaktionspotential (sen­
sory evoked potentials; SEP) förutsätter en tekniskt
korrekt undersökning och görs alltid bilateralt. Som
kvalitetsindikatorer ska svar finnas över plexus/låg
halsrygg (N10- respektive N13-potentialer; Figur 2),
och brusnivån kortikalt ska vara <0,25 μV, vilket vanli­
gen kräver muskelrelaxering och ibland nålelektroder.
Bedömning görs huruvida »svar finns«, »svar saknas
bilateralt« eller huruvida patienten tillhör en grupp
där registreringen är »obedömbar«, vilket innebär
Figur 1. »Högmalig-
na« EEG-mönster
som är associerade
med dåligt neuro-
logiskt utfall om de
registreras drygt 48
timmar efter hjärt-
stopp. A) helt flack/
supprimerad bak-
grund <10 μV, B) helt
flack/supprimerad
bakgrund med över-
lagrade periodiska
urladdningar, C) och
D) burst–suppression
med >50 procents
suppressionstid utan
(C) eller med (D)
överlagrade epilepti-
forma urladdningar.

Läkartidningen
Volym 114
ÖVERSIKT
att patienten prognosmässigt ska behandlas som om
N20-svar finns. Undersökningen kan i sådana fall med
fördel upprepas nästa dag.
I metaanalyser har bilateral avsaknad av N20-poten­
tialer vid undersökning 1–7 dygn efter hjärtstopp haft
falskt positiv frekvens på nära 0 procent för dåligt ut­
fall, men sensitiviteten är begränsad till ca 40 procent
[27]. Gränsen för avsaknad av N20-svar är inte strikt
definierad; 0,3 μV har föreslagits [28], men även låga
amplituder <0,5–0,6 μV talar starkt för dålig pro­gnos
[29, 30]. Att ett fåtal patienter rapporterats ha bra utfall
trots bortfall av N20-svar kan sannolikt hänföras till
feltolkning av artefaktrika registreringar [31, 32].
Bilddiagnostik
Efter fullbordad ischemi uppstår ett generellt cyto­
toxiskt ödem i hjärnan som gör att grå substans i
kortex och basala ganglier avgränsas dåligt eller inte
alls från vit substans på datortomografi (DT) (Figur 3).
Minskad kvot mellan täthet i grå och vit substans har
stark koppling till dåligt utfall om förändringarna är
utbredda och uppträder inom 24 timmar. Sensitivite­
ten varierar dock starkt beroende på vilka gränsvär­
den som tillämpas. Med kvoten mellan täthet i grå
och vit substans tillräckligt lågt satt för falskt positiv
frekvens (0–4 procent) har sensitiviteten visat sig vara
mycket låg: 3,5–20 procent i färska studier [33, 34].
Mindre uttalade ischemiska/anoxiska förändringar
är ofta svåra att påvisa och bedöma med hjälp av DT,
och för neurologisk prognosbedömning rekommen­
deras främst undersökning med magnetresonans
(MR) 3–5 dagar efter hjärtstoppet, eftersom MR-bil­
den utvecklas över tid. Diffusionsviktade bilder med
beräknad »apparent diffusion coefficient« (ADC), som
avspeglar medeldiffusionen i varje bildelement, är
överlägsna konventionella MR-sekvenser för att påvi­
sa akuta hypoxiska/ischemiska lesioner.
Den nedsatta diffusionen i sådana områden ger hög
signalintensitet (vitt) på diffusionsviktade bilder och
låg signalintensitet (svart) på kvantitativ ADC-karta
(Figur 4). Bilaterala utbredda eller multipla lesioner
med nedsatt diffusion i kortex, djup grå substans och
lillhjärna är förknippade med dålig prognos.
Stimulering
μV
Svarssignal
Kortex
Halsrygg
Plexus
ms
N 10
N 13
N 20
FIGUR 2. Sensorisk reaktionspotential, normalt svar
h Användning av sensorisk reaktionspotential (sensory evoked
potentials; SEP) med repetitiv stimulering över medianusnerven
med medelvärdesbildade svar över brakialplexus (N10), låg halsrygg
(N13) och kontralaterala sensoriska kortex (N20). Undersökningen
utförs alltid bilateralt. Bilateral avsaknad av N20-svar 72 timmar
efter hjärtstopp, med bevarade N10- och N13-svar, är mycket starkt
associerad med dåligt neurologiskt utfall.
Figur 3. Ischemiska/anoxiska skador i hjärna efter hjärtstopp visualiserade med
datortomografi. Till vänster: normal bild; till höger: cytotoxiskt ödem med utplånad
skillnad mellan vit och grå substans.
Figur 4. Ischemiska/anoxiska skador i hjärna efter hjärtstopp visualiserade med
magnetresonans. Överst till vänster: normal diffusionsviktad bild; överst till höger:
omfattande kortikala skador som framstår vita på diffusionsviktade bilder; underst
till vänster: normal bild med »apparent diffusion coefficient« (ADC); underst till hö-
ger: omfattande kortikala skador som framstår svarta på ADC-karta.`
    },
    {
      rubrik: 'Elektrofysiologi (SSEP, EEG)',
      text: `Läkartidningen
2017
ÖVERSIKT
genomgång publicerades nyligen i Läkartidningen
[10]. Att den första observerade rytmen kunnat de­
fibrilleras och att avancerad HLR startats snabbt är de
viktigaste faktorerna som är kopplade till ökad över­
levnad. Obevittnat hjärtstopp och lång väntan på HLR
är kopplat till sämre överlevnad.
Tiden från hjärtstopp till återkomst av spontan cir­
kulation (ROSC; return of spontaneos circulation) är
en faktor som ofta diskuteras inför eventuell intensiv­
vård efter ett hjärtstopp. Även om tid till återkomst av
spontan cirkulation är kortare i gruppen som överle­
ver än i gruppen som avlider efter intensivvård [11] är
antalet patienter som överlever lång HLR alltför stort
[12, 13] för att tid till återkomst av spontan cirkulation
ska vara av säkert pro­gnostiskt värde på individnivå.
Under tiden fram till återkomst av spontan cirkula­
tion är sannolikt kvaliteten på utförd HLR mer avgö­
rande, dvs bröstkompressionernas djup och fre­kvens
och bröstkorgens återfjädrande förmåga samt mini­
mala avbrott [14]. Dessa parametrar är dock svåra att
skatta i det enskilda fallet.
Sammanfattningsvis är ingen av de i dag mätbara
faktiska omständigheterna kring plötsligt hjärtstopp
och dess initiala behandling tillräckligt robust som
ensam prediktor för senare neurologiskt utfall. Inte
heller de hittills publicerade riskpoängsystem som
bygger på kombinationer av faktiska omständighe­
ter och patientparametrar direkt efter återkomst av
spontan cirkulation [15, 16] ger tillräckligt säkert un­
derlag för individuell prognosbedömning.
Klinisk neurologisk undersökning
Observation av vakenhetsgrad och eventuella kram­
per samt daglig undersökning av hjärnstamsreflexer
är bland de viktigaste underlagen som ger en bild av
patientens möjligheter till återhämtning. Tidpunkten
för prognosbedömning är avgörande, eftersom utslag­
na hjärnstamsreflexer kan återkomma under de förs­
ta dygnen, både vid god och vid dålig prognos. Bilate­
ral avsaknad av både pupill- och kornealreflexer efter
72 timmar är en säker prediktor för dåligt utfall med
falskt positiv frekvens nära 0 procent men med låg
sensitivitet, kring 20 procent [4].
Hos ett litet antal patienter kan smärtreaktion och
hjärnstamsreflexer ha fallit bort permanent till följd
av total hjärninfarkt, vilken måste diagnostiseras en­
ligt lagstadgade kriterier.
Kramper efter hjärtstopp uppträder hos en tredjedel
av patienterna och är kopplade till dåligt neurologiskt
utfall [17]. Myoklona muskelryckningar i ansikte, bål
och extremiteter är vanligast, men även generalisera­
de tonisk-kloniska och fokala epileptiska anfall före­
kommer. Myoklonier som är uttalade och generalise­
rade under >30 minuter benämns myoklont status, vil­
ket är en klinisk diagnos. Om myoklont status uppträ­
der under de första 1–2 dygnen efter hjärtstopp talar
det starkt för dåligt utfall med falskt positiv fre­kvens
på 0 procent i systematiska översikter [4], men enstaka
patienter kan överleva med god funktion [18, 19].
Hos patienter utan kliniska kramper upptäcks
ibland vid EEG-undersökning pågående anfallsaktivi­
tet, s k elektrografiskt status epilepticus [20]. Det talar
vanligen för dåligt utfall, men en del patienter åter­
hämtar sig väl trots recidiverande anfallsaktivitet un­
der dagar till veckor [21]. Det är osäkert om behand­
ling av elektrografisk anfallsaktivitet förbättrar pro­
gnosen [22, 23].
Neurofysiologiska metoder
EEG-bilden förändras dagarna efter ett hjärtstopp
men påverkas föga av kroppstemperaturen. EEG-bak­
grundens utseende är tydligast kopplat till prognosen.
Återkomst av kontinuerlig bakgrundsaktivitet och
reaktivitet under det första dygnet är ett gynnsamt
tecken. Bland patienter som tidigt uppvisar konti­
nuerlig bakgrundsaktivitet men som senare utveck­
lar elektrografiskt status epilepticus finns en liten
grupp som får bra neurologiskt utfall [20]. Om man
inte använder kontinuerlig uppkoppling kan således
ett rutin-EEG under det första dygnet vara av värde
för jämförelse med ett rutin-EEG ca 3 dygn efter hjärt­
stoppet. Det senare ger dock det viktigaste underlaget
för prognosbedömning.
I nyare EEG-studier används ofta en standardiserad
tolkningsterminologi, som införts av American Clini­
cal Neurophysiology Society [24]. Bland 103 patienter i
TTM-studien [25] med rutin-EEG registrerat 2–4 dagar
efter hjärtstopp fann man att »högmalignt« mönster
(Figur 1) var kopplat till dåligt utfall med falskt positiv
frekvens på 0 procent och sensitivitet 50 procent [26].
Dessa mönster, som med varierande definition även
tidigare angivits som starkt förenade med dåligt ut­
fall [27], kan betraktas som säkra negativa prediktorer
om de uppträder inom detta tidsspann och om läke­
medelseffekt kan uteslutas.
Användning av sensorisk reaktionspotential (sen­
sory evoked potentials; SEP) förutsätter en tekniskt
korrekt undersökning och görs alltid bilateralt. Som
kvalitetsindikatorer ska svar finnas över plexus/låg
halsrygg (N10- respektive N13-potentialer; Figur 2),
och brusnivån kortikalt ska vara <0,25 μV, vilket vanli­
gen kräver muskelrelaxering och ibland nålelektroder.
Bedömning görs huruvida »svar finns«, »svar saknas
bilateralt« eller huruvida patienten tillhör en grupp
där registreringen är »obedömbar«, vilket innebär
Figur 1. »Högmalig-
na« EEG-mönster
som är associerade
med dåligt neuro-
logiskt utfall om de
registreras drygt 48
timmar efter hjärt-
stopp. A) helt flack/
supprimerad bak-
grund <10 μV, B) helt
flack/supprimerad
bakgrund med över-
lagrade periodiska
urladdningar, C) och
D) burst–suppression
med >50 procents
suppressionstid utan
(C) eller med (D)
överlagrade epilepti-
forma urladdningar.

Läkartidningen
Volym 114
ÖVERSIKT
att patienten prognosmässigt ska behandlas som om
N20-svar finns. Undersökningen kan i sådana fall med
fördel upprepas nästa dag.
I metaanalyser har bilateral avsaknad av N20-poten­
tialer vid undersökning 1–7 dygn efter hjärtstopp haft
falskt positiv frekvens på nära 0 procent för dåligt ut­
fall, men sensitiviteten är begränsad till ca 40 procent
[27]. Gränsen för avsaknad av N20-svar är inte strikt
definierad; 0,3 μV har föreslagits [28], men även låga
amplituder <0,5–0,6 μV talar starkt för dålig pro­gnos
[29, 30]. Att ett fåtal patienter rapporterats ha bra utfall
trots bortfall av N20-svar kan sannolikt hänföras till
feltolkning av artefaktrika registreringar [31, 32].
Bilddiagnostik
Efter fullbordad ischemi uppstår ett generellt cyto­
toxiskt ödem i hjärnan som gör att grå substans i
kortex och basala ganglier avgränsas dåligt eller inte
alls från vit substans på datortomografi (DT) (Figur 3).
Minskad kvot mellan täthet i grå och vit substans har
stark koppling till dåligt utfall om förändringarna är
utbredda och uppträder inom 24 timmar. Sensitivite­
ten varierar dock starkt beroende på vilka gränsvär­
den som tillämpas. Med kvoten mellan täthet i grå
och vit substans tillräckligt lågt satt för falskt positiv
frekvens (0–4 procent) har sensitiviteten visat sig vara
mycket låg: 3,5–20 procent i färska studier [33, 34].
Mindre uttalade ischemiska/anoxiska förändringar
är ofta svåra att påvisa och bedöma med hjälp av DT,
och för neurologisk prognosbedömning rekommen­
deras främst undersökning med magnetresonans
(MR) 3–5 dagar efter hjärtstoppet, eftersom MR-bil­
den utvecklas över tid. Diffusionsviktade bilder med
beräknad »apparent diffusion coefficient« (ADC), som
avspeglar medeldiffusionen i varje bildelement, är
överlägsna konventionella MR-sekvenser för att påvi­
sa akuta hypoxiska/ischemiska lesioner.
Den nedsatta diffusionen i sådana områden ger hög
signalintensitet (vitt) på diffusionsviktade bilder och
låg signalintensitet (svart) på kvantitativ ADC-karta
(Figur 4). Bilaterala utbredda eller multipla lesioner
med nedsatt diffusion i kortex, djup grå substans och
lillhjärna är förknippade med dålig prognos.
Stimulering
μV
Svarssignal
Kortex
Halsrygg
Plexus
ms
N 10
N 13
N 20
FIGUR 2. Sensorisk reaktionspotential, normalt svar
h Användning av sensorisk reaktionspotential (sensory evoked
potentials; SEP) med repetitiv stimulering över medianusnerven
med medelvärdesbildade svar över brakialplexus (N10), låg halsrygg
(N13) och kontralaterala sensoriska kortex (N20). Undersökningen
utförs alltid bilateralt. Bilateral avsaknad av N20-svar 72 timmar
efter hjärtstopp, med bevarade N10- och N13-svar, är mycket starkt
associerad med dåligt neurologiskt utfall.
Figur 3. Ischemiska/anoxiska skador i hjärna efter hjärtstopp visualiserade med
datortomografi. Till vänster: normal bild; till höger: cytotoxiskt ödem med utplånad
skillnad mellan vit och grå substans.
Figur 4. Ischemiska/anoxiska skador i hjärna efter hjärtstopp visualiserade med
magnetresonans. Överst till vänster: normal diffusionsviktad bild; överst till höger:
omfattande kortikala skador som framstår vita på diffusionsviktade bilder; underst
till vänster: normal bild med »apparent diffusion coefficient« (ADC); underst till hö-
ger: omfattande kortikala skador som framstår svarta på ADC-karta.`
    },
    {
      rubrik: 'Biomarkörer (NSE, S100B, GFAP, NfL)',
      text: `Läkartidningen
Volym 114
ÖVERSIKT
att patienten prognosmässigt ska behandlas som om
N20-svar finns. Undersökningen kan i sådana fall med
fördel upprepas nästa dag.
I metaanalyser har bilateral avsaknad av N20-poten­
tialer vid undersökning 1–7 dygn efter hjärtstopp haft
falskt positiv frekvens på nära 0 procent för dåligt ut­
fall, men sensitiviteten är begränsad till ca 40 procent
[27]. Gränsen för avsaknad av N20-svar är inte strikt
definierad; 0,3 μV har föreslagits [28], men även låga
amplituder <0,5–0,6 μV talar starkt för dålig pro­gnos
[29, 30]. Att ett fåtal patienter rapporterats ha bra utfall
trots bortfall av N20-svar kan sannolikt hänföras till
feltolkning av artefaktrika registreringar [31, 32].
Bilddiagnostik
Efter fullbordad ischemi uppstår ett generellt cyto­
toxiskt ödem i hjärnan som gör att grå substans i
kortex och basala ganglier avgränsas dåligt eller inte
alls från vit substans på datortomografi (DT) (Figur 3).
Minskad kvot mellan täthet i grå och vit substans har
stark koppling till dåligt utfall om förändringarna är
utbredda och uppträder inom 24 timmar. Sensitivite­
ten varierar dock starkt beroende på vilka gränsvär­
den som tillämpas. Med kvoten mellan täthet i grå
och vit substans tillräckligt lågt satt för falskt positiv
frekvens (0–4 procent) har sensitiviteten visat sig vara
mycket låg: 3,5–20 procent i färska studier [33, 34].
Mindre uttalade ischemiska/anoxiska förändringar
är ofta svåra att påvisa och bedöma med hjälp av DT,
och för neurologisk prognosbedömning rekommen­
deras främst undersökning med magnetresonans
(MR) 3–5 dagar efter hjärtstoppet, eftersom MR-bil­
den utvecklas över tid. Diffusionsviktade bilder med
beräknad »apparent diffusion coefficient« (ADC), som
avspeglar medeldiffusionen i varje bildelement, är
överlägsna konventionella MR-sekvenser för att påvi­
sa akuta hypoxiska/ischemiska lesioner.
Den nedsatta diffusionen i sådana områden ger hög
signalintensitet (vitt) på diffusionsviktade bilder och
låg signalintensitet (svart) på kvantitativ ADC-karta
(Figur 4). Bilaterala utbredda eller multipla lesioner
med nedsatt diffusion i kortex, djup grå substans och
lillhjärna är förknippade med dålig prognos.
Stimulering
μV
Svarssignal
Kortex
Halsrygg
Plexus
ms
N 10
N 13
N 20
FIGUR 2. Sensorisk reaktionspotential, normalt svar
h Användning av sensorisk reaktionspotential (sensory evoked
potentials; SEP) med repetitiv stimulering över medianusnerven
med medelvärdesbildade svar över brakialplexus (N10), låg halsrygg
(N13) och kontralaterala sensoriska kortex (N20). Undersökningen
utförs alltid bilateralt. Bilateral avsaknad av N20-svar 72 timmar
efter hjärtstopp, med bevarade N10- och N13-svar, är mycket starkt
associerad med dåligt neurologiskt utfall.
Figur 3. Ischemiska/anoxiska skador i hjärna efter hjärtstopp visualiserade med
datortomografi. Till vänster: normal bild; till höger: cytotoxiskt ödem med utplånad
skillnad mellan vit och grå substans.
Figur 4. Ischemiska/anoxiska skador i hjärna efter hjärtstopp visualiserade med
magnetresonans. Överst till vänster: normal diffusionsviktad bild; överst till höger:
omfattande kortikala skador som framstår vita på diffusionsviktade bilder; underst
till vänster: normal bild med »apparent diffusion coefficient« (ADC); underst till hö-
ger: omfattande kortikala skador som framstår svarta på ADC-karta.

Läkartidningen
2017
ÖVERSIKT
I en nyare studie med strukturerad visuell skatt­
ning av akuta diffusionslesioner nådde man 0 procent
falskt positiv frekvens och 55–60 procents sensitivitet
för dåligt utfall [35]. I studier med ADC-mätning har
låga värden i olika regioner eller i hela hjärnan asso­
cierats till dålig prognos. Nyligen fann man vid retro­
spektiv semiautomatisk diffusionsanalys i en multi­
centerkohort med 125 patienter att ADC <650 × 10-6
mm2/s i minst 10 procent av hjärnans volym gav 9 pro­
cent falskt positiv frekvens och 72 procents sensitivi­
tet för dåligt utfall [36].
Icke desto mindre är tillgängliga MR-studier ana­
lystekniskt heterogena, och för såväl diffusionsvik­
tade som ADC-baserade mätningar saknas säkra trös­
kelvärden för prognosbedömning i klinisk vardag.
Biomarkörer

Bland hittills kända biomarkörer i blod har neuron­
specifikt enolas (NSE), som frisätts till blodet från
hjärnans nervceller vid bl a hypoxisk/ischemisk ska­
da, visat sig fungera bäst för prognosbedömning vid
hjärtstopp [8]. NSE förekommer också i röda blodkrop­
par och vissa tumörer, varför hemolys respektive fö­
rekomst av neuroektodermal tumör kan ge förhöjda
NSE-värden utan hjärnskada.
En fördel med NSE är att det, till skillnad från kli­
niska undersökningsfynd och EEG, ger ett kvantita­
tivt mått som inte påverkas av sederande läkemedel.
Till nackdelarna hör att det har varit svårt att identi­
fiera tillförlitliga tröskelvärden för bra respektive då­
lig prognos. Detta beror delvis på bristande standardi­
sering av metoder och instrument [37] men också på
att provhanteringen skiftar mellan olika laboratorier.
Den hittills största studien med NSE som prognos­
tisk markör omfattade 686 patienter och visade att
tröskelvärde ≥48 ng/ml vid 48 timmar alternativt ≥38
ng/ml vid 72 timmar efter hjärtstopp gav ≤2 procent
falskt positiv frekvens och 58 procents sensitivitet för
dåligt utfall (Roche analysmetod). En stigande trend
mellan prov tagna vid 24 och 48 timmar stärkte det
negativa prognostiska värdet [38].
Som indikator för dåligt utfall rekommenderar vi
därför en kombination av höga värden vid 48 och 72
timmar efter hjärtstoppet och en stigande NSE-ni­
vå mellan 24 och 48 timmar. Vad som är höga värden
måste anges lokalt och baseras på vilken analysmetod
som används.
Prognosbedömning i praktiken
Rekommendationerna är avsedda som praktisk väg­
ledning för neurologisk prognosbedömning av patien­
ter som är medvetslösa efter hjärtstopp. De utgår från
svenska förhållanden och följer i allt väsentligt nyligen
publicerade europeiska riktlinjer [8]. En förutsättning
för adekvat prognosbedömning är att ett brett under­
lag samlats in genom systematiska undersökningar
vid specificerade tidpunkter efter hjärtstoppet och att
resultaten genomgående pekar i samma riktning.
Som komplement till den kliniska neurologiska un­
dersökningen är därför tillgång till DT, EEG och analys
av NSE av stor betydelse. MR kan ge god vägledning om
man har erfarenhet av mätmetoder och tolkning av
anoxis­ka/ischemiska typskador efter hjärtstopp. Sen­
sorisk reaktionspotential (SEP) är en viktig metod, och
h Rekommenderade tidpunkter och undersökningar med möjliga prognostiskt negativa fynd hos
patienter som är medvetslösa efter hjärtstopp. Tillräckligt säker prognos för dåligt neurologiskt
utfall, dvs död eller svår funktionsnedsätning, föreligger om patienten är fortsat medvetslös (inget
eller sträckande svar vid smärtstimulering) utan bidragande eﬀekt från sederande läkemedel och
om minst et av de orangemarkerade fynden föreligger tidigast 72 timmar efter hjärtstoppet, eller
om minst två av de gulmarkerade fynden föreligger tidigast 96 timmar efter hjärtstoppet.
Rödmarkerat fynd indikerar deﬁnitivt dåligt utfall om total hjärninfarkt kan veriﬁeras med
föreskriven diagnostik. Streckad linje anger tidsintervall inom vilket undersökningen kan utföras
och ge et resultat som är prognostiskt säkert.
1. Även senare vid misstanke om
strukturell skada. DT-halsrygg
görs vid misstanke om spinal
skada.
2. Vad som ska betraktas som
höga värden måste bestäm-
mas utifrån använd analysme-
tod.
3. Bilateral avsaknad av både
pupillreﬂexer och korneal-
reﬂexer.
Antal timmar efter återkomst av spontan cirkulation
DT-hjärna1
Klinisk
observation
Neuron-
speciﬁkt
enolas (NSE)
Sensorisk
reaktions-
potential
(SEP)
EEG
Neurologisk
undersökning
MR-hjärna
Cytotoxiskt ödem
Myoklont status
>30 minuter
Lägre än
vid 48
timmar
Utbredda ischemiska förändringar
på diﬀusionsviktade
bilder och ADC-karta
FIGUR 5. Rekommenderade tidpunkter och undersökningar
Högt
värde2
Högt
värde2
Inklämningstecken
Bortfall
N20-svar
Högmaligna
mönster
Bortfall
reﬂexer3
FAKTA 2. Prognosbedömning
Tillräckligt säker prognos
för dåligt neurologiskt
utfall (död eller svår funk-
tionsnedsättning) efter
hjärtstopp föreligger
om patienten är fortsatt
medvetslös (inget svar
eller sträckmönster vid
smärtstimulering) och
utan bidragande effekt
från sederande läke-
medel under följande
förutsättningar.
TIDIGAST 3 DYGN (72
timmar) efter hjärtstop-
pet med minst ett av
dessa fynd:
bb bilateralt bortfall av
pupill- och korneal-
reflex
bb bilateralt bortfall av
N20-svaret vid under-
sökning av sensorisk
reaktionspotential.
TIDIGAST 4 DYGN (96
timmar) efter hjärtstop-
pet med minst två av
dessa fynd:
bb myoklont status som
debuterat <48 timmar
efter återkomst av
spontan cirkulation
bb höga NSE-värden vid
48 och 72 timmar samt
en stigande trend mel-
lan värdena 24 och 48
timmar efter återkomst
av spontan cirkulation
bb högmalignt EEG-möns-
ter på registrering ca
3 dygn efter återkomst
av spontan cirkulation
eller senare
bb omfattande tecken
på anoxisk/ischemisk
skada på DT-under-
sökning av hjärnan
inom 24 timmar eller
MR-undersökning av
hjärnan 3–5 dygn efter
hjärtstoppet.`
    },
    {
      rubrik: 'MR-bilddiagnostik',
      text: `Läkartidningen
2017
ÖVERSIKT
I en nyare studie med strukturerad visuell skatt­
ning av akuta diffusionslesioner nådde man 0 procent
falskt positiv frekvens och 55–60 procents sensitivitet
för dåligt utfall [35]. I studier med ADC-mätning har
låga värden i olika regioner eller i hela hjärnan asso­
cierats till dålig prognos. Nyligen fann man vid retro­
spektiv semiautomatisk diffusionsanalys i en multi­
centerkohort med 125 patienter att ADC <650 × 10-6
mm2/s i minst 10 procent av hjärnans volym gav 9 pro­
cent falskt positiv frekvens och 72 procents sensitivi­
tet för dåligt utfall [36].
Icke desto mindre är tillgängliga MR-studier ana­
lystekniskt heterogena, och för såväl diffusionsvik­
tade som ADC-baserade mätningar saknas säkra trös­
kelvärden för prognosbedömning i klinisk vardag.
Biomarkörer

Bland hittills kända biomarkörer i blod har neuron­
specifikt enolas (NSE), som frisätts till blodet från
hjärnans nervceller vid bl a hypoxisk/ischemisk ska­
da, visat sig fungera bäst för prognosbedömning vid
hjärtstopp [8]. NSE förekommer också i röda blodkrop­
par och vissa tumörer, varför hemolys respektive fö­
rekomst av neuroektodermal tumör kan ge förhöjda
NSE-värden utan hjärnskada.
En fördel med NSE är att det, till skillnad från kli­
niska undersökningsfynd och EEG, ger ett kvantita­
tivt mått som inte påverkas av sederande läkemedel.
Till nackdelarna hör att det har varit svårt att identi­
fiera tillförlitliga tröskelvärden för bra respektive då­
lig prognos. Detta beror delvis på bristande standardi­
sering av metoder och instrument [37] men också på
att provhanteringen skiftar mellan olika laboratorier.
Den hittills största studien med NSE som prognos­
tisk markör omfattade 686 patienter och visade att
tröskelvärde ≥48 ng/ml vid 48 timmar alternativt ≥38
ng/ml vid 72 timmar efter hjärtstopp gav ≤2 procent
falskt positiv frekvens och 58 procents sensitivitet för
dåligt utfall (Roche analysmetod). En stigande trend
mellan prov tagna vid 24 och 48 timmar stärkte det
negativa prognostiska värdet [38].
Som indikator för dåligt utfall rekommenderar vi
därför en kombination av höga värden vid 48 och 72
timmar efter hjärtstoppet och en stigande NSE-ni­
vå mellan 24 och 48 timmar. Vad som är höga värden
måste anges lokalt och baseras på vilken analysmetod
som används.
Prognosbedömning i praktiken
Rekommendationerna är avsedda som praktisk väg­
ledning för neurologisk prognosbedömning av patien­
ter som är medvetslösa efter hjärtstopp. De utgår från
svenska förhållanden och följer i allt väsentligt nyligen
publicerade europeiska riktlinjer [8]. En förutsättning
för adekvat prognosbedömning är att ett brett under­
lag samlats in genom systematiska undersökningar
vid specificerade tidpunkter efter hjärtstoppet och att
resultaten genomgående pekar i samma riktning.
Som komplement till den kliniska neurologiska un­
dersökningen är därför tillgång till DT, EEG och analys
av NSE av stor betydelse. MR kan ge god vägledning om
man har erfarenhet av mätmetoder och tolkning av
anoxis­ka/ischemiska typskador efter hjärtstopp. Sen­
sorisk reaktionspotential (SEP) är en viktig metod, och
h Rekommenderade tidpunkter och undersökningar med möjliga prognostiskt negativa fynd hos
patienter som är medvetslösa efter hjärtstopp. Tillräckligt säker prognos för dåligt neurologiskt
utfall, dvs död eller svår funktionsnedsätning, föreligger om patienten är fortsat medvetslös (inget
eller sträckande svar vid smärtstimulering) utan bidragande eﬀekt från sederande läkemedel och
om minst et av de orangemarkerade fynden föreligger tidigast 72 timmar efter hjärtstoppet, eller
om minst två av de gulmarkerade fynden föreligger tidigast 96 timmar efter hjärtstoppet.
Rödmarkerat fynd indikerar deﬁnitivt dåligt utfall om total hjärninfarkt kan veriﬁeras med
föreskriven diagnostik. Streckad linje anger tidsintervall inom vilket undersökningen kan utföras
och ge et resultat som är prognostiskt säkert.
1. Även senare vid misstanke om
strukturell skada. DT-halsrygg
görs vid misstanke om spinal
skada.
2. Vad som ska betraktas som
höga värden måste bestäm-
mas utifrån använd analysme-
tod.
3. Bilateral avsaknad av både
pupillreﬂexer och korneal-
reﬂexer.
Antal timmar efter återkomst av spontan cirkulation
DT-hjärna1
Klinisk
observation
Neuron-
speciﬁkt
enolas (NSE)
Sensorisk
reaktions-
potential
(SEP)
EEG
Neurologisk
undersökning
MR-hjärna
Cytotoxiskt ödem
Myoklont status
>30 minuter
Lägre än
vid 48
timmar
Utbredda ischemiska förändringar
på diﬀusionsviktade
bilder och ADC-karta
FIGUR 5. Rekommenderade tidpunkter och undersökningar
Högt
värde2
Högt
värde2
Inklämningstecken
Bortfall
N20-svar
Högmaligna
mönster
Bortfall
reﬂexer3
FAKTA 2. Prognosbedömning
Tillräckligt säker prognos
för dåligt neurologiskt
utfall (död eller svår funk-
tionsnedsättning) efter
hjärtstopp föreligger
om patienten är fortsatt
medvetslös (inget svar
eller sträckmönster vid
smärtstimulering) och
utan bidragande effekt
från sederande läke-
medel under följande
förutsättningar.
TIDIGAST 3 DYGN (72
timmar) efter hjärtstop-
pet med minst ett av
dessa fynd:
bb bilateralt bortfall av
pupill- och korneal-
reflex
bb bilateralt bortfall av
N20-svaret vid under-
sökning av sensorisk
reaktionspotential.
TIDIGAST 4 DYGN (96
timmar) efter hjärtstop-
pet med minst två av
dessa fynd:
bb myoklont status som
debuterat <48 timmar
efter återkomst av
spontan cirkulation
bb höga NSE-värden vid
48 och 72 timmar samt
en stigande trend mel-
lan värdena 24 och 48
timmar efter återkomst
av spontan cirkulation
bb högmalignt EEG-möns-
ter på registrering ca
3 dygn efter återkomst
av spontan cirkulation
eller senare
bb omfattande tecken
på anoxisk/ischemisk
skada på DT-under-
sökning av hjärnan
inom 24 timmar eller
MR-undersökning av
hjärnan 3–5 dygn efter
hjärtstoppet.

Läkartidningen
Volym 114
ÖVERSIKT
det är önskvärt att tillgängligheten till metoden ökar.
Figur 5 visar rekommenderade undersökningar och
tidpunkter efter hjärtstopp. Det är viktigt att påver­
kan från sederande läkemedel minimeras inför kli­
nisk undersökning och EEG-registrering. Under de 3
första dygnen samlas information, men någon säker
neurologisk prognosbedömning kan inte göras förrän
tidigast 72 timmar efter hjärtstoppet.
Prediktorer för gynnsam prognos är bristfälligt ut­
forskade. Patienter som återfår kontinuerlig EEG-bak­
grund inom 24 timmar [39], patienter med ett godartat
rutin-EEG efter avslutad temperaturbehandling [26]
och patienter med lokaliserande smärtreaktion eller
bättre efter avslutad sedering [40] har bra prognos för
återgång till ett självständigt liv med god livskvalitet.
Avbrytande av behandling
Nyttan med intensivvård måste värderas löpande
från första dagen utifrån pågående svikt i olika or­
gan, grundsjukdomar och patientens habituella funk­
tionsnivå. Under de 3 första dygnen efter hjärtstopp
bör den bedömningen dock hållas skild från vad man
tror om det neurologiska utfallet. Man bör vara med­
veten om risken för självuppfyllande profetia när livs­
uppehållande behandling avbryts utan säkra predik­
torer för dåligt neurologiskt utfall [5-7].
Beräkningar baserade på amerikanska registerdata
har antytt att 26 procent av de patienter som avlidit ef­
ter det att intensivvård avbrutits tidigare än 72 timmar
skulle ha kunnat överleva om livsuppehållande be­
handling hade fortsatt [18]. I en nyligen publice­rad eu­
ropeisk studie återfick 29 procent av dem som vakna­
de medvetandet senare än 72 timmar efter återkomst
av spontan cirkulation [41]. Författarna fann att sede­
rande läkemedel i kombination med farmako­kinetiska
riskfaktorer som hög ålder och njursvikt hade avgö­
rande betydelse för sena uppvaknanden (upp till 12
dagar efter hjärtstoppet). Dessa studier talar starkt för
användning av kortverkande sederande preparat för
att undvika såväl förlängd som för tidigt avbruten vård
på grund av kvardröjande läkemedelseffekter.
Många patienter med dålig prognos går inte att
identifiera vid den första bedömningen efter 3 dygn,
eftersom de mest robusta negativa prediktorerna har
begränsad sensitivitet (okulära reflexer, sensorisk re­
aktionspotential) och tillgänglighet (sensorisk reak­
tionspotential). De flesta patienter med dålig prognos
kommer dock att kunna identifieras efter ytterligare
något dygn med hjälp av resultaten från de rekom­
menderade undersökningarna (Fakta 2).
Även efter 4–5 dygn kommer ett litet antal patien­
ter att vara fortsatt medvetslösa men utan tillräckligt
säkra prediktorer för dåligt utfall. I det läget rekom­
menderas något till några dygns fortsatt intensivvård
med upprepade kliniska undersökningar och EEG.
Detta konservativa förhållningssätt syftar till att möj­
liggöra sent uppvaknande för enstaka patienter.
Någon tidsgräns för aktiv exspektans i avsaknad av
tillräckligt säkra undersökningsresultat är svår att re­
kommendera. Totalt 1 veckas intensivvård ter sig rim­
lig för att kunna göra kompletterande undersökning­
ar och för att helt utesluta inverkan från sederande
läkemedel. Ytterligare tid kan vara motiverad i vissa
fall, t ex om man valt att aktivt behandla elektrogra­
fiskt status epilepticus med stöd av gynnsamma pro­
gnostiska faktorer [20].
Det saknas vetenskapligt stöd för att förlängd in­
tensivvård i brist på tydliga tecken på svår hjärnskada
skulle skapa fler vegetativa patienter. Patienter som
inte vaknat efter hjärtstopp avlider vanligen en kort
tid efter det att intensivvård avbrutits och man över­
gått till palliativ vård [2, 41].
I avsaknad av tydliga positiva eller negativa predik­
torer blir till sist den sammantagna kliniska bilden
avgörande för vidare beslut. s
b Potentiella bindningar eller jävsförhållanden: Hans Friberg har
mottagit föreläsararvode från BARD Medical och är medicinsk
rådgivare till QuickCool AB.
Citera som: Läkartidningen. 2017;114:EIUH`
    },
    {
      rubrik: 'Multimodal prognosalgoritm (ERC/ESICM 2021)',
      text: `Läkartidningen
Volym 114
ÖVERSIKT
det är önskvärt att tillgängligheten till metoden ökar.
Figur 5 visar rekommenderade undersökningar och
tidpunkter efter hjärtstopp. Det är viktigt att påver­
kan från sederande läkemedel minimeras inför kli­
nisk undersökning och EEG-registrering. Under de 3
första dygnen samlas information, men någon säker
neurologisk prognosbedömning kan inte göras förrän
tidigast 72 timmar efter hjärtstoppet.
Prediktorer för gynnsam prognos är bristfälligt ut­
forskade. Patienter som återfår kontinuerlig EEG-bak­
grund inom 24 timmar [39], patienter med ett godartat
rutin-EEG efter avslutad temperaturbehandling [26]
och patienter med lokaliserande smärtreaktion eller
bättre efter avslutad sedering [40] har bra prognos för
återgång till ett självständigt liv med god livskvalitet.
Avbrytande av behandling
Nyttan med intensivvård måste värderas löpande
från första dagen utifrån pågående svikt i olika or­
gan, grundsjukdomar och patientens habituella funk­
tionsnivå. Under de 3 första dygnen efter hjärtstopp
bör den bedömningen dock hållas skild från vad man
tror om det neurologiska utfallet. Man bör vara med­
veten om risken för självuppfyllande profetia när livs­
uppehållande behandling avbryts utan säkra predik­
torer för dåligt neurologiskt utfall [5-7].
Beräkningar baserade på amerikanska registerdata
har antytt att 26 procent av de patienter som avlidit ef­
ter det att intensivvård avbrutits tidigare än 72 timmar
skulle ha kunnat överleva om livsuppehållande be­
handling hade fortsatt [18]. I en nyligen publice­rad eu­
ropeisk studie återfick 29 procent av dem som vakna­
de medvetandet senare än 72 timmar efter återkomst
av spontan cirkulation [41]. Författarna fann att sede­
rande läkemedel i kombination med farmako­kinetiska
riskfaktorer som hög ålder och njursvikt hade avgö­
rande betydelse för sena uppvaknanden (upp till 12
dagar efter hjärtstoppet). Dessa studier talar starkt för
användning av kortverkande sederande preparat för
att undvika såväl förlängd som för tidigt avbruten vård
på grund av kvardröjande läkemedelseffekter.
Många patienter med dålig prognos går inte att
identifiera vid den första bedömningen efter 3 dygn,
eftersom de mest robusta negativa prediktorerna har
begränsad sensitivitet (okulära reflexer, sensorisk re­
aktionspotential) och tillgänglighet (sensorisk reak­
tionspotential). De flesta patienter med dålig prognos
kommer dock att kunna identifieras efter ytterligare
något dygn med hjälp av resultaten från de rekom­
menderade undersökningarna (Fakta 2).
Även efter 4–5 dygn kommer ett litet antal patien­
ter att vara fortsatt medvetslösa men utan tillräckligt
säkra prediktorer för dåligt utfall. I det läget rekom­
menderas något till några dygns fortsatt intensivvård
med upprepade kliniska undersökningar och EEG.
Detta konservativa förhållningssätt syftar till att möj­
liggöra sent uppvaknande för enstaka patienter.
Någon tidsgräns för aktiv exspektans i avsaknad av
tillräckligt säkra undersökningsresultat är svår att re­
kommendera. Totalt 1 veckas intensivvård ter sig rim­
lig för att kunna göra kompletterande undersökning­
ar och för att helt utesluta inverkan från sederande
läkemedel. Ytterligare tid kan vara motiverad i vissa
fall, t ex om man valt att aktivt behandla elektrogra­
fiskt status epilepticus med stöd av gynnsamma pro­
gnostiska faktorer [20].
Det saknas vetenskapligt stöd för att förlängd in­
tensivvård i brist på tydliga tecken på svår hjärnskada
skulle skapa fler vegetativa patienter. Patienter som
inte vaknat efter hjärtstopp avlider vanligen en kort
tid efter det att intensivvård avbrutits och man över­
gått till palliativ vård [2, 41].
I avsaknad av tydliga positiva eller negativa predik­
torer blir till sist den sammantagna kliniska bilden
avgörande för vidare beslut. s
b Potentiella bindningar eller jävsförhållanden: Hans Friberg har
mottagit föreläsararvode från BARD Medical och är medicinsk
rådgivare till QuickCool AB.
Citera som: Läkartidningen. 2017;114:EIUH

Läkartidningen
2017
ÖVERSIKT
REFERENSER
1.	 Svenska hjärt–lung­
räddningsregistret.
Årsrapport 2016. http://
www.registercen­
trum.se/sites/default/
files/dokument/
svenska_hjart-lung­
raddningsregistret-ars­
rapport_2015.pdf
2.	 Dragancea I, Rundgren
M, Englund E, et al. The
influence of induced
hypothermia and
delayed prognostica­
tion on the mode of
death after cardiac
arrest. Resuscitation.
2013;84(3):337-42.
3.	 Cronberg T, Brizzi M,
Liedholm LJ, et al. Nytt
stöd för bedömning av
neurologisk prognos
efter hjärtstopp. Re­
kommendationer från
svenska HLR-rådets
expertgrupp. Läkartid­
ningen. 2012;109:2146-
50.
4.	 Sandroni C, Cariou
A, Cavallaro F, et al.
Prognostication in
comatose survivors of
cardiac arrest: an ad­
visory statement from
the European Resusci­
tation Council and the
European Society of
Intensive Care Medici­
ne. Intensive Care Med.
2014;40(12):1816-31.
5.	 Gold B, Puertas L, Davis
SP, et al. Awakening
after cardiac arrest
and post resuscitation
hypothermia: are we
pulling the plug too
early? Resuscitation.
2014;85(2):211-4.
6.	 Grossestreuer AV,
Abella BS, Leary M, et
al. Time to awakening
and neurologic out­
come in therapeutic
hypothermia-­treated
cardiac arrest pa­
tients. Resuscitation.
2013;84(12):1741-6.
7.	 Mulder M, Gibbs HG,
Smith SW, et al. Awake­
ning and withdrawal
of life-sustaining treat­
ment in cardiac arrest
survivors treated with
therapeutic hypother­
mia*. Crit Care Med.
2014;42(12):2493-9.
8.	 Nolan JP, Soar J, Cariou
A, et al; European
Resuscitation Council;
European Society
of Intensive Care
Medicine. European
Resuscitation Council
and European Society
of Intensive Care Medi­
cine 2015 guidelines for
post-resuscitation care.
Intensive Care Med.
2015;41(12):2039-56.
9.	 Safar P. Resuscitation
after brain ischemia.
I: Grenvik A, Safar P,
editors: Brain failure
and resuscitation.
New York: Churchill
Livingstone; 1981. p.
155-84.
10.	Herlitz J, Svensson
L, Strömsöe A. Flera
faktorer påverkar prog­
nosen. Läkartidningen.
2015;112:C9LH.
11.	 Kjaergaard J, Nielsen
N, Winther-Jensen M,
et al. Impact of time to
return of sponta­
neous circulation on
neuroprotective effect
of targeted tempe­
rature management
at 33 or 36 degrees in
comatose survivors of
out-of hospital cardiac
arrest. Resuscitation.
2015;96:310-6.
12.	Cha WC, Lee EJ, Hwang
SS. The duration of car­
diopulmonary resus­
citation in emergency
departments after
out-of-hospital cardiac
arrest is associated
with the outcome: a
nationwide observatio­
nal study. Resuscita­
tion. 2015;96:323-7.
13.	Goldberger ZD, Chan
PS, Berg RA, et al; Ame­
rican Heart Association
Get With The Guideli­
nes – Resuscitation
(formerly National
Registry of Cardiopul­
monary Resuscitation)
Investigators. Duration
of resuscitation efforts
and survival after
in-hospital cardiac
arrest: an observa­
tional study. Lancet.
2012;380(9852):1473-81.
14.	Talikowska M, Tohira
H, Finn J. Cardiopul­
monary resuscitation
quality and patient
survival outcome
in cardiac arrest: a
systematic review and
meta-analysis. Resusci­
tation. 2015;96:66-77.
15.	Adrie C, Cariou A,
Mourvillier B, et al.
Predicting survival
with good neurological
recovery at hospital
admission after suc­
cessful resuscitation
of out-of-hospital
cardiac arrest: the
OHCA score. Eur Heart
J. 2006;27(23):2840-5.
16.	Maupain C, Bougouin
W, Lamhaut L, et al.
The CAHP (Cardiac
Arrest Hospital Prog­
nosis) score: a tool for
risk stratification after
out-of-hospital cardiac
arrest. Eur Heart J.
2016;37(42):3222-8.
17.	 Seder DB, Sunde K,
Rubertsson S, et al;
International Car­
diac Arrest Registry.
Neurologic outcomes
and postresuscitation
care of patients with
myoclonus following
cardiac arrest. Crit Care
Med. 2015;43(5):965-72.
18.	Elmer J, Torres C,
Aufderheide TP, et
al; Resuscitation
Outcomes Consortium.
Association of early
withdrawal of life-sus­
taining therapy for
perceived neurolo­
gical prognosis with
mortality after cardiac
arrest. Resuscitation.
2016;102:127-35.
19.	Lucas JM, Cocchi MN,
Salciccioli J, et al. Neu­
rologic recovery after
therapeutic hypother­
mia in patients with
post-cardiac arrest
myoclonus. Resuscita­
tion. 2012;83(2):265-9.
20.	Dragancea I, Backman
S, Westhall E, et al.
Outcome following
postanoxic status
epilepticus in patients
with targeted tempera­
ture management after
cardiac arrest. Epilepsy
Behav. 2015;49:173-7.
21.	Westhall E, Rundgren
M, Lilja G, et al.
Postanoxic status epi­
lepticus can be iden­
tified and treatment
guided successfully by
continuous electroen­
cephalography. Ther
Hypothermia Temp
Manag. 2013;3(2):84-7.
22.	Cronberg T. Should
postanoxic status
epilepticus be treated
agressively? Yes! J
Clin Neurophysiol.
2015;32(6):449-51.
23.	Rossetti AO. Should
postanoxic status
epilepticus be treated
aggressively? No! J
Clin Neurophysiol.
2015;32(6):447-8.
24.	Hirsch LJ, LaRoche
SM, Gaspard N, et al.
American Clinical
Neurophysiology
Society’s Standardized
critical care EEG ter­
minology: 2012 version.
J Clin Neurophysiol.
2013;30(1):1-27.
25.	Nielsen N, Wetterslev J,
Cronberg T, et al; TTM
Trial Investigators.
Targeted temperature
management at 33
degrees C versus 36
degrees C after cardiac
arrest. N Engl J Med.
2013;369(23):2197-206.
26.	Westhall E, Rossetti AO,
van Rootselaar AF, et al;
TTM Trial Investi­
gators. Standardized
EEG interpretation
accurately predicts
prognosis after cardiac
arrest. Neurology.
2016;86(16):1482-90.
27.	 Golan E, Barrett K, Alali
AS, et al. Predicting
neurologic outcome
after targeted tempera­
ture management for
cardiac arrest: syste­
matic review and me­
ta-analysis. Crit Care
Med. 2014;42(8):1919-30.
28.	Zandbergen EG, Hijdra
A, de Haan RJ, et al.
Interobserver variation
in the interpretation
of SSEPs in anoxic-­
ischaemic coma.
Clin Neurophysiol.
2006;117(7):1529-35.
29.	Endisch C, Storm
C, Ploner CJ, et al.
Amplitudes of SSEP
and outcome in cardiac
arrest survivors: a
prospective cohort
study. Neurology.
2015;85(20):1752-60.
30.	Hakimi K, Kinney G,
Kraft G, et al. Reliability
in interpretation of
median somatosensory
evoked potentials in
the setting of coma:
factors and implica­
tions. Neurocrit Care.
2009;11(3):353-61.
31.	Bouwes A, Binnekade
JM, Kuiper MA, et al.
Prognosis of coma after
therapeutic hypother­
mia: a prospective co­
hort study. Ann Neurol.
2012;71(2):206-12.
32.	Dragancea I, Horn J,
Kuiper M, et al; TTM
Trial Investigators.
Neurological prognos­
tication after cardiac
arrest and targeted
temperature mana­
gement 33°C versus
36°C: results from a
randomised controlled
clinical trial. Resuscita­
tion. 2015;93:164-70.
33.	Cristia C, Ho ML, Levy
S, et al. The association
between a quantitative
computed tomography
(CT) measurement
of cerebral edema
and outcomes in
post-cardiac
arrest – a validation
study. Resuscitation.
2014;85(10):1348-53.
34.	Lee BK, Jeung KW,
Song KH, et al;
Korean Hypothermia
Network Investigators.
Prognostic values
of gray matter to
white matter ratios on
early brain computed
tomography in adult
comatose patients after
out-of-hospital car­
diac arrest of cardiac
etiology. Resuscitation.
2015;96:46-52.
35.	Hirsch KG, Mlynash M,
Jansen S, et al. Prognos­
tic value of a qualitati­
ve brain MRI scoring
system after cardiac
arrest. J Neuroimaging.
2015;25(3):430-7.
36.	Hirsch KG, Mlynash M,
Eyngorn I, et al. Multi-­
center study of diffu­
sion-weighted imaging
in coma after cardiac
arrest. Neurocrit Care.
2016;24(1):82-9.
37.	 Mlynash M, Buckwal­
ter MS, Okada A, et al.
Serum neuron-specific
enolase levels from the
same patients differ
between laboratories:
assessment of a pro­
spective post-cardiac
arrest cohort. Neurocrit
Care. 2013;19(2):161-6.
38.	Stammet P, Collignon
O, Hassager C, et al;
TTM-Trial Investiga­
tors. Neuron-specific
enolase as a predictor
of death or poor neuro­
logical outcome after
out-of-hospital cardiac
arrest and targeted
temperature mana­
gement at 33°C and
36°C. J Am Coll Cardiol.
2015;65(19):2104-14.
39.	Rundgren M, West­
hall E, Cronberg T,
et al. Continuous
amplitude-integrated
electroencephalogram
predicts outcome
in hypothermia-­
treated cardiac arrest
patients. Crit Care Med.
2010;38(9):1838-44.
40.	Schefold JC, Storm
C, Krüger A, et al. The
Glasgow Coma Score is
a predictor of good out­
come in cardiac arrest
patients treated with
therapeutic hypother­
mia. Resuscitation.
2009;80(6):658-61.
41.	Paul M, Bougouin W,
Geri G, et al. Delayed
awakening after car­
diac arrest: prevalence
and risk factors in
the Parisian registry.
Intensive Care Med.
2016;42(7):1128-36.
SUMMARY
Assessment of neurologic prognosis
after cardiac arrest. Updated
recommendations from the Swedish
CPR Council Expert Group
European Resuscitation Council
(ERC) issued updated guidelines
for postresuscitation care in 2015.
This paper provides updated
Swedish recommendations for
neurological prognostication of
patients remaining unconscious
after cardiac arrest (CA). The
prognostication should be based on
independent methods; clinical and
neurophysiological examinations,
imaging and biomarkers. It should
not be performed earlier than three
days after CA and any influence
from sedatives must be negligible.
Bilateral absence of both corneal
and pupillary reflexes and bilaterally
absent Somatosensory Evoked N20
Potentials (SSEP) at 72 hours are
reliable predictors of poor outcome
but the ocular reflexes have limited
sensitivity and SSEP has limited
availability. Hence, further delay of
at least 24 hours and combinations
of findings from multiple methods
are often needed for reliable
prognostication.  If firm evidence
of a poor prognosis is lacking four
days after CA, further expectation
with repeated examinations is
recommended.`
    }
    ]
  },

  // ── Kalkylatorer ──────────────────────────────────────────
  {
    id: 'ledd-kalkylator',
    titel: 'LEDD-kalkylator',
    kategori: 'kalkylatorer',
    kalkylatorUrl: 'ledd_kalkylator.html',
    innehall: [
      { rubrik: 'LEDD-kalkylator', text: 'Beräkning av levodopa-ekvivalenta dygnsdoser (LEDD) för antiparkinsonläkemedel. Baserad på Jost et al. 2023.' }
    ]
  }
];
