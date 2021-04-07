function validation() {

    var name = document.getElementById("name").value.toLowerCase().replace(/\s+/g, '');
    var fav = document.getElementById("fav").value;

    if (name === '' || fav === '') {
        alert("Please fill all fields!");
        return false;
    } else if (!(/^[a-zA-Z]+$/.test(name))) {
        alert("Please make sure your name only contains letters");
        return false;
    } else if (isNaN(fav)) {
        alert("Please input in a number");
        return false;
    } else {
        return true;
    }
}


function submit_by_id() {

    var name = document.getElementById("name").value.toLowerCase().replace(/\s+/g, '');

    //var name_len = name.length;

    function letterValue(str) {
        var anum = {
            a: 1,
            b: 2,
            c: 3,
            d: 4,
            e: 5,
            f: 6,
            g: 7,
            h: 8,
            i: 9,
            j: 10,
            k: 11,
            l: 12,
            m: 13,
            n: 14,
            o: 15,
            p: 16,
            q: 17,
            r: 18,
            s: 19,
            t: 20,
            u: 21,
            v: 22,
            w: 23,
            x: 24,
            y: 25,
            z: 26
        }
        if (str.length == 1) return anum[str] || ' ';

        return str.split('').map(letterValue);
    };

    var arr = letterValue(name);

    var total = 0;
    for (var i in arr) {
        total += parseInt(arr[i]);
    };

    var name_len = total;

    var fav = document.getElementById("fav").value;

    Math.seed = name_len * fav;

    Math.seededRandom = function(max, min) {
        max = max || 1;
        min = min || 0;

        Math.seed = (Math.seed * 9301 + 49297) % 233280;
        var rnd = Math.seed / 233280;

        return Math.round(min + rnd * (max - min));

    };

    if (validation()) // Calling validation function
    {
        $.get("yahoo-answers-mbmbam.txt", function(data) {
            //Split data by lines if its in a formated format (like json you have to decode or parse the data)
            var lines = data.split("\n");

            //Random item number
            var r = Math.seededRandom(1, 1701);

            //Get random line
            var line = lines[r];

            //alert(line);

            document.getElementById("out").innerHTML = line;

        });
    }

};