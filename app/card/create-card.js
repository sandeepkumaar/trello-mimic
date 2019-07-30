let cardId = 0;
module.exports = function createCard(title="", description=""){
  cardId++;
  return {
    id: cardId,
    title,
    description
  };
}
