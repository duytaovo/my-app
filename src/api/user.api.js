import http from 'src/utils/http'

const URL = 'user'

const useApi = {
  updateMe(data) {
    return http.put(`${URL}`, data)
  }
}
export default useApi
