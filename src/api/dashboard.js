import request from '@/utils/request'

export function fetchChartData(query) {
  return request({
    url: '/dashboard/charData',
    method: 'get',
    params: query
  })
}
