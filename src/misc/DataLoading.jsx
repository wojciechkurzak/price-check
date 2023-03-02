import {useEffect, useRef} from 'react'
import './DataLoading.scss'

const DataLoading = () => {
    const canvasRefExternal = useRef(null)
    const canvasRefInternal = useRef(null)


    useEffect(() => {
        const canvasExternal = canvasRefExternal.current.getContext('2d')
        const canvasInternal = canvasRefInternal.current.getContext('2d')
        canvasDraw(canvasExternal, 45, 0, 0.5 * Math.PI, '#FFFFFF')
        canvasDraw(canvasExternal, 45, 1 * Math.PI, 1.5 * Math.PI, '#FFFFFF')
        canvasDraw(canvasInternal, 32, 0.5 * Math.PI, 1 * Math.PI, '#00CC99')
        canvasDraw(canvasInternal, 32, 1.5 * Math.PI, 2 * Math.PI, '#00CC99')
    }, [])

    const canvasDraw = (canvas, radius, startAngle, endAngle, color) => {
        canvas.lineWidth = 6

        canvas.beginPath()
        canvas.arc(50, 50, radius, startAngle, endAngle)
        canvas.lineCap = 'round'
        canvas.strokeStyle = color
        canvas.filter = `drop-shadow(0px 0px 3px ${color})`
        canvas.stroke()
        canvas.closePath()
    }

    return (
        <div className='dataLoading'>
            <div className='canvasAnimation'>
                <canvas ref={canvasRefExternal} className='canvasExternal' width='100px' height='100px'></canvas>
                <canvas ref={canvasRefInternal} className='canvasInternal' width='100px' height='100px'></canvas>
            </div>
            
            <p>Loading data</p>
        </div>
    )
}

export default DataLoading