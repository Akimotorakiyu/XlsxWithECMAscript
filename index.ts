import * as XLSX from "xlsx";

// 创建一个新的表格
// let 新表格 = XLSX.utils.book_new();
// 将一块数组作为表格
// let workbook = XLSX.read(data, { type: "array" });
// 读取一个已经存在的工作薄
let 表格 = XLSX.readFile("./example.xlsx");

// 打印一些基础信息
console.log(表格.SheetNames);
console.log(表格.Sheets);
console.log(表格.Props.Application);
console.log(表格.Props.AppVersion);
console.log(表格.Props.ModifiedDate);
console.log(表格.Props.Worksheets);
