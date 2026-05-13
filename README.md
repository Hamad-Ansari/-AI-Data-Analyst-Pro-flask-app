# 🚀 AI Data Analyst Pro

<div align="center">

# 🧠 AI-Powered Enterprise Analytics Platform

### Transform Raw Data into Actionable Intelligence with AI, AutoML & Predictive Forecasting

<p align="center">
  <img src="https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Build-Passing-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Coverage-95%25-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10+-3776AB?logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Flask-3.0.3-000000?logo=flask&logoColor=white" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white" />
</p>

---

### ⚡ Enterprise-Grade Full Stack AI Data Science Platform

AI Data Analyst Pro is a modern full-stack analytics platform built with **Flask, React, Machine Learning, AutoML, LLMs, and Predictive Forecasting** technologies.

It enables users to:

✅ Upload datasets  
✅ Perform automated EDA  
✅ Generate AI-powered insights  
✅ Train ML models automatically  
✅ Forecast trends  
✅ Create stakeholder-ready reports  
✅ Interact with datasets using natural language

---

</div>

---

# 📚 Table of Contents

- [✨ Features](#-features)
- [🏗️ System Architecture](#️-system-architecture)
- [📂 Project Structure](#-project-structure)
- [🛠️ Technology Stack](#️-technology-stack)
- [⚡ Quick Start](#-quick-start)
- [🔑 Environment Variables](#-environment-variables)
- [📡 API Endpoints](#-api-endpoints)
- [🧪 Testing](#-testing)
- [🐳 Docker Deployment](#-docker-deployment)
- [☁️ Cloud Deployment](#️-cloud-deployment)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

---

# ✨ Features

## 📤 Intelligent Dataset Upload System

- Upload CSV, XLSX, JSON, SQL, and TXT datasets
- Drag & Drop upload support
- Real-time validation and sanitization
- Automatic schema detection
- Duplicate and missing value analysis
- Secure file handling with upload limits

---

## 🔍 Automated Exploratory Data Analysis (EDA)

Generate advanced analytics instantly:

- Statistical summaries
- Null value reports
- Correlation matrices
- Outlier detection
- Feature distributions
- Skewness & kurtosis diagnostics
- Interactive visualizations

### 📊 Supported Charts

- Histograms
- KDE Plots
- Scatter Plots
- Heatmaps
- Boxplots
- Sunburst Charts
- Time-Series Graphs

---

## 🤖 AI Conversational Analytics Assistant

Interact with your data using natural language.

### Supported Models

- Llama 3
- Mistral
- Gemma
- DeepSeek
- Phi

### Capabilities

- AI-generated insights
- Dataset-aware recommendations
- Business diagnostics
- Suggested prompts
- Streaming response simulation
- LangChain integration

---

## ⚡ Zero-Shot AutoML Engine

Automatic machine learning pipeline generation:

- Automatic target column detection
- Classification & regression support
- Train/test split generation
- Hyperparameter tuning
- Feature importance ranking
- Evaluation metric generation
- Confusion matrix visualization

### Supported Algorithms

- Random Forest
- XGBoost
- LightGBM
- Logistic Regression
- Linear Regression

---

## 📈 Predictive Forecasting Studio

Advanced forecasting with statistical confidence intervals.

### Forecasting Engines

- Prophet
- ARIMA

### Features

- Trend prediction
- Seasonal decomposition
- Confidence intervals
- Residual diagnostics
- Multi-horizon forecasting

---

## 📋 Executive Report Generator

Generate stakeholder-ready reports instantly.

### Export Formats

- PDF Reports
- Excel Reports
- CSV Exports

### Includes

- Statistical summaries
- Charts & visualizations
- AI insights
- Forecast results
- Model evaluation metrics

---

## 🔐 Enterprise Authentication System

Secure enterprise-grade authentication.

### Security Features

- Flask-Login authentication
- JWT token sessions
- Role-Based Access Control (RBAC)
- PBKDF2 password hashing
- Secure session handling
- Admin sandbox mode

---

# 🏗️ System Architecture

```text
┌────────────────────────────────────────────────────────────┐
│                 AI DATA ANALYST PRO                       │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  React 19 + Tailwind CSS + Vite Frontend                  │
│                        │                                   │
│                        ▼                                   │
│              Flask Backend API Server                      │
│                                                            │
│  ┌─────────────┬──────────────┬──────────────┐             │
│  │ Auth Module │ ML Pipeline  │ Forecasting │             │
│  └─────────────┴──────────────┴──────────────┘             │
│                        │                                   │
│                        ▼                                   │
│                 SQLAlchemy ORM                             │
│                        │                                   │
│                        ▼                                   │
│          PostgreSQL / SQLite Database                      │
│                                                            │
├────────────────────────────────────────────────────────────┤
│                    AI & ML Layer                           │
│                                                            │
│ Pandas • NumPy • Scikit-Learn • XGBoost • Prophet         │
│ Plotly • LangChain • OpenRouter • Transformers            │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

# 📂 Project Structure

```bash
project/
│
├── app/
│   ├── static/
│   ├── templates/
│   ├── routes/
│   ├── models/
│   ├── services/
│   ├── utils/
│   ├── ai/
│   ├── config/
│   ├── __init__.py
│   └── routes.py
│
├── uploads/
├── reports/
├── notebooks/
├── tests/
│
├── requirements.txt
├── README.md
├── run.py
├── Dockerfile
├── Procfile
└── .gitignore
```

---

# 🛠️ Technology Stack

## 🎨 Frontend

| Technology | Purpose |
|---|---|
| React 19 | Frontend UI |
| TypeScript | Type-safe development |
| Tailwind CSS 4 | Styling |
| Vite 7 | Build tooling |
| Plotly.js | Interactive charts |
| Lucide React | Icons |

---

## ⚙️ Backend

| Technology | Purpose |
|---|---|
| Flask 3 | Backend framework |
| SQLAlchemy | ORM |
| Flask-Login | Authentication |
| Flask-WTF | Form validation |
| Flask-CORS | API access control |

---

## 🤖 AI & Machine Learning

| Technology | Purpose |
|---|---|
| Pandas | Data analysis |
| NumPy | Numerical computing |
| Scikit-Learn | Machine learning |
| XGBoost | Gradient boosting |
| LightGBM | ML optimization |
| Prophet | Forecasting |
| LangChain | LLM orchestration |
| OpenRouter | Multi-model AI API |
| Transformers | HuggingFace models |

---

## 🐳 DevOps & Deployment

| Technology | Purpose |
|---|---|
| Docker | Containerization |
| Gunicorn | Production WSGI |
| PostgreSQL | Production database |
| Nginx | Reverse proxy |

---

# ⚡ Quick Start

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/ai-data-analyst-pro.git

cd ai-data-analyst-pro
```

---

## 2️⃣ Create Virtual Environment

### Windows

```bash
python -m venv venv

venv\Scripts\activate
```

### Linux/macOS

```bash
python -m venv venv

source venv/bin/activate
```

---

## 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 4️⃣ Configure Environment Variables

Create `.env` file:

```env
FLASK_APP=run.py
FLASK_ENV=production

SECRET_KEY=your-secret-key

DATABASE_URL=sqlite:///ai_analyst_pro.db

OPENROUTER_API_KEY=your-openrouter-key

HUGGINGFACE_API_KEY=your-huggingface-key

OPENAI_API_KEY=your-openai-key

MAX_CONTENT_LENGTH=52428800

UPLOAD_FOLDER=./uploads

REPORTS_FOLDER=./reports
```

---

## 5️⃣ Initialize Database

```bash
flask shell
```

```python
from app import create_app, db

app = create_app()

with app.app_context():
    db.create_all()
```

---

## 6️⃣ Run Application

```bash
python run.py
```

OR

```bash
flask run --host=0.0.0.0 --port=5000 --debug
```

---

## 7️⃣ Open in Browser

```text
http://localhost:5000
```

---

# 🔑 Environment Variables

| Variable | Description |
|---|---|
| SECRET_KEY | Flask security key |
| DATABASE_URL | Database connection |
| OPENROUTER_API_KEY | OpenRouter AI access |
| HUGGINGFACE_API_KEY | HuggingFace API |
| OPENAI_API_KEY | OpenAI access |
| MAX_CONTENT_LENGTH | Upload size limit |
| UPLOAD_FOLDER | Dataset storage |
| REPORTS_FOLDER | Report storage |

---

# 📡 API Endpoints

## 🔐 Authentication

| Method | Endpoint |
|---|---|
| POST | `/api/auth/register` |
| POST | `/api/auth/login` |
| POST | `/api/auth/logout` |
| GET | `/api/auth/profile` |

---

## 📤 Upload APIs

| Method | Endpoint |
|---|---|
| POST | `/api/upload/file` |
| GET | `/api/upload/datasets` |
| GET | `/api/upload/dataset/<id>` |
| DELETE | `/api/upload/dataset/<id>` |

---

## 🤖 AI & ML APIs

| Method | Endpoint |
|---|---|
| GET | `/api/analysis/summary` |
| GET | `/api/analysis/correlation` |
| POST | `/api/ml/automl` |
| GET | `/api/ml/results` |
| GET | `/api/ml/feature-importance` |

---

## 💬 AI Chat APIs

| Method | Endpoint |
|---|---|
| POST | `/api/chat/query` |
| GET | `/api/chat/models` |
| POST | `/api/chat/model/select` |

---

## 📈 Forecast APIs

| Method | Endpoint |
|---|---|
| POST | `/api/forecast/generate` |
| GET | `/api/forecast/results` |

---

## 📋 Report APIs

| Method | Endpoint |
|---|---|
| POST | `/api/reports/generate` |
| GET | `/api/reports/<id>` |
| GET | `/api/reports/list` |

---

# 🧪 Testing

## Install Testing Dependencies

```bash
pip install pytest pytest-cov pytest-flask
```

---

## Run Test Suite

```bash
pytest tests/ -v --cov=app --cov-report=html
```

---

## Run Individual Test Modules

```bash
pytest tests/test_auth.py -v

pytest tests/test_upload.py -v

pytest tests/test_ml.py -v

pytest tests/test_api.py -v
```

---

# 🐳 Docker Deployment

## Build Docker Image

```bash
docker build -t ai-data-analyst-pro .
```

---

## Run Docker Container

```bash
docker run -d -p 8000:8000 \
  --env-file .env \
  -v $(pwd)/uploads:/app/uploads \
  -v $(pwd)/reports:/app/reports \
  --name ai-analyst-pro \
  ai-data-analyst-pro
```

---

# ☁️ Cloud Deployment

| Platform | Description |
|---|---|
| Render | Easy Flask deployment |
| Railway | Fast GitHub deployment |
| AWS ECS | Enterprise scalability |
| Google Cloud Run | Auto-scaling containers |
| Azure App Service | Enterprise hosting |
| Vercel | Frontend deployment |

---

# 📄 License

This project is licensed under the **MIT License**.

```text
MIT License

Copyright (c) 2025 AI Data Analyst Pro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

# 👨‍💻 Author

<div align="center">

## Hammad Zahid

### AI Engineer • Data Scientist • ML Developer

Building modern AI-powered analytics systems using:

<p align="center">

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

</p>

---

### ⭐ If you found this project useful, please consider starring the repository!

</div>

---

<div align="center">

### 🚀 AI Data Analyst Pro

Enterprise AI Analytics Platform

Made with ❤️ using Flask, React, AI & Machine Learning

© 2026 AI Data Analyst Pro

</div>
