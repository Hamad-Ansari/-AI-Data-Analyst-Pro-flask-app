# AI Data Analyst Pro 🚀📊

**AI Data Analyst Pro** is a comprehensive industry-level automated Data Science, Machine Learning, and Predictive Analytics platform. It seamlessly transforms raw tabular structures into production executive dashboards, natural language interrogations, auto-tuned predictive forecasting paths, and exportable stakeholder reports.

---

## 🌟 Executive Features

### 1. Advanced Multi-Format Upload System
- **Intelligent Processing:** Supports `.csv`, `.xlsx`, `.json`, `.sql`, and `.txt` architectures up to high-capacity ranges.
- **Auto-Schema Inference:** Automatic missing value triage, duplication sweeps, data classification, and memory optimizations.

### 2. Conversational Enterprise AI Assistant
- **Multiple Free/Premium LLMs:** Integration with Llama 3, Mistral, Gemma, DeepSeek, and OpenRouter backends.
- **Contextual Understanding:** Automated correlation interpretation, natural language inquiries, feature recommendations, and anomaly narratives.

### 3. Professional Exploratory Data Analysis (EDA)
- **Descriptive Analytics:** Skewness, Kurtosis, Null profiling, data dimensionality.
- **Diverse Interactive Plots:** Automated Heatmaps, Scatter matrices, Pairplots, Treemaps, Sunbursts, Radar maps, and Candlestick representations.

### 4. Zero-Code Auto-ML Engine
- **Inference Models:** XGBoost, Random Forest, LightGBM, Logistic Regression, ARIMA, and Prophet.
- **Diagnostic Output:** Automatic train/test segmentation, dynamic hyperparameter estimation, feature coefficient scores, and robust diagnostic curves (ROC, Confusion Matrix).

### 5. Time-Series Predictive Forecasting
- **Confidence Intervals:** Upper and lower stochastic limits calculated via seasonal auto-regressors.
- **Horizon Metrics:** Projections mapped over continuous periodic periods for financial modeling.

---

## 🛠️ Complete Project Directory Layout

```
project/
│
├── app/
│   ├── static/             # Distributed production bundled styles & interactive visuals
│   ├── templates/          # Jinja modular template files for static deployment fallback
│   ├── routes/             # RESTful JSON response logic
│   ├── models/             # SQLAlchemy DB schemas (users.py, datasets.py)
│   ├── services/           # High-efficiency asynchronous data transformations
│   ├── utils/              # Token validators, sanitizers, serialization routines
│   ├── ai/                 # OpenRouter/LangChain pipelines (llm_assistant.py)
│   ├── ml/                 # Auto-ML pipeline configurations (automl_engine.py)
│   ├── forecasting/        # Prophet & ARIMA time-series models (time_series.py)
│   └── config/             # Environment context injectors
│
├── uploads/                # Isolated persistent user input state
├── reports/                # Stored auto-generated executive PDFs & Excel artifacts
├── requirements.txt        # Exact locked version matrix
├── .env.example            # Environment parameters template
├── README.md               # Extensive project documentation
├── run.py                  # WSGI / Gunicorn entry loop
└── Dockerfile              # Multi-tier container spec
```

---

## 🚀 Installation & Local Verification

### Prerequisites
- Python 3.10+
- Node.js 18+ (for frontend dashboard bundles)
- SQLite (built-in) or PostgreSQL client

### Setup Backend Engine
```bash
# 1. Establish isolated virtual environment
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

# 2. Populate environment context
cp .env.example .env

# 3. Pull locked dependencies
pip install -r requirements.txt

# 4. Trigger localized WSGI instance
python run.py
```

### Launch Interactive Client
```bash
# Verify application compilation metrics
npm run build

# Start live frontend hot-reload server
npm run dev
```

---

## ☁️ Deployment Guidelines

### Dockerized Orchestration
```bash
docker build -t ai-data-analyst-pro .
docker run -p 8000:8000 --env-file .env ai-data-analyst-pro
```

### Render & Railway Setup
1. Define your Build Command: `pip install -r requirements.txt`
2. Define Start Command: `gunicorn --workers 4 --bind 0.0.0.0:$PORT run:app`
3. Inject the production secret keys matching your cloud database URI.

---

## 🛡️ Applied Security Architecture
- **Payload Verification:** Strictly enforced Content-Length upper bounds prevents Denial of Service bottlenecks.
- **SQL Injection Defenses:** Encapsulated variable hydration parameters implemented through native SQLAlchemy constructs.
- **Cross-Site Protection:** Fully sanitized outputs and strict Content Security Header policies.

---

**Designed for Modern Data Teams & Decision Makers.**
