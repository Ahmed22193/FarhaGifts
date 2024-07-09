let BOX1=document.getElementById('BOX1');
let BOX2=document.getElementById('BOX2');
let BOX3=document.getElementById('BOX3');
let BOX4=document.getElementById('BOX4');
let BOX5=document.getElementById('BOX5');
let BOX6=document.getElementById('BOX6');
 /* ----------------------- */
let formlist1 = document.getElementById('formlist1');
/* ------------------------------------------------------- */
let main_div_Box = document.getElementById('main_div_Box');
let BOX = document.getElementById('BOX');
let H2 = document.getElementById('H2');
let IMGG = document.getElementById('IMG');
let UL = document.getElementById('UL');
/*--------------- Admin Area ---------------------*/
let Selection_Box = document.getElementById('Selection_Box');
let CONSTANT_Word = document.getElementById('CONSTANT_Word');/* h2 = محتويات البوكس */
let image = document.getElementById('image');
let product_descreption = document.getElementById('product_descreption');
let Admin_price = document.getElementById('Admin_price');
let submit_Add_product = document.getElementById('submit_Add_product');
/* --------------- delete ------------------- */
let Selection_Box2 = document.getElementById('Selection_Box2');
let delet_box_numX = document.getElementById('delet_box_numX');
/* form list */
let Box_Section_ = document.getElementById('Box_Section');
let Num_of_box__ = document.getElementById('Num_of_box_');
let price_box_ = document.getElementById('price_box');
function cleardata(){
  image.value='';
  product_descreption.value='';
  Admin_price.value='';
}

function BUY_BOX(){
  var UserName = document.getElementById('username').value;
  var telephone = document.getElementById('tel_num').value;
  var How_m_boxes = document.getElementById('How_m_boxes').value;
  var address = document.getElementById('ADress').value;
  var Box_Section = document.getElementById('Box_Section').value;
  var Num_of_box_ = document.getElementById('Num_of_box_').value;
  var price_box = document.getElementById('price_box').value;
  
  var WhatsAppURL = "https://wa.me/201068598532?text=" +
  encodeURIComponent(
    "اسم العميل: " + UserName + "\n" +
    "رقم الهاتف: " + telephone + "\n" +
    "عدد البوكسات المطلوبة: " + How_m_boxes + "\n" +
    "عنوان العميل: " + address + "\n" +
    "قسم البوكس: " + Box_Section + "\n" +
    "رقم البوكس المطلوب: " + Num_of_box_ + "\n" +
    "سعر البوكس الواحد: " + price_box
  );
window.open(WhatsAppURL, "_blank").focus();
}


// استقبال البيانات من عنوان URL
const urlParams = new URLSearchParams(window.location.search);
const constantWord = urlParams.get('CONSTANT_Word');
const adminPrice = urlParams.get('Admin_price');
const Num_of_box_ = urlParams.get('Num_of_box_')
// قم بمعالجة المزيد من البيانات إذا كان هناك مزيد

// تخزين البيانات في الـ input المطلوب
document.getElementById('Box_Section').value = constantWord;
document.getElementById('price_box').value = adminPrice;
document.getElementById('Num_of_box_').value=Num_of_box_;
// قم بتعيين البيانات للعناصر الأخرى إذا كان هناك مزيد
