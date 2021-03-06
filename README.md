# The Web Developer Bootcamp

My solutions to the Udemy Course "The Web Developer Bootcamp"

## Lecture 21

This exercise covered some basic tags in html, the structure of a html file and the use of list in html.

[View Output](https://htmlpreview.github.io/?https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/21_HTML_List/21_HTML_List_Assignment.html)

## Lecture 25

This exercise focused on the `<img>` tag with `src` attribute and the `<a>` tag with the `href` attribute.

[View Output](https://htmlpreview.github.io/?https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/25_HTML_Img/25_HTML_with_img_href.html)

## Lecture 29

This exercise introduced the `<table>` tag with important elements like `<thead>`, `<tbody>`, `<tr>`, `<th>` and `<td>`. A table for pokemon characters with images are created.

[View Output](https://htmlpreview.github.io/?https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/29_HTML_Table/29_HTML_Pokemon_Table.html)

## Lecture 37

Introduction to forms in html. Important tags are `<input>` and `<label>`. In addition, some important attributes are:

* `id`:   this is mostly used so that `<label>` can be matched to the `<input>`
* `name`: name of the input that will appear in the http request once form is submitted
* `type`: type of the input, e.g. radio, text, password, email
* `<select>`: this is the dropdown input, each option is enclosed in an `<option>` tag under the select.
* `placeholder`: a placeholder text option
* `selected`

[View Output](https://htmlpreview.github.io/?https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/37_HTML_Form/37_HTML_Form_Exercise.html)

## Lecture 52

Introduction to CSS. This is purely a styling exercise.

[View Output](https://htmlpreview.github.io/?https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/52_CSS_Selector/52_selectorsExercise.html)

## Lecture 61

Introduction to box model. We used html table and css to make a simple tic-tac-toe grid. Some important ideas are:

* `border`: we've actually seen this before in Lecture 52. Basically it's the border surrending your selector.
* `padding`: the distance between your content and your border.
* `margin`: the distance between your tag and other boxes.
* `border-collapse`: cool trick to make a continuous border

[View Output](https://htmlpreview.github.io/?https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/61_CSS_Box_TicTacToe/61_TicTacToe_Board.html)

## Lecture 64

We further explored the use of box model to create a photo blog that scales dynamically with our window size.

[View Output](https://htmlpreview.github.io/?https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/64_CSS_Grid_PhotoBlog/64_photogrid.html)

## Lecture 67

We combine all we've learned about css so far to style a blog page.

* `max-width`: can be set in absolute unit and use with `width` in relative unit. `max-width` will be used until the window does not have enought room to accomodate it. Then the `width` scaling will be used.
* Include fonts from [Google Fonts](https://fonts.google.com/)
* Use of `<div>` tag to differentiate parts

[View Output](https://htmlpreview.github.io/?https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/67_CSS_Blog/67_Blog.html)

## Lecture 81

This is the first **Bootstrap** exercise. In this project, we've included the bootstrap `navbar` as well as using the grid system (e.g. `col-lg-4`). In addition, we've also included icons from the **Font Awesome** library.

[View Output](https://htmlpreview.github.io/?https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/81_Bootstrap_grid/81_Image_Gallery.html)

## Lecture 84

In this Bootstrap exercise, we made a landing page for a hypothetical startup company called *AlphaZen*.

[View Output](https://htmlpreview.github.io/?https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/84_Bootstrap_landing_page/84_landing_page.html)

## Lecture 95

This is the first JS exercise. In it, we covered three concepts:

* `var` used to store a variable
* `prompt` to ask for a user input
* `console.log` to log to console

[View Output](https://htmlpreview.github.io/?https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/95_JS_Stalker/95_stalker.html)

## Lecture 97

Exercise to calculate number of days alive. A key concept is the `<script>` is sensitive to where it is in the html script. In this exercise, since we want to display our `<h1>` and `<p>` tag before the prompt runs, we need to put the script behind these tags.

[View Output](https://htmlpreview.github.io/?https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/97_JS_DaysAlive/97_days_alive.html)

## Lecture 103

Evaluating conditions in Javascript. Some basic `if` statements.

[View Output](https://htmlpreview.github.io/?https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/103_JS_ifelse/103_ifelse.html)

## Lecture 105 -114

More on `while` and `for` loops in JavaScript. Some highlights:

* If you already know C/C++, the looping looks exactly the same

  * `while` loop:

    ```javascript
    while (i < 10) {
        console.log(i);
        i++;
    }
    ```

  * `for` loop:
    ```javascript
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    ```
* `Number(i)` can be used to coerce a string to number
* `String.indexOf()` returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

## Lecture 122

Introduces the `function` keyword and how to write functions in Javascript.

[View Output](https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/122_JS_Function/122_function.js)

## Lecture 132

Introduces the Javascript `Array` data structure. Some common methods used to manipulate arrays.

* `var my_array = []` creates an array
* `pop` and `push`
* `shift` and `unshift`

[View Output](https://htmlpreview.github.io/?https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/132_JS_Array/132_todo.html)

## Lecture 136

More in depth todo list with forEach to print out todo list items and using `splice()` method to remove items from array.

[View Output](https://htmlpreview.github.io/?https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/136_JS_Array_forEach/136_todo.html)

## Lecture 137

More Javascript Functions

[View Output](https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/137_JS_Array_functions/137_array_functions.js)

## Lecture 144

Introduction to Javascript objects and how to nest objects within arrays and arrays within objects.

[View Output](https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/144_JS_Object/144_moviesDB.js)

## Lecture 152

DOM (document object model) manipulation basics. There are some useful functions:

* `console.dir()` convert html to Javascript object. You'll be able to see the elements thats in this object
* document.getElementById()
* document.getElementsByClassName()
* document.getElementsByTagName()
* document.querySelector()
* document.querySelectorAll()

## Lecture 159

Play with Google Page

[View Output](https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/159_JS_DOM_Manipulation/159_google_page.js)

## Lecture 161

DOM Event listener `addEventListener'

[View Output](https://htmlpreview.github.io/?https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/161_JS_DOM_Event/161_Color_Toggle.html)

## Lecture 162
A score keeper.

[View Output](https://htmlpreview.github.io/?https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/162_JS_Scorekeeper/162_ScoreKeeper.html)

## Lecture 169
A color guessing game

[View Output](https://htmlpreview.github.io/?https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/169_JS_ColorGame/169_ColorGame.html)

## Lecture 183
Use jQuery to select `$("#id").css("color", "purple")`

## Lecture 184
More jQuery selector methods:

* `.text()`L used to change text content or retrieve text content
* `.html()`: used to retrieve and change html code
* `.attr()`: used to retrive and change attributes (e.g. width, type)
* `.last()`: select the last element in the selector
* `.val()`: extract value of input
* `.addClass()`
* `click()`: add click event listener
* `keypress()`: add keypress event listener
* `$(this)`: jQuery version of `this`

## Lecture 192
Todo list with javascript and jquery

[View Output](https://htmlpreview.github.io/?https://github.com/shawnlinxl/The_Web_Developer_Bootcamp/blob/master/192_Todo_List_Project/index.html)
