from flask import Blueprint, render_template
from app import limiter

phone = Blueprint('phone', __name__)

@phone.route("/phone", methods=["GET"])
@limiter.limit("3 per second")
def show():
    """Home screen for portfolio"""
    return render_template("components/phone.html")
