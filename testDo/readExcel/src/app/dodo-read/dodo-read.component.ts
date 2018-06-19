import { Component, OnInit } from '@angular/core';

import * as ku from 'xlsx';

@Component({
  selector: 'app-dodo-read',
  templateUrl: './dodo-read.component.html',
  styleUrls: ['./dodo-read.component.css']
})
export class DodoReadComponent implements OnInit {

  public xlsxData ;

  public headers ;

  constructor() {}

  public data ;

  ngOnInit() {
    this.xlsxData = new Array<any>();
    this.headers = new Array<string>();
    this.data = new Array<any>();
  }


  fileChange(event) {
    this.oldFileChange(event);
    // this.onFileChange(event);
  }

  /**
   * 可以读取 header， 所有 cell
   * @param event
   */
  oldFileChange(event){
    // 拿到target的文件
    const fileList: FileList = event.target.files;
    // 文件不为空
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const arrayBuffer = reader.result;    //  arrayBuffer 所有结果
        const data = new Uint8Array(arrayBuffer);   //  data  数据
        const arr = new Array();                    //  arr   数组，用于接收 data数据
        for (let i = 0; i !== data.length; ++i) {
          arr[i] = String.fromCharCode(data[i]);
        }
        // let bstr = arr.join('');
        //  workbook  整个excel， 是 ku read二级制后，得到
        const workbook: ku.WorkBook = ku.read(arr.join(''), {type: 'binary'});
        const firstSheetName: string = workbook.SheetNames[0];  //  firstSheetName  不知道名字， 获取第一页的名字，为了获取第一页内容
        const worksheet: ku.WorkSheet = workbook.Sheets[firstSheetName];  //worksheet 第一页excel
        this.setXlsxData(ku.utils.sheet_to_json(worksheet));  //  自定义方法：  读取第一页
      };
      reader.readAsArrayBuffer(file);
    }
  }

  /**
   * 读取第一页
   *    header    头
   *    data      所有数据
   * @param {Array<any>} data
   */
  setXlsxData(data: Array<any>) {
    this.headers = Object.keys(data[0]);
    this.xlsxData = data;
  }

  /**
   * 暂时有问题， 代码没有联系起来
   * @param evt
   */
  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: ku.WorkBook = ku.read(bstr, {type: 'binary'});

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: ku.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = ku.utils.sheet_to_json(ws, {header: 1});
    };
    reader.readAsBinaryString(target.files[0]);
  }


  readFileCell(event){
    // 拿到target的文件
    const fileList: FileList = event.target.files;
    // 文件不为空
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const arrayBuffer = reader.result;    //  arrayBuffer 所有结果
        const data = new Uint8Array(arrayBuffer);   //  data  数据
        const arr = new Array();                    //  arr   数组，用于接收 data数据
        for (let i = 0; i !== data.length; ++i) {
          arr[i] = String.fromCharCode(data[i]);
        }
        // let bstr = arr.join('');
        //  workbook  整个excel， 是 ku read二级制后，得到
        const workbook: ku.WorkBook = ku.read(arr.join(''), {type: 'binary'});
        const firstSheetName: string = workbook.SheetNames[0];  //  firstSheetName  不知道名字， 获取第一页的名字，为了获取第一页内容
        const worksheet: ku.WorkSheet = workbook.Sheets[firstSheetName];  //worksheet 第一页excel
        this.setXlsxData(ku.utils.sheet_to_json(worksheet));  //  自定义方法：  读取第一页
      };
      reader.readAsArrayBuffer(file);
    }
  }




  readSpecificCell(workbook: any){
    var first_sheet_name = workbook.SheetNames[0];
    var address_of_cell = 'A1';
    /* Get worksheet */
    var worksheet = workbook.Sheets[first_sheet_name];
    /* Find desired cell */
    var desired_cell = worksheet[address_of_cell];
    /* Get the value */
    var desired_value = (desired_cell ? desired_cell.v : undefined);
    return desired_value;
  }


}
