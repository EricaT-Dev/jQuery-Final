$(document).ready(function(){
    //calculate price of tickets(User interaction)
    $('#calc').click(function() {
        var childTks= $('#numCh').val();
        var adultTks= $('#numAd').val();
        if(childTks && !adultTks){
            adultTks=0;
            console.log(childTks);
            console.log(adultTks);
            var chTotal = parseInt(childTks) * 5;
            var adTotal = parseInt(adultTks) * 15;

            var finalTotal = chTotal + adTotal;
            $('#calcRes').text(finalTotal);
        }else if(!childTks && adultTks){
            childTks=0;
            console.log(childTks);
            console.log(adultTks);
            var chTotal = parseInt(childTks) * 5;
            var adTotal = parseInt(adultTks) * 15;

            var finalTotal = chTotal + adTotal;
            $('#calcRes').text(finalTotal);
        }else if(childTks && adultTks){
            console.log(childTks);
            console.log(adultTks);
            var chTotal = parseInt(childTks) * 5;
            var adTotal = parseInt(adultTks) * 15;

            var finalTotal = chTotal + adTotal;
            $('#calcRes').text(finalTotal);
        }else{
        $('#calcRes').text("Enter a Number for each Input Please");
        }
    });
    //select the week you would like to view movies for(User interaction)
    $('#dateSelect').change(function() {
        var selected= $('#dateSelect').val();
        var frstMV= $('#mv1');
        var scndMV= $('#mv2');
        if(selected=="thisWeek"){
            $(frstMV).attr('src','assets/Smile 2 IMG.jpg');

            $(scndMV).attr('src','assets/Venom 3 IMG.jpg');

        }else if(selected=="nextWeek"){
            $(frstMV).attr('src','assets/Anora IMG.jpg');

            $(scndMV).attr('src','assets/Gladiator 2 IMG.jpg');
        }
    });
    //click to get description of movie(User interaction)
    $('#mv1').click(function() {
        console.log($(this).attr('src'));
        var imgSrc=$(this).attr('src');
        $('.overlay').css('display','block');
        //animate description on click(User-initiated animation)
        $('#desc').animate({opacity:1},800);
        if (imgSrc=='assets/Smile 2 IMG.jpg'){
            $('#title').text("Smile 2");
            $('#info').text("About to embark on a new world tour, global pop sensation Skye Riley (Naomi Scott) begins experiencing increasingly terrifying and inexplicable events. Overwhelmed by the escalating horrors and the pressures of fame, Skye is forced to face her dark past to regain control of her life before it spirals out of control.");
            $('#showTime').text("Plays Friday(11/29) and Saturday(11/30) Starting at 8:00pm");
        }else if(imgSrc=='assets/Anora IMG.jpg'){
            $('#title').text("Anora");
            $('#info').text("Anora, a sex worker from Brooklyn, gets her chance at a Cinderella story when she meets and marries the son of an oligarch. Once the news reaches Russia, her fairytale is threatened as the parents set out for New York to get the marriage annulled.");
            $('#showTime').text("Plays Friday(12/6) and Saturday(12/7) Starting at 8:00pm");
        }
    });
    $('#mv2').click(function() {
        console.log($(this).attr('src'));
        var imgSrc=$(this).attr('src');
        $('.overlay').css('display','block',);
        //animate description on click(User-initiated animation)
        $('#desc').animate({opacity:1},800);
        if (imgSrc=='assets/Venom 3 IMG.jpg'){
            $('#title').text("Venom: The Last Dance");
            $('#info').text("In Venom: The Last Dance, Tom Hardy returns as Venom, one of Marvel’s greatest and most complex characters, for the final film in the trilogy. Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.");
            $('#showTime').text("Plays Friday(11/29) and Saturday(11/30) Starting at 10:30pm");
        }else if(imgSrc=='assets/Gladiator 2 IMG.jpg'){
            $('#title').text("Gladiator II");
            $('#info').text("From legendary director Ridley Scott, Gladiator II continues the epic saga of power, intrigue, and vengeance set in Ancient Rome. Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius (Paul Mescal) is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.");
            $('#showTime').text("Plays Friday(12/6) and Saturday(12/7) Starting at 10:30pm");
        }
    });
    //close description overlay on click(User interaction)
    $("#closeOverlay").click(function(){
        $('#desc').css('opacity','0')    
        $('.overlay').css('display','none');
    });
    //add scroll animation when click on nav elements(User-initiated animation)
    $('#scrollToMovies').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:$('#select-date').offset().top},500);
    });
    $('#scrollToPrices').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:$('#prices').offset().top},500);
    });
    $('#scrollToCalcPrices').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:$('#calculateCost').offset().top},500);
    });
    //add scroll animation back to top when click footer element(User-initiated animation)
    $('#scrollToTop').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:0},300);
    });
    //add animation to indicate images are clickable(User-initiated animation)
    $('#mv1').mouseover(function() {
        $(this).animate({'width':'105%'},300);
    })
    $('#mv1').mouseout(function() {
        $(this).animate({'width':'100%'},300);
    })
    $('#mv2').mouseover(function() {
        $(this).animate({'width':'105%'},300);
    })
    $('#mv2').mouseout(function() {
        $(this).animate({'width':'100%'},300);
    })
});
