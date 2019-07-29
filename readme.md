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




Make the cards draggable
useDrag




Make the list droppable
update the list state when dropped




add title description to card


add support for comments

Bring redux

add css
