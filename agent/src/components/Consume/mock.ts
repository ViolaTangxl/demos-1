// TODO
// 接口联调后删除
export function getMockData() {
  const data: any[] = []
  for (let i = 0; i < 20; i++) {
    data.push({
      key: `${i + 1}`,
      name: '小牛科技公司',
      email: 'jiayizhen@qiniu.com',
      month: 1609567288351,
      money: 77000
    })
  }

  return data
}
