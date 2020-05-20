
function Generate_Bill() {
     
    var dosa = document.getElementById('Dosa')
    var jalebi = document.getElementById('jalebi')
    var samosa = document.getElementById('samosa')
    var pizza = document.getElementById('pizza')
     var pastry = document.getElementById('pastry')
    var gst1 = document.getElementById('gst1')
    var gst2 = document.getElementById('gst2')
     var gst3 = document.getElementById('gst3')
    var monday = document.getElementById('dis')
    var thursday = document.getElementById('thur')
     var saturday = document.getElementById('sat')
    var gstcalculation
    var discalculation
    if( dosa.checked ) {
        var dosavalue = document.getElementById('Dosa_Quant').value
    }
    else {
        dosavalue = 0
    }
    if( jalebi.checked ) {
        var jalebivalue = document.getElementById('jalebi_Quant').value
    }
    else {
        jalebivalue = 0
    }
    if( samosa.checked ) {
        var samosavalue = document.getElementById('samosa_Quant').value
    }
    else {
        samosavalue = 0
    }
    if( pizza.checked ) {
        var pizzavalue = document.getElementById('Pizza_Quant').value
    }
    else {
        pizzavalue = 0
    }
  if( pastry.checked ) {
        var pastryvalue = document.getElementById('Pastry_Quant').value
    }
    else {
        pastryvalue = 0
    }
    if( gst1.checked ) {
        gstcalculation = 0.10
    }
    else if( gst2.checked ) {
        gstcalculation = 0.15
    }
   else if( gst3.checked ) {
        gstcalculation = 0.18
    }
    else {
      gstcalculation = 0
    }
    if( dis.checked ) {
       discalculation = 50
    }
    else if( thur.checked ) {
        discalculation = 60
    }
  else if( sat.checked ) {
       discalculation = 100
    }
    else {
       discalculation= 0
    }
   
    var total_ITEM = ( dosavalue*80 + jalebivalue*35 + samosavalue*40 + pizzavalue*45 + pastryvalue*60 )
    var total_GST = total_ITEM *  gstcalculation
    var total_BILL = ( total_ITEM + total_GST ) - discalculation
    var tips=total_BILL*0.05
    var final_bill=total_BILL-tips
    var display_bill = document.getElementById('list')
var h2=document.createElement('h2')
    h2.textContent="The summary of Bill is:"
  var h4=document.createElement('h4')
    h2.textContent="The Total Item Costs are: "+"Rs"+ total_ITEM
   var h44=document.createElement('h4')
    h44.textContent="The Total GST is: "+"Rs"+ total_GST
  var h444=document.createElement('h4')
    h444.textContent="The Total discount as gift voucher is: "+"Rs"+ discalculation
   var h5=document.createElement('h4')
    h5.textContent="The Total bill amount: "+"Rs"+ total_BILL
    var h6=document.createElement('h4')
    h6.textContent="The Total tips: "+"Rs"+ tips
    var h7=document.createElement('h4')
    h7.textContent="The Total bill amount: "+"Rs"+ final_bill
  
  
  display_bill.append(h2, h44, h444, h5, h6, h7)
  
 

}

var btn = document.getElementById("invoice")
btn.addEventListener('click',Generate_Bill)