# Rendszerterv

## Rendszer általános leírása

A rendszer egy weboldal, mely elsődleges funkciója, hogy a látogatók vicceket tudjanak olvasni, amik egyszerűen megtalálhatóak és kezelhetőek. Ennek okán történtek az alábbi technológiák kiválasztása. A rendszer MYSQL adatbázisra épül, ahol a viccek és a felhasználók kerülnek tárolásra. A backend a nodejs-en alapul, a webhosting pedig express.js technológiát használ, az APIkat pedig a server.js köti össze.A Frontend elkészítését megelőzően low és high fidelity design tervek kerültek elkészítésre, melyeket figyelembevée Bootstrap, JQuery keretrendszerek alkalmazása vált ideálissá.

**A rendszeren dolgozó fejlesztők és főbb tevékenységi területük** 
- **Backend fejlesztők**
-- Huszti Levente (login, sessionkezelés)
-- Lukács Péter (crud műveletek)

- **Frontend fejlesztők**
-- Szabó Róbert (html, css, jQuery, felület összekötés backendel)
-- Juhász Benedek (design, html, css)

## Rendszer célja

**Felület**

A rendszer célja egy felhasználóbarát weboldal. A kezelésének egyszerűnek kell lennie. Minél kevesebb almenüt
tartalmazva. A kattintások mennyiségét a lehető legkevesebbre kell csökkenteni a felületen. Lehetőleg legyen
minden a felhasználó szeme előtt. 

A menüpontok és gombok feliratai jól érthetők kell, hogy legyenek. A központban a
viccek állnak. Ezért egy vicc legyen rögtön szem előtt. Fontos a felhasználók megkülönböztetése. Az ehhez szükséges
regisztráló és bejelentkező felület is legyen könnyen kezelhető. 

A weboldalt fel kell készíteni, hogy úgy számítógépen, mint telefonon egyformán szépen jelenjen meg, legyen reszponzív.
Fontos, hogy a nyomógombok, betűméretek nagyobbak 
legyenek, hogy így ne okozzon gondot a felhasználónak a weboldalon való navigálás. 

**Programkód**

Maga a weboldal legyen könnyen 
fejleszthető, moduláris. Több jövőbeli fejlesztésre is szükség van, ezért fontos a jól olvasható, könnyen módosítható
kód. Elengedhetetlen a SOLID elvek követése. Az összefüggő programrészeket külön mappába kell szervezni. Egy fájlban
csak egy modul legyen megtalálható.

**Üzemeltetés**

Maga a weboldal üzemeltetése megváltozhat, ezért könnyen áthelyezhetőnek kell lennie. Cél egy dockerizált 
webalkalmazás létrehozása. Tartalmaznia kell minden beállítást, az adatbázis szerver bekonfigurását, az adatbázis
feltöltését, a weboldal hosztolását, és a restAPI beimplementálását.

**Kezelés**

A weboldalon a viccek szerkesztése és hozzáadása legyen átlátható, egyszerűen kezelhető. Legyen biztonságos, egyes
felhasználók csak a saját vicceiket módosíthassák, kivéve az admin felhasználót. Az itt kiírt viccek listája legyen
hasonló a weboldalon megjelenő viccekhez.


## Rendszer felépítése

### Backend
**Adatbázis**

MySQL adatbázisrendszert használ a rendszer.
Az adatbázis két táblát tartalmaz, a *jokes* táblát, amely a vicceket tartalmazza, és a *user* táblát, melyben
a felhasználók adatait tároljuk.

*Jokes tábla*

| Név | Típus | Leírás |
| --- | --- | --- |
| id | BIGINT | Egyedi azonosító |
| created_at | DATETIME | A vicc létrehozásának időpontja |
| title | VARCHAR | A vicc címe |
| content | VARCHAR | A vicc tartalma |
| creator | BIGINT | A vicc feltöltőjének azonosítója |

*User tábla*

| Név | Típus | Leírás |
| --- | --- | --- |
| id | BIGINT | Egyedi azonosító |
| username | VARCHAR | Felhasználó neve |
| password | VARCHAR | Felhasználó jelszava hash-elt formában |

**Rest API**

A backend nodejs-en alapul. A webhosting-hoz az express.js technológia van használva.
A különböző api request-ek külön modulokban vannak megírva. Ezeket a server.js fájl köti össze.

*Api kérések*

| Kérés típusa | Útvonal | Leírás |
| --- | --- | --- |
| GET | /api/jokes | Lekéri az összes viccet |
| GET | /api/jokes/:id | Lekér egy viccet a megadott id-vel |
| GET | /api/randomJoke | Lekér egy véletlenszerűen kiválasztott viccet |
| POST | /api/register | Beregisztrálja a felhasználót a megadott adatokkal |
| POST | /api/login | Megpróbálja bejelentkeztetni a felhasználót a megadott adatokkal |
| POST | /api/logout | Kijelentkezteti a felhasználót |
| POST | /api/checksession | Leellenőrzi, hogy a felhasználónak van-e létező session-je |
| POST | /api/newJoke | Új vicc hozzáadása |
| PUT | /api/updateJoke | Vicc szerkesztése |
| DELETE | /api/deleteJoke | Vicc törlése |

### Frontend

**Design tervek, prototípusok** 

A Frontend fejlesztésének megkezdése előtt a Figma Design eszköz segítségével low és high fidelity design tervek kerültek megvalósításra. Ezekeben a tervekben került meghatározásra a weboldal felépítése, menüstruktúrája és alapvető funkciói. A design tervek során rögzítésre kerültek az oldal arculati elemei (betűtípus, színpaletta, logó) is.

**Low Fidelity rajzok:**

Login

![Low fidelity login](https://github.com/BPLUFJ/AFP_2020_1_Lev_csop4/blob/main/DOCS/Design/low_fidelity/low_fidelity_login.PNG)


Kezdőlap

![Low fidelity home](https://github.com/BPLUFJ/AFP_2020_1_Lev_csop4/blob/main/DOCS/Design/low_fidelity/low_fidelity_home.PNG)

Vicc szerkesztése

![Low fidelity admin edit](https://github.com/BPLUFJ/AFP_2020_1_Lev_csop4/blob/main/DOCS/Design/low_fidelity/low_fidelity_admin_edit.PNG)
**High Fidelity rajzok:**

Login
![High fidelity login](https://github.com/BPLUFJ/AFP_2020_1_Lev_csop4/blob/main/DOCS/Design/high_fidelity/high_fidelity_login.PNG)


Kezdőlap

![Low fidelity home](https://github.com/BPLUFJ/AFP_2020_1_Lev_csop4/blob/main/DOCS/Design/high_fidelity/high_fidelity_home.PNG)

Vicc szerkesztése

![High fidelity admin edit](https://github.com/BPLUFJ/AFP_2020_1_Lev_csop4/blob/main/DOCS/Design/high_fidelity/high_fidelity_admin_edit.PNG)

**Odal felépítése, menüpontok és funkciók**
- Kezdőlap
- Bejelentkezés
- Regisztráció

Az oldalon regisztráció nélkül a Kezdőlapon feltöltött viccek olvasása lehetséges. Amennyiben a felhasználó regisztrál lehetősége nyílik saját vicceinek feltöltésére, azok szerkesztésére és törlésére egyaránt. Név és jelszó megadása szükséges a sikeres regisztrációhoz.

Az oldal tervezése során figyelmbe lett véve annak esetleges továbbfejlesztése így ennek megfelelően lett modulárisan kialakítva.

Az alkalmazás megjelenítése Bootstrap(v4.5.3) keretrenszer segítségével történik.
A backend REST api meghívásához a jQuery(v3.5.1) népszerű JavaScript könyvtárt használjuk.

*API-t hívó függvények:*

| Javascript függvény/metódus | Kérés útvonal |
| --- | --- |
| getJokes() | /api/jokes |
| getJokeById(id) | /api/jokes/:id |
| getRandomJoke() | /api/randomJoke | 
| doRegister(username, password) | /api/register | 
| doLogin(username, password)  | /api/login | 
| doLogout() | /api/logout | 
| checkSession() | /api/checksession | 
| uploadJoke(title,content) | /api/newJoke | 
| updateJoke(id,title,content) | /api/updateJoke | 
| deleteJoke(id) | /api/deleteJoke | 



### Üzemeltetés
Az alkalmazás konténerizált, obfuszkált állapotban kerül átadásra
a Viccportál Kft számára. A Viccportál Kft saját szerverén üzemeltetett,
kubernetes klaszterbe fog kikerülni. Saját adatbázisukkal,
rendszereikkel, melyben tárolják a korábbi kiadványaikat nem fog ütközni
az elkülönített névtérből adódóan. Cégünk az első kitelepítésig vállalja,
hogy támogatást nyújt a beüzemeléshez, integráláshoz.

A konténerizált alkalmazás az alábbi módon épül fel, fentről lefelé egyre
mélyebben levő réteg felé haladva:

```
- NodeJS <-> MySql
- Docker engine
- Kubernetes klaszter node-ja
- Ubuntu 20.04LTS szerver operációs rendszer
- Ubuntu linux 5.4.8 kernel
- Bare metal (maga a hardver)
```

A GDPR adatbiztonság érdekében, a MySql adatbázis szerver egy
virtuális hálózaton keresztül, csak a NodeJS alkalmazással
képes kommunikálni, így egy esetleges illetéktelen behatolás esetén
is plusz védelmi réteggel van elfedve a támadó elől. Telepítéskor
Kubernetes Secret-et használva titkosított jelszóval kerül telepítésre.

```
            Virtuális hálózat
NodeJs <--------------------------> MySql
```

## Idővonal
- *2020.12.01. Első ötlet elvetése, újra kezdés*
- 2020.12.14. Alaprendszer elkészülése, adatbázis kapcsolat, session kezelés, szerver (backend) 
- 2020.12.14. Első körös drótváz(frontend) 
- 2020.12.20. Api endpointok lerakása (backend)
- 2020.12.26. Refaktorálás (backend)
- 2021.01.16. Statikus frontend elkészítése
- 2020.01.17. Frontend-Backend összekötése
- 2020.01.19. Projekt bemutatása 


## Erőforrások
A Viccportál Kft kockázatos befektetéssel megtakarításuk
nagy hányadát áldozza a projektre, ezzel bízva a célkitűzés
sikerében, és befektetett pénzük megtérülésében. A projektet
kizárólagosan a Viccportál Kft finanszírozza. A kész alkalmazás 
saját már meglevő rack típusú szerverén fog futni, melynek
üzemeltetési költségeit vállalják.
