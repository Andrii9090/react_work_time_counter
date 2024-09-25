import { useCallback } from "react"
import useWorkerStore from "../store"
import RecordRepository from "../repositoryes/record"
import config from "../config"
import { toast } from "react-toastify"

const useRecoords = () => {
    const { filterDate, setRecords, setFilterDate } = useWorkerStore()

    const getRecords = useCallback(() => {
        const month = filterDate.getMonth() + 1
        const lastDay = new Date(
            filterDate.getFullYear(),
            month,
            0
        ).getDate()
        const dateStart = `01-${month > 9 ? month : '0' + month
            }-${filterDate.getFullYear()}`
        const dateEnd = `${lastDay}-${month > 9 ? month : '0' + month
            }-${filterDate.getFullYear()}`

        const repository = new RecordRepository()
        repository
            .getRecords(dateStart, dateEnd)
            .then((res) => {
                if (res.error) {
                    toast(config.ERROR_MSG)
                } else {
                    setRecords(res.data!)
                }
            })
            .catch(() => {
                toast(config.ERROR_MSG)
            })
    }, [filterDate])

    const monthsClickHandler = useCallback((action: number) => {
        setFilterDate(
            new Date(filterDate.setMonth(filterDate.getMonth() + action))
        )
        getRecords()
    }, [filterDate])

    return {
        getRecords,
        monthsClickHandler
    }
}

export default useRecoords