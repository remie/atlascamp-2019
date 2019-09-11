import { container } from './inversify.config';

import Timeperiod from './config/timeperiod';
import { Nagios, Include, NagiosCfg, HostObj, HostGroupObj } from '@remie/nagios-cli';

// Nagios configuration, CGI & Resources
import cgi from './config/cgi.cfg';
import cfg from './config/nagios.cfg';
import resources from './config/resources.cfg';

@Include(Timeperiod)
@Nagios(cfg, cgi, resources)
export default class extends NagiosCfg {

  get hosts(): Array<HostObj|HostGroupObj> {
    return container.getAll<HostObj>(HostObj);
  }

}
