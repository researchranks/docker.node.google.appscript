// 08-24-2016

function onOpen() {
    var ui = SpreadsheetApp.getUi();
      ui.createMenu('updated from node -__DashBoard_Options__')
      .addSubMenu(
          ui.createMenu('Show')
          .addItem('Show: All', 'Dashboard.status_show_all')
          .addItem('Show: Complete', 'Dashboard.show_complete')
          .addItem('Show: Done', 'Dashboard.show_done')
          .addItem('Show: Reference', 'Dashboard.show_reference')
          .addItem('Show: Todo Read', 'Dashboard.show_todo_read')
        )
      .addSeparator()
      .addSubMenu(
          ui.createMenu('Hide')
          .addItem('Hide: All', 'Dashboard.status_hide_all')
          .addItem('hide: Complete', 'Dashboard.hide_complete')
          .addItem('hide: Done', 'Dashboard.hide_done')
          .addItem('hide: Reference', 'Dashboard.hide_reference')
          .addItem('hide: Todo Read', 'Dashboard.hide_todo_read')
        )
      .addToUi();
}



function status_hide_all(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("dashboard");
  var maxRows = sheet.getMaxRows();

  sheet.hideRows(2,sheet.getLastRow());
}




function status_show_all(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("dashboard");
  var maxRows = sheet.getMaxRows();

  sheet.showRows(1,sheet.getLastRow());
}





function show_status(data_value){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("dashboard");
  var maxRows = sheet.getMaxRows();
  var data = sheet.getRange('C:C').getValues();

  //iterate over all rows
  for(var i=0; i< data.length; i++){
    //compare first character, if asterisk, then hide row
    if(data[i] == data_value){
      sheet.showRows(i+1);
    }
  }
}




function hide_status(data_value){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("dashboard");
  var maxRows = sheet.getMaxRows();
  var data = sheet.getRange('C:C').getValues();

  //iterate over all rows
  for(var i=0; i< data.length; i++){
    //compare first character, if asterisk, then hide row
    if(data[i] == data_value){
      sheet.hideRows(i+1);
    }
  }
}
