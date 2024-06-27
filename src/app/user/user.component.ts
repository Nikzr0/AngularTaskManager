import { Component, Input, computed,  input, Output, EventEmitter, output} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
}) 

export class UserComponent {
  // decoratro approach
  @Input({required: true}) user! : User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>(); 
  //select = output<string>(); // under the hood it is the same as the commented line above

  imagePath = computed(() => {
  return 'assets/users/' + this.user.avatar;
  });

  // No matter which approach you use, the program will work the same way and it is easy to switch
  // avatar = input.required<string>();
  // name = input.required<string>();
 
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });
  

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
