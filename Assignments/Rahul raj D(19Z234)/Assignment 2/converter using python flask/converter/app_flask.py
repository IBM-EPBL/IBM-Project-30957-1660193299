from flask import Flask, redirect, url_for, render_template, request

app = Flask(__name__)

@app.route("/", methods=['POST', 'GET'])
def home():
    r = ''
    if request.method=='POST' and 'fa' in request.form:
        f = float(request.form.get('fa'))
        r = round((f-32) * 5/9 , 2)
    return render_template("index.html", res = r)

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, debug=True)