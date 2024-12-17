<h1 align='center'>Click up - clone</h1>

<div align='center'> ![Static Badge](https://img.shields.io/badge/15.0.3-white?logo=nextdotjs&label=nextjs)![Static Badge](https://img.shields.io/badge/5.62.2-red?logo=reactquery&logoColor=white&label=react-query)![Static Badge](https://img.shields.io/badge/8.20.5-white?logo=reacttable&logoColor=white&label=react-table&labelColor=blue)![Static Badge](https://img.shields.io/badge/11.0.2-white?logo=firebase&logoColor=white&label=firebase&labelColor=orange)
</div>

 <p align='center'>
<b >Grupowy nie komercyjny projekt stworzony z myśla o pogłębianiu swoich umiejętności.</b>
</p>

## Spis treści

- [Spis treści](#spis-treści)
- [Wprowadzenie](#wprowadzenie)
- [Wersja live](#wersja-live)
- [Użyte technologie](#użyte-technologie)
- [Opis stron i ich elementów](#opis-stron-i-ich-elementów)
  - [Strona logowania](#strona-logowania)
    - [Jak korzystać](#jak-korzystać)
  - [Strona rejestracji](#strona-rejestracji)
    - [Jak korzystać](#jak-korzystać-1)
  - [Dashboard](#dashboard)
    - [Sidebar](#sidebar)
    - [Subbar](#subbar)

## Wprowadzenie

Click-up clone jest klonem aplikacji webowej Click up. Projekt powstał jako wyzwanie dla developerów aby zapoznać się z najnowszymi technologiami oferowanymi dla aplikacji webowych. Nie jest planowana wersja komercyjna.

## Wersja live

Wersje live można zobaczyć na stronie https://clickup-clone-sable.vercel.app/login. Prosimy o nie umieszczanie swoich oficjalnych mailów w celu testowania. Jedna z funkcjonalności wykorzystuje liste użytkowników co może prowadzić do wycieku adresów mailowych. Mail jest wymagany w procesie logowania! Prosimy również byście drodzy testerzy - nie rozwalili naszej apki w pierwszym tygodniu jej upublicznia :)

## Użyte technologie

    "@hookform/resolvers": "^3.9.1",
    "@tanstack/react-query": "^5.62.2",
    "@tanstack/react-table": "^8.20.5",
    "@tanstack/react-query-devtools": "^5.62.2",
    "@types/jest": "^29.5.14",
    "firebase": "^11.0.2",
    "next": "15.0.3",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-hook-form": "^7.53.2",
    "react-icons": "^5.3.0",
    "yup": "^1.4.0"

## Opis stron i ich elementów

### Strona logowania

![Imgur](https://i.imgur.com/a/Xnu0dxu.png)

**Odpowiedzialni za stronę**: Mariusz Olszewski, Karol Słupiński
Karol Słupiński - user interface i walidacja danych za pomocą react-hook-form i yup.
Mariusz Olszewski - tworzenie tras, połączenie z bazą danych, zapisywanie danych do bazy danych, ustawienie połączenia z google mail.

#### Jak korzystać

Strona przyjmuje adres email i hasło. Hasło musi składać się z przynajmniej 8 znaków i zawierać jedną dużą litere.

### Strona rejestracji

![Imgur](https://imgur.com/jvoLAfP)

**Odpowiedzialni za stronę**: Mariusz Olszewski, Karol Słupiński
Karol Słupiński - user interface i walidacja danych za pomocą react-hook-form i yup.
Mariusz Olszewski - tworzenie tras, połączenie z bazą danych, zapisywanie danych do bazy danych, ustawienie połączenia z google mail.

#### Jak korzystać

1. Wpisz Imię i Nazwisko. Nazwa użytkownika jest w dalszych etapach przekształcana w inicjały. Twoje imię i nazwisko będzie widniało w wielu miejscach aplikacji więc dobrze abyś nie posługiwał się nazwami którymi nie chcesz być przywitany przez następną stronę.
2. Email. Zaleca się z korzystania mailów używanych do testowania aplikacji. Firebase może odrzucać niektóre skrzynki mailowe. Po zakończeniu procesu rejestracji na podany mail przyjdzie potwierdzenie rejestracji.
3. Hasło. Hasło musi składać się z przynajmniej 8 znaków i zawierać jedną dużą literę.

### Dashboard

Dashboard jest główną częścią aplikacji. W związku z nie będzie omawiany jako jedna stroną a na podstawie elementów.

#### Sidebar

![Imgur](https://imgur.com/OD7nvDG)

**Odpowiedzialni za element**: Mariusz Olszewski, Jakub King
Jakub King - tworzenie user interface wszystkich elementów listy i elementów typu pop-up. Integracja elementów i osadzenie na stronie.
Mariusz Olszewski - integracja user interface z firestore.

**Górna część nawigacji**
Na ten moment większość linków jest nie aktywna do czasu wprowadzenia przypisanych dla nich funkcjonalności. Po naciśnięciu linku użytkownik zostanie przeniesiony do odpowiadającej nazwie strony.

**Dolna część nawigacji - spaces**
Ta część nawigacji bocznej jest odpowiedzialna za pokazywanie w formie folderów - workspaces i projects.

**Elementy dolnej nawigacji**

**Lista**
Po kliknięciu któregoś z folderów użytkownik jest odsyłany do ścieżki strony składającej się z workspace `workspaceId/l/projectId`. Adres jest dynamicznie ustalana za pomocą providera `useData.tsx` i `useUser.tsx` które otrzymują id od elementów danej listy. Id jest przesyłane akcją onMouseEnter w WorkspaceButtons.tsx. W dynamicznym generowaniu stron kluczowy był `params` i `useRouter` w `SidebarContent.tsx`.

**Workspace**
Workspace jest folderem przechowującym listy z taskami. Gdy dodawany jest workspace to wzraz z nim umieszczana jest pierwsza domyślna lista o nazwie "List".

Dodawanie workspace:
Workspace jest dodawany z modala
![Imgur](https://imgur.com/zji5801)

Usuwanie workspace:
Menu pojawia się po nacisnieciu przycisku który pojawia się po najechaniu na element listy.
![Imgur](https://imgur.com/rRGAx47)

Po wybraniu opcji Delete pojawia się ten modal
![Imgur](https://imgur.com/DREFBXG)

#### Subbar

![Imgur](https://imgur.com/J3RQfdi)

**Odpowiedzialny za element** : Jakub Skrzeczowski
Subbar występuje w dwóch głównych formach:

1. **Prosty subbar** (subbar pod górną częścią nawigacji):  
   - Zawiera linki, tekst lub buttony, w zależnośći który link z **Górna część nawigacji** jest aktywny. Większość obecnie jest nieaktywna i czeka na dostarcznie funkcjonalności im odpowiadającym

2. **view subBar** (workspaceId/l/projectId):  
   - Ten element zawiera przyciski do otwierania modali, otwierania dodatkowego navbaru bezpośredio nad view subBar, a także dodatkowy subbar zawierający filtry umożliwiające zarządzanie listami w workspace.

**MIT License**

Copyright (c) [2024] Mariusz Olszewski

Zezwala się na korzystanie, kopiowanie, modyfikowanie, scalanie, publikowanie, dystrybucję, sublicencjonowanie i/lub sprzedaż kopii Oprogramowania wyłącznie do celów naukowych, badawczych lub edukacyjnych. Oprogramowanie nie może być używane do celów komercyjnych. Wszelkie kopiowanie i dystrybucja oprogramowania muszą zawierać powyższą notkę licencyjną oraz powiadomienie o braku gwarancji.

Oprogramowanie jest dostarczane "w takim stanie, w jakim jest", bez żadnej gwarancji, wyrażonej ani domniemanej, w tym m. in. gwarancji przydatności handlowej czy przydatności do określonego celu. W żadnym wypadku autorzy ani właściciele praw autorskich nie ponoszą odpowiedzialności za jakiekolwiek roszczenia, szkody lub inne zobowiązania wynikające z umowy, czynu niedozwolonego lub w inny sposób wynikające z używania Oprogramowania.

**MIT License**

Copyright (c) [2024] Mariusz Olszewski

Permission is hereby granted, free of charge, to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software solely for academic, research, or educational purposes. The Software may not be used for commercial purposes. Copies of the Software must include the above copyright notice and this permission notice.

The Software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, or non-infringement. In no event shall the authors or copyright holders be liable for any claims, damages, or other liabilities, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the Software or the use or other dealings in the Software.
