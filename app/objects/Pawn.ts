export default class Pawn {

    __x: number;
    __y: number;
    __color: (0 | 1);

    constructor(x: number, y: number, color: (0 | 1)) {

        this.__x = x;
        this.__y = y;
        this.__color = color;

    }

    get x(): number {
        return this.__x;
    }

    get y(): number {
        return this.__y;
    }

    get color(): (0 | 1) {
        return this.__color;
    }

}