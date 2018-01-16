import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ag-grid',
  template: `
    <div style="">
        <button (click)="onAddRow()">Add Row</button>
        <button (click)="onInsertRowAt2()">Insert Row @ 2</button>
        <button (click)="updateItems()">Update First 5</button>
        <button (click)="onRemoveSelected()">Remove Selected</button>
        <button (click)="getRowData()">Get Row Data</button>
        <button (click)="clearData()">Clear Data</button>
        <button (click)="addItems()">Add Items</button>
        <button (click)="addItemsAtIndex()">Add Items @ 2</button>
    </div>
    <div style="height: 500px; box-sizing: border-box;">
        <ag-grid-angular
        #agGrid
        style="width: 100%; height: 100%;"
        id="myGrid"
        class="ag-fresh"
        [columnDefs]="columnDefs"
        [enableColResize]="true"
        [rowData]="rowData"
        [animateRows]="true"
        [rowSelection]="rowSelection"
        [pinnedBottomRowData]="pinnedBottomRowData"
        [navigateToNextCell]="navigateToNextCell"
        (gridReady)="onGridReady($event)"
        ></ag-grid-angular>
    </div>`
})
export class AgGridDemoComponent {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private rowData;
  private rowSelection;
  private pinnedBottomRowData;
  private navigateToNextCell;
  constructor() {
    this.columnDefs = [
      {
        headerName: '商品名称',
        field: "make",
        editable: true
      },
      {
        headerName: "数量",
        field: "sl",
        editable: true
      },
      {
        headerName: "单价",
        field: "price",
        editable: true
      },
      {
        headerName: "金额",
        field: "je",
        aggFunc: "sum",
        valueGetter: "data.sl * data.price",
      },
      {
        headerName: "Style",
        field: "style"
      },
      {
        headerName: "Clothes",
        field: "clothes"
      }
    ];
    this.rowData = [
      {
        make: "Toyota",
        sl: 1,
        price: 35000,
        je: 35000,
        style: "Smooth",
        clothes: "Jeans"
      },
      {
        make: "Ford",
        sl: 1,
        price: 35000,
        je: 35000,
        style: "Filthy",
        clothes: "Shorts"
      },
      {
        make: "Porsche",
        sl: 1,
        price: 35000,
        je: 35000,
        style: "Dirty",
        clothes: "Padded"
      }
    ];
    this.rowSelection = 'multiple';

    this.navigateToNextCell = function navigateToNextCell(params) {
      console.log(params);
      switch (params.key) {
        case 40: { const newItem = createNewRowData();
          const res =  params.previousCellDef.column.gridApi.updateRowData({ add: [newItem] }); }
    }
   };
  }
  getRowData() {
    const icurrentRow = this.gridApi.getFocusedCell().rowIndex;
    this.gridApi.stopEditing();
    const rowNode = this.gridApi.getDisplayedRowAtIndex(icurrentRow);
    rowNode.setDataValue('je', rowNode.data['sl'] * rowNode.data['price']);
    const rowData = [];
    this.gridApi.forEachNode(function(node) {
      rowData.push(node.data);
    });
    console.log('Row Data:');
    console.log(rowData);
  }

  clearData() {
    this.gridApi.setRowData([]);
  }

  onAddRow() {
    var newItem = createNewRowData();
    var res = this.gridApi.updateRowData({ add: [newItem] });
    printResult(res);
  }

  addItems() {
    var newItems = [createNewRowData(), createNewRowData(), createNewRowData()];
    var res = this.gridApi.updateRowData({ add: newItems });
    printResult(res);
  }

  addItemsAtIndex() {
    var newItems = [createNewRowData(), createNewRowData(), createNewRowData()];
    var res = this.gridApi.updateRowData({
      add: newItems,
      addIndex: 2
    });
    printResult(res);
  }

  updateItems() {
    var itemsToUpdate = [];
    this.gridApi.forEachNodeAfterFilterAndSort(function(rowNode, index) {
      if (index >= 5) {
        return;
      }
      var data = rowNode.data;
      data.price = Math.floor(Math.random() * 20000 + 20000);
      itemsToUpdate.push(data);
    });
    var res = this.gridApi.updateRowData({ update: itemsToUpdate });
    printResult(res);
  }

  onInsertRowAt2() {
    var newItem = createNewRowData();
    var res = this.gridApi.updateRowData({
      add: [newItem],
      addIndex: 2
    });
    printResult(res);
  }

  onRemoveSelected() {
    var selectedData = this.gridApi.getSelectedRows();
    var res = this.gridApi.updateRowData({ remove: selectedData });
    printResult(res);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}

var newCount = 1;
function createNewRowData() {
  var newData = {
    make: "Toyota " + newCount,
    sl:  newCount,
    price: 35000 + newCount * 17,
    je: (35000 + newCount * 17) * newCount,
    style: "Little",
    clothes: "Airbag"
  };
  newCount++;
  return newData;
}
function printResult(res) {
  console.log("---------------------------------------");
  if (res.add) {
    res.add.forEach(function(rowNode) {
      console.log("Added Row Node", rowNode);
    });
  }
  if (res.remove) {
    res.remove.forEach(function(rowNode) {
      console.log("Removed Row Node", rowNode);
    });
  }
  if (res.update) {
    res.update.forEach(function(rowNode) {
      console.log("Updated Row Node", rowNode);
    });
  }

  const KEY_LEFT = 37;
  const KEY_UP = 38;
  const KEY_RIGHT = 39;
  const KEY_DOWN = 40;
}