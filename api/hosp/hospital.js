import request from '@/utils/request'
const api_name = `/api/hosp/hospital`
export default {
  getPageList(page, limit, searchObj) {
    return request({
        url: `${api_name}/${page}/${limit}`,
        method: 'GET',
        params: searchObj
    })
  },
  getByHosname(hosname) {
    return request({
        url: `${api_name}/findByHosname/${hosname}`,
        method: 'GET'
    })
  },
  show(hoscode) {
    return request({
        url: `${api_name}/${hoscode}`,
        method: 'GET'
    })
  },
  findDepartment(hoscode) {
      return request({
          url: `${api_name}/department/${hoscode}`,
          method: 'GET'
      })
  },
  getBookingScheduleRule(page, limit, hoscode, depcode) {
    return request({
        url: `${api_name}/auth/getBookingScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
        method: 'get'
    })
  },
      
  findScheduleList(hoscode, depcode, workDate) {
      return request({
          url: `${api_name}/auth/findScheduleList/${hoscode}/${depcode}/${workDate}`,
          method: 'get'
      })
  },
  getSchedule(id) {
    return request({
      url: `${api_name}/getSchedule/${id}`,
      method: 'get'
    })
  }    
}
