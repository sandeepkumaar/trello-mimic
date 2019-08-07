## Trello mimic

An Assignemt given, uses react, redux, react-dnd

### Launch 
```
$ npm install
$ npm run build
$ npm start 
```
launch the app at http://localhost:5000/

to watch files use ` npm run watch`
Note: build the project before watching

### TODO
add redux layer
comment module to card
Bring redux

## commits
change ListCard to List
externalise ListForm and CardForm
lift cards state to it container ie. Board


{
  board: ["b1", "b2"],
  list: [{
    id: "l1",
    boardId: "b1"
    title: "New"
  }],
  cards: [{
    id: "c1",
    listId: "l1",
    title: "xyz",
    description: "abc"
  }]
}

- addList. createList

- addCard
- deleteCard
- updateCard

- move card



