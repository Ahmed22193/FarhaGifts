
newbox0 = {
  CONSTANT_Word:"بوكس 3 درج",
  image:"box0.jpg",
  product_descreption:"بوكس / ورود / شوكلاتات / دبدوب / برفان / ساعة / كارت معايده لو هتحط عيديه / اسم وجملة جميلة لحبيبك / صورتين تزيين البوكس",
  Admin_price:1600
} 

newbox1 = {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox2 = {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox3 = {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox4 = {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox5 = {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox6 = {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox7 = {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox8 = {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox9 = {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox10 = {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox11= {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox12= {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox13= {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox14 = {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox15 = {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox16 = {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox17 = {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox18 = {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox19 = {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox20 = {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox21 = {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox22 = {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox23 = {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

newbox24 = {
  CONSTANT_Word:"",
  image:"box0.jpg",
  product_descreption:"",
  Admin_price:0
} 

DataBase4=[
  newbox0,
  newbox1,
  newbox2,
  newbox3,
  newbox4,
  newbox5,
  newbox6,
  newbox7,
  newbox8,
  newbox9,
  newbox10,
  newbox11,
  newbox12,
  newbox13,
  newbox14,
  newbox15,
  newbox16,
  newbox17,
  newbox18,
  newbox19,
  newbox20,
  newbox21,
  newbox22,
  newbox23,
  newbox24,
];



/* 
function Add_product(){
    if(Selection_Box.value == "bearthday_marr"){
      var message = "هل أنت متأكد من أنك تريد المتابعة؟";
      var result = confirm(message);
      if(result){
        alert("تم الموافقة!");
        if(image.value !='' && product_descreption.value !='' && Admin_price.value!=''){
          let newbox4 = {
            CONSTANT_Word:CONSTANT_Word.value,
            image:image.value,
            product_descreption:product_descreption.value,
            Admin_price:Admin_price.value
          }    
          if(mood==='creat'){
            DataBase4.push(newbox4); // add the object in the array
            localStorage.setItem('product4', JSON.stringify(DataBase4)); // add the array in the local storage
          }
          else if(mood==='update'){   // to update
            DataBase4[temp]=newbox4;
            localStorage.product4 = JSON.stringify(DataBase4);
            mood = 'creat';
          } 
          cleardata();   
        }
        else{
          alert("برجاء ملئ جميع البيانات اولا");
        }
        showdata4();
      }
      else {
        // تنفيذ الإجراء عند النقر على "إلغاء"
        alert("تم الإلغاء!");
      } 
    }
    else{
      alert("هناك خطأ ما حدث");
  }
    cleardata();
}
 */



/* ------------- clear function -------- */
function cleardata(){
  image.value='';
  product_descreption.value='';
  Admin_price.value='';
}

/* ---------- show data in data base 4 --------- */

function showdata4(){
    let content_BOX4 ='';
    for(let i=0;i<DataBase4.length;i++){
      content_BOX4+=`
      <div class="farha-boxes">
          <p class="index" style="background-color: rgba(0, 0, 0, 0.339);color:black;padding:3px 20px ;border:2px black solid;border-radius: 2px;cursor: default;">${i}</p>
          <h2>${DataBase4[i].CONSTANT_Word}</h2>
          <img src="${DataBase4[i].image}" alt="">
          <p>${DataBase4[i].product_descreption}</p>
          <button onclick="Form_List4(${i})" class="buy-btn" id="ADHA-buy-btn-1">${DataBase4[i].Admin_price} LE</button>
       </div>
      `
    }
    document.getElementById("BOX4").innerHTML = content_BOX4;
  }
  showdata4();



  
/* ---------- form list ------- */
function Form_List4(i) {
  // جمع البيانات المطلوبة من مصفوفة (DataBase1)
  const selectedData = {
    CONSTANT_Word: DataBase4[i].CONSTANT_Word,
    Admin_price: DataBase4[i].Admin_price,
    Num_of_box_:i
    // قم بإضافة المزيد من البيانات إذا كان هناك مزيد
  };

  // تحويل البيانات إلى سلسلة نصية وتركيبها في عنوان URL
  const queryString = new URLSearchParams(selectedData).toString();

  // توجيه المستخدم إلى الصفحة الأخرى مع تضمين البيانات في العنوان URL
  window.location.href = `formList.html?${queryString}`;
}
