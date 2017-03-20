    $(function() {
        $("#date").datepicker();
    });
    $(function() {
        var availableTags = [
            "Gymnasium",
            "Aux Gym",
            "Auditorium",
            "LGI Room",
            "Library",
            "Cafeteria",
            "Band Room"
        ];
        $("#location").autocomplete({
            source: availableTags
        });
    });

    function setbg(color) {
        document.getElementById("styled-textarea").style.background = color
    }

    function reset() {
        document.getElementById("test").innerHTML = "";
    }

    function school_info() {
        var school = document.getElementById("school").value;
        var hours = document.getElementById("hours").value;
        var date = document.getElementById("date").value;
        var location = document.getElementById("location").value;
        var count = student.length;
        var allDatHtml = "";
        for (var i = 0; i < count; i++) {
            //makes a print page break before every 4th hall pass
            if (i % 3 == 0) {
                allDatHtml += "<div class='page_break'> </div>";
            }
            var table_string = "<table class='hp_table'><tr><th class='title_style' colspan='3'><br>" + school + " Blood Drive Hall Pass</th></tr><tr><td class='style'><b>Location: </b>" + location + "</td><td class='style'><b>Date: </b>" + date +
                "</td><td class='style'><b>Draw Hours: </b>" + hours + "</td></tr><tr><td class='bigger'><b>Name: </b>" + student[i] + "</td><td class='bigger'></td><td class='bigger'><b>Appointment Time: </b>" + time[i] +
                "</td></tr><br>" +
                "<tr><td class='style' colspan='3'><ul><li>Maintain a healthy iron level in your diet by eating iron rich foods, such as red meat, fish, poultry, beans, spinach, iron-fortified cereals and raisins.</li><li>Get a good night's sleep.</li>" +
                "<li>Drink an extra 16 oz. of water or nonalcoholic fluids before the donation.</li><li>Eat a healthy meal before your donation. Avoid fatty foods, such as hamburgers, fries or ice cream before donating. (Fatty foods can affect the tests we do on your blood. If there is too much fat in your blood, your donation cannot be tested for infectious diseases and the blood will not be used for transfusion.)</li><li>If you are a platelet donor, remember that your system must be free of aspirin for two days prior to donation.</li><li>Remember to bring your donor card, driver's license or two other forms of ID.</li></ul></td></tr><tr><td class='style' colspan='2'><b>Discharge Time: ___________</b></td><td class='style'></td></tr><tr><td class='style' colspan='2'><b>Staff Signature: ________________________</b></td><td class='style'><b>Home Room: </b>" +
                homeroom[i] + "</td></tr></table>";
            allDatHtml += table_string + "<br>";
        }
        document.getElementById("test").innerHTML = allDatHtml;
    }
    // Converts a (user-pasted) string to a 2d array, utilizing line breaks and tabs.
    function interpret_table(data) {
        console.log('Unformatted data:');
        console.log(data);
        var table = data.split("\n");
        for (i in table) {
            table[i] = table[i].split("\t");
        }

        // clear dat globals
        student = [];
        time = [];
        homeroom = [];
        time_column = Number(document.getElementById("time_column").value)-1;
        console.log(time_column)
        student_column = Number(document.getElementById("name_column").value)-1;
                console.log(student_column)
        homeroom_column = Number(document.getElementById("homeroom_column").value)-1;
                console.log(homeroom_column)

        for (var i = 0; i < table.length; i++) { //i = each student
            var table2 = table[i]; //make clone
            for (var j = 0; j < table2.length; j++) { //j = each column
                if (j == time_column) {
                    time.push(table[i][j]);
                } else if (j == student_column) {
                    student.push(table[i][j]);
                    console.log(student[0]);
                } else if (j == homeroom_column) {
                    homeroom.push(table[i][j]);
                }
            }
        }
        console.log('Formatted table:');
        console.log(table); // check console for array strcuture
        return table;
    }
    $(window).load(function() {
        $('#styled-textarea').on('change keyup', function(e) {
            var data = $(this).val();
            var prev = $(this).data('previous-data');
            console.log('var prev:');
            console.log(prev);
            table = interpret_table(data);
        });

        $("#reset-btn").click(reset);
        $("#generate-btn").click(school_info);
    });
