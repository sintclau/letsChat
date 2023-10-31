const harperive = require('harperive');

const DB_CONFIG = {
  harperHost: 'http://130.162.54.243:9926',
  username: 'clausp',
  password: 'ro1SP5_^Y1#}',
};

const Client = harperive.Client;
const db = new Client(DB_CONFIG);

export default db;