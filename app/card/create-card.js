let cardId = 0;
module.exports = function createCard(title="", description="", listId){
  cardId++;
  return {
    id: cardId,
    title,
    description,
    listId
  };
}
