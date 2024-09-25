import config from "../config"
import { ResponseBody } from "./user"
import BaseRepository from "./base"

class RecordRepository extends BaseRepository {
    async getChronometer() {
        return this.api.get<ResponseBody<{ hours: number, minutes: number, seconds: number }>>(config.BASE_URL + '/workers/records/chronometer')
            .then(data => data.data
            )
    }

    async getRecords(dateStart: string, dateEnd: string): Promise<ResponseBody<WorkRecordList>> {
        return this.api.post<ResponseBody<WorkRecordList>>(config.BASE_URL + '/workers/records', { start: dateStart, end: dateEnd })
            .then(data => {
                return data.data
            })
    }

    async startWork() {
        return this.api.get<ResponseBody<{ error: boolean }>>(config.BASE_URL + '/workers/records/start')
            .then(data => data.data)
    }

    async finishWork() {
        return this.api.get<ResponseBody<{ error: boolean }>>(config.BASE_URL + '/workers/records/finish')
            .then(data => data.data)
    }
}

export default RecordRepository