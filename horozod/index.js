var form = document.getElementById("form-work"),horoscopeo = document.getElementById("horo")

function Horozod(e) {
   e.preventDefault();
   function Horozod2() {
      var day = document.getElementById("dateInput").value, month =document.getElementById("monthInput").value;  
      if (month === 'January' && day<=19 && day>0){
         return 'Capricorn';
     }else if (month === 'January' && day>=20 && day<=31 ){
         return 'Aquarius';
     }else if (month === 'February' && day<=18 && day>0){
         return 'Aquarius';
      }else if (month === 'February' && day>=19 && day<=29){
         return 'Pisces';
      }else if (month === 'March' && day<=20 && day>0){
         return 'Pisces';
      }else if (month === 'March' && day>=21 && day<=31 ){
         return 'Aries';
      }else if (month ==='April' && day<=19 && day>0){
         return 'Aries';
      }else if (month === 'April' && day>=20 && day<=30){
         return 'Taurus';
      }else if (month === 'May' && day<=20 && day>0){
         return 'Taurus';
      }else if (month === 'May' && day>=21 && day<=31){
         return 'Gemini';
      }else if (month === 'June' && day<=20&& day>0){
         return 'Gemini';
      }else if (month === 'June' && day>=21 && day<=30){
         return 'Cancer';
      }else if (month === 'July' && day<=22 && day>0){
         return 'Cancer';
      }else if (month === 'July' && day>=23 && day<=31){
         return 'Leo';
      }else if (month === 'August' && day<=22 && day>0){
         return 'Leo';
      }else if (month === 'August' && day>=23 && day<=31){
         return 'Virgo';
      }else if (month === 'September' && day<=22 && day>0){
         return 'Virgo';
      }else if (month === 'September' && day>=23 && day<=30){
         return 'Libra';
      }else if (month === 'October' && day<=22 && day>0  ){
         return 'Libra';
      }else if (month === 'October' && day>=23 && day<=31){
         return 'Scorpio';
      }else if (month === 'November' && day<=21 && day>0){
         return 'Scorpio';
      }else if (month === 'November' && day>=22 && day<=30){
         return 'Sagittarius';
      }else if (month === 'December' && day<=21 && day>0){
         return 'Sagittarius';
      }else if(month === 'December' && day>=22 && day<=31 ){
         return 'Capricorn';
      }else {
          return 'ERROR';};
   }
   var horoscope =  Horozod2(),Lesurname = document.getElementById("theSurname").value, Lefirstname = document.getElementById("theFirstName").value;
   horoscopeo.innerText = Lesurname +" " + Lefirstname+": "+ horoscope ;
   return horoscope
}
window.onload = function(){
   form.addEventListener('submit', Horozod)
}