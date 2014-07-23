/**
 * Created by Mantis on 23/07/2014.
 */
//break object into naively chunks for short JSON strings
function encode (obj) {
    var s = JSON.stringify(obj);
    if(s.length > 140)
    {
        var strings = [];
        for(var i in obj)
        {
            if(i === 'uuid')
                continue;
            var chunk = { uuid: obj.uuid };
            chunk[i] = obj[i];
            strings.push(JSON.stringify(chunk).substr(0,140));
        }
        return strings;
    }
    else
    {
        return [s];
    }
}
