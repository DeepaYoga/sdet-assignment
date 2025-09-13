# Senior SDET Take-Home Task

## 📌 Project Overview
This repository contains solutions for the Senior SDET take-home assignment.  
It covers:
1. **UI Automation** using Playwright (JavaScript).  
2. **API Testing** using Postman (with test scripts).  
3. **Test Strategy** (document provided in PDF).  
4. **(Optional)** CI setup (can be extended to GitHub Actions/Jenkins).  

---

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/DeepaYoga/sdet-assignment.git
cd sdet-assignment
```

### 2. Install Dependencies for UI Automation
```bash
npm install
npx playwright install
```

---

## 🚀 Running the Tests

### UI Automation (Playwright + JavaScript)
Run all Playwright tests:
```bash
npx playwright test --headed
```

Run a specific test file:
```bash
npx playwright test tests/automation_task.spec.js --headed

Run to get html report:
npx playwright test --reporter=html
```

Artifacts (screenshots, videos, traces) will be saved in the `tests/` folder.

---

### API Testing (Postman)
1. Open **Postman** app.  
2. Import the collection file (provided in repo: `API_Tests.postman_collection.json`).  
3. Run the requests:  
   - `GET /posts` → validates status & structure.  
   - `GET /posts/{id}` → validates post details.  
   - `POST /posts` → simulates creating a new post.  
4. Check results in **Test Results** tab.  

---

## 📄 Documentation

 [`/docs/Test_Strategy_sdet_tasks.pdf`](./docs/Test_Strategy_sdet_tasks.pdf)  

---

## ✅ Deliverables
- Source code (Playwright scripts + Postman collection).  
- Test strategy documents (PDFs).  
- Screenshots from UI automation tests.  
- README file with setup and execution steps.  
