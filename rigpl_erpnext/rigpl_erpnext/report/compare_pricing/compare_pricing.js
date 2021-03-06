// Copyright (c) 2016, Rohit Industries Ltd. and contributors
// For license information, please see license.txt

frappe.query_reports["Compare Pricing"] = {
	"filters": [
		{
			"fieldname":"bm",
			"label": "Base Material",
			"fieldtype": "Link",
			"options": "Item Attribute Value",
			"reqd": 1,
			"ignore_link_validation": true,
			"get_query": function(){ return {query: "rigpl_erpnext.rigpl_erpnext.item.attribute_bm_query"}}
		},
		{
			"fieldname":"quality",
			"label": "Quality",
			"fieldtype": "Link",
			"options": "Item Attribute Value",
			"reqd": 0,
			"ignore_link_validation": true,
			"get_query": function(){ return {query: "rigpl_erpnext.rigpl_erpnext.item.attribute_quality_query"}}
		},
		{
			"fieldname":"purpose",
			"label": "Purpose",
			"fieldtype": "Link",
			"options": "Item Attribute Value",
			"reqd": 0,
			"ignore_link_validation": true,
			"get_query": function(){ return {query: "rigpl_erpnext.rigpl_erpnext.item.attribute_purpose_query"}}
		},
		{
			"fieldname":"mtm",
			"label": "Material to Machine",
			"fieldtype": "Link",
			"options": "Item Attribute Value",
			"reqd": 0,
			"ignore_link_validation": true,
			"get_query": function(){ return {query: "rigpl_erpnext.rigpl_erpnext.item.attribute_mtm_query"}}
		},
		{
			"fieldname":"tt",
			"label": "Tool Type",
			"fieldtype": "Link",
			"options": "Item Attribute Value",
			"reqd": 0,
			"ignore_link_validation": true,
			"get_query": function(){ return {query: "rigpl_erpnext.rigpl_erpnext.item.attribute_tt_query"}}
		},
		{
			"fieldname":"item",
			"label": "Item Code",
			"fieldtype": "Link",
			"options": "Item"
		},
		{
			"fieldname":"template",
			"label": "Template",
			"fieldtype": "Link",
			"options": "Item"
		},
		{
			"fieldname":"pl1",
			"label": "Base Price List",
			"fieldtype": "Link",
			"options": "Price List",
			"reqd": 1
		},
		{
			"fieldname":"pl2",
			"label": "Price List2",
			"fieldtype": "Link",
			"options": "Price List",
			"reqd": 1
		},
		{
			"fieldname":"pl3",
			"label": "Price List3",
			"fieldtype": "Link",
			"options": "Price List",
			"reqd": 1
		},
		{
			"fieldname":"is_pl",
			"label": "Is PL",
			"fieldtype": "Check"
		},
	]
}
