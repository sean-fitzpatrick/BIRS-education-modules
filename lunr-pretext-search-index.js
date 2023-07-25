var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  copyright  "
},
{
  "id": "section-title",
  "level": "1",
  "url": "section-title.html",
  "type": "Section",
  "number": "1.1",
  "title": "Commutativity",
  "body": " Commutativity   The commuative properties are about order . When we add or multiply two numbers, which one comes first? Does it matter? The commutative properties state that no, it doesn't matter: is the same as , and is the same as .  Students (and their teachers) intuitively understand this principle from an early age, but often do not explicitly understand the role of commutativity in more complicated procedures. These modules are designed to help teachers understand the concept and importance of the commutative propertes in elementary arithmetic.     Commutativity of Addition  The commutative property of addition states that the order in which we add two numbers doesn't matter. For example, and . The following interactive applet allows you to explore this in more detail. Use the two sliders to select the two numbers you want to add, and then click the RESTART button to run an animation.   Illustrating the commutative property      Communtativity of Multiplication  Hello.   "
},
{
  "id": "geogebra-add-commutative",
  "level": "2",
  "url": "section-title.html#geogebra-add-commutative",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " Illustrating the commutative property   "
},
{
  "id": "sec-associativity",
  "level": "1",
  "url": "sec-associativity.html",
  "type": "Section",
  "number": "1.2",
  "title": "Associativity",
  "body": " Associativity   The associative properties are about grouping . Both addition and multiplication are fundamentally about combining pairs of numbers, but we often need to add, or multiply, three or more numbers. The associative properties let us make sense of how this works.    Associativity of Addition  Hiya!    associativity-multiplication  Hey hey hey...   "
},
{
  "id": "section-commutative-associative",
  "level": "1",
  "url": "section-commutative-associative.html",
  "type": "Section",
  "number": "1.3",
  "title": "Combining the commutative and associative properties",
  "body": " Combining the commutative and associative properties  "
},
{
  "id": "sec-distributive-property",
  "level": "1",
  "url": "sec-distributive-property.html",
  "type": "Section",
  "number": "1.4",
  "title": "Distributive Property",
  "body": " Distributive Property  More stuff!  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
