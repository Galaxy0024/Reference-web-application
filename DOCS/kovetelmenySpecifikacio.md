# Követelményspecifikáció

## 1. Jelenlegi helyzet leírása
A Viccportál kft. egy feltörekvő kisvállalat. 2018-ban alapították a céget, tehát még elég
újak a piacon. A forgalmuk viszont a 2020-as évben igazán megnövekedett. Eddig a helyi újság-
ban jelenítették meg a vicceket. Így az újság olvasói voltak a célközönség, főleg nyugdíjasok.
Az utóbbi hónapokban viszont a fiatalok körében is népszerűvé vált. Mivel lehetőség van viccek
beküldésére is, egy "viccmegosztó közösség" alakult ki az olvasók között. Sokan csak emiatt a
cikk miatt vásárolták meg a hetilapot. Régen nem látott forgalmat generálva az újságíró
vállalatnak. A probléma viszont az, hogy az újságíró vállalat a bevétel legnagyobb részét 
magának követeli. Hosszú tárgyalások után sem sikerült jobb belátásra bírni a vezetőséget.
Hiába szóltak a statisztikák, adatok egyértelműen a Viccportál kft. mellett. Ezen kívül a
visszajelzések között is egyre gyakoribb lett az, hogy egy elavult technológiát választottak
a viccek megosztására. Sokkal több embert tudnának elérni, ha egy weboldalon tennék közzé a 
vicceket. 
## 2. Vágyálomrendszer leírása
A Viccportál kft. azt szeretné, ha egy jól átlátható, felhasználóbarát, könnyen kezelhető
weboldalon jelennének meg a vicceik. Ez fontos, mert nem szeretnének lemondani a nyugdíjas
olvasókról sem, tehát szeretnék, ha ők is könnyen meg tudnák tanulni az oldal kezelését.
Fontos szempont még, hogy lehetőség legyen az olvasók által beküldött viccek feltöltésére,
esetleg szerkesztésére. A vicceket cenzúrázni szeretnék, ezért a nem megfelelő tartalmú viccek
törlésére is szükség van. Ezen kívül szempont egy bejelentkezés megvalósítása, hogy így
továbbra is megmaradjon a közösségen belüli kommunikáció.

## 3. Jelenlegi üzleti folyamatok modellje
Jelenleg a Viccportál Kft. szerződésben áll Heti Hír újsággal. A Vicc portálhoz levélben
vagy akár elektronikus úton beküldött vicceket a vállalat továbbítja az újságnak, ám
ezek után már nem felügyelhetik, hogy az újság miként használja fel a beküldött vicceket.
A portál csak javaslatként továbbítja az újságnak a viccek, így a végső döntés az újság
szerkesztőségé a viccek megjelenéséről. A szerződésben egy bizonyos számú vicc megjelenítésére
van lehetőség hetente, így ez korlátozza a megjelenő viccek mennyiségét, mert az újság
kapacitása nem enged többet. A Viccportál Kft szeretné, ha mindenki lehetőséget kapna arra,
hogy a vicceit megmutathassa a közönségnek, ezért egy korszerű, elektronikus rendszer
elkészítésére kérték fel a Fejlesztői 4es csoport kft.-t.

## 4. Igényelt üzleti folyamatok modellje
A megrendelő szeretne egy olyan weboldalt létrehozni, amelyre bárki regisztrálhat, és
ezt követően a vicceit feltöltheti, szerkesztheti vagy akár le is törölheti. Továbbá bárki,
aki felkeresi az oldalt regisztráció nélkül is olvashassa az addig feltöltött összes viccet.
A weboldal legyen mobilkészülékről is könnyen elérhető és használható. A felület legyen
letisztul és könnyen átlátható, minden korosztály számára megérthető. Későbbieken a megrendelő
vállalat szeretné több funkcióval is bővíteni az oldalt.

## 5. Követelménylista

| Modul | Név | Leírás |
| --- | --- | --- |
| Jogosultság | Bejelentkezés | Bejelentkezés felület a felhasználók számára |
| Jogosultság | Kijelentkezés | Kijelentkezés lehetősége a felhasználók számára|
| Jogosultság | Regisztráció | Regisztráció az új felhasználók számára |
| Jogosultság | Jogosultsági szintek | Vendég, Felhasználó, Adminisztrátor |
| Vicc kezelés | Vicc hozzáadása | Új vicceket lehet felvinni a rendszerbe |
| Vicc kezelés | Vicc módosítása | A már felvitt vicceket módosítani lehet |
| Vicc kezelés | Vicc törlése | A már felvitt vicceket törölni lehet a rendszerből |

## 6. Fogalomszótár

**Konténerizált alkalmazás** - Az alkalmazás egy virtuális környezetben, szeparáltan fut, a többi szoftvertől elzárva, és védve.

**Reszponzív dizájn** - Az alkalmazás felülete az eszköz kijelzőjéhez igazodva a rendelkezésre álló területet kitöltve jeleníti meg a weboldalt.

**Database** - Az alkalmazás a felhasználók adatait, és a felvitt vicceket egy perzisztens tárolóba helyezi, így az alkalmazástól függetlenül biztonságosan tárolódnak az adatok.

**UI** - User Interface, a felhasználói felület, mely a weboldalon megjelenik.

**Backend** - A kiszolgáló, mely a felhasználói felület működését biztosítja. Kommunikál az adatbázissal.

## 7. A rendszerre vonatkozó szabályok

A rendszer megfelelő működéséhez elengedhetetlen a Viccportál kft. által előírt szabályok létrehozása és annak betartatása, ezenfelül a mostani weboldalszabályoknak (GDPR) is meg kell felelnie . 

**Regisztráció**: Ahhoz, hogy valaki viccet töltsön fel, szükséges mindenképp regisztrálnia és nevét megadnia. Ugyanis ezek alapján válik lehetővé az esetleges obszcén viccek felügyelete, enélkül nem történhet vicc feltöltése.

**Cenzúra**: A vicc  feltöltésekor a feltöltőnek nyilvánvalónak kell lennie mik a szabályok, ahhoz, hogy viccet tölthessen fel. Nem lehetséges bármilyen antiszemita, rassziszta viccek feltöltése.

**GDPR, Cookiek**: Elengedhetetlen, hogy az oldal a mostani GDPR elvárásoknak megfelelve üzemeljen. Ezenfelül a szükséges adatokat cookiekban tárolja el az oldal és ezt tudassa is az oldalra érkezővel, akinek el kell tudnia fogadnia az oldal megnyitásakor.

**Impresszum oldal** - Előírásoknak megfelelően, kötelező feltüntetni az oldal üzemeletetőjét. Társasági forma, cég esetén adószám, cégjegyzékszám, állandó cím, tárhelyszolgáltató.

