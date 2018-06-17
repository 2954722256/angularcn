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

  ngOnInit() {
    this.xlsxData = new Array<any>();
    this.headers = new Array<string>();
  }


  fileChange(event) {
    // 拿到target的文件
    const fileList: FileList = event.target.files;
    // 文件不为空
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const arrayBuffer = reader.result;
        const data = new Uint8Array(arrayBuffer);
        const arr = new Array();
        for (let i = 0; i !== data.length; ++i) {
          arr[i] = String.fromCharCode(data[i]);
        }
        // let bstr = arr.join('');

        const workbook: ku.WorkBook = ku.read(arr.join(''), {type: 'binary'});
        const firstSheetName: string = workbook.SheetNames[0];
        const worksheet: ku.WorkSheet = workbook.Sheets[firstSheetName];
        this.setXlsxData(ku.utils.sheet_to_json(worksheet));
      };
      reader.readAsArrayBuffer(file);
    }
  }

  setXlsxData(data: Array<any>) {
    this.headers = Object.keys(data[0]);
    this.xlsxData = data;
  }


}
