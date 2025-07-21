# 📘 Habit Tracker

A simple and effective habit tracker to help you build and maintain good habits.

### 🔗 Source Code

[*GitHub Repository*](https://github.com/Zehn77/Habit-Tracker.git)

### 🚀 Live Demo

[*Live Site*](https://habit-tracker-five-fawn.vercel.app)

## 🚀 Features

- Track daily habits
- Visual progress tracking
- Simple and intuitive interface
- Customizable habit list

## ✏️ How to Use

1. Add your habits to the tracker
2. Mark habits as completed each day
3. Track your progress over time

## 🏞️ Screenshots

<p align="center">
  <img src="https://github.com/user-attachments/assets/1e41feed-8f36-4029-894a-1b46da2b8eab" width="800" alt="Desktop View" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/9545717f-8e1d-44c6-81ea-d26074cb471e" width="338" alt="Mobile View 1" />
  <img src="https://github.com/user-attachments/assets/9ccee026-9ebb-450b-8884-d2186acf0492" width="300" alt="Mobile View 2" />
</p>

## ⚙️ Installation


```bash
git clone https://github.com/Zehn77/Habit-Tracker.git
cd habit-tracker
npm install
npm start
```

## 🔗 [Project Requirements](https://www.notion.so/adadychanka/Habit-Tracker-230e64f463a280b19071c85abb7bdf67)

## 🧭 Overview
#### Build a multi-page web application that allows users to:
- ✅ Select and create habits
- ✅ Mark them as completed **on any past or current date**
- ✅ View daily summaries and overall progress
- ✅ Use the app comfortably on mobile
- ➖ Persist their data across sessions (in Stage 2)

#### The app should be built using **SOLID principles** and the following tech stack:

✅ **TypeScript, React, Redux Toolkit, React Router v6, TailwindCSS, shadcn/ui, date-fns**, and synchronized with `localStorage`.

## 🧱 STAGE 1 — Architecture & MVP (Core Features)
## 🎯 Objective

### Establish a solid project structure and implement the core user flows.

## 🧰 Tech Stack

| Area                    | Technology              |
|-------------------------|-------------------------|
| Language                | ✅ TypeScript           |
| Framework               | ✅ React 18+            |
| Build tool              | ✅ Vite                 |
| Styling                 | ✅ Tailwind CSS         |
| UI Components           | ✅ shadcn/ui            |
| State Management        | ✅ Redux Toolkit        |
| Date Manipulation       | ✅ date-fns             |
| Routing                 | ✅ React Router v6      |
| Deployment              | ✅ Vercel               |


### 📌 Functional Requirements (Stage 1)

### 🧠 Habit Management

- **View habit list**:
    - ✅ Display name and optional description.
    - Two types of habits:
        - ✅ `custom`: user-created — can be created, edited, deleted.
        - ✅ `predefined`: system-defined — cannot be edited or removed.
    - ✅ Type should be visually distinguishable (e.g. icon or author field).
- **Create a new habit**:
    - ✅ Via modal or embedded form.
    - ✅ Required field: `name`.
    - ✅ Optional field: `description`.
    - ✅ Automatically assign `createdAt` and `updatedAt`.
- **Edit a habit**:
    - ✅ Same form and fields as creation.
    - ✅ Only updates `name`, `description`, `updatedAt`.
    - ✅ `id` and existing progress must remain unchanged.
- **Delete a habit**:
    - ✅ Button on the card.
    - ✅ Requires confirmation (via shadcn/ui `Dialog`).


### 📅 Progress Tracking

- **Date selection**:
    - ✅ Each habit has a `DatePicker` to select a specific date.
    - Validations:
        - ✅ Cannot mark future dates.
        - ✅ Picker should open per-habit, support keyboard nav, and be mobile-friendly.
- **Quick mark "today"**:
    - ✅ A `Checkbox` on the habit card lets users mark today's completion with one tap.
- **Visual status indication**:
    - ✅ 🟩 Completed
    - ✅ ⬜ Not completed

### 📄 Data Display

- ✅ Habit list must be sorted by `createdAt` (newest on top).
- Main screen should show:
    - ✅ all habits,
    - ✅ their completion state for the selected date,
    - ✅ a daily summary like: “3 of 5 habits completed”.
- ✅ When the list is empty, display a clean empty state with CTA: “Add your first habit”.

### 📱 Mobile-first Interface

- ✅ Must work well on devices starting from **320px** width (iPhone SE+).
- ✅ No horizontal scroll.
- ✅ No hover-only features — touch interaction must be supported.

### 🧩 Constraints

- ✅ All data (habits and their progress) must live in **Redux state only**.
- ➖ **No localStorage yet** — it will be added in Stage 2.
- ✅ Routes `/habit/:id` and `/stats` must be implemented as placeholders.
- ✅ Use **shadcn/ui** components wherever applicable.

## 📦 Data Model
## ✅ Habit

```bash
type Habit = {
  id: string;
  name: string;
  description: string;
  type: 'predefined' | 'custom';
  createdAt: string;  // ISO 8601
  updatedAt: string;  // ISO 8601
};
```


​
## ✅ Habit Progress

```bash
type HabitProgressEntry = {
  habitId: string;
  date: string; // YYYY-MM-DD
  status: 'completed' | null;
  updatedAt: string; // ISO 8601
};

type HabitProgressState = HabitProgressEntry[];
};
```

- ✅ Only one entry is allowed per `(habitId + date)` pair.
- ✅ `null` means "not completed" or "unmarked".
- ✅ Can be extended later with fields like `comment`, `source`, etc.

## 🏛 Architecture (Stage 1)

### 🌐 Application Pages

| Route | Description |
| --- | --- |
| `/` | ✅ Main dashboard with habits & progress |
| `/habit/:id` | ✅ Placeholder for future habit detail |
| `/stats` | ✅ Placeholder for future stats page |
- ✅ Use **React Router v6** for all navigation (`<Link>`, `useNavigate`, `useParams`).
- ✅ Placeholder pages must exist and be reachable.

### 🧠 Project Structure & Principles

Follow a **feature-based architecture**, separating business logic, state, and UI by domain.

### ✅ Recommended Folders

```bash
src/
├── app/                # Store, router, root layout
├── features/
│   ├── habits/         # Habit list logic
│   │   ├── components/
│   │   ├── slice.ts
│   │   ├── types.ts
│   │   └── utils.ts
│   ├── progress/       # Habit progress logic
│   │   ├── slice.ts
│   │   ├── types.ts
│   │   └── utils.ts
├── shared/             # Reusable code across features
│   ├── components/
│   ├── hooks/
│   └── ui/             # Custom wrappers for shadcn/ui
├── pages/              # Pages by route
├── styles/             # Tailwind + global styles
├── main.tsx
└── index.css
```
### 🧩 Logic Structure

- **Redux Toolkit**: two slices:
    - ✅ `habitsSlice`: habit list and CRUD.
    - ✅ `progressSlice`: status per habit per date.
- **Components**:
    - ✅ Should be atomic and domain-specific: `HabitCard`, `HabitFormModal`, `DateSelector`, `HabitProgressToggle`, etc.
- **UI**:
    - ✅ All UI built with `shadcn/ui`, customized in `shared/ui`.
    - ✅ Tailwind used for layout and mobile-first styling.

---

### 🧱 Design Principles

- Use **SOLID** principles:
    - ✅ Single responsibility for components and utilities.
    - ✅ Keep code modular, scalable, and testable.
- Enable strict TypeScript mode:
    - ✅ `noImplicitAny`, `strict`, explicit return types.
- ✅ Custom hooks should live in `shared/hooks` or local feature folders.

---

### 🛠 Mobile-first Guidelines

- ✅ Default layout must look good on narrow screens (min 320px).
- ✅ No layout shift when opening dialogs, pickers, etc.
- ✅ Inputs and toggles must be large enough for touch (min 24×24px).

---

## 🚀 Deployment on Vercel

✅ The project must be deployed to [Vercel](https://vercel.com/) using automated builds. A public link must be submitted for review at the end of Stage 1.

---

### 📦 Requirements

- ✅ App must run locally: `npm run dev`
- ✅ Build must succeed: `npm run build`
- ✅ Output directory: `dist/`
- ✅ `vite.config.ts` should not use custom `base` unless necessary

---

### ☁️ Deployment Steps

1. ✅ Go to [vercel.com](https://vercel.com/) and sign in (via GitHub).
2. ✅ Click “Add New Project” and import your repository.
3. Set these options:
    - ✅ **Framework**: Vite
    - ✅ **Build command**: `npm run build`
    - ✅ **Output directory**: `dist`
4. ✅ Click “Deploy”
5. ✅ Wait for your public link like:
    
    `https://habit-tracker-yourname.vercel.app`
    

---

### 🔁 Updating the Project

Each push to your linked GitHub branch will:

- ✅ trigger a new build;
- ✅ automatically deploy the updated version.

➖ You can also redeploy manually with `vercel --prod`.

---

### What Must Be Ready for Review

- ✅ The app is deployed and working publicly on Vercel.
- ✅ The main page shows a list of habits.
- ✅ Users can select a date and mark habits as completed.
- ✅ State reflects the selected date correctly.
- ✅ Habits are sorted by creation date.
- ✅ The project uses shadcn/ui components and Tailwind.
- ✅ Architecture follows SOLID and feature-based separation.

---

## 📚 Resources

- ✅ [Shadcn UI](https://ui.shadcn.dev/)
- ✅ [Redux Toolkit](https://redux-toolkit.js.org/)
- ✅ [React Router v6](https://reactrouter.com/)
- ✅ [TailwindCSS](https://tailwindcss.com/)
- ✅ [date-fns](https://date-fns.org/)
- ✅ [Vercel Docs](https://vercel.com/docs)




  
