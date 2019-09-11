
import { Check, CheckResult, NagiosResult } from '@remie/nagios-cli';

export class OK implements Check {

  async execute(): Promise<CheckResult> {
    return {
      message: `OK`,
      code: NagiosResult.OK
    };
  }
}