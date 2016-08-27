
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






