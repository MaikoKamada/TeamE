from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)

from tinydb import TinyDB, Query
db = TinyDB("db.json")
query = Query()

#募集アイデアを入れるリスト
threads=[]

@app.route("/")
def index():
    return render_template('index.html', posts=db)

# jsonファイルに募集内容を追加
@app.route("/add")
def add_idea():
    data = {
        "title":request.args.get("title"),
        "contents":request.args.get("contents"),
        "timespan":request.args.get("timespan"),
        "occupation":request.args.get("occupation"),
        "region":request.args.get("region"),
    }
    if not db.search(query.idea==data):
        db.insert({
            "idea": data,
        })
    return index()

@app.route("/reply")
def add_reply():
    db.update({"reply": request.args.get("reply")})
    return index()

# jsonファイル内のデータを消去する
@app.route("/reset")
def reset():
    if db is not None:
        db.purge()
    return render_template("index.html", posts=db)

if __name__=="__main__":
    app.run(debug=True, port=5000, host="0.0.0.0")

# ターミナルを開いてpython app.py と打ち込む
