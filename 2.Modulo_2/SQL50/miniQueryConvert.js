function miniQueryConvert(query){
  const kws = [
    "Create table If Not Exists",
    "float",
    "insert into",
    "int",
    "Truncate table",
    "values",
    "varchar",
    "date"
  ]
  let convertedQuery = "";
  convertedQuery = query.replaceAll("\n", ";\n")
  for(kw of kws){
    convertedQuery = convertedQuery.replaceAll(kw, kw.toUpperCase())
  }
  return convertedQuery
}
let q = miniQueryConvert(`
Create table If Not Exists Activity (player_id int, device_id int, event_date date, games_played int)
Truncate table Activity
insert into Activity (player_id, device_id, event_date, games_played) values ('1', '2', '2016-03-01', '5')
insert into Activity (player_id, device_id, event_date, games_played) values ('1', '2', '2016-03-02', '6')
insert into Activity (player_id, device_id, event_date, games_played) values ('2', '3', '2017-06-25', '1')
insert into Activity (player_id, device_id, event_date, games_played) values ('3', '1', '2016-03-02', '0')
insert into Activity (player_id, device_id, event_date, games_played) values ('3', '4', '2018-07-03', '5')
`)
console.log(q)