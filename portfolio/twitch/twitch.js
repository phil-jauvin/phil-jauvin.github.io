$("document").ready(function(){

    // We will iterate through this array of channels.
    channels  = ["freecodecamp","test_channel","medrybw"];

    update = function(){

      // Since getStream() uses the "example" div to add streams,
      // we need to clone it and add it after we empty the "streams" div.
      var placeholder = $("#example").clone();
      $("#streams").empty();
      placeholder.appendTo("#streams");

      getStream();

    }

    // Page will refresh when the button with ID updater is clicked.
    $("#update-button").on("click",update);


    // This function takes care of form data once we submit it.
    $("form").on("submit",function(event){

      // REMINDER: For serialize() to work form must have a name.

      event.preventDefault(); // This prevents page refresh.

      // Extract the channel name from the form.
      var streamer = $(this).serialize().split("=")[1];

      // If the channel is already in the array, alert the user.
      if(channels.indexOf(streamer) != -1){
        alert(streamer+" is already in your list");
        return 1;
      }

      channels.push(streamer.toLowerCase());

      update();

    });

    // This function loads the streams into the DOM.
    function getStream(){

      channels.forEach(function(channel){

        // Making sure the channel is a string.
        channel = String(channel).toLowerCase();

        $.getJSON("https://api.twitch.tv/kraken/streams/"+channel+".json",function(json){

          var html = "";

          // Streamer isn't online.
          if(json.stream == null){
            html += "<div class='well'>";
            html += channel + " is not online";
          }

          // Streamer is online.
          else{

            html += "<div class='well' style='background:lightgreen;'>";
            html += channel + " is online and streaming "+String(json.stream.game);

            html += "<a style='float:right;' href="+json.stream.channel.url+"><i class='fa fa-desktop fa-2x'></i></a>";

          }

          // Add the stream to the DOM.

          /*
            This is the script in the onclick below - channels and update are global so they can be used here.

              var getrid = ($(this).get(0).id);
              delete channels[channels.indexOf(getrid)];

              update();
          */

          html += "<i style='float:right;margin-right:20px;' id='"+channel+"' onclick='var getrid = ($(this).get(0).id);delete channels[channels.indexOf(getrid)];update()' class='fa fa-ban fa-2x'></i></div>"
          $("#example").clone().html(html).appendTo("#streams");

        });

      });

    }

    getStream();

});
