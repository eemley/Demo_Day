from flask import Flask, render_template, jsonify
import pickle      

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/survey")
def survey():
    return render_template("survey.html")

@app.route("/listen/")
def listen():
    return render_template("music.html")

@app.route("/listen/tbmL")
def happy():
    return render_template("tbmL.html")

@app.route("/listen/z5cg")
def sad():
    return render_template("z5cg.html")

@app.route("/listen/4g6w")
def relaxed():
    return render_template("4g6w.html")

@app.route("/chill/")
def chill():
    return render_template("movies.html")

@app.route("/chill/results")
def results():
    return render_template("results.html")

@app.route("/workout/")
def workout():
    return render_template("fitness.html")

@app.route("/workout/results_lo")
def lo():
    return render_template("results_lo.html")

@app.route("/workout/results_hi")
def hi():
    return render_template("results_hi.html")

@app.route("/travel")
def travel():
    return render_template("travel.html")

if __name__ == "__main__":
    app.run(debug=True)