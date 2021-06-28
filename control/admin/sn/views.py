import hashlib
import uuid

from flask import Blueprint, render_template, current_app
from flask import jsonify, make_response, request

sn_blu = Blueprint("sn", __name__, url_prefix='/sn')


@sn_blu.route('/index')
def index():
    return render_template('sn/index.html')


@sn_blu.route('/add')
def sn_add():
    re = uuid.uuid4()
    return render_template('sn/index.html')


@sn_blu.route('/delete')
def sn_delete():
    return render_template('sn/index.html')


@sn_blu.route('/up')
def sn_up():
    return render_template('sn/index.html')


@sn_blu.route('/read')
def sn_read():
    return render_template('sn/index.html')
