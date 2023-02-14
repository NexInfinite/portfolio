from flask import Blueprint, render_template
from app import limiter

index = Blueprint('index', __name__)

@index.route("/", methods=["GET"])
@limiter.limit("3 per second")
def show():
    """Home screen for portfolio"""
    return render_template("index.html")
