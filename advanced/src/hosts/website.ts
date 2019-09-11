
import { injectable } from 'inversify';
import { Use } from '@remie/nagios-cli';
import { HTTP } from '../checks/HTTP';
import { Service } from '../lib/Service';
import HostTemplate, { DefaultHost } from '../config/host';

@Use(HostTemplate)
@injectable()
export class Website extends DefaultHost {

  constructor(name: string, address: string) {
    super();

    this.name = name;
    this.host_name = name;
    this.address = address;

    this.services = [
      new Service('Availablility', new HTTP(this.address))
    ];
  }
}

