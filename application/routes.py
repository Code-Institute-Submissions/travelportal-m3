from application import app, database
from flask import render_template, url_for
from slugify import slugify

@app.route("/")
def index():
    user_collection = database.db.users
    user_collection.insert({'name': 'John'})
    return render_template("index.html", page_title="Welcome to Travelbuddy portal")

@app.route("/tour")
def tour_name():
    tour = "Paris 7 days"
    tour_name = slugify(tour)
    return render_template("tour.html", tour_name = tour_name)

