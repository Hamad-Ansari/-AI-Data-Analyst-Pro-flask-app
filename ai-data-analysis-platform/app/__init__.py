import os
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_cors import CORS

# Initialize extensions
db = SQLAlchemy()
login_manager = LoginManager()

def create_app(config_name=None):
    app = Flask(__name__)
    
    # Enable Cross-Origin Resource Sharing
    CORS(app, resources={r"/api/*": {"origins": "*"}})
    
    # Configure Application settings
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'default-dev-secret-key-998811')
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///ai_analyst_pro.db')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['MAX_CONTENT_LENGTH'] = 50 * 1024 * 1024  # 50MB
    app.config['UPLOAD_FOLDER'] = os.path.abspath(os.path.join(os.path.dirname(__file__), '../uploads'))
    app.config['REPORTS_FOLDER'] = os.path.abspath(os.path.join(os.path.dirname(__file__), '../reports'))
    
    # Ensure folder structure exists
    os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
    os.makedirs(app.config['REPORTS_FOLDER'], exist_ok=True)
    
    # Init Plugins
    db.init_app(app)
    login_manager.init_app(app)
    login_manager.login_view = 'auth.login'
    
    # Register core routes/blueprints
    # In full environment, these are imported dynamically
    @app.route('/health')
    def health_check():
        return jsonify({"status": "healthy", "service": "AI Data Analyst Pro Core Backend"})
        
    return app
