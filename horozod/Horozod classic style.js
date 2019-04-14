let day = 20;
let month = 'September';;         
function Horozod() {
        if (month === 'January' && day<=19 ){
            return 'Capricorn';
        }else if (month === 'January' && day>=20 ){
            return 'Aquarius';
        }else if (month === 'February' && day<=18 ){
            return 'Aquarius';
         }else if (month === 'February' && day>=19 ){
            return 'Pisces';
         }else if (month === 'March' && day<=20 ){
            return 'Pisces';
         }else if (month === 'March' && day>=21 ){
            return 'Aries';
         }else if (month ==='April' && day<=19 ){
            return 'Aries';
         }else if (month === 'April' && day>=20 ){
            return 'Taurus';
         }else if (month === 'May' && day<=20 ){
            return 'Taurus';
         }else if (month === 'May' && day>=21 ){
            return 'Gemini';
         }else if (month === 'June' && day<=20){
            return 'Gemini';
         }else if (month === 'June' && day>=21 ){
            return 'Cancer';
         }else if (month === 'July' && day<=22 ){
            return 'Cancer';
         }else if (month === 'July' && day>=23 ){
            return 'Leo';
         }else if (month === 'August' && day<=22 ){
            return 'Leo';
         }else if (month === 'August' && day>=23 ){
            return 'Virgo';
         }else if (month === 'September' && day<=22 ){
            return 'Virgo';
         }else if (month === 'September' && day>=23 ){
            return 'Libra';
         }else if (month === 'October' && day<=22 ){
            return 'Libra';
         }else if (month === 'October' && day>=23 ){
            return 'Scorpio';
         }else if (month === 'November' && day<=21 ){
            return 'Scorpio';
         }else if (month === 'November' && day>=22 ){
            return 'Sagittarius';
         }else if (month === 'December' && day<=21 ){
            return 'Sagittarius';
         }else if(month === 'December' && day>=22 ){
            return 'Capricorn';
         }else {
             return 'ERROR';};
    }console.log(Horozod()) ;