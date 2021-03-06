// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// [START compute_engine_quickstart]
async function createVM(
  vmName = 'new_virtual_machine' // VM name of your choice
) {
  // Imports the Google Cloud client library
  const Compute = require('@google-cloud/compute');

  // Creates a client
  const compute = new Compute();

  // Create a new VM using the latest OS image of your choice.
  const zone = compute.zone('us-central1-c');

  // Start the VM create task
  const [vm, operation] = await zone.createVM(vmName, {os: 'ubuntu'});
  console.log(vm);

  // `operation` lets you check the status of long-running tasks.
  await operation.promise();

  // Complete!
  console.log('Virtual machine created!');
}
// [END compute_engine_quickstart]

createVM(...process.argv.slice(2)).catch(console.error);
