describe("Tests for the BlackJack Game", () => {
  it("should calculate the score of a hand", () => {
    const hand = [
      { displayVal: "Six", val: 6, suit: "hearts" },
      { displayVal: "Seven", val: 7, suit: "hearts" },
    ];
    const result = calcPoints(hand);

    expect(result.total).toEqual(13);
    expect(result.isSoft).toEqual(false);
  });
});
///////////////////////////////////////////////////
describe("Test for cardDeck", () => {
  it("should produce 52card array", () => {
    expect(deck.length).toEqual(52);
  });
});

////////////////////////////////////////////////////
describe("getDeck", function () {
  it("should generate cards with valid values", function () {
    const deck = getDeck();

    const randomCard = deck[Math.floor(Math.random() * 52)];

    expect(typeof randomCard.val).toBe("number");
  });
});
