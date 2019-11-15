import { Component, OnInit } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
    selector: 'app-listing-form',
    templateUrl: './listing-form.component.html',
    styleUrls: ['./listing-form.component.css']
})
export class ListingFormComponent implements OnInit {
    uploader: FileUploader;
    hasBaseDropZoneOver: boolean = false;
    hasAnotherDropZoneOver:boolean;
    response:string;
    date: Date;
    public staticList = [
        "guitar",
        "drums",
        "bass",
        "electric guitars",
        "keyboards",
        "mic",
        "bass guitars",
        "trumpet",
        "horns",
        "guitar workshops",
        "pedals"
    ];
    feature: string = '';


    constructor() {
        this.date = new Date();
        this.fileUpload();
    }

    ngOnInit() {
    }

    handleStaticResultSelected(result) {
        this.feature = result;
    }

    fileChange(e: any) {
        console.log('this.uploader');
    }

    fileOverBase(e: any) :void {
        // this.hasBaseDropZoneOver = e;
        // if (!this.hasBaseDropZoneOver) {
        //     console.log(this.uploader);
        // }
        console.log('this.uploader');
    }
    private fileUpload() {
        this.uploader = new FileUploader({url: URL});
        this.uploader.onBeforeUploadItem = (item) => {
            item.withCredentials = false;
        };
        this.uploader.onSuccessItem = (item, response) => {

        };
    }
}
