import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-positioning',
  templateUrl: './positioning.component.html',
  styleUrls: ['./positioning.component.css']
})
export class PositioningComponent implements OnInit {
  @ViewChild('defaultPosition') defaultPosition: TemplateRef<any>;
  @ViewChild('left') leftSide: TemplateRef<any>;
  @ViewChild('right') rightSide: TemplateRef<any>;
  @ViewChild('center') center: TemplateRef<any>;
  @ViewChild('spaceBetween') spaceBetween: TemplateRef<any>;
  @ViewChild('spaceAround') spaceAround: TemplateRef<any>;
  @ViewChild('spaceEvenly') spaceEvenly: TemplateRef<any>;
  @ViewChild('top') top: TemplateRef<any>;
  @ViewChild('bottom') bottom: TemplateRef<any>;
  @ViewChild('alignCenter2') alignCenter2: TemplateRef<any>;
  @ViewChild('alignMultipleHorizontal') alignMultipleHorizontal: TemplateRef<any>;
  @ViewChild('alignMultipleVertical') alignMultipleVertical: TemplateRef<any>;
  @ViewChild('wrap') wrap: TemplateRef<any>;

  multipleElements = new FormControl('');
  wrapMultiple = new FormControl('');

  displayMultipleElements = false;
  lButtonColor = 'mat-primary';
  rButtonColor = 'mat-primary';
  cButtonColor = 'mat-primary';
  sbButtonColor = 'mat-primary';
  saButtonColor = 'mat-primary';
  seButtonColor = 'mat-primary';

  tButtonColor = 'mat-primary';
  bButtonColor = 'mat-primary';
  acButtonColor = 'mat-primary';

  chButtonColor = 'mat-primary';
  cvButtonColor = 'mat-primary';
  cicButtonColor = 'mat-primary';

  amhButtonColor = 'mat-primary';
  amvButtonColor = 'mat-primary';

  positionClass: string;
  positionJustifyClass: string;
  positionAlignClass: string;
  positionMultipleClass: string;
  positionTitle: string;
  positionJustifyTitle: string;
  positionAlignTitle: string;
  positionBottomTitle: string;
  positionJustifyClassRef: TemplateRef<any>;
  positionAlignClassRef: TemplateRef<any>;
  positionMultipleClassRef: TemplateRef<any>;
  showExplanation = false;
  explanation: string;

  justifyStart = 'Justify Left';
  justifyEnd = 'Justify Right';
  justifyCenter = 'Justify Center';
  alignStart = 'Align Top';
  alignEnd = 'Align Bottom';
  alignCenter = 'Align Center';

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.positionTitle = 'Default Position';
    this.positionJustifyClassRef = this.defaultPosition;
    this.positionClass = 'default-position';
  }

  onMultipleElements() {
    this.displayMultipleElements = this.multipleElements.value;
    if (this.multipleElements) {
      this.onAlignHorizontal();
    }
  }

  onLeft() {
    if (this.lButtonColor === '') {
      this.positionJustifyClassRef = this.defaultPosition;
      this.resetJustifyButtons();
      this.positionTitle = 'Default Position';
      this.positionClass = 'default-position';
      this.combinePositionClasses();
    } else {
      this.positionJustifyClassRef = this.leftSide;
      this.resetJustifyButtons();
      this.positionJustifyTitle = 'Justify Left';
      this.positionJustifyClass = 'justify-left';
      this.combinePositionClasses();
      this.lButtonColor = '';
      this.explanation = 'When "flex-direction" is "row" (default), use "justify-content" to position left, right or center. When "flex-direction" is "column", use "justify-content" to position top, bottom or center: flex-start, flex-end, center';
    }
  }

  onRight() {
    if (this.rButtonColor === '') {
      this.positionJustifyClassRef = this.defaultPosition;
      this.resetJustifyButtons();
      this.positionTitle = 'Default Position';
      this.positionClass = 'default-position';
      this.combinePositionClasses();
    } else {
      this.positionJustifyClassRef = this.rightSide;
      this.resetJustifyButtons();
      this.positionJustifyTitle = 'Justify Right';
      this.positionJustifyClass = 'justify-right';
      this.combinePositionClasses();
      this.rButtonColor = '';
      this.explanation = 'When "flex-direction" is "row" (default), use "justify-content" to position left, right or center. When "flex-direction" is "column", use "justify-content" to position top, bottom or center: flex-start, flex-end, center';
    }
  }

  onCenter() {
    if (this.cButtonColor === '') {
      this.positionJustifyClassRef = this.defaultPosition;
      this.resetJustifyButtons();
      this.positionTitle = 'Default Position';
      this.positionClass = 'default-position';
      this.combinePositionClasses();
    } else {
      this.positionJustifyClassRef = this.center;
      this.resetJustifyButtons();
      this.positionJustifyTitle = 'Justify Center';
      this.positionJustifyClass = 'justify-center';
      this.combinePositionClasses();
      this.cButtonColor = '';
      this.explanation = 'When "flex-direction" is "row" (default), use "justify-content" to position left, right or center. When "flex-direction" is "column", use "justify-content" to position top, bottom or center: flex-start, flex-end, center';
    }
  }

  onSpaceBetween() {
    if (this.sbButtonColor === '') {
      this.positionJustifyClassRef = this.defaultPosition;
      this.resetJustifyButtons();
      this.positionTitle = 'Default Position';
      this.positionClass = 'default-position';
      this.combinePositionClasses();
    } else {
      this.positionJustifyClassRef = this.spaceBetween;
      this.resetJustifyButtons();
      this.positionJustifyTitle = 'Space Between';
      this.positionJustifyClass = 'space-between';
      this.combinePositionClasses();
      this.sbButtonColor = '';
      this.explanation = 'When multiple elements, use "justify-content" to determine how they should use up the space: space-between, space-around, space-evenly';
    }
  }

  onSpaceAround() {
    if (this.saButtonColor === '') {
      this.positionJustifyClassRef = this.defaultPosition;
      this.resetJustifyButtons();
      this.positionTitle = 'Default Position';
      this.positionClass = 'default-position';
      this.combinePositionClasses();
    } else {
      this.positionJustifyClassRef = this.spaceAround;
      this.resetJustifyButtons();
      this.positionJustifyTitle = 'Space Around';
      this.positionJustifyClass = 'space-around';
      this.combinePositionClasses();
      this.saButtonColor = '';
      this.explanation = 'When multiple elements, use "justify-content" to determine how they should use up the space: space-between, space-around, space-evenly';
    }
  }

  onSpaceEvenly() {
    if (this.seButtonColor === '') {
      this.positionJustifyClassRef = this.defaultPosition;
      this.resetJustifyButtons();
      this.positionTitle = 'Default Position';
      this.positionClass = 'default-position';
      this.combinePositionClasses();
    } else {
      this.positionJustifyClassRef = this.spaceEvenly;
      this.resetJustifyButtons();
      this.positionJustifyTitle = 'Space Evenly';
      this.positionJustifyClass = 'space-evenly';
      this.combinePositionClasses();
      this.seButtonColor = '';
      this.explanation = 'When multiple elements, use "justify-content" to determine how they should use up the space: space-between, space-around, space-evenly';
    }
  }

  onTop() {
    if (this.tButtonColor === '') {
      this.positionAlignClassRef = this.defaultPosition;
      this.resetAlignButtons();
      this.positionTitle = 'Default Position';
      this.positionClass = 'default-position';
      this.combinePositionClasses();
    } else {
      this.positionAlignClassRef = this.top;
      this.resetAlignButtons();
      this.positionAlignTitle = 'Align Top';
      this.positionAlignClass = 'align-top';
      this.combinePositionClasses();
      this.tButtonColor = '';
      this.explanation = 'When "flex-direction" is "row" (default), use "align-items" to position top, bottom or center. When "flex-direction" is "column", use "align-items" to position left, right or center: flex-start, flex-end, center';
    }
  }

  onBottom() {
    if (this.bButtonColor === '') {
      this.positionAlignClassRef = this.defaultPosition;
      this.resetAlignButtons();
      this.positionTitle = 'Default Position';
      this.positionClass = 'default-position';
      this.combinePositionClasses();
    } else {
      this.positionAlignClassRef = this.bottom;
      this.resetAlignButtons();
      this.positionAlignTitle = 'Align Bottom';
      this.positionAlignClass = 'align-bottom';
      this.combinePositionClasses();
      this.bButtonColor = '';
      this.explanation = 'When "flex-direction" is "row" (default), use "align-items" to position top, bottom or center. When "flex-direction" is "column", use "align-items" to position left, right or center: flex-start, flex-end, center';
    }
  }

  onAlignCenter() {
    if (this.acButtonColor === '') {
      this.positionAlignClassRef = this.defaultPosition;
      this.resetAlignButtons();
      this.positionTitle = 'Default Position';
      this.positionClass = 'default-position';
      this.combinePositionClasses();
    } else {
      this.positionAlignClassRef = this.alignCenter2;
      this.resetAlignButtons();
      this.positionAlignTitle = 'Align Center';
      this.positionAlignClass = 'align-center';
      this.combinePositionClasses();
      this.acButtonColor = '';
      this.explanation = 'When "flex-direction" is "row" (default), use "align-items" to position top, bottom or center. When "flex-direction" is "column", use "align-items" to position left, right or center: flex-start, flex-end, center';
    }
  }

  onAlignHorizontal() {
    if (this.amhButtonColor === '') {
      this.positionMultipleClassRef = this.defaultPosition;
      this.resetBottomButtons();
      this.positionTitle = 'Default Position';
      this.positionClass = 'default-position';
      this.combinePositionClasses();
    } else {
      this.positionMultipleClassRef = this.alignMultipleHorizontal;
      this.resetBottomButtons();
      this.positionBottomTitle = 'Align Multiple Horizontally';
      this.positionMultipleClass = 'align-multiple-horizontal';
      this.combinePositionClasses();
      this.amhButtonColor = '';
      this.explanation = 'Use "flex-direction" for multiple elements to show in a row or a column';
    }
    this.justifyStart = 'Justify Left';
    this.justifyEnd = 'Justify Right';
    this.justifyCenter = 'Justify Center';
    this.alignStart = 'Align Top';
    this.alignEnd = 'Align Bottom';
    this.alignCenter = 'Align Center';
  }

  onAlignVertical() {
    if (this.amvButtonColor === '') {
      this.positionMultipleClassRef = this.defaultPosition;
      this.resetBottomButtons();
      this.positionTitle = 'Default Position';
      this.positionClass = 'default-position';
      this.combinePositionClasses();
    } else {
      this.positionMultipleClassRef = this.alignMultipleVertical;
      this.resetBottomButtons();
      this.positionBottomTitle = 'Align Multiple Vertically';
      this.positionMultipleClass = 'align-multiple-vertical';
      this.combinePositionClasses();
      this.amvButtonColor = '';
      this.explanation = 'Use "flex-direction" for multiple elements to show in a row or a column';
      this.justifyStart = 'Justify Top';
      this.justifyEnd = 'Justify Bottom';
      this.justifyCenter = 'Justify Center';
      this.alignStart = 'Align Left';
      this.alignEnd = 'Align Right';
      this.alignCenter = 'Align Center';
    }
  }

  onWrap() {
    this.combinePositionClasses();
    this.explanation = 'With multiple elements, use "flex-wrap" to determine what happens with smaller form factors: wrap, nowrap, wrap-reverse';
  }

  private resetJustifyButtons() {
    this.positionJustifyClass = '';
    this.positionJustifyTitle = '';
    this.lButtonColor = 'mat-primary';
    this.rButtonColor = 'mat-primary';
    this.cButtonColor = 'mat-primary';
    this.sbButtonColor = 'mat-primary';
    this.saButtonColor = 'mat-primary';
    this.seButtonColor = 'mat-primary';
  }

  private resetAlignButtons() {
    this.positionAlignClass = '';
    this.positionAlignTitle = '';
    this.tButtonColor = 'mat-primary';
    this.bButtonColor = 'mat-primary';
    this.acButtonColor = 'mat-primary';
  }

  private resetBottomButtons() {
    this.positionMultipleClass = '';
    this.positionBottomTitle = '';
    this.amhButtonColor = 'mat-primary';
    this.amvButtonColor = 'mat-primary';
  }

  private combinePositionClasses() {
    let singleClass = '';
    let singleTitle = '';

    if (this.positionJustifyClass && this.positionAlignClass) {
      singleClass = this.positionJustifyClass + ' ' + this.positionAlignClass;
      singleTitle = this.positionJustifyTitle + ' and ' + this.positionAlignTitle;
    } else if (this.positionJustifyClass) {
      singleClass = this.positionJustifyClass;
      singleTitle = this.positionJustifyTitle;
    } else if (this.positionAlignClass) {
      singleClass = this.positionAlignClass;
      singleTitle = this.positionAlignTitle;
    } else {
      singleClass = '';
      singleTitle = '';
    }

    if (singleClass && this.positionMultipleClass) {
      this.positionClass = singleClass + ' ' + this.positionMultipleClass;
      this.positionTitle = singleTitle + ' and ' + this.positionBottomTitle;
    } else if (singleClass) {
      this.positionTitle = singleTitle;
      this.positionClass = singleClass;
    } else if (this.positionMultipleClass) {
      this.positionTitle = this.positionBottomTitle;
      this.positionClass = this.positionMultipleClass;
    } else {
      this.positionTitle = 'Default Position';
      this.positionClass = 'default-position';
    }

    if (this.wrapMultiple.value) {
      this.positionClass = this.positionClass + ' ' + 'wrap';
    } else {
      this.positionClass = this.positionClass + ' ' + 'no-wrap';
    }
  }
}
