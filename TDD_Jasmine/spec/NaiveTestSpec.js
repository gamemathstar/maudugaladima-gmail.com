/**
 * Created by Mantis on 22/07/2014.
 */
describe("Encode Function ||", function() {
    var obj, s, strings, chunk, i;

    describe("assert s.length > 140 |", function () {
        beforeEach(function() {
            obj = new MyObject();
            s = JSON.stringify(obj);
        });
        it("var s has a length greater than 140 |", function() {
            expect(s.length).toBeGreaterThan(140);
        });

        describe("string[] has length > 0 |", function() {
            beforeEach(function() {
                strings = [];
                for(i in obj)
                {
                    if(i === 'uuid')
                        continue;
                    chunk = { uuid: obj.uuid };
                    chunk[i] = obj[i];
                    strings.push(JSON.stringify(chunk).substr(0,140));
                }
                return strings;
            });
            it("var obj is defined |", function() {
                expect(obj).toBeDefined();
            });
            it("obj hasn't a property 'uuid' and is not the same type as 'uuid' |", function() {
                expect(obj).not.toEqual(jasmine.objectContaining({
                    uuid : obj[i]
                }));
                expect(obj[i]).not.toBe('uuid');
            });
            it("var chunk is defined and has property 'uuid' |", function() {
                expect(chunk).toBeDefined();
            });
            it("strings is not empty i.e. > 0", function() {
                expect(strings.length).toBeGreaterThan(0);
            });
        });
    });
});