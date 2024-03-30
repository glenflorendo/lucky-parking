import _ from "lodash";
import { getFirst, getNth } from "./enum";
var MOCK_ENUM;
(function (MOCK_ENUM) {
    MOCK_ENUM["FF"] = "Final Fantasy";
    MOCK_ENUM["FNAF"] = "Five Nights at Freddy's";
    MOCK_ENUM["GTA"] = "Grand Theft Auto";
    MOCK_ENUM["KH"] = "Kingdom Hearts";
    MOCK_ENUM["LOL"] = "League of Legends";
    MOCK_ENUM["OW"] = "Overwatch";
    MOCK_ENUM["VAL"] = "Valorant";
})(MOCK_ENUM || (MOCK_ENUM = {}));
var MOCK_EMPTY_ENUM;
(function (MOCK_EMPTY_ENUM) {
})(MOCK_EMPTY_ENUM || (MOCK_EMPTY_ENUM = {}));
describe("Enum Utilities", () => {
    describe("getNth", () => {
        it("gets the nth enum", () => {
            _.each(_.range(0, _.size(MOCK_ENUM)), (n) => {
                expect(getNth(MOCK_ENUM, n)).toStrictEqual(_.nth(_.toArray(MOCK_ENUM), n));
            });
        });
        it("returns undefined for out-of-bounds nth", () => {
            expect(getNth(MOCK_ENUM, _.size(MOCK_ENUM))).toBeUndefined();
        });
    });
    describe("getFirst", () => {
        it("gets first enum", () => {
            expect(getFirst(MOCK_ENUM)).toStrictEqual(_.nth(_.toArray(MOCK_ENUM), 0));
        });
        it("returns undefined for empty enum", () => {
            expect(getFirst(MOCK_EMPTY_ENUM)).toBeUndefined();
        });
    });
});
