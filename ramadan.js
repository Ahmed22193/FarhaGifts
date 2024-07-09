newbox0 = {
  CONSTANT_Word:"بوكس 3 درج",
  image:"box0.jpg",
  product_descreption:"بوكس / ورود / شوكلاتات / دبدوب / برفان / ساعة / كارت معايده لو هتحط عيديه / اسم وجملة جميلة لحبيبك / صورتين تزيين البوكس",
  Admin_price:1600
} 

newbox1 = {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox2 = {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox3 = {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox4 = {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox5 = {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox6 = {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox7 = {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox8 = {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox9 = {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox10 = {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox11= {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox12= {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox13= {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox14 = {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox15 = {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox16 = {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox17 = {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox18 = {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox19 = {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox20 = {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox21 = {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox22 = {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox23 = {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

newbox24 = {
  CONSTANT_Word:"",
  image:"",
  product_descreption:"",
  Admin_price:0
} 

DataBase3=[
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






/* ------------- clear function -------- */
function cleardata(){
    image.value='';
    product_descreption.value='';
    Admin_price.value='';
}

/* ---------- show data in data base 3 --------- */
function showdata3(){
    let content_BOX3 ='';
    for(let i=0;i<DataBase3.length;i++){
      content_BOX3+=`
      <div class="farha-boxes">
          <p class="index" style="background-color: rgba(0, 0, 0, 0.339);color:black;padding:3px 20px ;border:2px black solid;border-radius: 2px;cursor: default;">${i}</p>
          <h2>${DataBase3[i].CONSTANT_Word}</h2>
          <img src="${DataBase3[i].image}" alt="">
          <p>${DataBase3[i].product_descreption}</p>
          <button onclick="Form_List3(${i})" class="buy-btn" id="ADHA-buy-btn-1">${DataBase3[i].Admin_price} LE</button>
       </div>
      `
    }
    document.getElementById("BOX3").innerHTML = content_BOX3;
}
showdata3();
  

function Form_List3(i) {
  // جمع البيانات المطلوبة من مصفوفة (DataBase1)
  const selectedData = {
    CONSTANT_Word: DataBase3[i].CONSTANT_Word,
    Admin_price: DataBase3[i].Admin_price,
    Num_of_box_:i
    // قم بإضافة المزيد من البيانات إذا كان هناك مزيد
  };

  // تحويل البيانات إلى سلسلة نصية وتركيبها في عنوان URL
  const queryString = new URLSearchParams(selectedData).toString();

  // توجيه المستخدم إلى الصفحة الأخرى مع تضمين البيانات في العنوان URL
  window.location.href = `formList.html?${queryString}`;
}
