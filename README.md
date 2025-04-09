# 📦 Assignment 14 - Component Library Portfolio
**Author:** Roger Callupe  
**Course:** WEBD-3012 - Business Systems Build and Testing  
**Assignment:** 14 - Component Library  

---
Node.js	v23.6.0	--- OK
npm	11.0.0 ----- OK
Docker	27.4.0 ---- OK
Git	2.48.1.windows.1 ---- OK



# npx create-react-app assignment-14/callupe_roger_final_site --template typescript

# npm install

## Project Description

This is a personal portfolio website built using a **custom UI Component Library** developed in React and TypeScript. The project demonstrates the use of reusable styled components, testing and Docker deployment as part of a full development pipeline.

---

## Tools -  Technologies Used

- React + TypeScript (via Create React App)
- Styled Components
- Custom reusable UI Components
- Storybook (Component documentation)
- Jest + React Testing Library (Automated testing)
- Husky (Pre-commit hook)
- Docker + Nginx (Production deployment)

---

## Project Structure

```
assignment-14/
├── callupe_roger_final_site/         # Main CRA project
│   ├── src/
│   │   ├── Components/               # Reusable UI Components
│   │   ├── Sections/                 # Content sections for portfolio
│   │   │   ├── About.tsx
│   │   │   ├── Work.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Resources.tsx
│   │   │   └── Setup.tsx
│   │   ├── App.tsx                   # Main layout + navigation
│   │   └── index.tsx
│   ├── public/
│   ├── Dockerfile                    # Docker setup
│   ├── nginx.conf                    # Nginx config (port 5575)
│   └── README.md                     # This file
```

---

##  UI Component Library

All UI components (Button, Card, Table, etc.) were developed in a separate project and integrated into this CRA site by copying them into the `Components/` folder. The components support:

- Reusability through props
- Styled-components for encapsulated styles
- Unit tests (`.test.tsx`) for validation
- Storybook stories for documentation

---

## 🌐 Portfolio Sections Overview

| File                       | Purpose                                                                       |
|----------------------------|-------------------------------------------------------------------------------|
| `About.tsx`                | Intro section with name, profile image, and bio using `<Img />` + `<Text />`  |
| `Work.tsx`                 | Shows featured projects using `<Card />` with title, description, and content |
| `Skills.tsx`               | Displays tools & technologies using `<Table />`                               |
| `Resources.tsx`            | Helpful developer links using `<Card />` and clickable links                  |
| `Setup.tsx`                | Dev environment (VS Code, extensions) using `<Text />` + `<Table />`          |

---

##  How `App.tsx` Works

The `App.tsx` file handles the full layout of the page:

- It imports and renders the `<NavBar />` for internal navigation.
- Uses semantic `<section id="...">` wrappers to enable smooth scroll navigation from the navbar.
- Imports each section (`About`, `Work`, etc.) from the `Sections/` folder and renders them in order.

Example:

```tsx
<section id="about"><About /></section>
<section id="work"><Work /></section>
...
```

This structure allows the site to function as a **single-page application** with easy-to-read modular layout.

---

## 🐳 Docker Build & Run Instructions

### Step-by-step to build & run the Docker container:

1. **Navigate to project folder**:

```bash
cd assignment-14/callupe_roger_final_site
```

2. **Build the Docker image**:

```bash
docker build -t callupe_roger_coding_assignment14 .
```

3. **Run the container on port 5575**:

```bash
docker run -d -p 5575:5575 --name callupe_roger_coding_assignment14 callupe_roger_coding_assignment14
```

4. **Open in your browser**:

```
http://localhost:5575
```

---

## 🐳 Docker Notes

- The Docker image uses a multi-stage build:
  - Stage 1: Builds the React production app
  - Stage 2: Serves with Nginx on port `5575`
- Nginx config is defined in `nginx.conf`

---

## 📂 Final Container Info

- **Image Name:** `callupe_roger_coding_assignment14`
- **Container Name:** `callupe_roger_coding_assignment14`
- **Port:** `5575`
- **URL:** [http://localhost:5575](http://localhost:5575)

---

## GIT

- git init
- git commit -m "Final Assignment 14 Portfolio"
- git remote add origin https://github.com/rcallupecoronado/assignment-14-portfolio.git
- git push -u origin main