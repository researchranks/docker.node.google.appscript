// 08-24-2016

function onOpen() {
    var ui = SpreadsheetApp.getUi();
      ui.createMenu('__Dashboard_Options__')
      .addSubMenu(
          ui.createMenu('Show')
          .addItem('Show: All', 'status_show_all')
          .addItem('Show: Complete', 'show_complete')
          .addItem('Show: Done', 'show_done')
          .addItem('Show: Reference', 'show_reference')
          .addItem('Show: Todo Read', 'show_todo_read')
        )
      .addSeparator()
      .addSubMenu(
          ui.createMenu('Hide')
          .addItem('Hide: All', 'status_hide_all')
          .addItem('hide: Complete', 'hide_complete')
          .addItem('hide: Done', 'hide_done')
          .addItem('hide: Reference', 'hide_reference')
          .addItem('hide: Todo Read', 'hide_todo_read')
        )
      .addToUi();
}



function status_hide_all(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("dashboard");
  var maxRows = sheet.getMaxRows();

  sheet.hideRows(1,sheet.getLastRow());
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

function onEdit(event){
  //check_status();
  check_active_record();

  var activeSheet = event.source.getActiveSheet();
  var active_range = event
  .source
  .getActiveSheet()
  .getActiveRange();

  var status = get_range('data_entry','K2').getValue();


    if(status == 'add'){
      get_range('data_entry','B12').setValue( 'adding to database' );
    }else if(status == 'remove'){
      get_range('data_entry','B12').setValue( 'removing from database' );
    };

    get_range('data_entry','K2').setValue( null );


}

function check_active_record(){

  var url_value = get_value('data_entry','A2');
  var url_id = 0;

  var sheet_values = get_sheet_values('url_data');



  var match_status = 'no';

  for(var i=0; i < sheet_values.length; ++i){

    if( sheet_values[i][1] == url_value ){
      match_status = 'yes';
      url_id = sheet_values[i][0];
    }

  }



  if( url_value.length < 1 ){
    match_status = null;
  }

  if( url_id > 0){


    get_range('data_entry','G2').setValue( get_tags(url_id).join() );

  }

   get_range('data_entry','J2').setValue( match_status );

}






function check_status(){

  var status = get_value('data_entry','K2');
  if(status == 'add'){
    return 'add to database';
  }
  else if(status == 'remove'){
    return 'remove from database';
  };



}



function custom_data(){
  return 'some custom data'
}



function get_range(sheet_name,sheet_range){

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(sheet_name);
  var sheet_range = sheet.getRange(sheet_range);

  return sheet_range;

};

function get_value(sheet_name,sheet_range){

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(sheet_name);
  var sheet_range = sheet.getRange(sheet_range);
  var sheet_range_value = sheet_range.getValue();

  return sheet_range_value;

}


function get_sheet_values(sheet_name){

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(sheet_name);
  var sheet_data = sheet.getDataRange().getValues();

  return sheet_data;

}






function someFunction(){
    return 1;
}function hide_complete(){
    hide_status('complete');
}

function hide_reference(){
    hide_status('reference');
}

function hide_todo_read(){
    hide_status('todo: read');
}

function hide_done(){
    hide_status('done');
}

function hide_complete(){
    hide_status('complete');
}


function  show_complete(){
    show_status('complete');
}

function show_reference(){
    show_status('reference');
}

function show_todo_read(){
    show_status('todo: read');
}

function show_done(){
    show_status('done');
}

function show_complete(){
    show_status('complete');
}
