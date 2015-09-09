

## Constructors

### 1) RECIPES
  - Name
      - ID - recipe-name
      - name = name
  - Type of recipe (i.e. breakfast, lunch, quick-meal, etc.)
      - ID - recipe-type
      - name = type
  - ingredients
    - amount
    - TIME TILL IT GOES BAD
    - How important it is to recipe - Is it needed or not!
    - Can it be REPLACED WITH A different ingredient
  - servings
  - directions
  - prep time
      - ID = prep-time
      - name = prepTime
  - cook time
  - notes
      - ID - recipe-notes
      - name = recipeNotes
  - description
  - complimentary foods / Menu
  - picture
  - rating
    - user
    - Skill - level need to make beginner / moderately / hard

  Methods
  - render
  - sort??
  - get recipe??
  - save recipe
  - print recipe?
  - check user??
  - update user

### 2) MENUS / SHOPPING LISTS
  - Recipes
    - BEST if made by...
  -


LOCATIONS FOR DISPLAY
- ID = results
- ID = recipe-table
- table class = TABLE
- TBODY id = "ALL"
EDIT
- FORM ID = edit-form
  id = edit-name
  id = edit-type
  id = edit-prepTime
  id = edit-recipeNotes
  id = update-button - SUBMIT
  id = cancel-edit - CANCEL


## Routes

POST
1) post a new recipe
2) post a new RECIPE GROUP



# food safe / know food waste /

## what does it *need* to do
- group recipes together into lists.
-


### lists - constructor

###### what are lists?
- hold recipes together
- i don't think they hold any of the logic for how they get populated??? wait that doesn't make any sense... or does it? i dunno...
- they can be voted on
- they are the differentiation setup due to the fact that they are what needs to happen to make x amount of dishes.
- they will conserve food due to shopping smarter
-

var lists = new List () {}
  this.recipes = [];


### recipes - constructor
- what is the data structure for the recipes
- what
