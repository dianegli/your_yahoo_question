
function validation() {

    var name = document.getElementById("name").value;
    var fav = document.getElementById("fav").value;

    if (name === '' || fav === '') {
        alert("Please fill all fields!");
        return false;
    } else if (isNaN(fav)) {
        alert("Please input in a number");
        return false;
    } else {
        return true;
    }
}



function submit_by_id() {

    var name = document.getElementById("name").value;
    var name_len = name.length;
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

            alert(line);
        });
    }

};


