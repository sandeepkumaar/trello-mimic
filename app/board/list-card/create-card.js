let cardId = 0;
module.exports = function createCard(text){
  cardId++;
  return {
    id: cardId,
    desc: text
  };
}
