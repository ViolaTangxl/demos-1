// TODO
// 接口联调后删除
export function getMockData() {
  const data: any[] = []
  for (let i = 0; i < 20; i++) {
    data.push({
      key: `${i + 1}`,
      name: '小牛科技公司',
      email: 'jiayizhen@qiniu.com',
      identity: '未认证',
      owe: Math.random() < 0.5 ? 1 : 0,
      current_expense: 77000,
      last_expense: 770000,
      total: 7700000,
      time: 1609567288351
    })
  }

  return data
}
