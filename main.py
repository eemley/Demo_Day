from flask import Flask, render_template, jsonify
import pickle      

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def home():
    return render_template("about.html")

@app.route("/survey")
def survey():
    return render_template("survey.html")

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

# Load the model
with open('recommendation_CB.pickle', 'rb') as f:
    model = pickle.load(f)
    
@app.route('/api',methods=['POST'])
def predict():
    # Get the data from the POST request.
    data = request.get_json(force=True)

    # Make prediction using model loaded from disk as per the data.
    prediction = model.predict([[np.array(data['exp'])]])

    # Take the first value of prediction
    output = prediction[0]

    return jsonify(output)

if __name__ == "__main__":
    app.run(debug=True)