import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleHooksComponent } from './lifecycle-hooks.component';
import { HooksListComponent } from './hooks-list/hooks-list.component';

@NgModule({
  declarations: [LifecycleHooksComponent, HooksListComponent],
  imports: [CommonModule],
})
export class LifecycleHooksModule {}
