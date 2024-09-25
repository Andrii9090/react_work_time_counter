import { useCallback, useState } from "react"
import RecordRepository from "../repositoryes/record"
import config from "../config"
import { toast } from "react-toastify"


const formatTimer = (timer: TimerType) => {
    if (timer.seconds >= 60) {
        timer.seconds = 0
        timer.minutes++
    }
    if (timer.minutes >= 60) {
        timer.minutes = 0
        timer.hours++
    }
    return { ...timer }
}

let interval: number | undefined

const timerInit: TimerType = { hours: 0, minutes: 0, seconds: 0 }

const useCronometer = () => {
    const [isWorking, setIsWorking] = useState(false)
    const [timer, setTimer] = useState<TimerType>(timerInit)

    const startHandler = useCallback(
        (isRestart = false) => {
            const repoository = new RecordRepository()
            if (isWorking) {
                repoository.finishWork()
                    .then(() => {
                        stopTimer()
                    })
                    .catch(() => toast(config.ERROR_MSG))
            } else {
                repoository.startWork()
                    .then(() => {
                        startTimer(isRestart)
                    })
                    .catch(() => toast(config.ERROR_MSG))
            }
        },
        [isWorking]
    )

    const stopTimer = useCallback(() => {
        clearInterval(interval)
        setIsWorking(false)
    }, [])

    const startTimer = useCallback((isRestart = false) => {
        setIsWorking(true)
        if (isRestart) {
            setTimer(timerInit)
        }
        let timeStart = new Date().getTime()
        interval = setInterval(() => {
            const diff = new Date().getTime() - timeStart
            if (diff >= 1000) {
                timeStart = new Date().getTime()
                setTimer((prev) => {
                    prev.seconds++
                    return formatTimer(prev)
                })
            }
        }, 100)
    }, [])

    const getCronometer = () => {
        const repository = new RecordRepository()
        repository.getChronometer()
            .then((data) => {
                if (data.error && data.msg !== 'User is not working') {
                    toast(config.ERROR_MSG)
                }
                if (!data.error) {
                    setTimer(data.data!)
                    startTimer()
                }
            })
            .catch(() => {
                toast(config.ERROR_MSG)
            })

    }

    return {
        timer,
        startHandler,
        isWorking,
        setTimer,
        getCronometer,
        startTimer
    }
}

export default useCronometer