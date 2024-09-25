import { useEffect } from 'react'
import useRecoords from '../hooks/useRecords'
import useWorkerStore from '../store'
import { Chronometer } from './Chronometer'
import { RecordFilters } from './RecordFilters'
import { RecordsList } from './RecordsList'

export const Worker = () => {
    const records = useWorkerStore((state) => state.records)
    const { getRecords } = useRecoords()
    useEffect(() => getRecords(), [])

    return (
        <div className="flex w-full flex-col items-center">
            <Chronometer />
            <div className="flex flex-col mt-5 w-full justify-center">
                <RecordFilters />
                {records.items && <RecordsList records={records} />}
            </div>
        </div>
    )
}
