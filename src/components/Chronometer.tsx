import { useEffect } from 'react'
import useCronometer from '../hooks/useCronometer'

const formatTimes = (timeUnit: number) => {
    if (timeUnit <= 9) {
        return '0' + timeUnit
    }
    return timeUnit.toString()
}
export const Chronometer = () => {
    const { timer, getCronometer, startHandler, isWorking } = useCronometer()
    useEffect(() => {
        getCronometer()
    }, [])
    return (
        <div className="mt-2 flex flex-col bg-green-50 w-4/5 border rounded-md p-3 border-slate-200 justify-center items-center ">
            <div className="flex mb-2">
                <span className="text-xl">{formatTimes(timer.hours)}</span>
                <span className="text-xl">:</span>
                <span className="text-xl">{formatTimes(timer.minutes)}</span>
                <span className="text-xl">:</span>
                <span className="text-xl">{formatTimes(timer.seconds)}</span>
            </div>
            <button
                className={`${
                    isWorking ? 'bg-orange-700' : 'bg-teal-900'
                } text-white p-2 rounded-md w-full transition-colors`}
                onClick={() => startHandler(true)}
            >
                {isWorking ? 'Finalizar' : 'Empezar'}
            </button>
        </div>
    )
}
