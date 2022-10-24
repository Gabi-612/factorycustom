frappe.ui.form.on('Stock Entry Detail', {
	qty: function(frm, cdt, cdn){
	    var d = frappe.model.get_doc(cdt, cdn);
	    if (d.qty){
            if (d.t_warehouse == "Finished Goods - DE"){
                frm.set_value("fg_completed_qty", d.qty)
            }
	    }
	}
})


// frappe.ui.form.on('Stock Entry', {

// 	before_submit(frm, cdt, cdn) {
  
// 	  if (!frm.attachments.get_attachments().length) {
  
// 		//frappe.throw('You should have atleast one document in attachments');
  
// 		frappe.msgprint('You should have atleast one document in attachments!')
  
// 		frappe.validated = false
  
// 		return false;
  
// 	  }
  
// 	},
// })  