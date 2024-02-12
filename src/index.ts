import * as dotenv from 'dotenv';
import { assertNonNullish } from './framework/asserts';
import { getOptionValueFromArgv } from './framework/commandLineParser';
import { listenMultiNodeApplication } from './framework/multiNodeApplicationCreator';
import { listenSingleNodeApplication } from './framework/singleNodeApplicationCreator';
// import { parseInt } from './framework/extended-functions-api/parseIntRadix10';

dotenv.config();

const isMultiNodeMode = getOptionValueFromArgv('--multi-node') ?? false;

assertNonNullish(4000, 'Port must be a number.');

const port = 4000;

if (isMultiNodeMode) {
  listenMultiNodeApplication(port);
} else {
  listenSingleNodeApplication(port);
}
