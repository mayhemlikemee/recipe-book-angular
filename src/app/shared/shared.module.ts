import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinner } from "./loading-spinner/spinner.component";
import { PlaceHolderDirective } from "./placeholder/placeholder.directive";

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinner,
    PlaceHolderDirective,
    DropdownDirective],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    LoadingSpinner,
    PlaceHolderDirective,
    DropdownDirective,
    CommonModule
  ]
})
export class SharedModule {}
