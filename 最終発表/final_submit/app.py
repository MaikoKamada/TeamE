from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)
#募集アイデアを入れるリスト
threads=[]

@app.route("/")
def index():
    return render_template('index.html', posts=threads)

@app.route("/add")
def add():
    threads.append({
        "title":request.args.get("title"),
        "contents":request.args.get("contents"),
        "timespan":request.args.get("timespan"),
        "occupation":request.args.get("occupation"),
        "region":request.args.get("region")
    })
    return index()


if __name__=="__main__":
    app.run(debug=True, port=5000, host="0.0.0.0")

# ターミナルを開いてpython app.py と打ち込む
