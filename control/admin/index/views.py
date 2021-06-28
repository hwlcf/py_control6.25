from flask import Blueprint, render_template, current_app

index_blu = Blueprint("index", __name__,url_prefix='/index')


@index_blu.route('/index')
def index():
    return render_template('new/index.html')


@index_blu.route('/favicon.ico')
def favicon():
    return current_app.send_static_file('news/favicon.ico')
