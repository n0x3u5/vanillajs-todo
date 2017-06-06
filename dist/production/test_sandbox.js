!function(a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            i: d,
            l: !1,
            exports: {}
        };
        return a[d].call(e.exports, e, e.exports, b), e.l = !0, e.exports;
    }
    var c = {};
    b.m = a, b.c = c, b.i = function(a) {
        return a;
    }, b.d = function(a, c, d) {
        b.o(a, c) || Object.defineProperty(a, c, {
            configurable: !1,
            enumerable: !0,
            get: d
        });
    }, b.n = function(a) {
        var c = a && a.__esModule ? function() {
            return a.default;
        } : function() {
            return a;
        };
        return b.d(c, "a", c), c;
    }, b.o = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }, b.p = "", b(b.s = 4);
}([ function(a, b, c) {
    "use strict";
    function d(a) {
        if (Array.isArray(a)) {
            for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
            return c;
        }
        return Array.from(a);
    }
    function e(a) {
        g = a, h = [].concat(d(document.querySelector(".filters").children)), h.forEach(function(a) {
            "selected" === a.getAttribute("class") && (i = a), a.addEventListener("click", function() {
                f(a);
            });
        });
    }
    function f(a) {
        var b = "selected" === a.getAttribute("class"), c = "";
        b || (i.setAttribute("class", ""), a.setAttribute("class", "selected"), i = a, c = "Active" === i.innerHTML ? "incomplete" : "Completed" === i.innerHTML ? "complete" : "all", 
        g.updateListView(c));
    }
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    var g = {}, h = [], i = {};
    b.default = e;
}, function(a, b, c) {
    "use strict";
    function d(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    var e = function() {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), 
                Object.defineProperty(a, d.key, d);
            }
        }
        return function(b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b;
        };
    }(), f = c(5), g = function(a) {
        return a && a.__esModule ? a : {
            "default": a
        };
    }(f), h = function() {
        function a(b) {
            var c = this;
            d(this, a), this.todoItems = [], this.invisibles = b, this.toggleAll = document.querySelector(".toggle-all"), 
            this.todoList = document.querySelector(".todo-list"), this.todoCounter = document.querySelector(".todo-count"), 
            this.clearCompletedBtn = document.querySelector(".clear-completed"), this.statusAll = "incomplete", 
            this.activeFilter = "all", this.incompleteCount = 0, this.toggleInvisibles(), this.toggleAll.addEventListener("click", function() {
                c.toggleStatusAll(), c.updateIncompleteCount();
            }), this.clearCompletedBtn.addEventListener("click", function() {
                c.clearCompleted();
            });
        }
        return e(a, [ {
            key: "addItem",
            value: function(a) {
                var b = this, c = new g.default(a), d = c.getListItem();
                this.todoItems.push(c), this.todoList.appendChild(d), this.updateIncompleteCount(), 
                c.checkBox.addEventListener("click", function() {
                    b.statusAll = "incomplete", b.toggleAll.checked = !1, b.updateIncompleteCount();
                }), c.disposeBtn.addEventListener("click", function() {
                    b.todoItems.splice(b.todoItems.indexOf(c), 1), b.updateIncompleteCount();
                });
            }
        }, {
            key: "updateIncompleteCount",
            value: function() {
                var a = this;
                this.incompleteCount = 0, this.todoItems.forEach(function(b) {
                    "incomplete" === b.itemStatus && a.incompleteCount++;
                }), this.incompleteCount > 0 ? 1 === this.incompleteCount ? this.todoCounter.innerHTML = this.incompleteCount + " item left." : this.todoCounter.innerHTML = this.incompleteCount + " items left." : this.todoCounter.innerHTML = "", 
                this.updateListView(this.activeFilter), this.toggleInvisibles();
            }
        }, {
            key: "setStatusAll",
            value: function(a) {
                this.todoItems.forEach(function(b) {
                    b.setStatus(a);
                });
            }
        }, {
            key: "toggleInvisibles",
            value: function() {
                var a = this;
                this.invisibles.forEach(function(b) {
                    a.todoItems.length > 0 ? b.classList.remove("invisible") : b.classList.add("invisible");
                });
            }
        }, {
            key: "toggleStatusAll",
            value: function() {
                "complete" === this.statusAll ? this.statusAll = "incomplete" : this.statusAll = "complete", 
                this.setStatusAll(this.statusAll);
            }
        }, {
            key: "clearCompleted",
            value: function() {
                var a = this, b = [];
                this.todoItems.forEach(function(a) {
                    "complete" === a.itemStatus && (b.push(a), a.dispose());
                }), b.forEach(function(b) {
                    a.todoItems.splice(a.todoItems.indexOf(b), 1);
                }), this.toggleAll.checked = !1, this.updateIncompleteCount();
            }
        }, {
            key: "updateListView",
            value: function(a) {
                var b = this.todoItems, c = [];
                this.activeFilter = a, c = "all" === a ? b : b.filter(function(b) {
                    return b.itemStatus === a;
                }), b.forEach(function(a) {
                    var b = a.getListItem(), d = b.classList;
                    c.includes(a) ? d.remove("hidden") : d.add("hidden");
                });
            }
        } ]), a;
    }();
    b.default = h;
}, function(a, b, c) {
    "use strict";
    function d(a) {
        return 13 === a;
    }
    Object.defineProperty(b, "__esModule", {
        value: !0
    }), b.isReturnPressed = d;
}, function(a, b) {}, function(a, b, c) {
    "use strict";
    function d(a) {
        return a && a.__esModule ? a : {
            "default": a
        };
    }
    var e = c(1), f = d(e), g = c(0), h = d(g), i = c(2);
    c(3);
    var j = document.querySelector(".new-todo"), k = document.querySelector(".toggle-all"), l = document.querySelector(".toggle-all-label"), m = document.querySelector(".footer"), n = [ k, l, m ], o = new f.default(n);
    h.default(o), j.addEventListener("keyup", function(a) {
        var b = a.keyCode ? a.keyCode : a.which;
        i.isReturnPressed(b) && (o.addItem(j.value), j.value = "");
    });
}, function(a, b, c) {
    "use strict";
    function d(a) {
        if (Array.isArray(a)) {
            for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
            return c;
        }
        return Array.from(a);
    }
    function e(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    var f = function() {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), 
                Object.defineProperty(a, d.key, d);
            }
        }
        return function(b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b;
        };
    }(), g = function() {
        function a(b) {
            e(this, a), this.checkBox = this.createCheckBox(), this.label = this.createLabel(b), 
            this.disposeBtn = this.createDisposeBtn(), this.listItem = this.createListItem(), 
            this.itemStatus = "incomplete";
        }
        return f(a, [ {
            key: "createCheckBox",
            value: function() {
                var a = this, b = document.createElement("input");
                return b.setAttribute("type", "checkbox"), b.setAttribute("class", "todo-status"), 
                b.addEventListener("click", function() {
                    a.toggleStatus();
                }), b;
            }
        }, {
            key: "createLabel",
            value: function(a) {
                var b = document.createElement("label");
                return b.setAttribute("for", "todo-status"), b.setAttribute("class", "not-done"), 
                b.innerHTML = a, b;
            }
        }, {
            key: "createDisposeBtn",
            value: function() {
                var a = this, b = document.createElement("button");
                return b.setAttribute("class", "dispose-btn"), b.innerHTML = "&#10006;", b.addEventListener("click", function() {
                    a.dispose();
                }), b;
            }
        }, {
            key: "createListItem",
            value: function() {
                var a = document.createElement("li");
                return a.appendChild(this.checkBox), a.appendChild(this.label), a.appendChild(this.disposeBtn), 
                a.setAttribute("class", "clearfix"), a;
            }
        }, {
            key: "getListItem",
            value: function() {
                return this.listItem;
            }
        }, {
            key: "updateTask",
            value: function(a) {
                this.label.innerHTML = a;
            }
        }, {
            key: "setStatus",
            value: function(a) {
                this.label.setAttribute("class", a), this.itemStatus = a, this.checkBox.checked = "incomplete" !== a;
            }
        }, {
            key: "toggleStatus",
            value: function() {
                "complete" === this.label.getAttribute("class") ? this.setStatus("incomplete") : this.setStatus("complete");
            }
        }, {
            key: "dispose",
            value: function() {
                [].concat(d(this.listItem.children)).forEach(function(a) {
                    a.remove();
                }), this.listItem.remove();
            }
        } ]), a;
    }();
    b.default = g;
} ]);