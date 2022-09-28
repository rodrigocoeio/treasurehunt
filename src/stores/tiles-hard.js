import rules from "$/tiles-rules.js";

export default [
    // Row 1
    { number: 0, x: 0, y: 0 },
    {
        number: 1, x: 128, y: 0,
        image: "/images/tiles/rock-island.png",
        rule: rules.takeGoldCoin
    },
    { number: 2, x: 256, y: 0 },
    {
        number: 3, x: 384, y: 0,
        image: "/images/tiles/rocks.png",
        rule: rules.takeSilverCoin
    },
    { number: 4, x: 512, y: 0 },
    {
        number: 5, x: 640, y: 0,
        rule: rules.goBack2,
        image: "/images/tiles/go-back-2-steps.png"
    },
    { number: 6, x: 772, y: 0 },

    // Row 2
    {
        number: 7, x: 772, y: 130,
        rule: rules.goFoward2,
        image: "/images/tiles/go-forward-2-steps.png"
    },
    { number: 8, x: 640, y: 130 },
    {
        number: 9, x: 512, y: 130,
        image: "/images/tiles/island.png",
        rule: rules.takeBronzeCoin
    },
    {
        number: 10, x: 384, y: 130,
        rule: rules.startOver,
        image: "/images/tiles/start-again.png"
    },
    { number: 11, x: 256, y: 130 },
    {
        number: 12, x: 128, y: 130,
        image: "/images/tiles/cabin.png",
        rule: rules.takeBronzeCoin
    },
    { number: 13, x: 0, y: 130 },

    // Row 3
    {
        number: 14, x: 0, y: 260,
        rule: rules.goBack2,
        image: "/images/tiles/go-back-2-steps.png"
    },
    {
        number: 15, x: 128, y: 260
    },
    {
        number: 16, x: 256, y: 260,
        image: "/images/tiles/rocks.png",
        rule: rules.takeSilverCoin
    },
    {
        number: 17, x: 384, y: 260,
        image: "/images/tiles/island.png",
        rule: rules.takeBronzeCoin
    },
    {
        number: 18, x: 512, y: 260,
        image: "/images/tiles/cabin.png",
        rule: rules.takeBronzeCoin
    },
    {
        number: 19, x: 640, y: 260
    },
    {
        number: 20, x: 772, y: 260,
        rule: rules.startOver,
        image: "/images/tiles/start-again.png"
    },

    // Row 4
    { number: 21, x: 772, y: 390 },
    {
        number: 22, x: 640, y: 390,
        image: "/images/tiles/island.png",
        rule: rules.takeBronzeCoin
    },
    {
        number: 23, x: 512, y: 390,
        image: "/images/tiles/rock-island.png",
        rule: rules.takeGoldCoin
    },
    {
        number: 24, x: 384, y: 390,
        rule: rules.goFoward2,
        image: "/images/tiles/go-forward-2-steps.png"
    },
    { number: 25, x: 256, y: 390 },
    {
        number: 26, x: 128, y: 390,
        image: "/images/tiles/island.png",
        rule: rules.takeBronzeCoin
    },
    { number: 27, x: 0, y: 390 },
    // Row 5
    {
        number: 28, x: 0, y: 520,
        image: "/images/tiles/rocks.png",
        rule: rules.takeSilverCoin
    },
    { number: 29, x: 128, y: 520 },
    {
        number: 30, x: 256, y: 520,
        rule: rules.startOver,
        image: "/images/tiles/start-again.png"
    },
    { number: 31, x: 384, y: 520 },
    {
        number: 32, x: 512, y: 520,
        rule: rules.goBack2,
        image: "/images/tiles/go-back-2-steps.png"
    },
    { number: 33, x: 640, y: 520 },
    {
        number: 34, x: 772, y: 520,
        rule: rules.openTreasureChest
    }
];