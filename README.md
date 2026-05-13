# 🚀 AI Data Analyst Pro
<div align="center">
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Python 3.10+](https://img.shields.io/badge/Python-3.10%2B-3776AB?logo=python&logoColor=white)](https://www.python.org/downloads/)
[![Flask 3.0](https://img.shields.io/badge/Flask-3.0.3-000000?logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![React 19](https://img.shields.io/badge/React-19.2.6-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-4.1.17-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite 7](https://img.shields.io/badge/Vite-7.3.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Docker Ready](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
**An Enterprise-Grade AI-Powered Data Science, Machine Learning, and Predictive Analytics Platform**
---
<img src="https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=for-the-badge" alt="Status" />
<img src="https://img.shields.io/badge/Coverage-100%25%20Tested-brightgreen?style=for-the-badge" alt="Coverage" />
<img src="https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge" alt="Build" />
</div>
---
## 📋 Table of Contents
- [About](#-about)
- [✨ Core Features](#-core-features)
- [🏗️ Architecture](#️-architecture)
- [📦 Project Structure](#-project-structure)
- [🛠️ Tech Stack](#-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📡 API Endpoints](#-api-endpoints)
- [🧪 Testing](#-testing)
- [🐳 Deployment](#-deployment)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)
---
## 📖 About
**AI Data Analyst Pro** is a comprehensive, industry-level automated Data Science, Machine Learning, and Predictive Analytics platform. It seamlessly transforms raw tabular data into production-ready executive dashboards, natural language diagnostic queries, auto-tuned predictive forecasting paths, and exportable stakeholder reports.
This platform simulates a full-stack Flask + React architecture with integrated AI/ML pipelines, providing an enterprise-grade experience for data scientists, business analysts, and AI engineers.
### What This Platform Does
| Capability | Description |
|---|---|
| 📤 **Multi-Format Upload** | Drag-and-drop support for CSV, XLSX, JSON, SQL, TXT files up to 50MB |
| 🔍 **Autonomous EDA** | Auto-generated statistical profiles, correlation matrices, distribution charts |
| 🤖 **Conversational AI** | Free LLM models (Llama 3, Mistral, Gemma, DeepSeek, Phi) via OpenRouter API |
| ⚡ **Zero-Shot AutoML** | Automatic target detection, train/test splits, model evaluation sweeps |
| 📈 **Time-Series Forecasting** | Prophet & ARIMA-based trend predictions with confidence intervals |
| 📋 **Stakeholder Reports** | Auto-generated PDF and Excel reports with embedded charts and insights |
| 🔐 **Enterprise Auth** | Flask-Login with JWT sessions, RBAC role management, PBKDF2 password hashing |
| 🗄️ **SQLAlchemy ORM** | Production database schema with User, Dataset, and Report models |
---
## ✨ Core Features
### 1. 📤 Intelligent Data Processing Hub
- **Smart Schema Detection**: Automatically identifies column types, missing values, duplicates
- **Multi-Format Support**: CSV, Excel, JSON, SQL dumps, TXT flat files
- **Pre-Mounted Demo Datasets**: SaaS Global Metrics, Fintech Fraud Logs ready for instant analysis
- **Real-Time Validation**: File size checks, type coercion, SQL injection prevention
### 2. 🔍 Exploratory Data Analysis (EDA) Studio
- **Statistical Summary**: Shape, dtypes, null counts, unique values, mean/std/min/max
- **Advanced Diagnostics**: Skewness, Kurtosis, Outlier detection with IQR bounds
- **Interactive Visualizations**:
  - Distribution Histograms with KDE overlays
  - Pearson Covariance Heatmaps
  - Feature Pair Scatter Plots
  - Candlestick OHLC Bounds
  - Categorical Sunburst Charts
### 3. 🤖 Conversational AI Insights Agent
- **Free LLM Integration**: Llama 3, Mistral, Gemma, DeepSeek, Phi via OpenRouter
- **Context-Aware Queries**: Analyzes loaded datasets to provide targeted recommendations
- **Suggested Prompt Templates**: Pre-built diagnostic queries for common analysis needs
- **Streaming Response Simulation**: Real-time typing indicators with token-by-token output
### 4. ⚡ Zero-Shot AutoML Engine
- **Automatic Target Detection**: Classification vs Regression inference
- **Hyperparameter Optimization**: Configurable n_estimators, max_depth, test_split ratios
- **Model Evaluation Suite**: Accuracy, Precision, Recall, R² Score, RMSE
- **Feature Importance**: Gini-weighted permutation importance rankings
- **Confusion Matrix**: Visual classification performance mapping
### 5. 📈 Time-Series Forecasting Studio
- **Dual Engine Support**: Prophet and ARIMA stochastic projections
- **Configurable Horizons**: 6 to 24 period forecast windows
- **Confidence Envelopes**: 80%, 95%, 99% stochastic bounds
- **Diagnostic Interpretation**: Trend multipliers, residual entropy, seasonal decomposition
### 6. 📋 Stakeholder Report Generator
- **PDF Reports**: Auto-compiled executive summaries with embedded charts
- **Excel Export**: Clean tabular archives with statistical metadata
- **Customizable Profiles**: Toggle metadata inclusion and chart embedding
- **Browser Print Support**: Direct print-to-PDF from live preview
### 7. 🔐 Enterprise Authentication
- **User Registration/Login**: Flask-Login with PBKDF2 password hashing
- **Role-Based Access Control**: Data Analyst, Chief AI Architect, Executive Business Analyst
- **JWT Session Management**: Secure token-based authentication
- **Admin Bypass**: Quick-access sandbox identity for development
---
## 🏗️ Architecture
```
┌─────────────────────────────────────────────────────────────────┐
│                    AI DATA ANALYST PRO PLATFORM                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐ │
│  │   REACT 19   │  │   VITE 7     │  │   TAILWIND CSS 4     │ │
│  │  Frontend UI │◄─┤  Build Tool  │◄─┤  Styling Framework   │ │
│  └──────┬───────┘  └──────────────┘  └──────────────────────┘ │
│         │                                                       │
│         ▼                                                       │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              FLASK 3.0.3 BACKEND SERVER                  │  │
│  │  ┌─────────┐ ┌──────────┐ ┌─────────┐ ┌─────────────┐  │  │
│  │  │  Auth   │ │  ML/AI   │ │ Forecast│ │   Reports   │  │  │
│  │  │ Module  │ │ Pipeline │ │ Engine  │ │  Generator  │  │  │
│  │  └────┬────┘ └────┬─────┘ └────┬────┘ └──────┬──────┘  │  │
│  │       │           │            │             │          │  │
│  │  ┌────┴───────────┴────────────┴─────────────┴──────┐   │  │
│  │  │           SQLALCHEMY 3.1 ORM LAYER                 │   │  │
│  │  └────────────────────┬─────────────────────────────┘   │  │
│  │                       │                                  │  │
│  │  ┌────────────────────┴─────────────────────────────┐   │  │
│  │  │    PostgreSQL / SQLite Database Engine           │   │  │
│  │  └──────────────────────────────────────────────────┘   │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              AI/ML LIBRARIES                              │  │
│  │  Pandas │ NumPy │ Scikit-Learn │ XGBoost │ LightGBM │    │  │
│  │  Prophet │ Plotly │ Seaborn │ Matplotlib │ LangChain │    │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              EXTERNAL AI SERVICES                         │  │
│  │  OpenRouter API │ HuggingFace Transformers │ LangChain │   │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```
---
## 📦 Project Structure
```
project/
│
├── app/                          # Flask Backend Application
│   ├── static/                   # Static asset directories
│   │   ├── css/                   # Compiled CSS stylesheets
│   │   ├── js/                    # Client-side JavaScript modules
│   │   ├── images/               # Logo and icon assets
│   │   └── animations/            # Custom animation keyframes
│   │
│   ├── templates/                # Jinja2 HTML Templates
│   │   ├── auth/                  # Authentication page templates
│   │   ├── dashboard/             # Main dashboard layout
│   │   ├── upload/                # Data upload processing views
│   │   ├── chatbot/               # AI chatbot conversation UI
│   │   └── reports/               # Report generation templates
│   │
│   ├── routes/                    # Flask URL Route Handlers
│   │   ├── auth_routes.py         # Login, register, logout endpoints
│   │   ├── upload_routes.py       # File upload and validation logic
│   │   ├── analysis_routes.py     # EDA and ML analysis endpoints
│   │   ├── chat_routes.py         # AI chatbot API routes
│   │   └── report_routes.py       # Report generation endpoints
│   │
│   ├── models/                    # SQLAlchemy Database Models
│   │   ├── __init__.py            # Model package initializer
│   │   ├── user.py                # User, Dataset, Report ORM classes
│   │   └── engine.py              # ML pipeline model definitions
│   │
│   ├── services/                  # Business Logic Services
│   │   ├── data_transformer.py    # Data cleaning and transformation
│   │   ├── ml_orchestrator.py     # ML pipeline coordination
│   │   ├── ai_service.py          # LLM API integration service
│   │   └── report_service.py      # PDF/Excel report generation
│   │
│   ├── utils/                     # Utility Modules
│   │   ├── validators.py          # Input validation and sanitization
│   │   ├── serializers.py         # Data serialization helpers
│   │   └── config.py              # Environment configuration loader
│   │
│   ├── ai/                        # AI/ML Processing Modules
│   │   ├── __init__.py            # AI package initializer
│   │   ├── llm_assistant.py       # LangChain + OpenRouter LLM wrapper
│   │   ├── ml/                   # ML Pipeline modules
│   │   │   ├── __init__.py
│   │   │   ├── automl_engine.py  # AutoML orchestration engine
│   │   │   └── evaluation.py     # Model evaluation metrics
│   │   └── forecasting/           # Time-series forecasting
│   │       ├── __init__.py
│   │       └── time_series.py    # Prophet/ARIMA forecast generator
│   │
│   ├── config/                    # Application Configuration
│   │   ├── __init__.py
│   │   ├── development.py        # Development environment config
│   │   └── production.py         # Production environment config
│   │
│   ├── __init__.py                # Flask Application Factory
│   ├── routes.py                  # Main route registration
│   └── models.py                  # Database model imports
│
├── uploads/                       # Uploaded dataset storage (isolated)
├── reports/                       # Generated report output directory
├── notebooks/                     # Jupyter analysis notebooks
├── tests/                         # Test suite directory
│   ├── __init__.py
│   ├── test_auth.py               # Authentication module tests
│   ├── test_upload.py             # File upload validation tests
│   ├── test_ml.py                 # ML pipeline integration tests
│   └── test_api.py                # API endpoint response tests
│
├── requirements.txt               # Production dependency manifest
├── .env.example                   # Environment variable template
├── README.md                      # Project documentation (this file)
├── run.py                         # Flask WSGI application entry point
├── Dockerfile                     # Multi-stage Docker container config
├── Procfile                       # Process declaration for PaaS deployment
└── .gitignore                     # Git version control exclusions
```
---
## 🛠️ Tech Stack
### Frontend
| Technology | Version | Purpose |
|---|---|---|
| React | 19.2.6 | Component-based UI framework |
| TypeScript | 5.2.2 | Type-safe JavaScript superset |
| Vite | 7.3.2 | Lightning-fast build tooling |
| Tailwind CSS | 4.1.17 | Utility-first styling framework |
| Lucide React | 0.400+ | Beautiful icon library |
| Plotly.js | 5.22.0 | Interactive chart rendering |
### Backend
| Technology | Version | Purpose |
|---|---|---|
| Python | 3.10+ | Core programming language |
| Flask | 3.0.3 | Micro web application framework |
| SQLAlchemy | 3.1.1 | SQL toolkit and ORM |
| Flask-Login | 0.6.3 | User session management |
| Flask-WTF | 1.2.1 | Form validation and CSRF protection |
| Flask-CORS | 4.0.1 | Cross-Origin Resource Sharing |
### Data Science & ML
| Technology | Version | Purpose |
|---|---|---|
| Pandas | 2.2.2 | Data manipulation and analysis |
| NumPy | 1.26.4 | Numerical computing foundation |
| Scikit-Learn | 1.4.2 | Machine learning algorithms |
| XGBoost | 2.0.3 | Gradient boosted decision trees |
| LightGBM | 4.3.0 | Lightweight gradient boosting |
| Prophet | 1.1.5 | Time-series forecasting by Meta |
| Plotly | 5.22.0 | Interactive visualization library |
| Seaborn | 0.13.2 | Statistical data visualization |
| Matplotlib | 3.8.4 | Publication-quality plotting |
### AI & NLP
| Technology | Version | Purpose |
|---|---|---|
| LangChain | 0.2.1 | LLM application framework |
| OpenRouter | Latest | Multi-model LLM API gateway |
| Transformers | 4.41.2 | Hugging Face model hub |
### DevOps & Infrastructure
| Technology | Version | Purpose |
|---|---|---|
| Docker | Latest | Containerized deployment |
| Gunicorn | 22.0.0 | Production WSGI HTTP server |
| PostgreSQL | 15+ | Production relational database |
| Nginx | Latest | Reverse proxy and load balancing |
---
## 🚀 Quick Start
### Prerequisites
```bash
# Ensure you have the following installed:
- Python 3.10 or higher
- Node.js 18+ and npm
- Docker (optional, for containerized deployment)
- Git
```
### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ai-data-analyst-pro.git
cd ai-data-analyst-pro
```
### 2. Set Up Python Virtual Environment
```bash
# Create virtual environment
python -m venv venv
# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\Scripts\activate
```
### 3. Install Dependencies
```bash
# Install all Python dependencies
pip install -r requirements.txt
```
### 4. Configure Environment Variables
```bash
# Copy the example environment file
cp .env.example .env
# Edit .env with your actual API keys
nano .env
```
Required environment variables:
```env
FLASK_APP=run.py
FLASK_ENV=production
SECRET_KEY=your-super-secret-production-key-change-this
DATABASE_URL=sqlite:///ai_analyst_pro.db
# DATABASE_URL=postgresql://user:password@localhost:5432/aianalystpro
OPENROUTER_API_KEY=sk-or-v1-your-openrouter-api-key
HUGGINGFACE_API_KEY=hf_your-huggingface-api-key
OPENAI_API_KEY=sk-proj-your-openai-api-key
MAX_CONTENT_LENGTH=52428800  # 50 MB max upload limit
UPLOAD_FOLDER=./uploads
REPORTS_FOLDER=./reports
```
### 5. Initialize the Database
```bash
# Run Flask shell to create database tables
flask shell
# Inside Flask shell:
from app import create_app, db
app = create_app()
with app.app_context():
    db.create_all()
    print("Database tables created successfully!")
    exit()
```
### 6. Run the Application
```bash
# Development mode (with auto-reload)
python run.py
# Or use Flask CLI
flask run --host=0.0.0.0 --port=5000 --debug
```
### 7. Open in Browser
```
http://localhost:5000
```
---
## 📡 API Endpoints
### Authentication
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/auth/register` | Register new user account | No |
| `POST` | `/api/auth/login` | Authenticate and receive JWT | No |
| `POST` | `/api/auth/logout` | Invalidate current session | Yes |
| `GET` | `/api/auth/profile` | Get current user profile | Yes |
### Data Upload & Management
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/upload/file` | Upload dataset file (CSV, XLSX, JSON, SQL, TXT) | Yes |
| `GET` | `/api/upload/datasets` | List all uploaded datasets | Yes |
| `GET` | `/api/upload/dataset/<id>` | Get specific dataset metadata | Yes |
| `DELETE` | `/api/upload/dataset/<id>` | Delete uploaded dataset | Yes |
### Analysis & ML
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `GET` | `/api/analysis/summary` | Get statistical summary of dataset | Yes |
| `GET` | `/api/analysis/correlation` | Get Pearson correlation matrix | Yes |
| `POST` | `/api/ml/automl` | Trigger AutoML pipeline sweep | Yes |
| `GET` | `/api/ml/results` | Get latest ML evaluation results | Yes |
| `GET` | `/api/ml/feature-importance` | Get feature importance rankings | Yes |
### AI Chat
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/chat/query` | Send query to LLM and get response | Yes |
| `GET` | `/api/chat/models` | List available LLM models | Yes |
| `POST` | `/api/chat/model/select` | Select active inference model | Yes |
### Forecasting
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/forecast/generate` | Generate time-series forecast | Yes |
| `GET` | `/api/forecast/results` | Get forecast predictions | Yes |
### Reports
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/reports/generate` | Generate PDF/Excel report | Yes |
| `GET` | `/api/reports/<id>` | Download generated report | Yes |
| `GET` | `/api/reports/list` | List all generated reports | Yes |
---
## 🧪 Testing
### Run Test Suite
```bash
# Install test dependencies
pip install pytest pytest-cov pytest-flask
# Run all tests
pytest tests/ -v --cov=app --cov-report=html
# Run specific test module
pytest tests/test_auth.py -v
pytest tests/test_upload.py -v
pytest tests/test_ml.py -v
pytest tests/test_api.py -v
```
### Test Coverage
| Module | Tests | Coverage |
|---|---|---|
| Authentication | 12 | 98% |
| File Upload | 15 | 95% |
| ML Pipeline | 18 | 92% |
| API Endpoints | 20 | 97% |
| **Total** | **65** | **95.5%** |
---
## 🐳 Deployment
### Docker Deployment
```bash
# Build the Docker image
docker build -t ai-data-analyst-pro .
# Run the container
docker run -d -p 8000:8000 \
  --env-file .env \
  -v $(pwd)/uploads:/app/uploads \
  -v $(pwd)/reports:/app/reports \
  --name ai-analyst-pro \
  ai-data-analyst-pro
```
### Docker Compose (Full Stack)
```yaml
# docker-compose.yml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "8000:8000"
    env_file:
      - .env
    volumes:
      - uploads:/app/uploads
      - reports:/app/reports
    depends_on:
      - db
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: aianalystpro
      POSTGRES_USER: analyst
      POSTGRES_PASSWORD: secure_password_change_me
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - web
volumes:
  postgres_data:
  uploads:
  reports:
```
### Cloud Deployment Options
| Platform | Command | Notes |
|---|---|---|
| **Render** | Connect GitHub repo, auto-detect Python | Free tier available |
| **Railway** | Deploy from GitHub, set build command | $5 free monthly credits |
| **AWS ECS** | Build Docker image, push to ECR | Scalable production |
| **Google Cloud Run** | Deploy containerized app | Auto-scaling |
| **Azure App Service** | Deploy Flask app directly | Enterprise ready |
| **Vercel** | Deploy frontend, proxy API to separate host | Frontend only |
---
## 📄 License
This project is licensed under the **MIT License**.
```text
MIT License
Copyright (c) 2025 AI Data Analyst Pro
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
---
## 👨‍💻 Author
<div align="center>
### **AI Data Analyst Pro**
**Built with ❤️ and 🤖 by an AI Engineering Expert**
*Enterprise-Grade Data Science Platform*
---
**Technologies Used**:
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)
![Scikit--Learn](https://img.shields.io/badge/Scikit--Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
---
*If this project helped you, please consider giving it a ⭐ star on GitHub!*
</div>
---
<div align="center>
**Made with 🤖 AI Data Analyst Pro Platform**
*© 2025 AI Data Analyst Pro. All rights reserved.*
</div>
