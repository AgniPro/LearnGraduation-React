
function headScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 40,
        commentEl = document.getElementById('header');
    if (distanceY > shrinkOn) {
        commentEl.classList.add("stick");
    } else {
        commentEl.classList.remove("stick");
    }
}
window.addEventListener('scroll', headScroll);
/* lazy youtube */
(function () {
    var youtube = document.querySelectorAll(".lazyYt");
    for (var i = 0; i < youtube.length; i++) {
        var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";
        var image = new Image();
        image.setAttribute("class", "lazy");
        image.setAttribute("data-src", source);
        image.setAttribute("src", "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=");
        image.setAttribute("alt", "Youtube video");
        image.addEventListener("load", function () {
            youtube[i].appendChild(image);
        }(i));
        youtube[i].addEventListener("click", function () {
            var iframe = document.createElement("iframe");
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed +
                "?rel=0&showinfo=0&autoplay=1");
            this.innerHTML = "";
            this.appendChild(iframe);
        });
    };
})();
/* Lightbox image script*/
for (var imageslazy = document.querySelectorAll(
        '.pS .separator img, .pS .tr-caption-container img, .pS .psImg >img, .pS .btImg >img'), i = 0; i <
    imageslazy.length; i++) imageslazy[i].setAttribute('onclick', 'return false');

function wrap(o, t, e) {
    for (var i = document.querySelectorAll(t), c = 0; c < i.length; c++) {
        var a = o + i[c].outerHTML + e;
        i[c].outerHTML = a
    }
}
wrap('<div class="zmImg">', '.pS .separator >a', '</div>');
wrap('<div class="zmImg">', '.pS .tr-caption-container td >a', '</div>');
wrap('<div class="zmImg">', '.pS .separator >img', '</div>');
wrap('<div class="zmImg">', '.pS .tr-caption-container td >img', '</div>');
wrap('<div class="zmImg">', '.pS .psImg >img', '</div>');
wrap('<div class="zmImg">', '.pS .btImg >img', '</div>');
for (var containerimg = document.getElementsByClassName('zmImg'), i = 0; i < containerimg.length; i++)
    containerimg[i].onclick = function () {
        this.classList.toggle('s');
    };
Defer.dom('.lazy', 100, 'loaded', null, {
    rootMargin: '1px'
}), 'undefined' != typeof infinite_scroll && infinite_scroll.on('load', function () {
    Defer.dom('.lazy', 100, 'loaded', null, {
        rootMargin: '1px'
    })
});


! function (c, i, t) {
    var f, o = /^data-(.+)/,
        u = 'IntersectionObserver',
        r = /p/.test(i.readyState),
        s = [],
        a = s.slice,
        d = 'lazied',
        n = 'load',
        e = 'pageshow',
        l = 'forEach',
        m = 'hasAttribute',
        h = 'shift';

    function p(e) {
        i.head.appendChild(e)
    }

    function v(e, n) {
        a.call(e.attributes)[l](n)
    }

    function y(e, n, t, o) {
        return o = (o = n ? i.getElementById(n) : o) || i.createElement(e), n && (o.id = n), t && (o.onload =
            t), o
    }

    function b(e, n) {
        return a.call((n || i).querySelectorAll(e))
    }

    function g(t, e) {
        b('source', t)[l](g), v(t, function (e, n) {
            (n = o.exec(e.name)) && (t[n[1]] = e.value)
        }), e && (t.className += ' ' + e), n in t && t[n]()
    }

    function I(e) {
        f(function (o) {
            o = b(e || '[type=deferjs]'),
                function e(n, t) {
                    (n = o[h]()) && (n.parentNode.removeChild(n), (t = y(n.nodeName)).text = n.text, v(
                        n,
                        function (e) {
                            'type' != e.name && (t[e.name] = e.value)
                        }), t.src && !t[m]('async') ? (t.onload = t.onerror = e, p(t)) : (p(t),
                        e()))
                }()
        })
    }(f = function (e, n) {
        r ? t(e, n) : s.push(e, n)
    }).all = I, f.js = function (n, t, e, o) {
        f(function (e) {
            (e = y('SCRIPT', t, o)).src = n, p(e)
        }, e)
    }, f.css = function (n, t, e, o) {
        f(function (e) {
            (e = y('LINK', t, o)).rel = 'stylesheet', e.href = n, p(e)
        }, e)
    }, f.dom = function (e, n, t, o, i) {
        function r(e) {
            o && !1 === o(e) || g(e, t)
        }
        f(function (t) {
            t = u in c && new c[u](function (e) {
                e[l](function (e, n) {
                    e.isIntersecting && (n = e.target) && (t.unobserve(n), r(n))
                })
            }, i), b(e || '[data-src]')[l](function (e) {
                e[m](d) || (e.setAttribute(d, ''), t ? t.observe(e) : r(e))
            })
        }, n)
    }, f.reveal = g, c.Defer = f, c.addEventListener('on' + e in c ? e : n, function () {
        for (I(); s[0]; t(s[h](), s[h]())) r = 1
    })
}(this, document, setTimeout),
function (e, n) {
    e.defer = n = e.Defer, e.deferscript = n.js, e.deferstyle = n.css, e.deferimg = e.deferiframe = n.dom
}(this);

// js for like button
let b = document.querySelector('like-button');
setTimeout(()=>b.focus(), 100);
 setTimeout(()=>b.blur(), 1000);

//  Toc generator Table of Content, Credit: blustemy.io/creating-a-table-of-contents-in-javascript
class TableOfContents { constructor({ from, to }) { this.fromElement = from; this.toElement = to; this.headingElements = this.fromElement.querySelectorAll("h1, h2, h3, h4, h5, h6"); this.tocElement = document.createElement("div"); }; getMostImportantHeadingLevel() { let mostImportantHeadingLevel = 6; for (let i = 0; i < this.headingElements.length; i++) { let headingLevel = TableOfContents.getHeadingLevel(this.headingElements[i]); mostImportantHeadingLevel = (headingLevel < mostImportantHeadingLevel) ? headingLevel : mostImportantHeadingLevel; } return mostImportantHeadingLevel; }; static generateId(headingElement) { return headingElement.textContent.replace(/\s+/g, "_"); }; static getHeadingLevel(headingElement) { switch (headingElement.tagName.toLowerCase()) { case "h1": return 1; case "h2": return 2; case "h3": return 3; case "h4": return 4; case "h5": return 5; case "h6": return 6; default: return 1; } }; generateToc() { let currentLevel = this.getMostImportantHeadingLevel() - 1, currentElement = this.tocElement; for (let i = 0; i < this.headingElements.length; i++) { let headingElement = this.headingElements[i], headingLevel = TableOfContents.getHeadingLevel(headingElement), headingLevelDifference = headingLevel - currentLevel, linkElement = document.createElement("a"); if (!headingElement.id) { headingElement.id = TableOfContents.generateId(headingElement); } linkElement.href = `#${headingElement.id}`; linkElement.textContent = headingElement.textContent; if (headingLevelDifference > 0) { for (let j = 0; j < headingLevelDifference; j++) { let listElement = document.createElement("ol"), listItemElement = document.createElement("li"); listElement.appendChild(listItemElement); currentElement.appendChild(listElement); currentElement = listItemElement; } currentElement.appendChild(linkElement); } else { for (let j = 0; j < -headingLevelDifference; j++) { currentElement = currentElement.parentNode.parentNode; } let listItemElement = document.createElement("li"); listItemElement.appendChild(linkElement); currentElement.parentNode.appendChild(listItemElement); currentElement = listItemElement; } currentLevel = headingLevel; } this.toElement.appendChild(this.tocElement.firstChild); } }