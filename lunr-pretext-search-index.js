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
  "body": " Commutativity   The commuative properties are about order . When we add or multiply two numbers, which one comes first? Does it matter? The commutative properties state that no, it doesn't matter: is the same as , and is the same as .  Students (and their teachers) intuitively understand this principle from an early age, but often do not explicitly understand the role of commutativity in more complicated procedures. These modules are designed to help teachers understand the concept and importance of the commutative propertes in elementary arithmetic.     Commutativity of Addition  The commutative property of addition states that the order in which we add two numbers doesn't matter. For example, and . The following interactive applet allows you to explore this in more detail. Use the two sliders to select the two numbers you want to add, and then click the RESTART button to run an animation.   Illustrating the commutative property      Use the commuative property of addition to complete the following equalities.                     Use the commutative property to complete the following table.                1  2  3  4  5  6  7  8  9    1  2            2  3  4           3  4  5  6          4  5  6  7  8         5  6  7  8  9  10        6  7  8  9  10  11  12       7  8  9  10  11  12  13  14      8  9  10  11  12  13  14  15  16     9  10  11  12  13  14  15  16  17  18                                                                                                                                                                                               Communtativity of Multiplication  Hi friends! Did you know that multiplication is also commutative? Here's a picture   Illustrating the commutativity of multiplication in terms of area   Two rectangles with the same area. One is 2 by 3 and the other is 3 by 2     "
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
  "id": "exercise-1",
  "level": "2",
  "url": "section-title.html#exercise-1",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": "  Use the commuative property of addition to complete the following equalities.                  "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "section-title.html#exercise-2",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "",
  "body": "  Use the commutative property to complete the following table.                1  2  3  4  5  6  7  8  9    1  2            2  3  4           3  4  5  6          4  5  6  7  8         5  6  7  8  9  10        6  7  8  9  10  11  12       7  8  9  10  11  12  13  14      8  9  10  11  12  13  14  15  16     9  10  11  12  13  14  15  16  17  18                                                                                                                                                                                            "
},
{
  "id": "fig-comm-mult",
  "level": "2",
  "url": "section-title.html#fig-comm-mult",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": " Illustrating the commutativity of multiplication in terms of area   Two rectangles with the same area. One is 2 by 3 and the other is 3 by 2   "
},
{
  "id": "sec-associativity",
  "level": "1",
  "url": "sec-associativity.html",
  "type": "Section",
  "number": "1.2",
  "title": "Associativity",
  "body": " Associativity   The associative properties are about grouping . Both addition and multiplication are fundamentally about combining pairs of numbers, but we often need to add, or multiply, three or more numbers. The associative properties let us make sense of how this works.    Associativity of Addition  Did you know that multiplication is also associative? This is important if we want to compute volume: the volume of a cube is , whether we compute this as or .   Illustrating the associative property of multiplication    A 2 by 3 by 4 box, shadeded to show volume computed as 2 groups of size 3 by 4     A 2 by 3 by 4 cube, shaded to show volume computed as 4 groups of size 2 by 3       "
},
{
  "id": "fig-mult-associative",
  "level": "2",
  "url": "sec-associativity.html#fig-mult-associative",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " Illustrating the associative property of multiplication    A 2 by 3 by 4 box, shadeded to show volume computed as 2 groups of size 3 by 4     A 2 by 3 by 4 cube, shaded to show volume computed as 4 groups of size 2 by 3     "
},
{
  "id": "section-commutative-associative",
  "level": "1",
  "url": "section-commutative-associative.html",
  "type": "Section",
  "number": "1.3",
  "title": "Combining the commutative and associative properties",
  "body": " Combining the commutative and associative properties  Lots of cool things will eventually go here.  "
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
