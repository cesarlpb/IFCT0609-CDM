// Script para colocar en mayúsulas las palabras reservadas de SQL
function convertQuery(query){
  const sqlKeywords = [
  "ADD",
  "ADD CONSTRAINT",
  "ALL",
  "ALTER",
  "ALTER COLUMN",
  "ALTER TABLE",
  "AND",
  "ANY",
  "AS",
  "ASC",
  "BACKUP DATABASE",
  "BETWEEN",
  "CASE",
  "CHECK",
  "COLUMN",
  "CONSTRAINT",
  "CREATE",
  "CREATE DATABASE",
  "CREATE INDEX",
  "CREATE OR REPLACE VIEW",
  "CREATE TABLE",
  "CREATE PROCEDURE",
  "CREATE UNIQUE INDEX",
  "CREATE VIEW",
  "DATABASE",
  "DEFAULT",
  "DELETE",
  "DESC",
  "DISTINCT",
  "DROP",
  "DROP COLUMN",
  "DROP CONSTRAINT",
  "DROP DATABASE",
  "DROP DEFAULT",
  "DROP INDEX",
  "DROP TABLE",
  "DROP VIEW",
  "EXEC",
  "EXISTS",
  "FOREIGN KEY",
  "FROM",
  "FULL OUTER JOIN",
  "GROUP BY",
  "HAVING",
  "IN",
  "INDEX",
  "INNER JOIN",
  "INSERT INTO",
  "INSERT INTO SELECT",
  "IS NULL",
  "IS NOT NULL",
  "JOIN",
  "LEFT JOIN",
  "LIKE",
  "LIMIT",
  "NOT",
  "NOT NULL",
  "OR",
  "ORDER BY",
  "OUTER JOIN",
  "PRIMARY KEY",
  "PROCEDURE",
  "RIGHT JOIN",
  "ROWNUM",
  "SELECT",
  "SELECT DISTINCT",
  "SELECT INTO",
  "SELECT TOP",
  "SET",
  "TABLE",
  "TOP",
  "TRUNCATE TABLE",
  "UNION",
  "UNION ALL",
  "UNIQUE",
  "UPDATE",
  "VALUES",
  "VIEW",
  "WHERE"
  ]
  const mysqlKeywords = [
  "ASCII",
  "CHAR_LENGTH",
  "CHARACTER_LENGTH",
  "CONCAT",
  "CONCAT_WS",
  "FIELD",
  "FIND_IN_SET",
  "FORMAT",
  "INSERT",
  "INSTR",
  "LCASE",
  "LEFT",
  "LENGTH",
  "LOCATE",
  "LOWER",
  "LPAD",
  "LTRIM",
  "MID",
  "POSITION",
  "REPEAT",
  "REPLACE",
  "REVERSE",
  "RIGHT",
  "RPAD",
  "RTRIM",
  "SPACE",
  "STRCMP",
  "SUBSTR",
  "SUBSTRING",
  "SUBSTRING_INDEX",
  "TRIM",
  "UCASE",
  "UPPER",
  "ABS",
  "ACOS",
  "ASIN",
  "ATAN",
  "ATAN2",
  "AVG",
  "CEIL",
  "CEILING",
  "COS",
  "COT",
  "COUNT",
  "DEGREES",
  "DIV",
  "EXP",
  "FLOOR",
  "GREATEST",
  "LEAST",
  "LN",
  "LOG",
  "LOG10",
  "LOG2",
  "MAX",
  "MIN",
  "MOD",
  "PI",
  "POW",
  "POWER",
  "RADIANS",
  "RAND",
  "ROUND",
  "SIGN",
  "SIN",
  "SQRT",
  "SUM",
  "TAN",
  "TRUNCATE",
  "ADDDATE",
  "ADDTIME",
  "CURDATE",
  "CURRENT_DATE",
  "CURRENT_TIME",
  "CURRENT_TIMESTAMP",
  "CURTIME",
  "DATE",
  "DATEDIFF",
  "DATE_ADD",
  "DATE_FORMAT",
  "DATE_SUB",
  "DAY",
  "DAYNAME",
  "DAYOFMONTH",
  "DAYOFWEEK",
  "DAYOFYEAR",
  "EXTRACT",
  "FROM_DAYS",
  "HOUR",
  "LAST_DAY",
  "LOCALTIME",
  "LOCALTIMESTAMP",
  "MAKEDATE",
  "MAKETIME",
  "MICROSECOND",
  "MINUTE",
  "MONTH",
  "MONTHNAME",
  "NOW",
  "PERIOD_ADD",
  "PERIOD_DIFF",
  "QUARTER",
  "SECOND",
  "SEC_TO_TIME",
  "STR_TO_DATE",
  "SUBDATE",
  "SUBTIME",
  "SYSDATE",
  "TIME",
  "TIME_FORMAT",
  "TIME_TO_SEC",
  "TIMEDIFF",
  "TIMESTAMP",
  "TO_DAYS",
  "WEEK",
  "WEEKDAY",
  "WEEKOFYEAR",
  "YEAR",
  "YEARWEEK",
  "BIN",
  "BINARY",
  "CASE",
  "CAST",
  "COALESCE",
  "CONNECTION_ID",
  "CONV",
  "CONVERT",
  "CURRENT_USER",
  "DATABASE",
  "IF",
  "IFNULL",
  "ISNULL",
  "LAST_INSERT_ID",
  "NULLIF",
  "SESSION_USER",
  "SYSTEM_USER",
  "USER",
  "VERSION"
  ]
  String.prototype.replaceAll = function(strReplace, strWith) {
    // See http://stackoverflow.com/a/3561711/556609
    var esc = strReplace.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    var reg = new RegExp(esc, 'ig');
    return this.replace(reg, strWith);
  };
  let i = 0, j = 0, idx = 0;
  let convertedQuery = "";
  const matches = [];
  while(idx < Math.max(mysqlKeywords.length, sqlKeywords.length)){
    let kw1 = sqlKeywords[idx]
    let kw2 = mysqlKeywords[idx]
    let match1 = [], match2 = []
    const regex1 = new RegExp(kw1, "gi")
    const regex2 = new RegExp(kw2, "gi")
    if(regex1.test(query)){
      match1 = [...query.matchAll(regex1)];
    }
    if(query.includes(kw2)){
      match2 = [...query.matchAll(regex2)];
    }
    match1.map(m => {
      matches.push(m.input)
    })
    match2.map(m => {
      matches.push(m.input)
    })
    // if(kw1 && array1.length > 0){
    //   array1.map(s => {
    //     convertedQuery = query.replaceAll(s.input, kw1);
    //   })
    // }
    // if(kw2 && array2.length > 0){
    //   array2.map(s => {
    //     convertedQuery = query.replaceAll(s.input, kw2);
    //   })
    // }
    idx++
  }
  return matches
}

let q = convertQuery(`Create table If Not Exists Employees (id int, name varchar(20))
Create table If Not Exists EmployeeUNI (id int, unique_id int)
Truncate table Employees
insert into Employees (id, name) values ('1', 'Alice')
insert into Employees (id, name) values ('7', 'Bob')
insert into Employees (id, name) values ('11', 'Meir')
insert into Employees (id, name) values ('90', 'Winston')
insert into Employees (id, name) values ('3', 'Jonathan')
Truncate table EmployeeUNI
insert into EmployeeUNI (id, unique_id) values ('3', '1')
insert into EmployeeUNI (id, unique_id) values ('11', '2')
insert into EmployeeUNI (id, unique_id) values ('90', '3')`)
console.log(q)