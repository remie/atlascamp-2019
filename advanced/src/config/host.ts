
import { Host, HostObj, ServiceObj, ContactObj, ContactGroupObj, Include, Check } from '@remie/nagios-cli';
import { OK } from '../checks/OK';
import DefaultTimeperiod from './timeperiod';
import DefaultContact from './contact';

@Host({
  name: '000-generic-host',
  host_name: '000-generic-host',
  check_period: '24x7',
  check_interval: 5,
  retry_interval: 1,
  max_check_attempts: 5,
  notification_period: '24x7',
  notification_interval: 0,
  notification_options: 'd,r',
  notifications_enabled: true,
  event_handler_enabled: true,
  flap_detection_enabled: true,
  process_perf_data: true,
  retain_status_information: true,
  retain_nonstatus_information: false,
  register: false
})
@Include(DefaultTimeperiod)
export class DefaultHost extends HostObj {
  check_command: Check = new OK();
  contacts: Array<ContactObj|ContactGroupObj> = [ DefaultContact ];
}

export default new DefaultHost();