


$("#add-btn").click(function(event) {
    event.preventDefault();
    let input = [$("#name").val().trim(), parseInt($("#phone").val().trim()), parseInt($("#uniqueID").val().trim()), $("#email").val().trim() ];

    $.post("/tables", input)
      .then(function(data) {
        console.log("tabels.html", data);
        alert("Making Reservation...");
      });
  });
