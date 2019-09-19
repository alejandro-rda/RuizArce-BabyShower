import { AbstractControl } from '@angular/forms';
import {Participant} from './participant';
import {DialogOverviewComponent} from './app.component';

export function RequireMatch(control: AbstractControl) {
  let selection: any = control.value;
  const lstParticipant = Participant.participants;
  lstParticipant.filter(xi => {
    if (xi.name === selection) {
      selection = new Participant(selection);
      return null;
    }
  });

  if (typeof selection === 'string') {
    return { incorrect: true };
  }
  return null;
}
