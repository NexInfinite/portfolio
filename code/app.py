from flask import Flask
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

# Setup app and limiter
app = Flask(__name__)
limiter = Limiter(get_remote_address, app=app, default_limits=["3 per second"], storage_uri="memory://")

if __name__ == "__main__":
    from endpoints.index import index
    from endpoints.phone import phone
    app.register_blueprint(index)
    app.register_blueprint(phone)

    # Run app
    app.run(debug=True)