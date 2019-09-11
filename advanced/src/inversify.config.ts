import 'reflect-metadata';
import { Container } from 'inversify';
import { HostObj } from '@remie/nagios-cli';
import { Website } from './hosts/website';

export const container = new Container();

container.bind<HostObj>(HostObj).toConstantValue(
  new Website('Atlassian Marketplace', 'https://marketplace.atlassian.com')
);

container.bind<HostObj>(HostObj).toConstantValue(
  new Website('AtlasCamp 2019', 'https://atlassian.com/atlascamp')
);