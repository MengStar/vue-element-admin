import request from '@/utils/request'

export function fetchMainData(query) {
  return request({
    url: '/dashboard/mainData',
    method: 'get',
    params: query
  })
}
export function fetchInviteData(query) {
  return request({
    url: '/dashboard/inviteData',
    method: 'get',
    params: query
  })
}
