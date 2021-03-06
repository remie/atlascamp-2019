
import { default as Localhost } from './hosts/Localhost';
import { default as DefaultTimeperiod } from './timeperiods/DefaultTimeperiod';
import { Nagios, Include, NagiosCfg, HostObj, HostGroupObj } from '@remie/nagios-cli';

// Nagios configuration, CGI & Resources
import { cgi } from './cgi.cfg';
import { nagios as cfg } from './nagios.cfg';
import { resources } from './resources.cfg';

@Include(DefaultTimeperiod)
@Nagios(cfg, cgi, resources)
export default class DefaultNagiosConfiguration extends NagiosCfg {

  get hosts(): Array<HostObj|HostGroupObj> {
    return [
      Localhost
    ];
  }

}
