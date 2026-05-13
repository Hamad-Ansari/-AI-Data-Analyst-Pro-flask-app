import os
from app import create_app

app = create_app()

if __name__ == '__main__':
    # Retrieve port from environment variables or default to 5000
    port = int(os.environ.get('PORT', 5000))
    # Run application in production-safe configuration or debug locally
    debug_mode = os.environ.get('FLASK_ENV', 'development') == 'development'
    app.run(host='0.0.0.0', port=port, debug=debug_mode)
