import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-file',
  template: `
    <div class="upload-wrapper">
      <div class="file-container">
        <div class="file" *ngFor="let file of selectedFiles; let i = index">
          <span (click)="onDelete(i)">X</span>
          <p>{{ getFileName(file) }}</p>
        </div>
      </div>
      <div class="upload-container" (click)="openFileInput()">
        <div class="mask"></div>
        <div class="helper-text">
          <div class="absolute-div">
            <div>Upload {{ field.props.label }}</div>
          </div>
        </div>
        <input
          #fileinput
          [multiple]="field.templateOptions.multiple"
          id="file-input"
          type="file"
          [formControl]="formControl"
          [formlyAttributes]="field"
          (change)="onChange($event)"
          [accept]="field.props.type"
          style="display: none"
        />
      </div>
    </div>
  `,
  styleUrls: ['./file-type.component.css'],
})
export class FormlyFieldFile extends FieldType implements OnInit {
  @ViewChild('fileinput') el: ElementRef;
  selectedFiles: File[];
  constructor(public sanitizer: DomSanitizer) {
    super();
  }
  ngOnInit(): void {}
  openFileInput() {
    this.el.nativeElement.click();
  }
  onDelete(index) {
    // this.formControl.reset();
    // console.log(this.selectedFiles);
    this.selectedFiles.splice(index, 1);

    this.formControl.patchValue(this.selectedFiles);
    // console.log('Form Control Value', this.formControl.value);
  }
  onChange(event) {
    this.selectedFiles = Array.from(event.target.files);
    // console.log(this.selectedFiles);
  }

  getSanitizedImageUrl(file: File) {
    return this.sanitizer.bypassSecurityTrustUrl(
      window.URL.createObjectURL(file)
    );
  }

  getFileName(file: File) {
    return file.name;
  }
  // isImage(file: File): boolean {
  //   return /^image\//.test(file.type);
  // }
}
