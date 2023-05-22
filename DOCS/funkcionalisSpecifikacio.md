# Funkcionális specifikáció

## 1. Jelenlegi helyzet leírása
A megrendelő cége modernizálni és terjeszkedni szeretne. Az eddig használt
nyomtatott mód már elavult. Nagyon költséges, mivel a bevételük legnagyobb
része a felettük álló újságíró vállalathoz kerül. Nagyobb szabadságra vágynak, 
és ezt csak az újságíró vállattól való elszakadás teszi lehetővé. Az olvasók
visszajelzése alapján is az olvasóközönség egy modernebb, kiforrottabb technológia
használatát követeli meg. További igények merültek fel a terjeszkedéssel kapcsolatban.
Nem szeretnék, ha a célközönség a nyomtatott kiadványok számától függne. Egy közösség
kialakítása van folyamatban, amely kezd átláthatatlanná, követhetetlenné válni. 
Igény van egy új rendszerre.
## 2. Vágyálomrendszer leírása
A megrendelő elvárása egy **modern technológiákon alapuló, jól kezelhető weboldal**. 
A weboldalnak **felhasználóbarátnak** kell lennie, méghozzá olyan szinten, hogy egy kezdő 
felhasználó (akár egy idősebb, számítógépekhez nem értő személy) is könnyen meg tudja
tanulni a használatát. 

A Viccportál kft. célja egy **közösség kialakítása**. Ehhez egy bejelentkezési rendszer megvalósítása
szükséges. A weboldalon fel kell tüntetni a **vicc létrehozójának** felhasználónevét.
A bizonyos felhasználók a saját vicceiket **szerkeszteni** kell, hogy tudják. Ezenkívül
lehetőséget kell adni nekik **új viccek feltöltésére**. A következő verzióban igényt 
tartanak toplista, chat, értékelés funkciókra. Ezekre a weboldalnak fel kell lennie készülve.

Fontos szempont a **viccek cenzúrázása**. Ehhez kérelmeznek egy **adminisztrátori jogosultságot**.
Szeretnének lehetőséget kapni bárki **viccének kitöltésére**. Itt is fontos, hogy
látszódjon a vicc létrehozójának **felhasználóneve**, hogy így figyelni tudják a nem megfelelő
tartalmú viccek feltöltőit. A jövőben szeretnének egy moderációs csapatot fenntartani.
Ehhez fel kell készíteni a weboldalt, hogy lehetőség nyíljon a felhasználók kitiltására,
esetleg bizonyos ideig tartó némítására.

## 3. Jelenlegi üzleti folyamatok modellje
Jelenleg a Viccportál Kft. szerződésben áll Heti Hír újsággal. Az érdeklődők, postai úton vagy
elektronikus levélben juttatják el a vicceiket a Viccportál Kft.-nek. Ezek után a cég az ellenőrzött
vicceket továbbítja az újságnak. Innentől kezdve viszont minden döntés az újságé: mely viccek
kerülhetnek be és melyeket vetik el, mert a szerződés értelmében hetente csak meghatározott számú
vicc megjelenésére van lehetőség. Tehát a Viccportál Kft. gyakorlatilag csak javaslatként
továbbítja az újságnak a viccek, a beküldött viccek töredékének megjelenítésére van csak lehetőség.
Többszöri tárgyalások során sem sikerült az újsággal mindkét fél számára előnyös új szerződést
kötni, mivel az újságnak nincs kapacitása több vicc kiadására. A Viccportál Kft szeretné, ha minden
érdeklődő lehetőséget kapna, hogy a vicceit megmutassa a viccek kedvelőinek. Ezért egy korszerű,
elektronikus rendszer elkészítésére kérték fel a Fejlesztői 4es csoport kft.-t.

## 4. Igényelt üzleti folyamatok modellje
A megrendelő szeretne egy olyan weboldalt létrehozni, amelyre bárki regisztrálhat, akinek van kedve,
és ezt követően a vicceit feltöltheti, szerkesztheti vagy akár le is törölheti. Továbbá bárki,
aki felkeresi az oldalt regisztráció nélkül is olvashatja az addig feltöltött összes viccet.
A Weboldalnak a mobil telefonkészülékekről is könnyen elérhetőnek és ugyan olyan funkciók
alapján használhatónak kell lennie. A felület legyen letisztul és könnyen átlátható, hogy minden
korosztály számára egyszerűen megérthető, tanulható és használható legyen. Későbbieken a megrendelő
vállalat szeretné ellenőrizni a beküldött vicceket, és kiszűrni az oda nem illő tartalmat, a
témájuk szerint csoportosítani a vicceket, rangsorolni őket és vicc verseny szervezését
is lebonyolítaná. Ehhez szükségük lenne több jogosultsági szintre is.

## 5. Követelménylista

| Modul | Név | Leírás |
| --- | --- | --- |
| Jogosultság | Bejelentkezés | A felhasználók számára biztosítani kell egy bejelentkezési felületet, ahol a felhasználónevükkel, és jelszavukkal azonosítva magukat, az oldal védett részeire engednek belépést. Hibás adatok esetén hibaüzenetet kap a felhasználó, míg a megfelelő adatokkal átirányít a weboldal. |
| Jogosultság | Kijelentkezés | A bejelentkezett, munkamenettel rendelkező felhasználók számára biztosítani kell a kijelentkezés lehetőségét, hogy munkamenetüket biztonsággal lezárhassák. |
| Jogosultság | Regisztráció | Az új felhasználók számára egy regisztrációs űrlap áll rendelkezésre, ahol egy felhasználónevet és jelszót kell megadniuk. A rendszernek ellenőriznie kell a felhasználónév ütközést, valamint a jelszó erősségét. Hiba esetén értesíti a felhasználót a fennálló problémáról. |
| Jogosultság | Jogosultsági szintek | **Vendég felhasználó:** felhasználói fiókkal nem rendeklező, az oldalra látogató felhasználó. **Bejelentkezett felhasználó:** Érvényes munkamenettel rendelkezik, melyben azonosította magát, és fiókjába sikeresen bejelentkezett. **Adminisztrátor felhasználó:** A bejelentkezett felhasználó tulajdonságain felül, speciális tanúsítvánnyal rendelkezik, mely felhatalmazza a **Vicc kezelés** modulhoz való hozzáféréshez.
| Vicc kezelés | Vicc hozzáadása | A bejelentkezett adminisztrátorok számára egy űrlap áll rendelkezésre, ahol a viccek címét, és szövegét feltudják vinni. |
| Vicc kezelés | Vicc módosítása | A már felvitt vicceket utólag módosítani tudják a bejelentkezett adminisztrátorok. A vicc címe, és szövege egyaránt átírható. |
| Vicc kezelés |  tt viccet törölheti egy adminisztrátor, igény esetén. |

## 6. Fogalomszótár

**Konténerizált alkalmazás** - A szerver egy Docker nevű virtuális linux gépen fut. Ennek előnye, hogy a rendszer bármely környezetbe kitelepítve, azonos működést tud produkálni. Plusz biztonsági réteget alkot, teljesítményben elenyésző a különbség.

**Reszponzív dizájn** - Töréspontokat meghatározva, máshogy jelenik meg különböző kijelzőméreteken. Folyadékhoz hasonlóan kitölti a rendelkezésre álló teret a felület.

**Database** - Az alkalmazás egy MySql nevű adatbázistároló motort használ. Ennek a motornak az előnye, hogy megbízható, és hatékony módon tárolja az adatokat, így nagy mennyiségű adatnál sem kell a teljesítményromlástól, adatvesztéstől félni. Könnyen karban tartható, és támogatott szoftver.

**UI** - User Interface, a felhasználói felület, mely a weboldalon megjelenik. Jelen esetben Bootstrap és jQuery technológiákra épülő felület kerül kialakításra.

**Backend** - A szerver egy NodeJS alapú kiszolgáló. Támogatja a többlábas üzemeltetést a magas rendelkezésreállás érdekében. Modern.

## 7. A rendszerre vonatkozó szabályok

A rendszernek az alábbi szabályokat kell tudnia kezelnie:

**Regisztráció** - Vicc feltötéséhez kötelező a regisztráció. A regisztráció során kötelező adatok: név és jelszó.

**Regisztrált törlése** - A regisztrált felhasználónak biztosítani kell, hogy tudja törölni magát a rendszerből.

**Regisztrált felhasználó** - Vicc feltöltésére jogosult, és saját vicceinek törlésére.

**Adminisztrátor** - Az adminisztrátor az a személy, aki rendelkezik mások által feltett viccek törlési jogával

**Viccfeltöltés szabálya** - A viccek feltöltése során a rendszernek fel kell hívnia a figyelmet, milyen típusú vicceket nem lehet feltölteni. Ezt mivel nem lehet gépileg ellenőrizni így az adminisztrátor jogosultsággal rendelkező user fogja tudni törölni.

**Cookiek** - Az odalnak az alábbi sütiket tartalmazza
- Ideiglenes sütik: Ideiglenes „sütik”, melyek addig maradnak eszközén, amíg el nem hagyja a user a  weboldalt.
- Állandó sütik: a webes keresőjének beállításától függően hosszabb ideig, vagy egészen addig az eszközén maradnak, amíg user nem törli.
- Harmadik féltől származó sütik: melyeket harmadik fél helyez el a böngészőben (pl. Google Analitika). Ezek abban az esetben kerülnek a böngésző elhelyezésre, ha a meglátogatott weboldal használja a harmadik fél által nyújtott szolgáltatásokat.

**GDPR, Adatvédelem** - Elengedhetetlen, hogy az oldal a mostani GDPR elvárásoknak megfelelve üzemeljen. Cookiek elfogadása az oldalra érkezéskor.