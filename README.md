<h1 align='center'>Click up - clone</h1>

<div align='center'>

![Static Badge](https://img.shields.io/badge/15.0.3-white?logo=nextdotjs&label=nextjs) ![Static Badge](https://img.shields.io/badge/5.62.2-red?logo=reactquery&logoColor=white&label=react-query) ![Static Badge](https://img.shields.io/badge/8.20.5-white?logo=reacttable&logoColor=white&label=react-table&labelColor=blue) ![Static Badge](https://img.shields.io/badge/11.0.2-white?logo=firebase&logoColor=white&label=firebase&labelColor=orange)

</div>

 <p align='center'>
<b > Niekomercyjny projekt grupowy stworzony z myślą o pogłębianiu swoich umiejętności.</b>
</p>

## Spis treści

- [Spis treści](#spis-treści)
- [Wprowadzenie](#wprowadzenie)
- [Wersja live](#wersja-live)
- [🛠️ Użyte technologie](#️-użyte-technologie)
  - [📦 Frameworki i biblioteki](#-frameworki-i-biblioteki)
  - [📋 Formularze i walidacja](#-formularze-i-walidacja)
  - [📊 Zarządzanie danymi](#-zarządzanie-danymi)
  - [✉️ E-maile](#️-e-maile)
  - [🧪 Testowanie](#-testowanie)
  - [👨‍💻 Inne](#-inne)
  - [Jak uruchomić lokalnie](#jak-uruchomić-lokalnie)
  - [🧪 Testowanie](#-testowanie-1)
- [Opis stron i ich elementów](#opis-stron-i-ich-elementów)
  - [Strona logowania](#strona-logowania)
    - [Jak korzystać](#jak-korzystać)
  - [Strona rejestracji](#strona-rejestracji)
    - [Jak korzystać](#jak-korzystać-1)
  - [Home](#home)
  - [Dashboard](#dashboard)
  - [Sidebar](#sidebar)
  - [Elementy dolnej nawigacji](#elementy-dolnej-nawigacji)
    - [Subbar](#subbar)
- [👥 Zespół](#-zespół)

## Wprowadzenie

ClickUp Clone to niekomercyjny projekt zespołowy inspirowany aplikacją ClickUp. Celem było praktyczne poznanie nowoczesnych technologii webowych (Nextjs) i praca w środowisku zbliżonym do produkcyjnego. Nie jest planowana wersja komercyjna.

## Wersja live

Wersje live można zobaczyć na stronie https://clickup-clone-sable.vercel.app/login.

⚠️ Prosimy o niepodawanie prawdziwych adresów e-mail – aplikacja wykorzystuje publicznie widoczną listę użytkowników.
Mail jest wymagany w procesie logowania! Prosimy również byście drodzy testerzy - nie rozwalili naszej apki w pierwszym tygodniu jej upublicznia :)

## 🛠️ Użyte technologie

### 📦 Frameworki i biblioteki

- ⚛️ **React 18.3.1**
- ⏭️ **Next.js 15.0.3**
- 🔥 **Firebase** (Authentication, Firestore, emulatory)
- 🎨 **TailwindCSS 3.4.1**

### 📋 Formularze i walidacja

- 🪝 **React Hook Form**
- ✅ **Yup** (walidacja)
- 🔄 **@hookform/resolvers**

### 📊 Zarządzanie danymi

- 🔺 **@tanstack/react-query** (cache, fetching)
- 🧮 **@tanstack/react-table** (tabele danych)

### ✉️ E-maile

- 📧 **react-email** & **@react-email/components**
- 📨 **nodemailer**
- 💌 **emailjs-com**

### 🧪 Testowanie

- 🧫 **Jest** + **jest-environment-jsdom**
- 🧪 **@testing-library/react** & **jest-dom**
- 🔥 **@firebase/rules-unit-testing** (testy uprawnień Firestore)

### 👨‍💻 Inne

- 📄 **TypeScript**
- 🧰 **ESLint**
- 🖼️ **react-loading-skeleton**
- 🎨 **react-icons**

### Jak uruchomić lokalnie

1. **Sklonuj repozytorium:**

   ```bash
   git clone https://github.com/molszewski34/clickup-clone.git
   cd clickup-clone

   ```

2. **Zainstaluj zależności:**

   ```
   npm install
   ```

3. **Utwórz plik `.env.local` i uzupełnij zmienne środowiskowe:**

   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
   NEXT_PUBLIC_FIREBASE_APP_ID=
   EMAIL_FROM=
   PASS=
   ```

4. **Uruchom projekt:**
   ```
   npm run dev
   ```
5. **Przejdź do http://localhost:3000**

### 🧪 Testowanie

Projekt korzysta z [Jest](https://jestjs.io/) do testów jednostkowych.

Aby uruchomić testy:

```bash
npm run test
```

## Opis stron i ich elementów

### Strona logowania

![Imgur](https://imgur.com/HWwqH95.png)

**Odpowiedzialni za stronę**: Mariusz Olszewski, Karol Słupiński

- Karol Słupiński - user interface i walidacja danych za pomocą react-hook-form i yup.
- Mariusz Olszewski - tworzenie tras, połączenie z bazą danych, zapisywanie danych do bazy danych, ustawienie połączenia z google mail.

#### Jak korzystać

Strona przyjmuje adres email i hasło. Hasło musi składać się z przynajmniej 8 znaków i zawierać jedną dużą litere.

### Strona rejestracji

![Imgur](https://imgur.com/jvoLAfP.png)

**Odpowiedzialni za stronę**: Mariusz Olszewski, Karol Słupiński

- Karol Słupiński - user interface i walidacja danych za pomocą react-hook-form i yup.
- Mariusz Olszewski - tworzenie tras, połączenie z bazą danych, zapisywanie danych do bazy danych, ustawienie połączenia z google mail.

#### Jak korzystać

1. **Wpisz Imię i Nazwisko.** Nazwa użytkownika jest w dalszych etapach przekształcana w inicjały. Twoje imię i nazwisko będzie widniało w wielu miejscach aplikacji więc dobrze abyś nie posługiwał się nazwami którymi nie chcesz być przywitany przez następną stronę.
2. **Wpisz Email.** Zaleca się z korzystania mailów używanych do testowania aplikacji. Firebase może odrzucać niektóre skrzynki mailowe. Po zakończeniu procesu rejestracji na podany mail przyjdzie potwierdzenie rejestracji.
3. **Hasło.** Hasło musi składać się z przynajmniej 8 znaków i zawierać jedną dużą literę.

### Home

**Assigned to me**

Element interface użytkownika ukazujący przypisane do niego zadania. Zadania podzielone są na 3 kategorie: In progress, To do i ukryte Completed.

Aby ukazać kategorie Compleded należy naciśnąć przycisk Closed.

**My work**

Element w przygotowaniu

### Dashboard

Dashboard jest główną częścią aplikacji. W związku z czym nie będzie omawiany jako jedna strona, a na podstawie elementów.

### Sidebar

![Imgur](https://imgur.com/OD7nvDG.png)

**Odpowiedzialni za element**: Mariusz Olszewski, Jakub King

- Jakub King - tworzenie user interface wszystkich elementów listy i elementów typu pop-up. Integracja elementów i osadzenie na stronie.
- Mariusz Olszewski - integracja user interface z firestore.

**Górna część nawigacji**
Na ten moment większość linków jest nie aktywna do czasu wprowadzenia przypisanych dla nich funkcjonalności. Po naciśnięciu linku użytkownik zostanie przeniesiony do odpowiadającej nazwie strony.

**Dolna część nawigacji - spaces**
Ta część nawigacji bocznej jest odpowiedzialna za pokazywanie w formie folderów - workspaces i projects.

### Elementy dolnej nawigacji

**Lista**
Po kliknięciu któregoś z folderów użytkownik jest odsyłany do ścieżki strony składającej się z workspace `workspaceId/l/projectId`. Adres jest dynamicznie ustalana za pomocą providera `useData.tsx` i `useUser.tsx` które otrzymują id od elementów danej listy. Id jest przesyłane akcją onMouseEnter w WorkspaceButtons.tsx. W dynamicznym generowaniu stron kluczowy był `params` i `useRouter` w `SidebarContent.tsx`.

**Workspace**
Workspace jest folderem przechowującym listy z taskami. Gdy dodawany jest workspace to wzraz z nim umieszczana jest pierwsza domyślna lista o nazwie "List".

Dodawanie workspace:
Workspace jest dodawany z modala
![Imgur](https://imgur.com/zji5801.png)

Usuwanie workspace:
Menu pojawia się po nacisnieciu przycisku który pojawia się po najechaniu na element listy.

![Imgur](https://imgur.com/rRGAx47.png)

Po wybraniu opcji Delete pojawia się ten modal

![Imgur](https://imgur.com/DREFBXG.png)

W celu usunięcia workspace należy wpisać nazwe listy i zatwierdzić.

**Sprawy techniczne**
Na ten moment workspaces jest pod kolekcją obiektu User. Podobnie jak User, Workspace zawiera podkolekcje pod kolekcje list, tasków i sub tasków.

Główne pliki uczestniczące w procesach workspace:
`getWorkspaces.ts` - pobieranie wszystkich workspace
`createNewWorkspace.ts`- tworzenie nowego workspace
`deleteWorkspace.ts`
`updateWorkspace.ts`

Pliki te są akcjami które są później obsługiwane poprzez react-query. Nie ma konkretnej zależności i podczas badania powiązań można natrafić zarówno na hooki jak i komponenty w których query jest przekazywane do akcji. W procesie tym pośredniczy też Provider - WorkspaceFormProvider który zbiera informacje z poszczególnych input.

#### Subbar

![Imgur](https://imgur.com/J3RQfdi.png)

**Odpowiedzialny za element** : Jakub Skrzeczowski
Subbar występuje w dwóch głównych formach:

1. **Prosty subbar** (subbar pod górną częścią nawigacji):

   - Zawiera linki, tekst lub buttony, w zależnośći który link z **Górna część nawigacji** jest aktywny. Większość obecnie jest nieaktywna i czeka na dostarcznie funkcjonalności im odpowiadającym

2. **view subBar** (workspaceId/l/projectId):
   - Ten element zawiera przyciski do otwierania modali, otwierania dodatkowego navbaru bezpośredio nad view subBar, a także dodatkowy subbar zawierający filtry umożliwiające zarządzanie listami w workspace.

## 👥 Zespół

- 👨‍💻 Mariusz Olszewski – Backend, Frontend, testy
- 🎨 Karol Słupiński – Frontend, Backend (assocjacje Firebase)
- 🧩 Jakub King – UI, logika komponentów
- 🧩 Jakub Skrzeczowski – UI, logika komponentów
- 🧪 Magdalena Jarzombek – testy manualne
- 🧪 Karolina Kozieł – testy manualne

**MIT License**

Copyright (c) [2024] Mariusz Olszewski

Zezwala się na korzystanie, kopiowanie, modyfikowanie, scalanie, publikowanie, dystrybucję, sublicencjonowanie i/lub sprzedaż kopii Oprogramowania wyłącznie do celów naukowych, badawczych lub edukacyjnych. Oprogramowanie nie może być używane do celów komercyjnych. Wszelkie kopiowanie i dystrybucja oprogramowania muszą zawierać powyższą notkę licencyjną oraz powiadomienie o braku gwarancji.

Oprogramowanie jest dostarczane "w takim stanie, w jakim jest", bez żadnej gwarancji, wyrażonej ani domniemanej, w tym m. in. gwarancji przydatności handlowej czy przydatności do określonego celu. W żadnym wypadku autorzy ani właściciele praw autorskich nie ponoszą odpowiedzialności za jakiekolwiek roszczenia, szkody lub inne zobowiązania wynikające z umowy, czynu niedozwolonego lub w inny sposób wynikające z używania Oprogramowania.

**MIT License**

Copyright (c) [2024] Mariusz Olszewski

Permission is hereby granted, free of charge, to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software solely for academic, research, or educational purposes. The Software may not be used for commercial purposes. Copies of the Software must include the above copyright notice and this permission notice.

The Software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, or non-infringement. In no event shall the authors or copyright holders be liable for any claims, damages, or other liabilities, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the Software or the use or other dealings in the Software.
