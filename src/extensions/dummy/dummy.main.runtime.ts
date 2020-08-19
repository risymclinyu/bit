import { DummyAspect } from './dummy.aspect';
import { DumCmd } from './dum.cmd';
import { CLIAspect, MainRuntime } from '../cli/cli.aspect';
import { CLIMain } from '../cli';

export class DummyMain {
  static runtime = MainRuntime;

  static dependencies = [CLIAspect];

  static async provider([cli]: [CLIMain]) {
    cli.register(new DumCmd());
    return new DummyMain();
  }
}

DummyAspect.addRuntime(DummyMain);
