enum TColor {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

type TShirt = {
    color: TColor;
    size: string;
};

const myShirt: TShirt = {
    color: TColor.Red,
    size: "M"
};

const anotherShirt: TShirt = {
    color: TColor.Green,
    size: "L"
};  




