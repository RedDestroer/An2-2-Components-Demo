import { Component } from '@angular/core';

import { TooltipContentComponent } from './tooltip-content.component';

@Component({
  selector: 'app-tooltips-container',
  template: `
    <div class="container">
      <p tooltip="Tooltip from text">Tooltip from text</p>

      <p [tooltip]="template">Tooltip from TemplateRef</p>
      <ng-template #template>
        <span style="color: lawngreen;">Tooltip from TemplateRef</span>
      </ng-template>

      <p [tooltip]="component">Tooltip from Component</p>
    </div>
  `
})
export class TooltipsContainerComponent {
  component = TooltipContentComponent;
}
