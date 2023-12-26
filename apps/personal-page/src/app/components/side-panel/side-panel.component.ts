import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'vt-side-panel',
  templateUrl: './side-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidePanelComponent {
}
