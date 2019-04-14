let day = 10;
let month = 'December';         
function Horozod() {
       var horoscope = ''
        if ( month === 'January' ){
         switch (true) {
            case day <= 19: horoscope = 'Capricon'
               break;
            case day >= 20: horoscope = 'Aquarius'} 
         }
         else if (month === 'February' ){
         switch (true) {
            case day <= 18: horoscope = 'Aquarius'
               break;
            case day >= 19: horoscope = 'Pisces'}
         }
         else if (month === 'March' ){
          switch (true) {
             case day <= 20: horoscope = 'Pisces'
                break;
             case day >= 21: horoscope = 'Aries'}
         }
         else if (month === 'April' ){
            switch (true) {
               case day <= 19: horoscope = 'Aries'
                  break;
               case day >= 20: horoscope = 'Taurus'}
           }
           else if (month === 'May' ){
            switch (true) {
               case day <= 20: horoscope = 'Taurus'
                  break;
               case day >= 21: horoscope = 'Gemini'}
           }
           else if (month === 'June' ){
            switch (true) {
               case day <= 20: horoscope = 'Gemini'
                  break;
               case day >= 21: horoscope = 'Cancer'}
           }
           else if (month === 'July' ){
            switch (true) {
               case day <= 22: horoscope = 'Cancer'
                  break;
               case day >= 23: horoscope = 'Leo'}
           }
           else if (month === 'August' ){
            switch (true) {
               case day <= 22: horoscope = 'Leo'
                  break;
               case day >= 23: horoscope = 'Virgo'}
           }
           else if (month === 'September' ){
            switch (true) {
               case day <= 22: horoscope = 'Virgo'
                  break;
               case day >= 23: horoscope = 'Libra'}
           }
           else if (month === 'October' ){
            switch (true) {
               case day <= 22: horoscope = 'Libra'
                  break;
               case day >= 23: horoscope = 'Scorpio'}
           }
           else if (month === 'November' ){
            switch (true) {
               case day <= 21: horoscope = 'Scorpio'
                  break;
               case day >= 22: horoscope = 'Sagittarius'}
           }
           else if (month === 'December' ){
            switch (true) {
               case day <= 21: horoscope = 'Sagittarius'
                  break;
               case day >= 22: horoscope = 'Capricorn'}
           }
      else {
             return 'ERROR';};
             return horoscope
        }console.log(Horozod()) ;


    
