import request from '@/utils/request'

export default {
  createNative(orderId) {
    return request({
    url: `/api/order/weixin/createNative/${orderId}`,
    method: 'get'
    })
  },
  queryPayStatus(orderId) {
    return request({
        url: `/api/order/weixin/queryPayStatus/${orderId}`,
        method: 'get'
    })
}
}
