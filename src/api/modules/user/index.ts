import { get } from '~/api/request'

export const fetchSelectEmployee = (params: ISelectEmployee) => get('/employee/listPage', params)
