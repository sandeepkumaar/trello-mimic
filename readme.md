## Requirements

A board

List
	- card

Card 
	- title 
	- description
	- comment list


Entities:
Board
List
Card

### Design

Every list has add form to add cards
Every card has a delete button to delete card

Steps:
List component with text 
Create text
Delete a text

Since list cards are passed they need a id to track.
A Card factory will be responsible for creating cards with unique id
Change text to card and modularise code

A cardList to hold all card objects. Add, delete will happen there


create multiple list

move card from list to list
### React dnd
#### Issue: react-dnd's commonjs module is breaking.
hence falling back to react-dnd esm module, and changing the package.json of
react-dnd, dnd-core, react-dnd-html5-backend 's main prop to point to `dist/cjs/index.js`


### Make the cards draggable
useDrag
watch for dragging event


### Make the list droppable
Note: useDrag, useDrop should be used in components that are *child* to 
DndProvider

Note: Each card and list should get its own ref of `drag/drop` inorder 
to correctly operate. Hence creating ListContainer, Card components and moving
the useDrag, useDrop inside them using the props of the corresponding components


### useDrag, useDrop on its own component


### update the list state when dropped

### edit card option

TODO: change the fields editable with a update button

## add title description to card

## Add basic css.  to feel the app
includes some cleanup


## focus on card delete and update

## card with comments as pop-up
add support for comments  
maintain them in individual card

## change folder structure





manage list with id, list state


Bring redux

