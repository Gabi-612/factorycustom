// frappe.ui.form.on('Stock Entry Detail', {
// 	qty: function(frm, cdt, cdn){
// 	    var d = frappe.model.get_doc(cdt, cdn);
// 	    if (d.qty){
//             if (d.t_warehouse == "Finished Goods - DE"){
//                 frm.set_value(10, d.qty)
//             }
// 	    }
// 	}
// })

// frappe.ui.form.on('Stock Entry', {
// 	refresh(frm) {
		
// 		frappe.msgprint("Hello Gabishi")

// 	}
// })

frappe.ui.form.off("Stock Entry", "fg_completed_qty");

frappe.ui.form.on('Stock Entry', {
	fg_completed_qty: function(frm) {
		
		frappe.msgprint("Hello Gabishi")

	}
});