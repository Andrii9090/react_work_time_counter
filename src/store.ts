import { create } from "zustand";
import config from "./config";

type WorkerStore = {
    token: string | null,
    records: WorkRecordList,
    filterDate: Date
    setRecords: (records: WorkRecordList) => void
    setFilterDate: (date: Date) => void
}

const useWorkerStore = create<WorkerStore>()((set) => ({
    token: localStorage.getItem(config.TOKEN_KEY),
    records: {
        items: {},
        total: 0,
        total_hours_str: ''
    },
    filterDate: new Date(),
    setFilterDate: (date: Date) => set({ filterDate: date }),
    setRecords: (records: WorkRecordList) => set({ records: records })

}))

export default useWorkerStore