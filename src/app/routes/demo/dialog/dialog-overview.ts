import {Component, Inject} from "@angular/core";

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
    selector: 'dialog-overview',
    templateUrl: 'dialog-overview.html',
})
export class DialogOverview {

    constructor(public dialogRef: MatDialogRef<DialogOverview>,
                @Inject(MAT_DIALOG_DATA) public data: any) {

    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
