function setComplexTable(view) {
	var i;
	var columns = Number(view.layout.columns) / 2;
	
	for (i=0; i<columns; i++) {
		$('#'+view.id + ' .x-table-layout tbody:first').before('<col class="table-layout-label"><col>');
	}
}
