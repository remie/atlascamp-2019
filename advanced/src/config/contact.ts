
import { Notify } from '../checks/Notify';
import { Contact, ContactObj, Include, Check } from '@remie/nagios-cli';
import DefaultTimeperiod from './timeperiod';

@Contact({
  contact_name: 'nagiosadmin',
  alias: 'Nagios Administrator',
  service_notification_period: '24x7',
  host_notification_period: '24x7'
})
@Include(DefaultTimeperiod)
export class DefaultContact extends ContactObj {

  service_notification_commands: Check = new Notify('Hi from Nagios!');
  host_notification_commands: Check = new Notify('Hi from Nagios!');

}

export default new DefaultContact();