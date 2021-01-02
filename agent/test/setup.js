const mt = require('moment-timezone')
const moment = require('moment')

moment.tz.setDefault('Asia/Shanghai')

jest.mock('rc-animate', () => props => props.children)
